<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Model\Page;
use Illuminate\Http\Request;
use App\Model\Project;
use App\Model\User;
use App\Model\Company;
use App\Model\Issue;
use App\Model\Service;
use App\Model\Invoice;
use App\Model\Action_log;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

/**
 * Class ProjectController
 * @package App\Http\Controllers
 */
class ProjectController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $activer;
    protected $authdata;
    protected $project;
    protected $client;
    protected $invoice;
    protected $user;
    protected $company;
    protected $issue;
    protected $service;
    protected $page;
    protected $access;
    protected $action_log;
    public function __construct()
    {
        $this->access= array('administrator','supervisor','leader');
        $this->project = new Project();
        $this->client = new Client([
            'base_uri' => 'https://build.phonegap.com/api/v1/',
            'auth' => ['mail@dedenbangkit.com','Jalanremaja1208'],
            ['connect_timeout' => 6000]
        ]);

        $this->user = new User();
        $this->company = new Company();
        $this->invoice = new Invoice();
        $this->issue = new Issue();
        $this->service = new Service();
        $this->page = new Page();
        $this->action_log = new Action_log();
        $this->authdata = $this->authData();
        $this->activer = 'file';
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */

    public function project()
    {
        $data['create']=false;
        if(in_array($this->authdata->position,$this->access)){
            $data['create']=true;
        }
        $data['activer'] = array($this->activer, 'project');
        if($this->authdata->position == 'admin'){
            $data['projects'] = $this->project->getProject();
            return view('project', $data);
        }else{
            $data['projects'] = $this->project->getProjectById($this->authdata->project_id);
            return view('project-clients', $data);
        }
    }

    public function createProject()
    {
        $data['activer'] = array($this->activer, 'project');

        return view('create_project', $data);
    }

    public function createProjectProcess(Request $request)
    {
        if (!empty($request->file('cover'))) {
            Image::make(Input::file('cover'))->resize(300, 200)->save('img/projects/' . $request->file('cover')->getClientOriginalName());
        }
        $datainput = array(
            'companyname'=>$request->companyname,
            'companyphone'=>$request->companyphone,
            'companyemail'=>$request->companyemail,
            'name' => $request->name,
            'cover' => $request->file('cover')->getClientOriginalName(),
            'master' => $this->authdata->id,
            'key' => mt_rand(111111,999999),
        );
        $company_id=$this->company->insertCompany($datainput);
        $this->project->insertProject($datainput,$company_id);
        return redirect('/projects');
    }

    public function issue(Request $request)
    {
        if(in_array($this->authdata->position,$this->access)){
            $data['buttonAccess']='true';
        }else{
            $data['buttonAccess']='false';
        }

        $data['create']=false;
        if(in_array($this->authdata->position,$this->access)){
            $data['create']=true;
        }
        $data['activer'] = array($this->activer, 'issue');
        $data['projects'] = $this->issue->getIssue($this->authdata->project_id);
        return view('issue', $data);
    }

    public function createIssue()
    {
        $data['users']=  $this->user->getUser();
        $data['activer'] = array($this->activer, 'issue');
        return view('create_issue', $data);
    }

    public function createIssueProcess(Request $request)
    {
        $request->session()->get('project_id');
        $cover=null;
        if(!empty($request->file('cover')) && $request->file('cover')->isValid()){
            $cover=$request->file('cover').'.'.$request->file('cover')->clientExtension();
            $request->file('cover')->move('img/projects/tmp',$cover);
        };
        $data=array(
            'name'=>$request->name,
            'cover'=>$cover,
            'master'=>$this->authdata->id,
            'project_id'=>$this->authdata->project_id
        );
        $issue_id=$this->issue->insertIssue($data);
        $pagename=$request->pagename ;
        foreach($pagename as $i=>$row){
            $team = array($this->authdata->id);
            array_push($team,$request->team[$i]);
            if(!empty($row)){
                $name=$row;
            }else{
                $name= 'page '.($i+1);
            }
            $dataPage=array(
                'issue'=>$issue_id,
                'name'=>$name,
                'team'=>$team,
                'description'=>$request->description[$i]
            );
            $this->page->insertPage($dataPage);
        };
        $this->action_log->create_log('Creating Issue '.$request->name,$this->authdata->id);
        return redirect('/issue');
    }
    public function deleteIssueProcess(Request $request){
        $deletingIssue=$this->issue->deleteIssue($request->id);
        return $deletingIssue;
    }
    public function publishIssueProcess(Request $request){
        $publish_auth=$this->project->getProjectById($this->authdata->project_id);
        $count_issue=count($this->issue->getIssue($this->authdata->project_id));
        $message='Success To Publish Issue '.$request->name;
        $publish=true;
        switch ($publish_auth[0]['service_id']) {
            case 1:
                if($count_issue < $publish_auth[0]['number_of_issue']){
                    $publish=false;
                    $message='Exceed Issue Limit';
                }
                break;
            case 3:
                if($count_issue < $publish_auth[0]['number_of_issue']){
                    $publish=false;
                    $message='Exceed Issue Limit';
                }
                break;
            case 4:
                if($count_issue < $publish_auth[0]['number_of_issue']){
                    $publish=false;
                    $message='Exceed Issue Limit';
                }
                break;
            default:
                $message='Success To Publish Issue '.$request->name;
                $datainvoice=array(
                  'company_id' => $publish_auth[0]['company_id'],
                    'project_id' => $publish_auth[0]['id'],
                    'service_id' => $publish_auth[0]['service_id'],
                    'nominal' => $publish_auth[0]['service_price'],

                );
                $this->invoice->insertInvoice($datainvoice);
                $publish=true;

        }
        if($publish){
            $publishIssue=$this->issue->publishIssue($request->id);
            $issues=$this->page->getPageIssue($request->session()->get('issue-editor'));
            $this->action_log->create_log('Publish Issue '.$issues['issue_name'],$this->authdata->id);
        }

        return $message;
    }
    public function history()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'history');
        $data['list']= $this->action_log->getHistory($this->authdata->id);
        return view('history-list', $data);
    }

    public function review()
    {
        $data['activer'] = array($this->activer, 'review');
        return view('project', $data);
    }

    public function published()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'published');
        $data['projects'] = $this->issue->getProjectPublish();

        return view('project', $data);
    }
}
