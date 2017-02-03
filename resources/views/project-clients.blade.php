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
                            <div class="col-sm-4 ">
                                <div class="row">
                                    <table>
                                        <tr>
                                            <td><label>Magazine Name</label></td>
                                            <td><label> : </label></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label>Company Name</label></td>
                                            <td><label> : </label></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label>Magazine Name</label></td>
                                            <td><label> : </label></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label>Date </label></td>
                                            <td><label> : </label></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label>Service </label></td>
                                            <td><label> : </label></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                    <button class="btn btn-primary btn-block btn-flat">Edit</button>
                                    <button class="btn btn-primary btn-block btn-flat">Build Apps</button>
                                </div>
                                <div class="row text-center">
                                    <label>Download Apps</label>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button class="btn btn-primary btn-block btn-flat"><i class="fa fa-android"> Android</i></button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button class="btn btn-primary btn-block btn-flat"><i class="fa fa-apple"> Ios</i></button>
                                    </div>


                                </div>
                            </div>
                            <?php if($create){?>
                            <div class="col-sm-5  text-center hidden">

                                <div class="register-box-body">
                                    <form action="subscribe-process-update" method="post" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                        <div class="form-group has-feedback">
                                            <input type="text" class="form-control" placeholder="Project Name"
                                                   name="projectname" value="Magazine Name"/>
                                            <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                        </div>
                                        <div class="form-group has-feedback">
                                            <input type="text" class="form-control" placeholder="Project Name"
                                                   name="companyname" value="Company Name"/>
                                            <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputFile">Project Cover</label>
                                            <input type="file" name="cover" id="imagefile">
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputFile">Project Icon</label>
                                            <input type="file" name="icon" id="imagefile">
                                        </div>
                                        <div class="form-group ">
                                            <div class="col-sm-6">
                                                <label for="exampleInputFile">Android Sertificate</label>
                                                <input type="file" name="cover" id="imagefile">
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputFile">Ios Sertificate </label>
                                                <input type="file" name="cover" id="imagefile">
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 ">
                                                <button type="submit" class="btn btn-primary btn-block btn-flat">Edit
                                                </button>
                                            </div>
                                            <!-- /.col -->
                                        </div>
                                    </form>

                                </div>
                                <!-- /.form-box -->
                            </div>
                            <div class="col-sm-5   ">
                                <h3>Build & Certificate</h3>
                                <div class="register-box-body">
                                        <table>
                                            <tr>
                                                <td><label>Android Certificate</label></td>
                                                <td class="text-center" width="15px"><label>:</label></td>
                                                <td><label> Not available</label></td>
                                            </tr>
                                            <tr>
                                                <td><label>Ios Certificate</label></td>
                                                <td class="text-center" width="10px" ><label>:</label></td>
                                                <td><label> Not available</label></td>
                                            </tr>
                                        </table>
                                    <form action="build-process-update" method="post" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                        <div class="row">
                                        <div class="form-group ">
                                            <div class="col-sm-6">
                                                <label for="exampleInputFile">Android Certificate</label>
                                                <input type="file" name="cover" id="imagefile">
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputFile">Ios Certificate </label>
                                                <input type="file" name="cover" id="imagefile">
                                            </div>
                                        </div>
                                        </div>
<br/>
                                        <div class="row">
                                            <div class="col-md-12 ">
                                                <button type="submit" class="btn btn-primary btn-block btn-flat">
                                                    Upload Certificate
                                                </button>
                                            </div>
                                            <!-- /.col -->
                                        </div>
                                    </form>
                                    <br/>
                                    <div class="row">
                                    <div class="col-md-12 ">
                                        <button class="btn btn-primary btn-block btn-flat">
                                           Build Apps
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <!-- /.form-box -->
                            </div>

                        <?php } } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
