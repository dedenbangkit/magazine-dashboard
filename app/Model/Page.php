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
        return  Page::insertGetId(
            array(
                'issue_id'=>$data['issue'],
                'page_name'=>$data['name'],
                'page_team'=>$data['team'],
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
    public function savePage($id,$content){
        return Page::where('id','=',$id)
        ->update([
            'page_content'=>$content,
            'updated_at'=>Carbon::now()
        ]);
    }
}