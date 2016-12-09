@extends('layouts.app')

@section('htmlheader_title')
    Register
@endsection

@section('main-content')
        <!-- Select2 -->
    <link rel="stylesheet" href="../../plugins/select2/select2.min.css">


    <body class="hold-transition register-page">
    <div class="col-md-5">
        <div class="register-logo">
            <a href="{{ url('/home') }}"><b>Admin</b>LTE</a>
        </div>

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

        <div class="register-box-body">
            <p class="login-box-msg">Create Issue</p>
            <form action="create-issue" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Issue Name" name="name" value="{{ old('name') }}"/>
                    <span class="glyphicon glyphicon-book form-control-feedback"></span>
                </div>
                <div class="form-group ">
                    <label for="exampleInputFile">Issue Cover</label>
                    <input type="file" name="cover" id="imagefile" >
                </div>
                <div class="form-group clone">
                    <div class="row well">
                    <div class="col-xs-12">
                        <input type="text" class="form-control" placeholder="page Name" name="pagename[]" value=""/>
                    </div>
                    <div class="col-xs-6">
                        <?php
                        echo '<div class="checkbox">
                            <label><input name="team[0][]" type="checkbox" value="1">Option 1</label>
                        </div>
                        <div class="checkbox">
                            <label><input name="team[0][]" type="checkbox" value="2">Option 2</label>
                        </div>
                        <div class="checkbox disabled">
                            <label><input name="team" type="checkbox" value="" disabled>Option 3</label>
                        </div>';
                        ?>
                    </div>
                    <div class="col-xs-6" >
                        <textarea width="100%"></textarea>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4 ">
                        <a href="#" class="add" rel=".clone">add more</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4 ">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Create</button>
                    </div><!-- /.col -->
                </div>
            </form>

        </div><!-- /.form-box -->
    </div><!-- /.register-box -->

    @include('layouts.partials.scripts_auth')

    @include('auth.terms')

</body>

@endsection
@section('script-content')
    <script src="{{ asset('/plugins/select2/select2.full.min.js')}}"></script>
    <script>
        $(function () {
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
                                        $(this).attr('checked', '');
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
        });


    </script>
@endsection