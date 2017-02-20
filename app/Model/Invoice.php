<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Invoice extends Model
{
    protected $table='invoice';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertInvoice($data){
        // restore array use unserialize
        return  Invoice::insertGetId(
            array(
                'company_id'=>$data['company_id'],
                'project_id'=>$data['project_id'],
                'service_id'=>$data['service_id'],
                'nominal'=>$data['nominal']
            )
        );
    }
    public function getInvoiceDetail($data){
        return Invoice::where('company.deleted_at',null)
            ->where('invoice.company_id',$data)
            ->leftjoin('company','company.id','=','invoice.company_id')
            ->leftjoin('project','company.id','=','project.company_id')
            ->leftjoin('service','service.id','=','project.service_id')
            ->select('invoice.*','company.company_name','project_name','service.service_name')
            ->get();
    }
    public function invoiceList(){
        return Invoice::where('company.deleted_at',null)
            ->where('invoice.payment','unpaid')
            ->leftjoin('company','company.id','=','invoice.company_id')
            ->leftjoin('project','company.id','=','project.company_id')
            ->leftjoin('service','service.id','=','project.service_id')
            ->groupby('invoice.company_id')
            ->select('invoice.*','company.company_name','project_name','service.service_name')
            ->get();
    }


}
