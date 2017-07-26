<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Mail;
class EmailController extends Controller
{
    public function send($id=null,$content = null,$receiver=null)
    {
        $title = 'test';

        if($id ==1){
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==2){
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==3){
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==4){
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }else{
            $content = [
                'target'=>'default',
                'tittle'=>'default',
                'heading'=>'default',
                'contenttop'=>'default',
                'contentmiddle'=>'default',
                'contentbottom'=>'default'
            ];
        }

if($receiver==null){

       $mail= Mail::send('mail.mail', ['title' => $title, 'content' => $content], function ($message)
        {

            $message->from('support@publixx.id', 'PUBLIXX');

            $message->to('rahardian.rizky@gmail.com')->subject('test publixx');

        });

        dd('email send');
    }
    }
}
