@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
    <div class="container spark-screen">
        <div class="row">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><?=  ucfirst(array_last($activer));?></div>
                        <div class="panel-body">
                            <!-- <?php if($create == true) {?>
                            <div class="col-md-3  text-center">
                                <div class="box-content" style="cursor: pointer;" onclick="window.location='/create-project';">
                                    <div class="box-content-inside-new">
                                        <img src="{{asset('/img/add new.png')}}"/>
                                    </div>
                                </div>
                            </div>
                            <?php } ?> -->
                            <?php foreach($projects as $i=>$row){ ?>
                            <div class="col-sm-3  text-center">
                                <div class="box-content" style="cursor: pointer;" onclick="window.location='/issue?id={{$row->id}}';">
                                    <div class="box-content-inside">
                                        <div class="row">
                                            <img src="{{asset('/img/projects/'.$row->project_cover)}}">
                                        </div>
                                        <div class="row">
                                            <b>{{$row->project_name}}</b>
                                        </div>
                                        <div class="row">
                                            <p class="font-light"
                                               style="color: green">{{date('d-m-Y',strtotime($row->created_at))}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>


                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection
