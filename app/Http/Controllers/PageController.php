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
use ZipArchive;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Storage;
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
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer = 'home';
        $this->page = new Page();
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

        return view('page-editor', $data);
    }
    public function editorIssue(Request $request){
        $request->session()->forget('issue-editor');
        $request->session()->put('issue-editor',$request->id);
        $data='sample-page2';
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
        $pathToAssets = array("builder_front/elements/bootstrap", "builder_front/elements/css", "builder_front/elements/fonts", "builder_front/elements/images", "builder_front/elements/js");

        $filename = "builder_front/tmp/website3.zip"; //use the /tmp folder to circumvent any permission issues on the root folder

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
        $pages= $this->page->getPage(11);


        foreach( $pages as $page=>$content ) {

            $zip->addFromString($page.".html", $request->doctype."\n".stripslashes($content['page_content']));

            //echo $content;

        }

        //$zip->addFromString("testfilephp.txt" . time(), "#1 This is a test string added as testfilephp.txt.\n");
        //$zip->addFromString("testfilephp2.txt" . time(), "#2 This is a test string added as testfilephp2.txt.\n");

        $zip->close();


        $yourfile = $filename;

        $file_name = basename($yourfile);

        header("Content-Type: application/zip");
        header("Content-Transfer-Encoding: Binary");
        header("Content-Disposition: attachment; filename=$file_name");
        header("Content-Length: " . filesize($yourfile));

//        readfile($yourfile);

        unlink($filename);

        exit;
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
}
