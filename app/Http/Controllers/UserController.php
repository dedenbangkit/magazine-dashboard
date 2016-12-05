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
    public function __construct()
    {
        $this->activer = 'user';
        $this->user = new User();
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function showRegistrationForm()
    {
        $data['activer']=array($this->activer,'Registration');
        return view('register',$data);
    }
    public function registrationProcess(Request $request){
        $this->user->insertUser($request->all());
        return $request->all();

    }
}