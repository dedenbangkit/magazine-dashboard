@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
                <div class="col-md-12">
                  <div class="nav-tabs-custom">
                              <ul class="nav nav-tabs">
                                <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Tab 1</a></li>
                                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Tab 2</a></li>
                                <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false">Tab 3</a></li>
                                <li class="dropdown">
                                  <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                    Dropdown <span class="caret"></span>
                                  </a>
                                  <ul class="dropdown-menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                                    <li role="presentation" class="divider"></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                                  </ul>
                                </li>
                                <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
                              </ul>
                              <div class="tab-content">
                                <div class="tab-pane active" id="tab_1">
                                  <div class="box-body">
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
                                  <div class="col-md-3" onclick="window.location='/issue?id={{$row->id}}';" style="cursor:pointer">
                                    <img class="img-responsive" src="{{asset('/img/projects/'.$row->project_cover)}}" alt="Photo">
                                    <ul class="list-group list-group-unbordered">
                                      <li class="list-group-item">
                                        <b>Project Name</b> <a class="pull-right">{{$row->project_name}}</a>
                                      </li>
                                      <li class="list-group-item">
                                        <b>Date Created</b> <a class="pull-right">{{date('d-m-Y',strtotime($row->created_at))}}</a>
                                      </li>
                                    </ul>

                                  </div>


                                  <div class="col-sm-4 ">
                                      <div class="row editor-button">
                                          <table>
                                              <tr>
                                                  <td><label>Magazine Name</label></td>
                                                  <td width="10px" class="text-center" ><label> : </label></td>
                                                  <td>{{$row->project_name}}</td>
                                              </tr>
                                              <tr>
                                                  <td><label>Company Name</label></td>
                                                  <td width="10px" class="text-center"><label> : </label></td>
                                                  <td>{{$row->company_name}}</td>
                                              </tr>
                                              <tr>
                                                  <td><label>Company Phone</label></td>
                                                  <td width="10px" class="text-center" ><label> : </label></td>
                                                  <td>{{$row->company_phone}}</td>
                                              </tr>
                                              <tr>
                                                  <td><label>Expired Date </label></td>
                                                  <td width="10px" class="text-center" ><label> : </label></td>
                                                  <td><?php echo (empty($row->date_0f_redeem)?"":date('d-m-Y',strtotime($row->date_0f_redeem))) ?></td>
                                              </tr>
                                              <tr>
                                                  <td><label>Service </label></td>
                                                  <td width="10px" class="text-center" ><label> : </label></td>
                                                  <td>{{$row->service_name}}</td>
                                              </tr>
                                          </table>
                                          <button class="btn btn-primary btn-block btn-flat editor">Edit</button>
                                          <button class="btn btn-primary btn-block btn-flat build">Build Apps</button>
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
                                </div>  

                                </div>
                                <!-- /.tab-pane -->
                                <div class="tab-pane" id="tab_2">
                                  The European languages are members of the same family. Their separate existence is a myth.
                                  For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                                  in their grammar, their pronunciation and their most common words. Everyone realizes why a
                                  new common language would be desirable: one could refuse to pay expensive translators. To
                                  achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                                  words. If several languages coalesce, the grammar of the resulting language is more simple
                                  and regular than that of the individual languages.
                                </div>
                                <!-- /.tab-pane -->
                                <div class="tab-pane" id="tab_3">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  It has survived not only five centuries, but also the leap into electronic typesetting,
                                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                  like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                <!-- /.tab-pane -->
                              </div>
                              <!-- /.tab-content -->
                  </div>


                  <div class="box box-default">
                  <div class="box-header with-border">
                    <i class="fa fa-warning"></i>

                    <h3 class="box-title"><?=  ucfirst(array_last($activer));?></h3>
                  </div>
                  <div class="box-body">




                    <?php if($create){?>
                    <div class="col-sm-5 editor-content text-center hidden">
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
                                <div class="form-group has-feedback">
                                    <input type="text" class="form-control" placeholder="Project Name"
                                           name="companyphone" value="Company phone"/>
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
                    <div class="col-sm-5 build-content  ">
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

                  </div>

                </div>
                <?php } } ?>

                    </div>
                </div>
@endsection
@section('script-content')
    <script>

        $('.editor-button').on('click', '.editor', function () {
            $('.editor-content').removeClass("hidden");
            $('.build-content').addClass("hidden");
        });

        $('.editor-button').on('click', '.build', function () {
            $('.editor-content').addClass("hidden");
            $('.build-content').removeClass("hidden");
        });
    </script>
@endsection
