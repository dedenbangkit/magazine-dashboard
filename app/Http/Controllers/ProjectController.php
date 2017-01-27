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
use App\Model\Issue;
use App\Model\Action_log;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
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
    protected $user;
    protected $issue;
    protected $page;
    protected $access;
    protected $action_log;
    public function __construct()
    {
        $this->access= array('administrator','supervisor','leader');
        $this->project = new Project();
        $this->user = new User();
        $this->issue = new Issue();
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
        $data['projects'] = $this->project->getProject();
        return view('project', $data);
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
            'name' => $request->name,
            'cover' => $request->file('cover')->getClientOriginalName(),
            'master' => $this->authdata->id,
            'key' => mt_rand(111111,999999),
        );
        $this->project->insertProject($datainput);
        return redirect('/projects');
    }

    public function issue(Request $request)
    {
        if(empty($request->session()->get('project_id'))){
            if(empty($request->id)){
                return redirect('/projects');
            }else{
                $request->session()->put('project_id', $request->id);
            }
        }else{
            if(!empty($request->id)){
                if($request->id != $request->session()->get('project_id') ){
                    $request->session()->put('project_id', $request->id);
                }
            }
        }
        $data['create']=false;
        if(in_array($this->authdata->position,$this->access)){
            $data['create']=true;
        }
        $data['activer'] = array($this->activer, 'issue');
        $data['projects'] = $this->issue->getIssue($request->session()->get('project_id'));
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
            'project_id'=>$request->session()->get('project_id')
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
        $data['projects'] = $this->project->getProjectPublish();
        return view('project', $data);
    }
}