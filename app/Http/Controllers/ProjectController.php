<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\Project;
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
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer='file';
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */

    public function project()
    {
        $data['activer']=array($this->activer,'project');

        return view('project',$data);
    }
    public function createProject(){
        $data['activer']=array($this->activer,'project');
        return view('create_project',$data);
    }
    public function issue()
    {
        $data['activer']=array($this->activer,'issue');
        return view('project',$data);
    }
    public function history()
    {
        $data['activer']=array($this->activer,'history');
        return view('project',$data);
    }
    public function review()
    {
        $data['activer']=array($this->activer,'review');
        return view('project',$data);
    }
    public function published()
    {
        $data['activer']=array($this->activer,'published');
        return view('project',$data);
    }
}