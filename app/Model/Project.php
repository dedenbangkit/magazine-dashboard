<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $table='project';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertProject($data,$company_id){
        return  Project::insertGetId(
            array(
                'project_name'=>$data['name'],
                'project_master'=>$data['master'],
                'company_id'=>$company_id,
                'service_id'=>$data['service'],
                'project_cover'=>$data['cover'],
                'project_key'=>$data['key']
            )
        );
    }
    public function updateProject($data){
        return  Project::where('id',$data['project_id'])
            ->update(
           [
                'project_name'=>$data['name'],
                'project_cover'=>$data['cover']
            ]
        );
    }

    public function updateRepo($data){
        return  Project::where('id',$data['id'])
            ->update(
           [
                'repo'            => $data['repo'],
                'prefix'          => $data['prefix'],
                'dev_id'          => $data['dev_id'],
           ]
        );
    }

    public function updateBuild($data){
        return  Project::where('id',$data['id'])
            ->update(
           [
                'apple_key'       => $data['apple_key'],
                'apple_password'  => $data['apple_password'],
                'build_id'        => $data['build_id']
           ]
        );
    }

    public function getProject(){
        return Project::whereNull('deleted_at')
            ->where('status','unpublished')
            ->orderBy('created_at','desc')
            ->get();
    }
    public function getProjectById($id){
        return Project::whereNull('project.deleted_at')
            ->leftjoin('company','company.id','=','project.company_id')
            ->leftjoin('service','service.id','=','project.service_id')
            ->where('project.status','unpublished')
            ->where('project.id',$id)
            ->orderBy('project.created_at','desc')
            ->select('project.*','company.company_name','company.company_phone','service.service_name','service.number_of_issue','service.service_price')
            ->get();
    }
    public function getProjectPublish(){
        return Project::whereNull('deleted_at')
            ->where('status','published')
            ->orderBy('created_at','desc')
            ->get();
    }

}
