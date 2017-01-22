$(function() {

Dropzone.autoDiscover = false;

$( document ).on( 'click', '#startNewButton', function (e) {


var projectName = $('#newProjectName').val();

var userLogged = $('#userid').attr('data-id');

var alertShown = false;
if ( userLogged != 'logged' ) {

  var htmlInfo = '<div class="alert alert-danger">'+
                     '<strong>You need to select a User first.</strong>'+
                  '</div>';
  $('.userSelectedAlerts').html(htmlInfo);
  $('.userSelectedAlerts').addClass('animated bounce');

  alertShown = true;
}



if ( projectName.trim() != '' && projectName != null && projectName != 'undefined' && userLogged == 'logged' ) {

var htmlInfo = '<div class="alert alert-success">'+
                         '<strong>Starting new Project.</strong>'+
                      '</div>';
$('.userSelectedAlerts').html(htmlInfo);
$('.userSelectedAlerts').addClass('animated bounce');
  

var userid = $('#userid').attr('data-value');

var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


projectName = projectName.split(' ').join('_');


var newProjectURL = filePath + 'index.php?project=' + projectName + '&userid=' + userid;

window.location.replace(newProjectURL);

}else{
  if ( !alertShown ) {
      var htmlInfo = '<div class="alert alert-danger">'+
                         '<strong>You need to enter a name for the Project.</strong>'+
                      '</div>';
      $('.userSelectedAlerts').html(htmlInfo);
      $('.userSelectedAlerts').addClass('animated bounce');
  }
}

});


$( document ).on( 'click', '.editTemplate', function (e) {

var projectName = $(this).parent().closest('.columnTemplates').find('.loadExisting').attr('data-id');
var templateName = $(this).parent().closest('.columnTemplates').find('.templateName').val();
var userLogged = $('#userid').attr('data-id');

var starterTemplate = false;

if ( $(this).parent().closest('.columnTemplates').find('.loadExisting').find('img').hasClass('starter') ){
    starterTemplate = true;
}

if ( userLogged != 'logged' ) {

var htmlInfo = '<div class="alert alert-danger">'+
                     '<strong>You need to select a User first.</strong>'+
                  '</div>';
  $('.userSelectedAlerts').html(htmlInfo);
  $('.userSelectedAlerts').addClass('animated bounce');

}else{

if(starterTemplate){
var userid = $('#userid').attr('data-value');

var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

var newProjectURL = filePath + projectName + '.php?project=' + projectName + '&userid=' + userid;
window.location.replace(newProjectURL);
}else{
var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


var newProjectURL = filePath + templateName + '.html';
window.location.replace(newProjectURL);
}

}

});


checkResize();

window.onresize = function(event) {

checkResize();

}

function checkResize(){

  if ( window.innerWidth >= 1570 ){

    var hightHTML = '<div class="userSelectedAlerts"></div>' + 

                    '<div class="row">' +

                      '<div class="text-center col-xs-2 col-xs-offset-0">' +

                        '<div class="newProjectDiv" style="margin-top:120px;">' +

                          '<div class="newProjectGUI">' +
                            '<p class="newProjectGUITitle">Start New Project </p>';

                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  hightHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  hightHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 hightHTML += '<input type="text" class="form-control" id="newProjectName" >' +
                              '<p class="newProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                              '<button type="button" class="btn btn-block btn-info newProjectButton" id="startNewButton">Start</button>' +
                          '</div>' +

                        '</div>' +

                      '</div>' +
                      '<div class="col-xs-9 col-xs-offset-0" id="mainGrid" style="margin-left: 2%;">' +

                        '<div id="templatesContainer">';
    var templatesContainerInnerHTML = $('#templatesContainer').html();
    hightHTML += templatesContainerInnerHTML;

    hightHTML += '</div>' +
                '</div>' +
                '</div>';

    $('.optionsContainer').empty().append(hightHTML);



    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-4');
    $('.columnTemplates').addClass('col-xs-offset-0');

    
    $('.loadExisting').find('img').css({'width':'350px','height':'380px', 'max-width':'350px','max-height':'380px'});

  }else if ( window.innerWidth < 1570 && window.innerWidth >= 1400 ){

    var hightHTML = '<div class="userSelectedAlerts"></div>' + 

                    '<div class="row">' +

                      '<div class="text-center col-xs-2 col-xs-offset-0">' +

                        '<div class="newProjectDiv" style="margin-top:120px;">' +

                          '<div class="newProjectGUI">' +
                            '<p class="newProjectGUITitle">Start New Project </p>';
                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  hightHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  hightHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 hightHTML += '<input type="text" class="form-control" id="newProjectName" >' +
                              '<p class="newProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                              '<button type="button" class="btn btn-block btn-info newProjectButton" id="startNewButton">Start</button>' +
                          '</div>' +

                        '</div>' +

                      '</div>' +
                      '<div class="col-xs-9 col-xs-offset-0" id="mainGrid" style="margin-left: 2%;">' +

                        '<div id="templatesContainer">';
    var templatesContainerInnerHTML = $('#templatesContainer').html();
    hightHTML += templatesContainerInnerHTML;

    hightHTML += '</div>' +
                '</div>' +
                '</div>';

    $('.optionsContainer').empty().append(hightHTML);

    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-4');
    $('.columnTemplates').addClass('col-xs-offset-0');

    
    $('.loadExisting').find('img').css({'width':'340px','height':'380px', 'max-width':'340px','max-height':'380px'});

  }else if ( window.innerWidth < 1400 &&  window.innerWidth >= 1200 ){

    var lowHTML = '<div class="smallNewProjectDiv">' +

                    '<div class="smallNewProjectGUI text-center">' +
                      '<p class="smallNewProjectGUITitle">Start New Project </p>';

                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 lowHTML += '<p class="smallNewProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                        '<input type="text" class="form-control smallNewInput" id="newProjectName" ><br/>' +
                        
                        '<button type="button" class="btn btn-info smallNewProjectButton" id="startNewButton">Start</button>' +
                    '</div>' +

                  '</div>' +
                  '<div class="userSelectedAlerts"></div>';
    
    var templatesContainerInnerHTML = $('#templatesContainer').html();
    var templatesContainerHTML = '<div id="templatesContainer">' + templatesContainerInnerHTML + '</div>';

    $('.optionsContainer').empty().append(lowHTML);
    $('.optionsContainer').append(templatesContainerHTML);


    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-4');
    $('.columnTemplates').addClass('col-xs-offset-0');

    
    $('.loadExisting').find('img').css({'width':'280px','height':'360px', 'max-width':'280px','max-height':'360px'});

  }else if ( window.innerWidth < 1200 &&  window.innerWidth >= 992 ){

    var lowHTML = '<div class="smallNewProjectDiv">' +

                    '<div class="smallNewProjectGUI text-center">' +
                      '<p class="smallNewProjectGUITitle">Start New Project </p>';

                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 lowHTML += '<p class="smallNewProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                        '<input type="text" class="form-control smallNewInput" id="newProjectName" ><br/>' +
                        
                        '<button type="button" class="btn btn-info smallNewProjectButton" id="startNewButton">Start</button>' +
                    '</div>' +

                  '</div>' +
                  '<div class="userSelectedAlerts"></div>';

    var templatesContainerInnerHTML = $('#templatesContainer').html();
    var templatesContainerHTML = '<div id="templatesContainer">' + templatesContainerInnerHTML + '</div>';

    $('.optionsContainer').empty().append(lowHTML);
    $('.optionsContainer').append(templatesContainerHTML);


    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-4');
    $('.columnTemplates').addClass('col-xs-offset-0');

    
    $('.loadExisting').find('img').css({'width':'300px','height':'360px', 'max-width':'300px','max-height':'360px'});

  }else if ( window.innerWidth < 992 && window.innerWidth >= 770){

    var lowHTML = '<div class="smallNewProjectDiv">' +

                    '<div class="smallNewProjectGUI text-center">' +
                      '<p class="smallNewProjectGUITitle">Start New Project </p>';

                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 lowHTML += '<p class="smallNewProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                        '<input type="text" class="form-control smallNewInput" id="newProjectName" ><br/>' +
                        
                        '<button type="button" class="btn btn-info smallNewProjectButton" id="startNewButton">Start</button>' +
                    '</div>' +

                  '</div>' +
                  '<div class="userSelectedAlerts"></div>';
    
    var templatesContainerInnerHTML = $('#templatesContainer').html();
    var templatesContainerHTML = '<div id="templatesContainer">' + templatesContainerInnerHTML + '</div>';

    $('.optionsContainer').empty().append(lowHTML);
    $('.optionsContainer').append(templatesContainerHTML);


    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-6');
    $('.columnTemplates').addClass('col-xs-offset-0');

    
    $('.loadExisting').find('img').css({'width':'300px','height':'360px', 'max-width':'300px','max-height':'360px'});

  }else if ( window.innerWidth < 770 ){

    var lowHTML = '<div class="smallNewProjectDiv">' +

                    '<div class="smallNewProjectGUI text-center">' +
                      '<p class="smallNewProjectGUITitle">Start New Project </p>';

                var userLogged = $('#userid').attr('data-id');
                if ( userLogged == 'logged' ) {
                  var username = $('#userid').attr('data-username');
                  var usernameDisplay = username;
                  if(username.length > 23){
                      usernameDisplay = username.slice(0,20);
                      usernameDisplay += '...';
                  }
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">USER &nbsp;' + usernameDisplay + '</div>';
                }else{
                  lowHTML += '<div class="userSelection" style="margin-top:20px;margin-bottom:30px;">Select User</div>';
                }

                 lowHTML += '<p class="smallNewProjectGUIDesc"> Enter name for New Project or <br/> Select a Template to Edit</p>' +
                        '<input type="text" class="form-control smallNewInput" id="newProjectName" ><br/>' +
                        
                        '<button type="button" class="btn btn-info smallNewProjectButton" id="startNewButton">Start</button>' +
                    '</div>' +

                  '</div>' +
                  '<div class="userSelectedAlerts"></div>';
    
    var templatesContainerInnerHTML = $('#templatesContainer').html();
    var templatesContainerHTML = '<div id="templatesContainer">' + templatesContainerInnerHTML + '</div>';

    $('.optionsContainer').empty().append(lowHTML);
    $('.optionsContainer').append(templatesContainerHTML);


    $('.columnTemplates').attr('class','columnTemplates');

    $('.columnTemplates').addClass('columnTemplates');
    $('.columnTemplates').addClass('col-xs-12');
    $('.columnTemplates').addClass('col-xs-offset-0');

   
    $('.loadExisting').find('img').css({'width':'300px','height':'360px', 'max-width':'300px','max-height':'360px'});

  }




if ( window.innerWidth > 1350 && window.innerWidth < 1640){

$(".appTitle").css({'font-size' : '26px'});
$(".appDocumentation").css({'font-size' : '24px'});


$('#buttonsActionsContainer').remove();
var html = '<div class="col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-5" id="buttonsActionsContainer">' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="registerAPI" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Google Maps API Key' +
             '</button>' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="handleUserds" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Manage Users' +
             '</button>' +
           '</div>' ;
$('#rowActionsContainer').append(html);

$(".appDocumentation").removeClass('topMenuHidden');
$(".appDocumentation").siblings("span").removeClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.removeClass('topMenuHidden');


$resizeDivTo.addClass('btn-group-sm');

}else if ( window.innerWidth > 1000 && window.innerWidth <= 1350){

$(".appTitle").css({'font-size' : '18px'});
$(".appDocumentation").css({'font-size' : '18px'});


$('#buttonsActionsContainer').remove();
var html = '<div class="col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-5" id="buttonsActionsContainer">' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="registerAPI" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Google Maps API Key' +
             '</button>' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="handleUserds" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Manage Users' +
             '</button>' +
           '</div>' ;
$('#rowActionsContainer').append(html);

$(".appDocumentation").removeClass('topMenuHidden');
$(".appDocumentation").siblings("span").removeClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.addClass('topMenuHidden');


}else if ( window.innerWidth <= 1000 && window.innerWidth > 800){


$(".appTitle").css({'font-size' : '18px'});
$(".appDocumentation").css({'font-size' : '18px'});


$('#buttonsActionsContainer').remove();
var html = '<div class="col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-5" id="buttonsActionsContainer">' + 
              '<div class="dropdown" style="margin-top:25px;margin-bottom:15px;">' + 
                  '<button class="btn btn-info dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Actions ' + 
                      '<span class="caret"></span>' + 
                  '</button>' + 
                  '<ul class="dropdown-menu">' + 
                      '<li><a href="#" id="registerAPI" >Register API key</a></li>' + 
                      '<li><a href="#" id="handleUserds">Manage Users</a></li>' + 
                  '</ul>' + 
            '</div>' + 
          '</div>';
$('#rowActionsContainer').append(html);

$(".appDocumentation").addClass('topMenuHidden');
$(".appDocumentation").siblings("span").addClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.addClass('topMenuHidden');

}else if ( window.innerWidth <= 800){


$(".appTitle").css({'font-size' : '18px'});
$(".appDocumentation").css({'font-size' : '18px'});


$('#buttonsActionsContainer').remove();
var html = '<div class="col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-5" id="buttonsActionsContainer">' + 
              '<div class="dropdown" style="margin-top:25px;margin-bottom:15px;">' + 
                  '<button class="btn btn-info dropdown-toggle customDropDown" type="button" data-toggle="dropdown">Actions ' + 
                      '<span class="caret"></span>' + 
                  '</button>' + 
                  '<ul class="dropdown-menu">' + 
                      '<li><a href="#" id="registerAPI" >Register API key</a></li>' + 
                      '<li><a href="#" id="handleUserds">Manage Users</a></li>' + 
                  '</ul>' + 
            '</div>' + 
          '</div>';
$('#rowActionsContainer').append(html);

$(".appDocumentation").addClass('topMenuHidden');
$(".appDocumentation").siblings("span").addClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.addClass('topMenuHidden');

}else{
  
$(".appTitle").css({'font-size' : '26px'});
$(".appDocumentation").css({'font-size' : '24px'});


$('#buttonsActionsContainer').remove();
var html = '<div class="col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-5" id="buttonsActionsContainer">' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="registerAPI" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Google Maps API Key' +
             '</button>' +
            '<button type="button" class="btn btn-info btnToResize revealP" id="handleUserds" style="margin-top:25px;margin-bottom:15px;margin-right:15px;">' +
             'Manage Users' +
             '</button>' +
           '</div>' ;
$('#rowActionsContainer').append(html);

$(".appDocumentation").removeClass('topMenuHidden');
$(".appDocumentation").siblings("span").removeClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.removeClass('topMenuHidden');
$resizeDivTo.removeClass('btn-group-sm');

}



} 

$( document ).on( 'click', '#registerAPI', function (e) {

var $modalEdit = $('#registerKeyModal');



$('#registerKeyModal').modal('show');

$('#registerKeyModal').on( "click", "#registerKeySubmit", function(e) { 

  var apiKey = $('#apiKeyInput').val();
  var userLogged = $('#userid').attr('data-id');

if ( userLogged == 'logged' ) {

  var userid = $('#userid').attr('data-value');


  if ( apiKey != null && apiKey != 'undefined' && apiKey.trim() != '' ){


  $.ajax({
        url: 'register_apikeys.php',
        type:"POST",
        
        data: { 'apiKey' : apiKey, 'userid' : userid},
        success: function (data) {
            

            var tempHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Google Maps API Key Registered Successfully.'+
                          '</div>';

            $('#registerKeyMessagesContainer').empty().append(tempHTML);

            $('#registstrationCompleted').attr('data-value', 'true');
            $('#mainRegistrationValue').attr('data-value', apiKey);


        },
        error: function (xhr, status, error) {
            

            var tempHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Registration failed.'+
                          '</div>';

            $('#registerKeyMessagesContainer').empty().append(tempHTML);


        }

    });
}else{
  var tempHTML = '<div class="alert alert-danger">'+
                      '<strong>Error!</strong> You must enter the correct Javascript API Key.'+
                 '</div>';

  $('#registerKeyMessagesContainer').empty().append(tempHTML);

}

}else{
  var tempHTML = '<div class="alert alert-danger">'+
                      '<strong>User not selected</strong> You must first select a User.'+
                 '</div>';

  $('#registerKeyMessagesContainer').empty().append(tempHTML);
}


});

$('#registerKeyModal').on( "click", ".registerKeyApply", function(e) { 

  var registrationCompleted = $('#registrationCompleted').attr('data-value');

  if ( registrationCompleted == 'true' ) {

        

        $('#registerKeyModal').modal('hide');
  } else{

        $('#registerKeyModal').modal('hide');
  }



});


});


$( document ).on( 'click', '#handleUserds', function (e) {
var $modalEdit = $('#manageUsersModal');

$('#manageUsersModal').find('#userName').val('');
$('#manageUsersModal').find('#userPass').val('');

$('#manageUsersModal').modal('show');

});



$( document ).on( 'click', '.loadExisting', function (e) {

var $parent = $(this).parent().closest('.columnTemplates');
var $imgElement = $parent.find('img');

var starterTemplate = false;
if ($imgElement.hasClass('starter') ){
    starterTemplate = true;
}

if(!starterTemplate){
  process_imageEdit($imgElement);
}else{
  
  var $aElement = $(this);
  openStarterTemplate($aElement);
}

});

function openStarterTemplate($aElement){

var projectName = $aElement.attr('data-id');
var userLogged = $('#userid').attr('data-id');

if ( userLogged != 'logged' ) {
  var htmlInfo = '<div class="alert alert-danger">'+
                     '<strong>You need to select a User first.</strong>'+
                  '</div>';
  $('.userSelectedAlerts').html(htmlInfo);
  $('.userSelectedAlerts').addClass('animated bounce');

}else{

var userid = $('#userid').attr('data-value');

var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

var newProjectURL = filePath + projectName + '.php?project=' + projectName + '&userid=' + userid;
window.location.replace(newProjectURL);
}

}

function process_imageEdit($innerElement){

  
  this.innerElement = $innerElement;

  var $modalEdit = $('#imageEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
    this.modalEdit.off( "change", "#imageInputFile");
    this.modalEdit.off( "click", ".imageEditApply");
    
}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');


  var imgFile = $innerElement.attr('src');
  this.modalEdit.find('#modalImageFileBox').val(imgFile);

  
  $('#fileTreeImages').fileTree({ root: '/', script: 'connectors/jqueryFileTree.php' }, function(file) {
      this.modalEdit.find('#modalImageFileBox').val(file);
   });


  this.modalEdit.modal('show');

  var userLogged = $('#userid').attr('data-id');


  var loc = window.location;
  var pathName = loc.pathname;
  var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
  var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

  var windProtocol = window.location.protocol;
  var windHost = window.location.host;
  var filePath = windProtocol + "//" + windHost + "/" + pathNameSort + 'uploadTemplateImages.php';


if ( !this.modalEdit.find("#uploadImagesContainer").hasClass('dropzone') ) {

this.modalEdit.find("#uploadImagesContainer").addClass('dropzone');
this.modalEdit.find("#uploadImagesContainer").css({'margin-top':'20px','margin-bottom':'25px','background-color':'rgb(129, 178, 255)','border-style':'dotted',
                                                           'height':'300px', 'overflow-x':'hidden', 'overflow-y':'auto'});

this.modalEdit.find("#uploadImagesContainer").dropzone({
 url: filePath, 
 success: function (response) {
        
        var x = JSON.parse(response.xhr.responseText);
        
        
        var informHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Image uploaded successfully.'+
                          '</div>';
          
          $('#imageEdit').find('#imageUploadAlertsContainer').html(informHTML);

        
 },
 error: function (response) {
        var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Image upload did not complete.'+
                          '</div>';
          
          $('#imageEdit').find('#imageUploadAlertsContainer').html(informHTML);

 }


});

}


  
if (this.modalEdit.data('bs.modal').isShown ){



  this.modalEdit.on( "change", "#imageInputFile", $.proxy( function(e) { 

    if (userLogged == 'logged'){
        
           var imgVal = this.modalEdit.find('#imageInputFile').val(); 
          if (imgVal != ''){

            var start = imgVal.lastIndexOf("\\");

            var fileName = imgVal.substring(start + 1);
            

            var temp = 'template_images/' + fileName;
            

            this.modalEdit.find('#modalImageFileBox').val(temp);
            }
    }else{
      var informHTML = '<div class="alert alert-danger">'+
                              '<strong>You have to Select a User first'+
                          '</div>';
          
      $('#imageEdit').find('#imageUploadAlertsContainer').html(informHTML);
    }
  

  }, this)); 

  this.modalEdit.on( "click", ".imageEditApply", $.proxy( function(e) { 
      var current = e.currentTarget;
      var $current = $(current);

          
      if (userLogged == 'logged'){

          var userid = $('#userid').attr('data-value');
          var $parent = this.innerElement.parent().closest('.columnTemplates');
          var projectName = $parent.find('a').attr('data-id');
          
          var imgVal = this.modalEdit.find('#modalImageFileBox').val(); 
          if (imgVal != ''){

            var start = imgVal.lastIndexOf("\\");
            if (start > 0 ) {

            var fileName = imgVal.substring(start + 1);
            }else{
                var start = imgVal.lastIndexOf("/");
                var fileName = imgVal.substring(start + 1);
            }
           
            
            var loc = window.location;
            var pathName = loc.pathname;
            var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
            
            var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
          
            var windProtocol = window.location.protocol;
            var windHost = window.location.host;
            var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

            
            $.ajax({
              url: 'edit_template_images.php',
              type:"POST",
              dataType : "json",
              data: { 'userid' : userid, 'fileName' : fileName, 'projectName' : projectName },
              success: function (response) {
                         

              },
              error: function (xhr, status, error) {
                  
                  if (xhr.status > 0) alert('got error: ' + status + ', response'); 
              },
              complete : function(response){
                          
                       
                     var out = $.parseJSON(response.responseText);
                    
                     var output1 = out['success'];
                     console.log('output1 = ' + output1);
                     if ( output1 == 'true' ) {

                      var temp = filePath + 'template_images/' + fileName;
                      $('#imageEdit').find('#modalImageFileBox').val(temp);
                      $innerElement.attr('src', temp);
                      $('#imageEdit').modal('hide');

                     }
                      
             }

          });



          }
        }else{
          var informHTML = '<div class="alert alert-danger">'+
                                  '<strong>You have to Select a User first'+
                              '</div>';
              
          $('#imageEdit').find('#imageUploadAlertsContainer').html(informHTML);
        }


      
        

   }, this));



  }else{
    this.modalEdit.off( "change", "#imageInputFile");
    this.modalEdit.off( "click", ".imageEditApply");
    
  }

}


});