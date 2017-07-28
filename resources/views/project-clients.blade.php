@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')

<div class="row">
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
                                @if(session()->has('success'))
                                <li class=""><a href="#tab_1" data-toggle="tab" aria-expanded="false"><i class="fa fa-newspaper-o"></i>&nbsp;{{$row->project_name}}</a></li>
                                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">App Settings</a></li>
                                <li class="active"><a href="#tab_3" data-toggle="tab" aria-expanded="true">Build Settings</a></li>
                                @else
                                <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true"><i class="fa fa-newspaper-o"></i>&nbsp;{{$row->project_name}}</a></li>
                                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">App Settings</a></li>
                                <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false">Build Settings</a></li>
                                @endif
                                @if(!empty($row->build_id))
                                <li class="dropdown pull-right">
                                  <a class="dropdown-toggle" style="color:#367fa9;font-weight:600;" data-toggle="dropdown" href="https://build.phonegap.com/apps/{{$row->build_id}}" aria-expanded="false">
                                    <i class="fa fa-download"></i> Download
                                  </a>
                                  <ul class="dropdown-menu">
                                    <li>{!! QrCode::size(200)->margin(0)->generate('https://build.phonegap.com/apps/'.$row->build_id); !!}</li>
                                  </ul>
                                </li>
                                @endif
                              </ul>

                              <div class="tab-content">
                                @if(session()->has('success'))
                                <div class="tab-pane" id="tab_1">
                                @else
                                  <div class="tab-pane active" id="tab_1">
                                @endif

                                @if(session()->has('done'))
                                <div class="alert alert-success alert-dismissible">
                                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                  <h4><i class="icon fa fa-check"></i>Done Setup Process!</h4>
                                  Please wait few hours (approximately 1 hour) to download the final applications
                                </div>
                                @endif
                                  <div class="box-body">
                                  <div class="col-md-3" onclick="window.location='/issue?id={{$row->id}}';" style="cursor:pointer">
                                    <img class="img-responsive" src="{{$row->project_cover}}" alt="Photo">
                                    <ul class="list-group list-group-unbordered">
                                      <li class="list-group-item">
                                        <b>Company Name</b> <a class="pull-right">{{$row->company_name}}</a>
                                      </li>
                                      <li class="list-group-item">
                                        <b>Apps Name</b> <a class="pull-right">{{$row->project_name}}</a>
                                      </li>
                                      <li class="list-group-item">
                                        <b>Date Created</b> <a class="pull-right">{{date('d-m-Y',strtotime($row->created_at))}}</a>
                                      </li>
                                    </ul>

                                  </div>

                                  <?php if($create){?>
                                  <div class="col-sm-9">
                                      <div class="row editor-button">
                                        <form action="subscribe-process-update" method="post" enctype="multipart/form-data">
                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                            <input type="hidden" name="companyname" value="{{$row->project_name}}">
                                          <table>
                                              <tr class="com-name">
                                                  <td width="200px"><label>Apps Name</label></td>
                                                  <td width="40px" class="text-center" ><label> : </label></td>
                                                  <td>{{$row->project_name}}</td>
                                              </tr>
                                              <tr class="editor-content hidden">
                                                  <td width="200px"><label>Magazine Name</label></td>
                                                  <td width="40px" class="text-center"><label> : </label></td>
                                                  <td><div class="form-group has-feedback">
                                                      <input type="text" class="form-control" placeholder="Magazine Name"
                                                             name="projectname" value="{{$row->project_name}}"/>
                                                      <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                                  </div>
                                                  </td>
                                              </tr>
                                              <tr class="com-phone">
                                                  <td><label>Company Email</label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td>{{$row->company_email}}</td>
                                              </tr>
                                              <tr class="com-phone">
                                                  <td><label>Company Phone</label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td>{{$row->company_phone}}</td>
                                              </tr>
                                              <tr class="editor-content hidden">
                                                  <td><label>Company Email</label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td><div class="form-group has-feedback">
                                                      <input type="email" class="form-control" placeholder="Support Email"
                                                             name="companyemail" value="{{$row->company_email}}"/>
                                                      <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                                  </div>
                                                  </td>
                                              </tr>
                                              <tr class="editor-content hidden">
                                                  <td><label>Company Phone</label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td><div class="form-group has-feedback">
                                                      <input type="text" class="form-control" placeholder="Company Phone"
                                                             name="companyphone" value="{{$row->company_phone}}"/>
                                                      <span class="glyphicon glyphicon-book form-control-feedback"></span>
                                                  </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><label>Expired Date </label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td><?php echo (empty($row->date_0f_redeem)?"":date('d-m-Y',strtotime($row->date_0f_redeem))) ?></td>
                                              </tr>
                                              <tr>
                                                  <td><label>Service </label></td>
                                                  <td class="text-center" ><label> : </label></td>
                                                  <td>{{$row->service_name}}</td>
                                              </tr>
                                              @if(!empty($row->build_id))
                                              <tr>
                                                  <td><label>Download Url</label></td>
                                                  <td class="text-center"><label> : </label></td>
                                                  <td><a href="https://build.phonegap.com/apps/{{$row->build_id}}">https://build.phonegap.com/apps/{{$row->build_id}}</a></td>
                                              </tr>
                                              @endif
                                          </table>
                                          <hr>
                                          <button type="submit" class="btn btn-primary btn-social btn-flat editor-content hidden"><i class="fa fa-check"></i>Confirm Edit</button>
                                        </form>

                                          <button class="btn btn-primary btn-flat editor btn-social"><i class="fa fa-edit"></i>Update Info</button>
                                      </div>
                                  </div>
                                      <!-- /.form-box -->
                                  </div>

                                </div>
                                <!-- /.tab-pane app settings -->
                                <div class="tab-pane" id="tab_2">
                                  <div class="box-body">
                                    <div class="col-md-6">
                                      Since each platform has different image requirements, it’s best to make a source image for the largest size needed.
                                      This Photoshop templates provides the recommended size and guidelines of the artwork’s safe zone:<br><br>
                                      <ul>
                                        <li><a href="{{asset('img/res/icon.psd')}}">Icon.psd</a></li>
                                        <li><a href="{{asset('img/res/splash.psd')}}">Splash Screen.psd</a></li>
                                      </ul>
                                      <hr>
                                      <div class="row">
                                      <div class="col-md-6">
                                        <p>
                                        <b>Icon Guide</b><br>
                                        Format: Portable Network Graphics (.png)<br>
                                        Size: 1024px * 1024px</p><hr>
                                        <img style="border:1px #DDD solid" class="img img-responsive" src="{{ asset('img/your-icon.png') }}">
                                      </div>
                                      <div class="col-md-6">
                                        <p>
                                        <b>Splash Screen Guide</b><br>
                                        Format: Portable Network Graphics (.png)<br>
                                        Size: 2208px * 2208px</p><hr>
                                        <img style="border:1px #DDD solid" class="img img-responsive" src="{{ asset('img/your-splash.png') }}">
                                      </div>
                                      </div>
                                    </div>

                                    <div class="col-md-6">
                                      <form action="{{url('app-setting-update')}}" method="post" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="hidden" name="appid" value="{{$row->id}}">
                                        <div class="form-group">
                                          <label><i class="fa fa-apple"></i> <i class="fa fa-android"></i> Bundle ID</label>
                                          <input type="text" name="dev_id" class="form-control" value="com.{{strtolower(str_replace(' ', '_',$row->company_name))}}.{{strtolower(str_replace(' ', '_',$row->project_name))}}">
                                        </div>
                                        <div class="form-group">
                                          <label><i class="fa fa-apple"></i> Prefix (IOS ONLY)</label>
                                          <input type="text" name="apple_prefix" id="apple_prefix" class="form-control" placeholder="eg. S4G4BK2VSQ" value="{{$row->prefix}}">
                                        </div>
                                        <!-- <div class="form-group">
                                        <label>Upload splash screen (.zip)</label>
                                        <input type="file" name="splashicon" id="splashicon">
                                        </div> -->

                                        <div class="form-group">
                                        <label>Upload icon (.png)</label>
                                        <input type="file" name="iconpng" id="iconpng" accept="image/x-png">
                                        </div>

                                        <div class="form-group">
                                        <label>Upload splash screen (.png)</label>
                                        <input type="file" name="splashpng" id="splashpng" accept="image/x-png">
                                        </div>

                                        <hr>
                                        <button type="submit" class="btn btn-primary btn-flat editor btn-social"><i class="fa fa-gear"></i>Update Settings</button>
                                      </form>
                                    </div>

                                    <div class="col-md-12"><hr></div>
                                    <br>
                                  </div>
                                  </form>
                                </div>
                                <!-- /.tab-pane build settings -->
                                @if(session()->has('success'))
                                <div class="tab-pane active" id="tab_3">
                                @else
                                <div class="tab-pane" id="tab_3">
                                @endif

                                @if(session()->has('success'))
                                <div class="alert alert-success alert-dismissible">
                                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                  <h4><i class="icon fa fa-check"></i> Settings Updated!</h4>
                                  Your Application is ready to build.
                                </div>
                                @endif
                                <form action="{{url('build-app')}}" method="post" enctype="multipart/form-data">
                                  <div class="box-body">
                                    <div class="col-md-6">
                                          <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                          <input type="hidden" name="appid" value="{{$row->id}}">
                                          <!-- text input -->
                                          <h4 class="box-title">Apple Certificate and Mobile Provision</h4>
                                          Read documentation for <a href="https://developer.apple.com/support/certificates/">Apple Certificate</a> and <a href="https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html">Apple Mobile Provision</a>
                                          <hr>
                                          <div class="row">
                                          <div class="col-md-6">
                                          <div class="form-group">
                                          <label for="apple_mobiprovision"><i class="fa fa-apple"></i> Provisioning Profile (.mobiprovision)</label>
                                          <input type="file" name="apple_provision" id="apple_provision" style="margin-top:15px;">
                                          </div>
                                          </div>
                                          <div class="col-md-6">
                                          <div class="form-group">
                                            <label><i class="fa fa-apple"></i> Status</label>
                                            <select class="form-control" name="apple_status">
                                              <option>Development</option>
                                              <option>Distribution</option>
                                            </select>
                                          </div>
                                          </div>
                                          </div>

                                          <div class="row">
                                          <div class="col-md-6">
                                          <div class="form-group">
                                          <label for="apple_certificate"><i class="fa fa-apple"></i> Certificate (.p12)</label>
                                          <input type="file" name="apple_certificate" id="apple_certificate" style="margin-top:15px;">
                                          </div>
                                          </div>
                                          <div class="col-md-6">
                                          <div class="form-group">
                                          <label for="apple_password"><i class="fa fa-apple"></i> Certificate Password</label>
                                          <input type="password" name="apple_password" id="apple_password" class="form-control">
                                          </div>
                                          </div>
                                          </div>
                                          </div>

                                          <div class="col-md-6" style="padding-left:50px;">
                                            <h4 class="box-title">Android Keystore</h4>
                                            Read documentation for <a href="https://developer.android.com/studio/publish/app-signing.html">Android Signing Key</a>
                                            <hr>
                                            <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                            <label for="android_key"><i class="fa fa-android"></i> Kestore File (.keystore)</label>
                                            <input type="file" name="android_key" name="cover" id="android_key" style="margin-top:15px;">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                              <label><i class="fa fa-android"></i> Keystore Password</label>
                                              <input type="password" name="android_password" id="android_password" class="form-control">
                                            </div>
                                            </div>
                                            </div>
                                          </div>


                                          <div class="col-md-12">
                                          <hr>
                                          <div class="form-group">
                                          <button type="submit" class="btn btn-primary btn-flat editor btn-social"><i class="glyphicon glyphicon-play-circle"></i>Build Now!</button>
                                          </div>
                                          </div>
                                        </div>

                                        </form>
                                    </div>
                              </div>
                              <!-- /.tab-content -->
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
            $('.com-phone').addClass("hidden");
            $('.com-name').addClass("hidden");
            $(this).addClass("hidden");
        });

        $('.editor-button').on('click', '.build', function () {
            $('.editor-content').addClass("hidden");
            $('.build-content').removeClass("hidden");
        });
    </script>
@endsection
