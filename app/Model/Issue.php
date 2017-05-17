<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

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
    public function deleteIssue($id){
        return Issue::where('id',$id)
            ->update([
                'deleted_at'=>Carbon::now()
            ]);
    }
    public function publishIssue($id){
        return Issue::where('id',$id)
            ->update([
                'status'=>'published',
                'updated_at'=>Carbon::now()
            ]);
    }
    public function compileIssue($id,$name){
        return Issue::where('id',$id)
            ->update([
                'compiled'=>$name,
                'updated_at'=>Carbon::now()
            ]);
    }
}
