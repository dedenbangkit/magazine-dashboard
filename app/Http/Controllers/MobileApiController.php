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
            $token=$user->id.'-'.time();
            if($user->position=='supervisor'){
                $access=1;
            }else{
                $access=2;
            }
            $this->user->changeUserToken($user->id,$token);
            $code=[
                'uid' => $user->id,
                'code'=>200,
                'status'=>'access login',
                'name'=>$user->name,
                'email'=>$user->email,
                'position'=>$access,
                'project_id'=>$user->project_id,
                'token'=>$token,
                'project_name'=>$user->project_name,
                'company_name'=>$user->company_name,
                'company_website'=>$user->company_website,
                'company_phone'=>$user->company_phone,
                'company_email'=>$user->company_email
            ];
            return json_encode($code);
        }
        $code=[
            'code'=>401,
            'status'=>'user does not exist'
        ];
        return json_encode($code);
    }
}
