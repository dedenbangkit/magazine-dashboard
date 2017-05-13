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
            <p class="login-box-msg">{{ trans('adminlte_lang::message.registermember') }}</p>
            <form action="registration" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="{{ trans('adminlte_lang::message.fullname') }}" name="name" value="{{ old('name') }}"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    <p style="color: red;">{{ $errors->create->first('name') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="{{ trans('adminlte_lang::message.email') }}" name="email" value="{{ old('email') }}"/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <p style="color: red;">{{ $errors->create->first('email') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="{{ trans('adminlte_lang::message.phonenumber') }}" name="phone" value="{{ old('phone') }}"/>
                    <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                    <p style="color: red;">{{ $errors->create->first('phone') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <select name='position' class="form-control">
                        <option value="editor">Editor </option>
                        <option value="designer">Designer</option>
                        <option value="leader">Team Leader</option>
                    </select>
                    <span class="glyphicon glyphicon-tags form-control-feedback" style="margin-right: 7px"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="{{ trans('adminlte_lang::message.password') }}" name="password"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback" ></span>
                    <p style="color: red;">{{ $errors->create->first('password') }}</p>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="{{ trans('adminlte_lang::message.retrypepassword') }}" name="password_confirmation"/>
                    <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                    <p style="color: red;">{{ $errors->create->first('password_confirmation') }}</p>
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
