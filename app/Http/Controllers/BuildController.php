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
use Formatter;
use View;
use Response;
use File;
use ZipArchive;
use Zipper;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;

class BuildController extends Controller
{

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  protected $activer;
  protected $authdata;
  protected $project;

  public function __construct()
  {
      $this->authdata = $this->authData();
      $this->middleware('auth');
      $this->project = new Project;
  }

  /**
   * Show the application dashboard.
   *
   * @return Response
   */

  public function makeTemp($src,$dst)
  {
      $dir = opendir($src);
      @mkdir($dst);
      while(false !== ( $file = readdir($dir)) ) {
           if (( $file != '.' ) && ( $file != '..' )) {
               if ( is_dir($src . '/' . $file) ) {
                   $this->makeTemp($src . '/' . $file,$dst . '/' . $file);
               }
               else {
                   copy($src . '/' . $file,$dst . '/' . $file);
               }
             }
         }
      closedir($dir);
  }

  public function splashIcon($src, $dst)
  {
    Zipper::make($src)->extractTo($dst.'/www');
    unlink($src);
  }

  public function updateApp(Request $request)
  {
      //Get Project Info

      $theproject=Project::where('project.id','=',$request->appid)
                          ->leftjoin('company','company.id','=','project.company_id')
                          ->select('project.*','project.id as project_appid','company.*')
                          ->first();

      //Upload Splashscreen and Icon

      $src = storage_path('application');
      $newname = $theproject->company_name.'-'.time();
      $dst = storage_path('tmp/'.$newname);
      $this->makeTemp($src,$dst);
      $zipfile = $request->file('splashicon');
      $zipfile->move($dst, 'splashicon.zip');
      $this->splashIcon($dst.'/splashicon.zip', $dst);

      //Update Project Info
      $update['id'] = $request->appid;

      $update['dev_id'] = $request->dev_id;
      $update['prefix'] = $request->apple_prefix;
      $update['repo'] = $newname.'.zip';
      $this->project->updateRepo($update);


      //Generate XML File

      $data = array('widget' => array(
                  '_id'          => $request->dev_id,
                  'name'        => $theproject->project_name,
                  'description' => $theproject->project_description,
                  'author'      => array(
                      '_email'      => $theproject->company_email,
                      '_href'       => $theproject->company_website,
                      '_text'      => $theproject->company_name,
                      ),
                  'content'     => array('_src'    => 'index.html'),
                  'access'      => array('_origin' => '*'),
                  'preference'  => array(
                      0 => array('_name'   => 'webviewbounce',
                                  '_value'  => 'false'),
                      1 => array('_name'   => 'UIWebViewBounce',
                                  '_value'  => 'false'),
                      2 => array('_name'   => 'DisallowOverscroll',
                                  '_value'  => 'true'),
                      3 => array('_name'   => 'SplashScreenDelay',
                                  '_value'  => '2000'),
                      4 => array('_name'   => 'FadeSplashScreenDuration',
                                  '_value'  => '2000'),
                      5 => array('_name'   => 'android-minSdkVersion',
                                  '_value'  => '16'),
                      6 => array('_name'   => 'BackupWebStorage',
                                  '_value'  => 'none'),
                      7 => array('_name'   => 'SplashScreen',
                                  '_value'  => 'screen'),
                      8 => array('_name'   => 'orientation',
                                  '_value'  => 'portrait'),
                      ),
                'feature'       => array(
                      'param' =>  array(
                              '_name'   => 'ios-package',
                              '_value'  => 'CDVStatusBar',
                              '_onload' => 'true'
                            ),
                      '_name' => 'StatusBar'
                      ),
                'platform'      => array(
                  0 => array(
                    'icon' => array(
                        0 => array(
                            '_src'    => 'www/res/icons/ios/icon.png',
                            '_width'  => '57',
                            '_height' => '57',
                            ),
                        1 => array(
                            '_src'    => 'www/res/icons/ios/icon-2x.png',
                            '_width'  => '114',
                            '_height' => '114',
                            ),
                        2 => array(
                            '_src'    => 'www/res/icons/ios/icon-40.png',
                            '_width'  => '40',
                            '_height' => '40',
                            ),
                        3 => array(
                            '_src'    => 'www/res/icons/ios/icon-40-2x.png',
                            '_width'  => '80',
                            '_height' => '80',
                            ),
                        4 => array(
                            '_src'    => 'www/res/icons/ios/icon-40-3x.png',
                            '_width'  => '120',
                            '_height' => '120',
                            ),
                        5 => array(
                            '_src'    => 'www/res/icons/ios/icon-50.png',
                            '_width'  => '50',
                            '_height' => '50',
                            ),
                        6 => array(
                            '_src'    => 'www/res/icons/ios/icon-50-2x.png',
                            '_width'  => '100',
                            '_height' => '100',
                            ),
                        7 => array(
                            '_src'    => 'www/res/icons/ios/icon-60.png',
                            '_width'  => '60',
                            '_height' => '60',
                            ),
                        8 => array(
                            '_src'    => 'www/res/icons/ios/icon-60-2x.png',
                            '_width'  => '120',
                            '_height' => '120',
                            ),
                        9 => array(
                            '_src'    => 'www/res/icons/ios/icon-60-3x.png',
                            '_width'  => '180',
                            '_height' => '180',
                            ),
                        10 => array(
                            '_src'    => 'www/res/icons/ios/icon-72.png',
                            '_width'  => '72',
                            '_height' => '72',
                            ),
                        11 => array(
                            '_src'    => 'www/res/icons/ios/icon-72-2x.png',
                            '_width'  => '144',
                            '_height' => '144',
                            ),
                        12 => array(
                            '_src'    => 'www/res/icons/ios/icon-76.png',
                            '_width'  => '76',
                            '_height' => '76',
                            ),
                        13 => array(
                            '_src'    => 'www/res/icons/ios/icon-76-2x.png',
                            '_width'  => '152',
                            '_height' => '152',
                            ),
                        14 => array(
                            '_src'    => 'www/res/icons/ios/icon-83.5-2x.png',
                            '_width'  => '167',
                            '_height' => '167',
                            ),
                        15 => array(
                            '_src'    => 'www/res/icons/ios/icon-small.png',
                            '_width'  => '29',
                            '_height' => '29',
                            ),
                        16 => array(
                            '_src'    => 'www/res/icons/ios/icon-small-2x.png',
                            '_width'  => '58',
                            '_height' => '58',
                            ),
                        17 => array(
                            '_src'      => 'www/res/icons/ios/icon-small-3x.png',
                            '_width'    => '87',
                            '_height'   => '87',
                            ),
                    ),'splash' => array(
                        0 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-568h-2x.png',
                            '_width'  => '640',
                            '_height' => '1136',
                            ),
                        1 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-portrait-667h.png',
                            '_width'  => '750',
                            '_height' => '1334',
                        ),
                        2 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-portrait-736h.png',
                            '_width'  => '1242',
                            '_height' => '2208',
                        ),
                        3 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-landscape-736h.png',
                            '_width'  => '2208',
                            '_height' => '1242',
                        ),
                        4 => array(
                            '_src'    => 'www/res/screens/ios/screen-ipad-landscape-2x.png',
                            '_width'  => '2048',
                            '_height' => '1536',
                        ),
                        5 => array(
                            '_src'    => 'www/res/screens/ios/screen-ipad-landscape.png',
                            '_width'  => '1024',
                            '_height' => '768',
                        ),
                        6 => array(
                            '_src'    => 'www/res/screens/ios/screen-ipad-portrait-2x.png',
                            '_width'  => '1536',
                            '_height' => '2048',
                        ),
                        7 => array(
                            '_src'    => 'www/res/screens/ios/screen-ipad-portrait.png',
                            '_width'  => '768',
                            '_height' => '1024',
                        ),
                        8 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-portrait-2x.png',
                            '_width'  => '640',
                            '_height' => '960',
                        ),
                        9 => array(
                            '_src'    => 'www/res/screens/ios/screen-iphone-portrait.png',
                            '_width'  => '320',
                            '_height' => '480',
                        ),
                      ),'_name' => 'ios'),
                  1 => array(
                    'icon' => array(
                        0 => array(
                          '_src'     => 'www/res/icons/android/icon-ldpi-36.png',
                          '_density' => 'ldpi',
                        ),
                        1 => array(
                          '_src'     => 'www/res/icons/android/icon-mdpi-48.png',
                          '_density' => 'mdpi',
                        ),
                        2 => array(
                          '_src'     => 'www/res/icons/android/icon-hdpi-72.png',
                          '_density' => 'hdpi',
                        ),
                        3 => array(
                          '_src'     => 'www/res/icons/android/icon-xhdpi-96.png',
                          '_density' => 'xhdpi',
                        ),
                        4 => array(
                          '_src'     => 'www/res/icons/android/icon-xxhdpi-144.png',
                          '_density' => 'xxhdpi',
                        ),
                        5 => array(
                          '_src'     => 'www/res/icons/android/icon-xxxhdpi-192.png',
                          '_density' => 'xxxhdpi',
                        ),
                      ),'splash' => array(
                        0 => array(
                          '_src'     => 'www/res/screens/android/screen-ldpi-landscape.png',
                          '_density' => 'land-ldpi',
                        ),
                        1 => array(
                          '_src'     => 'www/res/screens/android/screen-mdpi-landscape.png',
                          '_density' => 'land-mdpi',
                        ),
                        2 => array(
                          '_src'     => 'www/res/screens/android/screen-hdpi-landscape.png',
                          '_density' => 'land-hdpi',
                        ),
                        3 => array(
                          '_src'     => 'www/res/screens/android/screen-xhdpi-landscape.png',
                          '_density' => 'land-xhdpi',
                        ),
                        4 => array(
                          '_src'     => 'www/res/screens/android/screen-ldpi-portrait.png',
                          '_density' => 'port-ldpi',
                        ),
                        5 => array(
                          '_src'     => 'www/res/screens/android/screen-mdpi-portrait.png',
                          '_density' => 'port-mdpi',
                        ),
                        6 => array(
                          '_src'     => 'www/res/screens/android/screen-hdpi-portrait.png',
                          '_density' => 'port-hdpi',
                        ),
                        7 => array(
                          '_src'     => 'www/res/screens/android/screen-xhdpi-portrait.png',
                          '_density' => 'port-xhdpi',
                        ),
                      ),'_name' => 'android',
                    ),
                  ),
          'icon' => array( 0 => array(
              '_src' => 'www/res/icons/android/icon-xhdpi-96.png',
            ),
          ),
          '_xmlns' => 'http://www.w3.org/ns/widgets',
          '_xmlns:cdv' => 'http://cordova.apache.org/ns/1.0',
          '_id' => 'com.publixx.'.$theproject->domain,
          '_version' => '0.0.1',
        ),
      );

      $content = View::make('xml.xmlformat', $data)->render();
      $storage= File::put($dst.'/config.xml', $content);

      $compiled = glob($dst);
      $finalpath = storage_path('clientsapp/'.$newname.'.zip');
      Zipper::make($finalpath)->add($compiled)->close();

      //Destroy Everything
      // $this->removeDirectory($dst);

      return redirect()->back()->with('success', 'Ready to Build');
  }

  //Removing Tmp folder
  public function removeDirectory($path) {
    $files = glob(preg_replace('/(\*|\?|\[)/', '[$1]', $path).'/{,.}*', GLOB_BRACE);
    foreach ($files as $file) {
        if ($file == $path.'/.' || $file == $path.'/..') { continue; }
        is_dir($file) ? $this->removeDirectory($file) : unlink($file);
    }
    rmdir($path);
    return;
  }

  public function setupApp(Request $request)
  {

    $rootPath = storage_path('application');

    $zip = new ZipArchive();
    $destPath = storage_path('clientsapp/'.$request->apple_id.'-'.time().'.zip');
    $zip->open($destPath, ZipArchive::CREATE | ZipArchive::OVERWRITE);
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($rootPath),
        RecursiveIteratorIterator::LEAVES_ONLY
    );

    foreach ($files as $name => $file)
    {
        // Skip directories (they would be added automatically)
        if (!$file->isDir())
        {
            // Get real and relative path for current file
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($rootPath) + 1);

            // Add current file to archive
            $zip->addFile($filePath, $relativePath);
        }
    }

    $zip->close();
    return $destPath;

  }

}
