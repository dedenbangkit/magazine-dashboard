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
      $this->build = new Phonegap('mail@dedenbangkit.com','Jalanremaja1208');
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

   public function Build(Request $request)
   {
     $theproject=Project::where('project.id','=',$request->appid)
                         ->leftjoin('company','company.id','=','project.company_id')
                         ->select('project.*','project.id as project_appid','company.*')
                         ->first();

      $zip_path = storage_path('clientsapp/'.$theproject->repo);
      $data = $this->client->request('POST', 'apps', [
                  'multipart' => [
                      ['name' => 'file',
                       'contents' => fopen($zip_path, 'r'),
                      ],
                      ['name' => 'data',
                       'contents' => json_encode(
                          [
                              'create_method' => 'file',
                              'share' => 'true',
                              'private' => 'true',
                          ]),
                      ]
                  ]
              ]);
      $result = $data->getBody();
      return $result;
   }

   public function buildUpdate(Request $request)
   {
     $zip_path = storage_path('zip/testing.zip');
     $data = $this->client->request('PUT', 'apps/'.$request->appid, [
                 'multipart' => [
                     ['name' => 'file',
                      'contents' => fopen($zip_path, 'r'),
                     ],
                     ['name' => 'data',
                      'contents' => json_encode(
                         [
                             'title' => $request->title,
                             'create_method' => 'file',
                             'share' => 'true',
                             'private' => 'true',
                         ]),
                     ]
                 ]
             ]);
     $result = $data->getBody();
     return $result;
   }
}
