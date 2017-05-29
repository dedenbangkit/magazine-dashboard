@extends('layouts.app')

@section('htmlheader_title')
    Register
@endsection

@section('main-content')

    <body class="hold-transition register-page">
    <div class="col-md-8">
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
            <p class="login-box-msg">Register a new subscribe</p>
            <form action="subscribe-process" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Company Name" name="companyname" value="{{ old('companyname') }}"/>
                    <span class="glyphicon glyphicon-book form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('companyname') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Company Phone" name="companyphone" value="{{ old('companyphone') }}"/>
                    <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('companyphone') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Project Name" name="projectname" value="{{ old('projectname') }}"/>
                    <span class="glyphicon glyphicon-book form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('projectname') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <select name="service" class="form-control">
                        @foreach($service as $i =>$row)
                            <option value="{{$row->id}}">{{$row->service_name}}</option>
                        @endforeach
                    </select>
                    {{--<span class="glyphicon glyphicon-book form-control-feedback"></span>--}}
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="{{ trans('adminlte_lang::message.fullname') }}" name="name" value="{{ old('name') }}"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('name') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="{{ trans('adminlte_lang::message.email') }}" name="email" value="{{ old('email') }}"/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('email') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="{{ trans('adminlte_lang::message.phonenumber') }}" name="phone" value="{{ old('name') }}"/>
                    <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                    <p style="color: red">{{ $errors->create->first('phone') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="{{ trans('adminlte_lang::message.password') }}" name="password"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback" ></span>
                    <p style="color: red">{{ $errors->create->first('password') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="{{ trans('adminlte_lang::message.retrypepassword') }}" name="password_confirmation"/>
                    <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                </div>
                <div class="form-group ">
                    <label for="exampleInputFile">Project Cover</label>
                    <input type="file" name="cover" id="imagefile" >
                </div>
                <div class="form-group ">
                    <label for="exampleInputFile">Project Icon</label>
                    <input type="file" name="icon" id="imagefile" >
                </div>
                <div class="row">
                    <div class="col-xs-4 ">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">{{ trans('adminlte_lang::message.register') }}</button>
                    </div><!-- /.col -->
                </div>
            </form>

        </div><!-- /.form-box -->
    </div><!-- /.register-box -->

    @include('layouts.partials.scripts_auth')

    @include('auth.terms')

    <script>

    </script>
</body>

@endsection
@section('script-content')
    <script>
        $(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
    </script>
@endsection
