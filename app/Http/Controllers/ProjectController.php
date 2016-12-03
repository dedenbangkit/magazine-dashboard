<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;

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
    protected $activer ;
    public function __construct()
    {
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
        print_r($data['activer']);
        return view('project',$data);
    }
    public function issue()
    {
        $data['activer']=array($this->activer,'issue');
        return view('project',$data);
    }
}