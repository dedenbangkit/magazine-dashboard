<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Invoice extends Model
{
    protected $table='company';
    public $timestamps = true;
    protected $primaryKey = 'id';


}
