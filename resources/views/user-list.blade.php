@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection


@section('main-content')
	<div class="container spark-screen">
		<div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-body">
						<table id="example2" class="table table-bordered table-hover">
							<thead>
                                <tr>
                                    <td class='text-center'>
                                        No
                                    </td>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        Phone Number
                                    </td>
                                    <td>
                                        Position
                                    </td>
                                    <td class='text-center'>
                                        Setting
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            <?php
                            foreach($user as $i=>$row){
                                $i=$i+1;
                                echo "<tr>
                                        <td class='text-center  '>".$i."</td>
                                        <td>".$row->name."</td>
                                        <td>".$row->email."</td>
                                        <td>".$row->phone."</td>
                                        <td>".$row->position."</td>
                                        <td class='text-center'><a href='#'><i class='fa fa-gear'></i></a> <a href='#'><i class='fa fa-trash'></i></a></td>
                                      </tr>";
                            }
                            ?>
                            </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
 @section('script-content')
     <script>
         $(function () {
             $('#example2').DataTable({
                 "paging": true,
                 "lengthChange": false,
                 "searching": true,
                 "ordering": true,
                 "info": true,
                 "autoWidth": false
             });
         });
     </script>
 @endsection