<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\User;
use App\Model\Action_log;
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
    protected $action_log;
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer = 'user management';
        $this->user = new User();
        $this->action_log = new Action_log();
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
        var_dump($this->authdata->id);
        $this->action_log->create_log('Creating User '.$request->name.' position '.$request->position,$this->authdata->id);
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
        return view('user-list',$data);
    }
    /**
     * Show the user list response.
     *
     * @return Response
     */
    public  function userList(){
        $data['data']=$this->user->getUser();
        return $data;
    }
    /**
     *response to remove user.
     *
     * @return Response
     */
    public function removeUser(Request $request){
       $status= $this->user->removeUser($request->id);
        if($status){
            $status_message='Success to remove '.$request->name;
            $this->action_log->create_log('Remove User '.$request->name,$this->authdata->id);
        }else{
            $status_message='Failed to remove '.$request->name;
        }
        return $status_message;
    }
    /**
     *response to remove user.
     *
     * @return Response
     */
    public function changeUserPassword(Request $request){
        $status=$this->user->changeUserPassword($request->id,$request->password);
        if($status){
            $status_message='Success to change '.$request->name.' password';
            $this->action_log->create_log('Change User '.$request->name.' Password',$this->authdata->id);
        }else{
            $status_message='Failed to change '.$request->name.' password';
        }
        return $status_message;
    }
}