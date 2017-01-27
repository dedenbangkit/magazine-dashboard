<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $table='project';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertProject($data){
        return  Project::insertGetId(
            array(
                'project_name'=>$data['name'],
                'project_master'=>$data['master'],
                'project_cover'=>$data['cover'],
                'project_key'=>$data['key']
            )
        );
    }
    public function getProject(){
        return Project::whereNull('deleted_at')
            ->where('status','unpublished')
            ->orderBy('created_at','desc')
            ->get();
    }
    public function getProjectPublish(){
        return Project::whereNull('deleted_at')
            ->where('status','published')
            ->orderBy('created_at','desc')
            ->get();
    }
}
