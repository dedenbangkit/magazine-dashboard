<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class User extends Model
{
    protected $table='users';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertUser($data,$project_id){
        if(empty($data['position'])){
            $data['position'] = 'supervisor';
        }
        return  User::insertGetId(
            array(
             'name'=>$data['name'],
             'email'=>$data['email'],
             'password'=>bcrypt($data['password']),
             'phone'=>$data['phone'],
             'position'=>$data['position'],
             'remember_token'=>$data['_token'],
              'project_id'=>$project_id
            )
        );
    }
    public function getUser($access=null){
        if($access!=null){
            return User::whereNull('deleted_at')
                ->where('position','!=','administrator')
                ->where('project_id','=',$access)
                ->orderBy('name')
                ->get();
        }
        return User::whereNull('deleted_at')
            ->where('position','!=','administrator')
            ->orderBy('name')
            ->get();
    }
    public function getUserCompanyEmail($id){
        return User::whereNull('deleted_at')
            ->where('project_id','=',$id)
            ->orderBy('name')
            ->get();
    }
    public function getUserCompanyEmailByID($id){
        return User::whereNull('deleted_at')
            ->where('id','=',$id)
            ->orderBy('name')
            ->get();
    }
    public function getUserClient(){
        return User::whereNull('users.deleted_at')
            ->leftjoin('project','users.project_id','=','project.id')
            ->where('users.position','supervisor')
            ->orderBy('project.project_name')
            ->select('users.*','project.project_name','project.company_id')
            ->get();
    }
    public function removeUser($id){
        return User::where('id',$id)
            ->update([
                'deleted_at'=>Carbon::now()
            ]);
    }
    public function changeUserPassword($id,$password){
        return User::where('id',$id)
            ->update([
                'password'=>bcrypt($password),
                'updated_at'=>Carbon::now()
            ]);
    }
    public function changeUserPosition($id,$position){
        return User::where('id',$id)
            ->update([
                'position'=>$position,
                'updated_at'=>Carbon::now()
            ]);
    }
    public function changeUserToken($id,$token){
        return User::where('id',$id)
            ->update([
                'mobile_token'=>$token,
                'updated_at'=>Carbon::now()
            ]);
    }
    public function findUser($value,$data){
        return Company::where('deleted_at',null)
            ->where($value,$data)
            ->first();
    }
    public function checkLogin($email){
        return User::whereNull('users.deleted_at')
            ->leftjoin('project','project.id','=','users.project_id')
            ->leftjoin('company','company.id','=','project.company_id')
            ->where('users.email',$email)
            ->select('users.*','project.project_name','company.company_name','company.company_email','company.company_phone','company.company_website')
            ->first();
    }
}
