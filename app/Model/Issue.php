<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    //
    protected $table='issue';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertIssue($data){
        return  Issue::insertGetId(
            array(
                'issue_name'=>$data['name'],
                'issue_master'=>$data['master'],
                'issue_cover'=>$data['cover'],
                'project_id'=>$data['project_id']
            )
        );
    }
    public function getIssue($id){
        return Issue::whereNull('deleted_at')
            ->where('project_id',$id)
            ->orderBy('created_at','desc')
            ->get();
    }
}
