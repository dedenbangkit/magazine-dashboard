@extends('layouts.app')

@section('htmlheader_title')
    Register
@endsection

@section('main-content')
        <!-- Select2 -->
    <link rel="stylesheet" href="../../plugins/select2/select2.min.css">


    <body class="hold-transition register-page">
    <div class="row"><div class="col-md-12">

        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> {{ trans('adminlte_lang::message.someproblems') }}<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="box box-default color-palette-box">
            <form action="create-issue" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="box-header row with-border">
                  <div class="col-xs-4">
                  <div class="form-group has-feedback" style="margin:0px;">
                      <input type="text" class="form-control" style="margin:0px;" placeholder="Issue Name" name="name" value="{{ old('name') }}"/>
                      <span class="glyphicon glyphicon-book form-control-feedback" data-id="" ></span>
                  </div>
                </div>
                <div class="col-xs-4">
                  <div class="input-group">
                    <label class="input-group-btn">
                        <a class="btn btn-primary btn-flat">
                            Choose Cover <input name="cover" id="imageFile" type="file" style="display: none;" multiple>
                        </a>
                    </label>
                    <input type="text" class="form-control" style="margin:0px;" readonly>
                  </div>
                </div>
                    <div class="col-xs-2 ">
                        <a href="javascript:void(0)" class="btn btn-default btn-flat add" rel=".clone"><i class="fa fa-plus"></i> add more page</a>
                    </div>
                    <div class="col-xs-2">
                        <button type="submit" class="btn btn-success btn-flat pull-right"><i class="fa fa-check"></i> Finish and Create</button>
                    </div>
                </div>
                <div class="box-body">
                <div id="checkbox-form">
                  <div class="row">
                    <div class="form-group clone col-md-4">
                        <div class="row well" style="margin:0px; 10px; padding:5px;">
                            <span class="glyphicon glyphicon-remove pull-right" style="cursor:not-allowed" id=""></span>
                        <div class="col-xs-12">
                            <input type="text" class="form-control" placeholder="page Name" name="pagename[]" value=""/>
                        </div>
                        <div class="col-xs-6" style="height: 120px; overflow-y: auto;">
                            @foreach ($users as $i=>$row)
                                <div class="checkbox">
                                    <label><input name="team[0][]" class="checkbox-member" type="checkbox" value="{{$row->id}}">{{$row->name}}</label>
                                </div>
                            @endforeach
                        </div>
                        <div class="col-xs-6" >
                            <textarea class="form-control" rows="5" name="description[]" placeholder="Description"></textarea>
                        </div>
                        </div>

                    </div>
                  </div>
                </div>
            </form>

        </div><!-- /.form-box -->
    </div></div></div>
    @include('layouts.partials.scripts_auth')

    @include('auth.terms')

</body>

@endsection
@section('script-content')
    <script src="{{ asset('/plugins/select2/select2.full.min.js')}}"></script>
    <script>
        $(function () {

              // We can attach the `fileselect` event to all file inputs on the page
              $(document).on('change', ':file', function() {
                var input = $(this),
                    numFiles = input.get(0).files ? input.get(0).files.length : 1,
                    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                input.trigger('fileselect', [numFiles, label]);
              });

              // We can watch for our custom `fileselect` event like this
              $(document).ready( function() {
                  $(':file').on('fileselect', function(event, numFiles, label) {

                      var input = $(this).parents('.input-group').find(':text'),
                          log = numFiles > 1 ? numFiles + ' files selected' : label;

                      if( input.length ) {
                          input.val(log);
                      } else {
                          if( log ) alert(log);
                      }

                  });
              });


            $.fn.relCopy = function(options) {
                var settings = jQuery.extend({
                    excludeSelector: ".exclude",
                    emptySelector: ".empty",
                    copyClass: "copy",
                    append: '',
                    clearInputs: true,
                    limit: 10 // 0 = unlimited
                }, options);

                settings.limit = parseInt(settings.limit);

                // loop each element
                this.each(function() {

                    // set click action
                    $(this).click(function(){
                        var rel = $(this).attr('rel'); // rel in jquery selector format
                        var counter = $(rel).length;

                        // stop limit
                        if (settings.limit != 0 && counter >= settings.limit){
                            return false;
                        };

                        var master = $(rel+":first");
                        var parent = $(master).parent();
                        var clone = $(master).clone(true).addClass(settings.copyClass+counter).append(settings.append);

                        //Remove Elements with excludeSelector
                        if (settings.excludeSelector){
                            $(clone).find(settings.excludeSelector).remove();
                        };

                        //Empty Elements with emptySelector
                        if (settings.emptySelector){
                            $(clone).find(settings.emptySelector).empty();
                        };

                        // Increment Clone IDs
                        if ( $(clone).attr('id') ){
                            var newid = $(clone).attr('id') + (counter +1);
                            $(clone).attr('id', newid);
                        };

                        // Increment Clone Children IDs
                        $(clone).find('[id]').each(function(){
                            var newid = $(this).attr('id') + (counter +1);
                            $(this).attr('id', newid);
                        });
                        //increae arraychexbox
                        clone.find(".checkbox-member").attr('name',  'team['+counter+'][]');
                        //increase data value
                        clone.find(".glyphicon-remove").attr('data-id',  counter);
                        //change style pointer
                        clone.find(".glyphicon-remove").attr('style',  'cursor:pointer');

                        //Clear Inputs/Textarea
                        if (settings.clearInputs){
                            $(clone).find(':input').each(function(){
                                var type = $(this).attr('type');
                                switch(type)
                                {
                                    case "button":
                                        break;
                                    case "reset":
                                        break;
                                    case "submit":
                                        break;
                                    case "checkbox":
                                        break;
                                    default:
                                        $(this).val("");
                                }
                            });
                        };

                        $(parent).find(rel+':last').after(clone);

                        return false;

                    }); // end click action

                }); //end each loop

                return this; // return to jQuery
            };


            //Initialize Select2 Elements
            $(".select2").select2();


            $('a.add').relCopy();

            $(".glyphicon-remove").click(function () {

               var remove_id = $(this).data('id');
                $('.copy'+remove_id).remove();
            });
        });


    </script>
@endsection
