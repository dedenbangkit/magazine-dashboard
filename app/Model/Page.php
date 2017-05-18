<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Page extends Model
{
    //
    protected $table='page';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertPage($data){
        // restore array use unserialize
        return  Page::insertGetId(
            array(
                'issue_id'=>$data['issue'],
                'page_name'=>$data['name'],
                'page_team'=>serialize($data['team']),
                'page_description'=>$data['description']
            )
        );
    }
    public function getPage($id){
        return Page::whereNull('deleted_at')
            ->where('issue_id',$id)
            ->orderBy('id','ASC')
            ->get();
    }

    public function getPageIssue($id){
        return Page::whereNull('page.deleted_at')
            ->where('issue_id',$id)
            ->leftjoin('issue','page.issue_id','=','issue.id')
            ->first();
    }
    public function deletePage($id){
        return Page::where('id', $id)->delete();
    }
    public function savePage($id,$content,$test){
        return Page::where('id','=',$id)
        ->update([
            'page_content'=>$content,
            'test_content'=>$test,
            'updated_at'=>Carbon::now()
        ]);
    }
}
