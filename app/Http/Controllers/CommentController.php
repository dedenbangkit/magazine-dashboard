<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Model\Comment;
class CommentController extends Controller
{
    //
    protected $comment;
    protected $authdata;
    public function __construct()
    {

        $this->authdata = $this->authData();
        $this->activer = 'comment';
        $this->comment= new Comment();
        $this->middleware('auth');
    }
    public function getComment($id){
        $data['list_comment']=$this->comment->getCommentByMaster($id);
        return $data;
    }
}
