<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Action_log extends Model
{
    //
    protected $table='action_log';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function create_log($action,$id){
        return  Action_log::insertGetId(
            array(
                'action'=>$action,
                'user_id'=>$id
            )
        );
    }
    public function getHistory($id){
        return Action_log::where('user_id',$id)
            ->leftJoin('users', 'users.id', '=', 'action_log.user_id')
            ->orderBy('action_log.created_at','desc')
            ->select('action_log.*','users.name')
            ->get();
    }
}
