<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Comment extends Model
{
    protected $table='comment';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function getCommentByMaster($id){
        return Comment::where('deleted_at',null)
            ->where('master_comment_id',$id)
            ->orderby('status','ASC')
            ->get();
    }
    public function checkCommentById($id,$user){
        return Comment::where('id',$id)
            ->update([
                'status'=>'done',
                'updated_by'=>$user,
               'updated_at'=>Carbon::now()
            ]);
    }
}
