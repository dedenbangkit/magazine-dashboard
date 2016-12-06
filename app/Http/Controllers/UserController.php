<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\User;
use Validator;

/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $activer;
    protected $user;
    protected $authdata;
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer = 'user management';
        $this->user = new User();
        $this->middleware('auth');
    }

    /**
     * Show registration form.
     *
     * @return Response
     */
    public function showRegistrationForm()
    {
        $data['activer']=array($this->activer,'add user');
        return view('register',$data);
    }
    /**
     * processing registering new member.
     *
     * @return redirect to user page
     */
    public function registrationProcess(Request $request){
        $this->user->insertUser($request->all());
        return redirect('/user');

    }
    /**
     * Show the user management page.
     *
     * @return Response
     */
    public function showUser(){
        $data['access']=$this->authdata->position;
        $data['activer']=array($this->activer,'user');
        $data['user']=$this->user->getUser();
        return view('user-list',$data);
    }
}