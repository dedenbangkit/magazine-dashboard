@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection


@section('main-content')
		<div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-body">
                        @foreach($list as $i=>$row)
                        <div class="col-md-3 ">
                            <div class="box col-md-11 col-offset-1">
                                <div class="box-head " >
                                    <h3>{{$row->service_name}}</h3>
                                </div>
                                <hr/>
                                <div class="box-body">
                                    <p>Price :  @if($row->number_of_issue!=null)
                                              Rp. {{round($row->number_of_issue * $row->service_price,2)}}
                                            @if($row->number_of_issue >1)
                                                 / Year
                                            @else
                                                 / Issue
                                            @endif
                                        @else
                                            Rp. {{round($row->service_price,2)}} / Issue
                                        @endif
                                    </p>
                                    <hr/>
                                    <p>Number Of Issue :
                                        @if(!empty($row->number_of_issue))
                                        {{$row->number_of_issue}}
                                        @else
                                        -
                                        @endif
                                    </p>
                                    <hr/>
                                    <p>
                                        Description
                                        <br/>
                                        @if(!empty($row->description))
                                        {{$row->description}}
                                        @else
                                            -
                                        @endif
                                    </p>
                                </div>
                            </div>
                        </div>
                        @endforeach
					</div>
				</div>
			</div>
		</div>
@endsection
 @section('script-content')
     <script>
         $(function () {
         });
     </script>
 @endsection
