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
use RecursiveArrayIterator;
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
  }

  /**
   * Show the application dashboard.
   *
   * @return Response
   */

  public function updateApp(Request $request)
  {

      $theproject=Project::where('project.id','=',$request->appid)
                          ->leftjoin('company','company.id','=','project.company_id')
                          ->select('project.*','project.id as project_appid','company.*')
                          ->first();

      $data = array('widget' => array(
                  'name'        => $theproject->project_name,
                  'description' => $theproject->project_description,
                  'author'      => array(
                      '_email'      => $theproject->company_email,
                      '_href'       => $theproject->company_website,
                      '__text'      => $theproject->company_name,
                      'toString'    =>  array(0 => NULL),
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
                            '_src'    => 'www/icons/iosicon/icon.png',
                            '_width'  => '57',
                            '_height' => '57',
                            ),
                        1 => array(
                            '_src'    => 'www/icons/iosicon/icon@2x.png',
                            '_width'  => '114',
                            '_height' => '114',
                            ),
                        2 => array(
                            '_src'    => 'www/icons/iosicon/icon-40.png',
                            '_width'  => '40',
                            '_height' => '40',
                            ),
                        3 => array(
                            '_src'    => 'www/icons/iosicon/icon-40@2x.png',
                            '_width'  => '80',
                            '_height' => '80',
                            ),
                        4 => array(
                            '_src'    => 'www/icons/iosicon/icon-40@3x.png',
                            '_width'  => '120',
                            '_height' => '120',
                            ),
                        5 => array(
                            '_src'    => 'www/icons/iosicon/icon-50.png',
                            '_width'  => '50',
                            '_height' => '50',
                            ),
                        6 => array(
                            '_src'    => 'www/icons/iosicon/icon-50@2x.png',
                            '_width'  => '100',
                            '_height' => '100',
                            ),
                        7 => array(
                            '_src'    => 'www/icons/iosicon/icon-60.png',
                            '_width'  => '60',
                            '_height' => '60',
                            ),
                        8 => array(
                            '_src'    => 'www/icons/iosicon/icon-60@2x.png',
                            '_width'  => '120',
                            '_height' => '120',
                            ),
                        9 => array(
                            '_src'    => 'www/icons/iosicon/icon-60@3x.png',
                            '_width'  => '180',
                            '_height' => '180',
                            ),
                        10 => array(
                            '_src'    => 'www/icons/iosicon/icon-72.png',
                            '_width'  => '72',
                            '_height' => '72',
                            ),
                        11 => array(
                            '_src'    => 'www/icons/iosicon/icon-72@2x.png',
                            '_width'  => '144',
                            '_height' => '144',
                            ),
                        12 => array(
                            '_src'    => 'www/icons/iosicon/icon-76.png',
                            '_width'  => '76',
                            '_height' => '76',
                            ),
                        13 => array(
                            '_src'    => 'www/icons/iosicon/icon-76@2x.png',
                            '_width'  => '152',
                            '_height' => '152',
                            ),
                        14 => array(
                            '_src'    => 'www/icons/iosicon/icon-83.5@2x.png',
                            '_width'  => '167',
                            '_height' => '167',
                            ),
                        15 => array(
                            '_src'    => 'www/icons/iosicon/icon-small.png',
                            '_width'  => '29',
                            '_height' => '29',
                            ),
                        16 => array(
                            '_src'    => 'www/icons/iosicon/icon-small@2x.png',
                            '_width'  => '58',
                            '_height' => '58',
                            ),
                        17 => array(
                            '_src'      => 'www/icons/iosicon/icon-small@3x.png',
                            '_width'    => '87',
                            '_height'   => '87',
                            ),
                    ),'splash' => array(
                        0 => array(
                            '_src'    => 'www/images/ios/splash/Default-568h@2x~iphone.png',
                            '_width'  => '640',
                            '_height' => '1136',
                            ),
                        1 => array(
                            '_src'    => 'www/images/ios/splash/Default-667h.png',
                            '_width'  => '750',
                            '_height' => '1334',
                        ),
                        2 => array(
                            '_src'    => 'www/images/ios/splash/Default-736h.png',
                            '_width'  => '1242',
                            '_height' => '2208',
                        ),
                        3 => array(
                            '_src'    => 'www/images/ios/splash/Default-Landscape-736h.png',
                            '_width'  => '2208',
                            '_height' => '1242',
                        ),
                        4 => array(
                            '_src'    => 'www/images/ios/splash/Default-Landscape@2x~ipad.png',
                            '_width'  => '2048',
                            '_height' => '1536',
                        ),
                        5 =>  array(
                            '_src'    => 'www/images/ios/splash/Default-Landscape@~ipadpro.png',
                            '_width'  => '2732',
                            '_height' => '2048',
                        ),
                        6 => array(
                            '_src'    => 'www/images/ios/splash/Default-Landscape~ipad.png',
                            '_width'  => '1024',
                            '_height' => '768',
                        ),
                        7 => array(
                            '_src'    => 'www/images/ios/splash/Default-Portrait@2x~ipad.png',
                            '_width'  => '1536',
                            '_height' => '2048',
                        ),
                        8 => array(
                            '_src'    => 'www/images/ios/splash/Default-Portrait@~ipadpro.png',
                            '_width'  => '2048',
                            '_height' => '2732',
                        ),
                        9 => array(
                            '_src'    => 'www/images/ios/splash/Default-Portrait~ipad.png',
                            '_width'  => '768',
                            '_height' => '1024',
                        ),
                        10 => array(
                            '_src'    => 'www/images/ios/splash/Default@2x~iphone.png',
                            '_width'  => '640',
                            '_height' => '960',
                        ),
                        11 => array(
                            '_src'    => 'www/images/ios/splash/Default~iphone.png',
                            '_width'  => '320',
                            '_height' => '480',
                        ),
                      ),'_name' => 'ios'),
                  1 => array(
                    'icon' => array(
                        0 => array(
                          '_src'     => 'www/icons/androidicon/drawable-ldpi-icon.png',
                          '_density' => 'ldpi',
                        ),
                        1 => array(
                          '_src'     => 'www/icons/androidicon/drawable-mdpi-icon.png',
                          '_density' => 'mdpi',
                        ),
                        2 => array(
                          '_src'     => 'www/icons/androidicon/drawable-hdpi-icon.png',
                          '_density' => 'hdpi',
                        ),
                        3 => array(
                          '_src'     => 'www/icons/androidicon/drawable-xhdpi-icon.png',
                          '_density' => 'xhdpi',
                        ),
                        4 => array(
                          '_src'     => 'www/icons/androidicon/drawable-xxhdpi-icon.png',
                          '_density' => 'xxhdpi',
                        ),
                        5 => array(
                          '_src'     => 'www/icons/androidicon/drawable-xxxhdpi-icon.png',
                          '_density' => 'xxxhdpi',
                        ),
                      ),'splash' => array(
                        0 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-ldpi-screen.png',
                          '_density' => 'land-ldpi',
                        ),
                        1 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-mdpi-screen.png',
                          '_density' => 'land-mdpi',
                        ),
                        2 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-hdpi-screen.png',
                          '_density' => 'land-hdpi',
                        ),
                        3 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-xhdpi-screen.png',
                          '_density' => 'land-xhdpi',
                        ),
                        4 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-xxhdpi-screen.png',
                          '_density' => 'land-xxhdpi',
                        ),
                        5 => array(
                          '_src'     => 'www/images/android/splash/drawable-land-xxxhdpi-screen.png',
                          '_density' => 'land-xxxhdpi',
                        ),
                        6 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-ldpi-screen.png',
                          '_density' => 'port-ldpi',
                        ),
                        7 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-mdpi-screen.png',
                          '_density' => 'port-mdpi',
                        ),
                        8 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-hdpi-screen.png',
                          '_density' => 'port-hdpi',
                        ),
                        9 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-xhdpi-screen.png',
                          '_density' => 'port-xhdpi',
                        ),
                        10 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-xxhdpi-screen.png',
                          '_density' => 'port-xxhdpi',
                        ),
                        11 => array(
                          '_src'     => 'www/images/android/splash/drawable-port-xxxhdpi-screen.png',
                          '_density' => 'port-xxxhdpi',
                        ),
                      ),'_name' => 'android',
                    ),
                  ),
          'icon' => array( 0 => array(
              '_src' => 'www/icons/androidicon/drawable-xhdpi-icon.png',
            ),
          ),
          '_xmlns' => 'http://www.w3.org/ns/widgets',
          '_xmlns:cdv' => 'http://cordova.apache.org/ns/1.0',
          '_id' => 'com.publixx.'.$theproject->domain,
          '_version' => '0.0.1',
        ),
      );

      $content = View::make('xml.xmlformat', $data)->render();
      $storage=File::put(storage_path('file.xml'), $content);
      return $storage;
  }
  public function formatterModule($variable){
        $formatter = Formatter::make($variable, Formatter::ARR);
        $xml   = $formatter->toXml();
        return $xml;
  }
  public function XMLDom(){

  }

  public function setupApp(Request $request)
  {

    $rootPath = storage_path('application');
    $zip = new ZipArchive();
    $zip->open($request->apple_id.'.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

    $files = new RecursiveIterator(
        new RecursiveDirectoryIterator($rootPath),
        RecursiveIterator::LEAVES_ONLY
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
    return $zip;

  }

}
