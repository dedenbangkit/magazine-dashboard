<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Model\User;
use Illuminate\Support\Facades\Auth;

class MobileApiController extends Controller
{
    protected $user;
    //
    public function __construct()
    {
        $this->user= new User();
    }
    public function LoginCheck(Request $request){
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Authentication passed...
            $user=$this->user->checkLogin($request->email);
            $token=$user->id.''.time();
            if($user->position=='supervisor'){
                $access=1;
            }else{
                $access=2;
            }
            $this->user->changeUserToken($user->id,$token);
            $code=[
                'code'=>200,
                'status'=>'access login',
                'name'=>$user->name,
                'email'=>$user->email,
                'position'=>$access,
                'project_id'=>$user->project_id,
                'token'=>$token
            ];
            return json_encode($code);
        }
        $code=[
            'code'=>200,
            'status'=>'user does not exist'
        ];
        return json_encode($code);
    }
}
