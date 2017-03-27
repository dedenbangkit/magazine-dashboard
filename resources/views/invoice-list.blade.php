@extends('layouts.app')

@section('htmlheader_title')
    <?= ucfirst(array_last($activer)); ?>
@endsection


@section('main-content')
		<div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-body">
						<table id="user" class="table table-bordered table-hover">
							<thead>
                                <tr>
                                    <td>
                                        Project
                                    </td>
                                    <td>
                                        Company
                                    </td>
                                    <td>
                                        Service
                                    </td>
                                    <td>
                                        Payment Status
                                    </td>

                                    <td>
                                        Date
                                    </td>
                                    <td class='text-center'>
                                        Tool
                                    </td>
                                </tr>
                            </thead>
                            {{--<td class='text-center'><a href='#'><i class='fa fa-gear'></i></a> <a href='#'><i class='fa fa-key'></i></a> <a href=javascript:void(0)><i class='fa fa-trash confirm-delete'></i></a></td>--}}
						</table>
					</div>
				</div>
			</div>
		</div>
@endsection
 @section('script-content')
     <script>
         $(function () {

             var userTable = $('#user').DataTable( {
                 "paging": true,
                 "lengthChange": false,
                 "searching": true,
                 "ordering": true,
                 "info": true,
                 "autoWidth": false,
                 "ajax": "/get-invoice-list",
                 "dataType": "json",
                 "contentType": 'application/json; charset=utf-8',
                 "columns": [
                     { "data": "project_name" },
                     { "data": "company_name" },
                     { "data": "service_name" },
                     { "data": "payment" },
                     { "data": "created_at" },
                     { "data": "id" },
                 ],
                 "aoColumnDefs": [
                     {
                         "aTargets": [4],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return moment(data).format('DD-MM-YYYY');

                         }
                     },
                     {
                         "aTargets": [5],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return "<a href='javascript:void(0)'><i class='fa fa-money' data-id='"+data+"' data-name='"+full.project_name+"'></i></a>";

                         }
                     }
                 ]
             } );

             $('#user').on('click', '.fa-money', function () {
                 var name = $(this).data('name');
                 var id = $(this).data('id');
                 post('/invoice-detail', {id: id,_token:"<?php echo csrf_token();?>"});

             });
             console.clear()
         });
         function rupiahconvertion(nominal){
             var rev     = parseInt(nominal, 10).toString().split('').reverse().join('');
             var rev2    = '';
             for(var i = 0; i < rev.length; i++){
                 rev2  += rev[i];
                 if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
                     rev2 += '.';
                 }
             }
             return 'Rp. ' + rev2.split('').reverse().join('') + ',00';
         }

     </script>
 @endsection
