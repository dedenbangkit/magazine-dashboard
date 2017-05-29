<?php

namespace App\Http\Controllers;


use App\Http\Requests;
use App\Model\Company;
use App\Model\Page;
use Illuminate\Http\Request;
use App\Model\Project;
use App\Model\User;
use App\Model\Issue;
use App\Model\Service;
use App\Model\Invoice;
use App\Model\Action_log;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
class SubscribeController extends Controller
{
    protected $activer;
    protected $authdata;
    protected $project;
    protected $company;
    protected $user;
    protected $issue;
    protected $service;
    protected $invoice;
    protected $page;
    protected $access;
    protected $action_log;
    public function __construct()
    {
        $this->access= array('administrator','supervisor','leader');
        $this->project = new Project();
        $this->company = new Company();
        $this->user = new User();
        $this->issue = new Issue();
        $this->service = new Service();
        $this->invoice = new Invoice();
        $this->page = new Page();
        $this->action_log = new Action_log();
        $this->authdata = $this->authData();
        $this->activer = 'subscribe';
        $this->middleware('auth');
    }

    //
    /**
     * Show add client form.
     *
     * @return Response
     */
    public function showFormSubscribe()
    {
        $data['activer']=array($this->activer,'add subscriber');
        $data['service']= $this->service->getService();
        return view('new-subscribe',$data);
    }
    /**
     * Show add clientprocess.
     *
     * @return Reditrect to dashboard
     */
    public function subscribeProcessAdd(Request $request){
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        Validator::extend('companyphonecheck', function ($attribute, $value, $parameters)
        {   $find=$this->company->findCompany('company_phone',$value);
            if($find){
                return false;
            }
            return true;
        });
        Validator::extend('companyemailcheck', function ($attribute, $value, $parameters)
        {   $find=$this->company->findCompany('company_email',$value);
            if($find){
                return false;
            }
            return true;
        });
        $messages = [
            'companyphonecheck' => 'Phone already registered.',
            'companyemailcheck' => 'Email already registered.',
        ];
        $validator = Validator::make($request->all(), [
            'companyemail' => 'required|max:255|email|companyemailcheck',
            'companyname' => 'required|max:30|regex:/^([a-zA-Z0-9 ])+$/i',
            'name' => 'required|max:30|regex:/^([a-zA-Z0-9 ])+$/i',
            'email' => 'required|max:255|email|unique:users',
            'phone' => 'required|max:30|unique:users|regex:/^([0-9])+$/i',
            'password' => 'required|max:30|confirmed|regex:/^([a-zA-Z0-9 ])+$/i',
            'companyphone' => 'required|max:30|companyphonecheck|regex:/^([0-9])+$/i',
            'projectname' => 'required|max:30|regex:/^([a-zA-Z0-9#* ])+$/i',
        ],$messages);
        if ($validator->fails()) {

            return Redirect::back()
                ->with('msg', 'fail')
                ->withErrors($validator,'create')
                ->withInput();
        };
        if (!empty($request->file('cover'))) {
            Image::make(Input::file('cover'))->resize(300, 200)->save('img/projects/' . $request->file('cover')->getClientOriginalName());
            $cover=$request->file('cover')->getClientOriginalName();
        }else{
            $cover=$project_data[0]['project_cover'];
        }
        $datainput = array(
            'companyname'=>$request->companyname,
            'companyphone'=>$request->companyphone,
            'companyemail'=>$request->companyemail,
            'service'=>$request->service,
            'name' => $request->projectname,
            'cover' => $cover,
            'master' => $this->authdata->id,
            'key' => mt_rand(111111,999999),
        );
        $company_id=$this->company->insertCompany($datainput);
        $project_id=$this->project->insertProject($datainput,$company_id);
        $this->user->insertUser($request->all(),$project_id);
        return redirect('/projects');
    }
    public function subscribeProcessUpdate(Request $request){
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        if (!empty($request->file('cover'))) {
            Image::make(Input::file('cover'))->resize(300, 200)->save('img/projects/' . $request->file('cover')->getClientOriginalName());
            $cover=$request->file('cover')->getClientOriginalName();
        }else{
            $cover=$project_data[0]['project_cover'];
        }
        $project_data=$this->project->getProjectById($this->authdata->project_id);
        $datainput = array(
            'name' => $request->projectname,
            'company_name'=> $request->companyname,
            'company_email'=>$request->companyemail,
            'cover' => $cover,
            'phone'=>$request->companyphone,
            'company_id'=>$project_data[0]['company_id'],
            'project_id'=>$this->authdata->project_id,
            'master' => $this->authdata->id,
        );

        $this->project->updateProject($datainput);
        $this->company->updateCompany($datainput);
        return redirect('/projects');
    }
    public function showClient(){
        $data['access']=$this->authdata->position;
        $data['activer']=array($this->activer,'Client');
        return view('client-list',$data);
    }
    public  function clientList(){
        $data['data']=$this->user->getUserClient();
        return $data;
    }
    public function invoiceList(Request $request){
        $data['access']=$this->authdata->position;
        $data['activer']=array($this->activer,'invoice');
        $data['id_token']=$request->id;

        return view('invoice-list',$data);
    }
    public function getInvoiceList(Request $request){
        $data['data']=$this->invoice->invoiceList();
        return $data;
    }
    public function invoiceDetail(Request $request){
        $data['access']=$this->authdata->position;
        $data['activer']=array($this->activer,'invoice');
        $data['id_token']=$request->id;
        return view('invoice-detail',$data);
    }
    public function getInvoiceDetail(Request $request){
        $data['data']=$this->invoice->getInvoiceDetail($request->id);
        return $data;
    }
    public function getService(Request $request){
        $data['activer']=array($this->activer,'subscribe service');
        $data['list']=$this->service->getService();
        return view('service-list',$data);
    }
}
