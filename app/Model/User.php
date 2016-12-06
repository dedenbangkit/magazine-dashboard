<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table='users';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertUser($data){
        return  User::insert(
            array(
             'name'=>$data['name'],
             'email'=>$data['email'],
             'password'=>bcrypt($data['password']),
             'phone'=>$data['phone'],
             'position'=>$data['position'],
             'remember_token'=>$data['_token']
            )
        );
    }
    public function getUser(){
        return User::whereNull('deleted_at')->where('position','!=','administrator')->orderBy('name')->get();
    }
}
