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
                                        Nominal
                                    </td>
                                    <td>
                                        Date
                                    </td>
                                    <td class='text-center'>
                                        Tool
                                    </td>
                                </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th colspan="4" style="text-align:right">Total All:</th>
                                <th colspan="3"></th>
                            </tr>
                            </tfoot>
                            {{--<td class='text-center'><a href='#'><i class='fa fa-gear'></i></a> <a href='#'><i class='fa fa-key'></i></a> <a href=javascript:void(0)><i class='fa fa-trash confirm-delete'></i></a></td>--}}
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

             var userTable = $('#user').DataTable( {
                 "paging": true,
                 "lengthChange": false,
                 "searching": true,
                 "ordering": true,
                 "info": true,
                 "autoWidth": false,
                 "ajax": "/get-invoice-detail?id=<?php echo $id_token?>",
                 "dataType": "json",
                 "contentType": 'application/json; charset=utf-8',
                 "columns": [
                     { "data": "project_name" },
                     { "data": "company_name" },
                     { "data": "service_name" },
                     { "data": "payment" },
                     { "data": "nominal" },
                     { "data": "created_at" },
                     { "data": "id" },
                 ],
                 "aoColumnDefs": [
                     {
                         "aTargets": [4],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return rupiahconvertion(data) ;

                         }
                     }, {
                         "aTargets": [5],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return moment(data).format('DD-MM-YYYY');

                         }
                     },
                     {
                         "aTargets": [6],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return "<a href='javascript:void(0)'><i class='fa fa-money' data-id='"+data+"' data-name='"+full.project_name+"'></i></a>";

                         }
                     }
                 ],
                 "footerCallback": function ( row, data, start, end, display ) {
                 var api = this.api(), data;

             // Remove the formatting to get integer data for summation
             var intVal = function ( i ) {
                 return typeof i === 'string' ?
                 i.replace(/[\$,]/g, '')*1 :
                         typeof i === 'number' ?
                                 i : 0;
             };

             // Total over all pages
             total = api
                     .column( 4 )
                     .data()
                     .reduce( function (a, b) {
                         return intVal(a) + intVal(b);
                     }, 0 );

             // Total over this page
             pageTotal = api
                     .column( 4, { page: 'current'} )
                     .data()
                     .reduce( function (a, b) {
                         return intVal(a) + intVal(b);
                     }, 0 );

             // Update footer
             $( api.column( 4 ).footer() ).html(
                     rupiahconvertion(total)
             );
         }


             } );

             $('#user').on('click', '.fa-trash', function () {
                 var name = $(this).data('name');
                 var id = $(this).data('id');
                     bootbox.confirm({
                         message: "Are you sure to remove "+name,
                         buttons: {
                             cancel: {
                                 label: '<i class="fa fa-times"></i> Cancel'
                             },
                             confirm: {
                                 label: '<i class="fa fa-check"></i> Confirm'
                             }
                         },
                         callback: function (result) {
                             if(result){
                                 $.post("/remove-user",
                                         {
                                             id: id,
                                             name:name,
                                             _token: "<?php echo csrf_token();?>"
                                         },
                                         function(data, status){
                                             bootbox.alert({
                                                 message: data,
                                                 backdrop: true,
                                                 size:'small'
                                             });
                                             userTable.ajax.reload();
                                         });
                             }

                         }
                     });

             });

             $('#user').on('click', '.fa-key', function () {
                 var name = $(this).data('name');
                 var id = $(this).data('id');
                 bootbox.prompt({
                     title: "Change password for "+name,
                     inputType: 'password',
                     callback: function (result) {
                         if(result !=  null & result != ''){
                             if(result.length >= 6){
                                 $.post("/change-user-password",
                                         {
                                             id: id,
                                             name:name,
                                             password:result,
                                             _token: "<?php echo csrf_token();?>"
                                         },
                                         function(data, status){
                                          var  message =  data;
                                             bootbox.alert({
                                                 message: message,
                                                 backdrop: true,
                                             });
                                         });
                             }else{
                                 var message = 'Password Minimum 6 characters';
                                 bootbox.alert({
                                     message: message,
                                     backdrop: true,
                                     size:'small'
                                 });
                             }
                         }
                     }
                 });

             });

             $('#user').on('click', '.fa-money', function () {
                 var name = $(this).data('name');
                 var id = $(this).data('id');

                 bootbox.prompt({
                     title: "Change position for "+name,
                     inputType: 'select',
                     inputOptions: [
                         {
                             text: 'Cash',
                             value: 'cash',
                         },
                         {
                             text: 'Transfer',
                             value: 'transfer',
                         },
                         {
                             text: 'Credit Card',
                             value: 'credit card',
                         }
                     ],
                     callback: function (result) {
                         if(result != null){
                             console.log(result);
                             $.post("/invoice-payment",
                                     {
                                         id: id,
                                         name:name,
                                         payment:result,
                                         _token: "<?php echo csrf_token();?>"
                                     },
                                     function(data, status){
                                         var  message =  data;
                                         bootbox.alert({
                                             message: message,
                                             backdrop: true,
                                         });
                                         userTable.ajax.reload();
                                     });

                         }else if(result == null){

                         }

                     }
                 });
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