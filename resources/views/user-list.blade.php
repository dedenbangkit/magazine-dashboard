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
                 "ajax": "/user-list",
                 "dataType": "json",
                 "contentType": 'application/json; charset=utf-8',
                 "columns": [
                     { "data": "name" },
                     { "data": "email" },
                     { "data": "phone" },
                     { "data": "position" },
                     { "data": "id" }
                 ],
                 "aoColumnDefs": [
                     {
                         "aTargets": [4],
                         "mData": null,
                         "mRender": function (data, type, full) {
                             return "<a href='javascript:void(0)'><i class='fa fa-gear' data-id='"+data+"' data-name='"+full.name+"'></i></a> <a href='javascript:void(0);' data-id='"+data+"' data-name='"+full.name+"'><i class='fa fa-key' data-id='"+data+"' data-name='"+full.name+"'></i></a> <a href='javascript:void(0)'><i class='fa fa-trash' data-id='"+data+"' data-name='"+full.name+"'>&nbsp;</i></a>";

                         }
                     }
                 ]

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

             $('#user').on('click', '.fa-gear', function () {
                 var name = $(this).data('name');
                 var id = $(this).data('id');

                 bootbox.prompt({
                     title: "Change position for "+name,
                     inputType: 'select',
                     inputOptions: [
                         {
                             text: 'Choose one...',
                             value: '',
                         },
                         {
                             text: 'Leader',
                             value: 'leader',
                         },
                         {
                             text: 'Editor',
                             value: 'editor',
                         },
                         {
                             text: 'Designer',
                             value: 'designer',
                         }
                     ],
                     callback: function (result) {
                         if(result != ""){
                             $.post("/change-user-position",
                                     {
                                         id: id,
                                         name:name,
                                         position:result,
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

         });

     </script>
 @endsection