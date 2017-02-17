<?php

namespace App\Http\Controllers;


use App\Http\Requests;
use App\Model\Company;
use App\Model\Page;
use Illuminate\Http\Request;
use App\Model\Project;
use App\Model\User;
use App\Model\Issue;
use App\Model\Action_log;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
class SubscribeController extends Controller
{
    protected $activer;
    protected $authdata;
    protected $project;
    protected $company;
    protected $user;
    protected $issue;
    protected $page;
    protected $access;
    protected $action_log;
    public function __construct()
    {
        $this->access= array('administrator','supervisor','leader');
        $this->project = new Project();
        $this->company = new Company();
        $this->user = new User();
        $this->issue = new Issue();
        $this->page = new Page();
        $this->action_log = new Action_log();
        $this->authdata = $this->authData();
        $this->activer = 'subscribe';
        $this->middleware('auth');
    }

    //
    /**
     * Show add client form.
     *
     * @return Response
     */
    public function showFormSubscribe()
    {
        $data['activer']=array($this->activer,'add subscriber');
        return view('new-subscribe',$data);
    }
    /**
     * Show add clientprocess.
     *
     * @return Reditrect to dashboard
     */
    public function subscribeProcessAdd(Request $request){
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        if (!empty($request->file('cover'))) {
            Image::make(Input::file('cover'))->resize(300, 200)->save('img/projects/' . $request->file('cover')->getClientOriginalName());
            $cover=$request->file('cover')->getClientOriginalName();
        }else{
            $cover=$project_data[0]['project_cover'];
        }
        $datainput = array(
            'name' => $request->projectname,
            'cover' => $cover,
            'master' => $this->authdata->id,
            'key' => mt_rand(111111,999999),
        );
        $project_id = $this->project->insertProject($datainput);
        $this->user->insertUser($request->all(),$project_id);
        return redirect('/projects');
    }
    public function subscribeProcessUpdate(Request $request){
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        if (!empty($request->file('cover'))) {
            Image::make(Input::file('cover'))->resize(300, 200)->save('img/projects/' . $request->file('cover')->getClientOriginalName());
            $cover=$request->file('cover')->getClientOriginalName();
        }else{
            $cover=$project_data[0]['project_cover'];
        }
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        $datainput = array(
            'name' => $request->projectname,
            'company_name'=> $request->companyname,
            'cover' => $cover,
            'phone'=>$request->companyphone,
            'company_id'=>$project_data[0]['company_id'],
            'project_id'=>$this->authdata->project_id,
            'master' => $this->authdata->id,
        );
        $this->project->updateProject($datainput);
        $this->company->updateCompany($datainput);
        return redirect('/projects');
    }
    public function showClient(){
        $data['access']=$this->authdata->position;
        $data['activer']=array($this->activer,'Client');
        return view('client-list',$data);
    }
    public  function clientList(){
        $data['data']=$this->user->getUserClient();
        return $data;
    }

}
