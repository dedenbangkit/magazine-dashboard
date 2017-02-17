<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Company extends Model
{
    //
    protected $table='company';
    public $timestamps = true;
    protected $primaryKey = 'id';


    public function updateCompany($data){
        return  Company::where('id',$data['company_id'])
            ->update(
                [
                    'company_name'=>$data['company_name'],
                    'company_phone'=>$data['phone'],
                    'updated_at'=>Carbon::now()
                ]
            );
    }
}
