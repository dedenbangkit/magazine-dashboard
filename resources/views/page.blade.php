@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
    <div class="row" style="height: 83vh">
        <div class="col-md-1" style="border: 1px solid black;overflow: scroll;height: 84vh">
            @foreach($page_list as $i=>$row)
                <div class="row">
                    <img width="100px" height="auto" class="page-thumb" data-id="{{$row->id}}" data-content="{{$row->page_content}}" src="<?php if (empty($row->page_cover)) {
                        echo asset('/img/empty_zine.jpg');
                    } else {
                        echo asset('/img/projects/' . $row->page_cover);
                    } ?>" >
                    <br/>
                    <span>{{$row->page_name}}</span>
                </div>
            @endforeach
        </div>
        <div class="col-md-9" style="">
            <div class="editor" style="border: 1px solid black;height: 84vh;background-color: white">
                <div class="col-lg-12" style=" height: inherit">
                    <div class="content-magzs" id="content-magzs" style="height:736px; max-height: 736px; width: 414px; margin: auto;padding: none;border:1px solid black;background-color: white;" >
                        <div class="content-magz" id="content-magz" style="height:100%;  width: 100%; margin: auto;padding: none;border:1px solid black;background-color: white;" >

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="tool-editor" style="height: 84vh">
                <img class="test text-style"  src="{{asset('/img/empty_zine.jpg')}}">
            </div>
        </div>
    </div>
@endsection
@section('script-content')
    <script src="{{asset('js/jquery-drag.js')}}"></script>
    <script>
        $(function () {
            $(".page-thumb").click(function () {
                var content = $(this).data('content');
                document.getElementById("content-magz").innerHTML = content;

            });

        });
//        $(".text-style").click(function(){
//            var element = "<div class='item' style='position:absolute; transform: translate(30px,50px);'>  <p>abcd</p></div>";
//            $('.content-magz').innerHTML+=element;
//            document.getElementById('content-magz').innerHTML+=element;
//            console.log(element);
//        });

        $(document).ready(function()
        {
            var xx;                            // To store cloned div
            var y;                            // To store cloned div
            var ex;
            $(".test").draggable(
                    {
                        helper: "clone",
                        cursor: "move",
                        appendTo: ".content-magz",
                        revert: "invalid"
                    });

            $(".content-magz").droppable(

                    {
                        drop: function(event, ui)
                        {
                            containment: ".content-magz",
                            x = ui.helper.clone().attr('id', 'value');    // Store cloned div in x
                            y=ui.helper.remove();       // Escape from revert the original div
                            x.appendTo('.content-magz').removeClass( "test").draggable( {
                                revert: "invalid",
                                containment: ".content-magz",
                                snap: '.content-magz',
                                stop: function () {
                                    var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).width())) ) + "%" ;
                                    var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).height())) ) + "%" ;
                                    $(this).css("left", l);
                                    $(this).css("top", t);
                                }});
                            console.log(ex);
                        }
                    });

        });

    </script>
@endsection
