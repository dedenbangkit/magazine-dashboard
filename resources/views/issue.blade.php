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
                        <div class="panel-heading"><a href="/create-issue"><i class="fa fa-plus-circle"> </i>
                                New <?=  ucfirst(array_last($activer));?></a></div>
                        <div class="panel-body">
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
                            <div class="col-sm-3  text-center" style="margin-bottom: 10px !important;" id="issue-{{$row->id}}">
                                <div class="box-content">
                                    <div class="box-content-inside">
                                        <div class="row">
                                            <img src="<?php if (empty($row->issue_cover)) {
                                                echo asset('/img/empty_zine.jpg');
                                            } else {
                                                echo asset('/img/projects' . $row->issue_cover);
                                            } ?>">

                                        </div>
                                        <div class="row">
                                            <b><?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?></b>
                                        </div>
                                        <div class="row">
                                            <p class="font-light"
                                               style="color: green">{{date('d-m-Y',strtotime($row->created_at))}}</p>
                                        </div>
                                        <a class="btn btn-app publish-issue">
                                            <i class="fa fa-bullhorn {{$row->status}}" data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>'></i>
                                            Publish
                                        </a>
                                        <a class="btn btn-app edit-issue">
                                            <i class="fa fa-edit"  data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>' ></i>
                                            Edit
                                        </a>
                                        <a class="btn btn-app del-issue" >
                                            <i class="fa fa-trash" data-id='{{ $row->id }}' data-name='<?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?>'
                                              <?php
                                              if(!$buttonAccess){
                                                  echo 'onclick="this.disabled = true"';
                                              }
                                              ?> >
                                            </i>
                                            Delete
                                        </a>
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

        @section('script-content')
            <script>
                $(function () {
                    $('.del-issue').on('click', '.fa-trash', function () {
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
                                                    message: data,
                                                    backdrop: true,
                                                    size: 'small'
                                                });
                                                remove('issue-'+id);
                                            });
                                }
                            }
                        });

                    });
                    $('.edit-issue').on('click', '.fa-edit', function () {
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
                    $('.publish-issue').on('click', '.unpublished', function () {
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

                    });
                });

                function remove(id) {
                    var elem = document.getElementById(id);
                    return elem.parentNode.removeChild(elem);
                }
            </script>
@endsection