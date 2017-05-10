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

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

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
      $this->build = new PgBuild('bajaklautmalaka@gmail.com','Sejutatopanb4d4i');
      $this->client = new Client([
          // Base URI is used with relative requests
          'base_uri' => 'https://build.phonegap.com/api/v1/',
          'auth' => ['mail@dedenbangkit.com','Jalanremaja1208'],
          ['connect_timeout' => 6000]
      ]);
  }
  /**
   * Show the application dashboard.
   *
   * @return Response
   */

   public function getAppInfo(Request $request)
   {
     $data = $this->client->request('GET', 'apps');
     $result = $data->getBody();
     return $result;
   }

   public function testBuild(Request $request)
   {
     $upload = $this->client->request('POST', 'apps',
          ['json' =>
            ['data' => array(
              'title'         => $request->title,
              'create_method' => 'remote_repo',
              'repo'          => 'https://github.com/dedenbangkit/gi-info-phgap',
              'share'         => 'true',
              'private'       => 'false',
            )]
          ]);
      $result = $upload->getBody();
      return $result;
   }

   public function testBuildUpdate(Request $request)
   {
     $upload = $this->client->request('PUT', 'apps/'.$request->appid,
          ['json' =>
            ['data' => array(
              'title'         => $request->title,
              'create_method' => 'remote_repo',
              'repo'          => 'https://github.com/dedenbangkit/gi-info-phgap',
              'share'         => 'true',
            )]
          ]);
      $result = $upload->getBody();
      return $result;
   }
}
