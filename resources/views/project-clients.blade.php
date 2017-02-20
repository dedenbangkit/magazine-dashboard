@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
                <div class="col-md-12">

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
                  <div class="nav-tabs-custom">
                              <ul class="nav nav-tabs">
                                <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true"><i class="fa fa-newspaper-o"></i>&nbsp;{{$row->project_name}}</a></li>
                                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Build Settings</a></li>
                                <li class="dropdown pull-right">
                                  <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <i class="fa fa-download"></i> Download
                                  </a>
                                  <ul class="dropdown-menu">
                                    <li><img class="img-responsive" src="/img/projects/barcode.gif"></li>
                                    <li><a class="btn btn-block btn-default btn-flat" href="#"><i class="fa fa-apple"></i>&nbsp; Apple IOS</a></li>
                                    <li><a class="btn btn-block btn-default btn-flat" href="#"><i class="fa fa-android"></i>&nbsp; Android OS</a></li>
                                  </ul>
                                </li>
                              </ul>
                              <div class="tab-content">
                                <div class="tab-pane active" id="tab_1">
                                  <div class="box-body">


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
                                                  <td width="150px"><label>Magazine Name</label></td>
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
                                              <tr>
                                                  <td><label>Appstore Url</label></td>
                                                  <td width="10px" class="text-center"><label> : </label></td>
                                                  <td>https://itunes.apple.com/us/app/cnn/id331786748?mt=8</td>
                                              </tr>
                                              <tr>
                                                  <td><label>Google Play Url</label></td>
                                                  <td width="10px" class="text-center"><label> : </label></td>
                                                  <td>https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone&hl=en</td>
                                              </tr>
                                          </table>
                                          <button class="btn btn-primary btn-block btn-flat editor">Edit</button>
                                      </div>
                                  </div>

                                  <?php if($create){?>
                                  <div class="col-sm-5 editor-content text-center hidden">
                                      <div class="register-box-body">
                                          <form action="subscribe-process-update" method="post" enctype="multipart/form-data">
                                              <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                              <div class="form-group has-feedback">
                                                  <input type="text" class="form-control" placeholder="Magazine Name"
                                                         name="projectname" value="{{$row->project_name}}"/>
                                                  <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                              </div>
                                              <div class="form-group has-feedback">
                                                  <input type="text" class="form-control" placeholder="Company Name"
                                                         name="companyname" value="{{$row->company_name}}"/>
                                                  <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                              </div>
                                              <div class="form-group has-feedback">
                                                  <input type="text" class="form-control" placeholder="Company Phone"
                                                         name="companyphone" value="{{$row->company_phone}}"/>
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

                                </div>

                                </div>
                                <!-- /.tab-pane -->
                                <div class="tab-pane" id="tab_2">
                                  <div class="box-body">
                                  <div class="col-md-12">
                                    <div class="col-md-6">
                                  <form class="form-horizontal" action="build-process-update" method="post">
                                          <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                          <!-- text input -->
                                          <div class="form-group">
                                            <label><i class="fa fa-apple"></i> Application ID</label>
                                            <input type="text" class="form-control" placeholder="eg. com.bajaklaut.magazineapp">
                                          </div>

                                          <!-- textarea -->
                                          <div class="form-group">
                                            <label><i class="fa fa-apple"></i> Prefix</label>
                                            <input type="text" class="form-control" placeholder="eg. S4G4BK2VSQ">
                                          </div>

                                          <div class="form-group">
                                            <label><i class="fa fa-apple"></i> Status</label>
                                            <select class="form-control">
                                              <option>Development</option>
                                              <option>Published</option>
                                            </select>
                                          </div>

                                          <div class="form-group">
                                            <label><i class="fa fa-android"></i> API Key</label>
                                            <input type="text" class="form-control" placeholder="eg. com.bajaklaut.magazineapp">
                                          </div>

                                          </div>

                                          <div class="col-md-6" style="padding-left:50px;">

                                          <div class="form-group">
                                            <label>Screen Orientation</label>
                                            <div class="checkbox">
                                              <label>
                                                <input type="checkbox">
                                                Potrait Only
                                              </label>
                                            </div>
                                            <div class="checkbox">
                                              <label>
                                                <input type="checkbox">
                                                Both Orientations
                                              </label>
                                            </div>
                                          </div>

                                          <hr>

                                          <div class="form-group">
                                          <label for="exampleInputFile"><i class="fa fa-apple"></i> Provisioning Profile (.mobiprovision)</label>
                                          <input type="file" name="cover" id="imagefile">
                                          </div>

                                          <hr>

                                          <div class="row">
                                          <div class="col-md-6">
                                          <div class="form-group">
                                          <label for="exampleInputFile"><i class="fa fa-apple"></i> Certificate (.p12)</label>
                                          <input type="file" name="cover" id="imagefile" style="margin-top:15px;">
                                          </div>
                                          </div>

                                          <div class="col-md-6">
                                          <div class="form-group">
                                          <label for="exampleInputFile"><i class="fa fa-apple"></i> Certificate Password</label>
                                          <input type="password" class="form-control">
                                          </div>
                                          </div>
                                          </div>

                                          <hr>
                                          <div class="form-group">
                                          <label for="exampleInputFile"><i class="fa fa-android"></i> Kestore File (.keystore)</label>
                                          <input type="file" name="cover" id="imagefile">
                                          </div>

                                        </div>
                                        </div>
                                        </div>
                                        </form>
                                </div>
                                <!-- /.tab-pane -->
                              </div>
                              <!-- /.tab-content -->
                  </div>

                    <?php } } ?>
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
