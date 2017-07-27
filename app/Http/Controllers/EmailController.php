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
            $datauser=$this->user->getUserCompanyEmail($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==2){
            $datauser=$this->user->getUserCompanyEmail($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'Successfull compiling issue',
                'heading'=>'Successfull compiling issue',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'Here the token'.$content,
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==3){
            $datauser=$this->user->getUserCompanyEmail($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }elseif($id ==4){
            $datauser=$this->user->getUserCompanyEmail($this->authdata->project_id);
            $content = [
                'target'=>'user',
                'tittle'=>'tittle',
                'heading'=>'test',
                'contenttop'=>'lorem top',
                'contentmiddle'=>'lorem middle',
                'contentbottom'=>'lorembutton'
            ];
        }else{
            $datauser=$this->user->getUserCompanyEmail($this->authdata->project_id);
            $content = [
                'target'=>'default',
                'tittle'=>'default',
                'heading'=>'default',
                'contenttop'=>'default',
                'contentmiddle'=>'default',
                'contentbottom'=>'default'
            ];
        }

        if(!empty($datauser)) {
            $dataemail=[];
            foreach($datauser as $i =>$row){
                $dataemail[]=$row->email;
            }


            $mail = Mail::send('mail.mail', ['title' => 'tittle', 'content' => $content], function ($message) use ($dataemail) {
                $message->from('support@publixx.id', 'PUBLIXX');
                    $message->to($dataemail)->subject('publixx(Do Not Reply This Message)');
            });

        }

    return 'success';

    }
}
