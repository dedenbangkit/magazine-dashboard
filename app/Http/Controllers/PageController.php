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
        $data['page_list'] = $this->page->getPage(11);

        return view('page', $data);
    }

    public function sample()
    {
        $data['create']=false;
        $data['activer'] = array($this->activer, 'page');
        $data['page_list'] = $this->page->getPage(11);

        return view('sample-page', $data);
    }
    public function getPage()
    {
        $data['page_list'] = $this->page->getPage(11);

        return $data;
    }
    public function savePage(Request $request)
    {
            foreach($request->contentArray as $i=>$row){
                $this->page->savePage($row['id'],$row['content']);
            }


    }
}