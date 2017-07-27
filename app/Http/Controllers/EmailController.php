<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Mail;
use App\Model\User;
class EmailController extends Controller
{
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->user = new User();
        $this->middleware('auth');
    }

    public function send($id=null,$content = null,$receiver=null)
    {

        if($id ==1){
            $datauser=$this->user->getUserCompany($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==2){
            $datauser=$this->user->getUserCompany($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==3){
            $datauser=$this->user->getUserCompany($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==4){
            $datauser=$this->user->getUserCompany($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }else{
            $datauser=$this->user->getUserCompany($this->authdata->project_id);
            $content = [
                'target'=>'default',
                'tittle'=>'default',
                'heading'=>'default',
                'contenttop'=>'default',
                'contentmiddle'=>'default',
                'contentbottom'=>'default'
            ];
        }


        foreach($datauser as $i=>$row){
            $mail= Mail::send('mail.mail', ['title' => 'tittle', 'content' => $content], function ($message)
            {

                $message->from('support@publixx.id', 'PUBLIXX');

                $message->to($row['email'])->subject('test publixx');

            });
        }


    return 'success';

    }
}
