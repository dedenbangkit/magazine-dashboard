<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;


use App\Http\Requests;
use Illuminate\Http\Request;

use App\Model\Project;
use App\Model\Company;
use App\Model\Action_log;
use App\PhoneGap;
use View;
use Response;
use File;
use Illuminate\Support\Facades\Input;

class BuildAPIController extends Controller
{

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  protected $activer;
  protected $authdata;
  protected $project;
  protected $client;

  public function __construct()
  {
      $this->authdata = $this->authData();
      $this->middleware('auth');
      $this->client = new PhoneGap('bajaklautmalaka@gmail.com','Sejutatopanb4d4i');
  }
  /**
   * Show the application dashboard.
   *
   * @return Response
   */

   public function getAppInfo(Request $request)
   {
     $data = $this->client->getProfile();
     return $data;
   }

   public function postApp(Request $request)
   {
     $theproject=Project::where('project.id','=',$request->appid)->leftjoin('company','company.id','=','project.company_id')->first();

     $data = $this->client->createApplicationFromFile($theproject->id,'/path/to/archive.zip', array(
            'title'         => $theproject->project_name,
            'package'       => 'com.publixx.'.$theproject->domain,
            'description'   => $theproject->project_description,
            'create_method' => 'file',
            'version'       => '0.0.1',
            'debug'         => false,
            'keys'          => array(
                                'ios' => array(
                                  'title'     => $theproject->project_name.' key',
                                  'default'   => false,
                                  'id'        => $theproject->company_id,
                                  'password'  => $request->key_password,
                                  'link'      => storage_path('key/ios-'.$request->ios_key.'.key'),
                                ),
                                'android' => array(
                                  'title'     => $theproject->project_name.' key',
                                  'default'   => false,
                                  'id'        => $theproject->company_id,
                                  'password'  => $request->key_password,
                                  'link'      => storage_path('key/android-'.$request->android_key.'.key'),
                                ),
                              ),
            'private'          => true,
            'share'            => true,
            'phonegap_version' => '3.1.0',
            'hydrates'         => false,
            // better use methods below or see docs for all options
        )
      );
      return $data;

   }
}
