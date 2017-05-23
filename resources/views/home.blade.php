@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection

@section('main-content')
	<div class="container spark-screen">
		<div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              @if(!empty($count_issue))
              <h3>{{$countIssuePub}}</h3>
              @endif
              <p>Published Issue</p>
            </div>
            <div class="icon">
              <i class="ion ion-ios-cog"></i>
            </div>
            {{--<a href="#" class="small-box-footer">Go <i class="fa fa-arrow-circle-right"></i></a>--}}
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              @if(!empty($count_issue))
              <h3>{{(($countIssue-$countIssuePub)/$countIssue)*100}}<sup style="font-size: 20px">%</sup></h3>
              @endif

              <p>Edit Issue</p>
            </div>
            <div class="icon">
              <i class="ion ion-android-create"></i>
            </div>
            {{--<a href="#" class="small-box-footer">Go <i class="fa fa-arrow-circle-right"></i></a>--}}
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44</h3>

              <p>Documentation</p>
            </div>
            <div class="icon">
              <i class="ion ion-ios-information"></i>
            </div>
            {{--<a href="#" class="small-box-footer">Go <i class="fa fa-arrow-circle-right"></i></a>--}}
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{$billing}}</h3>

              <p>Billing</p>
            </div>
            <div class="icon">
              <i class="ion ion-card"></i>
            </div>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <div class="col-md-2"></div>
		</div>
	</div>
@endsection
