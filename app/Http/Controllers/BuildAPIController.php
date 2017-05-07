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
use App\PgBuild;
use View;
use Response;
use File;
use Illuminate\Support\Facades\Input;

class BuildApiController extends Controller
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
  protected $build;

  public function __construct()
  {
      $this->authdata = $this->authData();
      $this->middleware('auth');
      $this->client = new PhoneGap();
      $this->build = new PgBuild('mail@dedenbangkit.com','Jalanremaja1208');
  }
  /**
   * Show the application dashboard.
   *
   * @return Response
   */

   public function getAppInfo(Request $request)
   {
     $data = $this->build->getApps();
     return $data;
   }

   public function testBuild(Request $request)
   {
     $title = $request->title;
     $file = $request->file;
     $createMethod = 'remote_repo';
     $data = $this->build->uploadApp($file, $title, $createMethod);
     return response()->json($data);
   }

   public function postApp2(Request $request)
   {

     $theproject=Project::where('project.id','=',$request->appid)
                         ->leftjoin('company','company.id','=','project.company_id')
                         ->select('project.*','project.id as project_appid','company.*')
                         ->first();

     $data = $this->client->createApplication(array(
            'title'         => 'Phonegap Application',
            'create_method' => 'remote_repo',
            'repo'          => 'https://github.com/phonegap/phonegap-start',
            'version'       => '1.0.0',
            'keys'          => array(
                                'ios' => array(
                                  'title'     => "Bernard Satriani Added",
                                  'default'   => true,
                                  'id'        => 736933,
                                  'link'      => "/api/v1/keys/ios/736933",
                                ),
                              ),
        )
      );

    return response()->json($data);

   }
}
