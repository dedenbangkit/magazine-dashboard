@extends('layouts.app')

@section('htmlheader_title')
    <?=    ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
            <div class="row">
                <div class="col-md-12">
                    <div class="box-header with-border">
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
                            <div class="col-sm-3 col-md-3 col-lg-2 text-center">
                                <div class="box box-solid">
                                  <div class="box-header with-border" style="border-top: 3px solid #d2d6de;">
                                    <i class="fa fa-file-text-o"></i>

                                    <h3 class="box-title"><?php echo(empty($row->issue_name) ? 'Untittled' : $row->issue_name); ?></h3>
                                    <br>Published at: {{date('d-m-Y',strtotime($row->updated_at))}}
                                  </div>

                                  <div class="box-body">
                                    <img class="img-responsive" src="<?php if (empty($row->issue_cover)) {
                                        echo asset('/img/empty_zine.jpg');
                                    } else {
                                        echo $row->issue_cover;
                                    } ?>">
                                  </div>

                                </div>
                            </div>
                            <?php } ?>


                        </div>
                    </div>
                </div>
              </div>

@endsection
