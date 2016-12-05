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
                            <div class="col-md-3  text-center">
                                <div class="box-content">
                                    <div class="box-content-inside-new">
                                        <img src="{{asset('/img/add new.png')}}" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3  text-center">
                                <div class="box-content">
                                    <div class="box-content-inside">
                                        <div class="row">
                                            <img src="{{asset('/img/projects/ahm.png')}}">
                                        </div>
                                        <div class="row">
                                            <b>Astra</b>
                                        </div>
                                        <div class="row">
                                            <p class="font-light" style="color: green">29-11-2016</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3  text-center">
                                <div class="box-content">
                                    <div class="box-content-inside">
                                        <div class="row">
                                            <img src="{{asset('/img/projects/logomuda-new.png')}}">
                                        </div>
                                        <div class="row">
                                            <b>techno</b>
                                        </div>
                                        <div class="row">
                                            <p class="font-light" style="color: green">29-11-2016</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3  text-center">
                                <div class="box-content">
                                    <div class="box-content-inside">
                                        <div class="row">
                                            <img src="{{asset('/img/projects/jogja-istimewa.png')}}">
                                        </div>
                                        <div class="row">
                                            <b>techno</b>
                                        </div>
                                        <div class="row">
                                            <p class="font-light" style="color: green">29-11-2016</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection
