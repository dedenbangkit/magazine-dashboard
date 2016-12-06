@extends('layouts.app')

@section('htmlheader_title')
    Register
@endsection

@section('main-content')

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
            <p class="login-box-msg">Create New Project</p>
            <form action="registration" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Project Name" name="name" value="{{ old('name') }}"/>
                    <span class="glyphicon glyphicon-book form-control-feedback"></span>
                </div>
                <div class="form-group ">
                    <label for="exampleInputFile">Project Cover</label>
                    <input type="file" id="imagefile" >

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
    <script>

    </script>
@endsection