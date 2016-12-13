<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;
use Illuminate\Support\Facades\Auth;
class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;
     public function authData(){
         return Auth::user();
     }

        public function checkSessionProject($request){
            if(empty($request->session()->get('project_id'))){
                if(empty($request->id)){
                    return redirect('/projects');
                }else{
                    $request->session()->put('project_id', $request->id);
                }
            }
    }
}
