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
                                <div class="box-content" style="cursor: pointer;"
                                     onclick="window.location='/issue?id={{$row->id}}';">
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

                            <div class="col-sm-5  text-center">

                                    <div class="register-box-body">
                                        <form action="subscribe-process-update" method="post" enctype="multipart/form-data">
                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                            <div class="form-group has-feedback">
                                                <input type="text" class="form-control" placeholder="Project Name" name="projectname" value="{{ old('projectname') }}"/>
                                                <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                            </div>
                                            <div class="form-group has-feedback">
                                                <input type="email" class="form-control" placeholder="{{ trans('adminlte_lang::message.email') }}" name="email" value="{{ old('email') }}"/>
                                                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                            </div>
                                            <div class="form-group ">
                                                <label for="exampleInputFile">Project Cover</label>
                                                <input type="file" name="cover" id="imagefile" >
                                            </div>
                                            <div class="form-group ">
                                                <label for="exampleInputFile">Project Icon</label>
                                                <input type="file" name="icon" id="imagefile" >
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 ">
                                                    <button type="submit" class="btn btn-primary btn-block btn-flat">Edit</button>
                                                </div><!-- /.col -->
                                            </div>
                                        </form>

                                    </div><!-- /.form-box -->
                            </div>
                    </div>
                    <?php } ?>

                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
