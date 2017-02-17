<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    //
    protected $table='service';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function getServiceById($id){
        return Issue::whereNull('deleted_at')
            ->where('id',$id)
            ->orderBy('created_at','desc')
            ->get();
    }
}
