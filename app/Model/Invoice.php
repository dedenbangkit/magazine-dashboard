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

}
