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
    public function updateIssue($data){
        return  Issue::where('id',$data['id'])
        ->update(
            [
                'issue_name'=>$data['name'],
                'issue_cover'=>$data['cover'],
            ]
        );
    }
    public function getIssue($id){
        return Issue::whereNull('deleted_at')
            ->where('project_id',$id)
            ->orderBy('created_at','desc')
            ->get();
    }
    public function getIssueId($id){
        return Issue::whereNull('deleted_at')
            ->where('id',$id)
            ->orderBy('created_at','desc')
            ->first();
    }
    public function deleteIssue($id){
        return Issue::where('id',$id)
            ->update([
                'deleted_at'=>Carbon::now()
            ]);
    }
    public function publishIssue($id,$counter){
        return Issue::where('id',$id)
            ->update([
                'status'=>'published',
                'page_counter'=>$counter,
                'updated_at'=>Carbon::now()
            ]);
    }
    public function getProjectPublish(){
        return Issue::whereNull('deleted_at')
            ->where('status','published')
            ->orderBy('created_at','desc')
            ->paginate(12);
    }
    public function getProjectPublishById($id){
        return Issue::whereNull('deleted_at')
            ->where('status','published')
            ->where('project_id',$id)
            ->orderBy('created_at','desc')
            ->get();
    }
    public function compileIssue($id,$name){
        return Issue::where('id',$id)
            ->update([
                'compiled'=>$name,
                'updated_at'=>Carbon::now()
            ]);
    }
}
