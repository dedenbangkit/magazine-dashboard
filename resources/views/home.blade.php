@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
	<div class="container spark-screen">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<div class="panel panel-default">
					<div class="panel-heading"><?=  ucfirst(array_last($activer));?></div>
					<div class="panel-body">
						{{ trans('adminlte_lang::message.logged') }}
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
