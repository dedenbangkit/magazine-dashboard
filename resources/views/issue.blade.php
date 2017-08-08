@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')

            <div class="row">
                <div class="col-md-12">
                  <div class="box box-default color-palette-box">
                      <div class="box-header with-border">
                          @if(Session::has('status_msg'))
                              <div class="pull-left">
                                  <div class="callout callout-warning">
                                      <p>{{Session::get('status_msg')}}</p>
                                  </div>

                              </div>
                          @endif
                              <a class="btn btn-success btn-flat pull-right" href="/create-issue"><i class="fa fa-plus-circle"> </i>
                                New <?=  ucfirst(array_last($activer));?></a>
                              </div>
                        <div class="box-body">
                            <!-- <?php if($create == true) {?>
                                    <div class="col-md-3  text-center " style="margin-bottom: 10px !important;">
                                        <div class="box-content" style="cursor: pointer;"
                                             onclick="window.location='/create-issue';">
                                            <div class="box-content-inside-new">
                                                <img src="{{asset('/img/add new.png')}}"/>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>-->
                            <?php foreach($projects as $i=>$row){ ?>
                              <div class="col-sm-3" id="issue-{{$row->id}}">
                                <div class="box box-solid">
                                  <div style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden" class="box-header with-border" style="border-top: 3px solid #d2d6de;">
                                    <i class="fa fa-file-text-o"></i>

                                    <h4 style="font-size:16px;" class="box-title">
                                      @if(empty($row->issue_name))
                                      <?php echo 'Untitled'?>
                                      @else
                                      {{substr($row->issue_name,0,16)}}
                                      @endif
                                    </h4>
                                    <br>Created at: {{date('d-m-Y',strtotime($row->created_at))}}
                                  </div>
                                  <div class="box-body">
                                    <div class="cover-img">
                                    <img class="img-responsive" src="<?php if (empty($row->issue_cover)) {
                                        echo asset('/img/empty_zine.jpg');
                                    } else {
                                        echo $row->issue_cover;
                                    } ?>">
                                    </div>
                                    <div class="btn-group-vertical" style="width:100%; padding-top:20px;">
                                        @if(!empty($row->compiled) & $row->approval == 'approved')
                                            <a class="btn btn-default @if($row->status =='unpublished' & $row->approval == 'approved' ) publish-issue @else disabled @endif "
                                         data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>'>
                                        <i class="fa fa-bullhorn {{$row->status}}"></i> Publish<?php echo ($row->status=='published') ? 'ed':''; ?> </a>
                                        @else
                                            <a href="/compile/{{ $row->id }}" class="btn btn-default @if($row->approval == 'pending'   ) disabled @endif "
                                               data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>'>
                                                <i class="fa fa-bullhorn"></i> Compile </a>
                                        @endif
                                        <a href="/edit-issue/{{ $row->id }}" class="btn btn-default @if($row->status =='published') disabled @endif @if(!empty($row->compiled)) disabled @endif"   data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>' >
                                            <i class="fa fa-gear"></i> Setting</a>
                                        <a class="btn btn-default @if($row->status =='published') disabled @endif @if(empty($row->compiled)) edit-issue @else disabled @endif"   data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>' >
                                        <i class="fa fa-edit"></i> Editor</a>
                                      <a class="btn btn-default del-issue" data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>'
                                        <?php
                                        if(!$buttonAccess){
                                            echo 'onclick="this.disabled = true"';
                                        }
                                        ?>>
                                        <i class="fa fa-trash"></i> Delete</a>
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
</section>
        @endsection

        @section('script-content')
            <script>
                $(function () {
                    $('.del-issue').on('click', function () {
                        var name = $(this).data('name');
                        var id = $(this).data('id');
                        bootbox.confirm({
                            message: "Are you sure to remove " + name,
                            buttons: {
                                cancel: {
                                    label: '<i class="fa fa-times"></i> Cancel'
                                },
                                confirm: {
                                    label: '<i class="fa fa-check"></i> Confirm'
                                }
                            },
                            callback: function (result) {
                                if (result) {
                                    $.post("/del-issue",
                                            {
                                                id: id,
                                                name: name,
                                                _token: "<?php echo csrf_token();?>"
                                            },
                                            function (data, status) {
                                                bootbox.alert({
                                                    message: 'Success Delete Issue!',
                                                    backdrop: true,
                                                    size: 'small'
                                                });
                                                remove('issue-'+id);
                                            });
                                }
                            }
                        });

                    });
                    $('.edit-issue').on('click', function () {
                        var name = $(this).data('name');
                        var id = $(this).data('id');
                        bootbox.confirm({
                            message: "Do you want go to editor " + name,
                            buttons: {
                                cancel: {
                                    label: '<i class="fa fa-times"></i> Cancel'
                                },
                                confirm: {
                                    label: '<i class="fa fa-check"></i> Confirm'
                                }
                            },
                            callback: function (result) {
                                if (result) {
                                    $.post("/editor-issue",
                                            {
                                                id: id,
                                                name: name,
                                                _token: "<?php echo csrf_token();?>"
                                            },
                                            function (data, status) {
                                                window.location.replace(data);
                                            });
                                }
                            }
                        });

                    });
                    $('.publish-issue').on('click', function () {
                        var name = $(this).data('name');
                        var id = $(this).data('id');
                        bootbox.confirm({
                            message: "Are you sure to publish " + name,
                            buttons: {
                                cancel: {
                                    label: '<i class="fa fa-times"></i> Cancel'
                                },
                                confirm: {
                                    label: '<i class="fa fa-check"></i> Confirm'
                                }
                            },
                            callback: function (result) {
                                if (result) {
                                    $.post("/publish-issue",
                                            {
                                                id: id,
                                                name: name,
                                                _token: "<?php echo csrf_token();?>"
                                            },
                                            function (data, status) {
                                                bootbox.alert({
                                                    message: data,
                                                    backdrop: true,
                                                    size: 'small'
                                                });

                                            });
                                }
                            }

                        });
                        $(this).addClass('disabled')
                        console.log($(this))
                    });
                });

                function remove(id) {
                    var elem = document.getElementById(id);
                    return elem.parentNode.removeChild(elem);
                }
            </script>
@endsection
