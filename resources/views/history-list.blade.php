@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection


@section('main-content')
<div class="row">
	<div class="container spark-screen">
		<div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-body">
						<table id="list" class="table table-bordered table-hover">
							<thead>
                                <tr>
                                    <td class='text-center'>
                                        No
                                    </td>
                                    <td>
                                        Name
                                    </td>

                                    <td>
                                        Action
                                    </td>

                                    <td>
                                        Date
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            <?php
                            foreach($list as $i=>$row){
                                $i=$i+1;
                                echo "<tr>
                                        <td class='text-center  '>".$i."</td>
                                        <td>".$row->name."</td>
                                        <td>".$row->action."</td>
                                        <td>".$row->created_at."</td>
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
</div>
@endsection
 @section('script-content')
     <script>
         $(function () {
             $('#list').DataTable({
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
