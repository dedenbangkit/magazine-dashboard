<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Drag and Drop Creator</title>

  <link href='http://fonts.googleapis.com/css?family=Lato:100,400,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet" type="text/css">
  
  
  <link href="editor/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href="editor/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="editor/css/main.css" rel="stylesheet" type="text/css">
  <link href="editor/css/animate.css" rel="stylesheet" type="text/css">
  <link href="editor/css/slidepanel.css" rel="stylesheet" type="text/css">
  <link href="editor/css/dropzone.css" rel="stylesheet" type="text/css">





  <script src="editor/scripts/jquery.js"></script>
  <script src="editor/scripts/jquery-ui.js"></script>
  <script src="editor/scripts/bootstrap.js"></script>
  <script src="editor/scripts/classie.js"></script>
  <script src="editor/scripts/dropzone.js"></script>
  <script src="editor/scripts/app.js"></script>

  
  <link rel="stylesheet" type="text/css" href="editor/css/spectrum.css">
  <script type="text/javascript" src="editor/scripts/spectrum.js"></script>

  
  <script src="editor/scripts/MediumJS/bower_components/rangy-official/rangy-core.js"></script>
  <script src="editor/scripts/MediumJS/bower_components/rangy-official/rangy-classapplier.js"></script>
  <script src="editor/scripts/MediumJS/bower_components/undo/undo.js"></script>
  <script src="editor/scripts/MediumJS/medium.js"></script>
  <link rel="editor/stylesheet" href="scripts/MediumJS/medium.css">

  <script src="editor/scripts/jqueryFileTree.js" type="text/javascript"></script>
  <link href="editor/css/jqueryFileTree.css" rel="stylesheet" type="text/css" media="screen" />
  
</head>
 
<body>

<?php
$registrationCompleted = 'false';
        $userid = 1;
$projectName = 'test'
?>
<div id="indexRegistrationValue" style="display:none;" data-id="<?php if ($registrationCompleted == "true"){echo "true";}else{echo "false";} ?>"
      data-value="<?php if ($registrationCompleted == "true"){echo $apiKEY;}else{echo "false";} ?>"></div>

<div class="container-fluid menu-container">

  <div class="row">

    <div class="col-sm-offset-1 col-sm-5">

     
        <div class="row" style="margin-top:23px;margin-bottom:15px;">

            <div class="col-sm-4">
              <span class="glyphicon glyphicon-cloud-download" aria-hidden="true" style=""></span>
              <a href="#" id="aELAppTitle"><span class="appTitle" style="color:#52BDE5;font-size:26px;">Drag and Drop</span></a>
            </div>

            <div class="col-sm-offset-2 col-sm-6">
              <span class="glyphicon glyphicon-th" style="font-size:26px;" aria-hidden="true"></span>
              <a href="documentation/doc.html" class="appDocumentation" style="color:#2BBB4F;font-size:24px;">Documentation</a>
            </div>
      </div>

    </div>

  <div class="col-sm-offset-1 col-sm-5">

     <button type="button" class="btn btn-info btn-sm btnToResize revealP" id="revealParents" style="margin-top:25px;margin-bottom:15px;margin-right:15px;" title="Expand/Shrink Elements">
      <i class="fa fa-lg fa-arrow-circle-o-down"></i>
     </button>
     <button type="button" class="btn btn-primary btnToResize active" id="edit-mode" style="margin-top:25px;margin-bottom:15px;">Edit Mode</button>

      <div class="btn-group resizeDivTo" style="margin-top:25px;margin-bottom:15px;">
        <button type="button" class="btn btn-primary mobile"><i class="fa fa-mobile"></i><span style="margin-left:5px;">Mobile</button>
        <button type="button" class="btn btn-primary tablet-sm"><i class="fa fa-tablet"></i><span style="margin-left:5px;">Tablet(small)</button>
        <button type="button" class="btn btn-primary tablet-lg"><i class="fa fa-tablet fa-lg"></i><span style="margin-left:5px;">Tablet(medium)</button>
        <button type="button" class="btn btn-primary desktop"><i class="fa fa-desktop"></i><span style="margin-left:5px;">Desktop</span></button>
      </div>  

  </div>  

 </div>

</div>

<div class="container-fluid medium-container">
  <div class="row">

    <div class="col-xs-6 col-sm-6 ">
      <ul class="nav nav-pills nav-justified">
          <li role="presentation" class="active"><a href="#tab_a_layout" data-toggle="pill">Layout</a></li>
          <li role="presentation"><a href="#tab_b_elements" data-toggle="pill">Elements</a></li>
          <li role="presentation"><a href="#" id="bodySettingsEl" data-toggle="pill">Body Settings</a></li>
      </ul>
    </div>  

    <div class="col-xs-6 col-sm-6 ">
      <ul class="nav nav-pills nav-justified">
          <li role="presentation"><a href="#" id="uploadFontsEv" data-toggle="pill">Upload Fonts</a></li>
          <li role="presentation"><a href="#" id="saveTemplate" data-toggle="pill">Save</a></li>
          <li role="presentation"><a href="#" id="clear-form" data-toggle="pill">Clear</a></li>
          
      </ul>
    </div>  

  </div>  
</div>  

<div class="container-fluid preview-container preview-hidden" style="margin-top:20px;"></div>


<div class="download-container" style="display:none;"></div>

<div class="preloader"></div>


<iframe src="iframe.html" class="customIframe preview-hidden" id="customIframe"></iframe>

<div class="container-fluid top-container">

    <div class="row">

              <div class="col-xs-2 col-sm-2 side"> 

                <div class="tab-content" style="background: #1C2B37;"> 

             <div class="tab-pane active" id="tab_a_layout">

                     <div class="box">

                         <p class="box-title">Layout Elements </p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd">
                             <div class="container-draggable" data-id="1">
                                      <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                            <a href="#" class="ui_to_drag">
                                              <table>
                                                <tr>
                                                  <td style="font-size:12px;"><i class="fa fa-th-list"></i></td>
                                                  <td style="padding-left:7px;padding-top:1px;font-size:11px;">Container<br/>with margins</td>
                                                </tr>
                                              </table>
                                            </a>
                                      </span>
                                      
                                      <div class="container hiddenDiv" data-id="1">
                                              <div class="container-description">Container</div>
                                              <div class="container-edit-icons">
                                                  <span class="container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                  <span class="container-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                              </div>
                                      </div>
                             </div>
                          </td>
                          <td class="customBTd">
                             <div class="container-draggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                      <a href="#" class="ui_to_drag">
                                        <table>
                                                <tr>
                                                  <td style="padding-left:4px;font-size:12px;"><i class="fa fa-indent"></i></td>
                                                  <td style="padding-left:14px;padding-top:2px;font-size:11px;">Container<br/>Fluid</td>
                                                </tr>
                                        </table>
                                      </a>
                                  </span>
                                    <div class="container-fluid hiddenDiv" data-id="1">
                                          <div class="container-description">Container - Fluid</div>
                                          <div class="container-edit-icons">
                                              <span class="container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                              <span class="container-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                          </div>
                                    </div>
                                </div>
                          </td>

                        </tr>
                      </table>

                    </div>
                  
                
                 
                  <div class="box-contents" style="margin-top:30px;"> 

                    <table class="customBTable">
                      <tr>
                        <td class="customBTd">
                      
                          <div class="div-draggable" data-id="1">
                            <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                              <a href="#" class="ui_to_drag">
                                <table>
                                    <tr>
                                      <td style="font-size:12px;padding-left:2px;"><i class="fa fa-file-text"></i></td>
                                      <td style="padding-left:18px;font-size:11px;">Div<br/>Wrapper</td>
                                    </tr>
                               </table>
                              </a>
                            </span>
                            
                            <div class="customDiv hiddenDiv" data-id="1"> 
                              <div class="div-container-description">DIV</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                        </td>
                        <td class="customBTd">
                            <div class="row-droppable" data-id="1">
                              <span class="badge customBadge" >
                                <a href="#" class="ui_to_drag">
                                  <table>
                                    <tr>
                                      <td style="padding-left:5px;font-size:12px;"><i class="fa fa-arrows-h"></i></td>
                                      <td style="padding-left:14px;padding-top:2px;font-size:11px;">Bootstrap<br/>Row</td>
                                    </tr>
                                  </table>
                                </a>
                              </span>
                                  <div class="row hiddenDiv" data-id="1"> 
                                      <div class="rowsingle-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                  </div>
                            </div>
                        </td>

                      </tr>
                    </table>

                  </div>
              
                  <p class="box-title" style="margin-top:30px;">Table Elements  </p>
                  <div class="box-contents" style="margin-top:20px;"> 
                    
                    <table class="customBTable">
                      <tr>
                        <td class="customBTd"> 
                      
                              <div class="table-droppable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th"></i></td>
                                            <td style="padding-left:8px;padding-top:1px;font-size:11px;">Table<br/> Custom Rows</td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>
                                   <div class="customTable hiddenDiv" data-id="1">
                                    <table class="tableElement tableWidthClass" style="width:100%;height: auto;">
                                          <tr class="borderedTableRow">
                                             <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                            <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                          </tr>
                                         
                                    </table>
                                    <div class="table-description">Table</div>
                                          <div class="table-edit-icons">
                                              <span class="table-add-row"><a href="#" class="add-table-row"><i class="fa fa-plus" ></i> Row</a></span>
                                              <span class="table-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                              <span class="table-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                          </div>
                                    </div>

                              </div>
                        </td>

                        <td class="customBTd">
                              <div class="table-droppable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th"></i></td>
                                            <td style="padding-left:8px;padding-top:1px;font-size:11px;">Table<br/> Custom Cells</td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>
                                   <div class="customTable hiddenDiv" data-id="1">
                                    <table class="tableElement tableWidthClass" style="width:100%;height: auto;">
                                          <tr class="borderedTableRow">
                                             <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                            <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                            <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                          </tr>

                                          <tr class="borderedTableRow">
                                             <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                            <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                            <td class="borderedTableCell">
                                              <div class="tablecell-description"> TABLE CELL </div>
                                              <div class="table-cell-edit-icons">
                                                 <span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus" ></i> Cell</a></span>
                                                 <span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="table-cell-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                               </div>
                                            </td>
                                          </tr>
                                         
                                    </table>
                                    <div class="table-description">Table</div>
                                          <div class="table-edit-icons">
                                              <span class="table-add-row"><a href="#" class="add-table-row"><i class="fa fa-plus" ></i> Row</a></span>
                                              <span class="table-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                              <span class="table-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                          </div>
                                    </div>

                              </div>
                        </td>


                      </tr>

                     


                    </table>


                  </div> 
               

                  <p class="box-title" style="margin-top:30px;">Bootstrap Grid </p>
                  <div class="box-contents" style="margin-top:15px;"> 
                      
                    <table class="customBTable">
                      <tr>
                        <td class="customBTd"> 
                      
                              <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:2px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">2 Equal Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-6"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-6"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                      </td>

                     <td class="customBTd">
                            <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">2 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-4"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-8"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                            <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                     </td>

                   </tr>

                 </table>

               </div>


               <div class="box-contents" style="margin-top:30px;"> 

                    <table class="customBTable"> 
                      <tr>
                        <td class="customBTd"> 
                      
                              <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">2 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-offset-2 col-xs-4"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-offset-2 col-xs-4"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                      </td>

                     <td class="customBTd">
                            <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">2 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-offset-2 col-xs-6"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                            <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                     </td>

                   </tr>

                 </table>

               </div>

               <div class="box-contents" style="margin-top:30px;"> 

                    <table class="customBTable">
                      <tr>
                        <td class="customBTd"> 
                      
                              <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:2px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">3 Equal Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-4"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-4"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                      <div class="col-xs-4"> 
                                          <div class="colRow-description"> COLUMN-3 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                      </td>

                     <td class="customBTd">
                            <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">3 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-3"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-5"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                            <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                      <div class="col-xs-4"> 
                                          <div class="colRow-description"> COLUMN-3 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                     </td>

                   </tr>

                 </table>

               </div>


               <div class="box-contents" style="margin-top:30px;"> 

                    <table class="customBTable">
                      <tr>
                        <td class="customBTd"> 
                      
                              <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">3 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-4"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                          <div class="colRow-description"> COLUMN-3 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                      </td>

                     <td class="customBTd">
                            <div class="row-col-droppable" data-id="1">
                               
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag"> 
                                        <table>
                                          <tr>
                                            <td style="font-size:12px;"><i class="fa fa-th-large"></i></td>
                                            <td style="padding-left:0px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">3 Custom Columns</span></td>
                                          </tr>
                                        </table>
                                    </a>
                                  </span>

                              
                                    <div class="row hiddenDiv colClass rowColBac" data-id="1"> 
                                      <div class="row-description">Row</div>
                                      <div class="row-edit-icons">
                                          <span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                           <div class="colRow-description"> COLUMN-1 </div>
                                            <div class="colRow-edit-icons">
                                                <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                            </div>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                          <div class="colRow-description"> COLUMN-2 </div>
                                          <div class="colRow-edit-icons">
                                            <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                      <div class="col-xs-offset-1 col-xs-3"> 
                                          <div class="colRow-description"> COLUMN-3 </div>
                                          <div class="colRow-edit-icons">
                                              <span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                     </td>

                   </tr>

                 </table>

               </div>


               <div class="box-contents" style="margin-top:30px;"> 
                  <table>
                      <tr>
                        <td>
                            <div class="customLayout">
                              <a href="#" class="btn btn-danger btnLayout" role="button"><i class="fa fa-pencil"></i> Customize </a>
                            </div>
                          </td>
                          <td>
                            <span class="ui_to_drag_desc">Create Grid</span>
                          </td>
                        </tr>
                      </table>
             </div>
                      
           </div>
                

         </div>

                

                <div class="tab-pane" id="tab_b_elements">

                  <div class="box">
                         <p class="box-title">Text Elements</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="pDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-paragraph"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Paragraph</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement parElement hiddenDiv" data-id="1">
                              
                                <p class="childOfBorderedParagraph"> </p>
                              
                              
                                <div class="paragraph-description">Paragraph</div>
                                <div class="paragraph-edit-icons">
                                  
                                  <span class="paragraph-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
          
                                  <span class="paragraph-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="paragraph-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                              <div class="pDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-align-left"></i></td>
                                             <td style="padding-left:18px;font-size:12px;">Text</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement txtElement hiddenDiv" data-id="1">
                              
                                  <span class="childOfBorderedParagraph"> </span>
                                
                                
                                  <div class="span-description">Text</div>
                                  <div class="span-edit-icons">
                                    
                                    <span class="span-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
            
                                    <span class="span-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                    <span class="span-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                  </div>
                            
                              </div>
                            </div>
                              

                          </td>

                        </tr>

                        
                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="pDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-indent"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Heading H1</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement headElement hiddenDiv" data-id="1">
                              
                                <h1 class="childOfBorderedParagraph"> </h1>
                              
                              
                                <div class="heading-description">Heading h1</div>
                                <div class="heading-edit-icons">
                                  
                                  <span class="heading-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
          
                                  <span class="heading-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="heading-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                           <div class="pDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-indent"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Heading H2</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement headElement hiddenDiv" data-id="1">
                              
                                <h2 class="childOfBorderedParagraph"> </h2>
                              
                              
                                <div class="heading-description">Heading h2</div>
                                <div class="heading-edit-icons">
                                  
                                  <span class="heading-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
          
                                  <span class="heading-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="heading-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>

                          </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="pDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-indent"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Heading H3</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement headElement hiddenDiv" data-id="1">
                              
                                <h3 class="childOfBorderedParagraph"> </h3>
                              
                              
                                <div class="heading-description">Heading h3</div>
                                <div class="heading-edit-icons">
                                  
                                  <span class="heading-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
          
                                  <span class="heading-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="heading-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                           <div class="pDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-indent"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Heading H4</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="pElement headElement hiddenDiv" data-id="1">
                              
                                <h4 class="childOfBorderedParagraph"> </h4>
                              
                              
                                <div class="heading-description">Heading h4</div>
                                <div class="heading-edit-icons">
                                  
                                  <span class="heading-content"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
          
                                  <span class="heading-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="heading-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>

                          </td>

                        </tr>

                        


                      </table>

                     </div>
                

               
                         <p class="box-title">Image Elements</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="imgDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-camera"></i></td>
                                             <td style="padding-left:17px;font-size:12px;">Image</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="imgElement hiddenDiv" data-id="1">
                                 <img src="editor/images/placeholder.jpg" width="300" height="220">
                                <div class="img-description">Image</div>
                                <div class="img-edit-icons">
                                  <span class="img-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="img-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="img-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                             <div class="imgDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-expand"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Responsive</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="imgElement hiddenDiv" data-id="1">
                                
                                 <img class="imgTestResponsive" src="editor/images/placeholder.jpg" width="300" height="220">
                                <div class="img-description">Image</div>
                                <div class="img-edit-icons">
                                  <span class="img-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="img-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="img-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="imgDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-arrows"></i></td>
                                             <td style="padding-left:7px;padding-top:1px;font-size:12px;">Center Block</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="imgElement hiddenDiv" data-id="1">
                                 <img class="center-block" src="editor/images/placeholder.jpg" width="300" height="220">
                                <div class="img-description">Image</div>
                                <div class="img-edit-icons">
                                  <span class="img-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="img-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="img-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                             <div class="imgDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Responsive <br/>Center Block</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="imgElement hiddenDiv" data-id="1">
                                <img class="imgTestResponsive center-block" src="editor/images/placeholder.jpg" width="300" height="220">
                                 
                                <div class="img-description">Image</div>
                                <div class="img-edit-icons">
                                  <span class="img-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="img-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="img-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;" colspan="2">
                             <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:7px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-camera-retro"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Thumbnails</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>
                            
                                <div class="customDiv hiddenDiv thumbnail" data-id="1"> 
                                    <div class="div-container-description">Thumbnail</div>
                                    <div class="div-container-edit-icons">
                                        <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                        <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                                    </div>
                                </div>
                           </div>
                          </td>
                        </tr>

                      </table>

                     </div>
                

               
                         <p class="box-title">Button Elements</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-play-circle-o"></i></td>
                                             <td style="padding-left:15px;font-size:12px;">Button <br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-primary">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;padding-left:-30px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-arrows-h"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Button Block<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-primary btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          </tr>

                          

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:1px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Group<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-primary">Apple</button>
                                    <button type="button" class="btn btn-primary">Samsung</button>
                                    <button type="button" class="btn btn-primary">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:4px;font-size:12px;">Button Group<br/>Justified </td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-success">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-success">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-success">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>


                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;" colspan="2"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown <br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-primary dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>


                        </tr>

                      </table>

                     </div>
               

                
                
                   <p class="box-title">Google Maps</p>
                   <div class="box-contents" style="margin-top:20px;"> 

                   <table style="margin-left:auto;margin-right:auto;">
                    
                      <tr>
                          <td>
                            <div class="customGMaps" style="margin-left:0px;width:140px;max-width:140px;min-width:140px;">
                              <a href="#" class="btn btn-danger btngMapsOptions" role="button"><i class="fa fa-pencil"></i> &nbsp; Select Options </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          
                          <td style="padding-left:20px;padding-top:15px;">
                            <span class="ui_to_drag_desc_gmaps" >Customize </span>
                          </td>

                        </tr>

                    </table>
                  </div>
              


               
                         <p class="box-title">Navbar</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">

                           <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                              <div class="navbarDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:14px;"><i class="fa fa-sign-out"></i></td>
                                             <td style="padding-left:15px;font-size:12px;">Navbar<br/> Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="customNavbar hiddenDiv" data-id="1">
                                <div class="navbar navbar-default">
                                  <div class="container-fluid">
                                    <div class="navbar-header">
                                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>                        
                                      </button>
                                      
                                      <a class="navbar-brand" href="#"><i class="fa fa-user"></i>&nbsp;BrandName</a>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                      <ul class="nav navbar-nav navbar-left">
                                        <li class="active"><a href="#" class="removePreviewMainLink">Home</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Page 1 <i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-1</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-2</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-3</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="#" class="removePreviewMainLink">Page 2</a></li>
                                        <li><a href="#" class="removePreviewMainLink">Page 3</a></li>
                                      </ul>
                                      <ul class="nav navbar-nav navbar-right">
                                        
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Choose<i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Login</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Register</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Mailing List</a></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>


                              <div class="navbarDescription">Navbar</div>
                                <div class="navbarEditIcons">
                                  <span class="navbarContent"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="navbarEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="navbarEditLeft"><a href="#"><i class="fa fa-arrow-circle-o-left" ></i></a></span>
                                  <span class="navbarEditRight"><a href="#"><i class="fa fa-arrow-circle-o-right" ></i></a></span>
                                  <span class="navbarDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                            </div>
                           </div> 


                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">
                              <div class="navbarDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:14px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:15px;font-size:12px;">Navbar<br/> Inverse</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="customNavbar hiddenDiv" data-id="1">
                                <div class="navbar navbar-inverse">
                                  <div class="container-fluid">
                                    <div class="navbar-header">
                                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>                        
                                      </button>
                                      
                                      <a class="navbar-brand" href="#"><i class="fa fa-user"></i>&nbsp;BrandName</a>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                      <ul class="nav navbar-nav navbar-left">
                                        <li class="active"><a href="#" class="removePreviewMainLink">Home</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Page 1 <i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-1</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-2</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-3</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="#" class="removePreviewMainLink">Page 2</a></li>
                                        <li><a href="#" class="removePreviewMainLink">Page 3</a></li>
                                      </ul>
                                      <ul class="nav navbar-nav navbar-right">
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Choose<i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Login</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Register</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Mailing List</a></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>


                              <div class="navbarDescription">Navbar</div>
                                <div class="navbarEditIcons">
                                  <span class="navbarContent"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="navbarEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="navbarEditLeft"><a href="#"><i class="fa fa-arrow-circle-o-left" ></i></a></span>
                                  <span class="navbarEditRight"><a href="#"><i class="fa fa-arrow-circle-o-right" ></i></a></span>
                                  <span class="navbarDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                            </div>
                           </div> 

                            </td>

                          </tr>

                          <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                              <div class="navbarDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-external-link"></i></td>
                                             <td style="padding-left:2px;font-size:12px;">Navbar Default<br/>Fixed Top</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="customNavbar navBarFixedTop hiddenDiv" data-id="1">
                                <div class="navbar navbar-default">
                                  <div class="container-fluid">
                                    <div class="navbar-header">
                                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>                        
                                      </button>
                                      
                                      <a class="navbar-brand" href="#"><i class="fa fa-user"></i>&nbsp;BrandName</a>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                      <ul class="nav navbar-nav navbar-left">
                                        <li class="active"><a href="#" class="removePreviewMainLink">Home</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Page 1 <i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-1</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-2</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-3</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="#" class="removePreviewMainLink">Page 2</a></li>
                                        <li><a href="#" class="removePreviewMainLink">Page 3</a></li>
                                      </ul>
                                      <ul class="nav navbar-nav navbar-right">
                                        
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Choose<i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Login</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Register</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Mailing List</a></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>


                              <div class="navbarDescription">Navbar</div>
                                <div class="navbarEditIcons">
                                  <span class="navbarContent"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="navbarEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="navbarEditLeft"><a href="#"><i class="fa fa-arrow-circle-o-left" ></i></a></span>
                                  <span class="navbarEditRight"><a href="#"><i class="fa fa-arrow-circle-o-right" ></i></a></span>
                                  <span class="navbarDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                            </div>
                           </div> 


                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">
                              <div class="navbarDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-external-link"></i></td>
                                             <td style="padding-left:2px;font-size:12px;">Navbar Inverse<br/>Fixed Top</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                <div class="customNavbar navBarFixedTop hiddenDiv" data-id="1">
                                <div class="navbar navbar-inverse">
                                  <div class="container-fluid">
                                    <div class="navbar-header">
                                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>                        
                                      </button>
                                      
                                      <a class="navbar-brand" href="#"><i class="fa fa-user"></i>&nbsp;BrandName</a>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                      <ul class="nav navbar-nav navbar-left">
                                        <li class="active"><a href="#" class="removePreviewMainLink">Home</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Page 1 <i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-1</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-2</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Page 1-3</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="#" class="removePreviewMainLink">Page 2</a></li>
                                        <li><a href="#" class="removePreviewMainLink">Page 3</a></li>
                                      </ul>
                                      <ul class="nav navbar-nav navbar-right">
                                        
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                        <li><a href="#" class="removePreviewMainLink"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                        <li class="dropdown">
                                          <a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="#">Choose<i class="fa fa-caret-down"></i></a>
                                          <ul class="dropdown-menu">
                                            <li><a href="#" class="removePreviewDropdownLink">Login</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Register</a></li>
                                            <li><a href="#" class="removePreviewDropdownLink">Mailing List</a></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>


                              <div class="navbarDescription">Navbar</div>
                                <div class="navbarEditIcons">
                                  <span class="navbarContent"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="navbarEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="navbarEditLeft"><a href="#"><i class="fa fa-arrow-circle-o-left" ></i></a></span>
                                  <span class="navbarEditRight"><a href="#"><i class="fa fa-arrow-circle-o-right" ></i></a></span>
                                  <span class="navbarDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                            </div>
                           </div> 

                            </td>

                          </tr>

                        </table>
                  </div>

                  <p class="box-title">Alerts</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-check-circle-o"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Success </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv borderedDivAlertSuccess alert alert-success" data-id="1"> 
                              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              <div class="div-container-description">Success</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-info-circle"></i></td>
                                               <td style="padding-left:21px;font-size:12px;">Info </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv borderedDivAlertInfo alert alert-info" data-id="1"> 
                              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              <div class="div-container-description">Info</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                            </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-question-circle"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Warning </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv borderedDivAlertWarning alert alert-warning" data-id="1"> 
                              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              <div class="div-container-description">Warning</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-pencil-square-o"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Danger </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv borderedDivAlertDanger alert alert-danger" data-id="1"> 
                              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              <div class="div-container-description">Danger</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                            </td>

                        </tr>

                      </table>

                     </div>

                     <p class="box-title">Responsive Embed</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">

                           <tr>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="responsiveEmbedDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-film"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">iFrame 16/9 </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customResponsiveEmbed hiddenDiv" data-id="1">

                                      
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe class="embed-responsive-item" src="http://www.youtube.com/v/XGSy3_Czz8k" ></iframe>
                                      </div>
                                      <div class="responsiveEmbedDescription"> Embed </div>
                                      <div class="responsiveEmbedIcons">
                                          <span class="responsiveEmbedContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o"></i></a></span>
                                          <span class="responsiveEmbedEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="responsiveEmbedDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>

                           </td>

                           <td class="customBTd" style="padding-bottom:10px;">
                              <div class="responsiveEmbedDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-film"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Video 16/9 </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customResponsiveEmbed CustomEmbedVideo hiddenDiv" data-id="1">

                                      
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <video class="embed-responsive-item" controls>
                                              <source src="editor/videos/Three-Swans.mp4" type="video/mp4">
                                          </video>
                                      </div>
                                      <div class="responsiveEmbedDescription"> Embed </div>
                                      <div class="responsiveEmbedIcons">
                                          <span class="responsiveEmbedContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o"></i></a></span>
                                          <span class="responsiveEmbedEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="responsiveEmbedDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>
                            

                           </td>
                          
                        </tr>

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">

                            <div class="responsiveEmbedDraggable" data-id="1">
                                   <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-film"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">iFrame 4/3 </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customResponsiveEmbed hiddenDiv" data-id="1">

                                      
                                      <div class="embed-responsive embed-responsive-4by3">
                                          <iframe class="embed-responsive-item" src="http://www.youtube.com/v/XGSy3_Czz8k" ></iframe>
                                      </div>
                                      <div class="responsiveEmbedDescription"> Embed </div>
                                      <div class="responsiveEmbedIcons">
                                          <span class="responsiveEmbedContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o"></i></a></span>
                                          <span class="responsiveEmbedEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="responsiveEmbedDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>

                           </td>

                           <td class="customBTd" style="padding-bottom:10px;">
                              <div class="responsiveEmbedDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-film"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Video 4/3 </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customResponsiveEmbed CustomEmbedVideo hiddenDiv" data-id="1">

                                      
                                      <div class="embed-responsive embed-responsive-4by3">
                                          <video class="embed-responsive-item" controls>
                                              <source src="editor/videos/Three-Swans.mp4" type="video/mp4">
                                          </video>
                                      </div>
                                      <div class="responsiveEmbedDescription"> Embed </div>
                                      <div class="responsiveEmbedIcons">
                                          <span class="responsiveEmbedContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o"></i></a></span>
                                          <span class="responsiveEmbedEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="responsiveEmbedDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>
                            

                           </td>
                        </tr>

                      </table>

                     </div>

                     <p class="box-title">Jumbotron - Page Header</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable"> 
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-list-alt"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Jumbotron </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv jumbotron borderedDivJumbotron" data-id="1"> 
                              <div class="div-container-description">Jumbotron</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                          </td>
                          <td class="customBTd" style="padding-bottom:10px;"> 
                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-calendar-o"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Page Header </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv page-header" data-id="1"> 
                              <div class="div-container-description">Header</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>
                          </td>

                        </tr>

                        <tr>
                            <td class="customBTd" colspan="2">

                            <div class="div-draggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:14px;"><i class="fa fa-caret-square-o-up"></i></td>
                                               <td style="padding-left:21px;font-size:12px;">Well </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                            
                            <div class="customDiv hiddenDiv well borderedDivWell" data-id="1"> 
                              <div class="div-container-description">Well</div>
                              <div class="div-container-edit-icons">
                                  <span class="div-container-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span> 
                                  <span class="div-container-delete"><a href="#"><i class="fa fa-times" ></i></a></span> 
                              </div>
                            </div>
                          </div>

                          </td>

                          
                        </tr>
                      </table>

                     </div>

                     <p class="box-title">Panels</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:14px;font-size:12px;">Panel <br/> Default </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-default">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Panel <br/> Primary </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-primary">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                          
                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Panel <br/> Success </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-success">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Panel <br/> Info </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-info">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                          
                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Panel <br/> Warning </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-warning">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="panelDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-th-list"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Panel <br/> Danger </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customPanel hiddenDiv" data-id="1">

                                    <div class="panel panel-danger">

                                        <div class="panel-heading insidePanel">
                                            <div class="panelHeadingDescription"> Heading </div>
                                            <div class="panelHeading-edit-icons">
                                                 
                                                 <span class="panelHeadingEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelHeadingDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>

                                        <div class="panel-body insidePanel">
                                            <div class="panelContent-description"> Content </div>
                                            <div class="panelContent-edit-icons">
                                                 
                                                 <span class="panelContentEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelContentDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                        <div class="panel-footer insidePanel">
                                          <div class="panelFooter-description"> Footer </div>
                                            <div class="panelFooter-edit-icons">
                                                 
                                                 <span class="panelFooterEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelFooterDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panelDescription"> Panel </div>
                                              <div class="panelEditIcons">
                                                 
                                                 <span class="panelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="panelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                    </div>



                                    </div>

                              </div>

                            </td>

                          
                        </tr>

                      </table>

                     </div>
              


                         <p class="box-title">Lists - List Group</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">

                           <tr>

                            <td class="customBTd" style="padding-bottom:10px;">

                            <div class="orderedListDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-list-ol"></i></td>
                                               <td style="padding-left:12px;font-size:12px;">Ordered <br/> List</td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customOrderedList hiddenDiv" data-id="1">

                                      <ol>
                                          <li class="orderedListItem"></li>
                                          <li class="orderedListItem"></li>
                                          <li class="orderedListItem"></li>
                                      </ol>
                                      <div class="orderedListDescription"> O List </div>
                                      <div class="orderedListEditIcons">
                                          <span class="orderedListContent"><a href="#" title="Edit Content"><i class="fa fa-pencil"></i></a></span>
                                          <span class="orderedListEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="orderedListDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>

                           </td>
                        
                          <td class="customBTd" style="padding-bottom:10px;">

                            <div class="unorderedListDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-list-ul"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Unordered <br/>List</td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customUnorderedList hiddenDiv" data-id="1">

                                      <ul>
                                          <li class="unorderedListItem"></li>
                                          <li class="unorderedListItem"></li>
                                          <li class="unorderedListItem"></li>
                                      </ul>
                                      <div class="unorderedListDescription"> U List </div>
                                      <div class="unorderedListEditIcons">
                                          <span class="unorderedListContent"><a href="#" title="Edit Content"><i class="fa fa-pencil"></i></a></span>
                                          <span class="unorderedListEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="unorderedListDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>


                                    </div>

                              </div>

                           </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;" colspan="2">

                            <div class="listGroupDraggable" data-id="1">
                                 <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:2px;">
                                            <tr >
                                               <td style="padding-left:6px;font-size:12px;"><i class="fa fa-outdent"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">List <br/> Group </td>
                                            </tr>
                                        </table>
                                    </a>
                                  </span>

                                   <div class="customListGroup hiddenDiv" data-id="1">

                                      <div class="list-group">
                                          <a href="#" class="list-group-item active listGroupItemInside">
                                              <div class="listGroupItemDescription"> List Group Item</div>
                                              
                                          </a>
                                        
                                          <a href="#" class="list-group-item listGroupItemInside">
                                              <div class="listGroupItemDescription"> List Group Item </div>
                                              
                                          </a>
                                          

                                      </div>

                                        <div class="listGroupDescription"> List Group </div>
                                              <div class="listGroupEditIcons">
                                                 
                                                 <span class="listGroupEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                                 <span class="listGroupDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                        </div>


                                    </div>

                              </div>
                            </td>
                          
                        </tr>


                      </table>

                     </div>

                     <p class="box-title">Carousel</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">

                       
                        <tr>

                            <td class="customBTd" style="padding-bottom:10px;" colspan="2">

                            <div class="carouselDraggable" data-id="1">
                                  <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-reply"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Carousel <br/> Bootstrap</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                                   <div class="customCarousel customCarouselWithDivs hiddenDiv" data-id="1"> 

                                      <div id="carousel-generic" class="carousel slide"  data-ride="carousel" data-interval="false">
                                          
                                          <ol class="carousel-indicators">
                                              <li data-target="#carousel-generic" data-slide-to="0" class="active"></li>
                                              <li data-target="#carousel-generic" data-slide-to="1"></li>
                                              <li data-target="#carousel-generic" data-slide-to="2"></li>
                                          </ol>

                                          
                                          <div class="carousel-inner" role="listbox">
                                              <div class="item active carouselItem">
                                                  
                                              </div>
                                              <div class="item carouselItem">
                                                  
                                              </div>
                                              <div class="item carouselItem">
                                                  
                                              </div>
                                            
                                          </div>
                                          
                                          </div> 

                                      <div class="carouselDescription"> Carousel </div>
                                      <div class="carouselIcons">
                                          <span class="carouselContent"><a href="#" title="Edit Content"><i class="fa fa-pencil"></i></a></span>
                                          <span class="carouselEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                          <span class="carouselDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                      </div>

                                      <div class="carouselOptions" style="display:none;">
                                          <div class="carouselShowArrows" data-value="false"></div>
                                          <div class="carouselShowIndicators" data-value="true"></div>

                                      </div>


                                    </div>

                              </div>

                           </td>


                        </tr>


                      </table>

                     </div>
              


                         
            </div>
        </div>


                <div class="tab-pane" id="tab_c_forms">

                  <div class="box">
                         <p class="box-title">Vertical Forms</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                           <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-font"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Text </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Input Text Label</label>
                                  <input type="text" class="form-control" placeholder="Edit Input Text">
                                </div>

                                <div class="inputVerticalDescription">Input</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>
                          <td class="customBTd" style="padding-bottom:10px;">
                              <div class="inputDroppable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-question-circle"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Password </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Input Password Label</label>
                                  <input type="password" class="form-control" placeholder="Edit Input Password">
                                </div>

                                <div class="inputVerticalDescription">Input</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>
                          </td>

                        </tr>


                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-at"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">E-mail </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">E-mail Label</label>
                                  <input type="email" class="form-control" placeholder="Enter your e-mail">
                                </div>

                                <div class="inputVerticalDescription">E-mail</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>
                          <td class="customBTd" style="padding-bottom:10px;">
                              <div class="inputDroppable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-external-link"></i></td>
                                               <td style="padding-left:21px;font-size:12px;">URL </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">URL Label</label>
                                  <input type="url" class="form-control" placeholder="Enter url">
                                </div>

                                <div class="inputVerticalDescription">URL</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>
                          </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-search-plus"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Search </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Search Label</label>
                                  <input type="search" class="form-control" placeholder="Enter search terms">
                                </div>

                                <div class="inputVerticalDescription">Search</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>
                          <td class="customBTd" style="padding-bottom:10px;">
                              <div class="inputDroppable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-phone-square"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Telephone </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>
                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Telephone Label</label>
                                  <input type="tel" class="form-control" placeholder="Enter your telephone number">
                                </div>

                                <div class="inputVerticalDescription">Telephone</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>
                          </td>

                        </tr>

                        <tr>
                            <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-twitch"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Textarea </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Textarea Label</label>
                                  <textarea class="form-control" rows="3"></textarea>
                                </div>

                                <div class="inputVerticalDescription">Textarea</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                              <div class="inputDroppable" data-id="1">
                                
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-chain-broken"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Select </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="verticalInputElement hiddenDiv" data-id="1">

                                <div class="form-group element-edit" >
                                  <label data-type="label">Select Label</label>
                                  <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>

                                <div class="inputVerticalDescription">Select</div>
                                  <div class="inputVerticalEditIcons">
                                      <span class="inputVerticalContent"><a href="#" title="Edit Content"><i class="fa fa-pencil" ></i></a></span> 
                                      <span class="inputVerticalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="inputVerticalLabelEdit"><a href="#"><i class="fa fa-level-up" ></i></a></span>
                                      <span class="inputVerticalInputEdit"><a href="#"><i class="fa fa-level-down" ></i></a></span>
                                      <span class="inputVerticalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>
                          </td>

                        </tr>



                      </table>
                  </div>
              

                         <p class="box-title">Horizontal Forms</p>
                         <div class="box-contents" style="margin-top:20px;"> 

                          <table class="customBTable">
                       

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                             
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-leanpub"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Label </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">
                                  <label data-type="label">Horizontal Label</label>

                                  <div class="labelDescription">Label</div>
                                  <div class="labelEditIcons">
                                      <span class="labelContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                      <span class="labelEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                      <span class="labelDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-font"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Input Text </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <input type="text" class="form-control" placeholder="Edit Input Text">
                                
                                <div class="inputHorizontalDescription">Text</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                        </tr>

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                               <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-question-circle"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Password </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <input type="password" class="form-control" placeholder="Edit Input Password">
                                
                                <div class="inputHorizontalDescription">Password</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-at"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Input E-mail </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <input type="email" class="form-control" placeholder="Enter Email">
                                
                                <div class="inputHorizontalDescription">E-mail</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                        </tr>

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-external-link"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Input URL </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <input type="url" class="form-control" placeholder="Enter URL">
                                
                                <div class="inputHorizontalDescription">URL</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                             
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-search-plus"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Input Search </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <input type="email" class="form-control" placeholder="Enter search terms">
                                
                                <div class="inputHorizontalDescription">Search</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                        </tr>

                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-twitch"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Textarea</td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <textarea class="form-control" rows="3"></textarea>
                                
                                <div class="inputHorizontalDescription">Textarea</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-chain-broken"></i></td>
                                               <td style="padding-left:16px;font-size:12px;">Select</td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                
                                <div class="inputHorizontalDescription">Select</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                        </tr>


                        <tr>
                          <td class="customBTd" style="padding-bottom:10px;">
                              
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-link"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Checkbox</td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <label>
                                    <input type="checkbox" value="">
                                    &nbsp;<span>Option Checkbox</span>
                                </label>
                                
                                <div class="inputHorizontalDescription">Checkbox</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                            <div class="inputDroppable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-codiepie"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Radio Button</td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                              <div class="inputElement hiddenDiv" data-id="1">

                                <label>
                                    <input type="radio" name="optionsRadios" value="">
                                    &nbsp; <span>Option Radio</span>
                                </label>
                                
                                <div class="inputHorizontalDescription">Radio</div>
                                <div class="inputHorizontalEditIcons">
                                  <span class="inputHorizontalContent"><a href="#" title="Edit Content"><i class="fa fa-picture-o" ></i></a></span> 
                                  <span class="inputHorizontalEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="inputHorizontalDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>

                              </div>

                            </div>

                          </td>

                        </tr>

                            <tr >
                            <td class="customBTd" style="padding-bottom:10px;" colspan="2">

                             <div class="formGroupDraggable" data-id="1">
                              
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                    <a href="#" class="ui_to_drag">
                                        <table style="margin-top:7px;">
                                            <tr >
                                               <td style="padding-left:4px;font-size:12px;"><i class="fa fa-object-group"></i></td>
                                               <td style="padding-left:9px;font-size:12px;">Form Group </td>
                                            </tr>
                                        </table>
                                    </a>
                              </span>

                                <div class="formGroupElement hiddenDiv" data-id="1">
                              
                                <div class="form-group formGroupInside">  </div>
                              
                              
                                <div class="formGroupDescription">Form-group</div>
                                <div class="formGroupEditIcons">
                                  <span class="formGroupEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="formGroupDelete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            
                              </div>
                            </div>

                          </td>
                          

                        </tr>

                      </table>
                  </div>

                  <p class="box-title">Button Elements</p>
                  <div class="box-contents" style="margin-top:20px;"> 

                  <table class="customBTable">
                           <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-default">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;padding-left:-30px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-primary">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          </tr>

                          <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Success</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-success">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Info</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-info">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          </tr>

                          <tr>

                            <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Warning</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-warning">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Danger</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-danger">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          </tr>

                          <tr>

                            <td class="customBTd" style="padding-bottom:10px;" colspan="2">
                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:6px;font-size:12px;"><i class="fa fa-sign-in"></i></td>
                                             <td style="padding-left:14px;font-size:12px;">Button <br/>Link</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-link">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          </tr>

                        </table>
                      </div>


                  <p class="box-title">Button Block Elements</p>
                  <div class="box-contents" style="margin-top:20px;"> 

                  <table class="customBTable">
                     <tr>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-default btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-primary btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Success</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-success btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Info</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-info btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Warning</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-warning btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Danger</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-danger btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;" colspan="2">

                             <div class="buttonDraggable" data-id="1">
                              <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-share-square-o"></i></td>
                                             <td style="padding-left:7px;font-size:12px;">Button Block<br/>Link</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonElement hiddenDiv" data-id="1">
                                <button type="button" class="btn btn-link btn-block">Default</button>
                                <div class="button-description">Button</div>
                                <div class="button-edit-icons">
                                  <span class="button-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="button-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="button-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                      </table>
                    </div>


                  <p class="box-title">Button Group Elements</p>
                  <div class="box-contents" style="margin-top:20px;"> 

                  <table class="customBTable">

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-default">Apple</button>
                                    <button type="button" class="btn btn-default">Samsung</button>
                                    <button type="button" class="btn btn-default">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-primary">Apple</button>
                                    <button type="button" class="btn btn-primary">Samsung</button>
                                    <button type="button" class="btn btn-primary">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Success</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-success">Apple</button>
                                    <button type="button" class="btn btn-success">Samsung</button>
                                    <button type="button" class="btn btn-success">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Info</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-info">Apple</button>
                                    <button type="button" class="btn btn-info">Samsung</button>
                                    <button type="button" class="btn btn-info">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Warning</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-warning">Apple</button>
                                    <button type="button" class="btn btn-warning">Samsung</button>
                                    <button type="button" class="btn btn-warning">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Danger</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-danger">Apple</button>
                                    <button type="button" class="btn btn-danger">Samsung</button>
                                    <button type="button" class="btn btn-danger">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                          <td class="customBTd" style="padding-bottom:10px;" colspan="2"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:2px;font-size:12px;"><i class="fa fa-columns"></i></td>
                                             <td style="padding-left:5px;font-size:12px;">Button Group<br/>Link</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btnGroupInner" role="group">
                                    <button type="button" class="btn btn-link">Apple</button>
                                    <button type="button" class="btn btn-link">Samsung</button>
                                    <button type="button" class="btn btn-link">Sony</button>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                      </table>

                    </div>


                  <p class="box-title">Button Group Justified Elements</p>
                  <div class="box-contents" style="margin-top:20px;"> 

                  <table class="customBTable">

                          <tr>

                           <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-default">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-primary">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-primary">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-primary">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                           <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Success</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-success">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-success">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-success">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Info</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-info">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-info">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-info">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                           <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Warning</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-warning">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-warning">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-warning">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Danger</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-danger">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-danger">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-danger">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                        <tr>

                           <td class="customBTd" style="padding-bottom:10px;" colspan="2"> 
                              <div class="buttonGroupDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:0px;font-size:12px;"><i class="fa fa-tasks"></i></td>
                                             <td style="padding-left:1px;font-size:12px;">Justified Group<br/>Link</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="buttonGroupElement hiddenDiv" data-id="1">
                                <div class="btn-group btn-group-justified btnGroupInner" role="group">
                                  <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-link">Apple</button>
                                  </div>
                                    <div class="btn-group" role="group">
                                      <button type="button" class="btn btn-link">Samsung</button>
                                    </div>

                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-link">Sony</button>
                                  </div>
                                </div>
                                <div class="buttonGroup-description">Button Group</div>
                                <div class="buttonGroup-edit-icons">
                                  <span class="buttonGroup-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="buttonGroup-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="buttonGroup-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                      </table>
                    </div>


                  <p class="box-title">Dropdown Elements</p>
                  <div class="box-contents" style="margin-top:20px;"> 

                  <table class="customBTable">
                     <tr>
                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Default</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-default dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Primary</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-primary dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Success</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-success dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Info</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-info dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <tr>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Warning</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-warning dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <td class="customBTd" style="padding-bottom:10px;"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Danger</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-danger dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                          <tr>

                          <td class="customBTd" style="padding-bottom:10px;" colspan="2"> 
                              <div class="dropDownDraggable" data-id="1">
                                <span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:70px;">
                                  <a href="#" class="ui_to_drag">
                                      <table style="margin-top:2px;">
                                          <tr >
                                             <td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>
                                             <td style="padding-left:9px;font-size:12px;">Dropdown<br/>Link</td>
                                          </tr>
                                      </table>
                                  </a>
                              </span>

                              <div class="dropDownElement hiddenDiv" data-id="1">
                                <div class="dropdown">
                                      <button class="btn btn-link dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Dropdown 
                                      <span class="caret"></span>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                      </ul>
                                </div>
                                <div class="dropDown-description">Dropdown</div>
                                <div class="dropDown-edit-icons">
                                  <span class="dropDown-content"><a href="#"><i class="fa fa-pencil" ></i></a></span>
                                  <span class="dropDown-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>
                                  <span class="dropDown-delete"><a href="#"><i class="fa fa-times" ></i></a></span>
                                </div>
                            </div>
                            </div>
                          </td>

                        </tr>

                      </table>

                     </div>



                
         </div> 
     </div>

   </div>
          
</div>
           
             
              <div class="col-xs-10 col-sm-10 main"> 
                  
                  <div class="content-frame" id="content-frame">
                    

                  </div>
                
                
                
            </div>

   </div> 
        
  </div>

</div>



<div id="projectName" data-userid="<?php echo $userid;?>" style="display:none;"><?php echo $projectName;?><div id="templateName" data-value="false" style="display:none;"></div>
</div>

<div id="seoSettings" data-value="false" style="display:none;"></div>


<div id="hidden-top" style="display:none;"></div>

<div class="modal fade" id="customiseRowLayout" role="dialog">
    <div class="modal-dialog customWidth">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title blueText text-center blueTitle" style="font-weight:800;">CUSTOM GRID LAYOUT <button type="button" class="btn btn-success close" data-dismiss="modal">&times;</button></h4>
          
        </div>
          <div class="modal-body">
           
             <div class="preview-area">
                   <div class="row">
                       <div class="customLayDesc">Modify the Layout according to each Device Resolution desired Layout.<br/>
                                     The Layout is <span class="blueText">Mobile-First</span> , so enter values for Device Resolutions above each you want the changes to apply.
                       </div>
                   </div>

                <div class="modal-totalColsInRow"> 
                   <h4 class="text-center">Number of Columns in Row</h4>
                   <span class="resDesc"> Select how many Columns you want the Row to have. You can select up to 12 Columns.</span><br/>
                   <div class="form-group totalColsInRow">
                        <label for="selectTotalColsInRow" >Select number of Columns:</label>
                        <select class="form-control" id="selectTotalColsInRow">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                      </div>
                    </div>

                    <div class="layoutDescriptionForColumns">
                    </div>

                <div class="modal-mobileRes"> 
                   <h4 class="text-center"><span class="blueText">Mobile Resolution</span> Layout for Columns in the Row</h4>
                   <span class="resDesc"> The Layout will apply for Resolutions up to 768 pixels.<br/>Total number for Columns Sizes and Columns Offsets must sum up to 12.</span><br/>
                 </div>
                   
                  <div class="modal-mobileCols">
                    <div class="row">
                        <div class="form-group col-xs-12 col-sm-6">
                          <label data-type="label">Column 1  Size</label>
                          <select class="form-control" id="modal-mobile-col1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                        </div>
  
                        <div class="form-group col-xs-12 col-sm-6">
                          <label data-type="label">Column 1  Offset</label>
                          <select class="form-control" id="modal-mobile-colOffset1">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                          </select>
                      </div>
                    
                  </div> 

                 </div>

                 <div class="modal-tabletSmRes"> 
                   <h4 style="margin-left:80px;"><span class="blueText">Tablet Small Resolution</span>  Columns in the Row</h4>
                   <span class="resDesc">Change this if you want different Layout for Resolutions above 768 pixels. </span><br/>
                   <span class="resDesc"> This Layout will apply for Resolutions from 768 to 991 pixels.</span><br/>
                   
                   <div class="form-group tabletSmSameAsMobile">
                        <label for="tabletSmSameAsMobileCheckbox">The Layout will be the same as the Mobile Layout</label><br/>
                        <label>
                          <input type="checkbox" id= "tabletSmSameAsMobileCheckbox" value="yes" checked> &nbsp; Same As Mobile
                        </label>
                        
                  </div>
              

                  <div class="modal-tabletSmCols"></div>
                  </div>

                  <div class="modal-tabletLgRes"> 
                   <h4 style="margin-left:80px;"><span class="blueText">Tablet Large Resolution</span> Columns in the Row</h4>
                   <span class="resDesc">Change this if you want different Layout for Resolutions above 992 pixels </span><br/>
                   <span class="resDesc"> This Layout will apply for Resolutions from 992 to 1199 pixels</span><br/>
                   
                   <div class="form-group tabletLgSameAsMobile">
                        <label for="tabletLgSameAsMobileCheckbox">The Layout will be the same as the Tablet Small Layout</label><br/>
                        <label>
                          <input type="checkbox" id= "tabletLgSameAsMobileCheckbox" value="yes" checked> &nbsp; Same As Tablet Small
                        </label>
                        
                  </div>
              
                  <div class="modal-tabletLgCols"></div>
                  </div>

                  <div class="modal-desktopRes"> 
                   <h4 style="margin-left:80px;"><span class="blueText">Desktop Resolution</span> Columns in the Row</h4>
                   <span class="resDesc">Change this if you want different Layout for Resolutions above 1200 pixels </span><br/>
                   <span class="resDesc"> This Layout will apply for Resolutions above 1200 </span><br/>
                   
                    <div class="form-group desktopSameAsMobile">
                        <label for="desktopSameAsMobileCheckbox">The Layout will be the same as the Tablet Large Layout</label><br/>
                        <label>
                          <input type="checkbox" id= "desktopSameAsMobileCheckbox" value="yes" checked> &nbsp; Same As Tablet Large
                        </label>
                        
                  </div>

                  <div class="modal-desktopCols"></div>
                </div>

             </div>
           
         </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left saveCustomLayout">Create</button>
            <button type="button" class="btn btn-default pull-right" data-dismiss="modal">Close</button>
        </div>

      </div>
    </div>
</div>



<div class="modal fade" id="paragraphEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Select Icons
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 
          
        
          <span class="blueText" style="font-size:16px">Select Icons Size</span>
          <div class="iconsSizeContainer" style="margin-top:5px;">
                  <form role="form" class="iconsParSizeForm">
                    
                    <div class="row">
                    <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="normal" checked="checked"><span>Normal Size</span></label> 
                      </div>
                  </div>

                  <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="lg"><span>33% increase</span></label> 
                      </div>
                  </div>

                  <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="2x"><span>2x Size</span></label> 
                      </div>
                  </div>

                </div>

                <div class="row">
                  <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="3x"><span>3x Size</span></label> 
                      </div>
                  </div>

                  <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="4x"><span>4x Size</span></label> 
                      </div>
                  </div>

                  <div class="col-xs-4">
                      <div class="radio">
                            <label><input type="radio" name="optradio" value="5x"><span>5x Size</span></label> 
                      </div>
                  </div>

                </div>

                  </form>
          </div>

          
          <div class="panel-group" id="accordionIconsEditGroup">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionIconsEditGroup" href="#collapseIconsList">Icons</a>
                        </h4>
                    </div>

                    <div id="collapseIconsList" class="panel-collapse collapse ">
                        <div class="panel-body">


                            <span class="blueText" style="font-size:16px">Select Icons</span>
                            <div class="row optionsIconsContainer" style="margin-bottom:80px;"></div>

                         </div> 
                    </div> 
                </div>
    </div>  



        </div>

            

       <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left saveContents" data-dismiss="modal">Select</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
      </div>

     </div>
   </div>
 </div>



<div class="modal fade" id="horTextareaEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Vertical Textarea Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Input Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horizontalTextareaTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horizontalTextareaTextContentBox" >
                  </div>

             </div>
         </div>

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Textarea Number of Rows</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horizontalTextareaRowsNumBtn">
                                  Rows Number
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horizontalTextareaRowsNumContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horizontalTextareaEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="horizontalSelectEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Select Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          <div class="horizontalSelectElementsContainer">

          </div>


         <div class="row" style= "margin-top:20px;">
                          
              <div class="col-xs-8" >
                    <div class="input-group">
                          <label for="horizontalSelectChangeNumElements">Change Number of Options</label>
                          <input type="text" class="form-control" id="horizontalSelectChangeNumElementsInput" placeholder="Number">
                     </div>
              </div>

              <div class="col-xs-3 col-xs-offset-1" style="margin-top:27px">
                  <button type="button" class="btn btn-warning" id="horizontalSelectChangeNumElementsButton">CHANGE</button>
              </div>

         </div>


         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horizontalSelectEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="horCheckboxEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Checkbox Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:15px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horCheckboxTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horCheckboxTextContentBox" >
                  </div>

             </div>
         </div>

         
         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horCheckboxEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="horRadioEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Radio Input Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 


         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horRadioTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horRadioTextContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horRadioEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="seoEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">SEO Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 

          <div class="blueText" style="margin-bottom:10px;"> Google+ and Schema.org</div>

          <div class="form-group">
                <label data-type="label">Google+ Author Reference</label>
                <input type="text" class="form-control googleAuthor" placeholder="https://plus.google.com/+NicholasCerm/">
          </div>

          <div class="form-group">
                <label data-type="label">Google+ Publisher Reference</label>
                <input type="text" class="form-control googlePublisher" placeholder="https://plus.google.com/+ScotchI/">
          </div>

          <div class="form-group">
                <label data-type="label">Name</label>
                <input type="text" class="form-control schemaName" placeholder="Title">
          </div>

          <div class="form-group">
                <label data-type="label">Description</label>
                <input type="text" class="form-control schemaDescription" placeholder="150 Characters max">
          </div>

          <div class="form-group">
                <label data-type="label">Image</label>
                <input type="text" class="form-control schemaImage" placeholder="https://www.example.com/image.jpg">
          </div>

          <div class="blueText" style="margin-bottom:10px;"> Twitter </div>

          <div class="form-group">
                <label data-type="label">Card</label>
                <input type="text" class="form-control twitterCard" placeholder="summary, summary_large_image, photo, gallery, product, app, player">
          </div>

          <div class="form-group">
                <label data-type="label">Site</label>
                <input type="text" class="form-control twitterSite" placeholder="Publisher">
          </div>

          <div class="form-group">
                <label data-type="label">Creator</label>
                <input type="text" class="form-control twitterCreator" placeholder="Author">
          </div>

          <div class="form-group">
                <label data-type="label">Title</label>
                <input type="text" class="form-control twitterTitle" placeholder="70 characters max">
          </div>

          <div class="form-group">
                <label data-type="label">Description</label>
                <input type="text" class="form-control twitterDescription" placeholder="200 Characters max">
          </div>

          <div class="form-group">
                <label data-type="label">Image</label>
                <input type="text" class="form-control twitterImage" placeholder="https://www.example.com/image.jpg">
          </div>

          <div class="form-group">
                <label data-type="label">Video/Audio Player Source</label>
                <input type="text" class="form-control twitterPlayer" placeholder="https://www.example.com/video.avi">
          </div>

          <div class="blueText" style="margin-bottom:10px;"> Facebook & Pinterest </div>

          <div class="form-group">
                <label data-type="label">URL</label>
                <input type="text" class="form-control fbURL" placeholder="https://www.example.com">
          </div>

          <div class="form-group">
                <label data-type="label">Title</label>
                <input type="text" class="form-control fbTitle" placeholder="70 characters max">
          </div>

          <div class="form-group">
                <label data-type="label">Description</label>
                <input type="text" class="form-control fbDescription" placeholder="200 Characters max">
          </div>

          <div class="form-group">
                <label data-type="label">Image</label>
                <input type="text" class="form-control fbImage" placeholder="https://www.example.com/image.jpg">
          </div>

          <div class="form-group">
                <label data-type="label">Site Name</label>
                <input type="text" class="form-control fbSiteName" placeholder="Example Site">
          </div>

          <div class="form-group">
                <label data-type="label">Admins ID for <span class="blueText">FB Domain Insights</span></label>
                <input type="text" class="form-control fbAdminsID" placeholder="A Facebook user ID">
          </div>


          <div class="form-group">
                <label data-type="label">App ID for <span class="blueText">FB Domain Insights</span></label>
                <input type="text" class="form-control fbAppID" placeholder="Facebook app ID">
          </div>

          <div class="form-group">
                <label data-type="label">Type</label>
                <input type="text" class="form-control fbType" placeholder="article">
          </div>

          <div class="form-group">
                <label data-type="label">Locale</label>
                <input type="text" class="form-control fbLocale" placeholder="en_US">
          </div>

          <div class="form-group">
                <label data-type="label">Audio</label>
                <input type="text" class="form-control fbAudio" placeholder="https://www.example.com/audio.mp3">
          </div>

          <div class="form-group">
                <label data-type="label">Video</label>
                <input type="text" class="form-control fbVideo" placeholder="https://www.example.com/video.avi">
          </div>
          

        </div>

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left seoEditApply" data-dismiss="modal">APPLY</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">CANCEL</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="bodySettingsEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Webpage Body Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 
              
         <div class="panel-group" id="accordionBodySetText" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionBodySetText" href="#collapseBodySetTextContent">Text Settings</a>
                        </h4>
                    </div>

                    <div id="collapseBodySetTextContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="row">
                                <div class="col-xs-3" style="margin-top:10px;">Color</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="bodySettingsTextColorPickerBox" class="form-control bodySettingsTextColor" placeholder="Text Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary" id="bodySettingsTextColorBtn">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                         <div class="row" style="margin-top:30px;">
                              <div class="col-xs-6">Font size</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsFontSize"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Font family</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsFontFamily"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Font style</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsFontStyle"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Font weight</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsFontWeight"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Line height</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsLineHeight"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Text align</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsTextAlign"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Text decoration</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsTextDecoration"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Text transform</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsTextTransform"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">White space</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsWhiteSpace"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Vertical align</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsVerticalAlign"></input></div>
                         </div>

                       </div> 

                     </div>

                 </div>

            </div>
         

        
         <div class="panel-group" id="accordionBodySetBack" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionBodySetBack" href="#collapseBodySetBackContent">Background Settings</a>
                        </h4>
                    </div>

                    <div id="collapseBodySetBackContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="row">
                                <div class="col-xs-3" style="margin-top:10px;">Color</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary bodySettingSelectBackgroundColor">Color</button>
                                           
                                        </div>
                                        <input type="TextBox" id="bodySettingsBackgroundColorPickerBox" class="form-control bodySettingsBackgroundColor" placeholder="Background Color" ></input>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                              
                                <div class="col-xs-3" style="margin-top:30px;">URL</div>
                                <div class="col-xs-offset-1 col-xs-8" > 

                                    <div class="input-group" style="margin-top:20px;">
                                          <span class="input-group-btn">
                                              <span class="btn btn-primary btn-file" id="bodySettingsBackgroundImageSpanBtn">
                                              Browse <input type="file" id="modalImageURFile">
                                              </span>
                                          </span>
                                          <input type="text" class="form-control" id="bodySettingsBackgroundImageURLFileBox" readonly="">
                                      </div>

                                </div>
                         
                          
                            </div>

                          

                         <div class="row" style="margin-top:30px;">
                              <div class="col-xs-6">Position</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsBackgroundPosition"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Size</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsBackgroundSize"></input></div>
                         </div>




                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Clip</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsBackgroundClip"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Repeat</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsBackgroundRepeat"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Origin</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control bodySettingsBackgroundOrigin"></input></div>
                         </div>

                        

                       </div> 

                     </div>

                 </div>

            </div>
         

         
         <div class="panel-group" id="accordionBodySetColor" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionBodySetColor" href="#collapseBodySetColorContent">Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapseBodySetColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="bodySettingsColorPickerContainer" style="margin-left:10%;">

                                <input type='text' id="bodySettingsColorPicker" style="display:none;"/>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>


        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left bodySettingsEditApply" data-dismiss="modal" >OK</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="saveInfoModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">SAVE TEMPLATE
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 
              <div class="saveInfoModalDescription text-center" style="margin-top:15px;"></div>

              <div class="form-group">
                  <label data-type="label">Template Name</label>
                  <input type="text" class="form-control" id="templateName">
                </div>

              <div class="saveInfoModalPrompt text-center" style="margin-top:40px;margin-bottom:30px;"></div>
              

        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left saveInfoModalProcceed" data-dismiss="modal">Procceed</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="userDefCssEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">CSS Custom Styles
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 
              <div class="userDefCssEditDescription" class="blueTitle">Define Custom CSS Styles</div>

              <div class="form-group" style="margin-top:30px;">
               
                <textarea class="form-control" rows="10" id="userDefCssEditInput"></textarea>
              </div>

              <div class="userDefStylesExisting"></div>
              

        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left userDefCssEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="uploadFontsEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Upload Fonts
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 

              <div class="uploadFontsDescription">Enter Font Family name</div>


              <div class="col-xs-12" style="margin-top:15px;margin-bottom:15px;"> 

                    <div class="input-group" style="margin-left:0px;">
                      <span class="input-group-btn">
                          <span class="btn btn-primary btn-file" >
                              Font Family 
                          </span>
                      </span>
                      <input type="text" class="form-control" id="modalFontFamilyBox">
                  </div>

              </div>

              <br/>
              <div class="uploadFontsDescription" >Dran and Drop Font to upload to the Server</div>

              <div id="uploadFontsContainer"></div>
              

              <div id="fontsUploadAlertsContainer"></div>


        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left uploadFontsEditApply" data-dismiss="modal" >OK</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="uploadVideosEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Upload Video
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 
              <span class="uploadVideosDescription">Dran and Drop Video to upload to the Server</span>

              <div id="uploadVideosContainer"></div>
              

              <div id="videoUploadAlertsContainer"></div>

        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left uploadVideosEditApply" data-dismiss="modal" >OK</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="uploadImagesEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Upload Image
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 
              <span class="uploadImagesDescription">Dran and Drop Image to upload to the Server</span>

              <div id="uploadImagesContainer"></div>
              

              <div id="imageUploadAlertsContainer"></div>

        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left uploadImagesEditApply" data-dismiss="modal" >OK</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="downloadEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Download Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
        </div>

        <div class="modal-body"> 

          <div class="row" style="margin-top:4px;font-size:16px;">
              <div class="col-xs-12">
                  <div class="form-group">
                      <label for="websiteTitle">Webpage Title</label>
                      <input type="text" class="form-control" id="websiteTitle" placeholder="Title" style="">
                    </div>
              </div>
          </div>

          <div class="row" style="margin-top:15px;font-size:16px;">
              <div class="col-xs-12">
                  <div class="form-group">
                      <label for="websiteTitle">Webpage Author</label>
                      <input type="text" class="form-control" id="websiteAuthor" placeholder="Author" style="">
                    </div>
              </div>
          </div>

          <div class="row" style="margin-top:15px;font-size:16px;">
              <div class="col-xs-12">
                  <div class="form-group">
                      <label for="websiteTitle">Webpage Description</label>
                      <input type="text" class="form-control" id="websiteDescription" placeholder="Description" style="">
                    </div>
              </div>
          </div>

          <div class="row" style="margin-top:15px;font-size:16px;">
              <div class="col-xs-12">
                  <div class="form-group">
                      <label for="websiteTitle">Webpage Keywords</label>
                      
                      <textarea class="form-control" rows="5" id="websiteKeywords"></textarea>
                    </div>
              </div>
          </div>

        </div> 

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left downloadEditApply" data-dismiss="modal" >Download</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Cancel</button>
        </div>

    </div>

  </div>
</div>




  <div class="modal fade" id="imageEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Image Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="imagesModalContainer">

            <div class="row">
              <div class="col-xs-6">
                <span style=""><b>Select Image Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="modalImageClassesBox" class="form-control" placeholder="Select Image Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Image Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalImageClasses" class="dropdown-menu">
                            <li><a href="#">img-rounded</a></li>
                            <li><a href="#">img-circle</a></li>
                            <li><a href="#">img-thumbnail</a></li>
                        </ul>
                    </div>
               </div>
              </div>

              <div class="col-xs-6">
                <span style=""><b>Select Image Helper Classes<b></span><br/>
                <div class="input-group" style="margin-top:5px;">                                            
                    <input type="TextBox" id="modalImageHelpersBox" class="form-control" placeholder="Select Image Helpers" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalImageHelpers" class="dropdown-menu">
                            <li><a href="#">center-block</a></li>
                            <li><a href="#">img-responsive</a></li>
                            
                        </ul>
                    </div>
               </div>
              </div>
              </div>
            

            <div class="row" style="margin-top:30px;">
              <div class="col-xs-6">
                  <div class="input-group">
                      <label for="modalImageWidth">Image Width</label>
                      <input type="text" class="form-control" id="modalImageWidth" placeholder="Width">
                    </div>
              </div>
              <div class="col-xs-6">
                  <div class="input-group">
                      <label for="modalImageHeight">Image Height</label>
                      <input type="text" class="form-control" id="modalImageHeight" placeholder="Height">
                    </div>
              </div>
            </div>


            <div class="row" style="margin-top:30px; margin-left:10px">
                   <span style="">SELECT IMAGE FILE</span>
            </div>

          

          
          <div class="row" style="margin-left:5px;margin-bottom:30px;">

            <br/>
              
            <div class="col-xs-10"> 

              <div class="input-group">
                <span class="input-group-btn">
                    <span class="btn btn-primary btn-file" id="imageSpanBtn">
                        Browse Local Files<input type="file" id="imageInputFile">
                    </span>
                </span>
                <input type="text" class="form-control" id="modalImageFileBox">
            </div>

          </div>

          </div> 

     </div>

     <div class="panel-group" id="accordionImagesfileTreeGroup">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionImagesfileTreeGroup" href="#collapseImagesfileTreeList">Browse Server Files</a>
                        </h4>
                    </div>

                    <div id="collapseImagesfileTreeList" class="panel-collapse collapse">
                        <div class="panel-body">


                            <div id="fileTreeImages" class="demo"></div>

                         </div> 
                    </div> 
                </div>
    </div>  


   </div>

   
   


    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left imageEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="horizontalLabelEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Label Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          <div class="row" style="margin-left:25px;margin-bottom:10px;margin-top:15px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Label Text content</div>                       
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horizontalLabelTextBtn">
                                  Label 
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horizontalLabelTextContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horizontalLabelEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="horizontalInputEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Input Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Input Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="horizontalInputTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="horizontalInputTextContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="horizontalInputEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="verticalInputEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Vertical Input Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          <div class="row" style="margin-left:25px;margin-bottom:10px;margin-top:15px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Label Text content</div>                       
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="verticalInputLabelTextBtn">
                                  Label 
                            </span>
                      </span>
                      <input type="text" class="form-control" id="verticalInputLabelTextContentBox" >
                  </div>

             </div>
         </div>

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Input Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="verticalInputTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="verticalInputTextContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="verticalInputEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="verticalTextareaEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Vertical Textarea Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          <div class="row" style="margin-left:25px;margin-bottom:10px;margin-top:15px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Label Text content</div>                       
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="verticalTextareaLabelTextBtn">
                                  Label 
                            </span>
                      </span>
                      <input type="text" class="form-control" id="verticalTextareaLabelTextContentBox" >
                  </div>

             </div>
         </div>

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Input Placeholder content</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="verticalTextareaTextBtn">
                                  Input Placeholder
                            </span>
                      </span>
                      <input type="text" class="form-control" id="verticalTextareaTextContentBox" >
                  </div>

             </div>
         </div>

         <div class="row" style="margin-left:25px;margin-bottom:25px;margin-top:35px;">
            
            <div class="row" style="margin-left:5px;margin-bottom:10px;">Textarea Number of Rows</div>                 
            <div class="col-xs-11" style="margin-left:-15px;"> 
                  <div class="input-group">
                      <span class="input-group-btn">
                            <span class="btn btn-primary" id="verticalTextareaRowsNumBtn">
                                  Rows Number
                            </span>
                      </span>
                      <input type="text" class="form-control" id="verticalTextareaRowsNumContentBox" >
                  </div>

             </div>
         </div>

         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="verticalTextareaEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="verticalSelectEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Vertical Select Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

          <div class="verticalSelectElementsContainer">

          </div>


         <div class="row" style= "margin-top:20px;">
                          
              <div class="col-xs-8" >
                    <div class="input-group">
                          <label for="verticalSelectChangeNumElements">Change Number of Options</label>
                          <input type="text" class="form-control" id="verticalSelectChangeNumElementsInput" placeholder="Number">
                     </div>
              </div>

              <div class="col-xs-3 col-xs-offset-1" style="margin-top:27px">
                  <button type="button" class="btn btn-warning" id="verticalSelectChangeNumElementsButton">CHANGE</button>
              </div>

         </div>


         </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="verticalSelectEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="gmapsEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Google Maps Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="row" style= "margin-left:10px;margin-top:-20px;">
                Select Center Address
          </div>

          <div class="row" style= "margin-top:10px;">
              <div class="col-xs-10">

                <div class="input-group">
                     <span class="input-group-btn">
                           <span class="btn btn-primary">
                               Center Address
                           </span>
                      </span>
                      <input type="text" class="form-control" id="gmapsCenterAddressContentBox" >
                </div>

              </div>
            </div>

            <div class="row" style= "margin-left:10px;margin-top:15px;">
                Zoom Level, Map Id
            </div>

            <div class="row" style="margin-top:10px;margin-bottom:20px;">

                <div class="col-xs-6">
                  <div class="input-group">
                     <span class="input-group-btn">
                           <span class="btn btn-primary">
                               Zoom Level
                           </span>
                      </span>
                      <input type="text" class="form-control" id="gmapsZoomLevelBox" >
                </div>

              </div>
              <div class="col-xs-6">
                  <div class="input-group">
                     <span class="input-group-btn">
                           <span class="btn btn-primary">
                               ID Name
                           </span>
                      </span>
                      <input type="text" class="form-control" id="gmapsIdNameBox" >
                </div>

              </div>

            </div>

          </div>

          <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="gmapsEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
         </div>

     </div>
   </div>
 </div>




<div class="modal fade" id="gmapsChangeEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Google Maps Change Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="row" style= "margin-left:10px;margin-top:-20px;">
                Select New Center Address
          </div>

          <div class="row" style= "margin-top:10px;">
              <div class="col-xs-10">

                <div class="input-group">
                     <span class="input-group-btn">
                           <span class="btn btn-primary">
                               Center Address
                           </span>
                      </span>
                      <input type="text" class="form-control" id="gmapsChangeEditCenterAddressContentBox" >
                </div>

              </div>
            </div>

            <div class="row" style= "margin-left:10px;margin-top:15px;">
                Zoom Level
            </div>

            <div class="row" style="margin-top:10px;">

                <div class="col-xs-6">
                  <div class="input-group">
                     <span class="input-group-btn">
                           <span class="btn btn-primary">
                               Zoom Level
                           </span>
                      </span>
                      <input type="text" class="form-control" id="gmapsChangeEditZoomLevelBox" >
                </div>

              </div>
              

            </div>


          </div>

          <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="gmapsChangeEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
         </div>

     </div>
   </div>
 </div>





<div class="modal fade" id="navbarEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Navigation Bar Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div id="navbarCollapseEditContainer">

                  <div class="col-xs-12" style="padding-bottom:20px;margin-left:-10px;"> 
                        <div style="margin-top:-10px;padding-bottom:10px;">Select ID for Navbar Collapse</div>
                          <div class="input-group">
                                <span class="input-group-btn">
                                    <span class="btn btn-primary">
                                          Navbar Collapse ID
                                    </span>
                               </span>
                               <input type="text" class="form-control" id="navbarCollapseIDBox">
                          </div>

                  </div>

              </div>


        
            <div class="row">
              <div class="col-xs-6">
                <span style=""><b>Select Navbar Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="navbarClassesBox" class="form-control" placeholder="Select Navbar Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Navbar Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="navbarClasses" class="dropdown-menu">
                            <li><a href="#">Default</a></li>
                            <li><a href="#">Inversed</a></li>
                            
                        </ul>
                    </div>
               </div>
              </div>

              <div class="col-xs-6">
                <span style=""><b>Select Navbar Helper Classes<b></span><br/>
                <div class="input-group" style="margin-top:5px;">                                            
                    <input type="TextBox" id="navbarHelpersBox" class="form-control" placeholder="Select Navbar Helpers" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="navbarHelpers" class="dropdown-menu">
                            <li><a href="#">Fixed-top</a></li>
                             
                        </ul>
                    </div>
               </div>
              </div>
              </div>



              <div class="panel-group" id="navbarBrandContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#navbarBrandContent" href="#collapseNavbarBrandContent">Navbar Brand Content</a>
                        </h4>
                    </div>

                    <div id="collapseNavbarBrandContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="navbarBrandTextContainer">
                          <div class="row" style="margin-left:5px;margin-bottom:10px;">

                                  <br/>
                                    
                                  <div class="col-xs-7" style="margin-left:-15px;"> 

                                    <div class="input-group">
                                      <span class="input-group-btn">
                                          <span class="btn btn-primary btn-file" id="navbarBrandTextBtn">
                                              Content Text 
                                          </span>
                                      </span>
                                      <input type="text" class="form-control" id="navbarBrandTextContentBox" >
                                  </div>

                                </div>

                                 <div class="col-xs-5"> 

                                    <div class="input-group">
                                      <span class="input-group-btn">
                                          <span class="btn btn-primary btn-file" id="navbarBrandHrefBtn">
                                              HREF 
                                          </span>
                                      </span>
                                      <input type="text" class="form-control" id="navbarBrandHrefBox" >
                                  </div>

                                </div>

                          </div> 

                         </div>


                        <form role="form" class="navbarBrandIconContainerForm">
                        <div class="row" style= "margin-top:20px;">
                          
                          <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="beforeText">Insert Icon before Text</label>
                              </div>
                            </div>

                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="afterText">Insert Icon after Text</label>
                              </div>
                            </div>

                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="noIcon">No Icon</label>
                              </div>
                            </div>

                        </div>
                      </form>

                      <form role="form" class="navbarBrandIconSizeContainerForm">
                        <div class="row" style= "margin-top:20px;">
                          
                          
                                  <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="normal" checked="checked"><span>Normal Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lg"><span>33% increase</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="2x"><span>2x Size</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="3x"><span>3x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="4x"><span>4x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="5x"><span>5x Size</span></label> 
                                    </div>
                                </div>

                          </div>

                           <div class="row" style="margin-top:15px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Size 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarBrandFontSizeBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Family 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarBrandFontFamilyBox">
                                                </div>

                                              </div>

                                      </div>

                                      <div class="row" style="margin-top:10px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Style 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarBrandFontStyleBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Weight 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarBrandFontWeightBox">
                                                </div>

                                              </div>

                                      </div>

                                     
                                      <div class="row text-center" style="margin-top:15px;margin-left:5px;"> Change Brand Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioBrandColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioBrandColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          
                                      </div>
                                  

                      </form>

                      <div class="navbarBrandChangesApply text-center" style="margin-top:20px;">
                        <button class="btn btn-danger" id="navbarBrandChangesApplyButton">Apply</button> 

                      </div>



                      </div>

                    </div>

                </div>

         </div>




        <div class="panel-group" id="leftNavbarContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#leftNavbarContent" href="#collapseLeftNavbarContent">Left Navbar Content</a>
                        </h4>
                    </div>

                    <div id="collapseLeftNavbarContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="leftNavbarNumElementsContainer">
                              <div class="row" style= "margin-top:10px;margin-bottom:10px;">
                          
                                  <div class="col-xs-9">
                                    
                                    <div class="input-group">
                                      <span class="input-group-btn">
                                          <span class="btn btn-primary btn-file" >
                                              Change Number of Elements
                                          </span>
                                      </span>
                                      <input type="text" class="form-control" id="leftNavbarChangeNumElementsNumberBox" >
                                    </div>

                                  </div>
                                  <div class="col-xs-2">
                                    <button type="button" class="btn btn-warning" id="leftNavbarChangeNumElementsInput">Change</button> 
                                  </div>

                                </div>

                         </div>


                        <div id="leftNavbarNumElementsLinksOptionsContainer">

                        </div>


                        <div id="leftNavbarElementsOptionsContainer">

                        </div>


                      </div>

                    </div>

                </div>

         </div>

         
         
         <div class="panel-group" id="rightNavbarContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#rightNavbarContent" href="#collapseRightNavbarContent">Right Navbar Content</a>
                        </h4>
                    </div>

                    <div id="collapseRightNavbarContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="rightNavbarNumElementsContainer">
                              <div class="row" style= "margin-top:10px;margin-bottom:10px;">
                          
                                  <div class="col-xs-9">
                                    
                                    <div class="input-group">
                                      <span class="input-group-btn">
                                          <span class="btn btn-primary btn-file" >
                                              Change Number of Elements
                                          </span>
                                      </span>
                                      <input type="text" class="form-control" id="rightNavbarChangeNumElementsNumberBox" >
                                    </div>

                                  </div>
                                  <div class="col-xs-2">
                                    <button type="button" class="btn btn-warning" id="rightNavbarChangeNumElementsInput">Change</button> 
                                  </div>

                                </div>

                         </div>


                        <div id="rightNavbarNumElementsLinksOptionsContainer">

                        </div>


                     </div>

                    </div>

                </div>

         </div>

         


        <div class="panel-group" id="accordionNavbarLinksDropdownLinks" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionNavbarLinksDropdownLinks" href="#collapseNavbarLinksDropdownLinksContent">Links , DropDown Links Settings</a>
                        </h4>
                    </div>

                    <div id="collapseNavbarLinksDropdownLinksContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                          <form role="form" id="navbarLinksTextForm">
                                        <div class="row" style="margin-left:5px;"> Links Options</div>

                                        <div class="row" style="margin-top:15px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Size 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksFontSizeBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Family 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksFontFamilyBox">
                                                </div>

                                              </div>

                                      </div>

                                      <div class="row" style="margin-top:10px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Style 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksFontStyleBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Weight 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksFontWeightBox">
                                                </div>

                                              </div>

                                      </div>

                                </form>

                        
                        <form role="form" id="navbarLinksColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarLinksColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        <form role="form" id="navbarLinksBackgroundColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Background Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarLinksBackgroundColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        <form role="form" id="navbarLinksHoverColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Hover Color</div>

                                      <div class="row" style="margin-top:5px;"> 

                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Class Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksClassNameBox">
                                                </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            ID Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarLinksIdNameBox">
                                                </div>
                                        </div>
                                      </div>
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioHoverColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioHoverColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarLinksHoverColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>
                        <hr>
                        <hr>

                        
                        <form role="form" id="navbarDropDownLinksTextForm">
                                        <div class="row" style="margin-left:5px;"> Dropdown Links Options</div>

                                        <div class="row" style="margin-top:15px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Size 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksFontSizeBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Family 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksFontFamilyBox">
                                                </div>

                                              </div>

                                      </div>

                                      <div class="row" style="margin-top:10px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Style 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksFontStyleBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Weight 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksFontWeightBox">
                                                </div>

                                              </div>

                                      </div>

                                </form>

                        
                        <form role="form" id="navbarDropDownLinksColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioDropColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioDropColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarDropDownLinksColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        <form role="form" id="navbarDropDownLinksBackgroundForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Background Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioDropBackColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioDropBackColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarDropDownLinksBackgroundColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>


                        <form role="form" id="navbarDropDownLinksHoverColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Hover Color</div>

                                      <div class="row" style="margin-top:5px;"> 

                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Class Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksClassNameBox">
                                                </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            ID Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="navbarDropDownLinksIdNameBox">
                                                </div>
                                        </div>
                                      </div>
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradioDropHoverColor" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradioDropHoverColor" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="navbarDropDownLinksHoverColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        </div>

                     </div>

                 </div>

            </div>




         <div class="panel-group" id="accordionNavbarColor" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionNavbarColor" href="#collapseNavbarColorContent">Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapseNavbarColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="navbarColorPickerContainer" style="margin-left:10%;">

                                <input type='text' id="navbarColorPicker" style="display:none;"/>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>
         


         <div class="panel-group" id="navbarIconsContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#navbarIconsContent" href="#collapseNavbarIconsContent">Icons</a>
                        </h4>
                    </div>

                    <div id="collapseNavbarIconsContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <form role="form" class="navbarIconsContainerForm">
                        <div class="optionsIconsContainer" style="font-size:14px;">

                        
                         </div> 

                        </form>



                      </div>

                    </div>

                </div>

         </div>


      </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="navbarEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="resEmbedVideoEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Responsive Embed Video Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

            <div class="row">
              <div class="col-xs-10">
                <span style=""><b>Select Responsive Embed Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="responsiveEmbedVideoClassesBox" class="form-control" placeholder="Select Responsive Embed Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Responsive Embed Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="responsiveEmbedVideoClasses" class="dropdown-menu">
                            <li><a href="#">embed-responsive-16by9</a></li>
                            <li><a href="#">embed-responsive-4by3</a></li>
                            
                        </ul>
                    </div>
               </div>
              </div>
            </div>

              
            <div class="row" style="margin-top:30px; margin-left:10px">
                   <span style="">SELECT VIDEO FILE</span>
            </div>

          
          <div class="row" style="margin-left:5px;margin-bottom:30px;">

            <br/>
              
            <div class="col-xs-10"> 

              <div class="input-group">
                <span class="input-group-btn">
                    <span class="btn btn-primary btn-file" id="responsiveEmbedVideoFileBtn">
                        Browse LocalFiles<input type="file" id="responsiveEmbedVideoInputFile">
                    </span>
                </span>
                <input type="text" class="form-control" id="responsiveEmbedVideoFileBox" readonly>
            </div>

          </div>

          </div> 

          <div class="panel-group" id="accordionVideosFileTreeGroup">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionVideosFileTreeGroup" href="#collapseVideosFileTreeList">Browse Server Files</a>
                        </h4>
                    </div>

                    <div id="collapseVideosFileTreeList" class="panel-collapse collapse">
                        <div class="panel-body">


                            <div id="fileTreeVideos" class=""></div>

                         </div> 
                    </div> 
                </div>
        </div>  

   </div>

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left responsiveEmbedVideoEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="resEmbediFrameEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Responsive Embed iFrame Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

            <div class="row">
              <div class="col-xs-10">
                <span style=""><b>Select Responsive Embed Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="resEmbediFrameClassesBox" class="form-control" placeholder="Select Responsive Embed Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Responsive Embed Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="resEmbediFrameClasses" class="dropdown-menu">
                            <li><a href="#">embed-responsive-16by9</a></li>
                            <li><a href="#">embed-responsive-4by3</a></li>
                            
                        </ul>
                    </div>
               </div>
              </div>
            </div>

              
            <div class="row" style="margin-top:30px; margin-left:10px">
                   <span style="">SELECT iFrame Source</span>
            </div>

          
          <div class="row" style="margin-left:5px;margin-bottom:30px;">

            <br/>
              
            <div class="col-xs-10"> 

              <div class="input-group">
                <span class="input-group-btn">
                    <span class="btn btn-primary btn-file" id="resEmbediFrameSourceBtn">
                        Enter Source 
                    </span>
                </span>
                <input type="text" class="form-control" id="resEmbediFrameSourceBox">
            </div>

          </div>

          </div> 

   </div>

    
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left resEmbediFrameEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>





<div class="modal fade" id="modalCarouselEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Carousel Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

           <span style=""><b>Select Carousel Type<b></span><br/>

           <div class="carouselStyleTypeContainer" style="font-size:14px;">

                      
                              <div class="row">
                                <div class="col-xs-6" style="margin-left:20px;">
                                  <form role="form" class="carouselStyleTypeArrowsForm" style="font-size:12px;">
                                    <div class="checkbox">
                                        <label><input type="checkbox" name="optcheckbox" id="arrowsShow" value="true">Show Left-Right Arrows</label>
                                      </div>
                                    </form>
                                </div>

                                  <div class="col-xs-5">
                                    <form role="form" class="carouselStyleTypeIndicatorsForm" style="font-size:12px;">
                                    <div class="checkbox">
                                        <label><input type="checkbox" name="optcheckbox" id="indicatorsShow" value="true">Show Indicators</label>
                                      </div>
                                    </form>
                                  </div>
                                </div>

            </div>

            <div class="row" style="margin-top:30px; margin-left:0px;">
                   <span style="">SELECT NUMBER OF CAROUSEL ITEMS</span>
            </div>
            
            <div class="row" style= "margin-top:10px;margin-bottom:20px;margin-left: -20px;">
                <div class="col-xs-10">
                    
                    <div class="input-group">
                        
                        <span class="input-group-btn">
                           <span class="btn btn-primary">
                              Carousel Items  
                          </span>
                       </span>
                      <input type="text" class="form-control" id="carouselChangeNumElements">
                    </div>
                </div>

           </div>

            <div style=""><b>For Setings to apply to individual Carousels you must supply each with an ID<b></div>

            <div class="row" style= "margin-top:10px;margin-bottom:20px;margin-left: -20px;">
                
                <div class="col-xs-12">
                    
                    <div class="input-group">
                        
                        <span class="input-group-btn">
                           <span class="btn btn-primary">
                             ID
                          </span>
                       </span>
                      <input type="text" class="form-control" id="carouselIDNameBox">
                    </div>
                </div>

           </div>



           
           <div class="panel-group" id="carouselIndicatorsContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" href="#collapsecarouselIndicators">Carousel Indicators Settings</a>
                        </h4>
                    </div>

                    <div id="collapsecarouselIndicators" class="panel-collapse collapse ">
                      <div class="panel-body">

                          
                          <form role="form" id="carouselIndicatorsForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Indicators Background</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="carouselIndicatorsColorChange">Select</button>
                                        </div>
                                      </div>
                        </form>

                        <div class="row" style="margin-top:30px;margin-left:5px;margin-bottom:20px;">
                            <span style="">Indicators Background Color </span>
                            
                              
                            <div class="col-xs-12" style="margin-top:5px;"> 

                              <div class="input-group" style="margin-left:-20px;">
                                <span class="input-group-btn">
                                    <span class="btn btn-primary btn-file" >
                                        Background Color
                                    </span>
                                </span>
                                <input type="text" class="form-control" id="modalCarouselIndicatorsBackColorBox">
                            </div>

                          </div>

                          </div>

                          
                          <form role="form" id="carouselIndicatorsActiveForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Indicators Active Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="carouselIndicatorsActiveColorChange">Select</button>
                                        </div>
                                      </div>
                        </form>

                          <div class="row" style="margin-top:30px;margin-left:5px;margin-bottom:20px;">
                            <span style="">Indicators Active Color </span>
                            
                              
                            <div class="col-xs-12" style="margin-top:5px;"> 

                              <div class="input-group" style="margin-left:-20px;">
                                <span class="input-group-btn">
                                    <span class="btn btn-primary btn-file" >
                                        Background Color
                                    </span>
                                </span>
                                <input type="text" class="form-control" id="modalCarouselIndicatorsActiveColorBox">
                            </div>

                          </div>

                          </div> 

                          <div class="text-center">
                                <button class="btn btn-warning" id="carouselIndicatorsColorChangeApply">Apply</button>
                          </div>



                      </div>

                    </div>

                  </div>
          </div>
          

          
           <div class="panel-group" id="carouselArrowsContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" href="#collapsecarouselArrowsContent">Carousel Arrows Settings</a>
                        </h4>
                    </div>

                    <div id="collapsecarouselArrowsContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <form role="form" id="carouselArrowsForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Carousel Arrows Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="carouselArrowsColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                          <div class="row" style="margin-top:30px;margin-left:5px;margin-bottom:20px;">
                            
                              
                            <div class="col-xs-6" style="margin-top:5px;"> 

                              <div class="input-group" style="margin-left:-20px;">
                                <span class="input-group-btn">
                                    <span class="btn btn-primary btn-file" >
                                        Color
                                    </span>
                                </span>
                                <input type="text" class="form-control" id="modalCarouselArrowsColorBox">
                            </div>

                          </div>

                          <div class="col-xs-6" style="margin-top:5px;"> 

                              <div class="input-group" >
                                <span class="input-group-btn">
                                    <span class="btn btn-primary btn-file" >
                                        Opacity
                                    </span>
                                </span>
                                <input type="text" class="form-control" id="modalCarouselArrowsOpacityBox">
                            </div>

                          </div>

                          </div> 


                      </div>

                    </div>

                  </div>
          </div>

            

          
         <div class="panel-group" id="carouselModalEditColor" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#carouselModalEditColor" href="#collapsecarouselModalEditColorContent">Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapsecarouselModalEditColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="carouselColorPickerContainer" style="margin-left:10%;">

                                <input type='text' id="carouselColorPicker" style="display:none;"/>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>
         
          

          </div>

          <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="carouselEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

      </div>
  </div>

</div>




<div class="modal fade" id="unorderedListEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Unordered List Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

           <span style=""><b>Select List Style Type<b></span><br/>

           <div class="unorderedListStyleTypeContainer" style="font-size:12px;">

                         

                          <form role="form" class="unorderedListStyleTypeForm" style="font-size:12px;">
                              <div class="row">
                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="none" checked="checked"><span>None</span></label> 
                                    </div>
                                </div>

                                  <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="circle"><span>circle</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="square"><span>square</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-2">
                                    <div class="radio" style="margin-left:-50px;">
                                          <label><input type="radio" name="optradio" value="disc"><span>disc</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row" style="margin-top:30px; margin-left:0px; font-size:14px;">
                                  <span style="">SELECT IMAGE FILE</span>
                              </div>

                              <div class="row" style="margin-left:-20px;margin-bottom:10px;">
                                      <br/>
                                          
                                        <div class="col-xs-10"> 

                                          <div class="input-group">
                                            <span class="input-group-btn">
                                                <span class="btn btn-primary btn-file" id="imageSpanBtn">
                                                    Browse <input type="file" id="imageListStyleInputFile">
                                                </span>
                                            </span>
                                            <input type="text" class="form-control" id="imageListStyleFileBox" readonly>
                                        </div>

                                      </div>

                                      </div> 

                              
                          </form>
                   </div>

            <div class="row" style="margin-top:30px; margin-left:0px;">
                   <span style="">SELECT NUMBER OF LIST ITEMS</span>
            </div>
            
            <div class="row" style= "margin-top:10px;margin-bottom:20px;margin-left: -20px;">
                <div class="col-xs-10">
                    
                    <div class="input-group">
                        
                        <span class="input-group-btn">
                           <span class="btn btn-primary">
                              List Items Number 
                          </span>
                       </span>
                      <input type="text" class="form-control" id="unorderedListChangeNumElements">
                    </div>
                </div>

           </div>


          </div>

          <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="unorderedListEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

      </div>
  </div>

</div>




<div class="modal fade" id="orderedListEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Ordered List Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> 

           <span style=""><b>Select List Style Type<b></span><br/>

           <div class="orderedListStyleTypeContainer" style="font-size:12px;">

                          <form role="form" class="orderedListStyleTypeForm" style="font-size:12px;">
                              <div class="row">
                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="none" checked="checked"><span>None</span></label> 
                                    </div>
                                </div>

                                  <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="decimal"><span>decimal</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="decimal-leading-zero"><span>decimal-leading-zero</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-2">
                                    <div class="radio" style="margin-left:-50px;">
                                          <label><input type="radio" name="optradio" value="initial"><span>initial</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lower-alpha"><span>lower-alpha</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="upper-alpha"><span>upper-alpha</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lower-latin"><span>lower-latin</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="upper-latin"><span>upper-latin</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lower-roman"><span>lower-roman</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-3">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="upper-roman"><span>upper-roman</span></label> 
                                    </div>
                                </div>
                                <div class="col-xs-3">
                                    
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lower-greek"><span>lower-greek</span></label> 
                                    </div>
                                </div>
                            </div>
                          </form>
                   </div>
            
            <div class="row" style= "margin-top:30px;margin-bottom:20px;">
                <div class="col-xs-8">
                    
                    <div class="input-group">
                        
                        <span class="input-group-btn">
                           <span class="btn btn-primary">
                              List Items Number 
                          </span>
                       </span>
                      <input type="text" class="form-control" id="orderedListChangeNumElements">
                    </div>
                </div>

           </div>


          </div>

          <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="orderedListEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

      </div>
  </div>

</div>




<div class="modal fade" id="buttongroupEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Button Group Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

           
            <div class="row">
              <div class="col-xs-6">
                <span style=""><b>Select buttongroup Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="modalButtongroupClassesBox" class="form-control" placeholder="Select Button Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Button Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalButtongroupClasses" class="dropdown-menu">
                            <li><a href="#">btn-default</a></li>
                            <li><a href="#">btn-primary</a></li>
                            <li><a href="#">btn-success</a></li>
                            <li><a href="#">btn-info</a></li>
                            <li><a href="#">btn-warning</a></li>
                            <li><a href="#">btn-danger</a></li>
                            <li><a href="#">btn-link</a></li>
                        </ul>
                    </div>
               </div>
              </div>

              <div class="col-xs-6">
                <span style=""><b>Select buttongroup Helper Classes<b></span><br/>
                <div class="input-group" style="margin-top:5px;">                                            
                    <input type="TextBox" id="modalButtongroupHelpersBox" class="form-control" placeholder="Select Button Helpers" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalButtongroupHelpers" class="dropdown-menu">
                            <li><a href="#">btn-lg</a></li>
                            <li><a href="#">btn-md</a></li>
                            <li><a href="#">btn-sm</a></li>
                            <li><a href="#">btn-xs</a></li>
                            <li><a href="#">vertical</a></li>
                            
                            
                        </ul>
                    </div>
               </div>
              </div>
              </div>

          
        <div class="panel-group" id="accordionButtongroupContent" style="margin-top:20px;">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionButtongroupContent" href="#collapseButtongroupContent">Button Group Content</a>
                        </h4>
                    </div>

                    <div id="collapseButtongroupContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="buttongroupElementsContainer">

                         </div>


                        <div class="row" style= "margin-top:20px;">
                          
                          <div class="col-xs-12" style= "margin-top:30px;">
                            <div class="input-group">
                                <label for="modalButtongroupChangeNumElements">Change Number of Elements</label>
                                <input type="text" class="form-control" id="modalButtongroupChangeNumElements" placeholder="Number">
                            </div>
                          </div>

                        </div>



                      </div>

                    </div>

                </div>

         </div>


         
         <div class="panel-group" id="buttonButtongroupColorAccordion" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#buttonButtongroupColorAccordion" href="#collapseButtongroupButtonsColorContent">Buttons Settings</a>
                        </h4>
                    </div>

                    <div id="collapseButtongroupButtonsColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="buttongroupButtonsColorPickerContainer" style="margin-left:10%;">

                                
                                <form role="form" class="buttongroupButtonsTextForm">
                                        <div class="row"> Button Text Options</div>

                                        <div class="row" style="margin-top:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Size 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="buttongroupButtonsFontSizeBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Family 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="buttongroupButtonsFontFamilyBox">
                                                </div>

                                              </div>

                                      </div>

                                      <div class="row" style="margin-top:10px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Style 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="buttongroupButtonsFontStyleBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Weight 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="buttongroupButtonsFontWeightBox">
                                                </div>

                                              </div>

                                      </div>

                                </form>

                                <form role="form" id="buttongroupButtonsTextColorForm">
                                  <div class="row" style="margin-top:15px;"> Change Text Color</div>
                                  
                                  <div class="row" style="margin-top:5px;">   
                                      <div class="col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                            </div>
                                      </div>
                                      <div class="col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                      </div>
                                      <div class="col-xs-6">
                                        <button class="btn btn-info" id="buttongroupButtonsTextChange">Change</button>
                                    </div>
                                  </div>
                                  </form>

                                <hr>

                                <form role="form" id="buttongroupButtonsBorderForm">
                                      <div class="row" style="margin-top:15px;"> Change Border Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-6">
                                            <button class="btn btn-info" id="buttongroupButtonsBorderColorChange">Change</button>
                                        </div>
                                      </div>
                                </form>

                                <hr>

                                <form role="form" id="buttongroupButtonsBackgroundForm">
                                  <div class="row" style="margin-top:15px;"> Change Background Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-6">
                                            <button class="btn btn-info" id="buttongroupButtonsBackgroundColorChange">Change</button>
                                        </div>
                                    </div>
                                
                                </form>

                                    <hr>

                                <div class="row" Style="margin-top:20px;">
                                    <div class="col-xs-6">
                                      <span style=""><b>Select Buttons Classes<b></span><br/>
                                       <div class="input-group" style="margin-top:5px;">                                          
                                          <input type="TextBox" id="buttonGroupButtonsClassesBox" class="form-control" placeholder="Select Button Classes" style="background-color:#b6b6b6 !important;"></input>
                                          <div class="input-group-btn">
                                              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Button Classes
                                              <span class="caret"></span>
                                              </button>
                                              <ul id="buttonGroupButtonsClasses" class="dropdown-menu">
                                                  <li><a href="#">btn-default</a></li>
                                                  <li><a href="#">btn-primary</a></li>
                                                  <li><a href="#">btn-success</a></li>
                                                  <li><a href="#">btn-info</a></li>
                                                  <li><a href="#">btn-warning</a></li>
                                                  <li><a href="#">btn-danger</a></li>
                                                  <li><a href="#">btn-link</a></li>
                                              </ul>
                                          </div>
                                     </div>
                                    </div>

                                    <div class="col-xs-6">
                                      <span style=""><b>Select Buttons Helper Classes<b></span><br/>
                                      <div class="input-group" style="margin-top:5px;">                                            
                                          <input type="TextBox" id="buttonGroupButtonsHelpersBox" class="form-control" placeholder="Select Button Helpers" style="background-color:#b6b6b6 !important;"></input>
                                          <div class="input-group-btn">
                                              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                                              <span class="caret"></span>
                                              </button>
                                              <ul id="buttonGroupButtonsHelpers" class="dropdown-menu">
                                                  <li><a href="#">btn-lg</a></li>
                                                  <li><a href="#">btn-md</a></li>
                                                  <li><a href="#">btn-sm</a></li>
                                                  <li><a href="#">btn-xs</a></li>
                                                  
                                                  
                                              </ul>
                                          </div>
                                     </div>
                                    </div>
                                    </div>

                                    <div class="row text-center" style="margin-top:15px;">
                                         <button class="btn btn-success" id="buttongroupButtonsClassesChange">Change</button>
                                    </div>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>





         <div class="panel-group" id="accordionButtongroupColor" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionButtongroupColor" href="#collapseButtongroupColorContent">Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapseButtongroupColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="buttongroupColorPickerContainer" style="margin-left:10%;">

                                <input type='text' id="buttongroupColorPicker" style="display:none;"/>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>


      </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="buttongroupEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="dropdownEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Dropdown Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="panel-group" id="dropdownButtonMainContent">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#dropdownButtonMainContent" href="#collapseDropdownMainContent">Button Content</a>
                        </h4>
                    </div>

                    <div id="collapseDropdownMainContent" class="panel-collapse collapse in">
                      <div class="panel-body">
           
                            <div class="row">
                              <div class="col-xs-6">
                                <span style=""><b>Select Button Classes<b></span><br/>
                                 <div class="input-group" style="margin-top:5px;">                                          
                                    <input type="TextBox" id="modalButtonClassesBox" class="form-control" placeholder="Select Button Classes" style="background-color:#b6b6b6 !important;"></input>
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Button Classes
                                        <span class="caret"></span>
                                        </button>
                                        <ul id="modalButtonClasses" class="dropdown-menu">
                                            <li><a href="#">btn-default</a></li>
                                            <li><a href="#">btn-primary</a></li>
                                            <li><a href="#">btn-success</a></li>
                                            <li><a href="#">btn-info</a></li>
                                            <li><a href="#">btn-warning</a></li>
                                            <li><a href="#">btn-danger</a></li>
                                            <li><a href="#">btn-link</a></li>
                                        </ul>
                                    </div>
                               </div>
                              </div>

                              <div class="col-xs-6">
                                <span style=""><b>Select Buttons Helper Classes<b></span><br/>
                                <div class="input-group" style="margin-top:5px;">                                            
                                    <input type="TextBox" id="modalButtonHelpersBox" class="form-control" placeholder="Select Button Helpers" style="background-color:#b6b6b6 !important;"></input>
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                                        <span class="caret"></span>
                                        </button>
                                        <ul id="modalButtonHelpers" class="dropdown-menu">
                                            <li><a href="#">btn-lg</a></li>
                                            <li><a href="#">btn-md</a></li>
                                            <li><a href="#">btn-sm</a></li>
                                            <li><a href="#">btn-xs</a></li>
                                            <li><a href="#">active</a></li>
                                            <li><a href="#">disabled</a></li>
                                            
                                        </ul>
                                    </div>
                               </div>
                              </div>
                              </div>

                              <form role="form" id="dropdownMainTextForm">
                                                        <div class="row" style="margin-top:20px;margin-left:5px;"> Dropdown Button Text Options</div>

                                                        <div class="row" style="margin-top:10px;">

                                                              <div class="col-xs-5"> 

                                                                  <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <span class="btn btn-primary">
                                                                            Font Size 
                                                                        </span>
                                                                    </span>
                                                                    <input type="text" class="form-control" id="dropdownMainFontSizeBox">
                                                                </div>

                                                              </div>

                                                              <div class="col-xs-5"> 

                                                                  <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <span class="btn btn-primary">
                                                                            Font Family 
                                                                        </span>
                                                                    </span>
                                                                    <input type="text" class="form-control" id="dropdownMainFontFamilyBox">
                                                                </div>

                                                              </div>

                                                      </div>

                                                      <div class="row" style="margin-top:10px;">

                                                              <div class="col-xs-5"> 

                                                                  <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <span class="btn btn-primary">
                                                                            Font Style 
                                                                        </span>
                                                                    </span>
                                                                    <input type="text" class="form-control" id="dropdownMainFontStyleBox">
                                                                </div>

                                                              </div>

                                                              <div class="col-xs-5"> 

                                                                  <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <span class="btn btn-primary">
                                                                            Font Weight 
                                                                        </span>
                                                                    </span>
                                                                    <input type="text" class="form-control" id="dropdownMainFontWeightBox">
                                                                </div>

                                                              </div>

                                                      </div>

                                                </form>

                           

                          <div class="row" style="margin-top:30px;margin-left:5px;margin-bottom:20px;">
                            <span style="">Button Text</span>
                            
                              
                            <div class="col-xs-12" style="margin-top:5px;"> 

                              <div class="input-group" style="margin-left:-20px;">
                                <span class="input-group-btn">
                                    <span class="btn btn-primary btn-file" id="buttonSpanBtn">
                                        Button Text <input type="file" id="buttonInputFile">
                                    </span>
                                </span>
                                <input type="text" class="form-control" id="modalButtonFileBox">
                            </div>

                          </div>

                          </div> 


                        <form role="form" id="dropdownButtonMainTextColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Button Text Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownButtonMainTextColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        <form role="form" id="dropdownButtonMainBackgroundForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Button Background Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownButtonMainBackgroundChange">Change</button>
                                        </div>
                                      </div>
                        </form>


                        <form role="form" id="dropdownButtonMainBorderForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Button Border Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownButtonMainBorderChange">Change</button>
                                        </div>
                                      </div>
                        </form>



                          </div>

                    </div>

                </div>

         </div>

        

        <div class="panel-group" id="accordionDropdownContent">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionDropdownContent" href="#collapseDropdownContent">Dropdown Elements Content</a>
                        </h4>
                    </div>

                    <div id="collapseDropdownContent" class="panel-collapse collapse">
                      <div class="panel-body">

                        <div class="dropdownElementsContainer">

                         </div>


                        <div class="row" style= "margin-top:20px;">
                          
                          <div class="col-xs-12" style= "margin-top:30px;">
                            <div class="input-group">
                                <label for="modaldropdownChangeNumElements">Change Number of Elements</label>
                                <input type="text" class="form-control" id="modaldropdownChangeNumElements" placeholder="Number" style="background-color:rgb(197, 219, 255) !important;">
                            </div>
                          </div>

                        </div>



                      </div>

                    </div>

                </div>

         </div>

         
         <div class="panel-group" id="accordionDropdownLinks" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionDropdownLinks" href="#collapseDropdownLinks">Links Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapseDropdownLinks" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <form role="form" id="dropdownLinksTextForm">
                                        <div class="row" style="margin-left:5px;"> Links Options</div>

                                        <div class="row" style="margin-top:15px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Size 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksFontSizeBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Family 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksFontFamilyBox">
                                                </div>

                                              </div>

                                      </div>

                                      <div class="row" style="margin-top:10px;margin-left:15px;">

                                              <div class="col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Style 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksFontStyleBox">
                                                </div>

                                              </div>

                                              <div class="col-xs-offset-1 col-xs-5"> 

                                                  <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Font Weight 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksFontWeightBox">
                                                </div>

                                              </div>

                                      </div>

                                </form>

                        
                        <form role="form" id="dropdownLinksColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownLinksColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                        <form role="form" id="dropdownLinksBackgroundForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Background Color</div>
                                  
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownLinksBackgroundColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>


                        <form role="form" id="dropdownLinksHoverColorForm">
                                      <div class="row" style="margin-top:15px;margin-left:5px;"> Change Links Hover Color</div>

                                      <div class="row" style="margin-top:5px;"> 

                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            Class Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksClassNameBox">
                                                </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary">
                                                            ID Name 
                                                        </span>
                                                    </span>
                                                    <input type="text" class="form-control" id="dropdownLinksIdNameBox">
                                                </div>
                                        </div>
                                      </div>
                                      <div class="row" style="margin-top:5px;">   
                                          <div class="col-xs-offset-1 col-xs-3">
                                                <div class="radio">
                                                      <label><input type="radio" name="optradio" value="change"><span>Change</span></label> 
                                                </div>
                                          </div>
                                          <div class="col-xs-offset-1 col-xs-3">
                                            <div class="radio">
                                                  <label><input type="radio" name="optradio" value="none"><span>None</span></label> 
                                            </div>
                                        </div>
                                          <div class="col-xs-4">
                                            <button class="btn btn-info" id="dropdownLinksHoverColorChange">Change</button>
                                        </div>
                                      </div>
                        </form>

                       </div>

                     </div>

                 </div>

            </div>

         

         
         <div class="panel-group" id="accordionDropdownColor" style="margin-top:20px;">

            <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionDropdownColor" href="#collapseDropdownColorContent">Color Settings</a>
                        </h4>
                    </div>

                    <div id="collapseDropdownColorContent" class="panel-collapse collapse ">
                      <div class="panel-body">

                        <div class="dropdownColorPickerContainer" style="margin-left:10%;">

                                <input type='text' id="dropdownColorPicker" style="display:none;"/>
          
                         </div>

                       </div>

                     </div>

                 </div>

            </div>
        


        <div class="panel-group" id="buttonIconsAccordion">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#buttonIconsAccordion" href="#collapse1buttonIcons">Button Icons</a>
                        </h4>
                    </div>

                    <div id="collapse1buttonIcons" class="panel-collapse collapse ">
                        <div class="panel-body">

                          <span>Icon Layout Options</span>

                          <div class="optionsContainer" style="font-size:12px;">
                          <form role="form" class="insertOptionsContainerForm">


                          
                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="beforeText" checked="checked">Insert Icon before Text</label>
                              </div>
                            </div>

                      
                         </div>

                      
                       </form>

                       <br/>
                       <div style="clear:both;">Icon Size Options</div>

                       <div class="optionsIconsSizeContainer" style="font-size:12px;">

                          <form role="form" class="iconsSizeContainerForm">
                              <div class="row">
                                  <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="normal" checked="checked"><span>Normal Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lg"><span>33% increase</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="2x"><span>2x Size</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="3x"><span>3x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="4x"><span>4x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="5x"><span>5x Size</span></label> 
                                    </div>
                                </div>

                              </div>
                          </form>
                        </div>

                        <span>Select Icons</span>
                        <form role="form" class="iconsDropdownContainerForm">
                         <div class="optionsIconsContainer" style="font-size:14px;">

                          

                         </div> 

                        </form>


                        </div> 
                    </div> 
                </div> 
    </div>  



      </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="dropdownEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>




<div class="modal fade" id="buttonEdit" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Buttons Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="buttonsModalContainer">

            <div class="row">
              <div class="col-xs-6">
                <span style=""><b>Select Buttons Classes<b></span><br/>
                 <div class="input-group" style="margin-top:5px;">                                          
                    <input type="TextBox" id="modalButtonsClassesBox" class="form-control" placeholder="Select Button Classes" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Button Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalButtonsClasses" class="dropdown-menu">
                            <li><a href="#">btn-default</a></li>
                            <li><a href="#">btn-primary</a></li>
                            <li><a href="#">btn-success</a></li>
                            <li><a href="#">btn-info</a></li>
                            <li><a href="#">btn-warning</a></li>
                            <li><a href="#">btn-danger</a></li>
                            <li><a href="#">btn-link</a></li>
                        </ul>
                    </div>
               </div>
              </div>

              <div class="col-xs-6">
                <span style=""><b>Select Buttons Helper Classes<b></span><br/>
                <div class="input-group" style="margin-top:5px;">                                            
                    <input type="TextBox" id="modalButtonsHelpersBox" class="form-control" placeholder="Select Button Helpers" style="background-color:#b6b6b6 !important;"></input>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Helper Classes
                        <span class="caret"></span>
                        </button>
                        <ul id="modalButtonsHelpers" class="dropdown-menu">
                            <li><a href="#">btn-lg</a></li>
                            <li><a href="#">btn-md</a></li>
                            <li><a href="#">btn-sm</a></li>
                            <li><a href="#">btn-xs</a></li>
                            <li><a href="#">active</a></li>
                            <li><a href="#">disabled</a></li>
                            
                        </ul>
                    </div>
               </div>
              </div>
              </div>

            

            

          <div class="row" style="margin-top:30px;margin-left:5px;margin-bottom:20px;">
            <span style="">Button Text</span>
           
              
            <div class="col-xs-12" style="margin-top:5px;"> 

              <div class="input-group" style="margin-left:-20px;">
                <span class="input-group-btn">
                    <span class="btn btn-primary btn-file" id="buttonSpanBtn">
                        Button Text <input type="file" id="buttonInputFile">
                    </span>
                </span>
                <input type="text" class="form-control" id="modalButtonFileBox">
            </div>

          </div>

          </div> 

        </div>




      <div class="panel-group" id="accordionButtonsModal">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#ButtonsModal" href="#collapse1ButtonsModal">Button Icons</a>
                        </h4>
                    </div>

                    <div id="collapse1ButtonsModal" class="panel-collapse collapse ">
                        <div class="panel-body">

                          <span>Icon Layout Options</span>

                          <div class="optionsContainer" style="font-size:12px;">
                          <form role="form" class="insertOptionsContainerForm">


                          
                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="beforeText">Insert Icon before Text</label>
                              </div>
                            </div>

                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="afterText">Insert Icon after Text</label>
                              </div>
                              </div>

                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="beforeTextNewLine">Insert Icon before Text in Seperate Line</label>
                              </div>
                              </div>

                            <div class="col-xs-6">
                              <div class="radio">
                                <label><input type="radio" name="optradio" class="afterTextNewLine">Insert Icon after Text in Seperate Line</label>
                              </div>
                              </div>

                            
                         </div>

                        

                       </form>

                       <br/>
                       <div style="clear:both;">Icon Size Options</div>

                       <div class="optionsIconsSizeContainer" style="font-size:12px;">

                          <form role="form" class="iconsSizeContainerForm">
                              <div class="row">
                                  <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="normal" checked="checked"><span>Normal Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="lg"><span>33% increase</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="2x"><span>2x Size</span></label> 
                                    </div>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="3x"><span>3x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="4x"><span>4x Size</span></label> 
                                    </div>
                                </div>

                                <div class="col-xs-4">
                                    <div class="radio">
                                          <label><input type="radio" name="optradio" value="5x"><span>5x Size</span></label> 
                                    </div>
                                </div>

                              </div>
                          </form>
                        </div>

                        <span>Select Icons</span>
                        <form role="form" class="iconsContainerForm">
                         <div class="optionsIconsContainer" style="font-size:14px;">

                         

                         </div> 

                        </form>

        
                        </div> 
                    </div> 
                </div> 
    </div>  



      </div> 

     
        <div class="modal-footer">
            
            <button type="button" class="btn btn-success pull-left" id="buttonEditApply" data-dismiss="modal" >Apply</button> 
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>

  </div>
</div>



<div class="modal fade" id="modalColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="colorPickerContainer" style="margin-left:10%;">
                <input type='text' id="fullColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left colorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>

<div class="modal fade" id="modalBackgroundColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Background Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="backgroundColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="backgroundColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left backgroundColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>




<div class="modal fade" id="modalInspectorShowStyles" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">CSS Styles
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

            <div id="inspectorStylesContainer" style="margin-top:20px;margin-bottom:20px;"></div>
                


        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left modalInspectorShowStylesOK" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>




<div class="modal fade" id="modalBackgroundImageURL" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Background Image URL
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="backgroundImageURLContainer" style="margin-left:10%;">
                <div class="row" style="margin-left:5px;margin-bottom:0px;"><br/>
                  

                  <div class="col-xs-10"> 

                    <div class="input-group">
                      <span class="input-group-btn">
                          <span class="btn btn-primary btn-file" id="imageSpanBtn">
                          Browse <input type="file" id="modalImageURFile">
                          </span>
                      </span>
                      <input type="text" class="form-control" id="modalImageURLFileBox">
                  </div>
            
                  </div>

               </div> 
             </div> 

               <div class="inspectorUploadImagesDescription text-center" style="margin-top:25px;">Dran and Drop Image to upload to the Server</div>

               <div id="inspectorUploadImagesContainer"></div>
              

               <div id="inspectorImageUploadAlertsContainer"></div>


            <div class="panel-group" id="accordionBackImagesfileTreeGroup">

                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordionBackImagesfileTreeGroup" href="#collapseBackImagesfileTreeList">Browse Server Files</a>
                        </h4>
                    </div>

                    <div id="collapseBackImagesfileTreeList" class="panel-collapse collapse">
                        <div class="panel-body">


                            <div id="fileTreeBackImages" class="demo"></div>

                         </div> 
                    </div> 
                </div>
            </div>  



          
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left backgroundImageURLApply" data-dismiss="modal">Select</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>



<div class="modal fade" id="modalBackgroundBoxShadowColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Background BoxShadow Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="backgroundBoxShadowColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="backgroundBoxShadowColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left backgroundBoxShadowColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>


<div class="modal fade" id="modalBorderColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Border Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="borderColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="borderColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left borderColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>


<div class="modal fade" id="modalBorderTopColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Border Top Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="borderTopColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="borderTopColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left borderTopColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>

<div class="modal fade" id="modalBorderBottomColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Border Bottom Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="borderBottomColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="borderBottomColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left borderBottomColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>

<div class="modal fade" id="modalBorderLeftColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Border Left Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="borderLeftColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="borderLeftColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left borderLeftColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>

<div class="modal fade" id="modalBorderRightColorPicker" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title text-center blueTitle">Border Right Color Settings
            <a class="close-edit pull-right" data-dismiss="modal" style="color:#000;"><i class="fa fa-times"></i></a>
          </h4>
          
        </div>

        <div class="modal-body"> <br/>

          <div class="borderRightColorPickerContainer" style="margin-left:10%;">
                <input type='text' id="borderRightColorPicker" style="display:none;"/>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-success pull-left borderRightColorPickerApply" data-dismiss="modal">Apply</button>
            <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Close</button>
        </div>

    </div>
  </div>
</div>



<div class="globalClassList" style="display:none;">
    <div class="globalClass" data-type="tableWidthClass">
        <div class="cssAttributes" data-type="elementWidth" data-id="100%" data-value="width"></div>
        <div class="cssAttributes" data-type="elementHeight" data-id="auto" data-value="height"></div>
    </div>
</div>
     

<div class="globalIDsList" style="display:none;"></div>



<div class="cssInspector cssInspector-vertical cssInspector-left" id="cssInspector">
      <div class="nav-header">
           
          <h4 class="blackText" style="font-size:22px;margin-bottom:20px;">CSS Inspector <a class="closeInspector"><i class="fa fa-times fa-custom1"></i></a></h4>
          
      </div>
      <div class="nav-body">

            <div class="inspectorGlobalClassDiv">
             
            </div>

            <div class="inspectorClassDiv">

               <p style="font-style:bold;font-size:16px;margin-left:5px;"> Enter Class name or ID name </p>
               <div class="row">
                     <div class="col-xs-3" style="margin-left:5px;">Class</div>
                     <div class="col-xs-7"><input type="text" class="custClass elementClassName form-control"></input></div>
               </div>
               <div class="row" style="margin-top:5px;">
                  <div class="col-xs-3" style="margin-left:5px;">ID</div>
                     <div class="col-xs-7"><input type="text" class="custClass elementIDName form-control"></input></div>
              </div>

              <div class="row" style="margin-top:10px;">
                <div class="col-xs-4">
                    <button type="button" class="btn btn-sm btn-default customClassAdd " title="Add Class"><i class="fa fa-plus" ></i> Add Class</button>
                </div>
                <div class="col-xs-4 col-xs-offset-2">
                  <button type="button" class="btn btn-sm btn-default customIDAdd" title="Add ID"><i class="fa fa-plus" ></i> Add ID</button>
                </div>
             </div>

             <div class="currentCustomClass"></div>
             
             <div class="currentCustomID"></div>

             </div>

             <div class="classOrIDToSelect"></div>

             

            <div class="panel-group" id="accordion">

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">CSS Layout Properties</a>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body">

                          <div class="row">
                              <div class="col-xs-6">width</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementWidth"></input></div>
                          </div>

                          <div class="row" style="margin-top:5px;">
                           <div class="col-xs-6">height</div>
                           <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementHeight"></input></div>
                         </div>

                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">min-width</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMinWidth"></input></div>
                          </div>

                          <div class="row" style="margin-top:5px;"> 
                            <div class="col-xs-6">min-height</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMinHeight"></input></div> 
                          </div>

                          <div class="row" style="margin-top:5px;">
                             <div class="col-xs-6">max-width</div> 
                             <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMaxWidth"></input></div> 
                           </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">max-height</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMaxHeight"></input></div> 
                          </div>

                          <br/>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">margin-top</div>
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMarginTop"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">margin-bottom</div>
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMarginBottom"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">margin-left</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMarginLeft"></input></div> 
                           </div> 
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">margin-right</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementMarginRight"></input></div> 
                          </div>
                          <br/>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">padding-top</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementPaddingTop"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">padding-bottom</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementPaddingBottom"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">padding-left</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementPaddingLeft"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">padding-right</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementPaddingRight"></input></div> 
                          </div>

                          <br/>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">position</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementPosition"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">top</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementTop"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">bottom</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBottom"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">left</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementLeft"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">right</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementRight"></input></div> 
                          </div>

                          <br/>

                          <br/>

                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">float</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementFloat"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">clear</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementClear"></input></div> 
                          </div>



                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">visibility</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementVisibility"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">z-index</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementZIndex"></input></div> 
                          </div>
                          <div class="row" style="margin-top:5px;">
                            <div class="col-xs-6">opacity</div> 
                            <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementOpacity"></input></div> 
                          </div>

                          <br/>


                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                      <div class="panel-heading">
                          <h4 class="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">CSS Text Properties</a>
                          </h4>
                      </div>

                      <div id="collapse2" class="panel-collapse collapse">
                          <div class="panel-body">

                            <div class="row">
                                <div class="col-xs-3" style="margin-top:10px;">Color</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorColorPickerBox" class="form-control elementColor" placeholder="Text Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                         <div class="row" style="margin-top:30px;">
                              <div class="col-xs-6">font size</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementFontSize"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">font family</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementFontFamily"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">font style</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementFontStyle"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">font weight</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementFontWeight"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">line height</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementLineHeight"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">text align</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementTextAlign"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">text decoration</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementTextDecoration"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">text transform</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementTextTransform"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">white space</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementWhiteSpace"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">vertical align</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementVerticalAlign"></input></div>
                         </div>




                          </div> 
                      </div> 
                </div> 

                <div class="panel panel-default">
                      <div class="panel-heading">
                          <h4 class="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">CSS Background Properties</a>
                          </h4>
                      </div>
                      <div id="collapse3" class="panel-collapse collapse">
                          <div class="panel-body">
                             

                            <div class="row">
                                <div class="col-xs-3" style="margin-top:10px;">Color</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBackgroundColorPickerBox" class="form-control elementBackgroundColor" placeholder="Background Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBackgroundColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                              
                                <div class="col-xs-3" style="margin-top:30px;">URL</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:25px;">                                          
                                        <input type="TextBox" id="cssInspectorBackgroundURLPickerBox" class="form-control elementBackgroundURL" placeholder="Background URL" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBackgroundURL">URL</button>
        
                                        </div>
                                    </div>

                                </div>
                         
                          
                            </div>



                         <div class="row" style="margin-top:30px;">
                              <div class="col-xs-6">position</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundPosition"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">size</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundSize"></input></div>
                         </div>




                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">clip</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundClip"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">repeat</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundRepeat"></input></div>
                         </div>


                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">origin</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundOrigin"></input></div>
                         </div>


                        
                         <br/>  
                         <span class="blueText" style="margin-top:15px;">Box Shadow</span><br/>
                         
                         <div class="row" style="margin-top:10px;">
                              <div class="col-xs-6">h-shadow</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundHShadow"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">v-shadow</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundVShadow"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">blur</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundBlur"></input></div>
                         </div>

                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">spread</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBackgroundSpread"></input></div>
                         </div>
                       
                           

                         <div class="row" style="margin-top:20px;">
                                
                                <div class="col-xs-12" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBackgroundBoxShadowColorPickerBox" class="form-control elementBackgroundBoxShadowColor" placeholder="Background BoxShadowColor" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBackgroundBoxShadowColor" >Box Shadow Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                         </div>
                        
                         <div class="calculateContainer" style="margin-top:15px;">
                          <span class="blueText" >Calculate Box Shadow</span><button class="btn btn-sm btn-success calcBoxShadow" style="margin-left:5px;">Calculate</button>
                        </div>
                        <br/>
                         <div class="row" style="margin-top:5px;">
                              <div class="col-xs-6">Box Shadow</div>
                              <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBoxShadow"></input></div>
                         </div>
                        


                          </div>
                      </div> 
                </div> 

                <div class="panel panel-default">
                      <div class="panel-heading">
                          <h4 class="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">CSS Border Properties</a>
                          </h4>
                      </div>
                      <div id="collapse4" class="panel-collapse collapse">
                          <div class="panel-body">

                            <div class="row">
                                <div class="col-xs-3" style="margin-top:10px;">Color</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBorderColorPickerBox" class="form-control elementBorderColor" placeholder="Border Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBorderColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row" style="margin-top:10px;">
                                <div class="col-xs-6">border style</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderStyle"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">border radius</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderRadius"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">border collapse</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderCollapse"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">border spacing</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderSpacing"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">border width</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderWidth"></input></div>
                            </div>


                            <div class="row" style="margin-top:20px;">
                                <div class="col-xs-3">Top</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBorderTopColorPickerBox" class="form-control elementBorderTopColor" placeholder="Border Top Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBorderTopColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row" style="margin-top:10px;">
                                <div class="col-xs-6">top style</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderTopStyle"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">top radius</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderTopRadius"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">top width</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderTopWidth"></input></div>
                            </div>



                            <div class="row" style="margin-top:20px;">
                                <div class="col-xs-3">Bottom</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBorderBottomColorPickerBox" class="form-control elementBorderBottomColor" placeholder="Border Bottom Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBorderBottomColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row" style="margin-top:10px;">
                                <div class="col-xs-6">bottom style</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderBottomStyle"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">bottom radius</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderBottomRadius"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">bottom width</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderBottomWidth"></input></div>
                            </div>



                            <div class="row" style="margin-top:20px;">
                                <div class="col-xs-3">Left</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBorderLeftColorPickerBox" class="form-control elementBorderLeftColor" placeholder="Border Left Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBorderLeftColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row" style="margin-top:10px;">
                                <div class="col-xs-6">left style</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderLeftStyle"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">left radius</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderLeftRadius"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">left width</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderLeftWidth"></input></div>
                            </div>



                            <div class="row" style="margin-top:20px;">
                                <div class="col-xs-3">Right</div>
                                <div class="col-xs-offset-1 col-xs-8" > 
                                    <div class="input-group" style="margin-top:5px;">                                          
                                        <input type="TextBox" id="cssInspectorBorderRightColorPickerBox" class="form-control elementBorderRightColor" placeholder="Border Right Color" ></input>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary selectBorderRightColor">Color</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row" style="margin-top:10px;">
                                <div class="col-xs-6">right style</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderRightStyle"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">right radius</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderRightRadius"></input></div>
                            </div>

                            <div class="row" style="margin-top:5px;">
                                <div class="col-xs-6">right width</div>
                                <div class="col-xs-6" style="margin-left:-8%;"><input type="text" class="form-control elementBorderRightWidth"></input></div>
                            </div>




                          </div> 
                      </div> 
                </div> 


  
              </div> 


        </div>  




         <div class="nav-footer">
          
          <p> Select Classes and ID for the css to apply to </p>
          <div class="inspectorSelectClass">
          </div>

          <div class="row">

            <div class="col-xs-2">
                <button type="button" class="btn btn-primary save">Apply</button>
             </div>

             <div class="col-xs-7" style="margin-left:14px;">

                <button type="button" class="btn btn-primary btn-sm" id="edit-mode"><i class="fa fa-reply"></i></button>

                <div class="btn-group btn-group-sm" id="inspectorPreview">
                    <button type="button" class="btn btn-info mobile" title="Preview Mobile"><i class="fa fa-mobile" ></i></button>
                    <button type="button" class="btn btn-info tablet-sm" title="Preview Tablet Medium"><i class="fa fa-tablet" ></i></button>
                    <button type="button" class="btn btn-info tablet-lg" title="Preview Tablet Large"><i class="fa fa-tablet fa-lg" ></i></button>
                    <button type="button" class="btn btn-info desktop" title="Preview Desktop"><i class="fa fa-desktop" ></i></button>
                </div>
             </div>
            <div class="col-xs-3" style="margin-left:-30px;">
              <button type="button" class="btn btn-primary" id="cssInspector-close">Close</button>
            </div>
      </div>


</div>

</div> 





</body>

</html>
