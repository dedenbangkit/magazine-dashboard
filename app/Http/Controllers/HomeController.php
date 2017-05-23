<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.2/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Model\Project;
use App\Model\Issue;
use App\Model\Invoice;


/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $activer;
    protected $authdata;
    protected $project;
    protected $issue;
    protected $invoice;
    public function __construct()
    {
        $this->authdata = $this->authData();
        $this->activer = 'home';
        $this->invoice = new Invoice();
        $this->issue = new Issue();
        $this->project = new Project();
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
        $data['activer'] = array($this->activer);
        $data['countIssuePub']=count($this->issue->getProjectPublishById($this->authdata->project_id));
        $data['countIssue']=count($this->issue->getIssue($this->authdata->project_id));
        $data['billing']=count($this->invoice->getInvoiceDetailByProject($this->authdata->project_id));
        return view('home', $data);
    }
}
