<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\Project;
use App\Model\User;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Input;

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
    protected $access;
    public function __construct()
    {
        $this->access= array('administrator','supervisor','leader');
        $this->project = new Project();
        $this->user = new User();
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

    public function issue()
    {
        $data['create']=false;
        if(in_array($this->authdata->position,$this->access)){
            $data['create']=true;
        }
        $data['activer'] = array($this->activer, 'issue');
        $data['projects'] = $this->project->getProject();
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
        return $request->all();
    }

    public function history()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'history');
        return view('project', $data);
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