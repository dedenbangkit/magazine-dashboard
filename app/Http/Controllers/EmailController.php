<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Mail;
class EmailController extends Controller
{
    public function send(Request $request,$tittle=null,$content = null)
    {
        return 'test';
        $title = 'test';
        $content = 'content';

        Mail::send('mail.mail', ['title' => $title, 'content' => $content], function ($message)
        {

            $message->from('support@publixx.id', 'PUBLIXX');

            $message->to('rahardian.rizky@gmail.com')->subject('test publixx');

        });

        return response()->json(['message' => 'Request completed']);
    }
}
