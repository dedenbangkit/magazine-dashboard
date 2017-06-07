<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 20/12/16
 * Time: 17:20
 */
namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\Page;
use App\Model\Issue;
use App\Model\Action_log;
use ZipArchive;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Storage;
use Session;
use Zipper;
use File;
/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class PageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $activer;
    protected $authdata;
    protected $page;
    protected $action_log;
    protected $issue;
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer = 'home';
        $this->page = new Page();
        $this->issue = new Issue();
        $this->action_log = new Action_log();
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'page');
        $data['page_list'] = $this->page->getPage($request->session()->get('issue-editor'));

        return view('page', $data);
    }

    public function sample()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'page');
        $data['page_list'] = $this->page->getPage($request->session()->get('issue-editor'));

        return view('sample-page', $data);
    }
    public function sample2(Request $request)
    {
//        if(empty($request->session()->get('issue-editor'))){
//            return redirect('issue');
//        }
        $data['create']=false;
        $data['activer'] = array($this->activer, 'page');
        $data['page_list'] = $this->page->getPage($request->session()->get('issue-editor'));
        $data['issue'] = $this->page->getPageIssue($request->session()->get('issue-editor'));

        return view('page-editor', $data);
    }
    public function editorIssue(Request $request){
        $request->session()->forget('issue-editor');
        $request->session()->put('issue-editor',$request->id);
        $data='sample-page2';
        return $data;
    }
    public function addPage(Request $request)
    {
        $team = array($this->authdata->id);
        $input=[
            'issue'=>$request->session()->get('issue-editor'),
            'name'=>$request->id,
            'team'=>$team,
            'description'=>''
        ];
        $data = $this->page->insertPage($input);

        return $data;
    }
    public function deletePage(Request $request)
    {

        $data = $this->page->deletePage($request->id);

        return $data;
    }
    public function getPage(Request $request)
    {
        $data['page_list'] = $this->page->getPage($request->session()->get('issue-editor'));

        return $data;
    }
    public function loadPage(Request $request)
    {
        $pages = $this->page->getPage($request->session()->get('issue-editor'));
        foreach($pages as $i=>$row){
            $page_array= explode('<!-- end array-->',$row->test_content);
            $data['loadpage'][$i]=[
                'id'=>$row->id,
                'content_array'=>$page_array
            ];
        }
        return $data;
    }
    public function exportIssue(Request $request){
        $image_component=$this->testing_get_ur_image($request->session()->get('issue-editor'));
        if($image_component==''){
            $image_component=[''];
        }
        $folder='data-'.$request->session()->get('issue-editor');
        $newname=time().'-'.$request->session()->get('issue-editor');
        $fileName = $newname.'.json';
        File::put(public_path('json_file/'.$fileName),json_encode($image_component));
//die();
      //// Outputnya: Time-Issue->id

        $pathToAssets = array("mobile/elements/bootstrap", "mobile/elements/images","mobile/elements/css", "mobile/elements/fonts", "mobile/elements/images", "mobile/elements/js","json_file/");

        $filename = "builder_front/tmp/".$newname.".zip"; //use the /tmp folder to circumvent any permission issues on the root folder

        /* END CONFIG */


        $zip = new ZipArchive();

        $zip->open($filename, ZipArchive::CREATE);


        //add folder structure

        foreach( $pathToAssets as $thePath ) {

            // Create recursive directory iterator
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator( $thePath ),
                RecursiveIteratorIterator::LEAVES_ONLY
            );

            foreach ($files as $name => $file) {

                if( $file->getFilename() != '.' && $file->getFilename() != '..' ) {

                    // Get real path for current file
                    $filePath = $file->getRealPath();

                    $temp = explode("/", $name);

                    array_shift( $temp );

                    $newName = implode("/", $temp);

                    // Add current file to archive
                    $zip->addFile($filePath, $newName);

                }

            }

        }

        $pages= $this->page->getPage($request->session()->get('issue-editor'));
        $issue=$this->issue->getIssueId($request->session()->get('issue-editor'));
        $image_cover=$issue["issue_cover"];
        $cover_frame='<!DOCTYPE html>
<html lang="en">
<body>
    <div id="page" class="page">
    				<img src="'.$image_cover.'">
    </div><!-- /#page -->
</body>
</html>';
        $zip->addFromString("0.html", $cover_frame);

        foreach( $pages as $page=>$content ) {
            $html="<html><head>
<!-- Loading Bootstrap -->
    <link href='elements/bootstrap/css/bootstrap.css' rel='stylesheet'>


    <!-- Loading Flat UI -->
    <link href='elements/css/flat-ui.css' rel='stylesheet'>

    <link href='elements/elements/css/style.css' rel='stylesheet'>
    <link href='elements/css/style-content.css' rel='stylesheet'>

    <!-- Font Awesome -->
    <link href='elements/css/font-awesome.css' rel='stylesheet'>
</head><body>";
            $htmlclose=" <script src='elements/js/jquery-1.8.3.min.js'></script>
    <script src='elements/js/jquery-ui-1.10.3.custom.min.js'></script>
    <script src='elements/js/bootstrap.min.js'></script>
    <script src='elements/js/bootstrap-select.js'></script>
    <script src='elements/js/bootstrap-switch.js'></script>
    <script src='elements/js/flatui-checkbox.js'></script>
    <script src='elements/js/flatui-radio.js'></script>
    <script src='elements/js/jquery.tagsinput.js'></script>
    <script src='elements/js/jquery.placeholder.js'></script>
    <script>
  $('o').remove();
  $('p').removeAttr('contenteditable').removeAttr('data-editable').removeAttr('data-selector');
  $('div').removeAttr('contenteditable').removeAttr('data-editable').removeAttr('data-selector');
  $('div .frameCover').remove();
</script>
</body></html>";
            $zip->addFromString(($page+1).".html", $request->doctype."\n".$html."\n".stripslashes($content['test_content'])."\n".$htmlclose);


        }


        $zip->close();


        $yourfile = $filename;

        $file_name = basename($yourfile);
        $file_path = public_path($filename);

        $s3 = \Storage::disk('s3');
        $test=$s3->put('issue-lib/'.$newname.'.zip',file_get_contents(public_path($filename)), 'public');
         unlink($filename);
        unlink('json_file/'.$fileName);
        $this->issue->compileIssue($request->session()->get('issue-editor'),$newname.'.zip');
        $issue=$this->page->getPageIssue($request->session()->get('issue-editor'));
        if($test){
            $request->session()->flash('status_msg','Success Compiling '.$issue['issue_name']);
        }
        $this->action_log->create_log('Compiling Isssue '.$issue['issue_name'],$this->authdata->id);

        return redirect('/issue');
//
    }
    public function savePage(Request $request)
    {
               var_dump($request->id);
                $contents="";
                foreach ($request->contentIframe as $j=>$child){
                    $explodecontent=explode('<!-- /#page -->',$child['framecontent']);
                    $explodecontent[0]= str_replace(" <!-- end array--> ","",$explodecontent[0]);
                    $contents.= $explodecontent[0]." <!-- end array--> ";
                }
                $this->page->savePage($request->id,$request->content,$contents);
//                $this->page->savePage($row['id'],$content,$row['content']);

            return $request->id;


    }
    public function iupload(Request $request){
        $s3 = \Storage::disk('s3');
        $image = $request->file('imageFileField');
        $file_path= '/images-lib/';
        $uploads_dir = 'builder_front/elements/images/uploads';//specify the upload folder, make sure it's writable!
        $relative_path = 'https://s3-ap-southeast-1.amazonaws.com/publixx-statics/images-lib';//specify the relative path from your elements to the upload folder


        /* DON'T CHANGE ANYTHING HERE!! */

        $return = array();


        //does the folder exist?
        if( !file_exists( $uploads_dir ) ) {

            $return['code'] = 0;
            $return['response'] = "The specified upload location does not exist. Please provide a correct folder in /iupload.php";

            die( json_encode( $return ) );

        }

        //is the folder writable?
        if( !is_writable( $uploads_dir ) ) {

            $return['code'] = 0;
            $return['response'] = "The specified upload location is not writable. Please make sure the specified folder has the correct write permissions set for it.";

            die( json_encode( $return ) );

        }

        if ( !isset($_FILES['imageFileField']['error']) || is_array($_FILES['imageFileField']['error']) ) {

            $return['code'] = 0;
            $return['response'] = "Something went wrong with the file upload; please refresh the page and try again.";

            die( json_encode( $return ) );

        }

        $name = time().'-'.$_FILES['imageFileField']['name'];
        if ($s3->put($file_path.''.$name, file_get_contents($image), 'public')) {
//            $s3->put($file_path.''.$name, file_get_contents($_FILES['imageFileField']['name']), 'public');
            //echo "yes";

        } else {

            $return['code'] = 0;
            $return['response'] = "The uploaded file couldn't be saved. Please make sure you have provided a correct upload folder and that the upload folder is writable.";

        }

        //print_r ($_FILES);

        $return['code'] = 1;
        $return['response'] = $relative_path."/".$name;

        echo json_encode( $return );
    }
    public function testing_get_ur_image($id){
        $pages= $this->page->getPage($id);
        foreach( $pages as $page=>$content ) {
            // read all image tags into an array
            preg_match_all('/<img[^>]+>/i',stripslashes($content['test_content']), $imgTags);
//            print_r($imgTags[0]);
            for ($i = 0; $i < count($imgTags[0]); $i++) {
                // get the source string
                preg_match('/src="([^"]+)/i',$imgTags[0][$i], $imgage);

                // remove opening 'src=' tag, can`t get the regex right
                $origImageSrc[] = str_ireplace( 'src="', '',  $imgage[0]);
            }
// will output all your img src's within the html string
//            print_r($origImageSrc);
        }
        if(empty($origImageSrc)){
            return '';
        }
        return $origImageSrc;
    }

}
