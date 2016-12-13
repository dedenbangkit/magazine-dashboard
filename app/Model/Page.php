<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    //
    protected $table='page';
    public $timestamps = true;
    protected $primaryKey = 'id';

    public function insertPage($data){
        return  Page::insertGetId(
            array(
                'issue_id'=>$data['issue'],
                'page_name'=>$data['name'],
                'page_team'=>$data['team'],
                'page_description'=>$data['description']
            )
        );
    }
}
