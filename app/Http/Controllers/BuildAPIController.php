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
      $this->build = new Phonegap('bajaklautmalaka@gmail.com','Sejutatopanb4d4i');
      $this->client = new Client([
          'base_uri' => 'https://build.phonegap.com/api/v1/',
          'auth' => ['bajaklautmalaka@gmail.com','Sejutatopanb4d4i'],
          ['connect_timeout' => 6000]
      ]);
      $this->project = new Project;
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

      //Add Ios Key
      $certificate = $request->file('apple_certificate');
      $mobileprovision = $request->file('apple_provision');
      $dst = storage_path('key');
      if(!empty($certificate) || !empty($mobileprovision)){
      $keyname = time().'-'.$theproject->company_name;
      $certificate->move($dst, $keyname.'.p12');
      $mobileprovision->move($dst, $keyname.'.mobileprovision');

      $ioskey = $this->client->request('POST', 'keys/ios', [
                  'multipart' => [
                      ['name' => 'cert',
                       'contents'  => fopen($dst.'/'.$keyname.'.p12', 'r')
                      ],
                      ['name' => 'profile',
                       'contents'  => fopen($dst.'/'.$keyname.'.mobileprovision', 'r')
                      ],
                      ['name' => 'data',
                       'contents' => json_encode(
                         [
                              'title' => $theproject->company_name.'-ioskey',
                              'password'  => $request->apple_password
                         ]),
                      ]

                  ]
      ]);
      $storedkey = json_decode($ioskey->getBody(), true);
      }else{
        $storedkey = array(
          'title' => $theproject->company_name.'-ioskey',
          'id'    => substr($theproject->apple_key, strrpos($theproject->apple_key, '/') + 1),
          'link'  => $theproject->apple_key
          );
      }

      $zip_path = 'https://s3-ap-southeast-1.amazonaws.com/publixx-statics/clientsapp/'.$theproject->repo;
      $data = $this->client->request('POST', 'apps', [
                  'multipart' => [
                      ['name' => 'file',
                       'contents' => fopen(urlencode($zip_path), 'r'),
                      ],
                      ['name' => 'data',
                       'contents' => json_encode(
                          [
                              'create_method' => 'file',
                              'share' => 'true',
                              'private' => 'true',
                              'keys' => [
                                   'ios' => [
                                       'title' => $storedkey['title'],
                                       'id' => $storedkey['id'],
                                       'link' => $storedkey['link']
                                     ],
                                ],
                          ]),
                      ]
                  ]
              ]);
      $result = json_decode($data->getBody(), true);
      $update['id'] = $request->appid;
      $update['apple_key'] = $storedkey['link'];
      $update['apple_password'] = $request->apple_password;
      $update['build_id'] = $result['id'];
      $this->project->updateBuild($update);
      unlink(storage_path('clientsapp/'.$theproject->repo));

      return redirect()->action('ProjectController@project');
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
