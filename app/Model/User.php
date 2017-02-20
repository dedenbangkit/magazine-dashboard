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
        return  User::insert(
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
    public function getUser(){
        return User::whereNull('deleted_at')
            ->where('position','!=','administrator')
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
}
