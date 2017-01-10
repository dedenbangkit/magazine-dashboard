$(function() {
var x = document.domain;

Dropzone.autoDiscover = false;


var frame, contents , headFrame, bodyFrame , styleTag;
var iframeInitialized = false;


apply_new_URL();



if ( (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)  ) { 


$("iframe.customIframe").load(function () {
  

frame = $('iframe.customIframe');
contents = frame.contents();
bodyFrame = contents.find('body');
headFrame = contents.find('head');
styleTag = contents.find('head').find('style:not([class])');
applyIFrameInitialStyles();
iframeInitialized = true;

});


}else{

document.domain = document.domain;


var iframe = $("iframe.customIframe")[0];
var loaderVar1 = setInterval(function(){
          
          if(iframe == null ){
               

         }
         else{
            
            frame = $('iframe.customIframe'); 
            contents = frame.contents();
            bodyFrame = contents.find('body');
            headFrame = contents.find('head');
            styleTag = contents.find('head').find('style:not([class])');
            applyIFrameInitialStyles();
            iframeInitialized = true;
            clearInterval(loaderVar1);
        }

    
    }, 700);
      


$("iframe.customIframe").load(function () {
  

frame = $('iframe.customIframe'); 
contents = frame.contents(); 
bodyFrame = contents.find('body');
headFrame = contents.find('head');
styleTag = contents.find('head').find('style:not([class])');
applyIFrameInitialStyles();
iframeInitialized = true;

});

}



if ( !iframeInitialized ) {

    var loaderVar = setInterval(function(){
          
          if (iframeInitialized) {
              clearInterval(loaderVar);
              $('.preloader').css("display", "none");

              if ( (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) ||
                   (navigator.userAgent.search("opera") >= 0 && navigator.userAgent.search("Chrome") < 0) ) { 
                $('#content-frame').css({"display": "block", "visibility": "visible"});
              }else{
                $('#content-frame').css({"display": "block", "visibility": "visible"});
              }

               

          }else{

              $('#content-frame').css({"display": "none", "visibility": "hidden"});
              
          }

    
    }, 400);
}else{

              $('.preloader').css("display", "none");

              if ( (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) ||
                   (navigator.userAgent.search("opera") >= 0 && navigator.userAgent.search("Chrome") < 0) ) { 
                $('#content-frame').css({"display": "visible", "visibility": "visible"});
              }else{
                $('#content-frame').css({"display": "block", "visibility": "visible"});
              }

               
}


if ( navigator.userAgent.search("Firefox") < 0 ){


    var loaderVarStylesFrames = setInterval(function(){
          
          if (iframeInitialized) {
              clearInterval(loaderVarStylesFrames);
              
              
              if ( $('head').find('style.carouselStyles').length > 0 ) {
                
                    $('head').find('.carouselStyles').each(function(){
                      var contentTemp1 = $(this).html();
                      var tempHTML = '<style type="text/css" class="carouselStyles">' + contentTemp1 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

             if ( $('head').find('style.carouselArrowStyles').length > 0 ) {
              
                    $('head').find('.carouselArrowStyles').each(function(){
                      var contentTemp2 = $(this).html();
                      
                      var tempHTML = '<style type="text/css" class="carouselArrowStyles">' + contentTemp2 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

            if ( $('head').find('style.fontFamilyStyles').length > 0 ) {
              
                    $('head').find('.fontFamilyStyles').each(function(){
                      var contentTemp3 = $(this).html();
                      var tempHTML = '<style type="text/css" class="fontFamilyStyles">' + contentTemp3 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  
                  if ( $('head').find('style.dropdownStyle').length > 0 ) {
              
                    $('head').find('.dropdownStyle').each(function(){
                      var contentTemp4 = $(this).html();
                      var tempHTML = '<style type="text/css" class="dropdownStyle">' + contentTemp4 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.navbarStyle').length > 0 ) {
              
                    $('head').find('.navbarStyle').each(function(){
                      var contentTemp5 = $(this).html();
                      var tempHTML = '<style type="text/css" class="navbarStyle">' + contentTemp5 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.navbarDropdownStyle').length > 0 ) {
              
                    $('head').find('.navbarDropdownStyle').each(function(){
                      var contentTemp6 = $(this).html();
                      var tempHTML = '<style type="text/css" class="navbarDropdownStyle">' + contentTemp6 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.userDefinedStyles').length > 0 ) {
              
                    $('head').find('.userDefinedStyles').each(function(){
                      var contentTemp7 = $(this).html();
                      var dataNumber = $(this).attr("data-number");
                      var tempHTML = '<style type="text/css" class="userDefinedStyles" data-number="' + dataNumber + '">' + contentTemp7 + '</style>';
                      
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }


                  

            if ( $('head').find('style.bodySettingsStyles').length > 0 ) {
              
                    $('head').find('.bodySettingsStyles').each(function(){
                      var contentTemp8 = $(this).html();

                      var startIndex = contentTemp8.indexOf('{');
                      var endIndex = contentTemp8.indexOf('}');
                      endIndex += 1;
                      var changed = contentTemp8.substring(startIndex,endIndex);

                      var tempHTML = '<style type="text/css" class="bodySettingsStyles">body' + changed + '</style>';
                      
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  

          }
    
    }, 800);


}else{


    var loaderVarStylesFrames = setInterval(function(){
          
         
           
           var response = false;
           var iframeNEW = $("iframe.customIframe")[0];
           if (iframeNEW) {
                var iframeContent = (iframeNEW.contentWindow || iframeNEW.contentDocument);
                     
                
                    
           }
           
              
           


          if (iframeInitialized && response) {
              clearInterval(loaderVarStylesFrames);
              
              
              if ( $('head').find('style.carouselStyles').length > 0 ) {
                
                    $('head').find('.carouselStyles').each(function(){
                      var contentTemp1 = $(this).html();
                      var tempHTML = '<style type="text/css" class="carouselStyles">' + contentTemp1 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

             if ( $('head').find('style.carouselArrowStyles').length > 0 ) {
              
                    $('head').find('.carouselArrowStyles').each(function(){
                      var contentTemp2 = $(this).html();
                      var tempHTML = '<style type="text/css" class="carouselArrowStyles">' + contentTemp2 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

            if ( $('head').find('style.fontFamilyStyles').length > 0 ) {
              
                    $('head').find('.fontFamilyStyles').each(function(){
                      var contentTemp3 = $(this).html();
                      var tempHTML = '<style type="text/css" class="fontFamilyStyles">' + contentTemp3 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  
                  if ( $('head').find('style.dropdownStyle').length > 0 ) {
              
                    $('head').find('.dropdownStyle').each(function(){
                      var contentTemp4 = $(this).html();
                      var tempHTML = '<style type="text/css" class="dropdownStyle">' + contentTemp4 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.navbarStyle').length > 0 ) {
              
                    $('head').find('.navbarStyle').each(function(){
                      var contentTemp5 = $(this).html();
                      var tempHTML = '<style type="text/css" class="navbarStyle">' + contentTemp5 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.navbarDropdownStyle').length > 0 ) {
              
                    $('head').find('.navbarDropdownStyle').each(function(){
                      var contentTemp6 = $(this).html();
                      var tempHTML = '<style type="text/css" class="navbarDropdownStyle">' + contentTemp6 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

                  if ( $('head').find('style.userDefinedStyles').length > 0 ) {
              
                    $('head').find('.userDefinedStyles').each(function(){
                      var contentTemp7 = $(this).html();
                      var dataNumber = $(this).attr("data-number");
                      var tempHTML = '<style type="text/css" class="userDefinedStyles" data-number="' + dataNumber + '">' + contentTemp7 + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }


                  

            if ( $('head').find('style.bodySettingsStyles').length > 0 ) {
              
                    $('head').find('.bodySettingsStyles').each(function(){
                      var contentTemp8 = $(this).html();

                      var startIndex = contentTemp8.indexOf('{');
                      var endIndex = contentTemp8.indexOf('}');
                      endIndex += 1;
                      
                      var changed = contentTemp8.substring(startIndex,endIndex);

                      var tempHTML = '<style type="text/css" class="bodySettingsStyles">body' + changed + '</style>';
                      $(tempHTML).appendTo(headFrame);

                    });
                        templateWithElements = true;
                  }

          }
    
    }, 800);



} 



var gMapsLoaded = false;

var myVar = setInterval(function(){

if (typeof google === 'object' && typeof google.maps === 'object') {
    gMapsLoaded = true;
    clearInterval(myVar);
}

if(gMapsLoaded){
  performSavedTemplateDroppables();
}

}, 400);





$( document ).on( 'click', '#revealParents', function (e) {

  

var $current = $(e.target);
var $button = $current.parent().closest('button');

if ( $button.hasClass('revealP') ) {
    
    $button.removeClass('revealP');
    $button.addClass('hideP');

    $(".borderedContainer").each(function() {

        $(this).css({'padding-top': '35px','padding-bottom': '10px'});

    });

    $(".borderedDivDroppable").each(function() {

        $(this).css({'padding-top': '35px','padding-bottom': '20px'});

    });

    $(".borderedRowDroppable").each(function() {

        $(this).css({'padding-top': '30px','padding-bottom': '15px'});

    });

    $(".borderedRowColDroppable").each(function() {

        $(this).css({'padding-top': '30px','padding-bottom': '30px'});

    });

    $(".borderedTableDroppable").each(function() {

        $(this).css({'padding-top': '40px','padding-bottom': '40px'});

    });

    resize();
    

}else{
    
    $button.removeClass('hideP');
    $button.addClass('revealP');

    $(".borderedContainer").each(function() {

        $(this).css({'padding-top': '0px','padding-bottom': '0px'});

    }); 

    $(".borderedDivDroppable").each(function() {

        $(this).css({'padding-top': '0px','padding-bottom': '0px'});

    });

    $(".borderedRowDroppable").each(function() {

        $(this).css({'padding-top': '0px','padding-bottom': '0px'});

    });

    $(".borderedRowColDroppable").each(function() {

        $(this).css({'padding-top': '0px','padding-bottom': '0px'});

    });

    $(".borderedTableDroppable").each(function() {

        $(this).css({'padding-top': '0px','padding-bottom': '0px'});

    });

    resize();

 
}

});



$( document ).on( 'click', '#edit-mode', function () {

$(".preview-container").empty();
$(".preview-container").addClass('preview-hidden');
$('.top-container').removeClass('preview-hidden');
$('.top-container').addClass('animated fadeInLeft');

$('#content-frame').removeClass('previewing');

var iframe = $("iframe.customIframe").contents();
iframe.find("body").empty();

$('iframe.customIframe').removeClass('animated fadeInRight');
$('iframe.customIframe').removeClass('animated pulse');
$("iframe.customIframe").addClass('preview-hidden');

$('.mobile').removeClass('active');
$('.tablet-sm').removeClass('active');
$('.tablet-lg').removeClass('active');
$('.desktop').removeClass('active');
$('#edit-mode').addClass('active');

$('#content-frame').attr('data-preview','');


resize();

});

function applyEditMode(){
$(".preview-container").empty();
$(".preview-container").addClass('preview-hidden');
$('.top-container').removeClass('preview-hidden');
$('.top-container').addClass('animated fadeInLeft');

$('#content-frame').removeClass('previewing');

var iframe = $("iframe.customIframe").contents();
iframe.find("body").empty();

$('iframe.customIframe').removeClass('animated fadeInRight');
$('iframe.customIframe').removeClass('animated pulse');
$("iframe.customIframe").addClass('preview-hidden');

$('.mobile').removeClass('active');
$('.tablet-sm').removeClass('active');
$('.tablet-lg').removeClass('active');
$('.desktop').removeClass('active');
$('#edit-mode').addClass('active');

$('#content-frame').attr('data-preview','');


resize();

}


function preview( previewMode ){
  

applyIconsOpacity();

$('.top-container').removeClass('animated fadeInLeft');
$('.top-container').addClass('preview-hidden');

 
if(!$('#content-frame').hasClass('previewing')){

  $('#content-frame').addClass('previewing');

  if (previewMode == 'mobile'){
        $('#content-frame').attr('data-preview','mobile');
   }else if (previewMode == 'tablet-sm'){
        $('#content-frame').attr('data-preview','tablet-sm');
   }else if (previewMode == 'tablet-lg'){
        $('#content-frame').attr('data-preview','tablet-lg');
   }else if (previewMode == 'desktop'){
        $('#content-frame').attr('data-preview','desktop');
   }

  
  $(".preview-container").append( $('#content-frame').clone() );

  
  var $borderedContainer = $(".preview-container").find('.borderedContainer');
  $borderedContainer.removeClass('borderedContainer');
  $borderedContainer.removeClass('ui-droppable');
  $borderedContainer.removeAttr("data-id");
  $borderedContainer.removeAttr("style");
  $borderedContainer.find('.container-description').remove();
  $borderedContainer.find('.container-edit-icons').remove();
  

  
   var $borderedRowDroppable = $(".preview-container").find('.borderedRowDroppable');
   $borderedRowDroppable.removeClass('borderedRowDroppable');
   $borderedRowDroppable.removeClass('ui-droppable');
   $borderedRowDroppable.removeAttr("data-id");
   $borderedRowDroppable.removeAttr("style");
   $borderedRowDroppable.find('.row-description').remove();
   $borderedRowDroppable.find('.rowsingle-description').remove();
   $borderedRowDroppable.find('.rowsingle-description').remove();
   $borderedRowDroppable.find('.row-edit').remove();
   $borderedRowDroppable.find('.row-delete').remove();

   
   $borderedRowDroppable.find('.borderedRowColDroppable').each(function() {
    $(this).removeClass('borderedRowColDroppable');
   $(this).removeClass('ui-droppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   });

   $(".preview-container").find('.colRow-edit-icons').remove();
   $(".preview-container").find('.row-edit-icons').remove();


  
  var $pElement = $(".preview-container").find('.pElement').each(function() {
        $(this).removeClass('borderedParagraph');

        $(this).removeClass('headElement');
        $(this).removeClass('parElement');
        $(this).removeClass('txtElement');
   
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.Medium').removeClass('Medium');     
        $(this).find('.Medium-rich').removeClass('Medium-rich');   

    if ( $(this).find('p').length > 0 ){
        $(this).find('.paragraph-description').remove();
        $(this).find('.paragraph-edit-icons').remove();

        var $pEl = $(this).find('p');
        $pEl.removeClass('childOfBorderedParagraph');

        $pEl.find('.medium-b').removeClass('medium-b');
        $pEl.find('.medium-u').removeClass('medium-u');
        $pEl.find('.medium-i').removeClass('medium-i');
        $pEl.find('.medium-strike').removeClass('medium-strike');

        $pEl.removeAttr("contenteditable");
        $pEl.find('br').removeAttr("contenteditable");
        
        $pEl.removeAttr("style");

        $(this).replaceWith($pEl );
      }else if ( $(this).find('.heading-description').length > 0 ){

        $(this).find('.heading-description').remove();
        $(this).find('.heading-edit-icons').remove();

        if( $(this).find('h1').length > 0 ){
          var $hEl = $(this).find('h1');
        }else if( $(this).find('h2').length > 0 ){
          var $hEl = $(this).find('h2');
        }if( $(this).find('h3').length > 0 ){
          var $hEl = $(this).find('h3');
        }if( $(this).find('h4').length > 0 ){
          var $hEl = $(this).find('h4');
        }

        $hEl.removeClass('childOfBorderedParagraph');

        $hEl.find('.medium-b').removeClass('medium-b');
        $hEl.find('.medium-u').removeClass('medium-u');
        $hEl.find('.medium-i').removeClass('medium-i');
        $hEl.find('.medium-strike').removeClass('medium-strike');

        $hEl.removeAttr("contenteditable");
        $hEl.find('br').removeAttr("contenteditable");
        
        $hEl.removeAttr("style");

        $(this).replaceWith($hEl );
      }else if($(this).find('span.childOfBorderedParagraph').length > 0){
        $(this).find('.span-description').remove();
        $(this).find('.span-edit-icons').remove();

        var $spanEl = $(this).find('span.childOfBorderedParagraph');
        $spanEl.removeClass('childOfBorderedParagraph');

        $spanEl.find('.medium-b').removeClass('medium-b');
        $spanEl.find('.medium-u').removeClass('medium-u');
        $spanEl.find('.medium-i').removeClass('medium-i');
        $spanEl.find('.medium-strike').removeClass('medium-strike');

        $spanEl.removeClass('divSpanAsBlock');
        $spanEl.removeClass('divSpanAsInline');
        $spanEl.removeAttr("contenteditable");
        $spanEl.find('br').removeAttr("contenteditable");
        
        $spanEl.removeAttr("style");

        $(this).replaceWith($spanEl );
      }


    });

  
  
   var $imgElement = $(".preview-container").find('.imgElement').each(function() {
   $(this).removeClass('borderedParagraph');

   if ( $(this).hasClass('imgResponsive') ) {
            $(this).find('img').removeClass('imgTestResponsive');
            $(this).find('img').addClass('img-responsive');
   }
   
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.img-description').remove();
   
   
   $(this).find('.img-edit-icons').remove();

   var $img = $(this).find('img');
   $(this).replaceWith($img );

   });
  
   var $borderedDivDroppable = $(".preview-container").find('.borderedDivDroppable');
   
   
   
   $borderedDivDroppable.removeClass('borderedDivDroppable');
   $borderedDivDroppable.removeClass('customDiv');
   $borderedDivDroppable.removeClass('ui-droppable');
   $borderedDivDroppable.removeAttr("data-id");
   
   $borderedDivDroppable.removeAttr("style");
   $borderedDivDroppable.removeClass('borderedDivAlertSuccess');
   $borderedDivDroppable.removeClass('borderedDivAlertInfo');
   $borderedDivDroppable.removeClass('borderedDivAlertWarning');
   $borderedDivDroppable.removeClass('borderedDivAlertDanger');

   $borderedDivDroppable.removeClass('borderedDivWell');
   $borderedDivDroppable.removeClass('borderedDivJumbotron');

   $borderedDivDroppable.find('.div-container-description').remove();
   
   
   $borderedDivDroppable.find('.div-container-edit-icons').remove();

  
   var $borderedTableDroppable = $(".preview-container").find('.borderedTableDroppable').each(function() {
   $(this).removeClass('customTable');
   $(this).removeClass('borderedTableDroppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.table-description').remove();
   $(this).find('.table-edit-icons').remove();

   var $tableRow = $(this).find('.borderedTableRow');
   $tableRow.removeAttr('style');

   var $table = $(this).find('.tableElement');
   $table.removeClass('tableElement');
   $table.removeAttr('style');

   $(this).find('.borderedTableRow').removeClass('borderedTableRow');
   
   var $tableCell = $(this).find('.borderedTableCell');
   $tableCell.removeClass('borderedTableCell').removeClass('ui-droppable');
   $tableCell.find('.tablecell-description').remove();
   $tableCell.find('.table-cell-edit-icons').remove();
   $tableCell.removeAttr("style");

   $(this).before($table.clone());
   $(this).remove();
   $table.remove();
 });
  

   $(".preview-container").find('.borderedButton').each(function() {
       $(this).removeClass('buttonElement');
       $(this).removeClass('borderedButton');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('button').removeAttr("style"); 

       $(this).find('.button-description').remove();
       $(this).find('.button-edit-icons').remove();

       var $buttonEl = $(this).find('button');
       $(this).replaceWith($buttonEl );

  });

  $(".preview-container").find('.borderedButtonGroup').each(function() {

    if ( $(this).find('.btn-group-justified').length == 0 ){

       $(this).removeClass('buttonGroupElement');
       $(this).removeClass('borderedButtonGroup');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.btn-group').removeAttr("style"); 
       $(this).find('.btn-group').removeClass("btnGroupInner"); 

       $(this).find('.buttonGroup-description').remove();
       $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

       $buttonGroupEl.removeAttr('id');

       $(this).replaceWith($buttonGroupEl );

     }else{

        $(this).removeClass('buttonGroupElement');
        $(this).removeClass('borderedButtonGroup');
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.btn-group-justified').removeClass("btnGroupInner"); 
        $(this).find('.btn-group-justified').removeAttr("style"); 

        $(this).find('.buttonGroup-description').remove();
        $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group-justified');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') && (item != 'btn-group-justified') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

      $buttonGroupEl.removeAttr('id');

      $(this).replaceWith($buttonGroupEl );

     }

  });

$(".preview-container").find('.borderedDropDown').each(function() {
       $(this).removeClass('dropDownElement');
       $(this).removeClass('borderedDropDown');
       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.dropDown-description').remove();
       $(this).find('.dropDown-edit-icons').remove();

       $(this).find('div.dropdown').removeAttr("style"); 
       var $dropdownEl = $(this).find('div.dropdown');

       var classList = $dropdownEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'dropdown') ){
                 $dropdownEl.removeClass(item);
          }
      });

       $dropdownEl.removeAttr('id');

       $(this).replaceWith($dropdownEl );

  });

$(".preview-container").find('.borderedNavbar').each(function() {
       
       $(this).find('.navbarDescription').remove();
       $(this).find('.navbarEditIcons').remove();

       $(this).find('.removePreviewDropdownLink').removeClass('removePreviewDropdownLink');
       $(this).find('.removePreviewMainLink').removeClass('removePreviewMainLink'); 
       $(this).find('.customDropDownNav').removeClass('customDropDownNav');

       $(this).find('.navbar').removeAttr("style"); 
       var $navbarEl = $(this).find('.navbar');
       if ( $(this).hasClass('navBarFixedTop') ) {
          $navbarEl.addClass('navbar-fixed-top');
       }
       $(this).replaceWith($navbarEl );

  });

$(".preview-container").find('.borderedCarousel').each(function() {
       
       $(this).find('.carouselDescription').remove();
       $(this).find('.carouselIcons').remove();

       $(this).find('.carouselItem').each(function() {
            $(this).removeClass('carouselItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });


       if ( $(this).find('.carouselOptions').find('.carouselShowArrows').attr('data-value') == 'false' ) {

        if ( $(this).find('.carousel-control').length > 0 ){
          $(this).find('.carousel-control').remove();
        }

       }

       if ( $(this).find('.carouselOptions').find('.carouselShowIndicators').attr('data-value') == 'false' ) {

        if ( $(this).find('ol.carousel-indicators').length > 0 ){
          $(this).find('ol.carousel-indicators').remove();
        }

       }


       
       $(this).find('.carousel').removeAttr("style"); 
       var $carouselContainerEl = $(this).find('.carousel');
       $(this).replaceWith($carouselContainerEl );

  });

$(".preview-container").find('.borderedOrderedListDroppable').each(function() {
       
       $(this).find('.orderedListDescription').remove();
       $(this).find('.orderedListEditIcons').remove();

       $(this).find('ol').find('li').each(function(){
            $(this).removeClass('orderedListItem');
            $(this).removeClass('borderedOrderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyleType = $(this).find('ol').css('list-style-type');
       $(this).find('ol').removeAttr("style"); 
       $(this).find('ol').css('list-style-type',listStyleType);

       var $olEl = $(this).find('ol');
       $(this).replaceWith($olEl );

  });

$(".preview-container").find('.borderedUnorderedListDroppable').each(function() {
       
       $(this).find('.unorderedListDescription').remove();
       $(this).find('.unorderedListEditIcons').remove();

       $(this).find('ul').find('li').each(function(){
            $(this).removeClass('unorderedListItem');
            $(this).removeClass('borderedUnorderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyle = $(this).find('ul').css('list-style');
       $(this).find('ul').removeAttr("style"); 
       $(this).find('ul').css('list-style',listStyle);
       
       var $ulEl = $(this).find('ul');
       $(this).replaceWith($ulEl );

  });

$(".preview-container").find('.borderedListGroupDroppable').each(function() {
       
       $(this).find('.listGroupItemDescription').remove();
       $(this).find('.listGroupItemEditIcons').remove();

       $(this).find('.list-group').find('.list-group-item').each(function(){
            $(this).removeClass('listGroupItemInside');
            $(this).removeClass('borderedListGroupItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       $(this).find('.list-group').removeAttr("style"); 
       var $listGroupEl = $(this).find('.list-group');
       $(this).replaceWith($listGroupEl );

  });

$(".preview-container").find('.borderedPanelDroppable').each(function() {
       
       $(this).find('.panel').find('.borderedPanelItem').each(function(){
            $(this).removeClass('insidePanel');
            $(this).removeClass('borderedPanelItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");

            if ( $(this).find('.panelHeadingDescription').length > 0) {
                $(this).find('.panelHeadingDescription').remove();
                $(this).find('.panelHeading-edit-icons').remove();
            }else if ( $(this).find('.panelContent-description').length > 0) {
                $(this).find('.panelContent-description').remove();
                $(this).find('.panelContent-edit-icons').remove();
            }else if ( $(this).find('.panelFooter-description').length > 0) {
                $(this).find('.panelFooter-description').remove();
                $(this).find('.panelFooter-edit-icons').remove();
            }

       });

       $(this).find('.panel').removeAttr("style"); 
       var $panelEl = $(this).find('.panel');
       $(this).replaceWith($panelEl );

  });

$(".preview-container").find('.borderedResponsiveEmbed').each(function() {
       
       $(this).find('.responsiveEmbedDescription').remove();
       $(this).find('.responsiveEmbedIcons').remove();

       $(this).find('.embed-responsive').removeAttr("style"); 
       var $embedResponsiveEl = $(this).find('.embed-responsive');
       $(this).replaceWith($embedResponsiveEl );

  });




$(".preview-container").find('.formGroupElement').each(function() {

       var $formGroupEl = $(this).find('.formGroupInside');
       $(this).replaceWith($formGroupEl );

});


$(".preview-container").find('.formGroupInside').each(function() {

       $(this).removeClass('formGroupInside');
       $(this).removeClass('borderedFormGroupElement');
       $(this).removeClass('ui-droppable');
       $(this).removeAttr("style"); 

       $(this).find('.borderedInput').each(function() {

            $(this).removeClass('inputElement');
            $(this).removeClass('borderedInput');
            $(this).removeAttr("data-id"); 

            if ( $(this).find('label').length > 0) {

                  var $labelEl = $(this).find('label');
                  $(this).replaceWith($labelEl );

            }

            if ( $(this).find('textarea').length > 0) {

                  var $textareaEl = $(this).find('textarea');
                  $(this).replaceWith($textareaEl );

            }

            if ( $(this).find('select').length > 0) {

                  var $selectEl = $(this).find('select');
                  $(this).replaceWith($selectEl );

            }

            if ( $(this).find('input').length > 0) {

                  var $inputEl = $(this).find('input');
                  $(this).replaceWith($inputEl );

            }



       });


});



$(".preview-container").find('.borderedVerticalInput').each(function() {
      
       $(this).find('.form-group').removeClass("element-edit"); 
       $(this).find('.form-group').removeClass("borderedFormGroupElement"); 
       $(this).find('.form-group').removeClass("ui-droppable"); 
       
       $(this).find('.form-group').removeAttr("style"); 
       var $formGroupEl = $(this).find('.form-group');
       $(this).replaceWith($formGroupEl );

  });




$(".preview-container").find('.borderedInput').each(function() {
      
       
       if ( $(this).find('label').length > 0) {
             
             $(this).find('label').removeAttr("style"); 
             var $labelEl = $(this).find('label');
             $(this).replaceWith($labelEl );
       }else if ($(this).find('textarea').length > 0) {
             
             $(this).find('textarea').removeAttr("style"); 
             var $textareaEl = $(this).find('textarea');
             $(this).replaceWith($textareaEl );

       }else if ($(this).find('select').length > 0) {
             
             $(this).find('select').removeAttr("style"); 
             var $selectEl = $(this).find('select');
             $(this).replaceWith($selectEl );

       }
       else{
       
             $(this).find('input').removeAttr("style"); 
             var $inputEl = $(this).find('input');
             $(this).replaceWith($inputEl );
       }

  });



  
   $(".preview-container").find('.ui-sortable').removeClass('ui-sortable');
   $(".preview-container").find('.ui-sortable-handle').removeClass('ui-sortable-handle');
   $(".preview-container").find('.hover').removeClass('hover');

   $(".preview-container").find('.narrowBorderedContainer').removeClass('narrowBorderedContainer');

   $(".preview-container").find('.rowColBac').removeClass('rowColBac');

   $(".preview-container").find('.findCustomClassName').remove();
   $(".preview-container").find('.findCustomIDName').remove();
   $(".preview-container").find('.colRow-description').remove();
  

  
  var mapID = [];
  var mapZoom = [];
  var mapLat = [];
  var mapLng = [];
  

  var mapIDTemp;
  var mapZoomTemp;
  var mapLatTemp;
  var mapLngTemp;
  
  $(".preview-container").find('.borderedGmapsElement').each(function(){
         
        
        var $optionsel = $(this).find('.gmapsAttributes');
        mapIDTemp = $optionsel.attr('data-id');
        if( mapID.length == 0 ){mapID[0] = mapIDTemp;}else{mapID.push(mapIDTemp);}

        mapZoomTemp = $optionsel.attr('data-zoom');
        if( mapZoom.length == 0 ){mapZoom[0] = mapZoomTemp;}else{mapZoom.push(mapZoomTemp);}

        mapLatTemp = $optionsel.attr('data-lat');
        if( mapLat.length == 0 ){mapLat[0] = mapLatTemp;}else{mapLat.push(mapLatTemp);}

        mapLngTemp = $optionsel.attr('data-lng');
        if( mapLng.length == 0 ){mapLng[0] = mapLngTemp;}else{mapLng.push(mapLngTemp);}

        
        
      });


$(".preview-container").find('.borderedGmapsElement').each(function() {
       $(this).find('.gmapsdescription').remove();
       $(this).find('.gmapsEditIcons').remove();

       var $gmapsElement = $(this).find('.gmapsElement');
       $(this).replaceWith($gmapsElement );
       $(this).removeClass('borderedGmapsElementCreated');

  });

  var $elToclone =  $(".preview-container").find('#content-frame').children();
   
   $(".preview-container").append($elToclone);
   $(".preview-container").find('#content-frame').remove();
   
   
   
   


   var iframe = $("iframe.customIframe").contents();
   iframe.find("body").append($elToclone);

   $("iframe.customIframe").removeClass('preview-hidden');
   $('iframe.customIframe').addClass('animated fadeInRight');

   
   var iframeNEW = $("iframe.customIframe")[0];
   if (iframeNEW) {
      var iframeContent = (iframeNEW.contentWindow || iframeNEW.contentDocument);

      
      for (var k=0;k<mapID.length;k++) {

        var mapIDNEW = mapID[k];
        var mapZoomNEW = mapZoom[k];
        var mapLatNEW = mapLat[k];
        var mapLngNEW = mapLng[k];
        

        
        iframeContent.initializeGmaps(mapIDNEW,mapZoomNEW,mapLatNEW,mapLngNEW);
      }

    }



if (previewMode == 'mobile'){

   $("iframe.customIframe").css({'width' : '740px', 'max-width' : '740px'});

   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "30%");

 }else if (previewMode == 'tablet-sm'){
   $("iframe.customIframe").css({'width' : '820px', 'max-width' : '820px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "25%");

 }else if (previewMode == 'tablet-lg'){
   $("iframe.customIframe").css({'width' : '1024px', 'max-width' : '1024px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "20%");

 }else if (previewMode == 'desktop'){
   $("iframe.customIframe").css({'width' : '1340px', 'max-width' : '1340px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "15%");
 }
   
}else{

  
  if (previewMode == 'mobile'){
    
   $('iframe.customIframe').removeClass('animated fadeInRight');
   $('iframe.customIframe').removeClass('animated pulse');
   $('iframe.customIframe').addClass('animated pulse');

   $("iframe.customIframe").css({'width' : '740px', 'max-width' : '740px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);

   $("iframe.customIframe").css('margin-left', "30%");
   
   $('#content-frame').attr('data-preview','mobile');

 }else if (previewMode == 'tablet-sm'){
  
  $('iframe.customIframe').removeClass('animated fadeInRight');
   $('iframe.customIframe').removeClass('animated pulse');
  $('iframe.customIframe').addClass('animated pulse');

   $("iframe.customIframe").css({'width' : '820px', 'max-width' : '820px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);

   $("iframe.customIframe").css('margin-left', "25%");

   $('#content-frame').attr('data-preview','tablet-sm');

 }else if (previewMode == 'tablet-lg'){
  
  $('iframe.customIframe').removeClass('animated fadeInRight');
   $('iframe.customIframe').removeClass('animated pulse');
  $('iframe.customIframe').addClass('animated pulse');

   $("iframe.customIframe").css({'width' : '1024px', 'max-width' : '1024px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);

   $("iframe.customIframe").css('margin-left', "20%");

   $('#content-frame').attr('data-preview','tablet-lg');

 }else if (previewMode == 'desktop'){
  
  $('iframe.customIframe').removeClass('animated fadeInRight');
   $('iframe.customIframe').removeClass('animated pulse');
  $('iframe.customIframe').addClass('animated pulse');

   $("iframe.customIframe").css({'width' : '1340px', 'max-width' : '1340px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);

   $("iframe.customIframe").css('margin-left', "15%");

   $('#content-frame').attr('data-preview','desktop');
 }

}

} 



function previewFromInspector( previewMode ){

  

if ( !$('.top-container').hasClass('preview-hidden') ) {
        $('.top-container').addClass('preview-hidden');
}

$(".preview-container").empty();

var iframe = $("iframe.customIframe").contents();
iframe.find("body").empty();

if (previewMode == 'mobile'){
      $('#content-frame').attr('data-preview','mobile');

      $('#edit-mode').removeClass('active');
      $('.tablet-sm').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $('.desktop').removeClass('active');
      $('.mobile').addClass('active');
}else if (previewMode == 'tablet-sm'){
      $('#content-frame').attr('data-preview','tablet-sm');

      $('#edit-mode').removeClass('active');
      $('.mobile').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $('.desktop').removeClass('active');
      $('.tablet-sm').addClass('active');
}else if (previewMode == 'tablet-lg'){
      $('#content-frame').attr('data-preview','tablet-lg');

      $('#edit-mode').removeClass('active');
      $('.mobile').removeClass('active');
      $('.tablet-sm').removeClass('active');
      $('.desktop').removeClass('active');
      $('.tablet-lg').addClass('active');
}else if (previewMode == 'desktop'){
      $('#content-frame').attr('data-preview','desktop');

      $('#edit-mode').removeClass('active');
      $('.mobile').removeClass('active');
      $('.tablet-sm').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $('.desktop').addClass('active'); 
}

  
  $(".preview-container").append( $('#content-frame').clone() );

 
  var $borderedContainer = $(".preview-container").find('.borderedContainer');
  $borderedContainer.removeClass('borderedContainer');
  $borderedContainer.removeClass('ui-droppable');
  $borderedContainer.removeAttr("data-id");
  $borderedContainer.removeAttr("style");
  $borderedContainer.find('.container-description').remove();
  $borderedContainer.find('.container-edit-icons').remove();
  


   var $borderedRowDroppable = $(".preview-container").find('.borderedRowDroppable');
   $borderedRowDroppable.removeClass('borderedRowDroppable');
   $borderedRowDroppable.removeClass('ui-droppable');
   $borderedRowDroppable.removeAttr("data-id");
   $borderedRowDroppable.removeAttr("style");
   $borderedRowDroppable.find('.row-description').remove();
   $borderedRowDroppable.find('.rowsingle-description').remove();
   $borderedRowDroppable.find('.rowsingle-description').remove();
   $borderedRowDroppable.find('.row-edit').remove();
   $borderedRowDroppable.find('.row-delete').remove();

   
   $borderedRowDroppable.find('.borderedRowColDroppable').each(function() {
    $(this).removeClass('borderedRowColDroppable');
   $(this).removeClass('ui-droppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   });

   $(".preview-container").find('.colRow-edit-icons').remove();
   $(".preview-container").find('.row-edit-icons').remove();

  
  
  
  var $pElement = $(".preview-container").find('.pElement').each(function() {
        $(this).removeClass('borderedParagraph');

        $(this).removeClass('headElement');
        $(this).removeClass('parElement');
        $(this).removeClass('txtElement');
   
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.Medium').removeClass('Medium');     
        $(this).find('.Medium-rich').removeClass('Medium-rich');   

    if ( $(this).find('p').length > 0 ){
        $(this).find('.paragraph-description').remove();
        $(this).find('.paragraph-edit-icons').remove();

        var $pEl = $(this).find('p');
        $pEl.removeClass('childOfBorderedParagraph');

        $pEl.find('.medium-b').removeClass('medium-b');
        $pEl.find('.medium-u').removeClass('medium-u');
        $pEl.find('.medium-i').removeClass('medium-i');
        $pEl.find('.medium-strike').removeClass('medium-strike');

        $pEl.removeAttr("contenteditable");
        $pEl.find('br').removeAttr("contenteditable");
        
        $pEl.removeAttr("style");

        $(this).replaceWith($pEl );
      }else if ( $(this).find('.heading-description').length > 0 ){

        $(this).find('.heading-description').remove();
        $(this).find('.heading-edit-icons').remove();

        if( $(this).find('h1').length > 0 ){
          var $hEl = $(this).find('h1');
        }else if( $(this).find('h2').length > 0 ){
          var $hEl = $(this).find('h2');
        }if( $(this).find('h3').length > 0 ){
          var $hEl = $(this).find('h3');
        }if( $(this).find('h4').length > 0 ){
          var $hEl = $(this).find('h4');
        }

        $hEl.removeClass('childOfBorderedParagraph');

        $hEl.find('.medium-b').removeClass('medium-b');
        $hEl.find('.medium-u').removeClass('medium-u');
        $hEl.find('.medium-i').removeClass('medium-i');
        $hEl.find('.medium-strike').removeClass('medium-strike');

        $hEl.removeAttr("contenteditable");
        $hEl.find('br').removeAttr("contenteditable");
        
        $hEl.removeAttr("style");

        $(this).replaceWith($hEl );
      }else if($(this).find('span.childOfBorderedParagraph').length > 0){
        $(this).find('.span-description').remove();
        $(this).find('.span-edit-icons').remove();

        var $spanEl = $(this).find('span.childOfBorderedParagraph');
        $spanEl.removeClass('childOfBorderedParagraph');

        $spanEl.find('.medium-b').removeClass('medium-b');
        $spanEl.find('.medium-u').removeClass('medium-u');
        $spanEl.find('.medium-i').removeClass('medium-i');
        $spanEl.find('.medium-strike').removeClass('medium-strike');

        $spanEl.removeClass('divSpanAsBlock');
        $spanEl.removeClass('divSpanAsInline');
        $spanEl.removeAttr("contenteditable");
        $spanEl.find('br').removeAttr("contenteditable");
        
        $spanEl.removeAttr("style");

        $(this).replaceWith($spanEl );
      }


    });
  
  
   var $imgElement = $(".preview-container").find('.imgElement').each(function() {
   $(this).removeClass('borderedParagraph');

   if ( $(this).hasClass('imgResponsive') ) {
            $(this).find('img').removeClass('imgTestResponsive');
            $(this).find('img').addClass('img-responsive');
   }
   
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.img-description').remove();
   
   
   $(this).find('.img-edit-icons').remove();

   var $img = $(this).find('img');
   $(this).replaceWith($img );

   });
  

   var $borderedDivDroppable = $(".preview-container").find('.borderedDivDroppable');
   
   
   $borderedDivDroppable.removeClass('borderedDivDroppable');
   $borderedDivDroppable.removeClass('customDiv');
   $borderedDivDroppable.removeClass('ui-droppable');
   $borderedDivDroppable.removeAttr("data-id");
   
   $borderedDivDroppable.removeAttr("style");
   $borderedDivDroppable.removeClass('borderedDivAlertSuccess');
   $borderedDivDroppable.removeClass('borderedDivAlertInfo');
   $borderedDivDroppable.removeClass('borderedDivAlertWarning');
   $borderedDivDroppable.removeClass('borderedDivAlertDanger');

   $borderedDivDroppable.removeClass('borderedDivWell');
   $borderedDivDroppable.removeClass('borderedDivJumbotron');

   $borderedDivDroppable.find('.div-container-description').remove();
   
   
   $borderedDivDroppable.find('.div-container-edit-icons').remove();

  
   var $borderedTableDroppable = $(".preview-container").find('.borderedTableDroppable').each(function() {
   $(this).removeClass('customTable');
   $(this).removeClass('borderedTableDroppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.table-description').remove();
   $(this).find('.table-edit-icons').remove();

   var $tableRow = $(this).find('.borderedTableRow');
   $tableRow.removeAttr('style');

   var $table = $(this).find('.tableElement');
   $table.removeClass('tableElement');
   $table.removeAttr('style');

   $(this).find('.borderedTableRow').removeClass('borderedTableRow');
   
   var $tableCell = $(this).find('.borderedTableCell');
   $tableCell.removeClass('borderedTableCell').removeClass('ui-droppable');
   $tableCell.find('.tablecell-description').remove();
   $tableCell.find('.table-cell-edit-icons').remove();
   $tableCell.removeAttr("style");

   $(this).before($table.clone());
   $(this).remove();
   $table.remove();
 });
  

   $(".preview-container").find('.borderedButton').each(function() {
       $(this).removeClass('buttonElement');
       $(this).removeClass('borderedButton');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('button').removeAttr("style"); 

       $(this).find('.button-description').remove();
       $(this).find('.button-edit-icons').remove();

       var $buttonEl = $(this).find('button');
       $(this).replaceWith($buttonEl );

  });

  $(".preview-container").find('.borderedButtonGroup').each(function() {

    if ( $(this).find('.btn-group-justified').length == 0 ){

       $(this).removeClass('buttonGroupElement');
       $(this).removeClass('borderedButtonGroup');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.btn-group').removeAttr("style"); 
       $(this).find('.btn-group').removeClass("btnGroupInner"); 

       $(this).find('.buttonGroup-description').remove();
       $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

       $buttonGroupEl.removeAttr('id');

       $(this).replaceWith($buttonGroupEl );

     }else{

        $(this).removeClass('buttonGroupElement');
        $(this).removeClass('borderedButtonGroup');
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.btn-group-justified').removeClass("btnGroupInner"); 
        $(this).find('.btn-group-justified').removeAttr("style"); 

        $(this).find('.buttonGroup-description').remove();
        $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group-justified');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') && (item != 'btn-group-justified') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

      $buttonGroupEl.removeAttr('id');

      $(this).replaceWith($buttonGroupEl );

     }

  });

$(".preview-container").find('.borderedDropDown').each(function() {
       $(this).removeClass('dropDownElement');
       $(this).removeClass('borderedDropDown');
       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.dropDown-description').remove();
       $(this).find('.dropDown-edit-icons').remove();

       $(this).find('div.dropdown').removeAttr("style"); 
       var $dropdownEl = $(this).find('div.dropdown');

       var classList = $dropdownEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'dropdown') ){
                 $dropdownEl.removeClass(item);
          }
      });

       $dropdownEl.removeAttr('id');

       $(this).replaceWith($dropdownEl );

  });

$(".preview-container").find('.borderedNavbar').each(function() {
       
       $(this).find('.navbarDescription').remove();
       $(this).find('.navbarEditIcons').remove();

       $(this).find('.removePreviewDropdownLink').removeClass('removePreviewDropdownLink');
       $(this).find('.removePreviewMainLink').removeClass('removePreviewMainLink'); 
       $(this).find('.customDropDownNav').removeClass('customDropDownNav');

       $(this).find('.navbar').removeAttr("style"); 
       var $navbarEl = $(this).find('.navbar');
       $(this).replaceWith($navbarEl );

  });

$(".preview-container").find('.borderedCarousel').each(function() {
       
       $(this).find('.carouselDescription').remove();
       $(this).find('.carouselIcons').remove();

       $(this).find('.carouselItem').each(function() {
            $(this).removeClass('carouselItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });


       if ( $(this).find('.carouselOptions').find('.carouselShowArrows').attr('data-value') == 'false' ) {

        if ( $(this).find('.carousel-control').length > 0 ){
          $(this).find('.carousel-control').remove();
        }

       }

       if ( $(this).find('.carouselOptions').find('.carouselShowIndicators').attr('data-value') == 'false' ) {

        if ( $(this).find('ol.carousel-indicators').length > 0 ){
          $(this).find('ol.carousel-indicators').remove();
        }

       }



       
       
       $(this).find('.carousel').removeAttr("style"); 
       var $carouselContainerEl = $(this).find('.carousel');
       $(this).replaceWith($carouselContainerEl );

  });

$(".preview-container").find('.borderedOrderedListDroppable').each(function() {
       
       $(this).find('.orderedListDescription').remove();
       $(this).find('.orderedListEditIcons').remove();

       $(this).find('ol').find('li').each(function(){
            $(this).removeClass('orderedListItem');
            $(this).removeClass('borderedOrderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyleType = $(this).find('ol').css('list-style-type');
       $(this).find('ol').removeAttr("style"); 
       $(this).find('ol').css('list-style-type',listStyleType);

       var $olEl = $(this).find('ol');
       $(this).replaceWith($olEl );

  });

$(".preview-container").find('.borderedUnorderedListDroppable').each(function() {
       
       $(this).find('.unorderedListDescription').remove();
       $(this).find('.unorderedListEditIcons').remove();

       $(this).find('ul').find('li').each(function(){
            $(this).removeClass('unorderedListItem');
            $(this).removeClass('borderedUnorderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyle = $(this).find('ul').css('list-style');
       $(this).find('ul').removeAttr("style"); 
       $(this).find('ul').css('list-style',listStyle);
       
       var $ulEl = $(this).find('ul');
       $(this).replaceWith($ulEl );

  });

$(".preview-container").find('.borderedListGroupDroppable').each(function() {
       
       $(this).find('.listGroupItemDescription').remove();
       $(this).find('.listGroupItemEditIcons').remove();

       $(this).find('.list-group').find('.list-group-item').each(function(){
            $(this).removeClass('listGroupItemInside');
            $(this).removeClass('borderedListGroupItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       $(this).find('.list-group').removeAttr("style"); 
       var $listGroupEl = $(this).find('.list-group');
       $(this).replaceWith($listGroupEl );

  });

$(".preview-container").find('.borderedPanelDroppable').each(function() {
       
       $(this).find('.panel').find('.borderedPanelItem').each(function(){
            $(this).removeClass('insidePanel');
            $(this).removeClass('borderedPanelItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");

            if ( $(this).find('.panelHeadingDescription').length > 0) {
                $(this).find('.panelHeadingDescription').remove();
                $(this).find('.panelHeading-edit-icons').remove();
            }else if ( $(this).find('.panelContent-description').length > 0) {
                $(this).find('.panelContent-description').remove();
                $(this).find('.panelContent-edit-icons').remove();
            }else if ( $(this).find('.panelFooter-description').length > 0) {
                $(this).find('.panelFooter-description').remove();
                $(this).find('.panelFooter-edit-icons').remove();
            }

       });

       $(this).find('.panel').removeAttr("style"); 
       var $panelEl = $(this).find('.panel');
       $(this).replaceWith($panelEl );

  });

$(".preview-container").find('.borderedResponsiveEmbed').each(function() {
       
       $(this).find('.responsiveEmbedDescription').remove();
       $(this).find('.responsiveEmbedIcons').remove();

       $(this).find('.embed-responsive').removeAttr("style"); 
       var $embedResponsiveEl = $(this).find('.embed-responsive');
       $(this).replaceWith($embedResponsiveEl );

  });




$(".preview-container").find('.formGroupElement').each(function() {

       var $formGroupEl = $(this).find('.formGroupInside');
       $(this).replaceWith($formGroupEl );

});


$(".preview-container").find('.formGroupInside').each(function() {

       $(this).removeClass('formGroupInside');
       $(this).removeClass('borderedFormGroupElement');
       $(this).removeClass('ui-droppable');
       $(this).removeAttr("style"); 

       $(this).find('.borderedInput').each(function() {

            $(this).removeClass('inputElement');
            $(this).removeClass('borderedInput');
            $(this).removeAttr("data-id"); 

            if ( $(this).find('label').length > 0) {

                  var $labelEl = $(this).find('label');
                  $(this).replaceWith($labelEl );

            }

            if ( $(this).find('textarea').length > 0) {

                  var $textareaEl = $(this).find('textarea');
                  $(this).replaceWith($textareaEl );

            }

            if ( $(this).find('select').length > 0) {

                  var $selectEl = $(this).find('select');
                  $(this).replaceWith($selectEl );

            }

            if ( $(this).find('input').length > 0) {

                  var $inputEl = $(this).find('input');
                  $(this).replaceWith($inputEl );

            }



       });


});



$(".preview-container").find('.borderedVerticalInput').each(function() {
      
       $(this).find('.form-group').removeClass("element-edit"); 
       $(this).find('.form-group').removeClass("borderedFormGroupElement"); 
       $(this).find('.form-group').removeClass("ui-droppable"); 
       
       $(this).find('.form-group').removeAttr("style"); 
       var $formGroupEl = $(this).find('.form-group');
       $(this).replaceWith($formGroupEl );

  });




$(".preview-container").find('.borderedInput').each(function() {
      
       
       if ( $(this).find('label').length > 0) {
             
             $(this).find('label').removeAttr("style"); 
             var $labelEl = $(this).find('label');
             $(this).replaceWith($labelEl );
       }else if ($(this).find('textarea').length > 0) {
             
             $(this).find('textarea').removeAttr("style"); 
             var $textareaEl = $(this).find('textarea');
             $(this).replaceWith($textareaEl );

       }else if ($(this).find('select').length > 0) {
             
             $(this).find('select').removeAttr("style"); 
             var $selectEl = $(this).find('select');
             $(this).replaceWith($selectEl );

       }
       else{
       
             $(this).find('input').removeAttr("style"); 
             var $inputEl = $(this).find('input');
             $(this).replaceWith($inputEl );
       }

  });



  
   $(".preview-container").find('.ui-sortable').removeClass('ui-sortable');
   $(".preview-container").find('.ui-sortable-handle').removeClass('ui-sortable-handle');
   $(".preview-container").find('.hover').removeClass('hover');

   $(".preview-container").find('.narrowBorderedContainer').removeClass('narrowBorderedContainer');

   $(".preview-container").find('.rowColBac').removeClass('rowColBac');

   $(".preview-container").find('.findCustomClassName').remove();
   $(".preview-container").find('.findCustomIDName').remove();
   $(".preview-container").find('.colRow-description').remove();
  

  
  var mapID = [];
  var mapZoom = [];
  var mapLat = [];
  var mapLng = [];
  

  var mapIDTemp;
  var mapZoomTemp;
  var mapLatTemp;
  var mapLngTemp;
  
  $(".preview-container").find('.borderedGmapsElement').each(function(){
         
        
        var $optionsel = $(this).find('.gmapsAttributes');
        mapIDTemp = $optionsel.attr('data-id');
        if( mapID.length == 0 ){mapID[0] = mapIDTemp;}else{mapID.push(mapIDTemp);}

        mapZoomTemp = $optionsel.attr('data-zoom');
        if( mapZoom.length == 0 ){mapZoom[0] = mapZoomTemp;}else{mapZoom.push(mapZoomTemp);}

        mapLatTemp = $optionsel.attr('data-lat');
        if( mapLat.length == 0 ){mapLat[0] = mapLatTemp;}else{mapLat.push(mapLatTemp);}

        mapLngTemp = $optionsel.attr('data-lng');
        if( mapLng.length == 0 ){mapLng[0] = mapLngTemp;}else{mapLng.push(mapLngTemp);}

        
        
      });


$(".preview-container").find('.borderedGmapsElement').each(function() {
       $(this).find('.gmapsdescription').remove();
       $(this).find('.gmapsEditIcons').remove();

       var $gmapsElement = $(this).find('.gmapsElement');
       $(this).replaceWith($gmapsElement );
       $(this).removeClass('borderedGmapsElementCreated');

  });

   var $elToclone =  $(".preview-container").find('#content-frame').children();
   $(".preview-container").append($elToclone);
   $(".preview-container").find('#content-frame').remove();


   var iframe = $("iframe.customIframe").contents();
   iframe.find("body").append($elToclone);

   $("iframe.customIframe").removeClass('preview-hidden');
   $('iframe.customIframe').addClass('animated fadeInRight');

   
   var iframeNEW = $("iframe.customIframe")[0];
   if (iframeNEW) {
      var iframeContent = (iframeNEW.contentWindow || iframeNEW.contentDocument);

      
      for (var k=0;k<mapID.length;k++) {

        var mapIDNEW = mapID[k];
        var mapZoomNEW = mapZoom[k];
        var mapLatNEW = mapLat[k];
        var mapLngNEW = mapLng[k];
        

        
        iframeContent.initializeGmaps(mapIDNEW,mapZoomNEW,mapLatNEW,mapLngNEW);
      }

    }

  

if (previewMode == 'mobile'){

   $("iframe.customIframe").css({'width' : '740px', 'max-width' : '740px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "30%");

 }else if (previewMode == 'tablet-sm'){
   $("iframe.customIframe").css({'width' : '820px', 'max-width' : '820px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "25%");

 }else if (previewMode == 'tablet-lg'){
   $("iframe.customIframe").css({'width' : '1024px', 'max-width' : '1024px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "20%");

 }else if (previewMode == 'desktop'){
   $("iframe.customIframe").css({'width' : '1340px', 'max-width' : '1340px'});
   $("iframe.customIframe").css('height', window.innerHeight - 90);
   $("iframe.customIframe").css('margin-left', "15%");
 }



}




function perform_Container_Droppable($elToAppendTo, $clonedDiv){

  $clonedDiv.appendTo( $elToAppendTo ).droppable({
            
            greedy:true,  
            
            
            accept: function(d) { 
                if( d.hasClass("div-draggable") || d.hasClass("row-droppable") || d.hasClass("row-col-droppable")
                 || d.hasClass("imgDraggable") || d.hasClass("pDraggable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") 
                 || d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") 
                 || d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable")
                 || d.hasClass("carouselDraggable") || d.hasClass("navbarDraggable") || d.hasClass("formGroupDraggable") 
                 || d.hasClass("gmapsDraggable") ){ 
                    
                    return true;
                }else if( d.hasClass("container-fluid-draggable") ){
                    
                    return false;
                }
            },           
            drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                
                
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                     

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customPanel') ){
    
                  perform_Panel_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customListGroup') ){
            
                  perform_ListGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customOrderedList') ){
            
                  perform_OrderedList_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customUnorderedList') ){
            
                  perform_UnorderedList_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customCarousel') ){
            
                  perform_Carousel_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customNavbar') ){
            
                  perform_Navbar_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('formGroupElement') ){
            
                  perform_FormFroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
            
                  perform_gmaps_Droppable($(this), $clonedDiv );
                  resize();            

              }



              }

              });
            
resize();

} 

function perform_Div_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedDivDroppable");
  

  resize();

  $clonedDiv.appendTo( $elToAppendTo ).droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable")||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("responsiveEmbedDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("panelDraggable") || d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") ||
                            d.hasClass("unorderedListDraggable") || d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") || d.hasClass("navbarDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },
                       
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        
                        perform_Paragraph_In_Row($(this), $clonedDiv);

                        resize();

                      }else if( $clonedDiv.hasClass('imgElement') ){
                        
                        perform_Image_In_Row($(this), $clonedDiv);

                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') )
                      {
                            

                            perform_Div_Droppable($(this), $clonedDiv);

                      }else if ( $clonedDiv.hasClass('row') )
                      {

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 120);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '5px');
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '5px');
                              resize();
                          }
                        }else if( $clonedDiv.hasClass('customTable') ){
            
                              perform_Table_Droppable($(this), $clonedDiv);
                              resize();
                        }else if( $clonedDiv.hasClass('buttonElement') ){
    
                              perform_Button_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                        }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
          
                              perform_gmaps_Droppable($(this), $clonedDiv );
                              resize();            

                       }else if( $clonedDiv.hasClass('customPanel') ){
                      
                            perform_Panel_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customListGroup') ){
                      
                            perform_ListGroup_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customOrderedList') ){
                      
                            perform_OrderedList_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customUnorderedList') ){
                      
                            perform_UnorderedList_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customCarousel') ){
                      
                            perform_Carousel_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customNavbar') ){
                      
                            perform_Navbar_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('formGroupElement') ){
                      
                            perform_FormFroup_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                      
                            perform_gmaps_Droppable($(this), $clonedDiv );
                            resize();            

                        }


                      
                    } 

                  }); 
                    
                          

                   var $parentElement = $clonedDiv.parent();
                   
                  if( $parentElement.hasClass('borderedContainer') ||  $parentElement.hasClass('borderedDivDroppable') ||  $parentElement.hasClass('borderedRowDroppable')
                    ||  $parentElement.hasClass('borderedRowColDroppable') ||  $parentElement.hasClass('content-frame')){
                    $clonedDiv.height(20);
                    
                    
                    
                  }

                  if ( ($parentElement.hasClass('borderedContainer')) || ($parentElement.hasClass('borderedRowColDroppable')) ){
                    var width = $clonedDiv.width();
                    $clonedDiv.width(width + 50);
                    
                    $clonedDiv.css('right', '12px');
                  }
                  
                   if($parentElement.hasClass('borderedRowDroppable') ){
                       
                         var Pheight = $parentElement.height();
                         $parentElement.height(Pheight + 120);



                    }else if($parentElement.hasClass('borderedRowColDroppable')){

                         
                         

                    }else if($parentElement.hasClass('borderedDivDroppable') ){

                        var parentRowHeight = $parentElement.parents('.borderedRowDroppable').height();
                        $parentElement.parents('.borderedRowDroppable').height('auto');
                         var parentRowHeightNew = $parentElement.parents('.borderedRowDroppable').height();
                         $parentElement.parents('.borderedRowDroppable').height(parentRowHeightNew + 40);

                         
                    }
                    
                    
                    resize();


}

function perform_Row_Col_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.removeClass("colClass");
  $clonedDiv.addClass("borderedRowDroppable");

  $clonedDiv.height(100);
  resize();

  $clonedDiv.appendTo( $elToAppendTo ); 



  $clonedDiv.find('div[class^="col-"]').each(function() {

    $(this).addClass("borderedRowColDroppable");
    
    
  
    $(this).height(30);
    $(this).css('margin-top', '5px');

    $(this).droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("inputDroppable") || d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("responsiveEmbedDraggable")){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },         
                    
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();

                      }else if( $clonedDiv.hasClass('imgElement') ){
                        
                        perform_Image_In_Row($(this), $clonedDiv);
                        var width = $clonedDiv.width();
                        $clonedDiv.width(width + 28);
                        $clonedDiv.css('right', '14px');
                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') )
                      {
                          perform_Div_Droppable($(this), $clonedDiv);
                          $clonedDiv.css('top','5px');
                          resize();

                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              
                              $clonedDiv.height(height - 90);
                              
                              $clonedDiv.css('top', '5px');
                              
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              
                              $clonedDiv.height(height - 70);
                              
                              $clonedDiv.css('top', '5px');
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('customTable') ){
            
                          perform_Table_Droppable($(this), $clonedDiv);
                          var width = $clonedDiv.width();
                          $clonedDiv.width(width + 28);
                          $clonedDiv.css('right', '14px');
                          resize();
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                          perform_Button_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('inputElement') ){
    
                              perform_Input_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('verticalInputElement') ){
    
                              perform_VerticalInput_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
                    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customCarousel') ){
                    
                          perform_Carousel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }


                      
                    } 

                  }); 
                    
   
 }); 

resize();


}

function perform_Row_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedRowDroppable");
  $clonedDiv.height(30);
  resize();

  $clonedDiv.appendTo( $elToAppendTo ).droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("responsiveEmbedDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                      }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') ){
                          perform_Div_Droppable($(this), $clonedDiv);
                          
                          
                          
                          $clonedDiv.css('top','5px');
                          resize();
                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 30);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '12px');
                              $clonedDiv.css('top', '15px');
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '15px');
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('customTable') ){
            
                              perform_Table_Droppable($(this), $clonedDiv);
                              resize();
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                              perform_Button_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
                    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customCarousel') ){
                    
                          perform_Carousel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }


                      
                    } 

                  }); 
                    

resize();


} 


function applyCSSToParentImage($parentElement, type, value){

if($parentElement.attr('style')){

      
      var stylesList = $parentElement.attr('style');

      var indexOfType = stylesList.indexOf(type);
      if(indexOfType < 0){
            
            var temp = type + ': ' + value + 'px;';
            
          stylesList += temp;
          
          $parentElement.attr('style', stylesList);
          
      }else{
          
          var temp = type + ': ' + value + 'px;';
          
          var indexOfEndOFType = indexOfType + stylesList.substring(indexOfType).indexOf(';');

              var styleNew = stylesList.substring(0, indexOfType);

              styleNew += stylesList.substring(indexOfEndOFType+1);
              styleNew += temp;

              
              $parentElement.attr('style', styleNew);
              
      }

     
  }


}


function applyParentStyles($parentElement){



var styles = '';
var hasStyles = 'false';

$parentElement.children('.findCustomClassName').each(function() {

    $(this).find('.cssAttributes').each(function() {
      var cssType = $(this).attr('data-value');
      var cssValue = $(this).attr('data-id');

      
      styles += cssType + ':' + cssValue + ';';
      hasStyles = 'true';

if($parentElement.attr('style') ){
      var stylesList = $parentElement.attr('style').split(';');
      $.each(stylesList, function(index, item) {
           
           
           var indexOfSep = item.indexOf(":");

           var type = item.substr(0, indexOfSep);
           var value = item.substr(indexOfSep + 1);
           value = value.trim();
           

           var stylesCSS = $parentElement.attr('style');
           
           if ( (cssType.trim()==type.trim()) ) {
           
              
              var indexOfType = stylesCSS.indexOf(type);
              var indexOfEndOFType = indexOfType + stylesCSS.substring(indexOfType).indexOf(';');

              var styleNew = stylesCSS.substring(0, indexOfType);
              styleNew += stylesCSS.substring(indexOfEndOFType+1);

              styleNew += cssType + ':' + cssValue + ';';

              
              $parentElement.attr('style', styleNew);

           }
          
        });
      }



    }); 

}); 

styles = '';
hasStyles = 'false';

$parentElement.children('.findCustomIDName').each(function() {

    $(this).find('.cssAttributes').each(function() {
      var cssType = $(this).attr('data-value');
      var cssValue = $(this).attr('data-id');

      
      styles += cssType + ':' + cssValue + ';';
      hasStyles = 'true';

if($parentElement.attr('style')){
      var stylesList = $parentElement.attr('style').split(';');
      $.each(stylesList, function(index, item) {
           
           
           var indexOfSep = item.indexOf(":");

           var type = item.substr(0, indexOfSep);
           var value = item.substr(indexOfSep + 1);
           value = value.trim();
           

           var stylesCSS = $parentElement.attr('style');
           
           if ( (cssType.trim()==type.trim()) ) {
           
              
              var indexOfType = stylesCSS.indexOf(type);
              var indexOfEndOFType = indexOfType + stylesCSS.substring(indexOfType).indexOf(';');

              var styleNew = stylesCSS.substring(0, indexOfType);
              styleNew += stylesCSS.substring(indexOfEndOFType+1);

              styleNew += cssType + ':' + cssValue + ';';

              
              $parentElement.attr('style', styleNew);

           }
          
        });
      }

    }); 

}); 



}


function perform_Paragraph_In_Row($elToAppendTo, $clonedDiv){

 
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedParagraph");
  
  

  $clonedDiv.appendTo( $elToAppendTo );

  var $parentElement = $clonedDiv.parent();
  var parentHeight = $parentElement.height();


var parentHeight = $parentElement.height();
  if($parentElement.hasClass('borderedRowDroppable')){
  
    $clonedDiv.height(40);
  
  
  
  
  $clonedDiv.css('margin-top', '5px');

  var $parentElement = $clonedDiv.parent();
  

  applyParentStyles($parentElement);
  

}else if($parentElement.hasClass('borderedRowColDroppable')){
  
  
    $clonedDiv.height(40);
  
  if ( $clonedDiv.find('.paragraph-description').length > 0 || $clonedDiv.find('.heading-description').length > 0 ) {
      var width = $clonedDiv.width();
      $clonedDiv.width(width + 28);
  }

  $clonedDiv.css('right', '14px');
  $clonedDiv.css('margin-top', '5px');

  

  applyParentStyles($parentElement);
  applyParentStyles($parentElement.parent());

}else if($parentElement.hasClass('borderedDivDroppable')){
  
  
    $clonedDiv.height(40);
  
  $clonedDiv.css('margin-bottom', '5px');
  $clonedDiv.css('margin-top', '5px');

  $parentElement.height('auto');
  var parentHeight = $parentElement.height();
  $parentElement.height(parentHeight + 20);

  applyParentStyles($parentElement);
  


}else if($parentElement.hasClass('borderedContainer')){
  
    $clonedDiv.height(40);
  
  var width = $clonedDiv.width();
  
  
  
  $clonedDiv.css('margin-top', '5px');

  

}else if($parentElement.hasClass('content-frame')){
  
  
    $clonedDiv.height(40);
  
  $clonedDiv.css('margin-bottom', '2px');
  $clonedDiv.css('margin-top', '2px');
  
  


}else if($parentElement.hasClass('borderedTableCell')){
  
  $clonedDiv.height(40);

  var k = 1;
  var $parent = $clonedDiv.parent();
  $parent.siblings('.borderedTableCell').each(function() {
          k++;
 });
 
 var $tableRow = $parent.parent().closest('.borderedTableRow');
 var $table = $tableRow.parent().closest('.tableElement');
 var tableWidth = $table.width();

 $parent.width((tableWidth - 20) / k);
  
  
  

  var $tableRowElement = $parentElement.parent().closest('.borderedTableRow');
  var $tableElement = $tableRowElement.parent().closest('.tableElement');
  var $containerElement = $tableElement.parent().closest('.borderedTableDroppable');

   var containerHeight = $containerElement.height();
  var containerHeight = $containerElement.height();
  $containerElement.height(containerHeight + 120);

  applyParentStyles($parentElement);


}



}

function perform_Button_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedButton");
  
  $clonedDiv.appendTo( $elToAppendTo );

  var $parentElement = $clonedDiv.parent();
  var parentHeight = $parentElement.height();

}

function perform_ButtonGroup_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedButtonGroup");
  
  $clonedDiv.appendTo( $elToAppendTo );

  var $parentElement = $clonedDiv.parent();
  var parentHeight = $parentElement.height();

  

}

function perform_DropDown_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedDropDown");
  
  $clonedDiv.appendTo( $elToAppendTo );

  var $parentElement = $clonedDiv.parent();
  var parentHeight = $parentElement.height();

  

}


function perform_Image_In_Row($elToAppendTo, $clonedDiv){

  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedParagraph");
  

  $clonedDiv.appendTo( $elToAppendTo );

  var $parentElement = $clonedDiv.parent();
  var parentHeight = $parentElement.height();

 
if($parentElement.hasClass('borderedRowDroppable')){
  var $imageElement = $clonedDiv.find('img');
  var imageHeight = $imageElement.height();

  $clonedDiv.height(imageHeight + 20);

  $clonedDiv.css('margin-top', '5px');
  var $parentElement = $clonedDiv.parent();
  $parentElement.height('auto');
  var parentHeight = $parentElement.height();
  $parentElement.height(parentHeight + 20);

  applyParentStyles($parentElement);

  

}else if($parentElement.hasClass('borderedRowColDroppable')){
  var $imageElement = $clonedDiv.find('img');
  var imageHeight = $imageElement.height();

  $clonedDiv.height(imageHeight + 20);
  
  $parentElement.height('auto');
  var parentHeight = $parentElement.height();
  $parentElement.height(parentHeight + 20);

  $parentElement.parent().height('auto');
  var grandParentHeight = $parentElement.parent().height();
  $parentElement.parent().height(grandParentHeight + 20);

  applyParentStyles($parentElement);
  applyParentStyles($parentElement.parent());

}else if($parentElement.hasClass('borderedDivDroppable')){
  
  var $imageElement = $clonedDiv.find('img');
  var imageHeight = $imageElement.height();

  $clonedDiv.height(imageHeight + 20);
  
  $parentElement.height('auto');
  var parentHeight = $parentElement.height();
  $parentElement.height(parentHeight + 20);

  applyParentStyles($parentElement);
 

}else if($parentElement.hasClass('borderedContainer')){
  var $imageElement = $clonedDiv.find('img');
  var imageHeight = $imageElement.height();

  $clonedDiv.height(imageHeight + 20);

  var width = $clonedDiv.width();
  $clonedDiv.width(width + 28);
  $clonedDiv.css('right', '14px');
  

}
else if($parentElement.hasClass('content-frame')){
  
  var $imageElement = $clonedDiv.find('img');
  var imageHeight = $imageElement.height();

  $clonedDiv.height(imageHeight + 20);

  $clonedDiv.css('margin-bottom', '2px');
  $clonedDiv.css('margin-top', '2px');
  


}else if($parentElement.hasClass('borderedTableCell')){
  
  
  var k = 1;
  var $parent = $clonedDiv.parent();
  $parent.siblings('.borderedTableCell').each(function() {
                                  k++;
 });
 
 var $tableRow = $parent.parent().closest('.borderedTableRow');
 var $table = $tableRow.parent().closest('.tableElement');
 var tableWidth = $table.width();

 $parent.width((tableWidth - 20) / k);
  
  

  var $tableRowElement = $parentElement.parent().closest('.borderedTableRow');
  var $tableElement = $tableRowElement.parent().closest('.tableElement');
  var $containerElement = $tableElement.parent().closest('.borderedTableDroppable');

   var containerHeight = $containerElement.height();
  var containerHeight = $containerElement.height();
  $containerElement.height(containerHeight + 120);

  applyParentStyles($parentElement);

  
}

}


  
  $('#content-frame').droppable({
      
      
      
      tolerance:"touch",
     
     accept: function(d) { 
          if ( d.hasClass("container-draggable") || d.hasClass("div-draggable") || d.hasClass("container-fluid-draggable") || d.hasClass("row-droppable")
          || d.hasClass("row-col-droppable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable") || d.hasClass("table-droppable") 
          || d.hasClass("buttonDraggable") || d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") 
          || d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable")
          || d.hasClass("carouselDraggable") || d.hasClass("navbarDraggable") || d.hasClass("formGroupDraggable") 
          || d.hasClass("gmapsDraggable") ){ 
                
                return true;
          }else if(d.hasClass("input-droppable") || d.hasClass("ui-sortable-helper")){
                
                 return false;
          }
      }, 
      drop: function( event, ui ) {
        
        var data_id = ui.draggable.attr("data-id");
        
        var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");

        
        
        var $clonedDiv = $divToClone.clone();
        
        
        if ( $clonedDiv.hasClass('container') || $clonedDiv.hasClass("container-fluid") ) 
        {
            
            $clonedDiv.removeClass("hiddenDiv");
            $clonedDiv.addClass("borderedContainer");
            if ( $clonedDiv.hasClass('container') ){
              $clonedDiv.addClass("narrowBorderedContainer");
            }
            
            perform_Container_Droppable($(this), $clonedDiv);


        }else if ( $clonedDiv.hasClass('row') ){ 
          
            
            
           if ( $clonedDiv.hasClass('colClass') ){
              
              perform_Row_Col_Droppable($(this), $clonedDiv);

              
              
              
              resize();

              

            }
            else{

                perform_Row_Droppable($(this), $clonedDiv);

                var width = $clonedDiv.width();
                $clonedDiv.width(width - 30);
                $('.content-frame > .borderedRowDroppable').css('left','15px');
                resize();

                 
          }

       } 
       else if ( $clonedDiv.hasClass('customDiv') )
       {
           

           perform_Div_Droppable($(this), $clonedDiv);

       }
       else if ( $clonedDiv.hasClass('pElement') )
       {
           

            perform_Paragraph_In_Row($(this), $clonedDiv);
            resize(); 

       }else if( $clonedDiv.hasClass('imgElement') ){
            
           perform_Image_In_Row($(this), $clonedDiv);

          resize();             

       }else if( $clonedDiv.hasClass('customTable') ){
            
           perform_Table_Droppable($(this), $clonedDiv);

           resize();            

       }else if( $clonedDiv.hasClass('buttonElement') ){
    
           perform_Button_Droppable($(this), $clonedDiv);
           resize();            

       }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
            perform_ButtonGroup_Droppable($(this), $clonedDiv);
            resize();            

      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
          perform_DropDown_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customPanel') ){
    
          perform_Panel_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customListGroup') ){
    
          perform_ListGroup_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customOrderedList') ){
    
          perform_OrderedList_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customUnorderedList') ){
    
          perform_UnorderedList_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customCarousel') ){
    
          perform_Carousel_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('customNavbar') ){
    
          perform_Navbar_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('formGroupElement') ){
    
          perform_FormFroup_Droppable($(this), $clonedDiv);
          resize();            

      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
    
          perform_gmaps_Droppable($(this), $clonedDiv );
          resize();            

      }


      } 

    })

/******************************************* .content-frame Droppable ********************************/



var mapsArray = [];
var mapsMarkerArray = [];
var mapsObjectsArray = [];


function initializeGmaps($clonedDiv,mapID,mapZoom,mapLat,mapLng) {
var map;
var myCenter = new google.maps.LatLng(mapLat, mapLng);

var mapZoomInt = parseInt(mapZoom);
var mapProp = {
center:myCenter,
zoom:mapZoomInt,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};


var mapDiv = $clonedDiv.find('.gmapsElement')[0];
map = new google.maps.Map(mapDiv,mapProp);

if( mapsArray.length == 0 ){mapsArray[0] = map;}else{mapsArray.push(map);}


var mapObject = {id:mapID, mapVar:map};
if( mapsObjectsArray.length == 0 ){mapsObjectsArray[0] = mapObject;}else{mapsObjectsArray.push(mapObject);}

for(var k=0;k<mapsObjectsArray.length;k++){
  var tempOject = mapsObjectsArray[k];

}



var marker = new google.maps.Marker({
    position:myCenter,
});

marker.setMap(map);
if( mapsMarkerArray.length == 0 ){mapsMarkerArray[0] = marker;}else{mapsMarkerArray.push(marker);}



}




function perform_gmaps_Droppable($elToAppendTo, $clonedDiv ){

$clonedDiv.removeClass("hiddenDiv");
$clonedDiv.addClass("borderedGmapsElement");
$clonedDiv.find('.gmapsElement').addClass("borderedGmapsElementCreated");



$clonedDiv.appendTo( $elToAppendTo );



$clonedDiv.height(375);
$clonedDiv.find('.gmapsElement').height(340);


var $parentDiv = $clonedDiv.parent();
$parentDiv.height($clonedDiv.height() + 5);




var $optionsEl = $clonedDiv.find('.gmapsAttributes');
var mapID = $optionsEl.attr('data-id');
var mapZoom = $optionsEl.attr('data-zoom');
var mapLat = $optionsEl.attr('data-lat');
var mapLng = $optionsEl.attr('data-lng');



  initializeGmaps($clonedDiv,mapID,mapZoom,mapLat,mapLng);

}



function perform_FormFroup_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedFormGroup");
  
  
  $clonedDiv.appendTo( $elToAppendTo );

  $elToAppendTo.find('.form-group').addClass('borderedFormGroupElement');

  

  $elToAppendTo.find('.form-group').droppable({
     
            greedy:true,  
            
            
            accept: function(d) { 
                if(d.hasClass("row-droppable") || d.hasClass("row-col-droppable") ){ 
                    
                    return true;
                }else {
                    
                    return false;
                }
            },           
            drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                
                
                var $clonedDivDropped = $divToClone.clone();

  
                if ( $clonedDivDropped.hasClass('row') ){

                     

                    if ( $clonedDivDropped.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDivDropped);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDivDropped);
                   }
                     
                }



              }

        });

  $clonedDiv.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


resize();


}

function perform_VerticalInput_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedVerticalInput");
  
  
  $clonedDiv.appendTo( $elToAppendTo );

  $clonedDiv.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


resize();


}

function perform_Input_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedInput");
  
  
  $clonedDiv.appendTo( $elToAppendTo );

  $clonedDiv.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


resize();


}



$( document ).on( 'click', '.customDropDownNav', function (e) {
var $current = $(e.target);

var $parent = $(this).parent().closest('.borderedNavbar');
    
    


    var $liParent = $current.parent().closest('li');
    var $ul = $liParent.find('.dropdown-menu');

    var height = 70;
    $ul.children('li').each(function() {
      height += $(this).height();
    });
    
    
    $parent.height(height);
    
    
    
    $parent.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      
      
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});

});


function perform_Navbar_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedNavbar");
  
  
  $clonedDiv.appendTo( $elToAppendTo );


}


function perform_ResponsiveEmbed_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedResponsiveEmbed");
  
  
  $clonedDiv.appendTo( $elToAppendTo );

  var widthConstrain = false;
  var heightConstrain = false;
  var maxHeight;
  var maxWidth;

  

 if ($elToAppendTo.find('.findCustomClassName').length > 0 ){

  $elToAppendTo.find('.findCustomClassName').each(function() {

      $(this).find('.cssAttributes').each(function() {

        if( $(this).attr('data-value') == 'height' ){
          var maxHeightString = $(this).attr('data-id');
          maxHeight = parseInt(maxHeightString, 10);
          heightConstrain = true;
        }else if( $(this).attr('data-value') == 'width' ){
          var maxWidthString = $(this).attr('data-id');
          maxWidth = parseInt(maxWidthString, 10);
          widthConstrain = true;
        }

      });
    
  });

}

if ($elToAppendTo.find('.findCustomIDName').length > 0 ){

  $elToAppendTo.find('.findCustomIDName').each(function() {

      $(this).find('.cssAttributes').each(function() {

        if( $(this).attr('data-value') == 'height' ){
          var maxHeightString = $(this).attr('data-id');
          maxHeight = parseInt(maxHeightString, 10);
          heightConstrain = true;
        }else if( $(this).attr('data-value') == 'width' ){
          var maxWidthString = $(this).attr('data-id');
          maxWidth = parseInt(maxWidthString, 10);
          widthConstrain = true;
        }

      });
    
  });

}


var $parentDiv = $clonedDiv.parent().closest('.borderedDivDroppable');
var parentWidth = $parentDiv.width();
var parentHeight = $parentDiv.height();

if(heightConstrain == false && widthConstrain == false){
  
  

}else if(heightConstrain == true && widthConstrain == true){

  

}

$clonedDiv.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


resize();



}

$( document ).on( 'click', '.carousel-control.left', function (e) { 
    e.stopPropagation();
    
    var $carousel = $(this).parent().closest('.carousel');
    $carousel.carousel('prev');
    
});

$( document ).on( 'click', '.carousel-control.right', function (e) { 
    e.stopPropagation();
    
    var $carousel = $(this).parent().closest('.carousel');
   $carousel.carousel('next');
   
});


$( document ).on( 'click', '.carousel-indicators li', function (e) {
    e.stopPropagation();

    
    var $carousel = $(this).parent().closest('.carousel');
    $carousel.find('ol.carousel-indicators li.active').removeClass("active");
    $(this).addClass("active");
    
    var temp = parseInt($(this).attr('data-slide-to'));
    
    
    $carousel.carousel(temp); 


   var $carouselInner = $carousel.find('.carousel-inner');
   var $carouselDrop = $carousel.parent().closest('.borderedCarousel');


  if($carousel.find('.borderedDivDroppable').length > 0){

      $carousel.find('.borderedDivDroppable').each(function(){
        var tempH = 0;
        if( $(this).children().length > 0){
          $(this).children().each(function(){
              tempH += $(this).height();
          });
          $(this).height(tempH + 40);
        }

        
        if( $(this).find('.imgResponsive').length > 0){
            resize();
        }


        

      });

  }
    
    var $carouselInner = $carousel.find('.carousel-inner');

    var maxHeight = [];
    var divFound = false;
    $carouselInner.find('.carouselItem').each(function(){
      var heightTemp = 0;

      if($(this).find('.borderedDivDroppable').length > 0){
        $(this).find('.borderedDivDroppable').each(function(){
          heightTemp += $(this).height();
          divFound = true;
        });
        if( maxHeight.length == 0 ){maxHeight[0] = heightTemp;}else{maxHeight.push(heightTemp);}
      }
    });

    if(divFound){
      var maxH = maxHeight[0];
      for(var k=1;k<maxHeight.length;k++){
          if(maxHeight[k] > maxH){
              maxH = maxHeight[k];
          }
      }

        $carouselInner.find('.carouselItem').height(maxH + 60);
        $carouselInner.height(maxH + 130);
        var carInnerHeight = $carouselInner.height();
        
        $carousel.height(carInnerHeight + 20);
        var carouselHeight = $carousel.height();
        $carouselDrop.height(carouselHeight + 20);

    }

   
   var $borderedCarousel = $carousel.parent().closest('.borderedCarousel');
   $borderedCarousel.parents().each(function() {
      if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ){
            $(this).height('auto');
            var height = $(this).height();
            $(this).height(height + 20);
            
            if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
              $(this).width('auto');
              
            }

            applyParentStyles($(this));

          }else {
            
            return false;
          }
      });

    

    
});


function perform_Carousel_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedCarousel");
  
  
  $clonedDiv.appendTo( $elToAppendTo );





var $carouselElement = $elToAppendTo.find('.carousel');
$carouselElement.carousel();


var $carousel = $carouselElement;
var $carouselInner = $carousel.find('.carousel-inner');
var $carouselDrop = $carousel.parent().closest('.borderedCarousel');


if($carousel.find('.borderedDivDroppable').length > 0){

      $carousel.find('.borderedDivDroppable').each(function(){
        var tempH = 0;
        if( $(this).children().length > 0){
          $(this).children().each(function(){
              tempH += $(this).height();
          });
          $(this).height(tempH + 40);
        }

      });



  }
   
    var maxHeight = [];
    var divFound = false;
    $carouselInner.find('.carouselItem').each(function(){
      var heightTemp = 0;

      if($(this).find('.borderedDivDroppable').length > 0){
        $(this).find('.borderedDivDroppable').each(function(){
          heightTemp += $(this).height();
          divFound = true;
        });
        if( maxHeight.length == 0 ){maxHeight[0] = heightTemp;}else{maxHeight.push(heightTemp);}
      }
    });


var carItemH;
var carouselInnerH;
var carouselH;
var carouselDropH;

    if(divFound){
      var maxH = maxHeight[0];
      for(var k=1;k<maxHeight.length;k++){
          if(maxHeight[k] > maxH){
              maxH = maxHeight[k];
          }
      }

        $carouselInner.find('.carouselItem').height(maxH + 60);
        carItemH = $carouselInner.find('.carouselItem').height();

        $carouselInner.height(maxH + 130);
        carouselInnerH = $carouselInner.height();

        var carInnerHeight = $carouselInner.height();
        
        $carousel.height(carInnerHeight + 20);
        carouselH = $carousel.height();

        $carouselDrop.height(carouselH + 20);
        carouselDropH = $carouselDrop.height();

    }



if($clonedDiv.hasClass('customCarouselWithDivs') ) {

  $elToAppendTo.find('.carouselItem').each(function() { 

    $(this).droppable({
          
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if(  d.hasClass("div-draggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('customDiv') )
                      {
                            

                            perform_Div_Droppable($(this), $clonedDiv);

                            $clonedDiv.css({'margin-top': '40px'});

                      }


                      
                    } 

                  }); 

  

if ( $(this).children().length == 0 )  {
        

  }

  });

}



resize();

}


function apply_CarouselItems_Droppable($elAppendedTo){
var $carouselInner = $elAppendedTo;
var $carousel = $carouselInner.parent().closest('.carousel');
var $carouselDrop = $carousel.parent().closest('.borderedCarousel');

if($carousel.find('.borderedDivDroppable').length > 0){

      $carousel.find('.borderedDivDroppable').each(function(){
        var tempH = 0;
        if( $(this).children().length > 0){
          $(this).children().each(function(){
              tempH += $(this).height();
          });
          $(this).height(tempH + 40);
        }

      });


}
    
    var maxHeight = [];
    var divFound = false;
    $carouselInner.find('.carouselItem').each(function(){
      var heightTemp = 0;

      if($(this).find('.borderedDivDroppable').length > 0){
        $(this).find('.borderedDivDroppable').each(function(){
          heightTemp += $(this).height();
          divFound = true;
        });
        if( maxHeight.length == 0 ){maxHeight[0] = heightTemp;}else{maxHeight.push(heightTemp);}
      }
    });

    if(divFound){
      var maxH = maxHeight[0];
      for(var k=1;k<maxHeight.length;k++){
          if(maxHeight[k] > maxH){
              maxH = maxHeight[k];
          }
      }

        $carouselInner.find('.carouselItem').height(maxH + 60);
        $carouselInner.height(maxH + 130);
        var carInnerHeight = $carouselInner.height();
        
        $carousel.height(carInnerHeight + 20);
        var carouselHeight = $carousel.height();
        $carouselDrop.height(carouselHeight + 20);
    }


$elAppendedTo.find('.carouselItem').each(function() { 

    $(this).droppable({
          
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if(  d.hasClass("div-draggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('customDiv') )
                      {
                            

                            perform_Div_Droppable($(this), $clonedDiv);

                            $clonedDiv.css({'margin-top': '40px'});

                      }


                      
                    } 

                  }); 

  

  if ( $(this).children().length == 0)  {
  

  }

  });

}


function apply_UnorderedList_Droppable ($elAppendedTo){ 

$elAppendedTo.find('.unorderedListItem').each(function() {
        $(this).height(40);
        $(this).addClass('borderedUnorderedListItem');

  
        $(this).height('auto');
        var height =  $(this).height();
        
        $(this).height(height + 20);
});

$elAppendedTo.find('.unorderedListItem').droppable({
        
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }

          }

  });

}


function perform_UnorderedList_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedUnorderedListDroppable");
  $clonedDiv.height(20);
  
  $clonedDiv.appendTo( $elToAppendTo );

  $elToAppendTo.find('.unorderedListItem').each(function() {
        $(this).height(40);
        $(this).addClass('borderedUnorderedListItem');
  });
  
  $clonedDiv.height('auto');
  var height =  $clonedDiv.height();
  
  $clonedDiv.height(height + 20);

  $elToAppendTo.find('.unorderedListItem').droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })

resize();




}

function apply_OrderedList_Droppable ($elAppendedTo){
$elAppendedTo.find('.orderedListItem').each(function() {
        $(this).height(40);
        $(this).addClass('borderedOrderedListItem');

  
  $(this).height('auto');
  var height =  $(this).height();
  
  $(this).height(height + 20);
});

  $elAppendedTo.find('.orderedListItem').droppable({
    
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  });

}

function perform_OrderedList_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedOrderedListDroppable");
  $clonedDiv.height(20);
  
  $clonedDiv.appendTo( $elToAppendTo );

  $elToAppendTo.find('.orderedListItem').each(function() {
        $(this).height(40);
        $(this).addClass('borderedOrderedListItem');
  });
  
  $clonedDiv.height('auto');
  var height =  $clonedDiv.height();
  
  $clonedDiv.height(height + 20);

  $elToAppendTo.find('.orderedListItem').droppable({
    
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })

resize();


}



function perform_ListGroup_Droppable ($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedListGroupDroppable");
  $clonedDiv.height(20);
  
  $clonedDiv.appendTo( $elToAppendTo );


  $elToAppendTo.find('.listGroupItemInside').each(function() {
        $(this).height(40);
        $(this).addClass('borderedListGroupItem');
  });

  $clonedDiv.height('auto');
  var height =  $clonedDiv.height();
  $clonedDiv.height(height + 20);

  

  $elToAppendTo.find('.listGroupItemInside').droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })

resize();



}

function perform_Panel_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedPanelDroppable");
  $clonedDiv.height(20);
  
  $clonedDiv.appendTo( $elToAppendTo );

  $elToAppendTo.find('.insidePanel').each(function() {
        $(this).height(40);
        $(this).addClass('borderedPanelItem');
  });

  $clonedDiv.height('auto');
  var height =  $clonedDiv.height();
  $clonedDiv.height(height + 20);

  $elToAppendTo.find('.insidePanel').droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })

resize();

}

function perform_Table_Droppable($elToAppendTo, $clonedDiv){
  $clonedDiv.removeClass("hiddenDiv");
  $clonedDiv.addClass("borderedTableDroppable");
  $clonedDiv.height(20);
  
  

  
  $clonedDiv.appendTo( $elToAppendTo );

  $clonedDiv.height('auto');
  var height =  $clonedDiv.height();
  
  $clonedDiv.height(height + 20);

  $elToAppendTo.find('.borderedTableCell').droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("formGroupDraggable") || d.hasClass("gmapsDraggable") ||
                            d.hasClass("responsiveEmbedDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') )
                      {
                          perform_Paragraph_In_Row($(this), $clonedDiv);
                          resize();
                       }else if( $clonedDiv.hasClass('imgElement') ){
                      
                           perform_Image_In_Row($(this), $clonedDiv);
                           resize();
                      }else if ( $clonedDiv.hasClass('customDiv') ){
                            perform_Div_Droppable($(this), $clonedDiv);
                            resize();

                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              
                              var k = 1;
                              var $parent = $clonedDiv.parent();
                              $parent.siblings('.borderedTableCell').each(function() {
                                  k++;
                              });
                              
                              var $tableRow = $parent.parent().closest('.borderedTableRow');
                              var $table = $tableRow.parent().closest('.tableElement');
                              var tableWidth = $table.width();

                              $parent.width((tableWidth - 20) / k);

                              $clonedDiv.css('left', '14px');

                              
                              
                              
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              
                              $clonedDiv.width(width - 30);
                              $clonedDiv.css('left', '14px');

                              var $parent = $clonedDiv.parent();
                              var width = $clonedDiv.width();
                              $parent.width(width + 5);
                              
                              
                              
                              
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                          perform_Button_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }

                     
                     
                    }


                  }); 
                   

                $parentElement = $clonedDiv.parent();
                var $table = $clonedDiv.find('.customTable');
                var $tableRowElement = $table.find('.borderedTableRow');
                if( ($parentElement.hasClass('borderedDivDroppable')) || ($parentElement.hasClass('borderedRowDroppable')) || ($parentElement.hasClass('borderedRowColDroppable')) ){
                           
                          
                          $tableRowElement.height(30);
                          $table.height(50);
                          

                          $parentElement.height('auto');
                          var height = $parentElement.height();
                          $parentElement.height(height + 20);
                          
                }

                if ( $parentElement.hasClass('borderedDivDroppable') ){
                    $table.css('margin-top', '10px');
                }else if ( $parentElement.hasClass('borderedRowDroppable') ){
                    $table.css('margin-top', '10px');
                }

resize();


} 

$( document ).on( 'click', '.add-table-row', function (e) {
e.preventDefault();

var $table = $(this).parent().closest('.borderedTableDroppable').find('.tableElement');


var html = '<tr class="borderedTableRow">' +
               '<td class="borderedTableCell ui-droppable ui-sortable">' +
                    '<div class="tablecell-description ui-sortable-handle"> TABLE CELL </div>' +
                    '<div class="table-edit-icons ui-sortable-handle">' +
                        '<span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus"></i>Cell</a></span>' +
                        '<span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o"></i></a></span>' +
                        '<span class="table-cell-delete"><a href="#"><i class="fa fa-times"></i></a></span>' +
                    '</div>' +
                '</td>' +
                '<td class="borderedTableCell ui-droppable ui-sortable">' +
                    '<div class="tablecell-description ui-sortable-handle"> TABLE CELL </div>' +
                    '<div class="table-edit-icons ui-sortable-handle">' +
                         '<span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus"></i>Cell</a></span>' +
                         '<span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o"></i></a></span>' +
                         '<span class="table-cell-delete"><a href="#"><i class="fa fa-times"></i></a></span>' +
                    '</div>' +
                '</td>' +
             '</tr>';

$table.find('tbody').append(html);

applyTableCellDroppable();

resize();

});

$( document ).on( 'click', '.add-table-cell', function (e) {
e.preventDefault();

var $tableRow = $(this).parent().closest('.borderedTableRow');
var html = '<td class="borderedTableCell">' +
                   '<div class="tablecell-description ui-sortable-handle"> TABLE CELL </div>' +
                   '<div class="table-edit-icons ui-sortable-handle">' +
                       '<span class="table-add-cell"><a href="#" class="add-table-cell"><i class="fa fa-plus"></i>Cell</a></span>' +
                       '<span class="table-cell-edit"><a href="#"><i class="fa fa-pencil-square-o"></i></a></span>' +
                       '<span class="table-cell-delete"><a href="#"><i class="fa fa-times"></i></a></span>' +
                       '</div>' +
            '</td>';

$tableRow.append(html);
applyTableCellDroppable();
resize();

});

function applyTableCellDroppable(){
$('.borderedTableCell').droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                               d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                               d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                               d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                               d.hasClass("formGroupDraggable") || d.hasClass("gmapsDraggable") ||
                               d.hasClass("responsiveEmbedDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') )
                      {
                          perform_Paragraph_In_Row($(this), $clonedDiv);
                          resize();
                       }else if( $clonedDiv.hasClass('imgElement') ){
                      
                           perform_Image_In_Row($(this), $clonedDiv);
                           resize();
                      }else if ( $clonedDiv.hasClass('customDiv') ){
                            perform_Div_Droppable($(this), $clonedDiv);
                            resize();

                      }else if ( $clonedDiv.hasClass('customDiv') ){
                            perform_Div_Droppable($(this), $clonedDiv);
                            resize();

                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              
                              var k = 1;
                              var $parent = $clonedDiv.parent();
                              $parent.siblings('.borderedTableCell').each(function() {
                                  k++;
                              });
                              
                              var $tableRow = $parent.parent().closest('.borderedTableRow');
                              var $table = $tableRow.parent().closest('.tableElement');
                              var tableWidth = $table.width();

                              $parent.width((tableWidth - 20) / k);
                              
                              $clonedDiv.css('left', '14px');

                              
                              
                              
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              
                              $clonedDiv.width(width - 30);
                              $clonedDiv.css('left', '14px');

                              var $parent = $clonedDiv.parent();
                              var width = $clonedDiv.width();
                              $parent.width(width + 5);
                              
                              
                              
                              
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                          perform_Button_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }

                     
                     
                  }


                  }); 
                   

}


$('.div-draggable').draggable({
  iframeFix: true,
  revert: "invalid",
  appendTo: "body",
  helper: "clone"

});

 
 $('.row-col-droppable').draggable({
  iframeFix: true,
  revert: "invalid",
  appendTo: "body",
  helper: "clone"

});

$('.row-droppable').draggable({
  iframeFix: true,
  revert: "invalid",
  appendTo: "body",
  helper: "clone"

});

$('.container-draggable').draggable({
  iframeFix: true,
  revert: "invalid",
  appendTo: "body",
  helper: "clone"
});

$( ".inputDroppable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".pDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});
$( ".imgDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".buttonDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".buttonGroupDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".dropDownDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".table-droppable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".tabletr-droppable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".panelDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".listGroupDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".orderedListDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".unorderedListDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".responsiveEmbedDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".carouselDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".navbarDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".formGroupDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".gmapsDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});

$( ".mansonryGridDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
});



$( document ).on( 'click', '.customDropDown', function (e) {
 var $current = $(e.target);

var $parent = $(this).parent().closest('.borderedDropDown');
    


    var $ul = $parent.find('.dropdown-menu');
    
    var height = $parent.find('.dropdown').height() + 40;
    

  

    $ul.children('li').each(function() {
      
      height += $(this).height();
    });
    
    $parent.height(height + 30);
    
    
    
    $parent.parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      
      
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


    
    
});


function resize(){
  
  
  var htmlEmptyTitle = '<div class="empty-title">Place Contents here</div>';
  var htmlEmptyDesc = '<div class="empty-description">Drag Elements from the Left Side Panel</div>';

  
  
  if( !$.trim( $('#content-frame').html() ).length ) {
    
    $('#content-frame').append(htmlEmptyTitle);
    $('#content-frame').append(htmlEmptyDesc);
  }else{
    
      
      if ($('#content-frame').find('.empty-title').length && $('#content-frame').find('.empty-description').length && $('#content-frame').children().length == 2){

      }else{
        
        $('#content-frame').find('.empty-title').remove();
        $('#content-frame').find('.empty-description').remove();
      }

    
  }

  
  if( $('.content-frame').hasClass('hover') ){
          $('.content-frame').removeClass('hover');
  }

  $('.content-frame').find('.hover').removeClass('hover');
  

  var contentWidth = $('.content-frame').width();
  var contentHeight = $('.content-frame').height();
  
  



$(".borderedContainer").each(function() {

  if( $(this).hasClass('container')){
       
       $('.borderedContainer').width(contentWidth - 50);
       $('.narrowBorderedContainer').width(contentWidth - 180);
  }else if($(this).hasClass('container-fluid')){
       $('.borderedContainer').width(contentWidth - 50);
       $('.narrowBorderedContainer').width(contentWidth - 180);
  }

  applyParentStyles($(this));

});



$('.borderedVerticalInput').each(function() {
if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


$('.borderedInput').each(function() {
if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      
      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


$('.borderedGmapsElement').each(function() {

    

    for ( var k=0;k<mapsArray.length;k++ ) {
        google.maps.event.trigger(mapsArray[k], 'resize');
    }


});


$('.borderedUnorderedListDroppable').each(function() {

  $(this).height('auto');
    applyParentStyles($(this));

});

$('.borderedOrderedListDroppable').each(function() {

  $(this).height('auto');
    applyParentStyles($(this));

});

$('.borderedNavbar').each(function() {

  $(this).height('auto');
    applyParentStyles($(this));

});


$('.borderedCarousel').each(function() {


var $carouselDrop = $(this);
var $carousel = $(this).find('.carousel');
var $carouselInner = $carousel.find('.carousel-inner');

if($carousel.find('.borderedDivDroppable').length > 0){

      $carousel.find('.borderedDivDroppable').each(function(){
        var tempH = 0;
        if( $(this).children().length > 0){
          $(this).children().each(function(){
              tempH += $(this).height();
          });
          $(this).height(tempH + 40);
        }

      });

  }
    
    var maxHeight = [];
    var divFound = false;
    $carouselInner.find('.carouselItem').each(function(){
      var heightTemp = 0;

      if($(this).find('.borderedDivDroppable').length > 0){
        $(this).find('.borderedDivDroppable').each(function(){
          heightTemp += $(this).height();
          divFound = true;
        });
        if( maxHeight.length == 0 ){maxHeight[0] = heightTemp;}else{maxHeight.push(heightTemp);}
      }
    });

    if(divFound){
      var maxH = maxHeight[0];
      for(var k=1;k<maxHeight.length;k++){
          if(maxHeight[k] > maxH){
              maxH = maxHeight[k];
          }
      }

        $carouselInner.find('.carouselItem').height(maxH + 60);
        $carouselInner.height(maxH + 130);
        var carInnerHeight = $carouselInner.height();
        
        $carousel.height(carInnerHeight + 20);
        var carouselHeight = $carousel.height();
        $carouselDrop.height(carouselHeight + 20);
    }


applyParentStyles($(this));
  
});

$('.borderedCarousel').parents().each(function() {
if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ){
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


$('.borderedDropDown').each(function() {

    var $buttonElement = $(this).find('.dropdown');
    var buttonHeight = $buttonElement.height();
    var buttonWidth = $buttonElement.width();
   
    $(this).height(buttonHeight + 40); 

    $buttonElement.css({'margin-top': '35px', 'margin-left': '30px', 'margin-right': '30px'});
    

    $(this).height('auto');
    applyParentStyles($(this));

});


$('.borderedDropDown').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


$('.borderedButtonGroup').each(function() {

 
    
    var $buttonElement = $(this).find('.btnGroupInner');
    var buttonHeight = $buttonElement.height();
    var buttonWidth = $buttonElement.width();
   
    if($buttonElement.hasClass('btn-group-justified')){
        $(this).removeClass('divAsInline');
        
    }else{
       $(this).addClass('divAsInline');
       
       $buttonElement.css({'margin-left': '30px', 'margin-right': '30px'});
    }
    $(this).height(buttonHeight + 40); 

    
    

    $(this).height('auto');
    applyParentStyles($(this));


});

$('.borderedButtonGroup').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }
});

$('.buttonElement').each(function() {

  if( $(this).parent().closest('.buttonDraggable').length == 0  ){

    var $buttonElement = $(this).find('button');
    var buttonHeight = $buttonElement.height();
    var buttonWidth = $buttonElement.width();
    
    if($buttonElement.hasClass('btn-block')){
        $(this).removeClass('divAsInline');

       $(this).height(buttonHeight + 20); 

    }else{
        $(this).addClass('divAsInline');
        
        $(this).height(buttonHeight + 70);
        $(this).width(buttonWidth + 95);
        
        $buttonElement.css({'margin-left': '30px', 'margin-right': '30px'});
    }

    $(this).width('auto');
    $(this).height('auto');
    applyParentStyles($(this));

  }

});

$('.borderedButton').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      

      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }
});


$('.imgElement').each(function() {

  if( $(this).parent().closest('.imgDraggable').length == 0  ){

$(this).parents().each(function() {

  
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) &&
         !$(this).hasClass('borderedTableCell') && !$(this).hasClass('carouselItem') && !$(this).hasClass('carousel-inner') && !$(this).hasClass('carousel') &&
        !$(this).hasClass('customCarouselWithDivs') ) 
    {
      
      $(this).height('auto');
      

        var height = $(this).height();
        $(this).height(height + 20);
      
    
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');

        if( ($(this).closest('.content-frame').length > 0) && (!$(this).closest('.borderedContainer').length > 0) && (!$(this).closest('.borderedRowColDroppable').length > 0) ){
          
          var width = $(this).width();
          $(this).width(width - 10);
          $(this).css('left', '15px');
       }

      }

      applyParentStyles($(this));
      
    }else {
      
      return false;
    }
   });
}
});

$('.imgElement').each(function() {

if( $(this).parent().closest('.imgDraggable').length == 0  ){

  

  var $imageElement = $(this).find('img');
  var imageHeight = $imageElement.height();
  $(this).height(imageHeight);
  
  


if($(this).hasClass('borderedParagraph')){

 if($(this).find('img').length > 0){

  var $inner = $(this).find('img');
  var innerWidth = $inner.width();
  
  
  
  $(this).css({'width':innerWidth});

  if($inner.hasClass('center-block')){
      $(this).addClass('imageCenterBlock');
      $(this).removeClass('divAsInline');
  }else{
      $(this).removeClass('imageCenterBlock');
      $(this).addClass('divAsInline');
      
  }
  
  
  if($inner.hasClass('imgTestResponsive')){
      $(this).addClass('imgResponsive');
      $(this).removeClass('divAsInline');
  }else{
    $(this).removeClass('imgResponsive');
    $(this).addClass('divAsInline');
    
  }
}

 } 


  applyParentStyles($(this));
}

});


$('.borderedPanelDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell'))  ) 
    {
      
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      

      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });


$('.borderedParagraph').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell'))  ) 
    {
      
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 10);

      

      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        $(this).width('auto');
        
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });



$('.divSpanAsInline').each(function() {

  if ( $(this).find('br').length > 0 ) {
          $(this).removeClass('divSpanAsInline');
          $(this).addClass('divSpanAsBlock');
  }

});

$('.divSpanAsBlock').each(function() {

  if ( $(this).find('br').length == 0 ) {
          $(this).removeClass('divSpanAsBlock');
          $(this).addClass('divSpanAsInline');
  }

});

$('.divSpanAsBlock').each(function() {

  var $previousElement = $(this).prev();
  var prevDisplay = $previousElement.css('display');
  
  if ( prevDisplay == "inline" || prevDisplay == "inline-block" ) {
        $previousElement.after("<br>");
  }

  var $previousEl = $(this).prev();
  if($previousEl.is('br')){
        
        var $prevPrevEl = $previousEl.prev();
        if($prevPrevEl.is('br')){
            
            $prevPrevEl.remove();
        }

  }


});

$('.divSpanAsInline').each(function() {

  var $nextElement = $(this).next();

  var $afterNextEl = $nextElement.next();
  
  if( $nextElement.is('br') && !$afterNextEl.hasClass('divSpanAsBlock') && !$afterNextEl.is('br') ){
        
            $nextElement.remove();
    
  }


});


$('.borderedPanelDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
        $(this).height('auto');
        var height = $(this).height();
        $(this).height(height + 20);

        if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
          
          $(this).width('auto');
          
        }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });

$('.borderedListGroupDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
        $(this).height('auto');
        var height = $(this).height();
        $(this).height(height + 20);

        if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
          
          $(this).width('auto');
          
        }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });

$('.borderedOrderedListDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
        $(this).height('auto');
        var height = $(this).height();
        $(this).height(height + 20);

        if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
          
          $(this).width('auto');
          
        }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });
  
  $('.borderedUnorderedListDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
        $(this).height('auto');
        var height = $(this).height();
        $(this).height(height + 20);

        if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
          
          $(this).width('auto');
          
        }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });

  $('.borderedNavbar').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
        $(this).height('auto');
        var height = $(this).height();
        $(this).height(height + 20);

        if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
          
          $(this).width('auto');
          
        }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });


  $('.borderedDivDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      
      $(this).height('auto');
      var height = $(this).height();
      $(this).height(height + 20);
      

      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer')){
        
        $(this).width('auto');
        
        
      }

      applyParentStyles($(this));

    }else {
      
      return false;
    }

   });
  
  

  $('.borderedRowDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell')) ) 
    {
      if($(this).children().length > 0){
        $(this).height('auto');
        if($(this).hasClass('borderedContainer')){
          var height = $(this).height();
          $(this).height(height + 80);
        }else{
          var height = $(this).height();
          $(this).height(height + 20);
        }
      }
      
      
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer') ){
        
        if($(this).children().length > 0){
          $(this).width('auto');
          var width = $(this).width();
          $(this).width(width -50);
        }
      }

      applyParentStyles($(this));
      
    }else {
      
      return false;
    }
   });


  $('.borderedRowColDroppable').parents().each(function() {
    if( (!$(this).hasClass('content-frame')) && (!$(this).hasClass('main')) && (!$(this).hasClass('borderedTableCell'))  ) 
    {
      
      $(this).height('auto');
      

        var height = $(this).height();
        $(this).height(height + 20);
      
    
      
      if( !$(this).hasClass('borderedRowColDroppable') && !$(this).hasClass('borderedContainer') && !$(this).hasClass('carouselItem') &&
       !$(this).hasClass('carousel-inner') && !$(this).hasClass('carousel') && !$(this).hasClass('customCarouselWithDivs') ){
        $(this).width('auto');

        if( ($(this).closest('.content-frame').length > 0) && (!$(this).closest('.borderedContainer').length > 0) && (!$(this).closest('.borderedRowColDroppable').length > 0) ){
          
          var width = $(this).width();
          $(this).width(width - 10);
          $(this).css('left', '15px');
       }

      }

      applyParentStyles($(this));
      
    }else {
      
      return false;
    }
   });

$('.borderedTableCell').parents().each(function() {
 
 if($(this).hasClass('borderedTableDroppable') || $(this).hasClass('borderedDivDroppable') || $(this).hasClass('borderedRowDroppable') || $(this).hasClass('borderedRowColDroppable')){

    $(this).height('auto');
    var height = $(this).height();
    $(this).height(height + 20);

 }


 applyParentStyles($(this));
});

$('.borderedTableDroppable').each(function() {
var $table = $(this).find('table');
$table.css({'width' : '100%'});

});




$('.main').css('margin-bottom', '100px');
$('.content-frame').css('margin-bottom', '80px');


  
 $('.main').height('auto');
 var mainHeight = $('.main').height();
  $('.main').height(mainHeight + 280 );

  $('.content-frame').height('auto');

  var contentFrameHeight = $('.content-frame').height();
  $('.content-frame').height(contentFrameHeight + 320 );

  $('.main').css('margin-bottom', '100px');
  $('.content-frame').css('margin-bottom', '80px');




if ($('.content-frame').height() < screen.height ){
$('.content-frame').height(1100);
}


/**************************** MONITOR CHANGES ON SIZE FOR description, edit-delete icons **********************************/
if( $('.content-frame').find('.verticalInputElement').length > 0 ){

$('.verticalInputElement').each(function() {

if( $(this).parent().closest('.inputDroppable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.inputTextVerticalDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.inputVerticalContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '145px'});
       $(this).find('.inputVerticalEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '115px'});
       $(this).find('.inputVerticalLabelEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.inputVerticalInputEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.inputVerticalDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 120) && ($(this).width() < 200) ){
       $(this).find('.inputTextVerticalDescription').css({'font-size' : '14px', 'width' : '40px', 'height' : '18px', 'line-height' : '18px'});
       
       $(this).find('.inputVerticalContent').css({'font-size' : '11px', 'width' : '12px', 'height' : '15px', 'line-height' : '15px', 'top' : '0px','right' : '65px'});
       $(this).find('.inputVerticalEdit').css({'font-size' : '11px', 'width' : '12px', 'height' : '15px', 'line-height' : '15px', 'top' : '0px','right' : '50px'});
       $(this).find('.inputVerticalLabelEdit').css({'font-size' : '11px', 'width' : '12px', 'height' : '15px', 'line-height' : '15px', 'top' : '0px','right' : '35px'});
       $(this).find('.inputVerticalInputEdit').css({'font-size' : '11px', 'width' : '12px', 'height' : '15px', 'line-height' : '15px', 'top' : '0px','right' : '20px'});
       $(this).find('.inputVerticalDelete').css({'font-size' : '11px', 'width' : '12px', 'height' : '15px', 'line-height' : '15px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 120 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 10;
      var eachWidthString = '10px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';

    

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';

      var rightEditLeft = rightEdit - 5 - eachWidth;
      var rightEditLeftString = rightEditLeft + 'px';

      var rightEditRight = rightEditLeft - 5 - eachWidth;
      var rightEditRightString = rightEditRight + 'px';


      var rightDelete = rightEditRight - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.inputVerticalDescription').css({'font-size' : '12px', 'width' : '40px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.inputVerticalContent').css({'font-size' : '11px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '15px', 'top' : topString,'right' : rightContentString});
       $(this).find('.inputVerticalEdit').css({'font-size' : '11px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '15px', 'top' : topString,'right' : rightEditString});
       $(this).find('.inputVerticalLabelEdit').css({'font-size' : '11px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '15px', 'top' : topString,'right' : rightEditLeftString});
       $(this).find('.inputVerticalInputEdit').css({'font-size' : '11px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '15px', 'top' : topString,'right' : rightEditRightString});
       $(this).find('.inputVerticalDelete').css({'font-size' : '11px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '15px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}


if( $('.content-frame').find('.formGroupElement').length > 0 ){

$('.formGroupElement').each(function() {

if( $(this).parent().closest('.formGroupDraggable').length == 0  ){

if ( $(this).width() > 250 ){
       $(this).find('.formGroupDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.formGroupEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.formGroupDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

 }else if( ($(this).width() > 100) && ($(this).width() < 250) ){
       $(this).find('.formGroupDescription').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.formGroupEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.formGroupDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

      
}else if ( $(this).width() < 100 ){

       $(this).find('.formGroupDescription').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.formGroupEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.formGroupDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

        
}

}
});
}


if( $('.content-frame').find('.inputElement').length > 0 ){

$('.inputElement').each(function() {

if( $(this).parent().closest('.inputDroppable').length == 0  ){

if ( $(this).find('label').length > 0 ) {

  if ( $(this).width() > 200 ){
       $(this).find('.labelDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
      
       $(this).find('.labelContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.labelEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.labelDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 150) && ($(this).width() < 200) ){
       $(this).find('.labelDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.labelContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.labelEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.labelDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

 }else if ( $(this).width() < 150 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.labelDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.labelContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.labelEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.labelDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }


}else if ( $(this).find('input').length > 0 ) {

  if ( $(this).width() > 200 ){
       $(this).find('.inputHorizontalDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.inputHorizontalContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.inputHorizontalEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.inputHorizontalDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 150) && ($(this).width() < 200) ){
       $(this).find('.inputHorizontalDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.inputHorizontalContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.inputHorizontalEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.inputHorizontalDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

 }else if ( $(this).width() < 150 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.inputHorizontalDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.inputHorizontalContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.inputHorizontalEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.inputHorizontalDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }

}



} 
}); 
} 


if( $('.content-frame').find('.borderedPanelDroppable').length > 0 ){

$('.borderedPanelDroppable').each(function() {

if( $(this).parent().closest('.panelDraggable').length == 0  ){

if ( $(this).width() > 250 ){
       $(this).find('.panelDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.panelEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.panelDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

 }else if( ($(this).width() > 100) && ($(this).width() < 250) ){
       $(this).find('.panelDescription').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.panelDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

      
}else if ( $(this).width() < 100 ){

       $(this).find('.panelDescription').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.panelDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

        
}

}
});
}

if( $('.content-frame').find('.borderedPanelItem').length > 0 ){

$('.borderedPanelItem').each(function() {

if( $(this).parent().closest('.panelDraggable').length == 0  ){

if ( $(this).width() > 250 ){
       $(this).find('.panelHeadingDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.panelHeadingEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.panelHeadingDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

       $(this).find('.panelContent-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.panelContentEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.panelContentDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

       $(this).find('.panelFooter-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.panelFooterEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.panelFooterDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

 }else if( ($(this).width() > 100) && ($(this).width() < 250) ){
       $(this).find('.panelHeadingDescription').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelHeadingEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.panelHeadingDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

       $(this).find('.panelContent-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelContentEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.panelContentDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

       $(this).find('.panelFooter-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelFooterEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.panelFooterDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

      
}else if ( $(this).width() < 100 ){

       $(this).find('.panelHeadingDescription').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelHeadingEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.panelHeadingDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

       $(this).find('.panelContent-description').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelContentEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.panelContentDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

       $(this).find('.panelFooter-description').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.panelFooterEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.panelFooterDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

        
}

}
});
}



if( $('.content-frame').find('.borderedListGroupDroppable').length > 0 ){

$('.borderedListGroupDroppable').each(function() {

if( $(this).parent().closest('.listGroupDraggable').length == 0  ){

if ( $(this).width() > 250 ){
       $(this).find('.listGroupDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.listGroupEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.listGroupDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

 }else if( ($(this).width() > 100) && ($(this).width() < 250) ){
       $(this).find('.listGroupDescription').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.listGroupEdit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.listGroupDelete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

      
}else if ( $(this).width() < 100 ){

       $(this).find('.listGroupDescription').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.listGroupEdit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.listGroupDelete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

        
}

}
});
}



if( $('.content-frame').find('.borderedNavbar').length > 0 ){

$('.borderedNavbar').each(function() {

if( $(this).parent().closest('.navbarDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.navbarDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.navbarContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '145px'});
       $(this).find('.navbarEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '115px'});
       $(this).find('.navbarEditLeft').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.navbarEditRight').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.navbarDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }

}

});

}



if( $('.content-frame').find('.borderedResponsiveEmbed').length > 0 ){

$('.borderedResponsiveEmbed').each(function() {

if( $(this).parent().closest('.responsiveEmbedDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.responsiveEmbedDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.responsiveEmbedContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.responsiveEmbedEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.responsiveEmbedDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.responsiveEmbedDescription').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.responsiveEmbedContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.responsiveEmbedEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.responsiveEmbedDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.responsiveEmbedDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.responsiveEmbedContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.responsiveEmbedEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.responsiveEmbedDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}



if( $('.content-frame').find('.borderedCarousel').length > 0 ){

$('.borderedCarousel').each(function() {

if( $(this).parent().closest('.carouselDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.carouselDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.carouselContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.carouselEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.unorderedListDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.carouselDescription').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.carouselContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.carouselEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.carouselDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.carouselDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.carouselContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.carouselEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.carouselDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}


if( $('.content-frame').find('.customUnorderedList').length > 0 ){

$('.customUnorderedList').each(function() {

if( $(this).parent().closest('.unorderedListDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.unorderedListDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.unorderedListContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.unorderedListEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.unorderedListDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.unorderedListDescription').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.unorderedListContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.unorderedListEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.unorderedListDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.unorderedListDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.unorderedListContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.unorderedListEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.unorderedListDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}


if( $('.content-frame').find('.customOrderedList').length > 0 ){

$('.customOrderedList').each(function() {

if( $(this).parent().closest('.orderedListDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.orderedListDescription').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.orderedListContent').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.orderedListEdit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.orderedListDelete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.orderedListDescription').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.orderedListContent').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.orderedListEdit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.orderedListDelete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.orderedListDescription').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.orderedListContent').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.orderedListEdit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.orderedListDelete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}

if( $('.content-frame').find('.buttonElement').length > 0 ){

$('.buttonElement').each(function() {

if( $(this).parent().closest('.buttonDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.button-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       
       $(this).find('.button-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.button-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.button-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.button-description').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
      
       $(this).find('.button-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.button-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.button-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.button-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       
       $(this).find('.button-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.button-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.button-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}

if( $('.content-frame').find('.buttonGroupElement').length > 0 ){

$('.buttonGroupElement').each(function() {

if( $(this).parent().closest('.buttonGroupDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.buttonGroup-description').css({'font-size' : '12px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.buttonGroup-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.buttonGroup-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.buttonGroup-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.buttonGroup-description').css({'font-size' : '12px', 'width' : '80px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.buttonGroup-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.buttonGroup-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.buttonGroup-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.buttonGroup-description').css({'font-size' : '10px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.buttonGroup-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.buttonGroup-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.buttonGroup-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}

if( $('.content-frame').find('.dropDownElement').length > 0 ){

$('.dropDownElement').each(function() {

if( $(this).parent().closest('.dropDownDraggable').length == 0  ){


 if ( $(this).width() > 200 ){
       $(this).find('.dropDown-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.dropDown-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.dropDown-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.dropDown-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 110) && ($(this).width() < 200) ){
       $(this).find('.button-description').css({'font-size' : '14px', 'width' : '60px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.dropDown-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '55px'});
       $(this).find('.dropDown-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.dropDown-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 110 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.dropDown-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.dropDown-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.dropDown-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.dropDown-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}
});
}


if( $('.content-frame').find('.pElement').length > 0 ){

$('.pElement').each(function() {

if( $(this).parent().closest('.pDraggable').length == 0  ){

$(this).height('auto');



 
if( $(this).find('.paragraph-description').length > 0 ){

 if ( $(this).width() > 200 ){
       $(this).find('.paragraph-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.paragraph-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.paragraph-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.paragraph-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 150) && ($(this).width() < 200) ){
       $(this).find('.paragraph-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.paragraph-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.paragraph-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.paragraph-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

 }else if ( $(this).width() < 150 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightIcons + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.paragraph-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.paragraph-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.paragraph-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.paragraph-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }
}else if ( $(this).find('.heading-description').length > 0 ){

  if ( $(this).width() > 200 ){
       $(this).find('.heading-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.heading-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.heading-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.heading-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 150) && ($(this).width() < 200) ){
       $(this).find('.heading-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.heading-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.heading-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.heading-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

 }else if ( $(this).width() < 150 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.heading-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.heading-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.heading-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.heading-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }

}else if ( $(this).find('.span-description').length > 0 ){


  $(this).addClass('divSpanAsInline');
  


  if ( $(this).width() > 200 ){
       $(this).find('.span-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       
       $(this).find('.span-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.span-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.span-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 150) && ($(this).width() < 200) ){
       $(this).find('.span-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.span-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.span-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.span-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

 }else if ( $(this).width() < 150 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightIcons =  width - eachWidth - 2;
      var rightIconsString = rightIcons + 'px';

      var rightContent =  rightIcons - eachWidth - 5;
      var rightContentString = rightContent + 'px';

      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.span-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       
       $(this).find('.span-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.span-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.span-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});
   
 }

}

}

});
}

if( $('.content-frame').find('.imgElement').length > 0 ){

$('.imgElement').each(function() {

if( $(this).parent().closest('.imgDraggable').length == 0  ){

  
  if ( $(this).width() > 200 ){
       $(this).find('.img-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.img-content').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.img-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.img-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if( ($(this).width() > 100) && ($(this).width() < 200) ){
       $(this).find('.img-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.img-content').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '65px'});
       $(this).find('.img-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '40px'});
       $(this).find('.img-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '15px'});

       
}else if ( $(this).width() < 100 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';
      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';

       $(this).find('.img-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.img-content').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.img-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.img-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});

}
}
});
}


if( $('.content-frame').find('.borderedRowDroppable').length > 0 ){
$('.borderedRowDroppable').each(function() {

if( $(this).parent().closest('.row-droppable').length == 0 || $(this).parent().closest('.row-col-droppable').length == 0 ){

  
if ( $(this).width() > 200 ){
       $(this).find('.row-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.row-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.row-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});
 }else if( ($(this).width() > 90) && ($(this).width() < 200) ){
       $(this).find('.row-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.row-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.row-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '35px'});

}else if ( $(this).width() < 90 ){
       $(this).find('.row-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.row-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '17px', 'right' : '60px'});
       $(this).find('.row-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '17px', 'right' : '35px'});

}
}
});
}

if( $('.content-frame').find('.borderedRowColDroppable').length > 0 ){
$('.borderedRowColDroppable').each(function() {

if( $(this).parent().closest('.row-col-droppable').length == 0 ){

 
if ( $(this).width() > 200 ){
       $(this).find('.colRow-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.colRow-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '30px'});
 }else if( ($(this).width() > 80) && ($(this).width() < 200) ){
       $(this).find('.colRow-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.colRow-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       

}else if ( $(this).width() < 80 ){
       var width = $(this).width();
       var eachWidth = 15;
       var remainWidth = width - eachWidth - 2;
       var editRightString = remainWidth + 'px';
       
       $(this).find('.colRow-description').css({'font-size' : '12px', 'width' : '70px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.colRow-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '15px', 'right' : editRightString});

}
}
});
}

if( $('.content-frame').find('.borderedDivDroppable').length > 0 ){
$('.borderedDivDroppable').each(function() {

if( $(this).parent().closest('.div-draggable').length == 0 ){
 
 if ( $(this).width() > 250 ){
       $(this).find('.div-container-description').css({'font-size' : '14px', 'width' : '80px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.div-container-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '60px'});
       $(this).find('.div-container-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px', 'right' : '35px'});

 }else if( ($(this).width() > 100) && ($(this).width() < 250) ){
       $(this).find('.div-container-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.div-container-edit').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '40px'});
       $(this).find('.div-container-delete').css({'font-size' : '12px', 'width' : '25px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});

      
}else if ( $(this).width() < 100 ){

       $(this).find('.div-container-description').css({'font-size' : '12px', 'width' : '30px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.div-container-edit').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '20px'});
       $(this).find('.div-container-delete').css({'font-size' : '12px', 'width' : '20px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px', 'right' : '0px'});

        
}
}
});
}

if( $('.content-frame').find('.borderedTableDroppable').length > 0 ){
$('.borderedTableDroppable').each(function() {
 
if( $(this).parent().closest('.table-droppable').length == 0 ){

  

 if ( $(this).width() > 250 ){
       $(this).find('.table-description').css({'font-size' : '14px', 'width' : '100px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.table-add-row').css({'font-size' : '14px', 'width' : '85px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.table-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.table-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 120) && ($(this).width() <= 250) ){
       $(this).find('.table-description').css({'font-size' : '14px', 'width' : '50px', 'height' : '25px', 'line-height' : '17px'});
       $(this).find('.table-add-row').css({'font-size' : '12px', 'width' : '45px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '50px'});
       $(this).find('.table-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.table-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 120 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';
      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


      $(this).find('.table-add-row').find('.add-table-row').html('<i class="fa fa-plus" ></i>');

       $(this).find('.table-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.table-add-row').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.table-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.table-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});

       
 }
}
});
}

if( $('.content-frame').find('.borderedTableCell').length > 0 ){
$('.borderedTableCell').each(function() {
 
if( $(this).parent().closest('.table-droppable').length == 0 ){

  

 if ( $(this).width() > 250 ){
       $(this).find('.tablecell-description').css({'font-size' : '14px', 'width' : '100px', 'height' : '30px', 'line-height' : '25px'});
       $(this).find('.table-add-cell').css({'font-size' : '14px', 'width' : '85px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '85px'});
       $(this).find('.table-cell-edit').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '55px'});
       $(this).find('.table-cell-delete').css({'font-size' : '14px', 'width' : '25px', 'height' : '25px', 'line-height' : '25px', 'top' : '0px','right' : '25px'});
 }else if ( ($(this).width() > 120) && ($(this).width() <= 250) ){
       $(this).find('.tablecell-description').text('Cell');
       $(this).find('.tablecell-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '25px', 'line-height' : '20px'});
       

       $(this).find('.table-add-cell').css({'font-size' : '12px', 'width' : '45px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '50px'});
       $(this).find('.table-cell-edit').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '30px'});
       $(this).find('.table-cell-delete').css({'font-size' : '12px', 'width' : '15px', 'height' : '15px', 'line-height' : '17px', 'top' : '0px','right' : '5px'});

 }else if ( $(this).width() < 120 ){
      var width = $(this).width();
      var topString = '20px';
      var eachWidth = 15;
      var eachWidthString = '15px';

      var rightContent =  width - eachWidth - 2;
      var rightContentString = rightContent + 'px';
      var rightEdit = rightContent - 5 - eachWidth;
      var rightEditString = rightEdit + 'px';
      var rightDelete = rightEdit - 5 - eachWidth;;
      var rightDeleteString = rightDelete + 'px';


       $(this).find('.table-add-cell').find('.add-table-cell').html('<i class="fa fa-plus" ></i>');

       $(this).find('.tablecell-description').text('Cell');
       $(this).find('.tablecell-description').css({'font-size' : '12px', 'width' : '50px', 'height' : '20px', 'line-height' : '17px'});
       $(this).find('.table-add-cell').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightContentString});
       $(this).find('.table-cell-edit').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightEditString});
       $(this).find('.table-cell-delete').css({'font-size' : '12px', 'width' : eachWidthString, 'height' : '15px', 'line-height' : '17px', 'top' : topString,'right' : rightDeleteString});

       
 }
}
});
}


/**************************** MONITOR CHANGES ON SIZE FOR description, edit-delete icons **********************************/




}


resize();

checkResize();


window.onresize = function(event) {


resize();

checkResize();

}

function checkResize(){

if ( window.innerWidth > 1350 && window.innerWidth < 1640){

$(".main").removeClass("content-frame-hidden");
$(".side").removeClass("content-frame-hidden");
$("#appended").remove();

$(".appTitle").css({'font-size' : '26px'});
$(".appDocumentation").css({'font-size' : '24px'});

$("button.btnToResize").removeClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.removeClass('topMenuHidden');

$('#content-frame').find('.findCustomClassName').each(function(){
  

  var $innerElement = $(this).parent();
  var classOrIDName = $(this).attr('data-type');

  if( $innerElement.is("img") ||  $innerElement.is("img")){
    var $Element = $innerElement.parent();
    $(this).find('.cssAttributes').each(function(){
        var cssType = $(this).attr('data-value');
        var cssValue = $(this).attr('data-id');
        applyCSSPropertiesOnResizeVisible($innerElement, $Element, cssType, cssValue, classOrIDName);
    });
    

  }

});


var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.removeClass('topMenuHidden');
$resizeDivTo.addClass('btn-group-sm');





$('table.customBTable').each(function(){
  var $parentTable = $(this);
 
  $(this).find('td.customBTd').each(function(){
      

      
      

      $parentTable.append($("<tr>").css('text-align','center')); 
      $parentTable.find("tr").last().append($(this));
      $(this).css({'padding-bottom' : '15px'}); 

      if( $(this).attr('colspan') == '2' ){
         $(this).removeAttr('colspan');
         $(this).find('span.customBadge').css({'margin-left' : '10px'});
         
      }
     
  });

  $parentTable.css({'margin-left' : 'auto', 'margin-right' : 'auto'});

});

$('table.customBTable').each(function(){
    $(this).find('tr').each(function(){

      if ( $(this).children().length == 0 ) {
            $(this).remove();
      }

    });
});


$('.ui_to_drag_desc').css({'font-size' : '12px'});



}
else if ( window.innerWidth > 850 && window.innerWidth <= 1350){
$(".main").addClass("content-frame-hidden");
$(".side").addClass("content-frame-hidden");

$(".appTitle").css({'font-size' : '18px'});
$(".appDocumentation").css({'font-size' : '18px'});


var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.addClass('topMenuHidden');




var $appendedElement = $(".top-container").find('h2#appended');

if( $appendedElement.children().length == 0 ){
  $(".top-container").append("<h2 class='text-center' id='appended' style='font-size:52px;margin-top:20%;'>Resize Browser <div id='appendedChild'></div></h2>");
}

  
}else if ( window.innerWidth <= 850){

$(".appTitle").css({'font-size' : '18px'});
$(".appDocumentation").css({'font-size' : '18px'});

$("button.btnToResize").addClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.addClass('topMenuHidden');

$(".main").addClass("content-frame-hidden");
$(".side").addClass("content-frame-hidden");


var $appendedElement = $(".top-container").find('h2#appended');

if( $appendedElement.children().length == 0 ){
  $(".top-container").append("<h2 class='text-center' id='appended' style='font-size:52px;margin-top:20%;'>Resize Browser <div id='appendedChild'></div></h2>");
}



}else{
  
$(".main").removeClass("content-frame-hidden");
$(".side").removeClass("content-frame-hidden");
$("#appended").remove();

$(".appTitle").css({'font-size' : '26px'});
$(".appDocumentation").css({'font-size' : '24px'});

$("button.btnToResize").removeClass('topMenuHidden');

var $menuContainer = $(".menu-container");
var $resizeDivTo = $(".menu-container").find(".resizeDivTo");
$resizeDivTo.removeClass('topMenuHidden');
$resizeDivTo.removeClass('btn-group-sm');

$('#content-frame').find('.findCustomClassName').each(function(){
  

  var $innerElement = $(this).parent();
  var classOrIDName = $(this).attr('data-type');

  if( $innerElement.is("img") ||  $innerElement.is("img")){
    var $Element = $innerElement.parent();
    $(this).find('.cssAttributes').each(function(){
        var cssType = $(this).attr('data-value');
        var cssValue = $(this).attr('data-id');
        applyCSSPropertiesOnResizeVisible($innerElement, $Element, cssType, cssValue, classOrIDName);
    });
    

  }

});



}



}



function applyRemainingStyles($parentElement, $element){


if($element && !$element.hasClass('btn-group-justified') )
{
$element.find('.findCustomClassName').each(function() {
var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();

$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');

if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){
        
          $secondParent.css(cssStyleType, cssStyleValue);
        
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){
        if($firstParent.hasClass('borderedButtonGroup') ){
          $firstParent.css(cssStyleType, cssStyleValue);
        }else{
          $secondParent.css(cssStyleType, cssStyleValue);
        }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
       $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width' ||
                        cssStyleType == 'color' || cssStyleType == 'font-size' || cssStyleType == 'font-family' || cssStyleType == 'font-style' || cssStyleType == 'font-weight' ||
                        cssStyleType == 'line-height' || cssStyleType == 'text-align' || cssStyleType == 'text-decoration' || cssStyleType == 'text-transform' ||
                        cssStyleType == 'white-space' || cssStyleType == 'background-color' ||
                        cssStyleType == 'background-image' || cssStyleType == 'background-position' || cssStyleType == 'background-size' || cssStyleType == 'background-clip' ||
                        cssStyleType == 'background-repeat' || cssStyleType == 'background-origin' || cssStyleType == 'box-shadow' ){
                  
                  
                      $firstParent.css(cssStyleType, cssStyleValue);
                  
                  
                  

              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline')){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline')){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else{ 
                    
                        $firstParent.css(cssStyleType, cssStyleValue);
                     
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }


});

});
}else{
$parentElement.find('.findCustomClassName').each(function() {
var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();

$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');

if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

          $secondParent.css(cssStyleType, cssStyleValue);
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){
        
        if($firstParent.hasClass('borderedButtonGroup') ){
            $firstParent.css(cssStyleType, cssStyleValue);
          }else{
            $secondParent.css(cssStyleType, cssStyleValue);
          }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
       $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width' ){

                  $firstParent.css(cssStyleType, cssStyleValue); 
                  

              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else if ($secondParent.hasClass('buttonElement')){
                        $firstParent.css(cssStyleType, cssStyleValue);
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }


});

});
}

if($element && !$element.hasClass('btn-group-justified'))
{
$element.find('.findCustomIDName').each(function() {
  var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();
  
$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');

if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

          $secondParent.css(cssStyleType, cssStyleValue);
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

        if($firstParent.hasClass('borderedButtonGroup') ){
          $firstParent.css(cssStyleType, cssStyleValue);
        }else{
          $secondParent.css(cssStyleType, cssStyleValue);
        }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
       $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width' ){

                  $firstParent.css(cssStyleType, cssStyleValue); 
                  

              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else if ($secondParent.hasClass('buttonElement')){
                        $firstParent.css(cssStyleType, cssStyleValue);
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }

});


});
}else{
$parentElement.find('.findCustomIDName').each(function() {
var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();
  
$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');

if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

          $secondParent.css(cssStyleType, cssStyleValue);
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

        if($firstParent.hasClass('borderedButtonGroup') ){
          $firstParent.css(cssStyleType, cssStyleValue);
        }else{
          $secondParent.css(cssStyleType, cssStyleValue);
        }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
       $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width' ){

                  $firstParent.css(cssStyleType, cssStyleValue); 
                  

              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else if ($secondParent.hasClass('buttonElement')){
                        $firstParent.css(cssStyleType, cssStyleValue);
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }

});


});


}


}



function showGlobalClassList(){

    var $cssInspector = $('#cssInspector');
    var $contDiv = $cssInspector.find('.inspectorGlobalClassDiv');

    var html = '';

    
$cssInspector.find('.inspectorGlobalClassDiv').empty();

if ( $('.globalClassList').find('.globalClass').length > 0)
{
    html += '<div class="form-group">' +
                  '<label for="selGlobalClass">All Classes</label>' +
                  '<select class="form-control" id="selGlobalClass">';

    $('.globalClassList').find('.globalClass').each(function(index, element) {
        var globalClassName = $( element ).attr('data-type');
        html += '<option>' + globalClassName + '</option>';

    });

    html += '</select></div>';
    $contDiv.append(html);

    html = '';
    
    html += '<div class="row">' +
                       '<div class="col-xs-4">' + 
                            '<button type="button" class="btn btn-sm btn-default applyGlobalClassBtn" title="Apply Selected Class to Element">' +
                                 '<i class="fa fa-plus" ></i> Select</button></div>' +
                        '<div class="col-xs-4 col-xs-offset-2">' +
                        '<button type="button" class="btn btn-sm btn-default deleteGlobalClassBtn" title="Delete Selected Class">' +
                                 '<i class="fa fa-minus" ></i> Delete</button>' +
                    '</div></div>';
     $contDiv.append(html);
}


if ( $('.globalIDsList').find('.globalID').length > 0)
{
  html = '';
  html += '<div class="form-group">' +
                  '<label for="selGlobalID">All IDs : </label>' +
                  '<select class="form-control" id="selGlobalID">';

     $('.globalIDsList').find('.globalID').each(function(index, element) {
        var globalIDName = $( element ).attr('data-type');
        html += '<option>' + globalIDName + '</option>';

    });

     html += '</select></div>';
    $contDiv.append(html);

    html = '';
    
    html += '<div class="row">' +
                       '<div class="col-xs-4">' + 
                            '<button type="button" class="btn btn-sm btn-default applyGlobalIDBtn" title="Apply Selected id to Element">' +
                                 '<i class="fa fa-plus" ></i> Select</button></div>' +
                        '<div class="col-xs-4 col-xs-offset-2">' +
                        '<button type="button" class="btn btn-sm btn-default deleteGlobalIDBtn" title="Delete Selected id">' +
                                 '<i class="fa fa-minus" ></i> Delete</button>' +
                    '</div></div>';
     $contDiv.append(html);
}


if ( ( $('.globalClassList').find('.globalClass').length > 0 ) || ( $('.globalIDsList').find('.globalID').length > 0 ) ){
  html = '';
  

   html += '<div class="row" style="margin-top:10px;margin-left:10px;">' + 
                '<a href="#" class="showGlobalStyles">Show Styles</a></div>';    
  $contDiv.append(html);
}



}


function getpElClasses($parentElement, $innerElement){


var $cssInspector = $('#cssInspector');
$cssInspector.find('.currentCustomClass').empty();
$cssInspector.find('.currentCustomID').empty();

if($innerElement && $innerElement.attr('class')){

$cssInspector.find('.currentCustomClass').append('<p>Element Classes</p>');

  var classList = $innerElement.attr('class').split(/\s+/);
  var html = '';
  $.each(classList, function(index, item) {
      if ( (item != 'tableElement') && (item != 'childOfBorderedParagraph') && (item != 'dropdown') && (item != 'btn-group') && (item != 'btnGroupInner') &&
      (item != 'btn-group-justified') && (item != 'carousel') && (item != 'slide') && (item != 'embed-responsive') && (item != 'embed-responsive-16by9') &&
      (item != 'embed-responsive-4by3') && (item != 'Medium') && (item != 'Medium-rich') && (item != 'gmapsElement') && (item != 'borderedGmapsElementCreated') &&
      (item != 'list-group') && (item != 'imgTestResponsive') ){
      html = '';
      html += '<span href="#" class="custClassList"><a href="#" class="selectCustClassList">' + item + '</a><a href="#" class="removeCustomClass"><i class="fa fa-times" style="margin-left:7px;"></i></a></span>';
      $cssInspector.find('.currentCustomClass').append(html);
      }
  });

} 
else if(!$innerElement){
  if($parentElement.attr('class')){
  var classList = $parentElement.attr('class').split(/\s+/);
  var html = '';
  $.each(classList, function(index, item) {
    if ( (item != 'borderedContainer') && (item != 'container') && (item != 'narrowBorderedContainer') && (item != 'ui-droppable') && (item != 'ui-sortable') &&
         (item != 'container-fluid') && (item != 'customDiv') && (item != 'borderedDivDroppable') && (item != 'row') && (item != 'borderedRowDroppable') && 
         (item != 'container-fluid') && (item != 'customDiv') && (item != 'borderedTableCell') &&  (item != 'tableElement') &&  (item != 'borderedDivJumbotron') &&
         (item != 'jumbotron') && (item != 'borderedDivWell') && (item != 'well') && (item != 'borderedDivAlertSuccess') && (item != 'alert') &&
         (item != 'alert-success') && (item != 'borderedDivAlertInfo') && (item != 'alert-info') && (item != 'alert-warning') && (item != 'alert-danger') && 
         (item != 'borderedDivAlertWarning') && (item != 'borderedDivAlertDanger') && (item != 'borderedRowColDroppable') && (item != 'rowColBac') &&
         ( item.indexOf('col-') != 0 ) )
    {
      
      html = '';
      html += '<span href="#" class="custClassList"><a href="#" class="selectCustClassList">' + item + '</a><a href="#" class="removeCustomClass"><i class="fa fa-times" style="margin-left:7px;"></i></a></span>';
      $cssInspector.find('.currentCustomClass').append(html);
    }
  });

}

}


if($innerElement && $innerElement.attr('id') ){

$cssInspector.find('.currentCustomID').empty();
$cssInspector.find('.currentCustomID').append('<p>Element ID</p>');

var id = $innerElement.attr('id');

  html = '';
  html += '<span href="#" class="custID"><a href="#" class="selectCustID">' + id + '</a><a href="#" class="removeCustomID"><i class="fa fa-times" style="margin-left:7px;"></i></span>';
  $cssInspector.find('.currentCustomID').append(html);

}else if( (!$innerElement) && ($parentElement.attr('id'))){
  $cssInspector.find('.currentCustomID').empty();
$cssInspector.find('.currentCustomID').append('<p>Element ID</p>');

var id = $parentElement.attr('id');
html = '';
html += '<span href="#" class="custID"><a href="#" class="selectCustID">' + id + '</a><a href="#" class="removeCustomID"><i class="fa fa-times" style="margin-left:7px;"></i></span>';
$cssInspector.find('.currentCustomID').append(html);
}





if( $innerElement && ($innerElement.attr('id') || $innerElement.attr('class') ) ){
  $cssInspector.find('.currentCustomClass').append('<p style="margin-top:10px;"><span class="blueText">Select a Class or ID to apply changes</span></p>');
} 


}

function applyClassValuesToInspector(className, $cssInspector){
  var temp = '.globalClass[data-type="' + className + '"]';
    

  $('.globalClassList').find(temp).find('.cssAttributes').each(function() {
      var fieldType = $(this).attr('data-type');
      var fieldValue = $(this).attr('data-id');

      var temp1 = '.' + fieldType;
      $cssInspector.find(temp1).val(fieldValue);

      if(fieldType == 'elementColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBackgroundColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBackgroundColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderTopColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderTopColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderBottomColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderBottomColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderLeftColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderLeftColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderRightColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderRightColorPickerBox').attr('style', temp);
      }



  });

}

function applyIDValuesToInspector(idName, $cssInspector){
  var temp = '.globalID[data-type="' + idName + '"]';
    

  $('.globalIDsList').find(temp).find('.cssAttributes').each(function() {
      var fieldType = $(this).attr('data-type');
      var fieldValue = $(this).attr('data-id');

      var temp1 = '.' + fieldType;
      $cssInspector.find(temp1).val(fieldValue);

      if(fieldType == 'elementColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBackgroundColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBackgroundColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderTopColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderTopColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderBottomColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderBottomColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderLeftColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderLeftColorPickerBox').attr('style', temp);
      }else if(fieldType == 'elementBorderRightColor'){
        var temp = 'background-color:' + fieldValue + ' !important;';
        $cssInspector.find('#cssInspectorBorderRightColorPickerBox').attr('style', temp);
      }

  });

}

function emptyColorValues(){
  $('#cssInspectorColorPickerBox').val('');
  $('#cssInspectorColorPickerBox').removeAttr('style');

  $('#cssInspectorBackgroundColorPickerBox').val('');
  $('#cssInspectorBackgroundColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderColorPickerBox').val('');
  $('#cssInspectorBorderColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderTopColorPickerBox').val('');
  $('#cssInspectorBorderTopColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderBottomColorPickerBox').val('');
  $('#cssInspectorBorderBottomColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderLeftColorPickerBox').val('');
  $('#cssInspectorBorderLeftColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderRightColorPickerBox').val('');
  $('#cssInspectorBorderRightColorPickerBox').removeAttr('style');
}


function process_inspector( $Element, $innerElement){
  
  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  this.cssInspector = $('#cssInspector');

  
  showGlobalClassList();

  applyIFrameInitialStyles();


  $('.classOrIDToSelect').empty();
  if ($('.classOrIDToSelect').hasClass('classOrIDSelected') ){
      $('.classOrIDToSelect').removeClass('classOrIDSelected');
  }

  $('#cssInspectorColorPickerBox').val('');
  $('#cssInspectorColorPickerBox').removeAttr('style');

  $('#cssInspectorBackgroundColorPickerBox').val('');
  $('#cssInspectorBackgroundColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderColorPickerBox').val('');
  $('#cssInspectorBorderColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderTopColorPickerBox').val('');
  $('#cssInspectorBorderTopColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderBottomColorPickerBox').val('');
  $('#cssInspectorBorderBottomColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderLeftColorPickerBox').val('');
  $('#cssInspectorBorderLeftColorPickerBox').removeAttr('style');

  $('#cssInspectorBorderRightColorPickerBox').val('');
  $('#cssInspectorBorderRightColorPickerBox').removeAttr('style');

  $('#cssInspectorBackgroundURLPickerBox').val('');


if (this.cssInspector.hasClass('cssInspector-open')){  

  this.cssInspector.on( "click", ".customClassAdd", $.proxy( function(e) { 

  e.preventDefault();

  if( (this.cssInspector.find('.elementClassName').val().length > 0) ){ 
    
    if( (this.cssInspector.find('.elementClassName').val().length > 0) ){  

      if (this.innerElement){ 
            var className = this.cssInspector.find('.elementClassName').val();
            
      }else{ 
            var className = this.cssInspector.find('.elementClassName').val();
            
      }
    }

    /***************************  CREATE GLOBAL CLASS AND ID STYLES **************************/
    
    
    var temp = '.globalClass[data-type="' + className + '"]';
    if ( $('.globalClassList').find(temp).length == 0){
          var $globalClassListDiv = $('.globalClassList');
          var html = '<div class="globalClass" data-type="' + className + '"></div>';
          $globalClassListDiv.append(html);
    }

    
    showGlobalClassList();
  }
    /**************************** CREATE GLOBAL CLASS AND ID STYLES **************************/

  }, this));



}else{
  this.cssInspector.off( "click", ".customClassAdd");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".customIDAdd", $.proxy( function(e) { 

 e.preventDefault();
  

if( (this.cssInspector.find('.elementIDName').val().length > 0) ){

  if( (this.cssInspector.find('.elementIDName').val().length > 0) ){  

      if (this.innerElement){ 
            var idName = this.cssInspector.find('.elementIDName').val();
            
      }else{ 
            var idName = this.cssInspector.find('.elementIDName').val();
            
      }
  }

    /**************************** CREATE GLOBAL ID STYLE **************************/
    
    
    var temp = '.globalID[data-type="' + idName + '"]';
    if ( $('.globalIDsList').find(temp).length == 0){
          var $globalIDsListDiv = $('.globalIDsList');
          var html = '<div class="globalID" data-type="' + idName + '"></div>';
          $globalIDsListDiv.append(html);
    }

   
    showGlobalClassList();
    /**************************** CREATE GLOBAL ID STYLE **************************/
  }
}, this));  

}else{
  this.cssInspector.off( "click", ".customIDAdd");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

  
  this.cssInspector.on( "click", ".removeCustomClass", $.proxy( function(e) {  
    
    e.preventDefault();

          var current = e.currentTarget;
          var $spanEl = $(current).parent().closest('.custClassList');
          
          var className = $spanEl.text();

          if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                
                this.innerElement.removeClass(className);
                this.innerElement.find('button').removeClass(className);
          }else if ( this.Element.hasClass('borderedButtonGroup') ){
                
                this.innerElement.removeClass(className);
                this.Element.find('button').removeClass(className);
          }
          else if ( this.Element.hasClass('borderedDropDown') ){
                
                this.innerElement.removeClass(className);
                this.innerElement.find('button').removeClass(className);
          }
          else{

              if (this.innerElement){
               this.innerElement.removeClass(className);
              }else{
                this.Element.removeClass(className);
              }
          }

          
          var temp = '.findCustomClassName[data-type="' + className + '"]';
          if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                  applyDeleteStylesFromCustomClassDelete(this.Element.find(temp));
          }else{
                if (this.innerElement){
                  applyDeleteStylesFromCustomClassDelete( this.innerElement.find(temp) );
                }else{
                  applyDeleteStylesFromCustomClassDelete(this.Element.find(temp));
                }
         }

        
          
          
          if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                  this.Element.find(temp).remove();
          }else{
              if (this.innerElement){
                this.innerElement.find(temp).remove();
              }else{
                this.Element.find(temp).remove();
              }
          }

          

          
          getpElClasses(this.Element, this.innerElement);
          

    
          
              if ( this.innerElement){
                        
                        applyRemainingStyles(this.Element,this.innerElement);
              }else{
                        
                        applyRemainingStyles(this.Element,this.innerElement);
              }
          
          

          var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
          $divSelected.empty();
          $divSelected.removeClass('classOrIDSelected');
          $divSelected.removeClass('classSelected');
          $divSelected.removeClass('idSelected');

          this.cssInspector.find( $('input[type="text"]')).val('');

          resize();

          if ( $('#content-frame').hasClass('previewing') ) {
              var previewMode = $('#content-frame').attr('data-preview');
              

              
              if ( $('#content-frame').find('.carousel').length > 0 ) {
                  
                  applyEditMode();
                  preview(previewMode);

              }else{

                  previewFromInspector( previewMode );
              }

          }


  }, this));

}else{
  this.cssInspector.off( "click", ".removeCustomClass");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".deleteGlobalClassBtn", $.proxy( function(e) {   

   e.preventDefault();

    
  
   
  var className = this.cssInspector.find('#selGlobalClass').val();
  
  
  


var temp = '.' + className ; 
$('#content-frame').find(temp).removeClass(className);

var temp2 = '.findCustomClassName[data-type="' + className + '"]';
$('#content-frame').find(temp2).each(function() {

  var $first = $(this);
  var $firstParent = $(this).parent(); 
  var $secondParent = $firstParent.parent();
  
  $(this).find('.cssAttributes').each(function() {
          var fieldType = $(this).attr('data-value');
          $(this).remove();
          if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              removeCSSFromParent(fieldType, $firstParent);
              applyRemainingStylesSingleElement($firstParent);
           }else if ($firstParent.hasClass('dropdown')){
            if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
            }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
            }

           }else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
              if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                      fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                      fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                  if($firstParent.hasClass('borderedButtonGroup') ){
                      removeCSSFromParent(fieldType, $firstParent);
                      applyRemainingStylesSingleElement($firstParent);
                    }else{
                      removeCSSFromParent(fieldType, $secondParent);
                      applyRemainingStylesSingleElement($secondParent);
                    }
              }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
             }
                                  
           }else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){  
                    removeCSSFromParent(fieldType, $firstParent);
                    applyRemainingStylesSingleElement($firstParent);
           }
           else{ 

              if (fieldType == 'width' || fieldType == 'height' || fieldType == 'min-width' || fieldType == 'min-height' || fieldType == 'max-width' ||
                  fieldType == 'max-height' || fieldType == 'opacity' ){
                  removeCSSFromParent(fieldType, $firstParent);
                  applyRemainingStylesSingleElement($firstParent);
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
              }else if (fieldType == 'border-color' || fieldType == 'border-style' || fieldType == 'border-radius' || fieldType == 'border-collapse' || fieldType == 'border-spacing' ||
                        fieldType == 'border-width' || fieldType == 'border-top-color' || fieldType == 'border-top-style' || fieldType == 'border-top-radius' || fieldType == 'border-top-width' ||
                        fieldType == 'border-bottom-color' || fieldType == 'border-bottom-style' || fieldType == 'border-bottom-radius' || fieldType == 'border-bottom-width' || 
                        fieldType == 'border-left-color' || fieldType == 'border-left-style' || fieldType == 'border-left-radius' || fieldType == 'border-left-width' ||
                        fieldType == 'border-right-color' || fieldType == 'border-right-style' || fieldType == 'border-right-radius' || fieldType == 'border-right-width' ||
                        fieldType == 'color' || fieldType == 'font-size' || fieldType == 'font-family' || fieldType == 'font-style' || fieldType == 'font-weight' || fieldType == 'line-height' ||
                        fieldType == 'text-align' || fieldType == 'text-decoration' || fieldType == 'text-transform' || fieldType == 'white-space' || fieldType == 'background-color' ||
                        fieldType == 'background-image' || fieldType == 'background-position' || fieldType == 'background-size' || fieldType == 'background-clip' ||
                        fieldType == 'background-repeat' || fieldType == 'background-origin' || fieldType == 'box-shadow' ){
                  
                  
                           removeCSSFromParent(fieldType, $firstParent);
                           applyRemainingStylesSingleElement($firstParent);
                  
                  
                  

              }else if (fieldType == 'padding-top' || fieldType == 'padding-bottom' || fieldType == 'padding-left' || fieldType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (fieldType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          
                          removeCSSFromParent('margin-top', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline')){
                          removeCSSFromParent('margin-bottom', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-left'){
                          removeCSSFromParent('margin-left', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-right'){
                          removeCSSFromParent('margin-right', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }

                  }else{ 
                    
                        removeCSSFromParent(fieldType, $firstParent); 
                        applyRemainingStylesSingleElement($firstParent);
                     
                  }

              }else if (fieldType == 'margin-top' || fieldType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent(fieldType, $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                    }

              }
              else{
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
              }


          }
           if($firstParent.hasClass('tableElement')){
             
             removeCSSFromParent($(this).attr('data-value'), $secondParent);
             applyRemainingStylesSingleElement($secondParent);
           }


  });

$(this).remove();

});



var temp3 = '.globalClass[data-type="' + className + '"]';
$('.globalClassList').find(temp3).remove();



showGlobalClassList(this.cssInspector);

applyIFrameInitialStyles();

getpElClasses(this.Element, this.innerElement);

resize();



if ( $('#content-frame').hasClass('previewing') ) {
      var previewMode = $('#content-frame').attr('data-preview');
      

      
      if ( $('#content-frame').find('.carousel').length > 0 ) {
                  
                  applyEditMode();
                  preview(previewMode);

      }else{

                  previewFromInspector( previewMode );
     }


}

}, this))

}else{
  this.cssInspector.off( "click", ".deleteGlobalClassBtn");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".removeCustomID", $.proxy( function(e) { 

  e.preventDefault();

          var current = e.currentTarget;
          var $spanEl = $(current).parent().closest('.custID');
          
          var idName = $spanEl.text();

    if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                this.innerElement.attr('id', '');
                this.innerElement.find('button').attr('id', '');
    }else if ( this.Element.hasClass('borderedButtonGroup') ){
                this.innerElement.attr('id', '');
                this.Element.find('button').attr('id', '');
    }
    else if ( this.Element.hasClass('borderedDropDown') ){
                this.innerElement.attr('id', '');
                this.innerElement.find('button').attr('id', '');
   }else{      

          if (this.innerElement){
           this.innerElement.attr('id', '');
          }else{
            this.Element.attr('id', '');
          }
  }

          
          var temp = '.findCustomIDName[data-type="' + idName + '"]';
          if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                  applyDeleteStylesFromCustomClassDelete(this.Element.find(temp));
          }else{
              if (this.innerElement){
                applyDeleteStylesFromCustomClassDelete( this.innerElement.find(temp) );
              }else{
                applyDeleteStylesFromCustomClassDelete(this.Element.find(temp));
              }
          }

          
          
          

          
          var temp = '.findCustomIDName[data-type="' + idName + '"]';
          if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                  this.Element.find(temp).remove();
          }else{
              if (this.innerElement){
                this.innerElement.find(temp).remove();
              }else{
                this.Element.find(temp).remove();
              }
          }
          

          
          
           this.cssInspector.find('.currentCustomID').empty();
          

          
          if ( this.innerElement){
            
                    
                    applyRemainingStyles(this.Element,this.innerElement);
            
          }else{
            
                    
                    applyRemainingStyles(this.Element,this.innerElement);
           

          }
          

          var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
          $divSelected.empty();
          $divSelected.removeClass('classOrIDSelected');
          
          

          this.cssInspector.find( $('input[type="text"]')).val('');

          resize();

          
          
          


          if ( $('#content-frame').hasClass('previewing') ) {
                var previewMode = $('#content-frame').attr('data-preview');
                

                
                 if ( $('#content-frame').find('.carousel').length > 0 ) {
                          
                          applyEditMode();
                          preview(previewMode);

                }else{

                          previewFromInspector( previewMode );
               }

          }


  }, this));

}else{
  this.cssInspector.off( "click", ".removeCustomID");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".deleteGlobalIDBtn", $.proxy( function(e) {  

e.preventDefault();
var current = e.currentTarget;

var idName = this.cssInspector.find('#selGlobalID').val();



var temp = '#' + idName ; 




if (this.innerElement && this.innerElement.hasClass('btn-group-justified')){
                this.innerElement.removeAttr('id');
                this.innerElement.find('button').removeAttr('id');
                this.Element.find('button').removeAttr('id');
}else if ( this.Element.hasClass('borderedButtonGroup') ){
                this.innerElement.removeAttr('id');
                this.innerElement.find('button').removeAttr('id');
                this.Element.find('button').removeAttr('id');
}else if ( this.Element.hasClass('borderedDropDown') ){
               
                this.innerElement.removeAttr('id');
                this.innerElement.find('button').removeAttr('id');
                this.Element.find('button').removeAttr('id');
}else{      

          if (this.innerElement){
           this.innerElement.removeAttr('id');
          }else{
            this.Element.removeAttr('id');
          }
  }

$('#content-frame').find(temp).removeAttr('id');



var temp2 = '.findCustomIDName[data-type="' + idName + '"]';
$('#content-frame').find(temp2).each(function() {

  var $first = $(this);
  var $firstParent = $(this).parent(); 
  var $secondParent = $firstParent.parent();
  
  $(this).find('.cssAttributes').each(function() {
          var fieldType = $(this).attr('data-value');
          $(this).remove();
          if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              removeCSSFromParent(fieldType, $firstParent);
              applyRemainingStylesSingleElement($firstParent);
           }else if ($firstParent.hasClass('dropdown')){
            if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
            }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
            }

           }else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
              if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                      fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                      fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                    if($firstParent.hasClass('borderedButtonGroup') ){
                      removeCSSFromParent(fieldType, $firstParent);
                      applyRemainingStylesSingleElement($firstParent);
                    }else{
                      removeCSSFromParent(fieldType, $secondParent);
                      applyRemainingStylesSingleElement($secondParent);
                    }
              }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
             }
                                  
           }else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
                    removeCSSFromParent(fieldType, $firstParent);
                    applyRemainingStylesSingleElement($firstParent);
           }
           else{ 

              if (fieldType == 'width' || fieldType == 'height' || fieldType == 'min-width' || fieldType == 'min-height' || fieldType == 'max-width' ||
                  fieldType == 'max-height' || fieldType == 'opacity' ){
                  removeCSSFromParent(fieldType, $firstParent);
                  applyRemainingStylesSingleElement($firstParent);
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
              }else if (fieldType == 'border-color' || fieldType == 'border-style' || fieldType == 'border-radius' || fieldType == 'border-collapse' || fieldType == 'border-spacing' ||
                        fieldType == 'border-width' || fieldType == 'border-top-color' || fieldType == 'border-top-style' || fieldType == 'border-top-radius' || fieldType == 'border-top-width' ||
                        fieldType == 'border-bottom-color' || fieldType == 'border-bottom-style' || fieldType == 'border-bottom-radius' || fieldType == 'border-bottom-width' || 
                        fieldType == 'border-left-color' || fieldType == 'border-left-style' || fieldType == 'border-left-radius' || fieldType == 'border-left-width' ||
                        fieldType == 'border-right-color' || fieldType == 'border-right-style' || fieldType == 'border-right-radius' || fieldType == 'border-right-width' ||
                        fieldType == 'color' || fieldType == 'font-size' || fieldType == 'font-family' || fieldType == 'font-style' || fieldType == 'font-weight' || fieldType == 'line-height' ||
                        fieldType == 'text-align' || fieldType == 'text-decoration' || fieldType == 'text-transform' || fieldType == 'white-space' || fieldType == 'background-color' ||
                        fieldType == 'background-image' || fieldType == 'background-position' || fieldType == 'background-size' || fieldType == 'background-clip' ||
                        fieldType == 'background-repeat' || fieldType == 'background-origin' || fieldType == 'box-shadow' ){

                  
                  
                           removeCSSFromParent(fieldType, $firstParent);
                           applyRemainingStylesSingleElement($firstParent);
                   
                  
                  

              }else if (fieldType == 'padding-top' || fieldType == 'padding-bottom' || fieldType == 'padding-left' || fieldType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (fieldType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          
                          removeCSSFromParent('margin-top', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent('margin-bottom', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-left'){
                          removeCSSFromParent('margin-left', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-right'){
                          removeCSSFromParent('margin-right', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }

                  }else{ 
                     
                        removeCSSFromParent(fieldType, $firstParent); 
                        applyRemainingStylesSingleElement($firstParent);
                     
                  }

              }else if (fieldType == 'margin-top' || fieldType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent(fieldType, $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                    }

              }
              else{
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
              }


          }
           if($firstParent.hasClass('tableElement')){
             
             removeCSSFromParent($(this).attr('data-value'), $secondParent);
             applyRemainingStylesSingleElement($secondParent);
           }


  });

$(this).remove();

});

var temp3 = '.globalID[data-type="' + idName + '"]';
$('.globalIDsList').find(temp3).remove();



showGlobalClassList();

applyIFrameInitialStyles();

getpElClasses(this.Element, this.innerElement);

resize();


if ( $('#content-frame').hasClass('previewing') ) {
    var previewMode = $('#content-frame').attr('data-preview');
    

    
    if ( $('#content-frame').find('.carousel').length > 0 ) {
                          
                          applyEditMode();
                          preview(previewMode);

    }else{

                          previewFromInspector( previewMode );
   }


}



}, this));

}else{
  this.cssInspector.off( "click", ".deleteGlobalIDBtn");
}


var $modalShowStyles = $('#modalInspectorShowStyles');
this.modalShowStyles = $modalShowStyles;

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".showGlobalStyles", $.proxy( function(e) { 

e.preventDefault(); 

this.modalShowStyles.modal('show');

this.modalShowStyles.find('#inspectorStylesContainer').empty();

var html = '<div class="globalClassContainer" style="max-width:100%;width:770px;">';
var $globalClassList = $('.globalClassList');
$globalClassList.find('.globalClass').each(function() {

    html += '<div class="globalClassDiv" style="width:580px;font-size:14px;margin-left:20px;"><code style="color:rgb(75, 75, 131);">.' + $(this).attr('data-type') + '{';
    $(this).find('.cssAttributes').each(function() {
          var temp1 = 'data-type="' + $(this).attr('data-value') + '"';
          var temp2 = 'data-value="' + $(this).attr('data-id') + '"';
          html += '<div class="cssAttributesDiv"' + temp1 + ' ' + temp2 + ' > &nbsp;&nbsp;&nbsp;' + $(this).attr('data-value') + ':' + $(this).attr('data-id') + '</div>';

    });

    html += '}</code></div><br/>';
            
});
html += '</div>';


html += '<div class="globalIDsContainer" style="max-width:100%;width:770px;">';
var $globalIDsList = $('.globalIDsList');
    $globalIDsList.find('.globalID').each(function() {

      html += '<div class="globalIDsDiv" style="width:580px;font-size:14px;margin-left:20px;"><code style="color:rgb(75, 75, 131);">#' + $(this).attr('data-type') + '{';
      $(this).find('.cssAttributes').each(function() {
          var temp1 = 'data-type="' + $(this).attr('data-value') + '"';
          var temp2 = 'data-value="' + $(this).attr('data-id') + '"';
          html += '<div class="cssAttributesDiv"' + temp1 + ' ' + temp2 + ' > &nbsp;&nbsp;&nbsp;' + $(this).attr('data-value') + ':' + $(this).attr('data-id') + '</div>';

      });

            
     html += '}</code></div><br/>';
            
});
html += '</div>';



this.modalShowStyles.find('#inspectorStylesContainer').html(html);



}, this));

}else{
  this.cssInspector.off( "click", ".showGlobalStyles");
}


if (this.cssInspector.hasClass('cssInspector-open')){  


this.cssInspector.on( "click", ".selectCustClassList", $.proxy( function(e) { 

e.preventDefault();
emptyColorValues();
    var current = e.currentTarget;
    var $spanEl = $(current).parent().closest('.custClassList');
  
    var className = $spanEl.text();
    

    
    var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
    $divSelected.empty();
    $divSelected.addClass('classOrIDSelected');
    
    var html = '<h4><span class="blueText">Class Selected : ' + className + '</span></h4>';
    $divSelected.append(html);

    var html = '<div class="name" style="display:none;" data-type="class" data-value="' + className + '"></div>';
    $divSelected.append(html);

    
    this.cssInspector.find( $('input[type="text"]')).val('');
    applyClassValuesToInspector(className, this.cssInspector);
    


}, this));

}else{
  this.cssInspector.off( "click", ".selectCustClassList");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".applyGlobalClassBtn", $.proxy( function(e) { 

e.preventDefault();
emptyColorValues();
    var current = e.currentTarget;
    
    var className = this.cssInspector.find('#selGlobalClass').val();
    

    
    var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
    $divSelected.empty();
    $divSelected.addClass('classOrIDSelected');
    
    var html = '<h4><span class="blueText">Class Selected : ' + className + '</span></h4>';
    $divSelected.append(html);

    var html = '<div class="name" style="display:none;" data-type="class" data-value="' + className + '"></div>';
    $divSelected.append(html);


    
   this.cssInspector.find( $('input[type="text"]')).val('');
     applyClassValuesToInspector(className, this.cssInspector);
    


}, this));

}else{
  this.cssInspector.off( "click", ".applyGlobalClassBtn");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectCustID", $.proxy( function(e) { 

e.preventDefault();
emptyColorValues();
    var current = e.currentTarget;
    var $spanEl = $(current).parent().closest('.custID');
  
    var idName = $spanEl.text();
    

    
    var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
    $divSelected.empty();
    $divSelected.addClass('classOrIDSelected');
    
    var html = '<h4><span class="blueText">ID Selected : ' + idName + '</span></h4>';
    $divSelected.append(html);

    var html = '<div class="name" style="display:none;" data-type="id" data-value="' + idName + '"></div>';
    $divSelected.append(html);

    
    
   this.cssInspector.find( $('input[type="text"]')).val('');
   applyIDValuesToInspector(idName, this.cssInspector);
   


}, this));

}else{
  this.cssInspector.off( "click", ".selectCustID");
}


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".applyGlobalIDBtn", $.proxy( function(e) { 

e.preventDefault();
emptyColorValues();
    var current = e.currentTarget;
    
    var idName = this.cssInspector.find('#selGlobalID').val();
    

    
    var $divSelected = this.cssInspector.find('.classOrIDToSelect'); 
    $divSelected.empty();
    $divSelected.addClass('classOrIDSelected');
    
    var html = '<h4><span class="blueText">ID Selected : ' + idName + '</span></h4>';
    $divSelected.append(html);

    var html = '<div class="name" style="display:none;" data-type="id" data-value="' + idName + '"></div>';
    $divSelected.append(html);

    
    
    this.cssInspector.find( $('input[type="text"]')).val('');
    applyIDValuesToInspector(idName, this.cssInspector);
    


}, this));

}else{
  this.cssInspector.off( "click", ".applyGlobalIDBtn");
}



var $modalColor = $('#modalColorPicker');
this.modalColor = $modalColor;
this.inputColor =  this.cssInspector.find('#cssInspectorColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectColor", $.proxy( function(e) { 


  
this.modalColor.modal('show');


this.modalColor.find("#fullColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalColor.on( "click", ".colorPickerApply", $.proxy( function(e) { 




  var colorPickerValue = this.modalColor.find("#fullColorPicker").spectrum("get");
  
  this.modalColor.find("#fullColorPicker").spectrum("hide");
  this.modalColor.modal('hide');

  this.inputColor.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputColor.attr('style', temp);


}, this));

}else{
  
  this.modalColor.off( "click", ".colorPickerApply");
}


var $modalBackgroundColor = $('#modalBackgroundColorPicker');
this.modalBackgroundColor = $modalBackgroundColor;
this.inputBackgroundColor =  this.cssInspector.find('#cssInspectorBackgroundColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBackgroundColor", $.proxy( function(e) { 



this.modalBackgroundColor.modal('show');

this.modalBackgroundColor.find("#backgroundColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBackgroundColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBackgroundColor.on( "click", ".backgroundColorPickerApply", $.proxy( function(e) { 




  var colorPickerValue = this.modalBackgroundColor.find("#backgroundColorPicker").spectrum("get");
  
  this.modalBackgroundColor.find("#backgroundColorPicker").spectrum("hide");
  this.modalBackgroundColor.modal('hide');

  this.inputBackgroundColor.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBackgroundColor.attr('style', temp);


}, this));

}else{
  
  this.modalBackgroundColor.off( "click", ".backgroundColorPickerApply");
}


var $modalBackgroundImageURL = $('#modalBackgroundImageURL');
this.modalBackgroundImageURL = $modalBackgroundImageURL;

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBackgroundURL", $.proxy( function(e) { 


$('#fileTreeBackImages').fileTree({ root: '/', script: 'connectors/jqueryFileTree.php' }, function(file) {
    this.modalBackgroundImageURL.find('#modalImageURLFileBox').val(file);
});


this.modalBackgroundImageURL.modal('show');

var loc = window.location;

var pathName = loc.pathname;

var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);



var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort + 'uploadImages.php';

if ( !$('#modalBackgroundImageURL').find("#inspectorUploadImagesContainer").hasClass('dropzone') ) {

$('#modalBackgroundImageURL').find("#inspectorUploadImagesContainer").addClass('dropzone');
$('#modalBackgroundImageURL').find("#inspectorUploadImagesContainer").css({'margin-top':'20px','margin-bottom':'25px','background-color':'rgb(129, 178, 255)','border-style':'dotted',
                                                                          'height':'250px', 'overflow-x':'hidden', 'overflow-y':'auto'});

$('#modalBackgroundImageURL').find("#inspectorUploadImagesContainer").dropzone({
 url: filePath, 
 success: function (response) {
        
        var x = JSON.parse(response.xhr.responseText);
        

        var informHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Image uploaded successfully.'+
                          '</div>';
          
          $('#modalBackgroundImageURL').find('#inspectorImageUploadAlertsContainer').html(informHTML);

        
 },
 error: function (response) {
        var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Image upload did not complete.'+
                          '</div>';
          
          $('#modalBackgroundImageURL').find('#inspectorImageUploadAlertsContainer').html(informHTML);

 }


});

}


}, this));

}else{
  
  this.cssInspector.off( "click", ".backgroundColorPickerApply");
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBackgroundImageURL.on( "change", "#modalImageURFile", $.proxy( function(e) { 

           
           
           var imgVal = this.modalBackgroundImageURL.find('#modalImageURFile').val(); 
          if (imgVal != ''){
              var start = imgVal.lastIndexOf("\\");
              var fileName = imgVal.substring(start + 1);
              
              var temp = 'images/' + fileName;
            

            this.modalBackgroundImageURL.find('#modalImageURLFileBox').val(temp);
            }

  }, this)); 
}else{
  
  this.modalBackgroundImageURL.off( "change", ".modalImageURFile");
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBackgroundImageURL.on( "click", ".backgroundImageURLApply", $.proxy( function(e) { 

var imgVal = this.modalBackgroundImageURL.find('#modalImageURLFileBox').val(); 
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

    
var temp = filePath + 'images/' + fileName;   

    var tempURL = "url(" + temp + ")";
    this.cssInspector.find('#cssInspectorBackgroundURLPickerBox').val(tempURL);
    

}


}, this));

}else{
  
  this.modalBackgroundImageURL.off( "click", ".backgroundImageURLApply");
}



var $modalBackgroundBoxShadowColor = $('#modalBackgroundBoxShadowColorPicker');
this.modalBackgroundBoxShadowColor = $modalBackgroundBoxShadowColor;
this.inputBackgroundBoxShadowColor =  this.cssInspector.find('#cssInspectorBackgroundBoxShadowColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBackgroundBoxShadowColor", $.proxy( function(e) { 



this.modalBackgroundBoxShadowColor.modal('show');

this.modalBackgroundBoxShadowColor.find("#backgroundBoxShadowColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBackgroundBoxShadowColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBackgroundBoxShadowColor.on( "click", ".backgroundBoxShadowColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBackgroundBoxShadowColor.find("#backgroundBoxShadowColorPicker").spectrum("get");
  
  this.modalBackgroundBoxShadowColor.find("#backgroundBoxShadowColorPicker").spectrum("hide");
  this.modalBackgroundBoxShadowColor.modal('hide');

  this.inputBackgroundBoxShadowColor.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBackgroundBoxShadowColor.attr('style', temp);


}, this));

}else{
  
  this.modalBackgroundBoxShadowColor.off( "click", ".backgroundBoxShadowColorPickerApply");
}


var $modalBorderColor = $('#modalBorderColorPicker');
this.modalBorderColor = $modalBorderColor;
this.inputBorderColorBox =  this.cssInspector.find('#cssInspectorBorderColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBorderColor", $.proxy( function(e) { 


this.modalBorderColor.modal('show');

this.modalBorderColor.find("#borderColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBorderColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBorderColor.on( "click", ".borderColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBorderColor.find("#borderColorPicker").spectrum("get");
  
  this.modalBorderColor.find("#borderColorPicker").spectrum("hide");
  this.modalBorderColor.modal('hide');

  this.inputBorderColorBox.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBorderColorBox.attr('style', temp);


}, this));

}else{
  
  this.modalBorderColor.off( "click", ".borderColorPickerApply");
}

var $modalBorderTopColor = $('#modalBorderTopColorPicker');
this.modalBorderTopColor = $modalBorderTopColor;
this.inputBorderTopColorBox =  this.cssInspector.find('#cssInspectorBorderTopColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBorderTopColor", $.proxy( function(e) { 



this.modalBorderTopColor.modal('show');

this.modalBorderTopColor.find("#borderTopColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBorderTopColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBorderTopColor.on( "click", ".borderTopColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBorderTopColor.find("#borderTopColorPicker").spectrum("get");
  
  this.modalBorderTopColor.find("#borderTopColorPicker").spectrum("hide");
  this.modalBorderTopColor.modal('hide');

  this.inputBorderTopColorBox.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBorderTopColorBox.attr('style', temp);


}, this));

}else{
  
  this.modalBorderTopColor.off( "click", ".borderTopColorPickerApply");
}


var $modalBorderBottomColor = $('#modalBorderBottomColorPicker');
this.modalBorderBottomColor = $modalBorderBottomColor;
this.inputBorderBottomColorBox =  this.cssInspector.find('#cssInspectorBorderBottomColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBorderBottomColor", $.proxy( function(e) { 



this.modalBorderBottomColor.modal('show');

this.modalBorderBottomColor.find("#borderBottomColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBorderBottomColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBorderBottomColor.on( "click", ".borderBottomColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBorderBottomColor.find("#borderBottomColorPicker").spectrum("get");
  
  this.modalBorderBottomColor.find("#borderBottomColorPicker").spectrum("hide");
  this.modalBorderBottomColor.modal('hide');

  this.inputBorderBottomColorBox.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBorderBottomColorBox.attr('style', temp);


}, this));

}else{
  
  this.modalBorderBottomColor.off( "click", ".borderBottomColorPickerApply");
}

var $modalBorderLeftColor = $('#modalBorderLeftColorPicker');
this.modalBorderLeftColor = $modalBorderLeftColor;
this.inputBorderLeftColorBox =  this.cssInspector.find('#cssInspectorBorderLeftColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBorderLeftColor", $.proxy( function(e) { 



this.modalBorderLeftColor.modal('show');

this.modalBorderLeftColor.find("#borderLeftColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBorderLeftColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBorderLeftColor.on( "click", ".borderLeftColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBorderLeftColor.find("#borderLeftColorPicker").spectrum("get");
  
  this.modalBorderLeftColor.find("#borderLeftColorPicker").spectrum("hide");
  this.modalBorderLeftColor.modal('hide');

  this.inputBorderLeftColorBox.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBorderLeftColorBox.attr('style', temp);


}, this));

}else{
  
  this.modalBorderLeftColor.off( "click", ".borderLeftColorPickerApply");
}


var $modalBorderRightColor = $('#modalBorderRightColorPicker');
this.modalBorderRightColor = $modalBorderRightColor;
this.inputBorderRightColorBox =  this.cssInspector.find('#cssInspectorBorderRightColorPickerBox');

if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".selectBorderRightColor", $.proxy( function(e) { 



this.modalBorderRightColor.modal('show');

this.modalBorderRightColor.find("#borderRightColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});



}, this));

}else{
  this.cssInspector.off( "click", ".selectBorderRightColor");
  
}

if (this.cssInspector.hasClass('cssInspector-open')){  

this.modalBorderRightColor.on( "click", ".borderRightColorPickerApply", $.proxy( function(e) { 


  var colorPickerValue = this.modalBorderRightColor.find("#borderRightColorPicker").spectrum("get");
  
  this.modalBorderRightColor.find("#borderRightColorPicker").spectrum("hide");
  this.modalBorderRightColor.modal('hide');

  this.inputBorderRightColorBox.val(colorPickerValue);

  var temp = 'background-color:' + colorPickerValue + ' !important;';
  this.inputBorderRightColorBox.attr('style', temp);


}, this));

}else{
  
  this.modalBorderRightColor.off( "click", ".borderRightColorPickerApply");
}


/************** BORDER Color-PICKER ********************************************************************/


if (this.cssInspector.hasClass('cssInspector-open')){  

this.cssInspector.on( "click", ".calcBoxShadow", $.proxy( function(e) { 
var $elementFinalValue = this.cssInspector.find(".elementBoxShadow");

var temp = '';
if( this.cssInspector.find(".elementBackgroundHShadow").val().length > 0){
  var hShadowValue = this.cssInspector.find(".elementBackgroundHShadow").val();
  temp += hShadowValue;
  if(this.cssInspector.find(".elementBackgroundVShadow").val().length > 0){
    var vShadowValue = this.cssInspector.find(".elementBackgroundVShadow").val();
    temp += ' ' + hShadowValue;
    if(this.cssInspector.find(".elementBackgroundBlur").val().length > 0){
      var blurValue = this.cssInspector.find(".elementBackgroundBlur").val();
      temp += ' ' + blurValue;
      if(this.cssInspector.find(".elementBackgroundSpread").val().length > 0){
        var spreadValue = this.cssInspector.find(".elementBackgroundSpread").val();
        temp += ' ' + spreadValue;
        if(this.cssInspector.find(".elementBackgroundBoxShadowColor").val().length > 0){
          var colorValue = this.cssInspector.find(".elementBackgroundBoxShadowColor").val();
          temp += ' ' + colorValue;
        }
      }
    }
  }
}

$elementFinalValue.val(temp);

}, this));

}else{
  
  this.cssInspector.off( "click", ".calcBoxShadow");
}



if (this.cssInspector.hasClass('cssInspector-open')){  


this.cssInspector.on( "click", ".save", $.proxy( function(e) { 

e.preventDefault();

var $divSelected = this.cssInspector.find('.classOrIDToSelect');
if( $divSelected.hasClass('classOrIDSelected') ){ 
   

      
        var name =  $divSelected.find('.name').attr('data-value');
        

    
       if (this.innerElement){ 

        if($divSelected.find('.name').attr('data-type') == 'class'){
          var temp = '.findCustomClassName[data-type="' + name + '"]';
          
        }else{
          var temp = '.findCustomIDName[data-type="' + name + '"]';
          
        }
          
          if(this.innerElement.find(temp).length == 0){
                var html = '';
                if($divSelected.find('.name').attr('data-type') == 'class'){
                    
                      html += '<div class="findCustomClassName" data-type="' + name + '"></div>';
                
                }else{
                    this.innerElement.find('.findCustomIDName').remove();
                    
                      html += '<div class="findCustomIDName" data-type="' + name + '"></div>';
                    
                }
                
                if ( this.innerElement.hasClass('btn-group') && this.innerElement.hasClass('btn-group-justified') ) {
                    this.Element.prepend(html);
                }else{
                      this.innerElement.prepend(html);
                }
          }
          if($divSelected.find('.name').attr('data-type') == 'class'){
            if ( this.innerElement.hasClass('dropdown') ) {
                this.innerElement.find('button').addClass(name);
                this.innerElement.addClass(name);
            }else if ( this.innerElement.hasClass('btn-group') ) {
                this.innerElement.find('button').addClass(name);
                this.innerElement.addClass(name);
            }
            else{
              this.innerElement.addClass(name);
            }
          }else{
            if ( this.innerElement.hasClass('dropdown') ) {
                this.innerElement.attr('id', name);
                this.innerElement.find('button').attr('id', name);
            }else if ( this.innerElement.hasClass('btn-group') ) {
                this.innerElement.attr('id', name);
                this.innerElement.find('button').attr('id', name);
            }
            else{
              this.innerElement.attr('id', name);
            }
          }
    }   
    else{
      if($divSelected.find('.name').attr('data-type') == 'class'){
          var temp = '.findCustomClassName[data-type="' + name + '"]';
      }else{
          var temp = '.findCustomIDName[data-type="' + name + '"]';
      }
          if(this.Element.find(temp).length == 0){
              var html = '';
              if($divSelected.find('.name').attr('data-type') == 'class'){
                    html += '<div class="findCustomClassName" data-type="' + name + '"></div>';
              }else{
                    this.Element.find('.findCustomIDName').remove();
                    html += '<div class="findCustomIDName" data-type="' + name + '"></div>';
              }
              
              this.Element.prepend(html);
          }
          if($divSelected.find('.name').attr('data-type') == 'class'){
                  this.Element.addClass(name);
          }else{
            this.Element.attr('id', name);
          }
    }

    getpElClasses(this.Element, this.innerElement);

    
    
    var blankArray = [];
    blankArray.length = 0;
    var classOrIDName = name;

    if( this.cssInspector.find(".elementWidth").val().length > 0){ 
    
      var cssType = 'width';
      var cssValue = this.cssInspector.find(".elementWidth").val();
      var fieldType = 'elementWidth';
      var classOrIDName = name;

      allBlank = false;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
        
        if( blankArray.length == 0 ){blankArray[0] = 'width';}else{blankArray.push('width');}
        
    }

    
    if( this.cssInspector.find(".elementHeight").val().length > 0){   
      
      var cssType = 'height';
      var cssValue = this.cssInspector.find(".elementHeight").val();
      var fieldType = 'elementHeight';
      var classOrIDName = name;

       allBlank = false;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      
      if( blankArray.length == 0 ){blankArray[0] = 'height';}else{blankArray.push('height');}
      
    }

    if( this.cssInspector.find(".elementMinWidth").val().length > 0){   
      var cssType = 'min-width';
      var cssValue = this.cssInspector.find(".elementMinWidth").val();
      var fieldType = 'elementMinWidth';
      var classOrIDName = name;

       allBlank = false;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      
      if( blankArray.length == 0 ){blankArray[0] = 'min-width';}else{blankArray.push('min-width');}
    }

    if( this.cssInspector.find(".elementMinHeight").val().length > 0){   
      var cssType = 'min-height';
      var cssValue = this.cssInspector.find(".elementMinHeight").val();
      var fieldType = 'elementMinHeight';
      var classOrIDName = name;

       allBlank = false;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
     
     if( blankArray.length == 0 ){blankArray[0] = 'min-height';}else{blankArray.push('min-height');}
    }

    if( this.cssInspector.find(".elementMaxWidth").val().length > 0){   
      var cssType = 'max-width';
      var cssValue = this.cssInspector.find(".elementMaxWidth").val();
      var fieldType = 'elementMaxWidth';
      var classOrIDName = name;

       allBlank = false;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      
      if( blankArray.length == 0 ){blankArray[0] = 'max-width';}else{blankArray.push('max-width');}
    }


    if( this.cssInspector.find(".elementMaxHeight").val().length > 0){   
      var cssType = 'max-height';
      var cssValue = this.cssInspector.find(".elementMaxHeight").val();
      var fieldType = 'elementMaxHeight';
      var classOrIDName = name;

       

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'max-height';}else{blankArray.push('max-height');}
    }

    if( this.cssInspector.find(".elementMarginTop").val().length > 0){   
      var cssType = 'margin-top';
      var cssValue = this.cssInspector.find(".elementMarginTop").val();
      var fieldType = 'elementMarginTop';
      var classOrIDName = name;

       

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'margin-top';}else{blankArray.push('margin-top');}
    }

    if( this.cssInspector.find(".elementMarginBottom").val().length > 0){   
      var cssType = 'margin-bottom';
      var cssValue = this.cssInspector.find(".elementMarginBottom").val();
      var fieldType = 'elementMarginBottom';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'margin-bottom';}else{blankArray.push('margin-bottom');}
    }

    if( this.cssInspector.find(".elementMarginLeft").val().length > 0){   
      var cssType = 'margin-left';
      var cssValue = this.cssInspector.find(".elementMarginLeft").val();
      var fieldType = 'elementMarginLeft';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'margin-left';}else{blankArray.push('margin-left');}
    }

    if( this.cssInspector.find(".elementMarginRight").val().length > 0){   
      var cssType = 'margin-right';
      var cssValue = this.cssInspector.find(".elementMarginRight").val();
      var fieldType = 'elementMarginRight';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'margin-right';}else{blankArray.push('margin-right');}
    }

    if( this.cssInspector.find(".elementPaddingTop").val().length > 0){   
      var cssType = 'padding-top';
      var cssValue = this.cssInspector.find(".elementPaddingTop").val();
      var fieldType = 'elementPaddingTop';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'padding-top';}else{blankArray.push('padding-top');}
    }

    if( this.cssInspector.find(".elementPaddingBottom").val().length > 0){   
      var cssType = 'padding-bottom';
      var cssValue = this.cssInspector.find(".elementPaddingBottom").val();
      var fieldType = 'elementPaddingBottom';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'padding-bottom';}else{blankArray.push('padding-bottom');}
    }

    if( this.cssInspector.find(".elementPaddingLeft").val().length > 0){   
      var cssType = 'padding-left';
      var cssValue = this.cssInspector.find(".elementPaddingLeft").val();
      var fieldType = 'elementPaddingLeft';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'padding-left';}else{blankArray.push('padding-left');}
    }

    if( this.cssInspector.find(".elementPaddingRight").val().length > 0){   
      var cssType = 'padding-right';
      var cssValue = this.cssInspector.find(".elementPaddingRight").val();
      var fieldType = 'elementPaddingRight';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'padding-right';}else{blankArray.push('padding-right');}
    }






    if( this.cssInspector.find(".elementPosition").val().length > 0){   
      var cssType = 'position';
      var cssValue = this.cssInspector.find(".elementPosition").val();
      var fieldType = 'elementPosition';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'position';}else{blankArray.push('position');}
    }

    if( this.cssInspector.find(".elementTop").val().length > 0){   
      var cssType = 'top';
      var cssValue = this.cssInspector.find(".elementTop").val();
      var fieldType = 'elementTop';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'top';}else{blankArray.push('top');}
    }


    if( this.cssInspector.find(".elementBottom").val().length > 0){   
      var cssType = 'bottom';
      var cssValue = this.cssInspector.find(".elementBottom").val();
      var fieldType = 'elementBottom';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'bottom';}else{blankArray.push('bottom');}
    }


    if( this.cssInspector.find(".elementLeft").val().length > 0){   
      var cssType = 'left';
      var cssValue = this.cssInspector.find(".elementLeft").val();
      var fieldType = 'elementLeft';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'left';}else{blankArray.push('left');}
    }


    if( this.cssInspector.find(".elementRight").val().length > 0){   
      var cssType = 'right';
      var cssValue = this.cssInspector.find(".elementRight").val();
      var fieldType = 'elementRight';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'right';}else{blankArray.push('right');}
    }

    if( this.cssInspector.find(".elementFloat").val().length > 0){   
      var cssType = 'float';
      var cssValue = this.cssInspector.find(".elementFloat").val();
      var fieldType = 'elementFloat';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'float';}else{blankArray.push('float');}
    }

    if( this.cssInspector.find(".elementClear").val().length > 0){   
      var cssType = 'clear';
      var cssValue = this.cssInspector.find(".elementClear").val();
      var fieldType = 'elementClear';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'clear';}else{blankArray.push('clear');}
    }




    if( this.cssInspector.find(".elementVisibility").val().length > 0){   
      var cssType = 'visibility';
      var cssValue = this.cssInspector.find(".elementVisibility").val();
      var fieldType = 'elementVisibility';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'visibility';}else{blankArray.push('visibility');}
    }

    if( this.cssInspector.find(".elementZIndex").val().length > 0){   
      var cssType = 'z-index';
      var cssValue = this.cssInspector.find(".elementZIndex").val();
      var fieldType = 'elementZIndex';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'z-index';}else{blankArray.push('z-index');}
    }

    if( this.cssInspector.find(".elementOpacity").val().length > 0){   
      var cssType = 'opacity';
      var cssValue = this.cssInspector.find(".elementOpacity").val();
      var fieldType = 'elementOpacity';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'opacity';}else{blankArray.push('opacity');}
    }

    /********************** TEXT PROPERTIES ******************************************************/

    if( this.cssInspector.find(".elementColor").val().length > 0){   
      var cssType = 'color';
      var cssValue = this.cssInspector.find(".elementColor").val();
      var fieldType = 'elementColor';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'color';}else{blankArray.push('color');}
    }

    if( this.cssInspector.find(".elementFontSize").val().length > 0){   
      var cssType = 'font-size';
      var cssValue = this.cssInspector.find(".elementFontSize").val();
      var fieldType = 'elementFontSize';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'font-size';}else{blankArray.push('font-size');}
    }


    if( this.cssInspector.find(".elementFontFamily").val().length > 0){   
      var cssType = 'font-family';
      var cssValue = this.cssInspector.find(".elementFontFamily").val();
      var fieldType = 'elementFontFamily';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'font-family';}else{blankArray.push('font-family');}
    }


if( this.cssInspector.find(".elementFontStyle").val().length > 0){   
      var cssType = 'font-style';
      var cssValue = this.cssInspector.find(".elementFontStyle").val();
      var fieldType = 'elementFontStyle';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'font-style';}else{blankArray.push('font-style');}
    }


if( this.cssInspector.find(".elementFontWeight").val().length > 0){   
      var cssType = 'font-weight';
      var cssValue = this.cssInspector.find(".elementFontWeight").val();
      var fieldType = 'elementFontWeight';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'font-weight';}else{blankArray.push('font-weight');}
    }


if( this.cssInspector.find(".elementLineHeight").val().length > 0){   
      var cssType = 'line-height';
      var cssValue = this.cssInspector.find(".elementLineHeight").val();
      var fieldType = 'elementLineHeight';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'line-height';}else{blankArray.push('line-height');}
    }


if( this.cssInspector.find(".elementTextAlign").val().length > 0){   
      var cssType = 'text-align';
      var cssValue = this.cssInspector.find(".elementTextAlign").val();
      var fieldType = 'elementTextAlign';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'text-align';}else{blankArray.push('text-align');}
    }


if( this.cssInspector.find(".elementTextDecoration").val().length > 0){   
      var cssType = 'text-decoration';
      var cssValue = this.cssInspector.find(".elementTextDecoration").val();
      var fieldType = 'elementTextDecoration';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'text-decoration';}else{blankArray.push('text-decoration');}
    }


if( this.cssInspector.find(".elementTextTransform").val().length > 0){   
      var cssType = 'text-transform';
      var cssValue = this.cssInspector.find(".elementTextTransform").val();
      var fieldType = 'elementTextTransform';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'text-transform';}else{blankArray.push('text-transform');}
    }


if( this.cssInspector.find(".elementWhiteSpace").val().length > 0){   
      var cssType = 'white-space';
      var cssValue = this.cssInspector.find(".elementWhiteSpace").val();
      var fieldType = 'elementWhiteSpace';
      var classOrIDName = name;

      

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'white-space';}else{blankArray.push('white-space');}
    }


if( this.cssInspector.find(".elementVerticalAlign").val().length > 0){   
      var cssType = 'vertical-align';
      var cssValue = this.cssInspector.find(".elementVerticalAlign").val();
      var fieldType = 'elementVerticalAlign';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'vertical-align';}else{blankArray.push('vertical-align');}
    }

    /********************** TEXT PROPERTIES ******************************************************/

    /********************** BACKGROUND PROPERTIES ******************************************************/

    if( this.cssInspector.find(".elementBackgroundColor").val().length > 0){   
      var cssType = 'background-color';
      var cssValue = this.cssInspector.find(".elementBackgroundColor").val();
      var fieldType = 'elementBackgroundColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-color';}else{blankArray.push('background-color');}
    }


    if( this.cssInspector.find(".elementBackgroundURL").val().length > 0){   
      var cssType = 'background-image';
      var cssValue = this.cssInspector.find(".elementBackgroundURL").val();
      
      var fieldType = 'elementBackgroundURL';
      var classOrIDName = name;

      
      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-image';}else{blankArray.push('background-image');}
    }


    if( this.cssInspector.find(".elementBackgroundPosition").val().length > 0){   
      var cssType = 'background-position';
      var cssValue = this.cssInspector.find(".elementBackgroundPosition").val();
      var fieldType = 'elementBackgroundPosition';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-position';}else{blankArray.push('background-position');}
    }


    if( this.cssInspector.find(".elementBackgroundSize").val().length > 0){   
      var cssType = 'background-size';
      var cssValue = this.cssInspector.find(".elementBackgroundSize").val();
      var fieldType = 'elementBackgroundSize';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-size';}else{blankArray.push('background-size');}
    }

    if( this.cssInspector.find(".elementBackgroundClip").val().length > 0){   
      var cssType = 'background-clip';
      var cssValue = this.cssInspector.find(".elementBackgroundClip").val();
      var fieldType = 'elementBackgroundClip';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-clip';}else{blankArray.push('background-clip');}
    }

    if( this.cssInspector.find(".elementBackgroundRepeat").val().length > 0){   
      var cssType = 'background-repeat';
      var cssValue = this.cssInspector.find(".elementBackgroundRepeat").val();
      var fieldType = 'elementBackgroundRepeat';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-repeat';}else{blankArray.push('background-repeat');}
    }

    if( this.cssInspector.find(".elementBackgroundOrigin").val().length > 0){   
      var cssType = 'background-origin';
      var cssValue = this.cssInspector.find(".elementBackgroundOrigin").val();
      var fieldType = 'elementBackgroundOrigin';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'background-origin';}else{blankArray.push('background-origin');}
    }

    /* EDW H EPEKSERGASIA PRPEI NA GINETAI OMADIKA */

    if( this.cssInspector.find(".elementBoxShadow").val().length > 0){   
      var cssType = 'box-shadow';
      var cssValue = this.cssInspector.find(".elementBoxShadow").val();
      var fieldType = 'elementBoxShadow';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'box-shadow';}else{blankArray.push('box-shadow');}
    }



    /********************** BACKGROUND PROPERTIES ******************************************************/


    /********************** BORDER PROPERTIES ******************************************************/
    if( this.cssInspector.find(".elementBorderColor").val().length > 0){   
      var cssType = 'border-color';
      var cssValue = this.cssInspector.find(".elementBorderColor").val();
      var fieldType = 'elementBorderColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-color';}else{blankArray.push('border-color');}
    }

    if( this.cssInspector.find(".elementBorderStyle").val().length > 0){   
      var cssType = 'border-style';
      var cssValue = this.cssInspector.find(".elementBorderStyle").val();
      var fieldType = 'elementBorderStyle';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-style';}else{blankArray.push('border-style');}
    }

    if( this.cssInspector.find(".elementBorderRadius").val().length > 0){   
      var cssType = 'border-radius';
      var cssValue = this.cssInspector.find(".elementBorderRadius").val();
      var fieldType = 'elementBorderRadius';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-radius';}else{blankArray.push('border-radius');}
    }

    if( this.cssInspector.find(".elementBorderCollapse").val().length > 0){   
      var cssType = 'border-collapse';
      var cssValue = this.cssInspector.find(".elementBorderCollapse").val();
      var fieldType = 'elementBorderCollapse';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-collapse';}else{blankArray.push('border-collapse');}
    }

    if( this.cssInspector.find(".elementBorderSpacing").val().length > 0){   
      var cssType = 'border-spacing';
      var cssValue = this.cssInspector.find(".elementBorderSpacing").val();
      var fieldType = 'elementBorderSpacing';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-spacing';}else{blankArray.push('border-spacing');}
    }

    if( this.cssInspector.find(".elementBorderWidth").val().length > 0){   
      var cssType = 'border-width';
      var cssValue = this.cssInspector.find(".elementBorderWidth").val();
      var fieldType = 'elementBorderWidth';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-width';}else{blankArray.push('border-width');}
    }


    if( this.cssInspector.find(".elementBorderTopColor").val().length > 0){   
      var cssType = 'border-top-color';
      var cssValue = this.cssInspector.find(".elementBorderTopColor").val();
      var fieldType = 'elementBorderTopColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-top-color';}else{blankArray.push('border-top-color');}
    }

    if( this.cssInspector.find(".elementBorderTopStyle").val().length > 0){   
      var cssType = 'border-top-style';
      var cssValue = this.cssInspector.find(".elementBorderTopStyle").val();
      var fieldType = 'elementBorderTopStyle';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-top-style';}else{blankArray.push('border-top-style');}
    }

    if( this.cssInspector.find(".elementBorderTopRadius").val().length > 0){   
      var cssType = 'border-top-radius';
      var cssValue = this.cssInspector.find(".elementBorderTopRadius").val();
      var fieldType = 'elementBorderTopRadius';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-top-radius';}else{blankArray.push('border-top-radius');}
    }

    if( this.cssInspector.find(".elementBorderTopWidth").val().length > 0){   
      var cssType = 'border-top-width';
      var cssValue = this.cssInspector.find(".elementBorderTopWidth").val();
      var fieldType = 'elementBorderTopWidth';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-top-width';}else{blankArray.push('border-top-width');}
    }

    if( this.cssInspector.find(".elementBorderBottomColor").val().length > 0){   
      var cssType = 'border-bottom-color';
      var cssValue = this.cssInspector.find(".elementBorderBottomColor").val();
      var fieldType = 'elementBorderBottomColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-bottom-color';}else{blankArray.push('border-bottom-color');}
    }

    if( this.cssInspector.find(".elementBorderBottomStyle").val().length > 0){   
      var cssType = 'border-bottom-style';
      var cssValue = this.cssInspector.find(".elementBorderBottomStyle").val();
      var fieldType = 'elementBorderBottomStyle';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-bottom-style';}else{blankArray.push('border-bottom-style');}
    }

    if( this.cssInspector.find(".elementBorderBottomRadius").val().length > 0){   
      var cssType = 'border-bottom-radius';
      var cssValue = this.cssInspector.find(".elementBorderBottomRadius").val();
      var fieldType = 'elementBorderBottomRadius';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-bottom-radius';}else{blankArray.push('border-bottom-radius');}
    }

    if( this.cssInspector.find(".elementBorderBottomWidth").val().length > 0){   
      var cssType = 'border-bottom-width';
      var cssValue = this.cssInspector.find(".elementBorderBottomWidth").val();
      var fieldType = 'elementBorderBottomWidth';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-bottom-width';}else{blankArray.push('border-bottom-width');}
    }

    if( this.cssInspector.find(".elementBorderLeftColor").val().length > 0){   
      var cssType = 'border-left-color';
      var cssValue = this.cssInspector.find(".elementBorderLeftColor").val();
      var fieldType = 'elementBorderLeftColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-left-color';}else{blankArray.push('border-left-color');}
    }

    if( this.cssInspector.find(".elementBorderLeftStyle").val().length > 0){   
      var cssType = 'border-left-style';
      var cssValue = this.cssInspector.find(".elementBorderLeftStyle").val();
      var fieldType = 'elementBorderLeftStyle';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-left-style';}else{blankArray.push('border-left-style');}
    }

    if( this.cssInspector.find(".elementBorderLeftRadius").val().length > 0){   
      var cssType = 'border-left-radius';
      var cssValue = this.cssInspector.find(".elementBorderLeftRadius").val();
      var fieldType = 'elementBorderLeftRadius';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-left-radius';}else{blankArray.push('border-left-radius');}
    }

    if( this.cssInspector.find(".elementBorderLeftWidth").val().length > 0){   
      var cssType = 'border-left-width';
      var cssValue = this.cssInspector.find(".elementBorderLeftWidth").val();
      var fieldType = 'elementBorderLeftWidth';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-left-width';}else{blankArray.push('border-left-width');}
    }

     if( this.cssInspector.find(".elementBorderRightColor").val().length > 0){   
      var cssType = 'border-right-color';
      var cssValue = this.cssInspector.find(".elementBorderRightColor").val();
      var fieldType = 'elementBorderRightColor';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-right-color';}else{blankArray.push('border-right-color');}
    }

    if( this.cssInspector.find(".elementBorderRightStyle").val().length > 0){   
      var cssType = 'border-right-style';
      var cssValue = this.cssInspector.find(".elementBorderRightStyle").val();
      var fieldType = 'elementBorderRightStyle';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-right-style';}else{blankArray.push('border-right-style');}
    }

    if( this.cssInspector.find(".elementBorderRightRadius").val().length > 0){   
      var cssType = 'border-right-radius';
      var cssValue = this.cssInspector.find(".elementBorderRightRadius").val();
      var fieldType = 'elementBorderRightRadius';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-right-radius';}else{blankArray.push('border-right-radius');}
    }

    if( this.cssInspector.find(".elementBorderRightWidth").val().length > 0){   
      var cssType = 'border-right-width';
      var cssValue = this.cssInspector.find(".elementBorderRightWidth").val();
      var fieldType = 'elementBorderRightWidth';
      var classOrIDName = name;

      applyCSSProperties(this.cssInspector, this.innerElement, this.Element, $divSelected, cssType, cssValue, fieldType, classOrIDName);
    }else{
      if( blankArray.length == 0 ){blankArray[0] = 'border-right-width';}else{blankArray.push('border-right-width');}
    }


    /********************** BORDER PROPERTIES ******************************************************/



    applyDeletedValues(this.innerElement, this.Element, $divSelected, classOrIDName, blankArray);

    applyChangesToAll($divSelected, classOrIDName);

    resize();



      /***************************************************** APPLY STYLES TO IFRAME *********************************************************/
   
          
          styleTag.empty();
          var styleText = '';
          styleTag.text( styleText );
          

          $('.globalClassList').find('.globalClass').each(function() {

              var className = $(this).attr('data-type');
              styleText += '.' + className + '{';

              $(this).find('.cssAttributes').each(function() {
                var cssType = $(this).attr('data-value');
                var cssValue = $(this).attr('data-id');
                styleText += cssType + ': ' + cssValue + ';';
              });

               styleText += '}';
   
          });

          $('.globalIDsList').find('.globalID').each(function() {

              var idName = $(this).attr('data-type');
              styleText += '#' + idName + '{';

              $(this).find('.cssAttributes').each(function() {
                var cssType = $(this).attr('data-value');
                var cssValue = $(this).attr('data-id');
                styleText += cssType + ': ' + cssValue + ';';
              });

               styleText += '}';
   
          });

          styleTag.text( styleText );
          
        /***************************************************** APPLY STYLES TO IFRAME *********************************************************/
        
        

   if ( $('#content-frame').hasClass('previewing') ) {
    var previewMode = $('#content-frame').attr('data-preview');
    

      if ( $('#content-frame').find('.carousel').length > 0 ) {
        
        applyEditMode();
        preview(previewMode);

      }else{

          previewFromInspector( previewMode );
      }

   }


   

}else{
  //alert('You have to Select a Class or ID first');
}



}, this)); 

}else{
  this.cssInspector.off( "click", ".save");
}

} 


function applyDeletedValues($innerElement, $Element, $divSelected, classOrIDName, blankArray){


if($divSelected.find('.name').attr('data-type') == 'class'){
          var temp = '.findCustomClassName[data-type="' + classOrIDName + '"]';
          
 }else{
          var temp = '.findCustomIDName[data-type="' + classOrIDName + '"]';
          
 }

 if($divSelected.find('.name').attr('data-type') == 'class'){
    var tempFirst = '.globalClassList';
    var tempNext = '.globalClass[data-type="' + classOrIDName + '"]';
}else{
    var tempFirst = '.globalIDsList';
    var tempNext = '.globalID[data-type="' + classOrIDName + '"]';
}




$(tempFirst).find(tempNext).find('.cssAttributes').each(function() {
  
   for (var i=0; i<blankArray.length; i++)  {
    
     if( $(this).attr('data-value') == blankArray[i] ){
           
           var $globalClass = $(this).parent();
           var $globalClassName = $globalClass.attr('data-type');
           
           
           $(this).remove();
     }
    }
  
});

$('.content-frame').find(temp).each(function() {
  
  var $first = $(this);
  var $firstParent = $(this).parent(); 
  var $secondParent = $firstParent.parent();
  
  

  if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
       var $element = $firstParent;
  }else{
       var $element = $secondParent;
  }



$(this).find('.cssAttributes').each(function() {
   
    for (var i=0; i<blankArray.length; i++)  {

        
        var fieldType = $(this).attr('data-value');
        if( fieldType == blankArray[i] ){
           $(this).remove();
           if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              removeCSSFromParent(fieldType, $firstParent);
              applyRemainingStylesSingleElement($firstParent);
           }else if ($firstParent.hasClass('dropdown')){
            if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){
 
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
            }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
            }

           }else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){
              if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                      fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                      fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                    if($firstParent.hasClass('borderedButtonGroup') ){
                      removeCSSFromParent(fieldType, $firstParent);
                      applyRemainingStylesSingleElement($firstParent);
                    }else{
                      removeCSSFromParent(fieldType, $secondParent);
                      applyRemainingStylesSingleElement($secondParent);
                    }
              }else{
                      var $buttonEl = $firstParent.find('button');
                      removeCSSFromParent(fieldType, $buttonEl);
                      applyRemainingStylesSingleElement($buttonEl);
             }
                                  
           }else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
                    removeCSSFromParent(fieldType, $firstParent);
                    applyRemainingStylesSingleElement($firstParent);
           }
           else{ 

              if (fieldType == 'width' || fieldType == 'height' || fieldType == 'min-width' || fieldType == 'min-height' || fieldType == 'max-width' || fieldType == 'max-height' || fieldType == 'opacity'){
                  
                      removeCSSFromParent(fieldType, $firstParent);
                      applyRemainingStylesSingleElement($firstParent);
                      removeCSSFromParent(fieldType, $secondParent);
                      applyRemainingStylesSingleElement($secondParent);
                
              }else if (fieldType == 'border-color' || fieldType == 'border-style' || fieldType == 'border-radius' || fieldType == 'border-collapse' || fieldType == 'border-spacing' ||
                        fieldType == 'border-width' || fieldType == 'border-top-color' || fieldType == 'border-top-style' || fieldType == 'border-top-radius' || fieldType == 'border-top-width' ||
                        fieldType == 'border-bottom-color' || fieldType == 'border-bottom-style' || fieldType == 'border-bottom-radius' || fieldType == 'border-bottom-width' || 
                        fieldType == 'border-left-color' || fieldType == 'border-left-style' || fieldType == 'border-left-radius' || fieldType == 'border-left-width' ||
                        fieldType == 'border-right-color' || fieldType == 'border-right-style' || fieldType == 'border-right-radius' || fieldType == 'border-right-width' ||
                        fieldType == 'color' || fieldType == 'font-size' || fieldType == 'font-family' || fieldType == 'font-style' || fieldType == 'font-weight' || fieldType == 'line-height' ||
                        fieldType == 'text-align' || fieldType == 'text-decoration' || fieldType == 'text-transform' || fieldType == 'white-space' || fieldType == 'background-color' ||
                        fieldType == 'background-image' || fieldType == 'background-position' || fieldType == 'background-size' || fieldType == 'background-clip' ||
                        fieldType == 'background-repeat' || fieldType == 'background-origin' || fieldType == 'box-shadow' ){

                  
                  
                           removeCSSFromParent(fieldType, $firstParent);
                           applyRemainingStylesSingleElement($firstParent);
                    
                  
                  

              }else if (fieldType == 'padding-top' || fieldType == 'padding-bottom' || fieldType == 'padding-left' || fieldType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (fieldType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          
                          removeCSSFromParent('margin-top', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent('margin-bottom', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-left'){
                          removeCSSFromParent('margin-left', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }else if (fieldType == 'padding-right'){
                          removeCSSFromParent('margin-right', $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                      }

                  }else{ 

                        removeCSSFromParent(fieldType, $firstParent); 
                        applyRemainingStylesSingleElement($firstParent);
                     
                  }

              }else if (fieldType == 'margin-top' || fieldType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent(fieldType, $secondParent);
                          applyRemainingStylesSingleElement($secondParent);
                    }

              }else{
                  removeCSSFromParent(fieldType, $secondParent);
                  applyRemainingStylesSingleElement($secondParent);
              }


          }
           
           
           
           
          
           if($firstParent.hasClass('tableElement')){
             
             removeCSSFromParent($(this).attr('data-value'), $secondParent);
             applyRemainingStylesSingleElement($secondParent);
           }
        }
      }
  });

  


  });



}


function applyRemainingStylesSingleElement($element){


$element.find('.findCustomClassName').each(function() {

var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();

$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');



if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

          $secondParent.css(cssStyleType, cssStyleValue);
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

        if($firstParent.hasClass('borderedButtonGroup') ){
           $firstParent.css(cssStyleType, cssStyleValue);
        }else{
           $secondParent.css(cssStyleType, cssStyleValue);
        }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
        $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width'||
                        cssStyleType == 'color' || cssStyleType == 'font-size' || cssStyleType == 'font-family' || cssStyleType == 'font-style' || cssStyleType == 'font-weight' ||
                        cssStyleType == 'line-height' || cssStyleType == 'text-align' || cssStyleType == 'text-decoration' || cssStyleType == 'text-transform' ||
                        cssStyleType == 'white-space' || cssStyleType == 'background-color' ||
                        cssStyleType == 'background-image' || cssStyleType == 'background-position' || cssStyleType == 'background-size' || cssStyleType == 'background-clip' ||
                        cssStyleType == 'background-repeat' || cssStyleType == 'background-origin' || cssStyleType == 'box-shadow'  ){

                  
                  
                        $firstParent.css(cssStyleType, cssStyleValue); 
                   
              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline') ){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline')){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else{ 
                     
                        $firstParent.css(cssStyleType, cssStyleValue);
                    
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }
     



});

});

$element.find('.findCustomIDName').each(function() {

var $first = $(this);
var $firstParent = $(this).parent(); 
var $secondParent = $firstParent.parent();

$(this).find('.cssAttributes').each(function() {

var cssStyleType = $(this).attr('data-value');
var cssStyleValue = $(this).attr('data-id');



if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              $firstParent.css(cssStyleType, cssStyleValue);
              
}else if ($firstParent.hasClass('dropdown')){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

          $secondParent.css(cssStyleType, cssStyleValue);
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( $firstParent.hasClass('borderedButtonGroup') | $secondParent.hasClass('borderedButtonGroup') ){
  if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' || cssStyleType == 'margin-left' || cssStyleType == 'margin-right' || cssStyleType == 'margin-top' ||
          cssStyleType == 'position' || cssStyleType == 'top' || cssStyleType == 'left' || cssStyleType == 'bottom' || cssStyleType == 'right' ||
          cssStyleType == 'float' || cssStyleType == 'clear' || cssStyleType == 'visibility' || cssStyleType == 'z-index' ){

        if($firstParent.hasClass('borderedButtonGroup') ){
           $firstParent.css(cssStyleType, cssStyleValue);
        }else{
           $secondParent.css(cssStyleType, cssStyleValue);
        }
  }else{
          var $buttonEl = $firstParent.find('button');
          $buttonEl.css(cssStyleType, cssStyleValue);
 }
                      
}else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
        $firstParent.css(cssStyleType, cssStyleValue);
}
else{ 

              if (cssStyleType == 'width' || cssStyleType == 'height' || cssStyleType == 'min-width' || cssStyleType == 'min-height' || cssStyleType == 'max-width' ||
                  cssStyleType == 'max-height' || cssStyleType == 'opacity' ){
                  $firstParent.css(cssStyleType, cssStyleValue);
                  $secondParent.css(cssStyleType, cssStyleValue);
              }else if (cssStyleType == 'border-color' || cssStyleType == 'border-style' || cssStyleType == 'border-radius' || cssStyleType == 'border-collapse' || cssStyleType == 'border-spacing' ||
                        cssStyleType == 'border-width' || cssStyleType == 'border-top-color' || cssStyleType == 'border-top-style' || cssStyleType == 'border-top-radius' || cssStyleType == 'border-top-width' ||
                        cssStyleType == 'border-bottom-color' || cssStyleType == 'border-bottom-style' || cssStyleType == 'border-bottom-radius' || cssStyleType == 'border-bottom-width' || 
                        cssStyleType == 'border-left-color' || cssStyleType == 'border-left-style' || cssStyleType == 'border-left-radius' || cssStyleType == 'border-left-width' ||
                        cssStyleType == 'border-right-color' || cssStyleType == 'border-right-style' || cssStyleType == 'border-right-radius' || cssStyleType == 'border-right-width' ){

                  $firstParent.css(cssStyleType, cssStyleValue); 
                  

              }else if (cssStyleType == 'padding-top' || cssStyleType == 'padding-bottom' || cssStyleType == 'padding-left' || cssStyleType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (cssStyleType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline')){
                          
                          $secondParent.css('margin-top', cssStyleValue);
                      }else if (cssStyleType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline')){
                          $secondParent.css('margin-bottom', cssStyleValue);
                      }else if (cssStyleType == 'padding-left'){
                          $secondParent.css('margin-left', cssStyleValue);
                      }else if (cssStyleType == 'padding-right'){
                          $secondParent.css('margin-right', cssStyleValue);
                      }

                  }else if ($secondParent.hasClass('buttonElement')){
                        $firstParent.css(cssStyleType, cssStyleValue);
                  }

              }else if (cssStyleType == 'margin-top' || cssStyleType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          $secondParent.css(cssStyleType, cssStyleValue);
                    }

              }
              else{
                  $secondParent.css(cssStyleType, cssStyleValue);
              }


          }


});

});



}


function applyDeleteStylesFromCustomClassDelete($element){
  
  var $first = $element;
  var $firstParent = $element.parent(); 
  var $secondParent = $firstParent.parent();

  
  

$element.find('.cssAttributes').each(function() {

var fieldType = $(this).attr('data-value');

$(this).remove();
           if ($firstParent.hasClass('borderedDivDroppable') || $firstParent.hasClass('borderedContainer') || $firstParent.hasClass('borderedTableCell') ){ 
              removeCSSFromParent(fieldType, $firstParent);
              
           }else if ($firstParent.hasClass('dropdown')){
                if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                        fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                        fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                        removeCSSFromParent(fieldType, $secondParent);
                }else{
                        var $buttonEl = $firstParent.find('button');
                        removeCSSFromParent(fieldType, $buttonEl);
               }
                                    
              }else if ( $firstParent.hasClass('borderedButtonGroup') || $secondParent.hasClass('borderedButtonGroup') ){ 
                if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
                        fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
                        fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

                      if($firstParent.hasClass('borderedButtonGroup') ){
                        removeCSSFromParent(fieldType, $firstParent);
                      }else{
                        removeCSSFromParent(fieldType, $secondParent);
                      }
                }else{
                        var $buttonEl = $firstParent.find('button');
                        removeCSSFromParent(fieldType, $buttonEl);
               }
                                    
          }else if ( ($firstParent.is('label') || $firstParent.is('input') || $firstParent.is('textarea') || $firstParent.is('select')) && !$secondParent.hasClass('borderedInput') ){ 
                  removeCSSFromParent(fieldType, $firstParent);
          }
           else{ 

              if (fieldType == 'width' || fieldType == 'height' || fieldType == 'min-width' || fieldType == 'min-height' || fieldType == 'max-width' ||
                  fieldType == 'max-height' || fieldType == 'opacity' ){
                  removeCSSFromParent(fieldType, $firstParent);
                  
                  removeCSSFromParent(fieldType, $secondParent);
                  
              }else if (fieldType == 'border-color' || fieldType == 'border-style' || fieldType == 'border-radius' || fieldType == 'border-collapse' || fieldType == 'border-spacing' ||
                        fieldType == 'border-width' || fieldType == 'border-top-color' || fieldType == 'border-top-style' || fieldType == 'border-top-radius' || fieldType == 'border-top-width' ||
                        fieldType == 'border-bottom-color' || fieldType == 'border-bottom-style' || fieldType == 'border-bottom-radius' || fieldType == 'border-bottom-width' || 
                        fieldType == 'border-left-color' || fieldType == 'border-left-style' || fieldType == 'border-left-radius' || fieldType == 'border-left-width' ||
                        fieldType == 'border-right-color' || fieldType == 'border-right-style' || fieldType == 'border-right-radius' || fieldType == 'border-right-width' ||
                        fieldType == 'color' || fieldType == 'font-size' || fieldType == 'font-family' || fieldType == 'font-style' || fieldType == 'font-weight' || fieldType == 'line-height' ||
                        fieldType == 'text-align' || fieldType == 'text-decoration' || fieldType == 'text-transform' || fieldType == 'white-space' || fieldType == 'background-color' ||
                        fieldType == 'background-image' || fieldType == 'background-position' || fieldType == 'background-size' || fieldType == 'background-clip' ||
                        fieldType == 'background-repeat' || fieldType == 'background-origin' || fieldType == 'box-shadow' ){
                  
                  
                        removeCSSFromParent(fieldType, $firstParent);
                  
                  
                  

              }else if (fieldType == 'padding-top' || fieldType == 'padding-bottom' || fieldType == 'padding-left' || fieldType == 'padding-right' ){
                  
                  if ( $secondParent.hasClass('imgElement') || $secondParent.hasClass('pElement') ) {
                    
                      if (fieldType == 'padding-top' && !$secondParent.hasClass('divSpanAsInline')){
                          
                          
                          removeCSSFromParent('margin-top', $secondParent);
                          
                      }else if (fieldType == 'padding-bottom' && !$secondParent.hasClass('divSpanAsInline')){
                          removeCSSFromParent('margin-bottom', $secondParent);
                          
                      }else if (fieldType == 'padding-left'){
                          removeCSSFromParent('margin-left', $secondParent);
                          
                      }else if (fieldType == 'padding-right'){
                          removeCSSFromParent('margin-right', $secondParent);
                          
                      }

                  }else{ 
                    
                        removeCSSFromParent(fieldType, $firstParent); 
                        
                     
                  }

              }else if (fieldType == 'margin-top' || fieldType == 'margin-bottom' ) { 
                    if ( !$secondParent.hasClass('divSpanAsInline') ){
                          removeCSSFromParent(fieldType, $secondParent);
                    }

              }
              else{
                  
                  removeCSSFromParent(fieldType, $secondParent);
                  
              }


          }
           
           
           
           
          
           if($firstParent.hasClass('tableElement')){
             
             removeCSSFromParent(fieldType, $secondParent);
             
           }
        



});



}



function removeCSSFromParent(styleType, $Element){

var stylesList = $Element.attr('style').split(';');
$.each(stylesList, function(index, item) {
           

           var indexOfSep = item.indexOf(":");

           var type = item.substr(0, indexOfSep);
           var value = item.substr(indexOfSep + 1);
           value =value.trim();
           
           
           if (type.trim() == 'padding') {
            
            if(styleType == 'padding-top'){
                  $Element.css('padding-top','');
            }else if(styleType == 'padding-bottom'){
                  $Element.css('padding-bottom','');
            }else if(styleType == 'padding-left'){
                  $Element.css('padding-left','');
            }else if(styleType == 'padding-right'){
                  $Element.css('padding-right','');
            }

           }else if (type.trim() == 'margin') {
            
            if(styleType == 'margin-top'){
                  $Element.css('margin-top','');
            }else if(styleType == 'margin-bottom'){
                  $Element.css('margin-bottom','');
            }else if(styleType == 'margin-left'){
                  $Element.css('margin-left','');
            }else if(styleType == 'margin-right'){
                  $Element.css('margin-right','');
            }

           }else if (type.trim() == 'background') {
            
            if(styleType == 'background-color'){
                  $Element.css('background-color','');
            }else if(styleType == 'background-image'){
                  $Element.css('background-image','');
            }else if(styleType == 'background-repeat'){
                  $Element.css('background-repeat','');
            }else if(styleType == 'background-position'){
                  $Element.css('background-position','');
            }

           }else if (type.trim() == 'font') {
            
            if(styleType == 'font-style'){
                  $Element.css('font-style','');
            }else if(styleType == 'font-weight'){
                  $Element.css('font-weight','');
            }else if(styleType == 'font-size'){
                  $Element.css('font-size','');
            }else if(styleType == 'line-height'){
                  $Element.css('line-height','');
            }else if(styleType == 'font-family'){
                  $Element.css('font-family','');
            }

           }else if (type.trim() == 'border') {
            
            if(styleType == 'border-width'){
                  $Element.css('border-width','');
            }else if(styleType == 'border-style'){
                  $Element.css('border-style','');
            }else if(styleType == 'border-color'){
                  $Element.css('border-color','');
            }

           }else{

           var stylesCSS = $Element.attr('style');
           if ( (styleType.trim() == type.trim()) ) {
           
              
              var indexOfType = stylesCSS.indexOf(type);
              var indexOfEndOFType = indexOfType + stylesCSS.substring(indexOfType).indexOf(';');

              var styleNew = stylesCSS.substring(0, indexOfType);
              styleNew += stylesCSS.substring(indexOfEndOFType+1);

              
              $Element.attr('style', styleNew);
              
              

           }
          
          }

        });

}



function applyIFrameInitialStyles(){
  
  
          
          styleTag.empty();
          var styleText = '';
          styleTag.text( styleText );

          $('.globalClassList').find('.globalClass').each(function() {

              var className = $(this).attr('data-type');
              styleText += '.' + className + '{';

              $(this).find('.cssAttributes').each(function() {
                var cssType = $(this).attr('data-value');
                var cssValue = $(this).attr('data-id');
                styleText += cssType + ': ' + cssValue + ';';
              });

               styleText += '}';
   
          });

          $('.globalIDsList').find('.globalID').each(function() {

              var idName = $(this).attr('data-type');
              styleText += '#' + idName + '{';

              $(this).find('.cssAttributes').each(function() {
                var cssType = $(this).attr('data-value');
                var cssValue = $(this).attr('data-id');
                styleText += cssType + ': ' + cssValue + ';';
              });

               styleText += '}';
   
          });

          styleTag.text( styleText );

          
          
}

function applyChangesToAll($divSelected, classOrIDName){


if($divSelected.find('.name').attr('data-type') == 'class'){
    var temp = '.findCustomClassName[data-type="' + classOrIDName + '"]';
}else{
     var temp = '.findCustomIDName[data-type="' + classOrIDName + '"]';
}

if($divSelected.find('.name').attr('data-type') == 'class'){
    var tempFirst = '.globalClassList';
    var tempNext = '.globalClass[data-type="' + classOrIDName + '"]';
}else{
    var tempFirst = '.globalIDsList';
    var tempNext = '.globalID[data-type="' + classOrIDName + '"]';
}



$('.content-frame').find(temp).find('.cssAttributes').remove();

var html = '';
$('.content-frame').find(temp).each(function() {

  html = '';
  
  var $parentElement = $(this).parent(); 
  var $grandParentElement = $parentElement.parent(); 
  var $firstElement = $(this);

  
  

  $(tempFirst).find(tempNext).find('.cssAttributes').each(function() {

    var fieldInspectorType = $(this).attr('data-type');
    var fieldType = $(this).attr('data-value');
    var fieldValue = $(this).attr('data-id');

    html += '<div class="cssAttributes" data-type="' + fieldInspectorType + '" data-id="' + fieldValue + '" data-value="' + fieldType + '"></div>';
   


if($parentElement.hasClass('borderedDivDroppable') || $parentElement.hasClass('borderedContainer') || $parentElement.hasClass('borderedTableCell')){ 
        $parentElement.css(fieldType, fieldValue); 
         
}else if ($parentElement.hasClass('dropdown')){
  if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
          fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
          fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){

          $grandParentElement.css(fieldType, fieldValue);
  }else{
          var $buttonEl = $parentElement.find('button');
          $buttonEl.css(fieldType, fieldValue);
 }
                      
}else if ( $parentElement.hasClass('borderedButtonGroup') || $grandParentElement.hasClass('borderedButtonGroup') ){  
  if (fieldType == 'margin-top' || fieldType == 'margin-bottom' || fieldType == 'margin-left' || fieldType == 'margin-right' || fieldType == 'margin-top' ||
          fieldType == 'position' || fieldType == 'top' || fieldType == 'left' || fieldType == 'bottom' || fieldType == 'right' ||
          fieldType == 'float' || fieldType == 'clear' || fieldType == 'visibility' || fieldType == 'z-index' ){
          
        if($parentElement.hasClass('borderedButtonGroup') ){
          $parentElement.css(fieldType, fieldValue);
        }else{
          $grandParentElement.css(fieldType, fieldValue);
        }
  }else{
          
          var $buttonEl = $parentElement.find('button');
          $buttonEl.css(fieldType, fieldValue);
 }
                      
}else if ( ($parentElement.is('label') || $parentElement.is('input') || $parentElement.is('textarea') || $parentElement.is('select')) && !$grandParentElement.hasClass('borderedInput') ){  
          $parentElement.css(fieldType, fieldValue);
}
else {

  if (fieldType == 'width' || fieldType == 'height' || fieldType == 'min-width' || fieldType == 'min-height' || fieldType == 'max-width' || fieldType == 'max-height' || fieldType == 'opacity'){
    
           $parentElement.css(fieldType, fieldValue); 
           $grandParentElement.css(fieldType, fieldValue);
   
  }else if (fieldType == 'border-color' || fieldType == 'border-style' || fieldType == 'border-radius' || fieldType == 'border-collapse' || fieldType == 'border-spacing' ||
        fieldType == 'border-width' || fieldType == 'border-top-color' || fieldType == 'border-top-style' || fieldType == 'border-top-radius' || fieldType == 'border-top-width' ||
        fieldType == 'border-bottom-color' || fieldType == 'border-bottom-style' || fieldType == 'border-bottom-radius' || fieldType == 'border-bottom-width' || 
        fieldType == 'border-left-color' || fieldType == 'border-left-style' || fieldType == 'border-left-radius' || fieldType == 'border-left-width' ||
        fieldType == 'border-right-color' || fieldType == 'border-right-style' || fieldType == 'border-right-radius' || fieldType == 'border-right-width' ||
        fieldType == 'color' || fieldType == 'font-size' || fieldType == 'font-family' || fieldType == 'font-style' || fieldType == 'font-weight' || fieldType == 'line-height' ||
        fieldType == 'text-align' || fieldType == 'text-decoration' || fieldType == 'text-transform' || fieldType == 'white-space' || fieldType == 'background-color' ||
        fieldType == 'background-image' || fieldType == 'background-position' || fieldType == 'background-size' || fieldType == 'background-clip' ||
        fieldType == 'background-repeat' || fieldType == 'background-origin' || fieldType == 'box-shadow'  ){
         
         
    
          $parentElement.css(fieldType, fieldValue); 
        
      
  }else if (fieldType == 'padding-top' || fieldType == 'padding-bottom' || fieldType == 'padding-left' || fieldType == 'padding-right' ){

        if ( $grandParentElement.hasClass('imgElement') || $grandParentElement.hasClass('pElement') ) {
          if (fieldType == 'padding-top' && !$grandParentElement.hasClass('divSpanAsInline') ){
              
                  $grandParentElement.css('margin-top', fieldValue);
            }else if (fieldType == 'padding-bottom' && !$grandParentElement.hasClass('divSpanAsInline') ){
                  $grandParentElement.css('margin-bottom', fieldValue);
            }else if (fieldType == 'padding-left'){
                  $grandParentElement.css('margin-left', fieldValue);
            }else if (fieldType == 'padding-right'){
                  $grandParentElement.css('margin-right', fieldValue);
            }

        }else{ 
            
                  $parentElement.css(fieldType, fieldValue); 
           
        }

  }else if (fieldType == 'margin-top' || fieldType == 'margin-bottom' ) { 
          if ( !$grandParentElement.hasClass('divSpanAsInline') ){
                $grandParentElement.css(fieldType, fieldValue);
          }

  }else{
      $grandParentElement.css(fieldType, fieldValue);
  }
       
        
}




    if($parentElement.hasClass('.tableElement') ){
        $parentElement.css(fieldType, fieldValue);
    }
     
      


  });

   $firstElement.append(html);
    
});



}

function applyCSSPropertiesOnResizeVisible($innerElement, $Element,cssType, cssValue, classOrIDName){


if ( $Element.hasClass('dropDownElement') ) {
      if (cssType == 'margin-top' || cssType == 'margin-bottom' || cssType == 'margin-left' || cssType == 'margin-right' || cssType == 'margin-top' ||
          cssType == 'position' || cssType == 'top' || cssType == 'left' || cssType == 'bottom' || cssType == 'right' ||
          cssType == 'float' || cssType == 'clear' || cssType == 'visibility' || cssType == 'z-index' ){
          
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }else{
          var $buttonEl = $innerElement.find('button');
          $buttonEl.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }

}else if ( $Element.hasClass('borderedButtonGroup') ){ 
      if (cssType == 'margin-top' || cssType == 'margin-bottom' || cssType == 'margin-left' || cssType == 'margin-right' || cssType == 'margin-top' ||
          cssType == 'position' || cssType == 'top' || cssType == 'left' || cssType == 'bottom' || cssType == 'right' ||
          cssType == 'float' || cssType == 'clear' || cssType == 'visibility' || cssType == 'z-index' ){
          
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }else{
           
          var $buttonEl = $innerElement.find('button');
          $buttonEl.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }

}
else{

if (cssType == 'width' || cssType == 'height' || cssType == 'min-width' || cssType == 'min-height' || cssType == 'max-width' || cssType == 'max-height' || cssType == 'opacity'){

  if($innerElement && !$innerElement.hasClass('tableElement') ){
      $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
  }
  $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());


}else if (cssType == 'border-color' || cssType == 'border-style' || cssType == 'border-radius' || cssType == 'border-collapse' || cssType == 'border-spacing' ||
 cssType == 'border-width' || cssType == 'border-top-color' || cssType == 'border-top-style' || cssType == 'border-top-radius' || cssType == 'border-top-width' ||
 cssType == 'border-bottom-color' || cssType == 'border-bottom-style' || cssType == 'border-bottom-radius' || cssType == 'border-bottom-width' || 
 cssType == 'border-left-color' || cssType == 'border-left-style' || cssType == 'border-left-radius' || cssType == 'border-left-width' ||
 cssType == 'border-right-color' || cssType == 'border-right-style' || cssType == 'border-right-radius' || cssType == 'border-right-width' ||
 cssType == 'color' || cssType == 'font-size' || cssType == 'font-family' || cssType == 'font-style' || cssType == 'font-weight' || cssType == 'line-height' ||
 cssType == 'text-align' || cssType == 'text-decoration' || cssType == 'text-transform' || cssType == 'white-space' || cssType == 'background-color' ||
 cssType == 'background-image' || cssType == 'background-position' || cssType == 'background-size' || cssType == 'background-clip' ||
 cssType == 'background-repeat' || cssType == 'background-origin' || cssType == 'box-shadow' ){
 


     if($innerElement){
          $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
     }else{
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
     }


}else if (cssType == 'padding-top' || cssType == 'padding-bottom' || cssType == 'padding-left' || cssType == 'padding-right' ){

   
  if ( $Element.hasClass('imgElement') || $Element.hasClass('pElement') ) {

         if (cssType == 'padding-top'){
          $Element.css('margin-top', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-bottom'){
          $Element.css('margin-bottom', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-left'){
          $Element.css('margin-left', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-right'){
          $Element.css('margin-right', $cssInspector.find(fieldTypeClass).val());
         }


   }else{
          if($innerElement){
              $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
          }else{
              $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
          }
   }

     

}else{
  $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
}

}

}

function applyCSSProperties($cssInspector, $innerElement, $Element, $divSelected, cssType, cssValue, fieldType, classOrIDName){


var fieldTypeClass = '.' + fieldType;



if ( $Element.hasClass('dropDownElement') ) {
      if (cssType == 'margin-top' || cssType == 'margin-bottom' || cssType == 'margin-left' || cssType == 'margin-right' || cssType == 'margin-top' ||
          cssType == 'position' || cssType == 'top' || cssType == 'left' || cssType == 'bottom' || cssType == 'right' ||
          cssType == 'float' || cssType == 'clear' || cssType == 'visibility' || cssType == 'z-index' ){
          
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }else{
          var $buttonEl = $innerElement.find('button');
          $buttonEl.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }

}else if ( $Element.hasClass('borderedButtonGroup') ){ 
      if (cssType == 'margin-top' || cssType == 'margin-bottom' || cssType == 'margin-left' || cssType == 'margin-right' || cssType == 'margin-top' ||
          cssType == 'position' || cssType == 'top' || cssType == 'left' || cssType == 'bottom' || cssType == 'right' ||
          cssType == 'float' || cssType == 'clear' || cssType == 'visibility' || cssType == 'z-index' ){
          
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }else{
           
          var $buttonEl = $innerElement.find('button');
          $buttonEl.css(cssType, $cssInspector.find(fieldTypeClass).val());
      }

}else if ( $Element.hasClass('borderedVerticalInput') ){  
          $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
}
else{

if (cssType == 'width' || cssType == 'height' || cssType == 'min-width' || cssType == 'min-height' || cssType == 'max-width' || cssType == 'max-height' || cssType == 'opacity'){

  if($innerElement && !$innerElement.hasClass('tableElement') ){
      $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
  }
  $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());


}else if (cssType == 'border-color' || cssType == 'border-style' || cssType == 'border-radius' || cssType == 'border-collapse' || cssType == 'border-spacing' ||
 cssType == 'border-width' || cssType == 'border-top-color' || cssType == 'border-top-style' || cssType == 'border-top-radius' || cssType == 'border-top-width' ||
 cssType == 'border-bottom-color' || cssType == 'border-bottom-style' || cssType == 'border-bottom-radius' || cssType == 'border-bottom-width' || 
 cssType == 'border-left-color' || cssType == 'border-left-style' || cssType == 'border-left-radius' || cssType == 'border-left-width' ||
 cssType == 'border-right-color' || cssType == 'border-right-style' || cssType == 'border-right-radius' || cssType == 'border-right-width' ||
 cssType == 'color' || cssType == 'font-size' || cssType == 'font-family' || cssType == 'font-style' || cssType == 'font-weight' || cssType == 'line-height' ||
 cssType == 'text-align' || cssType == 'text-decoration' || cssType == 'text-transform' || cssType == 'white-space' || cssType == 'background-color' ||
 cssType == 'background-image' || cssType == 'background-position' || cssType == 'background-size' || cssType == 'background-clip' ||
 cssType == 'background-repeat' || cssType == 'background-origin' || cssType == 'box-shadow' ){
 


     if($innerElement){
          $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
     }else{
          $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
     }


}else if (cssType == 'padding-top' || cssType == 'padding-bottom' || cssType == 'padding-left' || cssType == 'padding-right' ){

   
  if ( $Element.hasClass('imgElement') || $Element.hasClass('pElement') ) {

         if (cssType == 'padding-top' && !$Element.hasClass('divSpanAsInline') ){
          $Element.css('margin-top', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-bottom' && !$Element.hasClass('divSpanAsInline')){
          $Element.css('margin-bottom', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-left'){
          $Element.css('margin-left', $cssInspector.find(fieldTypeClass).val());
         }else if (cssType == 'padding-right'){
          $Element.css('margin-right', $cssInspector.find(fieldTypeClass).val());
         }


   }else{
          if($innerElement){
              $innerElement.css(cssType, $cssInspector.find(fieldTypeClass).val());
          }else{
              $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
          }
   }


}else if (cssType == 'margin-top' || cssType == 'margin-bottom' ) { 
          if ( !$Element.hasClass('divSpanAsInline') ){
                $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
          }

}else{
  $Element.css(cssType, $cssInspector.find(fieldTypeClass).val());
}

}





if($divSelected.find('.name').attr('data-type') == 'class'){
    var temp = '.findCustomClassName[data-type="' + classOrIDName + '"]';
}else{
     var temp = '.findCustomIDName[data-type="' + classOrIDName + '"]';
}

if ( this.innerElement){
    var $divName = $innerElement.find(temp);
}else{
    var $divName = $Element.find(temp);
}


var html = '';
var tempA = '.cssAttributes[data-type="' + fieldType +'"]';
if($divName.find(tempA).attr('data-id') != cssValue){
   $divName.find(tempA).remove();

   html += '<div class="cssAttributes" data-type="' + fieldType + '" data-id="' + cssValue + '" data-value="' + cssType + '"></div>';
   
   $divName.append(html);
}



if($divSelected.find('.name').attr('data-type') == 'class'){
    var tempFirst = '.globalClassList';
    var tempNext = '.globalClass[data-type="' + classOrIDName + '"]';
}else{
    var tempFirst = '.globalIDsList';
    var tempNext = '.globalID[data-type="' + classOrIDName + '"]';
}

var temp2 = '.cssAttributes[data-type="' + fieldType + '"]';

if($(tempFirst).find(tempNext).find(temp2).attr('data-id') != cssValue){

  $(tempFirst).find(tempNext).find(temp2).remove();

    var $parentGlobal = $(tempFirst).find(tempNext);
    var html = '';
    html += '<div class="cssAttributes" data-type="' + fieldType + '" data-id="' + cssValue + '" data-value="' + cssType + '" ></div>';
    $parentGlobal.append(html);
}  
          

}




$(document).mousedown('.borderedDivDroppable', function(e){ 

  e.stopPropagation(); 
  var $current = $(e.target);
  if ( $(e.target).hasClass('borderedDivDroppable') ){

  
  e.stopPropagation(); 
if( e.button == 2 ) { 
  
  closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');


var $parentElement = $(e.target); 
var $pElement = null; 

getpElClasses($parentElement, $pElement);
process_inspector($parentElement,$pElement);

}

$(e.target).children('.div-container-edit-icons').children('.div-container-edit').css('opacity', 1);
$(e.target).children('.div-container-edit-icons').children('.div-container-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.div-container-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);

closeEditArea($current);




var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');


var $parentElement = $(this).parent().closest('.borderedDivDroppable');
var $pElement = null; 


getpElClasses($parentElement, $pElement);




process_inspector($parentElement,$pElement);





});

$( document ).on( 'click', '.div-container-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedDivDroppable');
$parentElement.remove();

});


$(document).mousedown('.borderedTableCell', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedTableCell') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    
    var $cellElement = $(e.target); 
    var $rowElement = $cellElement.parent().closest('.borderedTableRow');
    var $tableElement = $rowElement.parent().closest('.tableElement');

    var $parentElement = $cellElement;
    $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.table-cell-edit-icons').children('.table-add-cell').css('opacity', 1);
  $(e.target).children('.table-cell-edit-icons').children('.table-cell-edit').css('opacity', 1);
  $(e.target).children('.table-cell-edit-icons').children('.table-cell-delete').css('opacity', 1);

}

});


$( document ).on( 'click', '.table-cell-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');


var $cellElement = $(this).parent().closest('.borderedTableCell');
var $rowElement = $cellElement.parent().closest('.borderedTableRow');
var $tableElement = $rowElement.parent().closest('.tableElement');


var $parentElement = $cellElement;
$pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);



});

$( document ).on( 'click', '.table-cell-delete', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedTableCell');
$parentElement.remove();

});



$(document).mousedown('.borderedTableDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedTableDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    $pElement = $parentElement.find('.tableElement');


    var $tableElement = $parentElement.find('.tableElement');
    $tableElement.find('.borderedTableCell').each(function() {
     var widthCustom = false;
      $(this).find('.findCustomClassName').each(function() {
            
            $(this).find('.cssAttributes').each(function() {
                   if( $(this).attr('data-value') == 'width' ){
                        widthCustom = true;
                   }

            });


      });

    if(widthCustom == false){
      $(this).css('width', 'auto');
    }

    });

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.table-description').css('opacity', 1.0);
  $(e.target).children('.table-edit-icons').children('.table-add-row').css('opacity', 1);
  $(e.target).children('.table-edit-icons').children('.table-edit').css('opacity', 1);
  $(e.target).children('.table-edit-icons').children('.table-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.table-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');



var $parentElement = $(this).parent().closest('.borderedTableDroppable');
$pElement = $parentElement.find('.tableElement');


var $tableElement = $parentElement.find('.tableElement');
$tableElement.find('.borderedTableCell').each(function() {
 var widthCustom = false;
  $(this).find('.findCustomClassName').each(function() {
        
        $(this).find('.cssAttributes').each(function() {
               if( $(this).attr('data-value') == 'width' ){
                    widthCustom = true;
               }

        });


  });

if(widthCustom == false){
  $(this).css('width', 'auto');
}

});



getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);




});

$( document ).on( 'click', '.table-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedTableDroppable');
$parentElement.remove();

});


$(document).mousedown('.borderedContainer', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedContainer') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);


  }

  $(e.target).children('.container-edit-icons').children('.container-edit').css('opacity', 1);
  $(e.target).children('.container-edit-icons').children('.container-delete').css('opacity', 1);

}

});


$( document ).on( 'click', '.container-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedContainer');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.container-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedContainer');
$parentElement.remove();

});


$(document).mousedown('.borderedRowDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedRowDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  if ( $(e.target).hasClass('rowColBac') ){
        $(e.target).children('.row-description').css('opacity', 1.0);
  }

  $(e.target).children('.row-edit-icons').children('.row-edit').css('opacity', 1);
  $(e.target).children('.row-edit-icons').children('.row-delete').css('opacity', 1);

}

});


$( document ).on( 'click', '.row-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedRowDroppable');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.row-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedRowDroppable');
$parentElement.remove();

});


$(document).mousedown('.borderedRowColDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedRowColDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.colRow-edit-icons').children('.colRow-edit').css('opacity', 1);

}

});

$( document ).on( 'click', '.colRow-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedRowColDroppable');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});



$('body').on('click', function (e) {

   var $current = $(e.target);
   


   closeEditArea($current);


});






$( document ).on( 'click', '.paragraph-content a', function (e) {
e.preventDefault();



var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('p');


$pElement.find('.findCustomClassName').each(function() {
  $parentElement.append($(this));
 
});

$parentElement.find('.findCustomClassName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomClassName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});

$pElement.find('.findCustomIDName').each(function() {
  $parentElement.append($(this));
   
});

$parentElement.find('.findCustomIDName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomIDName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});


process_editAreaText($parentElement, $pElement);

});




$(document).mousedown('.parElement', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('parElement') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('p');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

        $(e.target).children('.paragraph-edit-icons').children('.paragraph-content').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-edit').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-delete').css('opacity', 1);

        $(e.target).children('.heading-edit-icons').children('.heading-content').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-edit').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-delete').css('opacity', 1);

        $(e.target).children('.span-edit-icons').children('.span-content').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-edit').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.paragraph-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('p');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.paragraph-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedParagraph');
$parentElement.remove();

});

$( document ).on( 'click', '.heading-content a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedParagraph');

if($parentElement.find('h1').length > 0){
  var $pElement = $parentElement.find('h1');
}else if($parentElement.find('h2').length > 0){
  var $pElement = $parentElement.find('h2');
}else if($parentElement.find('h3').length > 0){
  var $pElement = $parentElement.find('h3');
}else if($parentElement.find('h4').length > 0){
  var $pElement = $parentElement.find('h4');
}


$pElement.find('.findCustomClassName').each(function() {
  $parentElement.append($(this));
});

$parentElement.find('.findCustomClassName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomClassName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});

$pElement.find('.findCustomIDName').each(function() {
  $parentElement.append($(this));
});

$parentElement.find('.findCustomIDName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomIDName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});



process_editAreaText($parentElement, $pElement);

});




$(document).mousedown('.headElement', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('headElement') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    if($parentElement.find('h1').length > 0){
      var $pElement = $parentElement.find('h1');
    }else if($parentElement.find('h2').length > 0){
      var $pElement = $parentElement.find('h2');
    }else if($parentElement.find('h3').length > 0){
      var $pElement = $parentElement.find('h3');
    }else if($parentElement.find('h4').length > 0){
      var $pElement = $parentElement.find('h4');
    }

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);


  }

        $(e.target).children('.paragraph-edit-icons').children('.paragraph-content').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-edit').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-delete').css('opacity', 1);

        $(e.target).children('.heading-edit-icons').children('.heading-content').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-edit').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-delete').css('opacity', 1);

        $(e.target).children('.span-edit-icons').children('.span-content').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-edit').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.heading-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedParagraph');
if($parentElement.find('h1').length > 0){
  var $pElement = $parentElement.find('h1');
}else if($parentElement.find('h2').length > 0){
  var $pElement = $parentElement.find('h2');
}else if($parentElement.find('h3').length > 0){
  var $pElement = $parentElement.find('h3');
}else if($parentElement.find('h4').length > 0){
  var $pElement = $parentElement.find('h4');
}

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.heading-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedParagraph');
$parentElement.remove();

});


$( document ).on( 'click', '.span-content a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('span:not([class^="span"])');

$pElement.find('.findCustomClassName').each(function() {
  $parentElement.append($(this));
});

$parentElement.find('.findCustomClassName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomClassName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});

$pElement.find('.findCustomIDName').each(function() {
  $parentElement.append($(this));
});

$parentElement.find('.findCustomIDName').each(function(){

  var dataType = $(this).attr('data-type');
  var temp = '.findCustomIDName[data-type="' + dataType + '"]';
  while($parentElement.find(temp).length > 1){
    $parentElement.find(temp).last().remove();
  }


});



process_editAreaText($parentElement, $pElement);

});





$(document).mousedown('.txtElement', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('txtElement') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('span:not([class^="span"])');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

        $(e.target).children('.paragraph-edit-icons').children('.paragraph-content').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-edit').css('opacity', 1);
        $(e.target).children('.paragraph-edit-icons').children('.paragraph-delete').css('opacity', 1);

        $(e.target).children('.heading-edit-icons').children('.heading-content').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-edit').css('opacity', 1);
        $(e.target).children('.heading-edit-icons').children('.heading-delete').css('opacity', 1);

        $(e.target).children('.span-edit-icons').children('.span-content').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-edit').css('opacity', 1);
        $(e.target).children('.span-edit-icons').children('.span-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.span-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current );

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('span:not([class^="span"])');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.span-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);
var $parentElement = $(this).parent().closest('.borderedParagraph');
$parentElement.remove();

});



$( document ).on( 'click', '.img-content a', function (e) {
e.preventDefault();



var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('img');

process_imageEdit($parentElement, $pElement);

});


$(document).mousedown('.imgElement', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('imgElement') || $(e.target).parent().hasClass('imgElement') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('img');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);


  }

    $(e.target).find('.img-edit-icons').find('.img-content').css('opacity', 1);
    $(e.target).find('.img-edit-icons').find('.img-edit').css('opacity', 1);
    $(e.target).find('.img-edit-icons').find('.img-delete').css('opacity', 1);
    
    $(e.target).parent().find('.img-edit-icons').find('.img-content').css('opacity', 1);
    $(e.target).parent().find('.img-edit-icons').find('.img-edit').css('opacity', 1);
    $(e.target).parent().find('.img-edit-icons').find('.img-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.img-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedParagraph');
var $pElement = $parentElement.find('img');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);


});

$( document ).on( 'click', '.img-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedParagraph');
$parentElement.remove();

});


$( document ).on( 'click', '.button-content a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedButton');
var $pElement = $parentElement.find('button');


process_buttonEdit($parentElement, $pElement);

});



$(document).mousedown('.borderedButton', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedButton') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('button');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

        $(e.target).children('.button-edit-icons').children('.button-content').css('opacity', 1);
        $(e.target).children('.button-edit-icons').children('.button-edit').css('opacity', 1);
        $(e.target).children('.button-edit-icons').children('.button-delete').css('opacity', 1);

}

});


$( document ).on( 'click', '.button-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedButton');
var $pElement = $parentElement.find('button');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);


});

$( document ).on( 'click', '.button-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedButton');
$parentElement.remove();

});


$( document ).on( 'click', '.dropDown-content a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedDropDown');
var $pElement = $parentElement.find('.dropdown');



process_dropdownEdit($parentElement, $pElement);

});



$(document).mousedown('.borderedDropDown', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedDropDown') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('.dropdown');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.dropDown-edit-icons').children('.dropDown-content').css('opacity', 1);
  $(e.target).children('.dropDown-edit-icons').children('.dropDown-edit').css('opacity', 1);
  $(e.target).children('.dropDown-edit-icons').children('.dropDown-delete').css('opacity', 1);

}

});


$( document ).on( 'click', '.dropDown-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedDropDown');
var $pElement = $parentElement.find('.dropdown');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);


});

$( document ).on( 'click', '.dropDown-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedDropDown');
$parentElement.remove();

});


$( document ).on( 'click', '.buttonGroup-content a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedButtonGroup');
var $pElement = $parentElement.find('.btn-group');


process_buttongroupEdit($parentElement, $pElement);

});



$(document).mousedown('.borderedButtonGroup', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedButtonGroup') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 

    var $temp = $parentElement.find('.btn-group-justified');
    if($temp && $temp.hasClass('btn-group-justified')){
    var $pElement = $temp;
    }else{
      var $pElement = $parentElement.find('.btn-group');
    }

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.buttonGroup-edit-icons').children('.buttonGroup-content').css('opacity', 1);
  $(e.target).children('.buttonGroup-edit-icons').children('.buttonGroup-edit').css('opacity', 1);
  $(e.target).children('.buttonGroup-edit-icons').children('.buttonGroup-delete').css('opacity', 1);

}

});

$( document ).on( 'click', '.buttonGroup-edit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedButtonGroup');

var $temp = $parentElement.find('.btn-group-justified');
if($temp && $temp.hasClass('btn-group-justified')){
var $pElement = $temp;
}else{
  var $pElement = $parentElement.find('.btn-group');
}


getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.buttonGroup-delete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedButtonGroup');
$parentElement.remove();

});

$( document ).on( 'click', '.orderedListContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedOrderedListDroppable');
var $pElement = $parentElement.find('ol');

process_orderedListEdit($parentElement, $pElement);

});



$(document).mousedown('.borderedOrderedListDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedOrderedListDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('ol');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

    $(e.target).children('.orderedListEditIcons').children('.orderedListContent').css('opacity', 1);
    $(e.target).children('.orderedListEditIcons').children('.orderedListEdit').css('opacity', 1);
    $(e.target).children('.orderedListEditIcons').children('.orderedListDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.orderedListEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedOrderedListDroppable');
var $pElement = $parentElement.find('ol');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.orderedListDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedOrderedListDroppable');
$parentElement.remove();

});


$( document ).on( 'click', '.unorderedListContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedUnorderedListDroppable');
var $pElement = $parentElement.find('ul');

process_unorderedListEdit($parentElement, $pElement);

});



$(document).mousedown('.borderedUnorderedListDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedUnorderedListDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('ul');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

    $(e.target).children('.unorderedListEditIcons').children('.unorderedListContent').css('opacity', 1);
    $(e.target).children('.unorderedListEditIcons').children('.unorderedListEdit').css('opacity', 1);
    $(e.target).children('.unorderedListEditIcons').children('.unorderedListDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.unorderedListEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedUnorderedListDroppable');
var $pElement = $parentElement.find('ul');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.unorderedListDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedUnorderedListDroppable');
$parentElement.remove();

});



$(document).mousedown('.borderedCarousel', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);


 if ( $(e.target).hasClass('borderedCarousel') || $(e.target).parent().hasClass('carousel-inner')  ){ 
    $(e.target).children('.carouselIcons').children('.carouselContent').css('opacity', 1);
    $(e.target).children('.carouselIcons').children('.carouselEdit').css('opacity', 1);
    $(e.target).children('.carouselIcons').children('.carouselDelete').css('opacity', 1);

    if( $(e.target).find('.carousel-control').length > 0){
        $(e.target).find('.carousel-control').each(function(){
            $(this).addClass('hiddenArrow');
        });
    }

    $(e.target).parents('.borderedCarousel').children('.carouselIcons').children('.carouselContent').css('opacity', 1);
    $(e.target).parents('.borderedCarousel').children('.carouselIcons').children('.carouselEdit').css('opacity', 1);
    $(e.target).parents('.borderedCarousel').children('.carouselIcons').children('.carouselDelete').css('opacity', 1);

    if( $(e.target).parents('.borderedCarousel').find('.carousel-control').length > 0){
        $(e.target).parents('.borderedCarousel').find('.carousel-control').each(function(){
            $(this).addClass('hiddenArrow');
        });
    }
    
}


});


$( document ).on( 'click', '.carouselContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedCarousel');

var $pElement = $parentElement.find('.carousel');


process_carouselEdit($parentElement, $pElement);

});




$( document ).on( 'click', '.carouselEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedCarousel');

var $pElement = $parentElement.find('.carousel');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.carouselDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedCarousel');
$parentElement.remove();

});


$(document).mousedown('.borderedResponsiveEmbed', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);


 if ( $(e.target).hasClass('borderedResponsiveEmbed') || $(e.target).parent().hasClass('embed-responsive') || $(e.target).parent().hasClass('customResponsiveEmbed') ){ 
        $(e.target).children('.responsiveEmbedIcons').children('.responsiveEmbedContent').css('opacity', 1);
        $(e.target).children('.responsiveEmbedIcons').children('.responsiveEmbedEdit').css('opacity', 1);
        $(e.target).children('.responsiveEmbedIcons').children('.responsiveEmbedDelete').css('opacity', 1);

        $(e.target).parent().children('.responsiveEmbedIcons').children('.responsiveEmbedContent').css('opacity', 1);
        $(e.target).parent().children('.responsiveEmbedIcons').children('.responsiveEmbedEdit').css('opacity', 1);
        $(e.target).parent().children('.responsiveEmbedIcons').children('.responsiveEmbedDelete').css('opacity', 1);

        $(e.target).parent().parent().children('.responsiveEmbedIcons').children('.responsiveEmbedContent').css('opacity', 1);
        $(e.target).parent().parent().children('.responsiveEmbedIcons').children('.responsiveEmbedEdit').css('opacity', 1);
        $(e.target).parent().parent().children('.responsiveEmbedIcons').children('.responsiveEmbedDelete').css('opacity', 1);
    
}


});


$( document ).on( 'click', '.responsiveEmbedContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedResponsiveEmbed');
var $pElement = $parentElement.find('.embed-responsive');


var $customResponsiveEmbed = $(this).parent().parent().closest('.customResponsiveEmbed');
if($customResponsiveEmbed.hasClass('CustomEmbedVideo')){
  process_responsiveEmbedVideoEdit($parentElement, $pElement);
}else{
  process_responsiveEmbediFrameEdit($parentElement, $pElement);
}

});




$( document ).on( 'click', '.responsiveEmbedEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedResponsiveEmbed');
var $pElement = $parentElement.find('.embed-responsive');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.responsiveEmbedDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedResponsiveEmbed');
$parentElement.remove();

});


$( document ).on( 'click', '.navbarContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedNavbar');
var $pElement = $parentElement.find('div.navbar');

process_navbarEdit($parentElement, $pElement);

});

$( document ).on( 'click', '.navbarEditLeft a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedNavbar');
var $pElement = $parentElement.find('div.navbar');

process_navbarEdit($parentElement, $pElement);

});

$( document ).on( 'click', '.navbarEditRight a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedNavbar');
var $pElement = $parentElement.find('div.navbar');

process_navbarEdit($parentElement, $pElement);

});


$(document).mousedown('.borderedNavbar', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedNavbar') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

   
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('div.navbar');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.navbarEditIcons').children('.navbarContent').css('opacity', 1);
  $(e.target).children('.navbarEditIcons').children('.navbarEdit').css('opacity', 1);
  $(e.target).children('.navbarEditIcons').children('.navbarEditLeft').css('opacity', 1);
  $(e.target).children('.navbarEditIcons').children('.navbarEditRight').css('opacity', 1);
  $(e.target).children('.navbarEditIcons').children('.navbarDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.navbarEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedNavbar');
var $pElement = $parentElement.find('div.navbar');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});




$( document ).on( 'click', '.navbarDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedNavbar');
$parentElement.remove();

});





$(document).mousedown('.borderedListGroupDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedListGroupDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('.list-group');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.listGroupEditIcons').children('.listGroupEdit').css('opacity', 1);
  $(e.target).children('.listGroupEditIcons').children('.listGroupDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.listGroupEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedListGroupDroppable');
var $pElement = $parentElement.find('.list-group');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.listGroupDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedListGroupDroppable');
$parentElement.remove();

});



$(document).mousedown('.borderedPanelDroppable', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedPanelDroppable') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('.panel');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.panelEditIcons').children('.panelEdit').css('opacity', 1);
  $(e.target).children('.panelEditIcons').children('.panelDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.panelEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedPanelDroppable');
var $pElement = $parentElement.find('.panel');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.panelDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedPanelDroppable');
$parentElement.remove();

});



$(document).mousedown('.panel-heading', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('panel-heading') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.panelHeading-edit-icons').children('.panelHeadingEdit').css('opacity', 1);
  $(e.target).children('.panelHeading-edit-icons').children('.panelHeadingDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.panelHeadingEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedPanelItem');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.panelHeadingDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedPanelItem');
$parentElement.remove();

});


$(document).mousedown('.panel-body', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('panel-body') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.panelContent-edit-icons').children('.panelContentEdit').css('opacity', 1);
  $(e.target).children('.panelContent-edit-icons').children('.panelContentDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.panelContentEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedPanelItem');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.panelContentDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedPanelItem');
$parentElement.remove();

});



$(document).mousedown('.panel-footer', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('panel-footer') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = null;

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.panelFooter-edit-icons').children('.panelFooterEdit').css('opacity', 1);
  $(e.target).children('.panelFooter-edit-icons').children('.panelFooterDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.panelFooterEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedPanelItem');
var $pElement = null;

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.panelFooterDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedPanelItem');
$parentElement.remove();

});




$( document ).on( 'click', '.btngMapsOptions', function (e) {
e.preventDefault();


process_gmapsEdit();

});


$(document).mousedown('.gmapsElementContainer', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('gmapsElementContainer') || $(e.target).parent().hasClass('gmapsElementContainer') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement =  $parentElement.find('.gmapsElement');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

    $(e.target).children('.gmapsEditIcons').children('.gmapsChange').css('opacity', 1);
    $(e.target).children('.gmapsEditIcons').children('.gmapsEdit').css('opacity', 1);
    $(e.target).children('.gmapsEditIcons').children('.gmapsDelete').css('opacity', 1);

    $(e.target).parent().children('.gmapsEditIcons').children('.gmapsChange').css('opacity', 1);
    $(e.target).parent().children('.gmapsEditIcons').children('.gmapsEdit').css('opacity', 1);
    $(e.target).parent().children('.gmapsEditIcons').children('.gmapsDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.gmapsEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.gmapsElementContainer');
var $pElement =  $parentElement.find('.gmapsElement');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.gmapsChange a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);


var $parentElement = $(this).parent().closest('.gmapsElementContainer');
var $pElement =  $parentElement.find('.gmapsElement');

process_gmapsChangeEdit($parentElement, $pElement);

});

$( document ).on( 'click', '.gmapsDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedGmapsElement');
$parentElement.remove();

});


$(document).mousedown('.borderedVerticalInput', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);

 if ( $(e.target).hasClass('borderedVerticalInput') || $(e.target).parent().hasClass('borderedVerticalInput') ){ 

        $(e.target).children('.inputVerticalEditIcons').children('.inputVerticalContent').css('opacity', 1);
        $(e.target).children('.inputVerticalEditIcons').children('.inputVerticalEdit').css('opacity', 1);
        $(e.target).children('.inputVerticalEditIcons').children('.inputVerticalLabelEdit').css('opacity', 1);
        $(e.target).children('.inputVerticalEditIcons').children('.inputVerticalInputEdit').css('opacity', 1);
        $(e.target).children('.inputVerticalEditIcons').children('.inputVerticalDelete').css('opacity', 1);

        $(e.target).parent().children('.inputVerticalEditIcons').children('.inputVerticalContent').css('opacity', 1);
        $(e.target).parent().children('.inputVerticalEditIcons').children('.inputVerticalEdit').css('opacity', 1);
        $(e.target).parent().children('.inputVerticalEditIcons').children('.inputVerticalLabelEdit').css('opacity', 1);
        $(e.target).parent().children('.inputVerticalEditIcons').children('.inputVerticalInputEdit').css('opacity', 1);
        $(e.target).parent().children('.inputVerticalEditIcons').children('.inputVerticalDelete').css('opacity', 1);
}


});


$( document ).on( 'click', '.inputVerticalContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedVerticalInput');
var $pElement = $parentElement.find('div.form-group');

if ( $pElement.find('input').length > 0 ) {
  process_verticalInputEdit($parentElement, $pElement);
}else if ( $pElement.find('textarea').length > 0 ) {
  process_verticalTextareaEdit($parentElement, $pElement);
}else if ( $pElement.find('select').length > 0 ) {
  process_verticalSelectEdit($parentElement, $pElement);
}



});


$( document ).on( 'click', '.inputVerticalEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedVerticalInput');
var $pElement = $parentElement.find('div.form-group');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.inputVerticalLabelEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedVerticalInput');
var $pDivEl = $parentElement.find('div.form-group');
var $pElement = $pDivEl.find('label');

getpElClasses($parentElement, $pElement);
process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.inputVerticalInputEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedVerticalInput');

var $pDivEl = $parentElement.find('div.form-group');
if ( $pDivEl.find('input').length > 0 ) {
  var $pElement = $pDivEl.find('input');
}else if ( $pDivEl.find('textarea').length > 0 ) {
  var $pElement = $pDivEl.find('textarea');
}else if ( $pDivEl.find('select').length > 0 ) {
  var $pElement = $pDivEl.find('select');
}



getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.inputVerticalDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedVerticalInput');
$parentElement.remove();

});



$(document).mousedown('.borderedFormGroup', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);
if ( $(e.target).hasClass('borderedFormGroup') ){

  if( e.button == 2 ) { 
    
    closeEditArea($current);

    var $cssInspector = $('#cssInspector');
    if($cssInspector.hasClass('cssInspector-open')){
      $cssInspector.removeClass('cssInspector-open');
      $cssInspector.addClass('cssInspector-open');
    }else{
      $cssInspector.addClass('cssInspector-open');
    }

    
    $('#cssInspector').find( $('input[type="text"]')).val('');

    var $parentElement = $(e.target); 
    var $pElement = $parentElement.find('div.form-group');

    getpElClasses($parentElement, $pElement);

    process_inspector($parentElement, $pElement);

  }

  $(e.target).children('.formGroupEditIcons').children('.formGroupEdit').css('opacity', 1);
  $(e.target).children('.formGroupEditIcons').children('.formGroupDelete').css('opacity', 1);

}

});

$( document ).on( 'click', '.formGroupEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedFormGroup');
var $pElement = $parentElement.find('div.form-group');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.formGroupDelete a', function (e) {

e.preventDefault();


var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedFormGroup');
$parentElement.remove();

});


$(document).mousedown('.borderedInput', function(e){ 
e.stopPropagation(); 
var $current = $(e.target);

 if ( $(e.target).hasClass('borderedInput') || $(e.target).parent().hasClass('borderedInput') ){ 

        $(e.target).children('.labelEditIcons').children('.labelContent').css('opacity', 1);
        $(e.target).children('.labelEditIcons').children('.labelEdit').css('opacity', 1);
        $(e.target).children('.labelEditIcons').children('.labelDelete').css('opacity', 1);

        $(e.target).children('.inputHorizontalEditIcons').children('.inputHorizontalContent').css('opacity', 1);
        $(e.target).children('.inputHorizontalEditIcons').children('.inputHorizontalEdit').css('opacity', 1);
        $(e.target).children('.inputHorizontalEditIcons').children('.inputHorizontalDelete').css('opacity', 1);

        $(e.target).parent().children('.labelEditIcons').children('.labelContent').css('opacity', 1);
        $(e.target).parent().children('.labelEditIcons').children('.labelEdit').css('opacity', 1);
        $(e.target).parent().children('.labelEditIcons').children('.labelDelete').css('opacity', 1);

        $(e.target).parent().children('.inputHorizontalEditIcons').children('.inputHorizontalContent').css('opacity', 1);
        $(e.target).parent().children('.inputHorizontalEditIcons').children('.inputHorizontalEdit').css('opacity', 1);
        $(e.target).parent().children('.inputHorizontalEditIcons').children('.inputHorizontalDelete').css('opacity', 1);
}


});


$( document ).on( 'click', '.labelContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedInput');
var $pElement = $parentElement.find('label');

process_horizontalLabelEdit($parentElement, $pElement);

});

$( document ).on( 'click', '.labelEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedInput');
var $pElement = $parentElement.find('label');

getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.labelDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedInput');
$parentElement.remove();

});


$( document ).on( 'click', '.inputHorizontalContent a', function (e) {
e.preventDefault();


var $parentElement = $(this).parent().closest('.borderedInput');



 if ( $parentElement.find('input').length > 0 ) {
      
      var $pElement = $parentElement.find('input');
      if($pElement.parent().closest('label').length == 0){
        
        process_horizontalInputEdit($parentElement, $pElement);
      }else{
          
           if ( $pElement.attr('type') == 'checkbox'){
              
              process_horizontalCheckboxEdit($parentElement, $pElement);

          } else if ( $pElement.attr('type') == 'radio'){
              
              process_horizontalRadioEdit($parentElement, $pElement);
          } 
    }
}else if ( $parentElement.find('textarea').length > 0 ) {
  
  var $tempElement = $parentElement.find('textarea');
  
  process_horizontalTextareaEdit($parentElement, $tempElement);
}else if ( $parentElement.find('select').length > 0 ) {
  
  var $tempElementNew = $parentElement.find('select');
  process_horizontalSelectEdit($parentElement, $tempElementNew);

}




});

$( document ).on( 'click', '.inputHorizontalEdit a', function (e) {
e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $cssInspector = $('#cssInspector');
if($cssInspector.hasClass('cssInspector-open')){
  $cssInspector.removeClass('cssInspector-open');
  $cssInspector.addClass('cssInspector-open');
}else{
  $cssInspector.addClass('cssInspector-open');
}


$('#cssInspector').find( $('input[type="text"]')).val('');

var $parentElement = $(this).parent().closest('.borderedInput');



if ( $parentElement.find('label').length > 0 ) {
    
    var $labelEl = $parentElement.find('label');
    var $pElement = $labelEl;
    
}
else if ( $parentElement.find('input').length > 0 ) {
  
  var $pElement = $parentElement.find('input');
}else if ( $parentElement.find('textarea').length > 0 ) {
  
  var $pElement = $parentElement.find('textarea');
}else if ( $parentElement.find('select').length > 0 ) {
  
  var $pElement = $parentElement.find('select');
}



getpElClasses($parentElement, $pElement);

process_inspector($parentElement, $pElement);

});

$( document ).on( 'click', '.inputHorizontalDelete a', function (e) {

e.preventDefault();
var $current = $(e.target);
closeEditArea($current);

var $parentElement = $(this).parent().closest('.borderedInput');
$parentElement.remove();

});





$( document ).on( 'click', '#cssInspector-close', function (e) {
e.preventDefault();
$('#cssInspector').removeClass('cssInspector-open');



$('#cssInspector').find( $('input[type="text"]')).val('');

});

$( document ).on( 'click', '.closeInspector', function (e) {
e.preventDefault();
$('#cssInspector').removeClass('cssInspector-open');


$('#cssInspector').find( $('input[type="text"]')).val('');
});


 /* PREVIEW-BTNS AND MORE BTNS ELEMENTS **********************************************************/

$( document ).on( 'click', '#clear-form', function () {
  $('#content-frame').empty();
});

$( document ).on( 'click', '.mobile', function () {
  if (iframeInitialized == true){
      $('#edit-mode').removeClass('active');

      $('.tablet-sm').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $('.desktop').removeClass('active');
      $(this).addClass('active');

      preview('mobile');
}

});
$( document ).on( 'click', '.tablet-sm', function () {
  if (iframeInitialized == true){
      $('#edit-mode').removeClass('active');

      $('.mobile').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $('.desktop').removeClass('active');
      $(this).addClass('active');

      preview('tablet-sm');
    }
});
$( document ).on( 'click', '.tablet-lg', function () {
  if (iframeInitialized == true){
      $('#edit-mode').removeClass('active');

      $('.mobile').removeClass('active');
      $('.tablet-sm').removeClass('active');
      $('.desktop').removeClass('active');
        $(this).addClass('active');
        preview('tablet-lg');
  }
});

$( document ).on( 'click', '.desktop', function () {
  
  if (iframeInitialized == true){
    
      $('#edit-mode').removeClass('active');

      $('.mobile').removeClass('active');
      $('.tablet-sm').removeClass('active');
      $('.tablet-lg').removeClass('active');
      $(this).addClass('active');
      preview('desktop');
    }
});



$( document ).on( 'click', '.btnLayout', function () {
  
  $('#customiseRowLayout').modal('show');
});



$('body').on({
   
    mouseleave: function(){
        applyIconsOpacity();
    }
}, '.content-frame');

function applyIconsOpacity(){


     $('.borderedContainer').children('.container-edit-icons').children('.container-edit').css('opacity', 0.2);
     $('.borderedContainer').children('.container-edit-icons').children('.container-delete').css('opacity', 0.2);

     $('.borderedDivDroppable').children('.div-container-edit-icons').children('.div-container-edit').css('opacity', 0.2);
     $('.borderedDivDroppable').children('.div-container-edit-icons').children('.div-container-delete').css('opacity', 0.2);


$('.borderedRowDroppable').each(function(){
     if ( $(this).hasClass('rowColBac') ){
         $(this).children('.row-description').css('opacity', 0.0);
      }
         $(this).children('.row-edit-icons').children('.row-edit').css('opacity', 0.2);
         $(this).children('.row-edit-icons').children('.row-delete').css('opacity', 0.2);
});


   $('.borderedRowColDroppable').children('.colRow-edit-icons').children('.colRow-edit').css('opacity', 0.2);


        $('.pElement').children('.paragraph-edit-icons').children('.paragraph-content').css('opacity', 0.2);
        $('.pElement').children('.paragraph-edit-icons').children('.paragraph-edit').css('opacity', 0.2);
        $('.pElement').children('.paragraph-edit-icons').children('.paragraph-delete').css('opacity', 0.2);

        $('.pElement').children('.heading-edit-icons').children('.heading-content').css('opacity', 0.2);
        $('.pElement').children('.heading-edit-icons').children('.heading-edit').css('opacity', 0.2);
        $('.pElement').children('.heading-edit-icons').children('.heading-delete').css('opacity', 0.2);

        $('.pElement').children('.span-edit-icons').children('.span-content').css('opacity', 0.2);
        $('.pElement').children('.span-edit-icons').children('.span-edit').css('opacity', 0.2);
        $('.pElement').children('.span-edit-icons').children('.span-delete').css('opacity', 0.2);


        $('.imgElement').children('.img-edit-icons').children('.img-content').css('opacity', 0.2);
        $('.imgElement').children('.img-edit-icons').children('.img-edit').css('opacity', 0.2);
        $('.imgElement').children('.img-edit-icons').children('.img-delete').css('opacity', 0.2);



        $('.buttonElement').children('.button-edit-icons').children('.button-content').css('opacity', 0.2);
        $('.buttonElement').children('.button-edit-icons').children('.button-edit').css('opacity', 0.2);
        $('.buttonElement').children('.button-edit-icons').children('.button-delete').css('opacity', 0.2);


        $('.dropDownElement').children('.dropDown-edit-icons').children('.dropDown-content').css('opacity', 0.2);
        $('.dropDownElement').children('.dropDown-edit-icons').children('.dropDown-edit').css('opacity', 0.2);
        $('.dropDownElement').children('.dropDown-edit-icons').children('.dropDown-delete').css('opacity', 0.2);
    

        $('.buttonGroupElement').children('.buttonGroup-edit-icons').children('.buttonGroup-content').css('opacity', 0.2);
        $('.buttonGroupElement').children('.buttonGroup-edit-icons').children('.buttonGroup-edit').css('opacity', 0.2);
        $('.buttonGroupElement').children('.buttonGroup-edit-icons').children('.buttonGroup-delete').css('opacity', 0.2);
    

        $('.borderedOrderedListDroppable').children('.orderedListEditIcons').children('.orderedListContent').css('opacity', 0.2);
        $('.borderedOrderedListDroppable').children('.orderedListEditIcons').children('.orderedListEdit').css('opacity', 0.2);
        $('.borderedOrderedListDroppable').children('.orderedListEditIcons').children('.orderedListDelete').css('opacity', 0.2);
    

        $('.borderedUnorderedListDroppable').children('.unorderedListEditIcons').children('.unorderedListContent').css('opacity', 0.2);
        $('.borderedUnorderedListDroppable').children('.unorderedListEditIcons').children('.unorderedListEdit').css('opacity', 0.2);
        $('.borderedUnorderedListDroppable').children('.unorderedListEditIcons').children('.unorderedListDelete').css('opacity', 0.2);
   
   $('.borderedCarousel').each(function(){
        $(this).children('.carouselIcons').children('.carouselContent').css('opacity', 0.2);
        $(this).children('.carouselIcons').children('.carouselEdit').css('opacity', 0.2);
        $(this).children('.carouselIcons').children('.carouselDelete').css('opacity', 0.2);

        if( $(this).find('.carousel-control').length > 0){
          $(this).find('.carousel-control').each(function(){
              $(this).removeClass('hiddenArrow');
          });
        }

     });

        $('.borderedResponsiveEmbed').children('.responsiveEmbedIcons').children('.responsiveEmbedContent').css('opacity', 0.2);
        $('.borderedResponsiveEmbed').children('.responsiveEmbedIcons').children('.responsiveEmbedEdit').css('opacity', 0.2);
        $('.borderedResponsiveEmbed').children('.responsiveEmbedIcons').children('.responsiveEmbedDelete').css('opacity', 0.2);
    

        $('.borderedPanelDroppable').children('.panelEditIcons').children('.panelEdit').css('opacity', 0.2);
        $('.borderedPanelDroppable').children('.panelEditIcons').children('.panelDelete').css('opacity', 0.2);
    

        $('.borderedPanelItem').children('.panelHeading-edit-icons').children('.panelHeadingEdit').css('opacity', 0.2);
        $('.borderedPanelItem').children('.panelHeading-edit-icons').children('.panelHeadingDelete').css('opacity', 0.2);

        $('.borderedPanelItem').children('.panelContent-edit-icons').children('.panelContentEdit').css('opacity', 0.2);
        $('.borderedPanelItem').children('.panelContent-edit-icons').children('.panelContentDelete').css('opacity', 0.2);

        $('.borderedPanelItem').children('.panelFooter-edit-icons').children('.panelFooterEdit').css('opacity', 0.2);
        $('.borderedPanelItem').children('.panelFooter-edit-icons').children('.panelFooterDelete').css('opacity', 0.2);
   

        $('.borderedListGroupDroppable').children('.listGroupEditIcons').children('.listGroupEdit').css('opacity', 0.2);
        $('.borderedListGroupDroppable').children('.listGroupEditIcons').children('.listGroupDelete').css('opacity', 0.2);
   

        $('.borderedNavbar').children('.navbarEditIcons').children('.navbarContent').css('opacity', 0.2);
        $('.borderedNavbar').children('.navbarEditIcons').children('.navbarEdit').css('opacity', 0.2);
        $('.borderedNavbar').children('.navbarEditIcons').children('.navbarEditLeft').css('opacity', 0.2);
        $('.borderedNavbar').children('.navbarEditIcons').children('.navbarEditRight').css('opacity', 0.2);
        $('.borderedNavbar').children('.navbarEditIcons').children('.navbarDelete').css('opacity', 0.2);
   

        $('.borderedTableDroppable').children('.table-description').css('opacity', 0.2);
        $('.borderedTableDroppable').children('.table-edit-icons').children('.table-add-row').css('opacity', 0.2);
        $('.borderedTableDroppable').children('.table-edit-icons').children('.table-edit').css('opacity', 0.2);
        $('.borderedTableDroppable').children('.table-edit-icons').children('.table-delete').css('opacity', 0.2);

 
        $('.borderedTableCell').children('.table-cell-edit-icons').children('.table-add-cell').css('opacity', 0.2);
        $('.borderedTableCell').children('.table-cell-edit-icons').children('.table-cell-edit').css('opacity', 0.2);
        $('.borderedTableCell').children('.table-cell-edit-icons').children('.table-cell-delete').css('opacity', 0.2);
    

        $('.borderedGmapsElement').children('.gmapsEditIcons').children('.gmapsChange').css('opacity', 0.2);
        $('.borderedGmapsElement').children('.gmapsEditIcons').children('.gmapsEdit').css('opacity', 0.2);
        $('.borderedGmapsElement').children('.gmapsEditIcons').children('.gmapsDelete').css('opacity', 0.2);
   

        $('.verticalInputElement').children('.inputVerticalEditIcons').children('.inputVerticalContent').css('opacity', 0.2);
        $('.verticalInputElement').children('.inputVerticalEditIcons').children('.inputVerticalEdit').css('opacity', 0.2);
        $('.verticalInputElement').children('.inputVerticalEditIcons').children('.inputVerticalLabelEdit').css('opacity', 0.2);
        $('.verticalInputElement').children('.inputVerticalEditIcons').children('.inputVerticalInputEdit').css('opacity', 0.2);
        $('.verticalInputElement').children('.inputVerticalEditIcons').children('.inputVerticalDelete').css('opacity', 0.2);
    

        $('.formGroupElement').children('.formGroupEditIcons').children('.formGroupEdit').css('opacity', 0.2);
        $('.formGroupElement').children('.formGroupEditIcons').children('.formGroupDelete').css('opacity', 0.2);
    

        $('.inputElement').children('.labelEditIcons').children('.labelContent').css('opacity', 0.2);
        $('.inputElement').children('.labelEditIcons').children('.labelEdit').css('opacity', 0.2);
        $('.inputElement').children('.labelEditIcons').children('.labelDelete').css('opacity', 0.2);

        $('.inputElement').children('.inputHorizontalEditIcons').children('.inputHorizontalContent').css('opacity', 0.2);
        $('.inputElement').children('.inputHorizontalEditIcons').children('.inputHorizontalEdit').css('opacity', 0.2);
        $('.inputElement').children('.inputHorizontalEditIcons').children('.inputHorizontalDelete').css('opacity', 0.2);
   



} 



function process_horizontalLabelEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#horizontalLabelEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horizontalLabelEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#horizontalLabelEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          var labelText = this.modalEdit.find('#horizontalLabelTextContentBox').val();
          if ( labelText != '' && labelText != ' ' && labelText != 'undefined' && labelText != null ) {
              
              this.innerElement.text(labelText);
          }

          
   }, this));

}else{
    this.modalEdit.off( "click", "#horizontalLabelEditApply");
}


}

function process_horizontalInputEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#horizontalInputEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horizontalInputEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#horizontalInputEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          var inputText = this.modalEdit.find('#horizontalInputTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              this.innerElement.attr('placeholder', inputText);
          }
          
   }, this));

}else{
    this.modalEdit.off( "click", "#horizontalInputEditApply");
}


}

function process_horizontalTextareaEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#horTextareaEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horizontalTextareaEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#horizontalTextareaEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          
          var inputText = this.modalEdit.find('#horizontalTextareaTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              this.innerElement.attr('placeholder', inputText);
          }

          var numRows = this.modalEdit.find('#horizontalTextareaRowsNumContentBox').val();
          if ( numRows != '' && numRows != ' ' && numRows != 'undefined' && numRows != null ) {
              
              this.innerElement.attr('rows', numRows);
          }

          resize();
          
   }, this));

}else{
    this.modalEdit.off( "click", "#horizontalTextareaEditApply");
}


}

function process_horizontalSelectEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var elementsNumber = this.innerElement.find('option').length;

  var $modalEdit = $('#horizontalSelectEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horizontalSelectEditApply");
      this.modalEdit.off( "click", "#horizontalSelectChangeNumElementsButton");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  var $verticalSelectOptionsContainer = this.modalEdit.find('.horizontalSelectElementsContainer');
  $verticalSelectOptionsContainer.empty();
var html = '';
for(var k=0;k<elementsNumber;k++){
  
    var m = k + 1;
    html = '<div class="row">';
    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="horizontalselectOptionText'+ m +'">Option '+ m +' </label>';
    html += '       <input type="text" class="form-control" id="horizontalselectOptionText' + m + '" placeholder="Text" style="background-color:rgb(255, 254, 249) !important;">';
    html += '    </div>';
    html += '</div>';

    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="horizontalselectOptionValue'+ m +'">&nbsp;</label>';
    html += '       <input type="text" class="form-control" id="horizontalselectOptionValue' + m + '" placeholder="Value" style="background-color:rgb(255, 254, 249) !important;">';
    html += '    </div>';
    html += '</div>';
    html += '</div>';

    $verticalSelectOptionsContainer.append(html);
 
  }

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

    this.modalEdit.on( "click", "#horizontalSelectChangeNumElementsButton", $.proxy( function(e) {

      
      var newNumberString = this.modalEdit.find('#horizontalSelectChangeNumElementsInput').val();
      var elementsNumber = parseInt(newNumberString, 10) || 0;

      var $horizontalSelectOptionsContainer = this.modalEdit.find('.horizontalSelectElementsContainer');
      $horizontalSelectOptionsContainer.empty();
      var html = '';
      if (elementsNumber > 0 && elementsNumber < 40){
      for(var k=0;k<elementsNumber;k++){
        
          var m = k + 1;
          html = '<div class="row">';
          html += '<div class="col-xs-6">';
          html += '    <div class="input-group">';
          html += '       <label for="horizontalselectOptionText'+ m +'">Option '+ m +' </label>';
          html += '       <input type="text" class="form-control" id="horizontalselectOptionText' + m + '" placeholder="Text" style="background-color:rgb(255, 254, 249) !important;">';
          html += '    </div>';
          html += '</div>';

          html += '<div class="col-xs-6">';
          html += '    <div class="input-group">';
          html += '       <label for="horizontalselectOptionValue'+ m +'">&nbsp;</label>';
          html += '       <input type="text" class="form-control" id="horizontalselectOptionValue' + m + '" placeholder="Value" style="background-color:rgb(255, 254, 249) !important;">';
          html += '    </div>';
          html += '</div>';
          html += '</div>';

          $horizontalSelectOptionsContainer.append(html);
       
        }
      }


    }, this));

    this.modalEdit.on( "click", "#horizontalSelectEditApply", $.proxy( function(e) {

      var numberOfRows = this.modalEdit.find('.horizontalSelectElementsContainer').find('.row').length;
      

      var textChanged = false;
      for(var k=1;k<=numberOfRows;k++){
            var tempText = '#horizontalselectOptionText' + k;
            var textVal = this.modalEdit.find(tempText).val();
            if ( textVal != '' && textVal != ' ' && textVal != 'undefined' && textVal != null) {
                textChanged = true;
                break;
            }

      }

      if ( textChanged ) {

          this.innerElement.empty();

          for(var k=1;k<=numberOfRows;k++){
                
                var m = k - 1;
                var tempText = '#horizontalselectOptionText' + k;
                var textVal = this.modalEdit.find(tempText).val();

                var tempValue = '#horizontalselectOptionValue' + k;
                var valueVal = this.modalEdit.find(tempValue).val();

                

                if ( textVal != '' && textVal != ' ' && textVal != 'undefined' && textVal != null) {
                    var tempHTML = '<option value="' + valueVal + '">' + textVal + '</option>';
                    this.innerElement.append(tempHTML);
                }
          
          }
      }




    }, this));

}else{
  this.modalEdit.off( "click", "#horizontalSelectEditApply");
      this.modalEdit.off( "click", "#horizontalSelectChangeNumElementsButton");
}

}

function process_horizontalCheckboxEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#horCheckboxEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horCheckboxEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#horCheckboxEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          
          var inputText = this.modalEdit.find('#horCheckboxTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              
              var $labelParent = this.innerElement.parent().closest('label');
              var $spanLabel = $labelParent.find('span');
              $spanLabel.text(inputText);
          }

          
          resize();
          
   }, this));

}else{
    this.modalEdit.off( "click", "#horCheckboxEditApply");
}


}


function process_horizontalRadioEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#horRadioEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#horRadioEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#horRadioEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          
          var inputText = this.modalEdit.find('#horRadioTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              
              var $labelParent = this.innerElement.parent().closest('label');
              var $spanLabel = $labelParent.find('span');
              $spanLabel.text(inputText);
          }

          
          resize();
          
   }, this));

}else{
    this.modalEdit.off( "click", "#horRadioEditApply");
}


}


function process_verticalInputEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#verticalInputEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#verticalInputEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#verticalInputEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          var labelText = this.modalEdit.find('#verticalInputLabelTextContentBox').val();
          if ( labelText != '' && labelText != ' ' && labelText != 'undefined' && labelText != null ) {
              
              this.innerElement.find('label').text(labelText);
          }

          var inputText = this.modalEdit.find('#verticalInputTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              this.innerElement.find('input').attr('placeholder', inputText);
          }
          
   }, this));

}else{
    this.modalEdit.off( "click", "#verticalInputEdit");
}


}

function process_verticalSelectEdit($Element, $innerElement){
  
  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var elementsNumber = this.innerElement.find('select option').length;

  var $modalEdit = $('#verticalSelectEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#verticalSelectEditApply");
      this.modalEdit.off( "click", "#verticalSelectChangeNumElementsButton");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  var $verticalSelectOptionsContainer = this.modalEdit.find('.verticalSelectElementsContainer');
  $verticalSelectOptionsContainer.empty();
var html = '';
for(var k=0;k<elementsNumber;k++){
  
    var m = k + 1;
    html = '<div class="row">';
    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="selectOptionText'+ m +'">Option '+ m +' </label>';
    html += '       <input type="text" class="form-control" id="selectOptionText' + m + '" placeholder="Text" style="background-color:rgb(255, 254, 249) !important;">';
    html += '    </div>';
    html += '</div>';

    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="selectOptionValue'+ m +'">&nbsp;</label>';
    html += '       <input type="text" class="form-control" id="selectOptionValue' + m + '" placeholder="Value" style="background-color:rgb(255, 254, 249) !important;">';
    html += '    </div>';
    html += '</div>';
    html += '</div>';

    $verticalSelectOptionsContainer.append(html);
 
  }

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

    this.modalEdit.on( "click", "#verticalSelectChangeNumElementsButton", $.proxy( function(e) {

      
      var newNumberString = this.modalEdit.find('#verticalSelectChangeNumElementsInput').val();
      var elementsNumber = parseInt(newNumberString, 10) || 0;

      var $verticalSelectOptionsContainer = this.modalEdit.find('.verticalSelectElementsContainer');
      $verticalSelectOptionsContainer.empty();
      var html = '';
      if (elementsNumber > 0 && elementsNumber < 40){
      for(var k=0;k<elementsNumber;k++){
        
          var m = k + 1;
          html = '<div class="row">';
          html += '<div class="col-xs-6">';
          html += '    <div class="input-group">';
          html += '       <label for="selectOptionText'+ m +'">Option '+ m +' </label>';
          html += '       <input type="text" class="form-control" id="selectOptionText' + m + '" placeholder="Text" style="background-color:rgb(255, 254, 249) !important;">';
          html += '    </div>';
          html += '</div>';

          html += '<div class="col-xs-6">';
          html += '    <div class="input-group">';
          html += '       <label for="selectOptionValue'+ m +'">&nbsp;</label>';
          html += '       <input type="text" class="form-control" id="selectOptionValue' + m + '" placeholder="Value" style="background-color:rgb(255, 254, 249) !important;">';
          html += '    </div>';
          html += '</div>';
          html += '</div>';

          $verticalSelectOptionsContainer.append(html);
       
        }
      }


    }, this));

    this.modalEdit.on( "click", "#verticalSelectEditApply", $.proxy( function(e) {

      var numberOfRows = this.modalEdit.find('.verticalSelectElementsContainer').find('.row').length;
      

      var textChanged = false;
      for(var k=1;k<=numberOfRows;k++){
            var tempText = '#selectOptionText' + k;
            var textVal = this.modalEdit.find(tempText).val();
            if ( textVal != '' && textVal != ' ' && textVal != 'undefined' && textVal != null) {
                textChanged = true;
                break;
            }

      }

      if ( textChanged ) {

          this.innerElement.find('select').empty();

          for(var k=1;k<=numberOfRows;k++){
                
                var m = k - 1;
                var tempText = '#selectOptionText' + k;
                var textVal = this.modalEdit.find(tempText).val();

                var tempValue = '#selectOptionValue' + k;
                var valueVal = this.modalEdit.find(tempValue).val();

                

                if ( textVal != '' && textVal != ' ' && textVal != 'undefined' && textVal != null) {
                    var tempHTML = '<option value="' + valueVal + '">' + textVal + '</option>';
                    this.innerElement.find('select').append(tempHTML);
                }
          
          }
      }




    }, this));

}else{
  this.modalEdit.off( "click", "#verticalSelectEditApply");
  this.modalEdit.off( "click", "#verticalSelectChangeNumElementsButton");
}

}



function process_verticalTextareaEdit($Element, $innerElement){
  
  
  this.Element = $Element; 
  this.innerElement = $innerElement;
  

  var $modalEdit = $('#verticalTextareaEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#verticalTextareaEditApply");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#verticalTextareaEditApply", $.proxy( function(e) { 
        
          var current = e.currentTarget;
          var $current = $(current);

          var labelText = this.modalEdit.find('#verticalTextareaLabelTextContentBox').val();
          if ( labelText != '' && labelText != ' ' && labelText != 'undefined' && labelText != null ) {
              
              this.innerElement.find('label').text(labelText);
          }

          var inputText = this.modalEdit.find('#verticalTextareaTextContentBox').val();
          if ( inputText != '' && inputText != ' ' && inputText != 'undefined' && inputText != null ) {
              
              this.innerElement.find('textarea').attr('placeholder', inputText);
          }

          var numRows = this.modalEdit.find('#verticalTextareaRowsNumContentBox').val();
          if ( numRows != '' && numRows != ' ' && numRows != 'undefined' && numRows != null ) {
              
              this.innerElement.find('textarea').attr('rows', numRows);
          }

          resize();
          
   }, this));

}else{
    this.modalEdit.off( "click", "#verticalTextareaEditApply");
}


}


function process_responsiveEmbediFrameEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#resEmbediFrameEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
    
    this.modalEdit.off( "click", ".resEmbediFrameEditApply");
    this.modalEdit.off( "click", "#resEmbediFrameClasses li");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  var srciFrame = $innerElement.find('iframe').attr('src');
  this.modalEdit.find('#resEmbediFrameSourceBox').val(srciFrame);

  this.modalEdit.modal('show');

  
if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#resEmbediFrameClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var resEmbedClassName = $current.text();

          this.modalEdit.find('#resEmbediFrameClassesBox').val(resEmbedClassName);

   }, this));

  

  this.modalEdit.on( "click", ".resEmbediFrameEditApply", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var iFrameSourceVal = this.modalEdit.find('#resEmbediFrameSourceBox').val(); 
          if (iFrameSourceVal != ''){

            this.innerElement.find('iframe').attr('src', iFrameSourceVal);

          }
          
          
          
          var changedLayout = false;
          var resEmbedClassName = this.modalEdit.find('#resEmbediFrameClassesBox').val();
          
          if ( resEmbedClassName != '' && resEmbedClassName != ' ' && resEmbedClassName != 'undefined' && resEmbedClassName != null ) {
            if( resEmbedClassName == 'embed-responsive-16by9' && this.innerElement.hasClass('embed-responsive-4by3') ){
                this.innerElement.removeClass('embed-responsive-4by3');
                this.innerElement.addClass('embed-responsive-16by9');
                changedLayout = true;
            }else if ( resEmbedClassName == 'embed-responsive-4by3' && this.innerElement.hasClass('embed-responsive-16by9') ) {
                this.innerElement.removeClass('embed-responsive-16by9');
                this.innerElement.addClass('embed-responsive-4by3');

                changedLayout = true;
            }

          }
          
          if(changedLayout ){
            resize();
          }

         
   }, this));



  }else{
    
    this.modalEdit.off( "click", ".resEmbediFrameEditApply");
    this.modalEdit.off( "click", "#resEmbediFrameClasses li");
  }

}



function process_responsiveEmbedVideoEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#resEmbedVideoEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
    this.modalEdit.off( "change", "#responsiveEmbedVideoInputFile");
    this.modalEdit.off( "click", ".responsiveEmbedVideoEditApply");
    this.modalEdit.off( "click", "#responsiveEmbedVideoClasses li");
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  var videoFile = $innerElement.find('video').find('source').attr('src');
  this.modalEdit.find('#responsiveEmbedVideoFileBox').val(videoFile);

  
  $('#fileTreeVideos').fileTree({ root: '/', script: 'connectors/jqueryFileTree.php' }, function(file) {
      this.modalEdit.find('#responsiveEmbedVideoFileBox').val(file);
   });

  this.modalEdit.modal('show');

  
if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#responsiveEmbedVideoClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var resEmbedClassName = $current.text();

          this.modalEdit.find('#responsiveEmbedVideoClassesBox').val(resEmbedClassName);

   }, this));

  this.modalEdit.on( "change", "#responsiveEmbedVideoInputFile", $.proxy( function(e) { 
        
           var videoFileVal = this.modalEdit.find('#responsiveEmbedVideoInputFile').val(); 
          if (videoFileVal != ''){

            var start = videoFileVal.lastIndexOf("\\");

            var fileName = videoFileVal.substring(start + 1);
            

            var temp = 'videos/' + fileName;
            

            this.modalEdit.find('#responsiveEmbedVideoFileBox').val(temp);
            }

  }, this)); 

  this.modalEdit.on( "click", ".responsiveEmbedVideoEditApply", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          var videoFileVal = this.modalEdit.find('#responsiveEmbedVideoFileBox').val(); 
          if (videoFileVal != ''){

            var start = videoFileVal.lastIndexOf("\\");

            if (start > 0 ) {

                  var fileName = videoFileVal.substring(start + 1);
            }else{
                var start = videoFileVal.lastIndexOf("/");
                var fileName = videoFileVal.substring(start + 1);
            }

            var loc = window.location;
            var pathName = loc.pathname;
            var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
            
            var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
          
            var windProtocol = window.location.protocol;
            var windHost = window.location.host;
            var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;
            
            var temp = filePath + 'videos/' + fileName;
            

          this.innerElement.empty();
          
          var tempHTML = '<video controls>'+
                             '<source src="' + temp + '" >'+
                          '</video>';
           this.innerElement.html(tempHTML);     

          

          }
          
          var videoSource = this.innerElement.find('video').find('source').attr('src');
          var changedLayout = false;
          var resEmbedClassName = this.modalEdit.find('#responsiveEmbedVideoClassesBox').val();
          
          if ( resEmbedClassName != '' && resEmbedClassName != ' ' && resEmbedClassName != 'undefined' && resEmbedClassName != null ) {
            if( resEmbedClassName == 'embed-responsive-16by9' && this.innerElement.hasClass('embed-responsive-4by3') ){
                this.innerElement.removeClass('embed-responsive-4by3');
                this.innerElement.addClass('embed-responsive-16by9');
                changedLayout = true;
            }else if ( resEmbedClassName == 'embed-responsive-4by3' && this.innerElement.hasClass('embed-responsive-16by9') ) {
                this.innerElement.removeClass('embed-responsive-16by9');
                this.innerElement.addClass('embed-responsive-4by3');

                changedLayout = true;
            }

          }
          


          if(changedLayout ){
            resize();
          }

         
   }, this));



  }else{
    this.modalEdit.off( "change", "#responsiveEmbedVideoInputFile");
    this.modalEdit.off( "click", ".responsiveEmbedVideoEditApply");
    this.modalEdit.off( "click", "#responsiveEmbedVideoClasses li");
  }

}



function process_carouselEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#modalCarouselEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#carouselEditApply");
      this.modalEdit.off( "click", "#carouselIndicatorsColorChange");
      this.modalEdit.off( "click", "#carouselIndicatorsActiveColorChange");
      this.modalEdit.off( "click", "#carouselIndicatorsColorChangeApply");

}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');


  this.modalEdit.find('input[name=optcheckbox]').prop( "checked", false );

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');

  var attr = this.innerElement.attr('id');

  this.carouselID = 'carousel-generic';

if (typeof attr !== typeof undefined && attr !== false) {
 
      var idName = this.innerElement.attr('id');
      this.modalEdit.find('#carouselIDNameBox').val(idName);
  }


  this.modalEdit.find("#carouselColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});
 

  this.modalEdit.modal('show');


if (this.modalEdit.data('bs.modal').isShown ){

this.modalEdit.on( "click", "#carouselIndicatorsColorChange", $.proxy( function(e) { 

e.preventDefault();
var colorValText = this.modalEdit.find("#carouselColorPicker").spectrum("get");
this.modalEdit.find("#modalCarouselIndicatorsBackColorBox").val(colorValText);
var tempText = colorValText + ' !important';
this.modalEdit.find("#modalCarouselIndicatorsBackColorBox").css('background-color', tempText);

}, this));

this.modalEdit.on( "click", "#carouselIndicatorsActiveColorChange", $.proxy( function(e) { 
e.preventDefault();
var colorValText = this.modalEdit.find("#carouselColorPicker").spectrum("get");
this.modalEdit.find("#modalCarouselIndicatorsActiveColorBox").val(colorValText);
var tempText = colorValText + ' !important';
this.modalEdit.find("#modalCarouselIndicatorsActiveColorBox").css('background-color', tempText);

}, this));


this.modalEdit.on( "click", "#carouselIndicatorsColorChangeApply", $.proxy( function(e) { 
e.preventDefault();

var carouselID = this.innerElement.attr('id');

if (typeof carouselID !== typeof undefined && carouselID !== false && carouselID !== ' ' && carouselID !== '') {  
    
    this.carouselID = carouselID;
  
     
      var tempSearchString2A = 'style.carouselStyles[data-target="' + carouselID + '"]';
      
      if ( $(tempSearchString2A).length > 0 ) {
          
          $(tempSearchString2A).remove();
          headFrame.find(tempSearchString2A).remove();

      }
  
 

  var changeColorValue = this.modalEdit.find('input[name=optradio]:checked', '#carouselIndicatorsForm').val();
  
  if(changeColorValue == 'change'){
            var colorValText = this.modalEdit.find("#modalCarouselIndicatorsBackColorBox").val();
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              
              var tempText = colorValText + ' !important';
              

              var tempDataTargetID = '#' + carouselID;
              var tempTextForStyle = '<style type="text/css" class="carouselStyles" data-target="' + carouselID + '">' + tempDataTargetID + ' > .carousel-indicators li{ background-color:' +
                                      colorValText + ' !important;}';


            var changeActiveColorValue = this.modalEdit.find('input[name=optradio]:checked', '#carouselIndicatorsActiveForm').val();
            
            if(changeActiveColorValue == 'change'){
            var colorActiveValText = this.modalEdit.find("#modalCarouselIndicatorsActiveColorBox").val();
            if (colorActiveValText != '' && colorActiveValText != ' ' && colorActiveValText != 'undefined' && colorActiveValText != null ){
             
              var tempActiveText = colorActiveValText + ' !important';
              
              
            tempTextForStyle += tempDataTargetID + ' > .carousel-indicators .active{ background-color:' +
                                      colorActiveValText + ' !important;}'; 
            }
            }

            tempTextForStyle += '</style>';
            $(tempTextForStyle).appendTo('head');
            $(tempTextForStyle).appendTo(headFrame);
              

            }
            
          }

        } 

  }, this));




this.modalEdit.on( "click", "#carouselArrowsColorChange", $.proxy( function(e) { 

e.preventDefault();
var carouselID = this.innerElement.attr('id');

if (typeof carouselID !== typeof undefined && carouselID !== false && carouselID !== ' ' && carouselID !== '') {
 
      this.carouselID = carouselID;
  
     

      var tempSearchString2A = 'style.carouselArrowStyles[data-target="' + carouselID + '"]';

      if ( $(tempSearchString2A).length > 0  ) {
          
          $(tempSearchString2A).remove();
          headFrame.find(tempSearchString2A).remove();

      }
  

        var changeTextColorValue = this.modalEdit.find('input[name=optradio]:checked', '#carouselArrowsForm').val();
          
          

          
          if(changeTextColorValue == 'change'){

            var colorValText = this.modalEdit.find("#carouselColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              
              this.modalEdit.find("#modalCarouselArrowsColorBox").val(colorValText);
              var tempText = colorValText + ' !important';
              
              this.modalEdit.find("#modalCarouselArrowsColorBox").css('background-color', tempText);

              var opacityText = this.modalEdit.find("#modalCarouselArrowsOpacityBox").val();
              if (opacityText != '' && opacityText != ' ' && opacityText != 'undefined' && opacityText != null ){

              }

             var tempDataTargetID = '#' + carouselID;
             var tempTextForStyle = '<style type="text/css" class="carouselArrowStyles" data-target="' + carouselID + '">'+
                                        tempDataTargetID + ' .carousel-control {'+
                                            'top:50%;'+
                                            'width:auto;'+
                                            'height:20px;'+
                                            'background:transparent;';
                                        var opacityText = this.modalEdit.find("#modalCarouselArrowsOpacityBox").val();
                                        if (opacityText != '' && opacityText != ' ' && opacityText != 'undefined' && opacityText != null ){
                                          tempTextForStyle += 'opacity:' + opacityText +';';
                                        }else{
                                          tempTextForStyle += 'opacity: 0.5;';
                                        }
                                             
                                          tempTextForStyle += '}'+


                                          tempDataTargetID + ' .carousel-control.left, ' + tempDataTargetID + ' .carousel-control.right {'+
                                             'background-image:none !important;'+
                                             'filter:none !important;'+
                                          '}'+
                                          tempDataTargetID + ' .carousel-control .glyphicon-chevron-left, ' + tempDataTargetID + ' .carousel-control .glyphicon-chevron-right  {'+
                                            'position:static;'+
                                            'display:block;'+
                                            'width:auto;'+
                                            'color:' + colorValText +';'+

                                          '}'+
                                          tempDataTargetID + ' .carousel-control .glyphicon-chevron-left:before {'+
                                            'margin-left: 20px;'+
                                          '}'+
                                          tempDataTargetID + ' .carousel-control .glyphicon-chevron-right:before {'+
                                            'margin-right: 20px;'+
                                          '}'+
                                          '</style>';
                $(tempTextForStyle).appendTo('head');
                $(tempTextForStyle).appendTo(headFrame);



            }

          }
            
        }

  }, this));



this.modalEdit.on( "click", "#carouselEditApply", $.proxy( function(e) {
 

var carouselID = this.modalEdit.find('#carouselIDNameBox').val();  


if (typeof carouselID !== typeof undefined && carouselID !== false && carouselID !== ' ' && carouselID !== '') {
 
      
      var previousCarouselID = this.innerElement.attr('id');

      var tempSearchString2A = 'style.carouselArrowStyles[data-target="' + previousCarouselID + '"]';
      var tempSearchString2B = '.carousel[id="' + previousCarouselID + '"]';
      
      var numOfCarouselsOfPrevType = $('#content-frame').find(tempSearchString2B).length;

      

      if ( $(tempSearchString2A).length > 0 && numOfCarouselsOfPrevType == 1 ) {

      
          
          $(tempSearchString2A).remove();
          headFrame.find(tempSearchString2A).remove();

      }
      

      this.carouselID = carouselID;
      this.innerElement.attr('id', carouselID);

      
      var temp = '.globalID[data-type="' + carouselID + '"]';
      if ( $('.globalIDsList').find(temp).length == 0){
          var $globalIDsListDiv = $('.globalIDsList');
          var html = '<div class="globalID" data-type="' + carouselID + '"></div>';
          $globalIDsListDiv.append(html);
      }
      

      var tempDataTargetID = '#' + carouselID;
      this.innerElement.find('ol.carousel-indicators').find('li').attr('data-target', tempDataTargetID);

      var tempSearchString1A = 'style.carouselArrowStyles[data-target="' + carouselID + '"]';
      var tempSearchString1B = '.carousel[id="' + carouselID + '"]';
      
     var numOfCarouselsOfPrevType1B = $('#content-frame').find(tempSearchString1B).length;

  if ( $(tempSearchString1A).length > 0 && numOfCarouselsOfPrevType1B == 1 ) { 
      
          
          $(tempSearchString1A).remove();
          headFrame.find(tempSearchString1A).remove();

      }




     var numOfElementsString = this.modalEdit.find('#carouselChangeNumElements').val();
     var numOfElements = parseInt(numOfElementsString, 10) || 0;

     var appended = false;
     if(numOfElements >= 1){
        var carouselElements = this.innerElement.find('.carouselItem').length;

        if(numOfElements < carouselElements){

            while( numOfElements != this.innerElement.find('.carouselItem').length ){
                 
                 if( this.innerElement.find(".carouselItem:last").hasClass('active')){
                      
                      this.innerElement.find(".carouselItem:last").removeClass('active');
                      this.innerElement.find(".carouselItem:first").addClass('active');
                 }
                 this.innerElement.find(".carouselItem:last").remove();
                 
                 var $lastIndicator = this.innerElement.find(".carousel-indicators >li:last");
                 if( $lastIndicator.hasClass('active')){
                      $lastIndicator.removeClass('active');
                      this.innerElement.find(".carousel-indicators >li:first").addClass('active');
                 }
                 this.innerElement.find(".carousel-indicators >li:last").remove();
                 
            }

        }else if(numOfElements > carouselElements){

            while( numOfElements != this.innerElement.find('.carouselItem').length ){
                var html = '<div class="item carouselItem"></div>';
                this.innerElement.find('.carousel-inner').append(html);
                appended = true;
            }

            
            while( this.innerElement.find('.carousel-indicators >li').length != this.innerElement.find('.carouselItem').length ){
               var dataSlideLastString = this.innerElement.find('.carousel-indicators >li:last').attr('data-slide-to');
               var dataSlideLast = parseInt(dataSlideLastString, 10) || 0;
               dataSlideLast += 1;
               var htmlInd = '<li data-target="' + tempDataTargetID + '" data-slide-to="' + dataSlideLast + '"></li>';
               this.innerElement.find('.carousel-indicators').append(htmlInd);
            }

        }

        if(appended){
          apply_CarouselItems_Droppable( this.innerElement.find('.carousel-inner') );
          
        }

     }


var arrowsChecked = this.modalEdit.find('input[id=arrowsShow]').prop('checked');

if(arrowsChecked){

  this.innerElement.find('.carousel-control').remove();

  var html = '<a class="left carousel-control hiddenArrow" href="' + tempDataTargetID + '" role="button" data-slide="prev">'+
                                                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
                                                '<span class="sr-only">Previous</span>'+
                                          '</a>'+
                                          '<a class="right carousel-control hiddenArrow" href="' + tempDataTargetID + '" role="button" data-slide="next">'+
                                              '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
                                              '<span class="sr-only">Next</span>'+
                                          '</a>';
   this.innerElement.find('.carousel-inner').append(html); 

  var $carouselOptionsEl = this.Element.find('.carouselOptions');
  $carouselOptionsEl.find('.carouselShowArrows').attr('data-value', 'true');


 
  var tempSearchStringNew2A = 'style.carouselArrowStyles[data-target="' + carouselID + '"]';
  var tempSearchStringNew2B = '.carousel[id="' + carouselID + '"]';
      
  var numOfCarouselsOfPrevType = $('#content-frame').find(tempSearchStringNew2B).length;

  if ( $(tempSearchStringNew2A).length > 0 && numOfCarouselsOfPrevType > 1 ) { 

  }else{

    var tempTextForStyle = '<style type="text/css" class="carouselArrowStyles" data-target="' + carouselID + '">'+
                              tempDataTargetID + ' .carousel-control {'+
                                'top:50%;'+
                                'width:auto;'+
                                'height:20px;'+
                                'background:transparent;'+
                                'opacity: 0.5;'+
                              '}'+


                              tempDataTargetID + ' .carousel-control.left,' + tempDataTargetID + ' .carousel-control.right {'+
                                 'background-image:none !important;'+
                                 'filter:none !important;'+
                              '}'+
                              tempDataTargetID + ' .carousel-control .glyphicon-chevron-left,' + tempDataTargetID + ' .carousel-control .glyphicon-chevron-right  {'+
                                'position:static;'+
                                'display:block;'+
                                'width:auto;'+
                                'color: black;'+

                              '}'+
                              tempDataTargetID + ' .carousel-control .glyphicon-chevron-left:before {'+
                                'margin-left: 20px;'+
                              '}'+
                              tempDataTargetID + ' .carousel-control .glyphicon-chevron-right:before {'+
                                'margin-right: 20px;'+
                              '}'+
                              '</style>';
    $(tempTextForStyle).appendTo('head');
    $(tempTextForStyle).appendTo(headFrame);
}

  
  

}else{
  var $carouselOptionsEl = this.Element.find('.carouselOptions');
  $carouselOptionsEl.find('.carouselShowArrows').attr('data-value', 'false');

  this.Element.find('.carousel-control').remove();

  
  if ( $('style.carouselArrowStyles').length > 0 ) {
    $('style.carouselArrowStyles').remove();
    headFrame.find('style.carouselArrowStyles').remove();
  }
  

}

var indicatorsChecked = this.modalEdit.find('input[id=indicatorsShow]').prop('checked');
if(indicatorsChecked){
  this.innerElement.find('.carousel-indicators').addClass('showIndicators');

  var $carouselOptionsEl = this.Element.find('.carouselOptions');
  $carouselOptionsEl.find('.carouselShowIndicators').attr('data-value', 'true');

}else{

  var $carouselOptionsEl = this.Element.find('.carouselOptions');
  $carouselOptionsEl.find('.carouselShowIndicators').attr('data-value', 'false');

}
 

resize();

}


}, this));



}else{
  this.modalEdit.off( "click", "#carouselEditApply");
   this.modalEdit.off( "click", "#carouselIndicatorsColorChange");
    this.modalEdit.off( "click", "#carouselIndicatorsActiveColorChange");
     this.modalEdit.off( "click", "#carouselIndicatorsColorChangeApply");


}


}




function process_orderedListEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#orderedListEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#orderedListEditApply");
}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');
 

  this.modalEdit.modal('show');


if (this.modalEdit.data('bs.modal').isShown ){

this.modalEdit.on( "click", "#orderedListEditApply", $.proxy( function(e) {
 

     var numOfElementsString = this.modalEdit.find('#orderedListChangeNumElements').val();
     var numOfElements = parseInt(numOfElementsString, 10) || 0;

     var appended = false;
     if(numOfElements >= 1){
        var listElements = this.innerElement.find('li').length;

        if(numOfElements < listElements){
            while( numOfElements != this.innerElement.find('li').length ){
                 this.innerElement.find("li:last").remove();
            }
        }else if(numOfElements > listElements){
            while( numOfElements != this.innerElement.find('li').length ){
                 var html = '<li class="orderedListItem borderedOrderedListItem ui-droppable"></li>';
                this.innerElement.append(html);
                appended = true;
            }
        }

        if(appended){
          apply_OrderedList_Droppable(this.innerElement);
          
        }

     }

     var listStyle = this.modalEdit.find('input[name=optradio]:checked', '.orderedListStyleTypeForm').val();
     

     var changeListStyle = false;
    if( listStyle == 'none' || listStyle == 'decimal' || listStyle == 'initial' || listStyle == 'upper-alpha' || listStyle == 'lower-alpha' ||
        listStyle == 'lower-latin' || listStyle == 'lower-roman' || listStyle == 'upper-roman' || listStyle == 'lower-greek' ||
        listStyle == 'decimal-leading-zero' || listStyle == 'upper-latin'){
        
        changeListStyle = true;
        this.innerElement.css({'list-style-type' : listStyle});
    }

   
resize();


}, this));



}else{
  this.modalEdit.off( "click", "#orderedListEditApply");
  
}


}


function process_unorderedListEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#unorderedListEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#unorderedListEditApply");
      this.modalEdit.off( "change", "#imageListStyleInputFile");
}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');

  

  this.modalEdit.modal('show');


if (this.modalEdit.data('bs.modal').isShown ){

this.modalEdit.on( "change", "#imageListStyleInputFile", $.proxy( function(e) { 
          
           var imgVal = this.modalEdit.find('#imageListStyleInputFile').val(); 
          if (imgVal != ''){

            var start = imgVal.lastIndexOf("\\");

            var fileName = imgVal.substring(start + 1);
            

            var temp = 'images/' + fileName;
            

            this.modalEdit.find('#imageListStyleFileBox').val(temp);
            }

  }, this)); 

this.modalEdit.on( "click", "#unorderedListEditApply", $.proxy( function(e) {
 

     var numOfElementsString = this.modalEdit.find('#unorderedListChangeNumElements').val();
     var numOfElements = parseInt(numOfElementsString, 10) || 0;

     var appended = false;
     if(numOfElements >= 1){
        var listElements = this.innerElement.find('li').length;

        if(numOfElements < listElements){
            while( numOfElements != this.innerElement.find('li').length ){
                 this.innerElement.find("li:last").remove();
            }
        }else if(numOfElements > listElements){
            while( numOfElements != this.innerElement.find('li').length ){
                 var html = '<li class="unorderedListItem borderedUnorderedListItem ui-droppable"></li>';
                this.innerElement.append(html);
                appended = true;
            }
        }

        if(appended){
          apply_UnorderedList_Droppable(this.innerElement);
         
        }

     }


     var listStyle = this.modalEdit.find('input[name=optradio]:checked', '.unorderedListStyleTypeForm').val();
     

    if( listStyle == 'none' || listStyle == 'circle' || listStyle == 'square' || listStyle == 'disc' ){
        
        this.innerElement.css({'list-style': 'none'});
        this.innerElement.css({'list-style-type' : listStyle});
    }

         
    var imgVal = this.modalEdit.find('#imageListStyleFileBox').val(); 
    if (imgVal != '' && imgVal != ' ' && imgVal != 'undfined'){
        var temp = "url('" + imgVal + "')";
        
         this.innerElement.css({'list-style-image' : temp});
      }


   
resize();


}, this));



}else{
  this.modalEdit.off( "click", "#unorderedListEditApply");
  this.modalEdit.off( "change", "#imageListStyleInputFile");
}


}




function process_gmapsEdit(){

  
  var $modalEdit = $('#gmapsEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#gmapsEditApply");
}

this.modalEdit.modal('show');

if (this.modalEdit.data('bs.modal').isShown ){

this.modalEdit.on( "click", "#gmapsEditApply", $.proxy( function(e) { 



var addressVal = this.modalEdit.find('#gmapsCenterAddressContentBox').val();
var latValue;
var lngValue;

var latNEW;
var lngNEW;
if ( addressVal != '' && addressVal != ' ' && addressVal != 'undefined' && addressVal != null) {
  
  var geocoder = new google.maps.Geocoder(); 
  geocoder.geocode({
        address : addressVal, 
        region: 'no' 
      },
      function(results, status) {
          latValue = results[0]['geometry']['location'].lat();
          lngValue = results[0]['geometry']['location'].lng();

          latNEW = latValue;
          lngNEW = lngValue;

          


var idName = this.modalEdit.find('#gmapsIdNameBox').val();

if ( idName != '' && idName != ' ' && idName != 'undefined' && idName != null) {

      
      var temp = '.globalID[data-type="' + idName + '"]';
      if ( $('.globalIDsList').find(temp).length == 0){
          var $globalIDsListDiv = $('.globalIDsList');
          var htmlGlobalID = '<div class="globalID" data-type="' + idName + '"></div>';
          $globalIDsListDiv.append(htmlGlobalID);
      }
      


var zoomLevelValue = 12;

var modalZoomLevelValue = this.modalEdit.find('#gmapsZoomLevelBox').val();
if ( modalZoomLevelValue != '' && modalZoomLevelValue != ' ' && modalZoomLevelValue != 'undefined' && modalZoomLevelValue != null) {
zoomLevelValue = modalZoomLevelValue;
}




var lengthIDName = idName.length;
var idNameToDisplay = idName;
if(lengthIDName > 12){
    idNameToDisplay = idName.slice(0,12);
    idNameToDisplay += '..';
}

var temHTML =  '<tr><td style="padding-top:10px;">'+
                   '<div class="gmapsDraggable" data-id="1">'+
                      '<span class="badge customBadge" style="background-color:rgb(109, 158, 235);margin-left:10px;">'+
                                  '<a href="#" class="ui_to_drag">'+
                                      '<table style="margin-top:2px;">'+
                                          '<tr >'+
                                             '<td style="padding-left:4px;font-size:12px;"><i class="fa fa-stack-exchange"></i></td>'+
                                             '<td style="padding-left:9px;padding-top:4px;font-size:12px;">Google Maps <br/></td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</a>'+
                              '</span>'+
                              
                              '<div class="gmapsElementContainer hiddenDiv" data-id="1">'+

                                    '<div class="gmapsdescription">Google map</div>'+
                                      '<div class="gmapsEditIcons">'+
                                        '<span class="gmapsChange"><a href="#"><i class="fa fa-pencil" ></i></a></span>'+
                                        '<span class="gmapsEdit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>'+
                                        '<span class="gmapsDelete"><a href="#"><i class="fa fa-times" ></i></a></span>'+
                                    '</div>'+
                               
                                        
                                    '<div class="gmapsElement" id="' + idName + '"></div>'+

                                    '<div class="gmapsAttributes" style="display:none;"'+
                                         
                                         ' data-id="'+idName +'" data-zoom="'+zoomLevelValue+'" data-lat="'+latNEW+'" data-lng="'+lngNEW+'">'+
                                    '</div>'+

                              '</div>'+
                          '</div>' +
                       '</td>'+ 
                       '</tr>' +
                       '<tr>' +

                       '<td style="padding-top:10px;padding-left:10px;">'+
                            '<span class="ui_to_drag_desc_gmaps" >ID:' + idNameToDisplay + '</span>'+
                          '</td></tr>';




var $parentTable = $('.customGMaps').parents('table'); 
$parentTable.append(temHTML);

$( ".gmapsDraggable" ).draggable({
      appendTo: "body",
      iframeFix: true,
      revert: "invalid",
      helper: "clone"
      
});

}

});




}

}, this));

}else{
 this.modalEdit.off( "click", "#gmapsEditApply");
  
}

}



function process_gmapsChangeEdit($Element, $innerElement){

  
  var $modalEdit = $('#gmapsChangeEdit');
  this.modalEdit = $modalEdit;

  this.Element = $Element; 
  this.innerElement = $innerElement;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#gmapsChangeEditApply");
}

this.modalEdit.modal('show');

if (this.modalEdit.data('bs.modal').isShown ){

this.modalEdit.on( "click", "#gmapsChangeEditApply", $.proxy( function(e) { 



var addressVal = this.modalEdit.find('#gmapsChangeEditCenterAddressContentBox').val();
var latValue;
var lngValue;

var latNEW;
var lngNEW;
if ( addressVal != '' && addressVal != ' ' && addressVal != 'undefined' && addressVal != null) {
  
  var geocoder = new google.maps.Geocoder(); 
  geocoder.geocode({
        address : addressVal, 
        region: 'no' 
      },
      function(results, status) {
          latValue = results[0]['geometry']['location'].lat();
          lngValue = results[0]['geometry']['location'].lng();

          latNEW = latValue;
          lngNEW = lngValue;

          

var idName = this.innerElement.attr('id'); 

if ( idName != '' && idName != ' ' && idName != 'undefined' && idName != null) {


var zoomLevelValue = 12;

var modalZoomLevelValue = this.modalEdit.find('#gmapsChangeEditZoomLevelBox').val();
if ( modalZoomLevelValue != '' && modalZoomLevelValue != ' ' && modalZoomLevelValue != 'undefined' && modalZoomLevelValue != null) {
zoomLevelValue = modalZoomLevelValue;
}



var mapObject = null;
var indexFound = -1;
for(var m=0;m<mapsObjectsArray.length;m++){
  var tempOject = mapsObjectsArray[m];
 

if (tempOject.id == idName) {
  mapObject = tempOject;
  indexFound = m;
  break;
}

}

if(mapObject && indexFound >=0){
  var map = mapsArray[indexFound];
  var myCenter = new google.maps.LatLng(latNEW, lngNEW);
  map.setCenter(myCenter);
  google.maps.event.trigger(map, 'resize');

  var marker = mapsMarkerArray[indexFound];
  marker.setPosition(myCenter);

var $attrsDiv = this.Element.find('.gmapsAttributes');
$attrsDiv.attr('data-lat',latNEW);
$attrsDiv.attr('data-lng',lngNEW);


}


}

});




}

}, this));

}else{
 this.modalEdit.off( "click", "#gmapsChangeEditApply");
  
}

}




function process_buttongroupEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#buttongroupEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#buttongroupEditApply");
      this.modalEdit.off( "click", "#modalButtongroupClasses li");
      this.modalEdit.off( "click", "#modalButtongroupHelpers li");

      this.modalEdit.off( "click", "#buttongroupButtonsTextChange");
      this.modalEdit.off( "click", "#buttongroupButtonsBorderColorChange");
      this.modalEdit.off( "click", "#buttongroupButtonsBackgroundColorChange");


      this.modalEdit.off( "click", "#buttonGroupButtonsClasses li");
      this.modalEdit.off( "click", "#buttonGroupButtonsHelpers li");
      this.modalEdit.off( "click", "#buttongroupButtonsClassesChange");


}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');

  
  this.innerJustified = false;
  if(this.innerElement.hasClass('btn-group-justified')){
    this.innerJustified = true;
    var elementsNumber = this.innerElement.find('.btn-group').length;
    
  }else{
    this.innerJustified = false;
    var elementsNumber = this.innerElement.children('button').length;
  }

  
  

  var $buttongroupElementsOptionsContainer = this.modalEdit.find('.buttongroupElementsContainer');
  $buttongroupElementsOptionsContainer.empty();
  var html = '';
for(var k=0;k<elementsNumber;k++){
  
    var m = k + 1;
    html = '<div class="row">';
    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="buttongroupElementText'+ m +'">Button '+ m +' </label>';
    html += '       <input type="text" class="form-control" id="buttongroupElementText' + m + '" placeholder="Text" style="background-color:#b6b6b6 !important;">';
    html += '    </div>';
    html += '</div>';

    html += '<div class="col-xs-6">';
    html += '    <div class="input-group">';
    html += '       <label for="buttongroupElementHREF'+ m +'">&nbsp;</label>';
    html += '       <input type="text" class="form-control" id="buttongroupElementHREF' + m + '" placeholder="href" style="background-color:#b6b6b6 !important;">';
    html += '    </div>';
    html += '</div>';
    html += '</div>';

    

    $buttongroupElementsOptionsContainer.append(html);
  
  

  }
  

  
  this.modalEdit.find("#buttongroupColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});


  this.modalEdit.modal('show');

if (this.modalEdit.data('bs.modal').isShown ){

  this.modalEdit.on( "click", "#buttonGroupButtonsClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var buttonClassName = $current.text();

          this.modalEdit.find('#buttonGroupButtonsClassesBox').val(buttonClassName);

  }, this));

  this.modalEdit.on( "click", "#buttonGroupButtonsHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var buttonHelperClassName = $current.text();

          this.modalEdit.find('#buttonGroupButtonsHelpersBox').val(buttonHelperClassName);

  }, this));

  this.modalEdit.on( "click", "#buttongroupButtonsClassesChange", $.proxy( function(e) {
 

    var buttonClassName = this.modalEdit.find('#buttonGroupButtonsClassesBox').val();
    if ( buttonClassName && buttonClassName != '' ){
     this.innerElement.find('button').removeClass('btn-default');
     this.innerElement.find('button').removeClass('btn-primary');
     this.innerElement.find('button').removeClass('btn-success');
     this.innerElement.find('button').removeClass('btn-info');
     this.innerElement.find('button').removeClass('btn-warning');
     this.innerElement.find('button').removeClass('btn-danger');
     this.innerElement.find('button').removeClass('btn-link');
            
     this.innerElement.find('button').addClass(buttonClassName);

    }

    var buttonHelperClassName = this.modalEdit.find('#buttonGroupButtonsHelpersBox').val();
    if ( buttonHelperClassName && buttonHelperClassName != '' ){
      
           this.innerElement.find('button').removeClass('btn-lg');
           this.innerElement.find('button').removeClass('btn-md');
           this.innerElement.find('button').removeClass('btn-sm');
           this.innerElement.find('button').removeClass('btn-xs');

           this.innerElement.find('button').addClass(buttonHelperClassName);
           
      

    }

}, this));

  
  this.modalEdit.on( "click", "#buttongroupButtonsTextChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          var fontSize = this.modalEdit.find('#buttongroupButtonsFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('button').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#buttongroupButtonsFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('button').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#buttongroupButtonsFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('button').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#buttongroupButtonsFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('button').css('font-weight', fontWeight);
          }

          var changeTextColorValue = this.modalEdit.find('input[name=optradio]:checked', '#buttongroupButtonsTextColorForm').val();
          
          

          if(changeTextColorValue == 'change'){
            var colorValText = this.modalEdit.find("#buttongroupColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('button').each(function(){
                 $(this).css({'color' : tempColor});
               
             });
            }
            
          }

  }, this));


this.modalEdit.on( "click", "#buttongroupButtonsBorderColorChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          
          var changeBorderColorValue = this.modalEdit.find('input[name=optradio]:checked', '#buttongroupButtonsBorderForm').val();
          
          

          if(changeBorderColorValue == 'change'){
            var colorValBorder = this.modalEdit.find("#buttongroupColorPicker").spectrum("get");
            
            this.innerElement.find('button').css('border-color', colorValBorder);

          }

           

  }, this));

this.modalEdit.on( "click", "#buttongroupButtonsBackgroundColorChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          
          var changeBackgroundColorValue = this.modalEdit.find('input[name=optradio]:checked', '#buttongroupButtonsBackgroundForm').val();
          
          

          if(changeBackgroundColorValue == 'change'){
            var colorValBack = this.modalEdit.find("#buttongroupColorPicker").spectrum("get");
            var tempColor =  colorValBack + '!important';
            this.innerElement.find('button').css('background-color', tempColor);

          }
    
          

  }, this));

  

  this.modalEdit.on( "click", "#modalButtongroupClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          var buttonClassName = $current.text();

          this.modalEdit.find('#modalButtongroupClassesBox').val(buttonClassName);

  }, this));

  this.modalEdit.on( "click", "#modalButtongroupHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
         
          var buttonHelperClassName = $current.text();

          this.modalEdit.find('#modalButtongroupHelpersBox').val(buttonHelperClassName);

  }, this));


this.modalEdit.on( "click", "#buttongroupEditApply", $.proxy( function(e) {

     
    var buttonClassName = this.modalEdit.find('#modalButtongroupClassesBox').val();
    if ( buttonClassName && buttonClassName != '' ){
      if(this.innerJustified == false){
           this.innerElement.find('button').removeClass('btn-default');
           this.innerElement.find('button').removeClass('btn-primary');
           this.innerElement.find('button').removeClass('btn-success');
           this.innerElement.find('button').removeClass('btn-info');
           this.innerElement.find('button').removeClass('btn-warning');
           this.innerElement.find('button').removeClass('btn-danger');
           this.innerElement.find('button').removeClass('btn-link');
                  
           this.innerElement.find('button').addClass(buttonClassName);
        }else{
           this.innerElement.find('.btn-group').find('button').removeClass('btn-default');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-primary');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-success');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-info');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-warning');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-danger');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-link');
                  
           this.innerElement.find('.btn-group').find('button').addClass(buttonClassName);
        }

    }


  var buttonHelperClassName = this.modalEdit.find('#modalButtongroupHelpersBox').val();
  if ( buttonHelperClassName && buttonHelperClassName != '' ){
    if(this.innerJustified == false){
      if(buttonHelperClassName == 'btn-lg' || buttonHelperClassName == 'btn-md' || buttonHelperClassName == 'btn-sm' || buttonHelperClassName == 'btn-xs'){
           this.innerElement.find('button').removeClass('btn-lg');
           this.innerElement.find('button').removeClass('btn-md');
           this.innerElement.find('button').removeClass('btn-sm');
           this.innerElement.find('button').removeClass('btn-xs');

           this.innerElement.find('button').addClass(buttonHelperClassName);
           
      }else{
           var temp = 'btn-group-vertical';
           this.innerElement.addClass(temp);
      }
    }else{
      if(buttonHelperClassName == 'btn-lg' || buttonHelperClassName == 'btn-md' || buttonHelperClassName == 'btn-sm' || buttonHelperClassName == 'btn-xs'){
           this.innerElement.find('.btn-group').find('button').removeClass('btn-lg');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-md');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-sm');
           this.innerElement.find('.btn-group').find('button').removeClass('btn-xs');

           this.innerElement.find('.btn-group').find('button').addClass(buttonHelperClassName);
           
      }else {
           var temp = 'btn-group-vertical';
           this.innerElement.addClass(temp);
      }
    }

    }



if(this.innerJustified == false){
   var elementsNumber = this.innerElement.find('button').length;
}else{
 
  var elementsNumber = this.innerElement.find('.btn-group').length;
}
  
  

  var $buttongroupElementsOptionsContainer = this.modalEdit.find('.buttongroupElementsContainer');
  for(var k=1;k<=elementsNumber;k++){
     
      var m = k - 1;
      var tempText = '#buttongroupElementText' + k;
      var textVal = this.modalEdit.find(tempText).val();

      var tempHref = '#buttongroupElementHREF' + k;
      var hrefVal = this.modalEdit.find(tempHref).val();

      var tempClass = '#buttongroupElementClass' + k;
      var classVal = this.modalEdit.find(tempClass).val();

      if(this.innerJustified == false){
        var tempSearch = 'button:eq(' + m + ')';
      }else{
        var tempSearch = 'div:eq(' + m + ')';
      }

       
       

      if(textVal != "" && textVal != " " && textVal != "undefined"){
        if(this.innerJustified == false){
          this.innerElement.find(tempSearch).text(textVal);
        }else{
          this.innerElement.find(tempSearch).find('button').text(textVal);
        }
      }
      if(hrefVal != "" && hrefVal != " " && hrefVal != "undefined"){
        
        if(this.innerJustified == false){
          this.innerElement.find(tempSearch).attr('href', hrefVal);
        }else{
          this.innerElement.find(tempSearch).find('button').attr('href', hrefVal);
        }
      }

      

  }




var newNumberString = this.modalEdit.find('#modalButtongroupChangeNumElements').val();
var newNumber = parseInt(newNumberString, 10) || 0;

if (newNumber > 0 && newNumber < 30){
   if(this.innerJustified == false){
    var className = this.innerElement.find('button').attr('class');
    this.innerElement.empty();
    var htmlTemp = '';
    for(var l=0;l<newNumber;l++){
      var n = l + 1;
      htmlTemp = '';
      htmlTemp += '<button type="button" class="' + className + '" href="#">Button' + n +'</button>';
      this.innerElement.append(htmlTemp);
    }

  }else{
    var className;
    this.innerElement.find('.btn-group').each( function() {
        className =  $(this).find('button').attr('class');
    });
    
    this.innerElement.empty();

    var htmlTemp = '';
    for(var l=0;l<newNumber;l++){
      var n = l + 1;
      htmlTemp = '<div class="btn-group" role="group">';
      htmlTemp += '<button type="button" class="' + className + '" href="#">Button' + n +'</button>';
      htmlTemp += '</div>';
      this.innerElement.append(htmlTemp);
    }

  }
    

}



resize();


}, this));



}else{
  this.modalEdit.off( "click", "#buttongroupEditApply");
  this.modalEdit.off( "click", "#modalButtongroupClasses li");
  this.modalEdit.off( "click", "#modalButtongroupHelpers li");

  this.modalEdit.off( "click", "#buttongroupButtonsTextChange");
  this.modalEdit.off( "click", "#buttongroupButtonsBorderColorChange");
  this.modalEdit.off( "click", "#buttongroupButtonsBackgroundColorChange");

  this.modalEdit.off( "click", "#buttonGroupButtonsClasses li");
  this.modalEdit.off( "click", "#buttonGroupButtonsHelpers li");
  this.modalEdit.off( "click", "#buttongroupButtonsClassesChange");
}

}



function process_dropdownEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#dropdownEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      this.modalEdit.off( "click", "#dropdownEditApply");
      this.modalEdit.off( "click", "#modalButtonClasses li");
      this.modalEdit.off( "click", "#modalButtonHelpers li");

      this.modalEdit.off( "click", "#dropdownLinksColorChange");
      this.modalEdit.off( "click", "#dropdownLinksBackgroundColorChange");
      this.modalEdit.off( "click", "#dropdownLinksHoverColorChange");

      this.modalEdit.off( "click", "#dropdownButtonMainTextColorChange");
      this.modalEdit.off( "click", "#dropdownButtonMainBackgroundChange");
      this.modalEdit.off( "click", "#dropdownButtonMainBorderChange");


}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');

  
  var $ulEl = this.innerElement.find('ul.dropdown-menu');
  var elementsNumber = $ulEl.children('li').length;

  var $dropdownElementsOptionsContainer = this.modalEdit.find('.dropdownElementsContainer');
  $dropdownElementsOptionsContainer.empty();
  var html = '';
  for(var k=0;k<elementsNumber;k++){
    var m = k + 1;
    html = '';
    html += '<div class="col-xs-4">';
    html += '    <div class="input-group">';
    html += '       <label for="dropdownElementText'+ m +'">Element '+ m +' </label>';
    html += '       <input type="text" class="form-control" id="dropdownElementText' + m + '" placeholder="Text" style="background-color:#b6b6b6 !important;">';
    html += '    </div>';
    html += '</div>';

    html += '<div class="col-xs-4">';
    html += '    <div class="input-group">';
    html += '       <label for="dropdownElementHREF'+ m +'">Enter href</label>';
    html += '       <input type="text" class="form-control" id="dropdownElementHREF' + m + '" placeholder="href" style="background-color:#b6b6b6 !important;">';
    html += '    </div>';
    html += '</div>';

    html += '<div class="col-xs-4">';
    html += '    <div class="input-group">';
    html += '       <label for="dropdownElementClass'+ m +'">Enter Class</label>';
    html += '       <input type="text" class="form-control" id="dropdownElementClass' + m + '" placeholder="class" style="background-color:#b6b6b6 !important;">';
    html += '    </div>';
    html += '</div>';

    $dropdownElementsOptionsContainer.append(html);

  }

var $tempEl = this.modalEdit;
iconsHTMLToAppend('dropdown', $tempEl);

  

  this.modalEdit.find("#dropdownColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

  this.modalEdit.modal('show');

if (this.modalEdit.data('bs.modal').isShown ){
  
  this.modalEdit.on( "click", "#dropdownLinksColorChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          var fontSize = this.modalEdit.find('#dropdownLinksFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('ul.dropdown-menu').find('li').find('a').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#dropdownLinksFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('ul.dropdown-menu').find('li').find('a').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#dropdownLinksFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('ul.dropdown-menu').find('li').find('a').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#dropdownLinksFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('ul.dropdown-menu').find('li').find('a').css('font-weight', fontWeight);
          }

          var changeTextColorValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownLinksColorForm').val();
          

          
          if(changeTextColorValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('ul.dropdown-menu').find('li').find('a').each(function(){
                 $(this).css({'color' : tempColor});
               
             });
            }
            
          }

  }, this));

this.modalEdit.on( "click", "#dropdownLinksBackgroundColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkBackgroundValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownLinksBackgroundForm').val();
          
        
          
          if(changeLinkBackgroundValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              
                
                 this.innerElement.find('ul.dropdown-menu').css({'background-color' : tempColor});
               
             
            }
            
          }

  }, this));

this.modalEdit.on( "click", "#dropdownLinksHoverColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkHoverValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownLinksHoverColorForm').val();
          
        
          
          if(changeLinkHoverValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              

              var tempColor =  colorValText + '!important';

              var classNameValue = this.modalEdit.find("#dropdownLinksClassNameBox").val();
              var idNameValue = this.modalEdit.find("#dropdownLinksIdNameBox").val();
              
              
              var tempTextForClass= '';
              if ( classNameValue != '' && classNameValue != ' ' &&  classNameValue != 'undefined' && classNameValue != null){
                    
                    tempTextForClass = '<style type="text/css" class="dropdownStyle">.dropdown-menu > li > a.' + classNameValue +':hover{ background-color:' + colorValText + ';}' + '</style>';
                    $(tempTextForClass).appendTo('head');
                    $(tempTextForClass).appendTo(headFrame);
                    this.innerElement.find('ul.dropdown-menu').find('li').find('a').each(function(){
                        $(this).addClass(classNameValue);
                    });
              }

              
              var tempTextForId= '';
              if ( idNameValue != '' && idNameValue != ' ' && idNameValue != 'undefined' && idNameValue != null){
                    
                    tempTextForId = '<style type="text/css" class="dropdownStyle">.dropdown-menu > li > a#' + idNameValue +':hover{ background-color:' + colorValText + ';}' + '</style>';
                    $(tempTextForId).appendTo('head');
                    $(tempTextForId).appendTo(headFrame);
                    this.innerElement.find('ul.dropdown-menu').find('li').find('a').each(function(){
                        $(this).attr('id', idNameValue);
                    });
              }

              
            }
            
          }

  }, this));



  this.modalEdit.on( "click", "#modalButtonClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          var buttonClassName = $current.text();

          this.modalEdit.find('#modalButtonClassesBox').val(buttonClassName);

  }, this));

  this.modalEdit.on( "click", "#modalButtonHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
         
          var buttonHelperClassName = $current.text();

          this.modalEdit.find('#modalButtonHelpersBox').val(buttonHelperClassName);

  }, this));

  this.modalEdit.on( "click", "#dropdownButtonMainTextColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
         
          var changeButtonColorValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownLinksColorForm').val();
          
          if(changeButtonColorValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('button').css({'color' : tempColor});
               
            
            }
            
          }

  }, this));

  this.modalEdit.on( "click", "#dropdownButtonMainBackgroundChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
         
          var changeButtonColorValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownButtonMainBackgroundForm').val();
          
          if(changeButtonColorValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('button').css({'background-color' : tempColor});
               
            
            }
            
          }

  }, this));

  this.modalEdit.on( "click", "#dropdownButtonMainBorderChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
         
          var changeButtonColorValue = this.modalEdit.find('input[name=optradio]:checked', '#dropdownButtonMainBorderForm').val();
          
          if(changeButtonColorValue == 'change'){
            var colorValText = this.modalEdit.find("#dropdownColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              
              this.innerElement.find('button').css({'border-color' : colorValText});
               
            
            }
            
          }

  }, this));


this.modalEdit.on( "click", "#dropdownEditApply", $.proxy( function(e) {

     var buttonTextValue = this.modalEdit.find('#modalButtonFileBox').val();
     if ( buttonTextValue && buttonTextValue != '' ){
        var htmlInsert = buttonTextValue + '&nbsp;' + '<span class="caret"></span>';
        this.innerElement.find('button').html(htmlInsert);
     }

    var buttonClassName = $('#modalButtonClassesBox').val();
    if ( buttonClassName && buttonClassName != '' ){
     this.innerElement.find('button').removeClass('btn-default');
     this.innerElement.find('button').removeClass('btn-primary');
     this.innerElement.find('button').removeClass('btn-success');
     this.innerElement.find('button').removeClass('btn-info');
     this.innerElement.find('button').removeClass('btn-warning');
     this.innerElement.find('button').removeClass('btn-danger');
     this.innerElement.find('button').removeClass('btn-link');
            
     this.innerElement.find('button').addClass(buttonClassName);

    }

    var buttonHelperClassName = $('#modalButtonHelpersBox').val();
    if ( buttonHelperClassName && buttonHelperClassName != '' ){
      if(buttonHelperClassName == 'btn-lg' || buttonHelperClassName == 'btn-md' || buttonHelperClassName == 'btn-sm' || buttonHelperClassName == 'btn-xs'){
           this.innerElement.find('button').removeClass('btn-lg');
           this.innerElement.find('button').removeClass('btn-md');
           this.innerElement.find('button').removeClass('btn-sm');
           this.innerElement.find('button').removeClass('btn-xs');

           this.innerElement.find('button').addClass(buttonHelperClassName);
           
      }else{
           this.innerElement.find('button').removeClass('active');
           this.innerElement.find('button').removeClass('disabled');
          
           this.innerElement.find('button').addClass(buttonHelperClassName);
      }

    }

    
    var fontSize = this.modalEdit.find('#dropdownMainFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('button').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#dropdownMainFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('button').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#dropdownMainFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('button').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#dropdownMainFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('button').css('font-weight', fontWeight);
          }

    

    var iconSize = this.modalEdit.find('input[name=optradio]:checked', '.iconsSizeContainerForm').val();
    

     var iconSizeClass = '';
     var addSizeClass = false;
    if(iconSize== 'normal'){
        addSizeClass = false;
    }else if(iconSize== 'lg'){
      iconSizeClass = 'fa-lg';
      addSizeClass = true;
    }else if(iconSize== '2x'){
      iconSizeClass = 'fa-2x';
      addSizeClass = true;
    }else if(iconSize== '3x'){
      iconSizeClass = 'fa-3x';
      addSizeClass = true;
    }else if(iconSize== '4x'){
      iconSizeClass = 'fa-4x';
      addSizeClass = true;
    }else if(iconSize== '5x'){
      iconSizeClass = 'fa-5x';
      addSizeClass = true;
    }

    
    var $insertOptionEl = this.modalEdit.find('input[name=optradio]:checked', '.insertOptionsContainerForm');
    var insertOptionElClass = $insertOptionEl.attr('class');
    

    
    var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsDropdownContainerForm');
    var $iconEl = $iconRadioEl.parent().closest('label').find('i');
    var iconClass = $iconEl.attr('class');
    

     var iconHT;
     if(!addSizeClass){
          iconHT = iconClass;
     }else{
          iconHT = iconClass + ' ' + iconSizeClass;
     }
     
     var iconHTML = '<i class="' + iconHT + '"></i>';

if(iconClass != 'undefined' && iconClass != null && iconClass != ''){
    

    if(insertOptionElClass == "beforeText"){
      iconHTML += '&nbsp;';
      this.innerElement.find('button').prepend(iconHTML);

    }
}


  var $ulEl = this.innerElement.find('ul.dropdown-menu');
  var elementsNumber = $ulEl.children('li').length;
  

  var $dropdownElementsOptionsContainer = this.modalEdit.find('.dropdownElementsContainer');
  for(var k=1;k<=elementsNumber;k++){
     
     var m = k - 1;
      var tempText = '#dropdownElementText' + k;
      var textVal = this.modalEdit.find(tempText).val();

      var tempHref = '#dropdownElementHREF' + k;
      var hrefVal = this.modalEdit.find(tempHref).val();

      var tempClass = '#dropdownElementClass' + k;
      var classVal = this.modalEdit.find(tempClass).val();

      var tempSearch = 'li:eq(' + m + ')';

       
       
       
      if(textVal != "" && textVal != " " && textVal != "undefined"){
        $ulEl.find(tempSearch).find('a').text(textVal);
      }
      if(hrefVal != "" && hrefVal != " " && hrefVal != "undefined"){
        $ulEl.find(tempSearch).find('a').attr('href', hrefVal);
      }

      if(classVal != "" && classVal != " " && classVal != "undefined"){
        $ulEl.find(tempSearch).find('a').attr('class', classVal);
      }

  }



var newNumberString = this.modalEdit.find('#modaldropdownChangeNumElements').val();
var newNumber = parseInt(newNumberString, 10) || 0;

if (newNumber > 0 && newNumber < 30){
    $ulEl.empty();
    var htmlTemp = '';
    for(var l=0;l<newNumber;l++){
      var n = l + 1;
      htmlTemp = '';
      htmlTemp += '<li><a href="#">Enter Link' + n + '</a></li>';
      $ulEl.append(htmlTemp);
    }

}



resize();


}, this));



}else{
  this.modalEdit.off( "click", "#dropdownEditApply");
  this.modalEdit.off( "click", "#modalButtonClasses li");
  this.modalEdit.off( "click", "#modalButtonHelpers li");

  this.modalEdit.off( "click", "#dropdownLinksColorChange");
  this.modalEdit.off( "click", "#dropdownLinksBackgroundColorChange");
  this.modalEdit.off( "click", "#dropdownLinksHoverColorChange");

  this.modalEdit.off( "click", "#dropdownButtonMainTextColorChange");
  this.modalEdit.off( "click", "#dropdownButtonMainBackgroundChange");
  this.modalEdit.off( "click", "#dropdownButtonMainBorderChange");


}

}


function process_buttonEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#buttonEdit');
  this.modalEdit = $modalEdit;

if ( !this.modalEdit.hasClass('in') ){
      
      
      this.modalEdit.off( "click", "#buttonEditApply");
      this.modalEdit.off( "click", "#modalButtonsClasses li");
      this.modalEdit.off( "click", "#modalButtonsHelpers li");
}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  this.modalEdit.find('input[name=optradio]').removeAttr('checked');
  
  
  
  var $tempEl = this.modalEdit;
  
  iconsHTMLToAppend('buttons',$tempEl);


  this.modalEdit.modal('show');

if (this.modalEdit.data('bs.modal').isShown ){


  
  this.modalEdit.on( "click", "#modalButtonsClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var buttonClassName = $current.text();

          this.modalEdit.find('#modalButtonsClassesBox').val(buttonClassName);

  }, this));

  this.modalEdit.on( "click", "#modalButtonsHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var buttonHelperClassName = $current.text();

          this.modalEdit.find('#modalButtonsHelpersBox').val(buttonHelperClassName);

  }, this));


this.modalEdit.on( "click", "#buttonEditApply", $.proxy( function(e) {
 

     var buttonTextValue = this.modalEdit.find('#modalButtonFileBox').val();
     if ( buttonTextValue && buttonTextValue != '' ){
        this.innerElement.text(buttonTextValue);
     }

    var buttonClassName = this.modalEdit.find('#modalButtonsClassesBox').val();
    if ( buttonClassName && buttonClassName != '' ){
     this.innerElement.removeClass('btn-default');
     this.innerElement.removeClass('btn-primary');
     this.innerElement.removeClass('btn-success');
     this.innerElement.removeClass('btn-info');
     this.innerElement.removeClass('btn-warning');
     this.innerElement.removeClass('btn-danger');
     this.innerElement.removeClass('btn-link');
            
     this.innerElement.addClass(buttonClassName);

    }

    var buttonHelperClassName = this.modalEdit.find('#modalButtonsHelpersBox').val();
    if ( buttonHelperClassName && buttonHelperClassName != '' ){
      if(buttonHelperClassName == 'btn-lg' || buttonHelperClassName == 'btn-md' || buttonHelperClassName == 'btn-sm' || buttonHelperClassName == 'btn-xs'){
           this.innerElement.removeClass('btn-lg');
           this.innerElement.removeClass('btn-md');
           this.innerElement.removeClass('btn-sm');
           this.innerElement.removeClass('btn-xs');

           this.innerElement.addClass(buttonHelperClassName);
           
      }else{
           this.innerElement.removeClass('active');
           this.innerElement.removeClass('disabled');
          
           this.innerElement.addClass(buttonHelperClassName);
      }

    }

    var iconSize = this.modalEdit.find('input[name=optradio]:checked', '.iconsSizeContainerForm').val();
    

     var iconSizeClass = '';
     var addSizeClass = false;
    if(iconSize== 'normal'){
        addSizeClass = false;
    }else if(iconSize== 'lg'){
      iconSizeClass = 'fa-lg';
      addSizeClass = true;
    }else if(iconSize== '2x'){
      iconSizeClass = 'fa-2x';
      addSizeClass = true;
    }else if(iconSize== '3x'){
      iconSizeClass = 'fa-3x';
      addSizeClass = true;
    }else if(iconSize== '4x'){
      iconSizeClass = 'fa-4x';
      addSizeClass = true;
    }else if(iconSize== '5x'){
      iconSizeClass = 'fa-5x';
      addSizeClass = true;
    }

    
    var $insertOptionEl = this.modalEdit.find('input[name=optradio]:checked', '.insertOptionsContainerForm');
    var insertOptionElClass = $insertOptionEl.attr('class');
    

    
    var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');
    var $iconEl = $iconRadioEl.parent().closest('label').find('i');
    var iconClass = $iconEl.attr('class');
    

     var iconHT;
     if(!addSizeClass){
          iconHT = iconClass;
     }else{
          iconHT = iconClass + ' ' + iconSizeClass;
     }
     
     var iconHTML = '<i class="' + iconHT + '"></i>';

if(iconClass != 'undefined'){
    

    if(insertOptionElClass == "beforeText"){
      iconHTML += '&nbsp;';
      this.innerElement.prepend(iconHTML);

    }else if(insertOptionElClass == "afterText"){
      var html = '&nbsp;';
      this.innerElement.append(html);
      this.innerElement.append(iconHTML);

    }else if(insertOptionElClass == "beforeTextNewLine"){
      iconHTML += '<br/>';
      this.innerElement.prepend(iconHTML);

    }else if(insertOptionElClass == "afterTextNewLine"){
      var html = '<br/>';
      this.innerElement.append(html);
      this.innerElement.append(iconHTML);

    }
  }

  resize();



  }, this));



}else{
  
  
  this.modalEdit.off( "click", "#buttonEditApply");
  this.modalEdit.off( "click", "#modalButtonsClasses li");
  this.modalEdit.off( "click", "#modalButtonsHelpers li");
}


}


function process_imageEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#imageEdit');
  this.modalEdit = $modalEdit;

  if ( !this.modalEdit.hasClass('in') ){
    this.modalEdit.off( "change", "#imageInputFile");
    this.modalEdit.off( "click", ".imageEditApply");
    this.modalEdit.off( "click", "#modalImageClasses li");
    this.modalEdit.off( "click", "#modalImageHelpers li");
}

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');

  var width = this.innerElement.attr('width');
  var height = this.innerElement.attr('height');
  
  this.modalEdit.find('#modalImageWidth').val(width);
  this.modalEdit.find('#modalImageHeight').val(height);

  var imgFile = $innerElement.attr('src');
  this.modalEdit.find('#modalImageFileBox').val(imgFile);

  
  
  $('#fileTreeImages').fileTree({ root: '/', script: 'connectors/jqueryFileTree.php' }, function(file) {
      this.modalEdit.find('#modalImageFileBox').val(file);
   });


  this.modalEdit.modal('show');

  
if (this.modalEdit.data('bs.modal').isShown ){

    this.modalEdit.on( "click", "#modalImageClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var imageClassName = $current.text();

          this.modalEdit.find('#modalImageClassesBox').val(imageClassName);

   }, this));


  this.modalEdit.on( "click", "#modalImageHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var imageHelperClassName = $current.text();

          this.modalEdit.find('#modalImageHelpersBox').val(imageHelperClassName);

   }, this));

  this.modalEdit.on( "change", "#imageInputFile", $.proxy( function(e) { 
        
           var imgVal = this.modalEdit.find('#imageInputFile').val(); 
          if (imgVal != ''){

            var start = imgVal.lastIndexOf("\\");

            var fileName = imgVal.substring(start + 1);
            

            var temp = 'images/' + fileName;
            

            this.modalEdit.find('#modalImageFileBox').val(temp);
            }

  }, this)); 

  this.modalEdit.on( "click", ".imageEditApply", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          
          var changed = false;
          if( this.modalEdit.find('#modalImageWidth').val()  ){
            
            var widthString = this.modalEdit.find('#modalImageWidth').val();
            
            var width = parseInt(widthString, 10) || 0;
            if(width > 0){
                this.innerElement.attr('width', width);
                
                applyCSSToParentImage(this.Element, 'width', width);
                changed = true;
            }
            
          }

          if( this.modalEdit.find('#modalImageHeight').val()  ){
            var heightString = this.modalEdit.find('#modalImageHeight').val();
            
            var height = parseInt(heightString, 10) || 0;
            if(height > 0){
                this.innerElement.attr('height', height);
                
                
                applyCSSToParentImage(this.Element, 'height', height);
                changed = true;
            }
            
          }

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
            
            var temp = filePath + 'images/' + fileName;
            

            this.modalEdit.find('#modalImageFileBox').val(temp);

            this.innerElement.attr('src', temp);



          }
        
  
          
          var changedLayout = false;
          var imageHelperClassName = this.modalEdit.find('#modalImageHelpersBox').val();
          if( imageHelperClassName == 'center-block' && !this.innerElement.hasClass('center-block') ){
            this.innerElement.addClass(imageHelperClassName);
            changedLayout = true;
          }

          
          if( imageHelperClassName == 'img-responsive' && !this.innerElement.hasClass('imgTestResponsive') ){
            
            this.Element.addClass('imgResponsive');
            this.innerElement.addClass('imgTestResponsive');
            changedLayout = true;
          }

          if(changed || changedLayout){
            resize();
          }

          var imageClassName = this.modalEdit.find('#modalImageClassesBox').val();
          if( imageClassName == 'img-rounded' && !this.innerElement.hasClass('img-rounded') ){
            if( this.innerElement.hasClass('img-circle') ){
              this.innerElement.removeClass('img-circle');
            }
            if( this.innerElement.hasClass('img-thumbnail') ){
              this.innerElement.removeClass('img-thumbnail');
            }
            this.innerElement.addClass(imageClassName);

          }else if( imageClassName == 'img-circle' && !this.innerElement.hasClass('img-circle') ){
            if( this.innerElement.hasClass('img-rounded') ){
              this.innerElement.removeClass('img-rounded');
            }
            if( this.innerElement.hasClass('img-thumbnail') ){
              this.innerElement.removeClass('img-thumbnail');
            }
            this.innerElement.addClass(imageClassName);

          }else if( imageClassName == 'img-thumbnail' && !this.innerElement.hasClass('img-thumbnail') ){
            if( this.innerElement.hasClass('img-rounded') ){
              this.innerElement.removeClass('img-rounded');
            }
            if( this.innerElement.hasClass('img-circle') ){
              this.innerElement.removeClass('img-circle');
            }
            this.innerElement.addClass(imageClassName);

          }
       

   }, this));



  }else{
    this.modalEdit.off( "change", "#imageInputFile");
    this.modalEdit.off( "click", ".imageEditApply");
    this.modalEdit.off( "click", "#modalImageClasses li");
    this.modalEdit.off( "click", "#modalImageHelpers li");
  }

}


function applyloseEditArea(){



}



function closeEditArea($current){

var $content = $('.content-frame');

var $parentPar = $content.find('.borderedParagraph');


if ( typeof $(this).attr('class') === "undefined" ) {

}



if( (!$current.parent().hasClass('toolbar') && !$current.parent().hasClass('iconsApply') && !$current.parent().hasClass('parentClassmodal-content') && !$current.parent().hasClass('parentClassmodal-header') &&
    !$current.parents('.iconsContainer').length > 0 && !$current.parents('#paragraphEdit').length > 0 && !$current.hasClass('iconsApply') &&
    !$current.hasClass('Medium') && !$current.hasClass('aHref') && !$current.hasClass('aText') && !$current.hasClass('modal-open') && !($current.parent().hasClass('childOfBorderedParagraph'))  ) ) {

$parentPar.removeClass('isEditing');
$content.find('.toolbar-top').remove();

$('.borderedParagraph').each(function() {

  var $parent = $(this);

  if($(this).find('p').length > 0){
          $(this).find('.paragraph-description').css('visibility', 'visible');
      }else if($(this).find('h1').length > 0){
          $(this).find('.heading-description').css('visibility', 'visible');
      }else if($(this).find('h2').length > 0){
          $(this).find('.heading-description').css('visibility', 'visible');
      }else if($(this).find('h3').length > 0){
          $(this).find('.heading-description').css('visibility', 'visible');
      }else if($(this).find('h4').length > 0){
          $(this).find('.heading-description').css('visibility', 'visible');
      }else if($(this).find('span').length > 0){
          $(this).find('.span-description').css('visibility', 'visible');
      }

      
      var $inner = $(this).children('.childOfBorderedParagraph');

      
      if( $inner.text().trim().length == 0){
        
      }

      if( $inner.children('i').length == 1){
        
      }

      if( $inner.text().trim().length == 0 && $inner.children('i').length == 1){ 
                var $iconEl = $inner.find('i');
                var iconHTML = $iconEl.html();
                $inner.append(iconHTML);

      }

var $innerNew = $(this).find('.childOfBorderedParagraph');
$innerNew.find('.htmlContent').remove();


var pHTML = $innerNew.html();

var tempHTML = '<div class="htmlContent" style="display:none;">' + pHTML + '</div>';

$innerNew.append(tempHTML);


      
      
      if( $(this).children('.findCustomClassName').length > 0 ){
              
              
              var $temp = $(this);

              $(this).find('.findCustomClassName').each(function() {

                if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {

                  $inner.append($(this).clone());
                  
                  $(this).remove();
                }

              });

      }

      if( $(this).children('.findCustomIDName').length > 0 ){
          
          
          var $temp = $(this);

          $(this).find('.findCustomIDName').each(function() {

            if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {

             $inner.append($(this).clone());
             
             $(this).remove();
           }

          });

      }

      
      var $innerNew = $(this).find('.childOfBorderedParagraph');
      var innerValue = $innerNew.html();
      
      
      $innerNew.find('div').each(function() {

        
       if ( typeof $(this).attr('class') === "undefined" ) {
             var tempValue = '<br/>';
             tempValue += $(this).html();
             $(this).replaceWith(tempValue);
             
        }else{
          var class_name = $(this).attr('class');
          
        }

      });

    
$innerNew.find('i').not('.medium-i').each(function() {

  if($(this)[0].nextSibling && $(this)[0].previousSibling){  

    var afterText = $(this)[0].nextSibling.nodeValue;
    var previousText = $(this)[0].previousSibling.nodeValue;
    

  if (afterText){  
    if (afterText.charAt( 0 ) == '}' ) {
        
        
        afterText = "" + afterText.substr(1,afterText.length);

        

        $(this)[0].nextSibling.nodeValue = afterText;
      }
    }

  if (previousText){    
    var previousTextLength = previousText.length;
    
    var position = previousText.indexOf('{');
    

    if (previousText.charAt( previousTextLength - 1) == '{' ) {
      
       previousText = previousText.substr(0, previousTextLength - 1); 

       

       $(this)[0].previousSibling.nodeValue = previousText;
    }
  }

  }

});





});

}
resize();

}


function process_iconsEdit( ){
var $modalEdit = $('#paragraphEdit');

if ( !$modalEdit.hasClass('in') ){
     $modalEdit.off( "click", ".iconAdd");
}

iconsHTMLToAppend('buttons',$modalEdit);

$modalEdit.modal('show');

if ($modalEdit.data('bs.modal').isShown ){

    $modalEdit.on( "click", ".saveContents",  function(e) { 

    var iconSize = $('input[name=optradio]:checked', '.iconsParSizeForm').val();
    

     var iconSizeClass = '';
     var addSizeClass = false;
    if(iconSize== 'normal'){
        addSizeClass = false;
    }else if(iconSize== 'lg'){
      iconSizeClass = 'fa-lg';
      addSizeClass = true;
    }else if(iconSize== '2x'){
      iconSizeClass = 'fa-2x';
      addSizeClass = true;
    }else if(iconSize== '3x'){
      iconSizeClass = 'fa-3x';
      addSizeClass = true;
    }else if(iconSize== '4x'){
      iconSizeClass = 'fa-4x';
      addSizeClass = true;
    }else if(iconSize== '5x'){
      iconSizeClass = 'fa-5x';
      addSizeClass = true;
    }




     
     var $iconRadioEl = $('#paragraphEdit').find('input[name=optradio]:checked');
     var $iconEl = $iconRadioEl.parent().closest('label').find('i');
     var iconClass = $iconEl.attr('class');
     

     var iconHT;
     if(!addSizeClass){
          iconHT = iconClass;
     }else{
          iconHT = iconClass + ' ' + iconSizeClass;
     }
     
     var iconHTML = '<i class="' + iconHT + '"></i>';

     
     var tempHTML = iconHTML;

       var $toolbar = $('.toolbar-top');
       if($toolbar){
          if( $toolbar.find('.iconsHTML').length > 0 ){
              $toolbar.find('.iconsHTML').remove();
              var html = '<div class="iconsHTML" style="display:none;">' + tempHTML + '</div>';
              $toolbar.append(html);
          }else{
              var html = '<div class="iconsHTML" style="display:none;">' + tempHTML + '</div>';
              $toolbar.append(html);
          }
       }
          

   });


  }else{
     
    $modalEdit.off( "click", ".iconAdd");
  }

}




function process_editAreaText($Element, $innerElement){

  var vMedium;
  if(vMedium){
    vMedium.destroy();
  }

  
  

if( $Element.hasClass('borderedParagraph') ){
var toolbarHtml = '<div class="toolbar-top" style="margin-bottom:5px;margin-top:10px;clear:both;">' + 
                    '<span class="toolbar">' + 
                        '<span class="bold" style="font-size:20px;display: inline-block;min-width:15px;width:15px;font-weight:bold;color:#66d9ef;margin-left:4px;">B</span>' + 
                        '<span class="underline" style="font-size:20px;display: inline-block;min-width:15px;width:15px;text-decoration: underline;color: #a6e22e;margin-left:8px;">U</span>' + 
                        '<span class="italic" style="font-size:20px;display: inline-block;min-width:15px;width:15px;font-style: italic;color: #f92672;margin-left:8px;">I</span>' + 
                        '<span class="strike" style="font-size:20px;display: inline-block;min-width:15px;width:15px;text-decoration: line-through; color: #e6db74;margin-left:5px;">S</span>' + 
                        
                        '<button class="insert btn btn-xs btn-success " style="margin-left:12px;margin-top:-4px;padding-top:4px;padding-bottom:4px;">Link</button>' +
                        '<input class="aHref" name="aHref" type="text" style="width:100px;margin-left:10px;" placeholder="HREF"></input>' +
                        '<input class="aText" name="aText" type="text" style="width:200px;margin-left:10px;" placeholder="LINK TEXT"></input>' +
                        '<span class="iconsInsert" style="margin-left:12px;"> <i class="fa fa-lg fa-picture-o"></i></span>'+
                        
                        '<button class="iconsApply btn btn-xs btn-info " style="margin-left:12px;margin-top:-4px;">Icon</button>' +
                        
                    '</span>' + 
                  '</div>';
}else{
var toolbarHtml = '<div class="toolbar-top" style="margin-bottom:5px;">' + 
                    '<span class="toolbar">' + 
                        '<span class="bold" style="font-size:20px;display: inline-block;min-width:15px;width:15px;font-weight:bold;color:#66d9ef;margin-left:4px;">B</span>' + 
                        '<span class="underline" style="font-size:20px;display: inline-block;min-width:15px;width:15px;text-decoration: underline;color: #a6e22e;margin-left:8px;">U</span>' + 
                        '<span class="italic" style="font-size:20px;display: inline-block;min-width:15px;width:15px;font-style: italic;color: #f92672;margin-left:8px;">I</span>' + 
                        '<span class="strike" style="font-size:20px;display: inline-block;min-width:15px;width:15px;text-decoration: line-through; color: #e6db74;margin-left:5px;">S</span>' + 
                        
                        '<span class="iconsInsert"> Icons </span>'+
                        '<span class="iconsApply"> <i class="fa fa-picture-o"></i> </span>'+
                    '</span>' + 
                  '</div>';

}

$Element.addClass('isEditing');

if($Element.find('.paragraph-description').length > 0){
        $Element.find('.paragraph-description').css('visibility', 'hidden');
  }else if($Element.find('.heading-description').length > 0){
        $Element.find('.heading-description').css('visibility', 'hidden');
  }else if($Element.find('.span-description').length > 0){
        $Element.find('.span-description').css('visibility', 'hidden');
  }



if($Element.find('.toolbar-top').length == 0){
  
  

  
  $Element.parents().each(function(){
   
   if( (!$(this).hasClass('main')) && (!$(this).hasClass('content-frame')) && (!$(this).hasClass('borderedContainer')) && (!$(this).hasClass('borderedTableCell')) ) 
   {
        
        if ( $(this).width() > 550 ) {
            $(this).after(toolbarHtml);
            return false;
        }   
   }else if ( $(this).hasClass('borderedTableCell') ){

        var $trElement = $(this).parent().closest('.borderedTableRow');
        var $tableElement = $trElement.parent().closest('.tableElement');
        $tableElement.before(toolbarHtml);
        return false;

   }
   else if ( ($(this).hasClass('content-frame')) || ($(this).hasClass('borderedContainer')) ) {
          $Element.before(toolbarHtml);
          return false;

          
         

   }else {
      return false;
   }  
    

  });


  
}

var mediumElement = $innerElement[0];
var mediumContainer = $Element[0];

vMedium = new Medium({
            element: mediumElement,
            mode: Medium.richMode,
            
            attributes: null,
            
            
            tags: null,
            
            pasteAsText: true
           
        });

mediumElement.highlight = function() {
        if (document.activeElement !== mediumElement) {
            vMedium.select();
        }
};

$( ".bold" ).mousedown(function() {
  
  mediumElement.highlight();
        vMedium.invokeElement('b', {
            
            
        });
        return false;
});



    $( ".underline" ).mousedown(function() {
        mediumElement.highlight();
        vMedium.invokeElement('u', {
            
            
        });
        return false;
    });



    $( ".italic" ).mousedown(function() {
        mediumElement.highlight();
        vMedium.invokeElement('i', {
            
            
        });
        return false;
    });



    $( ".strike" ).mousedown(function() {
        mediumElement.highlight();
        vMedium.invokeElement('strike', {
            
            
        });
        return false;
    });



    $( ".insert" ).mousedown(function() {
        var href = $('.aHref').val();
        var text = $('.aText').val();
        
        var html = '<a href="' + href + '" >' + text + '</a>';
        vMedium.focus();
        vMedium.insertHtml(
                            html
        );
        return false;
   });

    $( ".iconsInsert").mousedown(function() {
        
        process_iconsEdit();
        return false;

   });

$( ".iconsApply").mousedown(function() {
   if ($('.toolbar-top').find('.iconsHTML').length > 0){
        var $iconsHTML = $('.toolbar-top').find('.iconsHTML'); 
        var html = $iconsHTML.html();

        var className = $iconsHTML.find('i').attr('class');
        var temp = '{' + html + '}';
        
        
        

        
        vMedium.focus();
        
        
        vMedium.insertHtml( temp );
  }
        return false;

});



if (document.activeElement !== mediumElement) {
            vMedium.select();
}


}


function process_navbarEdit($Element, $innerElement){

  
  this.Element = $Element; 
  this.innerElement = $innerElement;

  var $modalEdit = $('#navbarEdit');
  this.modalEdit = $modalEdit;


  
  if ( this.innerElement.find('.collapse').length == 0 ) {
    
    this.modalEdit.find('#navbarCollapseEditContainer').remove();
  }


  
  if ( !this.modalEdit.hasClass('in') ){
    
    this.modalEdit.off( "click", ".navbarBrandChangesApplyButton");
    
    this.modalEdit.off( "click", "#leftNavbarChangeNumElementsInput");
    this.modalEdit.off( "click", ".leftNavbarChangeTypeElement");
    this.modalEdit.off( "click", ".leftNavbarItemTypeElementApply");
    this.modalEdit.off( "click", ".leftNavbarDropdownItemElementApply");
    this.modalEdit.off( "click", ".subElementDropDownApply");

this.modalEdit.off( "click", "#navbarLinksColorChange");
this.modalEdit.off( "click", "#navbarLinksBackgroundColorChange");
this.modalEdit.off( "click", "#navbarLinksHoverColorChange");

this.modalEdit.off( "click", "#navbarDropDownLinksColorChange");
this.modalEdit.off( "click", "#navbarDropDownLinksBackgroundColorChange");
this.modalEdit.off( "click", "#navbarDropDownLinksHoverColorChange");

this.modalEdit.off( "click", ".rightNavbarItemTypeElementApply");
this.modalEdit.off( "click", ".subElementDropDownApplyRight");
this.modalEdit.off( "click", ".rightNavbarDropdownItemElementApply");
this.modalEdit.off( "click", ".rightNavbarChangeTypeElement");
this.modalEdit.off( "click", "#rightNavbarChangeNumElementsInput");

this.modalEdit.off( "click", "#navbarClasses li");
this.modalEdit.off( "click", "#navbarHelpers li");
this.modalEdit.off( "click", "#navbarEditApply");
    
  }

  this.modalEdit.find( $('input[type="text"]')).val('');
  this.modalEdit.find( $('input[type="TextBox"]')).val('');


  var $tempEl = this.modalEdit;
  iconsHTMLToAppend('buttons',$tempEl);

  


  /****************************** INITIAL ELEMENTS ***************************************/

  /****************************** INITIAL LEFT-NAVBAR ELEMENTS ***************************/
 var $navBarLeftEl = this.innerElement.find('ul.navbar-left');
  var currentNumOfItemsLeft = $navBarLeftEl.children('li').length;
    

  if ( currentNumOfItemsLeft > 0 ) {

    var $leftElementsOptionsTypeEl = this.modalEdit.find('#leftNavbarContent').find('#collapseLeftNavbarContent').find('#leftNavbarNumElementsLinksOptionsContainer');
    $leftElementsOptionsTypeEl.empty();
    var tempHtml = '';

    var linkType = false;
    for ( var k=0; k<currentNumOfItemsLeft; k++) {
      
        var m = k + 1;
        
        var tempSearch = 'li:eq(' + k + ')';
        var $currentLi = this.innerElement.find('.navbar-left').children(tempSearch);
        linkType = true;
        
        if(this.innerElement.find('.navbar-left').children(tempSearch).children('ul').length > 0){
            linkType = false;
            
        }

        if (linkType){
          var $aChildOfCurrentLi = $currentLi.children('a');
          var aText = $aChildOfCurrentLi.text();
          var aHref = $aChildOfCurrentLi.attr('href');

        tempHtml += '<div class="leftNavElToAppend" id="leftNavChangeId' + m + '" style= "margin-left:20px;">'+
                    '<div class="row">Element ' + m + '</div>'+
                    '<form>'+
                    '<div class="row">'+
                    
                      '<div class="col-xs-4">'+
                         '<div class="radio">'+
                         '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '" checked="checked">Link</label> '+
                         '</div>'+
                        '</div>'+
                       '<div class="col-xs-4">'+
                          '<div class="radio">'+
                          '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '">DropDown</label> '+
                          '</div>'+
                        '</div>'+
                      '<div class="col-xs-3 col-xs-offset-1">'+
                        '<button type="button" class="btn btn-sm btn-danger leftNavbarChangeTypeElement" id="leftNavChangeId' + m + '">Change</button>'+
                      '</div>'+
                    
                   '</div>' +
                   '</form>'+
                    
                   '<div class="leftNavItemContent' + m + '">' +
                   '<div class="row">' + 
                                        '<div class="col-xs-5">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                  '<span class="btn btn-primary btn-file">'+
                                                      'Content'+
                                                  '</span>'+
                                              '</span>'+
                                              '<input type="text" class="form-control" id="elementTypeContentBox' + m + '" value="' + aText + '">'+
                                          '</div>' +
                                        '</div>'+ 
                                        '<div class="col-xs-4">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                  '<span class="btn btn-primary btn-file">'+
                                                      'Href'+
                                                  '</span>'+
                                              '</span>'+
                                              '<input type="text" class="form-control" id="elementTypeHrefBox' + m + '" value="' + aHref + '">'+
                                          '</div>' +
                                        '</div>'+
                                        
                                        
                                        
                     '</div>'+ 

                    

                     '</div>'+ 
                     
                        
                    '<form class="customLinkFormRemove">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form class="customLinkFormRemove">'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +
                      '<div class="row text-center customLinkFormRemove" style="margin-left:-15px;margin-top:10px;margin-bottom:10px;">'+
                          
                              '<button type="button" class="btn btn-sm btn-info leftNavbarItemTypeElementApply" data-id="' + m + '">Apply</button>'+
                          
                      '</div>'+

                     
                     
                     '</div>' ; 

         }else{

          var $aDropdownCurrentLi = $currentLi.children('a.customDropDownNav');
          var aDropdownText = $aDropdownCurrentLi.text();
          var aDropdownHref = $aDropdownCurrentLi.attr('href');

          var $ulDropdownMenu = $currentLi.children('ul.dropdown-menu');
          var numOfSubElements = $ulDropdownMenu.children('li').length;

          tempHtml += '<div class="leftNavElToAppend" id="leftNavChangeId' + m + '" style= "margin-left:20px;">'+
                            '<div class="row">Element ' + m + '</div>'+
                            '<form>'+
                            '<div class="row">'+
                            
                              '<div class="col-xs-4">'+
                                 '<div class="radio">'+
                                 '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '">Link</label> '+
                                 '</div>'+
                                '</div>'+
                               '<div class="col-xs-4">'+
                                  '<div class="radio">'+
                                  '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '" checked="checked">DropDown</label> '+
                                  '</div>'+
                                '</div>'+
                              '<div class="col-xs-3 col-xs-offset-1">'+
                                '<button type="button" class="btn btn-sm btn-danger leftNavbarChangeTypeElement" id="leftNavChangeId' + m + '">Change</button>'+
                              '</div>'+
                           
                           '</div>' +
                            '</form>'+
                           '<div class="leftNavItemContent' + m + '">' +
                           
                           '<div class="row dropdownContainerPar">' + 
                                            '<div class="col-xs-5">' +
                                              '<div class="input-group">'+
                                                  '<span class="input-group-btn">'+
                                                      '<span class="btn btn-primary btn-file">'+
                                                          'Content'+
                                                      '</span>'+
                                                  '</span>'+
                                                  '<input type="text" class="form-control" id="elementDropdownContentBox' + m + '" value="' + aDropdownText + '">'+
                                              '</div>' +
                                            '</div>'+ 
                                            '<div class="col-xs-4">' +
                                              '<div class="input-group">'+
                                                  '<span class="input-group-btn">'+
                                                      '<span class="btn btn-primary btn-file">'+
                                                          'Href'+
                                                      '</span>'+
                                                  '</span>'+
                                                  '<input type="text" class="form-control" id="elementDropdownHrefBox' + m + '" value="' + aDropdownHref + '">'+
                                              '</div>' +
                                            '</div>'+
                                            
                            '</div>' +
                            
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                     

                                            '<div class="row" style="margin-top:15px;margin-bottom:10px;">'+
                                              '<div class="col-xs-9">' +
                                                  '<div class="input-group">'+
                                                            '<span class="input-group-btn">'+
                                                                '<span class="btn btn-primary" >'+
                                                                   ' Number of Sub-Elements'+
                                                                '</span>'+
                                                            '</span>'+
                                                            '<input type="text" class="form-control" id="leftNavbarElementNumSubElementsBox' + m + '" value="' + numOfSubElements + '">'+
                                                   '</div>'+
                                              '</div>'+
                                              '<div class="col-xs-2">' +
                                                  '<button type="button" class="btn btn-sm btn-info leftNavbarDropdownItemElementApply" data-id="' + m + '">Apply</button>'+
                                              '</div>'+
                                            '</div>'+
                                            '<div class="leftNavItemDropDownSubElementsContent' + m + '">';
                         var subElementsNumber = $currentLi.children('ul').children('li').length;
                         

                         var tempNewHTML = '';
                         for (var ter=0;ter<subElementsNumber;ter++){
                         var terIncreased = ter + 1;
                         
                         
                         var tempSearch = 'li:eq(' + ter + ')';
                         var $currentDropdownLi = $currentLi.children('ul.dropdown-menu').children(tempSearch);

                         var $currentAEl = $currentDropdownLi.children('a');

                         var subElText = $currentAEl.text();
                         var subElHref = $currentAEl.attr('href');


                         tempNewHTML += '<div class="row">' + 
                                        '<div class="col-xs-5">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                    '<span class="btn btn-primary btn-file">'+
                                                               'Content'+
                                                     '</span>'+
                                               '</span>'+
                                                '<input type="text" class="form-control" id="subElementDropDownTextBox' + terIncreased + '" value="' + subElText + '">'+
                                           '</div>' +
                                          '</div>'+ 
                                       '<div class="col-xs-4">' +
                                          '<div class="input-group">'+
                                                '<span class="input-group-btn">'+
                                                         '<span class="btn btn-primary btn-file">'+
                                                                'Href'+
                                                          '</span>'+
                                                 '</span>'+
                                                  '<input type="text" class="form-control" id="subElementDropDownHrefBox' + terIncreased + '" value="' + subElHref + '">'+
                                            '</div>' +
                                         '</div>'+
                                          '<div class="col-xs-2">' +
                                               '<button type="button" class="btn btn-sm btn-info subElementDropDownApply" data-parent="' + m +'" data-id="' + terIncreased + '">Apply</button>'+
                                          '</div>' +
                                      '</div>';
                                      
                                      

                           }
                           
                           tempHtml += tempNewHTML;

                            tempHtml +='</div>';

                        tempHtml +='</div>'; 
                              tempHtml +='</div>'; 
                          tempHtml +='</div>'; 
                       tempHtml +='</div>'; 

         }


} 

$leftElementsOptionsTypeEl.html(tempHtml);

} 


  /****************************** INITIAL LEFT-NAVBAR ELEMENTS ***************************************/

  /****************************** INITIAL RIGHT-NAVBAR ELEMENTS **************************************/
  var $navBarRightEl = this.innerElement.find('ul.navbar-right');
  var currentNumOfItemsRight = $navBarRightEl.children('li').length;
    

  if ( currentNumOfItemsRight > 0 ) {

    var $rightElementsOptionsTypeEl = this.modalEdit.find('#rightNavbarContent').find('#collapseRightNavbarContent').find('#rightNavbarNumElementsLinksOptionsContainer');
    $rightElementsOptionsTypeEl.empty();
    var tempHtml = '';

    var linkType = false;
    for ( var k=0; k<currentNumOfItemsRight; k++) {
      
        var m = k + 1;
        
        var tempSearch = 'li:eq(' + k + ')';
        var $currentLi = this.innerElement.find('.navbar-right').children(tempSearch);
        linkType = true;
        
        if(this.innerElement.find('.navbar-right').children(tempSearch).children('ul').length > 0){
            linkType = false;
            
        }

        if (linkType){
          var $aChildOfCurrentLi = $currentLi.children('a');
          var aText = $aChildOfCurrentLi.text();
          var aHref = $aChildOfCurrentLi.attr('href');

        tempHtml += '<div class="rightNavElToAppend" id="rightNavChangeId' + m + '" style= "margin-left:20px;">'+
                    '<div class="row">Element ' + m + '</div>'+
                    '<form>'+
                    '<div class="row">'+
                    
                      '<div class="col-xs-4">'+
                         '<div class="radio">'+
                         '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '" checked="checked">Link</label> '+
                         '</div>'+
                        '</div>'+
                       '<div class="col-xs-4">'+
                          '<div class="radio">'+
                          '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '">DropDown</label> '+
                          '</div>'+
                        '</div>'+
                      '<div class="col-xs-3 col-xs-offset-1">'+
                        '<button type="button" class="btn btn-sm btn-danger rightNavbarChangeTypeElement" id="rightNavChangeId' + m + '">Change</button>'+
                      '</div>'+
                    
                   '</div>' +
                   '</form>'+
                    
                   '<div class="rightNavItemContent' + m + '">' +
                   '<div class="row">' + 
                                        '<div class="col-xs-5">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                  '<span class="btn btn-primary btn-file">'+
                                                      'Content'+
                                                  '</span>'+
                                              '</span>'+
                                              '<input type="text" class="form-control" id="elementTypeContentBox' + m + '" value="' + aText + '">'+
                                          '</div>' +
                                        '</div>'+ 
                                        '<div class="col-xs-4">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                  '<span class="btn btn-primary btn-file">'+
                                                      'Href'+
                                                  '</span>'+
                                              '</span>'+
                                              '<input type="text" class="form-control" id="elementTypeHrefBox' + m + '" value="' + aHref + '">'+
                                          '</div>' +
                                        '</div>'+
                                        
                     '</div>'+ 

                    

                     '</div>'+ 
                     
                    '<form class="customLinkFormRemove">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form class="customLinkFormRemove">'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +
                      '<div class="row text-center customLinkFormRemove" style="margin-left:-15px;margin-top:10px;margin-bottom:10px;">'+
                          
                              '<button type="button" class="btn btn-sm btn-info rightNavbarItemTypeElementApply" data-id="' + m + '">Apply</button>'+
                          
                      '</div>'+
                  '</div>' ; 

         }else{

          var $aDropdownCurrentLi = $currentLi.children('a.customDropDownNav');
          var aDropdownText = $aDropdownCurrentLi.text();
          var aDropdownHref = $aDropdownCurrentLi.attr('href');

          var $ulDropdownMenu = $currentLi.children('ul.dropdown-menu');
          var numOfSubElements = $ulDropdownMenu.children('li').length;

          tempHtml += '<div class="rightNavElToAppend" id="rightNavChangeId' + m + '" style= "margin-left:20px;">'+
                            '<div class="row">Element ' + m + '</div>'+
                            '<form>'+
                            '<div class="row">'+
                            
                              '<div class="col-xs-4">'+
                                 '<div class="radio">'+
                                 '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '">Link</label> '+
                                 '</div>'+
                                '</div>'+
                               '<div class="col-xs-4">'+
                                  '<div class="radio">'+
                                  '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '" checked="checked">DropDown</label> '+
                                  '</div>'+
                                '</div>'+
                              '<div class="col-xs-3 col-xs-offset-1">'+
                                '<button type="button" class="btn btn-sm btn-danger rightNavbarChangeTypeElement" id="rightNavChangeId' + m + '">Change</button>'+
                              '</div>'+
                           
                           '</div>' +
                            '</form>'+
                           '<div class="rightNavItemContent' + m + '">' +
                           
                           '<div class="row dropdownContainerPar">' + 
                                            '<div class="col-xs-5">' +
                                              '<div class="input-group">'+
                                                  '<span class="input-group-btn">'+
                                                      '<span class="btn btn-primary btn-file">'+
                                                          'Content'+
                                                      '</span>'+
                                                  '</span>'+
                                                  '<input type="text" class="form-control" id="elementDropdownContentBox' + m + '" value="' + aDropdownText + '">'+
                                              '</div>' +
                                            '</div>'+ 
                                            '<div class="col-xs-4">' +
                                              '<div class="input-group">'+
                                                  '<span class="input-group-btn">'+
                                                      '<span class="btn btn-primary btn-file">'+
                                                          'Href'+
                                                      '</span>'+
                                                  '</span>'+
                                                  '<input type="text" class="form-control" id="elementDropdownHrefBox' + m + '" value="' + aDropdownHref + '">'+
                                              '</div>' +
                                            '</div>'+
                                            
                            '</div>' +
                            
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                     

                                            '<div class="row" style="margin-top:15px;margin-bottom:10px;">'+
                                              '<div class="col-xs-9">' +
                                                  '<div class="input-group">'+
                                                            '<span class="input-group-btn">'+
                                                                '<span class="btn btn-primary" >'+
                                                                   ' Number of Sub-Elements'+
                                                                '</span>'+
                                                            '</span>'+
                                                            '<input type="text" class="form-control" id="rightNavbarElementNumSubElementsBox' + m + '" value="' + numOfSubElements + '">'+
                                                   '</div>'+
                                              '</div>'+
                                              '<div class="col-xs-2">' +
                                                  '<button type="button" class="btn btn-sm btn-info rightNavbarDropdownItemElementApply" data-id="' + m + '">Apply</button>'+
                                              '</div>'+
                                            '</div>'+
                                            '<div class="rightNavItemDropDownSubElementsContent' + m + '">';
                         var subElementsNumber = $currentLi.children('ul').children('li').length;
                         

                         var tempNewHTML = '';
                         for (var ter=0;ter<subElementsNumber;ter++){
                         var terIncreased = ter + 1;
                         
                         
                         var tempSearch = 'li:eq(' + ter + ')';
                         var $currentDropdownLi = $currentLi.children('ul.dropdown-menu').children(tempSearch);

                         var $currentAEl = $currentDropdownLi.children('a');

                         var subElText = $currentAEl.text();
                         var subElHref = $currentAEl.attr('href');


                         tempNewHTML += '<div class="row">' + 
                                        '<div class="col-xs-5">' +
                                          '<div class="input-group">'+
                                              '<span class="input-group-btn">'+
                                                    '<span class="btn btn-primary btn-file">'+
                                                               'Content'+
                                                     '</span>'+
                                               '</span>'+
                                                '<input type="text" class="form-control" id="subElementDropDownTextBox' + terIncreased + '" value="' + subElText + '">'+
                                           '</div>' +
                                          '</div>'+ 
                                       '<div class="col-xs-4">' +
                                          '<div class="input-group">'+
                                                '<span class="input-group-btn">'+
                                                         '<span class="btn btn-primary btn-file">'+
                                                                'Href'+
                                                          '</span>'+
                                                 '</span>'+
                                                  '<input type="text" class="form-control" id="subElementDropDownHrefBox' + terIncreased + '" value="' + subElHref + '">'+
                                            '</div>' +
                                         '</div>'+
                                          '<div class="col-xs-2">' +
                                               '<button type="button" class="btn btn-sm btn-info subElementDropDownApplyRight" data-parent="' + m +'" data-id="' + terIncreased + '">Apply</button>'+
                                          '</div>' +
                                      '</div>';
                                      
                                      

                           }
                           
                           tempHtml += tempNewHTML;

                            tempHtml +='</div>';

                        tempHtml +='</div>'; 
                              tempHtml +='</div>'; 
                          tempHtml +='</div>'; 
                       tempHtml +='</div>'; 

         }


} 

$rightElementsOptionsTypeEl.html(tempHtml);

} 


  /****************************** INITIAL RIGHT-NAVBAR ELEMENTS **************************/

  /****************************** INITIAL ELEMENTS ***************************************/

  this.modalEdit.find("#navbarColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

  this.modalEdit.modal('show');

  if (this.modalEdit.data('bs.modal').isShown ){

    this.modalEdit.on( "click", "#navbarClasses li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var navbarClassName = $current.text();

          this.modalEdit.find('#navbarClassesBox').val(navbarClassName);

  }, this));

  this.modalEdit.on( "click", "#navbarHelpers li", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var navbarHelperClassName = $current.text();

          this.modalEdit.find('#navbarHelpersBox').val(navbarHelperClassName);

  }, this));

  this.modalEdit.on( "click", "#navbarEditApply", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);

          
          var navbarCollapseIDName = this.modalEdit.find('#navbarCollapseIDBox').val();
          if ( navbarCollapseIDName && navbarCollapseIDName != '' && navbarCollapseIDName != '  ' ){
              this.innerElement.find('.collapse').attr('id', navbarCollapseIDName);
              var tempIDCollapse = "#" + navbarCollapseIDName;
              this.innerElement.find('.navbar-header').find('.navbar-toggle').attr("data-target",tempIDCollapse);

          }

          
          
          var navbarClassName = this.modalEdit.find('#navbarClassesBox').val();
          if ( navbarClassName && navbarClassName != '' ){
                 
                 if ( navbarClassName == "Default"){
                      this.innerElement.removeClass('navbar-inverse');
                      this.innerElement.addClass('navbar-default');
                 }
                 if ( navbarClassName == "Inversed"){
                      this.innerElement.removeClass('navbar-default');
                      this.innerElement.addClass('navbar-inverse');
                      
                 }

          }


          var navbarHelperName = this.modalEdit.find('#navbarHelpersBox').val();
          if ( navbarHelperName && navbarHelperName != '' ){
                 
                 if ( navbarHelperName == "Fixed-top"){
                      
                      this.Element.addClass('navBarFixedTop');
                 }
        
          }


  }, this));

 
 this.modalEdit.on( "click", "#navbarLinksColorChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          var fontSize = this.modalEdit.find('#navbarLinksFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('.removePreviewMainLink').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#navbarLinksFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('.removePreviewMainLink').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#navbarLinksFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('.removePreviewMainLink').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#navbarLinksFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('.removePreviewMainLink').css('font-weight', fontWeight);
          }

          var changeTextColorValue = this.modalEdit.find('input[name=optradioColor]:checked', '#navbarLinksColorForm').val();
          
          

          
          if(changeTextColorValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('.removePreviewMainLink').css({'color' : tempColor});
              
              
              
             
            }
            
          }

  }, this));


this.modalEdit.on( "click", "#navbarLinksBackgroundColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkBackgroundValue = this.modalEdit.find('input[name=optradioColor]:checked', '#navbarLinksBackgroundColorForm').val();
          
          

          
          if(changeLinkBackgroundValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              
                
                 this.innerElement.find('.removePreviewMainLink').css({'background-color' : tempColor});
               
             
            }
            
          }

  }, this));

this.modalEdit.on( "click", "#navbarLinksHoverColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkHoverValue = this.modalEdit.find('input[name=optradioHoverColor]:checked', '#navbarLinksHoverColorForm').val();
          
          

          
          if(changeLinkHoverValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              

              var tempColor =  colorValText + '!important';

              var classNameValue = this.modalEdit.find("#navbarLinksClassNameBox").val();
              var idNameValue = this.modalEdit.find("#navbarLinksIdNameBox").val();
              
              
              var tempTextForClass= '';
              if ( classNameValue != '' && classNameValue != ' ' &&  classNameValue != 'undefined' && classNameValue != null){
                    
                    tempTextForClass = '<style type="text/css" class="navbarStyle">.navbar-nav li > a.' + classNameValue +':hover{ background-color:' + colorValText + ' !important;}' +
                    '.navbar-nav li.active > a.' + classNameValue +':hover{ background-color:' + colorValText + ' !important;}' +
                    '</style>';
                    $(tempTextForClass).appendTo('head');
                    $(tempTextForClass).appendTo(headFrame);
                    this.innerElement.find('.removePreviewMainLink').each(function(){
                        $(this).addClass(classNameValue);
                    });
              }

              
              var tempTextForId= '';
              if ( idNameValue != '' && idNameValue != ' ' && idNameValue != 'undefined' && idNameValue != null){
                    
                    tempTextForId = '<style type="text/css" class="navbarStyle">.navbar-nav li > a#' + idNameValue +':hover{ background-color:' + colorValText + ' !important;}' + 
                    '.navbar-nav li.active > a#' + idNameValue +':hover{ background-color:' + colorValText + ' !important;}' +
                    '</style>';
                    $(tempTextForId).appendTo('head');
                    $(tempTextForId).appendTo(headFrame);
                    this.innerElement.find('.removePreviewMainLink').each(function(){
                        $(this).attr('id', idNameValue);
                    });
              }

              
            }
            
          }

  }, this));


this.modalEdit.on( "click", "#navbarDropDownLinksColorChange", $.proxy( function(e) { 

          e.preventDefault();

          var current = e.currentTarget;
          var $current = $(current);
          
          var fontSize = this.modalEdit.find('#navbarDropDownLinksFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('ul.nav').find('li').find('a').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#navbarDropDownLinksFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('ul.nav').find('li').find('a').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#navbarDropDownLinksFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('ul.nav').find('li').find('a').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#navbarDropDownLinksFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('ul.nav').find('li').find('a').css('font-weight', fontWeight);
          }

          var changeTextColorValue = this.modalEdit.find('input[name=optradioDropColor]:checked', '#navbarDropDownLinksColorForm').val();
          
          

          
          if(changeTextColorValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('.removePreviewDropdownLink').each(function(){
                 $(this).css({'color' : tempColor});
               
             });
            }
            
          }

  }, this));

this.modalEdit.on( "click", "#navbarDropDownLinksBackgroundColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkBackgroundValue = this.modalEdit.find('input[name=optradioDropBackColor]:checked', '#navbarDropDownLinksBackgroundForm').val();
          
          
          
          if(changeLinkBackgroundValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              
                
                 this.innerElement.find('ul.dropdown-menu').css({'background-color' : tempColor});
               
             
            }
            
          }

  }, this));


this.modalEdit.on( "click", "#navbarDropDownLinksHoverColorChange", $.proxy( function(e) { 

          e.preventDefault();
          var current = e.currentTarget;
          var $current = $(current);
          
          var changeLinkHoverValue = this.modalEdit.find('input[name=optradioDropHoverColor]:checked', '#navbarDropDownLinksHoverColorForm').val();
          
          
          
          if(changeLinkHoverValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              

              var tempColor =  colorValText + '!important';

              var classNameValue = this.modalEdit.find("#navbarDropDownLinksClassNameBox").val();
              var idNameValue = this.modalEdit.find("#navbarDropDownLinksIdNameBox").val();
              
              
              var tempTextForClass= '';
              if ( classNameValue != '' && classNameValue != ' ' &&  classNameValue != 'undefined' && classNameValue != null){
                    
                    tempTextForClass = '<style type="text/css" class="navbarDropdownStyle">ul.dropdown-menu li > a.' + classNameValue +':hover{ background-color:' + colorValText + ' !important;}' +
                    '</style>';
                    $(tempTextForClass).appendTo('head');
                    $(tempTextForClass).appendTo(headFrame);
                    this.innerElement.find('.removePreviewDropdownLink').each(function(){
                        $(this).addClass(classNameValue);
                    });
              }

              
              var tempTextForId= '';
              if ( idNameValue != '' && idNameValue != ' ' && idNameValue != 'undefined' && idNameValue != null){
                    
                    tempTextForId = '<style type="text/css" class="navbarDropdownStyle">ul.dropdown-menu li > a#' + idNameValue +':hover{ background-color:' + colorValText + ' !important;}' + '</style>';
                    $(tempTextForId).appendTo('head');
                    $(tempTextForId).appendTo(headFrame);
                    this.innerElement.find('.removePreviewDropdownLink').each(function(){
                        $(this).attr('id', idNameValue);
                    });
              }

              
            }
            
          }

  }, this));



    this.modalEdit.on( "click", "#navbarBrandChangesApplyButton", $.proxy( function(e) { 
          var current = e.currentTarget;
          var $current = $(current);
          
          
          var brandText = this.modalEdit.find('#navbarBrandTextContentBox').val();
          
          if ( brandText == '' ||  brandText == ' ' ||  brandText == 'undefined' ||  brandText == null) {
                this.innerElement.find('.navbar-header').find('.navbar-brand').remove();
                

          }else{
            var brandHREF = this.modalEdit.find('#navbarBrandHrefBox').val();

            var $brandIcon = this.innerElement.find('.navbar-header').find('.navbar-brand').find('i');
            var classBrandIcon;
            if ($brandIcon) {
                classBrandIcon = $brandIcon.attr('class');
            }
            var tempHtml;
            var brandHtml;
            if($brandIcon && classBrandIcon && classBrandIcon != 'undefined' && classBrandIcon != null ){
              tempHtml = '<i class="' + classBrandIcon + '"></i>&nbsp;';
              brandHtml = tempHtml + brandText;
            }else{
              brandHtml = brandText;
            }
            

            this.innerElement.find('.navbar-header').find('.navbar-brand').empty();
            this.innerElement.find('.navbar-header').find('.navbar-brand').html(brandHtml);

            if ( brandHREF != '' &&  brandHREF != ' ' &&  brandHREF != 'undefined' &&  brandHREF != null) {
              this.innerElement.find('.navbar-header').find('.navbar-brand').attr('href', brandHREF);
            }

          }
          

          
          var $insertOptionBrandEl = this.modalEdit.find('input[name=optradio]:checked', '.navbarBrandIconContainerForm');
          var insertOptionBrandClass = $insertOptionBrandEl.attr('class');
          if ( insertOptionBrandClass != '' && insertOptionBrandClass != 'noIcon' && insertOptionBrandClass != 'undefined' && insertOptionBrandClass != null) {
            
            var brandIconSize = this.modalEdit.find('input[name=optradio]:checked', '.navbarBrandIconSizeContainerForm').val();
            
            if ( brandIconSize != '' && brandIconSize != ' ' && brandIconSize != 'undefined' && brandIconSize != null) {

                  var addSizeClass = false;
                  if(brandIconSize== 'normal'){
                      addSizeClass = false;
                  }else if(brandIconSize== 'lg'){
                    iconSizeClass = 'fa-lg';
                    addSizeClass = true;
                  }else if(brandIconSize== '2x'){
                    iconSizeClass = 'fa-2x';
                    addSizeClass = true;
                  }else if(brandIconSize== '3x'){
                    iconSizeClass = 'fa-3x';
                    addSizeClass = true;
                  }else if(brandIconSize== '4x'){
                    iconSizeClass = 'fa-4x';
                    addSizeClass = true;
                  }else if(brandIconSize== '5x'){
                    iconSizeClass = 'fa-5x';
                    addSizeClass = true;
                  }

                  var iconRadioElValue = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm').val();
                  if ( iconRadioElValue != '' && iconRadioElValue != ' ' && iconRadioElValue != 'undefined' && iconRadioElValue != null) {
                      var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');

                      var $iconEl = $iconRadioEl.parent().closest('label').find('i');
                      var iconClass = $iconEl.attr('class');
                      

                       var iconHT;
                       if(!addSizeClass){
                            iconHT = iconClass;
                       }else{
                            iconHT = iconClass + ' ' + iconSizeClass;
                       }
                       
                       var iconHTML = '<i class="' + iconHT + '"></i>';

                      if(iconClass != 'undefined'){
                          

                          if(insertOptionBrandClass == "beforeText"){
                            this.innerElement.find('.navbar-header').find('.navbar-brand').find('i').remove();
                            iconHTML += '&nbsp;';
                            this.innerElement.find('.navbar-header').find('.navbar-brand').prepend(iconHTML);

                          }else if(insertOptionBrandClass == "afterText"){
                            this.innerElement.find('.navbar-header').find('.navbar-brand').find('i').remove();
                            var html = '&nbsp;';
                            this.innerElement.find('.navbar-header').find('.navbar-brand').append(html);
                            this.innerElement.find('.navbar-header').find('.navbar-brand').append(iconHTML);

                          }
                        }


                 }


            }


          }else{
            var $brandIcon = this.innerElement.find('.navbar-header').find('.navbar-brand').find('i');
            
            if ($brandIcon) {
                $brandIcon.remove();
            }
            
          }

          
          var fontSize = this.modalEdit.find('#navbarBrandFontSizeBox').val();
          if ( fontSize != '' && fontSize != ' ' && fontSize != 'undefined' && fontSize != null ) {
            this.innerElement.find('.navbar-header').find('.navbar-brand').css('font-size', fontSize);
          }

          var fontFamily = this.modalEdit.find('#navbarBrandFontFamilyBox').val();
          if ( fontFamily != '' && fontFamily != ' ' && fontFamily != 'undefined' && fontFamily != null ) {
            this.innerElement.find('.navbar-header').find('.navbar-brand').css('font-family', fontFamily);
          }

          var fontStyle = this.modalEdit.find('#navbarBrandFontStyleBox').val();
          if ( fontStyle != '' && fontStyle != ' ' && fontStyle != 'undefined' && fontStyle != null ) {
            this.innerElement.find('.navbar-header').find('.navbar-brand').css('font-style', fontStyle);
          }

          var fontWeight = this.modalEdit.find('#navbarBrandFontWeightBox').val();
          if ( fontWeight != '' && fontWeight != ' ' && fontWeight != 'undefined' && fontWeight != null ) {
            this.innerElement.find('.navbar-header').find('.navbar-brand').css('font-weight', fontWeight);
          }

          var changeTextColorValue = this.modalEdit.find('input[name=optradioBrandColor]:checked', '#navbarBrandIconSizeContainerForm').val();
          
          

          
          if(changeTextColorValue == 'change'){
            var colorValText = this.modalEdit.find("#navbarColorPicker").spectrum("get");
            if (colorValText != '' && colorValText != ' ' && colorValText != 'undefined' && colorValText != null ){
              
              var tempColor =  colorValText + '!important';
              this.innerElement.find('.navbar-header').find('.navbar-brand').css({'color' : tempColor});
              
              
              
             
            }
            
          }

          



   }, this));


this.modalEdit.on( "click", "#leftNavbarChangeNumElementsInput", $.proxy( function(e) { 


var leftNavNumElements = this.modalEdit.find('#leftNavbarContent').find('#collapseLeftNavbarContent').find('#leftNavbarChangeNumElementsNumberBox').val();

if ( leftNavNumElements > 0 ) {

 
 var $navBarEl = this.innerElement.find('ul.navbar-left');
 var currentNumOfItems = $navBarEl.children('li').length;

 if(leftNavNumElements < currentNumOfItems){
          while( leftNavNumElements != this.innerElement.find('ul.navbar-left').children('li').length ){
              this.innerElement.find('ul.navbar-left').find("li:last").remove();

          }
 }else{
          while( leftNavNumElements != this.innerElement.find('ul.navbar-left').children('li').length ){
                var html = '<li><a href="#" class="removePreviewMainLink">Page</a></li>';
                this.innerElement.find('ul.navbar-left').append(html);
                
          }

 }

 


  var $leftElementsOptionsTypeEl = this.modalEdit.find('#leftNavbarContent').find('#collapseLeftNavbarContent').find('#leftNavbarNumElementsLinksOptionsContainer');
  if($leftElementsOptionsTypeEl){
    
  }
  $leftElementsOptionsTypeEl.empty();
  var tempHtml = '';
  for ( var k=0; k<leftNavNumElements; k++) {
    
      var m = k + 1;
      
      tempHtml += '<div class="leftNavElToAppend" id="leftNavChangeId' + m + '" style= "margin-left:20px;">'+
                  '<div class="row">Element ' + m + '</div>'+
                  '<form>'+
                  '<div class="row">'+
                  
                    '<div class="col-xs-4">'+
                       '<div class="radio">'+
                             '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '">Link</label> '+
                        '</div>'+
                      '</div>'+
                     '<div class="col-xs-4">'+
                        '<div class="radio">'+
                             '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '">DropDown</label> '+
                        '</div>'+
                      '</div>'+
                    '<div class="col-xs-3 col-xs-offset-1">'+
                      '<button type="button" class="btn btn-sm btn-danger leftNavbarChangeTypeElement" id="leftNavChangeId' + m + '">Change</button>'+
                    '</div>'+
                  
                 
                 '</div>' +
                 '</form>'+
                 '<div class="leftNavItemContent' + m + '">'+
                 '</div>'+

              '</div>';
    
  }
  $leftElementsOptionsTypeEl.html(tempHtml);

}if ( leftNavNumElements == 0 ) {
  var $navBarEl = this.innerElement.find('ul.navbar-left');
  $navBarEl.empty();
}
   
}, this));


this.modalEdit.on( "click", ".leftNavbarChangeTypeElement", $.proxy( function(e) { 


var $current = $(e.target);



var $parentRow = $current.parents('.leftNavElToAppend');


var $elementTypeEl = $parentRow.find('input[name=optradio]:checked');
var elementType = $parentRow.find('input[name=optradio]:checked').attr('class');


var indexNum = $elementTypeEl.attr('data-id');
var tempSearch = '.leftNavItemContent' + indexNum;
var $itemContainer = $parentRow.find(tempSearch);
$itemContainer.empty();

var $formToRemove = $itemContainer.siblings('.customLinkFormRemove');

$formToRemove.remove();

if ( elementType ==  'linkType') {
      


      var tempHTML = '<div class="row">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementTypeContentBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementTypeHrefBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+
                      
                      
                      
                      '</div>' +
                      
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                      '<div class="row text-center" style="margin-left:-15px;margin-top:10px;margin-bottom:10px;">'+
                          
                              '<button type="button" class="btn btn-sm btn-info leftNavbarItemTypeElementApply" data-id="' + indexNum + '">Apply</button>'+
                          
                      '</div>';

                      

                     

      $itemContainer.html(tempHTML);

}else if ( elementType ==  'dropdownType') {
  
  
var tempHTML = '<div class="row dropdownContainerPar">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementDropdownContentBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementDropdownHrefBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+
                      
                      '</div>' +
                      
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                     

                      '<div class="row" style="margin-top:15px;margin-bottom:10px;">'+
                        '<div class="col-xs-9">' +
                            '<div class="input-group">'+
                                      '<span class="input-group-btn">'+
                                          '<span class="btn btn-primary" >'+
                                             ' Number of Sub-Elements'+
                                          '</span>'+
                                      '</span>'+
                                      '<input type="text" class="form-control" id="leftNavbarElementNumSubElementsBox' + indexNum + '" >'+
                             '</div>'+
                        '</div>'+
                        '<div class="col-xs-2">' +
                            '<button type="button" class="btn btn-sm btn-info leftNavbarDropdownItemElementApply" data-id="' + indexNum + '">Apply</button>'+
                        '</div>'+
                      '</div>'+
                      '<div class="leftNavItemDropDownSubElementsContent' + indexNum + '">'+
                      '</div>';

      $itemContainer.html(tempHTML);



}


}, this));



this.modalEdit.on( "click", ".leftNavbarDropdownItemElementApply", $.proxy( function(e) { 
var $current = $(e.target);
var indexNumber = $current.attr('data-id');


var tempSearch = '.leftNavItemContent' + indexNumber;
var $parentRow = $current.parents(tempSearch);




var temp1 = '#elementDropdownContentBox' + indexNumber;
var elementText = $parentRow.find(temp1).val();


var temp2 = '#elementDropdownHrefBox' + indexNumber;
var elementHref = $parentRow.find(temp2).val();


var $navBarEl = this.innerElement.find('ul.navbar-left');



var insertIcon = false;
var iconSizeClass;
var addSizeClass = false;
var iconHTMLFinal;

var $insertIconEl = $parentRow.find('input[name=optradioPosition]:checked');
var insertIconElClass = $insertIconEl.attr('class');
if ( insertIconElClass != '' && insertIconElClass != ' ' && insertIconElClass != 'undefined' && insertIconElClass != null) {
   
   

   var iconSize = $parentRow.find('input[name=optradioSize]:checked').val();
   
   if ( iconSize != '' && iconSize != ' ' && iconSize != 'undefined' && iconSize != null) {
                  
                  addSizeClass = false;
                  if(iconSize== 'normal'){
                      addSizeClass = false;
                  }else if(iconSize== 'lg'){
                    iconSizeClass = 'fa-lg';
                    addSizeClass = true;
                  }else if(iconSize== '2x'){
                    iconSizeClass = 'fa-2x';
                    addSizeClass = true;
                  }else if(iconSize== '3x'){
                    iconSizeClass = 'fa-3x';
                    addSizeClass = true;
                  }else if(iconSize== '4x'){
                    iconSizeClass = 'fa-4x';
                    addSizeClass = true;
                  }else if(iconSize== '5x'){
                    iconSizeClass = 'fa-5x';
                    addSizeClass = true;
                  }

                  var iconRadioElValue = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm').val();
                  if ( iconRadioElValue != '' && iconRadioElValue != ' ' && iconRadioElValue != 'undefined' && iconRadioElValue != null) {
                      var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');

                      var $iconEl = $iconRadioEl.parent().closest('label').find('i');
                      var iconClass = $iconEl.attr('class');
                      

                       var iconHT;
                       if(!addSizeClass){
                            iconHT = iconClass;
                       }else{
                            iconHT = iconClass + ' ' + iconSizeClass;
                       }
                       
                       var iconHTML = '<i class="' + iconHT + '"></i>';

                      if(iconClass != 'undefined'){
                          
                          insertIcon = true;
                          iconHTMLFinal = iconHTML;
                          

                        }


                 }


            }


}else{
            
}



var liNumber = indexNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';

var $leftEl = $navBarEl.children(tempSearch);

if($leftEl && $leftEl != 'undefined' && $leftEl != null ){
   
   var liClass = $leftEl.attr('class');
   var tempSFirst = 'input#leftNavbarElementNumSubElementsBox' + indexNumber;
   
   var subElsNumberFirst = 0;
   if($parentRow.find(tempSFirst).val() > 0){
            subElsNumberFirst = $parentRow.find(tempSFirst).val();
   }

   
   if ( $leftEl.children('ul').length > 0 ) {
       var $aEl = $leftEl.find('a.dropdown-toggle');
       

       $aEl.text(elementText);
       $aEl.attr('href',elementHref);

       if(insertIcon){

          $aEl.find('i').remove();

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }

       }


   }else{
       var $aEl = $leftEl.find('a');
       
       $aEl.remove();

      
       
       var htmlToInsert1 = '<a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="'+elementHref+'" aria-expanded="true">'+elementText+'</a>';
       htmlToInsert1 += '<ul class="dropdown-menu">';
       for ( var k=0;k<subElsNumberFirst;k++ ) {
          htmlToInsert1 += '<li><a href="#" class="removePreviewDropdownLink">Page</a></li>';
       }

       htmlToInsert1 += '</ul>';

       $leftEl.html(htmlToInsert1);
       $leftEl.addClass('dropdown');

       var $aEl = $leftEl.find('a.dropdown-toggle');
       if(insertIcon){
        $aEl.find('i').remove();
        if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
      }

 }
}




var tempNext = '.leftNavItemDropDownSubElementsContent' + indexNumber;
var $leftNavItemDropDownSubElementsContent = $parentRow.find(tempNext);
$leftNavItemDropDownSubElementsContent.empty();

var tempS = 'input#leftNavbarElementNumSubElementsBox' + indexNumber;

var subElsNumber = $parentRow.find(tempS).val();


if ( subElsNumber > 0 ) { 

var tempHTML = '';
for ( var k=1; k<=subElsNumber;k++){

      tempHTML += '<div class="row">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="subElementDropDownTextBox' + k + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="subElementDropDownHrefBox' + k + '">'+
                        '</div>' +
                      '</div>'+
                      '<div class="col-xs-2">' +
                          '<button type="button" class="btn btn-sm btn-info subElementDropDownApply" data-parent="' + indexNumber +'" data-id="' + k + '">Apply</button>'+
                      '</div>' +
                      '</div>' ;
                      
}
$leftNavItemDropDownSubElementsContent.html(tempHTML);

}


}, this));




this.modalEdit.on( "click", ".subElementDropDownApply", $.proxy( function(e) { 

var $current = $(e.target);


var indexNumber = $current.attr('data-parent');


var itemNumber = $current.attr('data-id');


var tempSearch = '.leftNavItemContent' + indexNumber;
var $parentRow = $current.parents(tempSearch);




var tempSearch2 = '#subElementDropDownTextBox' + itemNumber;
var subElementText = $parentRow.find(tempSearch2).val();

var tempSearch3 = '#subElementDropDownHrefBox' + itemNumber;
var subElementHref = $parentRow.find(tempSearch3).val();

if ( subElementText != '' && subElementText != ' ' && subElementText != 'undefined' && subElementText != null ) {
var $navBarEl = this.innerElement.find('ul.navbar-left');
var liNumber = indexNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';
var $liDropDown = $navBarEl.children(tempSearch);

var $ulDropdown = $liDropDown.children('ul.dropdown-menu');

var liNumberNext = itemNumber - 1;
var tempSearchNext = 'li:eq(' + liNumberNext + ')';
var $liDropdownCurrent = $ulDropdown.children(tempSearchNext);

var $aElDropDown = $liDropdownCurrent.find('a');
$aElDropDown.text(subElementText);
if ( subElementHref != '' && subElementHref != ' ' && subElementHref != 'undefined' && subElementHref != null ) {
       $aElDropDown.attr('href',subElementHref);
 }


}


}, this));



this.modalEdit.on( "click", ".leftNavbarItemTypeElementApply", $.proxy( function(e) { 


var $current = $(e.target);

var itemNumber = $current.attr('data-id');


var $parentRow = $current.parents('.leftNavElToAppend');
var $elementTypeEl = $parentRow.find('input[name=optradio]:checked');
var elementType = $parentRow.find('input[name=optradio]:checked').attr('class');




var temp1 = '#elementTypeContentBox' + itemNumber;
var elementText = $parentRow.find(temp1).val();


var temp2 = '#elementTypeHrefBox' + itemNumber;
var elementHref = $parentRow.find(temp2).val();



var insertIcon = false;
var iconSizeClass;
var addSizeClass = false;
var iconHTMLFinal;

var $insertIconEl = $parentRow.find('input[name=optradioPosition]:checked');
var insertIconElClass = $insertIconEl.attr('class');
if ( insertIconElClass != '' && insertIconElClass != ' ' && insertIconElClass != 'undefined' && insertIconElClass != null) {
   
   

   var iconSize = $parentRow.find('input[name=optradioSize]:checked').val();
   
   if ( iconSize != '' && iconSize != ' ' && iconSize != 'undefined' && iconSize != null) {
                  
                  addSizeClass = false;
                  if(iconSize== 'normal'){
                      addSizeClass = false;
                  }else if(iconSize== 'lg'){
                    iconSizeClass = 'fa-lg';
                    addSizeClass = true;
                  }else if(iconSize== '2x'){
                    iconSizeClass = 'fa-2x';
                    addSizeClass = true;
                  }else if(iconSize== '3x'){
                    iconSizeClass = 'fa-3x';
                    addSizeClass = true;
                  }else if(iconSize== '4x'){
                    iconSizeClass = 'fa-4x';
                    addSizeClass = true;
                  }else if(iconSize== '5x'){
                    iconSizeClass = 'fa-5x';
                    addSizeClass = true;
                  }

                  var iconRadioElValue = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm').val();
                  if ( iconRadioElValue != '' && iconRadioElValue != ' ' && iconRadioElValue != 'undefined' && iconRadioElValue != null) {
                      var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');

                      var $iconEl = $iconRadioEl.parent().closest('label').find('i');
                      var iconClass = $iconEl.attr('class');
                      

                       var iconHT;
                       if(!addSizeClass){
                            iconHT = iconClass;
                       }else{
                            iconHT = iconClass + ' ' + iconSizeClass;
                       }
                       
                       var iconHTML = '<i class="' + iconHT + '"></i>';

                      if(iconClass != 'undefined'){
                          
                          insertIcon = true;
                          iconHTMLFinal = iconHTML;
                          

                        }


                 }


            }


}else{
            
}



var $navBarEl = this.innerElement.find('ul.navbar-left');


var liNumber = itemNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';

var $leftEl = $navBarEl.children(tempSearch);
if($leftEl && $leftEl != 'undefined' && $leftEl != null ){
   
   var liClass = $leftEl.attr('class');
   
   
    if ( elementType ==  'linkType' && $leftEl.children('ul').length > 0) {
        

        $leftEl.removeClass('dropdown');
        $leftEl.empty();

        var htmlTemp = '<a href="' + elementHref + '" class="removePreviewMainLink">' + elementText + '</a>';
        $leftEl.html(htmlTemp);

        if(insertIcon){

          var $aEl = $navBarEl.children(tempSearch).children('a');
          
          if($aEl.children('i').length > 0){
            $aEl.children('i').remove();
          }

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
       }

   }else{
       var $aEl = $leftEl.find('a');
       

       $aEl.text(elementText);
       $aEl.attr('href',elementHref);
       if(insertIcon){
          
          $aEl.find('i').remove();

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
        }
 }
}else{
  
}


}, this));



/*********************************** rightNavbar Edit **************************************/

this.modalEdit.on( "click", "#rightNavbarChangeNumElementsInput", $.proxy( function(e) { 


var rightNavNumElements = this.modalEdit.find('#rightNavbarContent').find('#collapseRightNavbarContent').find('#rightNavbarChangeNumElementsNumberBox').val();

if ( rightNavNumElements > 0 ) {

 
 var $navBarEl = this.innerElement.find('ul.navbar-right');
 var currentNumOfItems = $navBarEl.children('li').length;

 if(rightNavNumElements < currentNumOfItems){
          while( rightNavNumElements != this.innerElement.find('ul.navbar-right').children('li').length ){
              this.innerElement.find('ul.navbar-right').find("li:last").remove();

          }
 }else{
          while( rightNavNumElements != this.innerElement.find('ul.navbar-right').children('li').length ){
                var html = '<li><a href="#" class="removePreviewMainLink">Page</a></li>';
                this.innerElement.find('ul.navbar-right').append(html);
                
          }

 }

 
  var $rightElementsOptionsTypeEl = this.modalEdit.find('#rightNavbarContent').find('#collapseRightNavbarContent').find('#rightNavbarChangeNumElementsNumberBox');
  
    
  
  $rightElementsOptionsTypeEl.empty();
  var tempHtml = '';
  for ( var k=0; k<rightNavNumElements; k++) {
    
      var m = k + 1;
      
      tempHtml += '<div class="rightNavElToAppend" id="rightNavChangeId' + m + '" style= "margin-left:20px;">'+
                  '<div class="row">Element ' + m + '</div>'+
                  '<form>'+
                  '<div class="row">'+
                  
                    '<div class="col-xs-4">'+
                       '<div class="radio">'+
                             '<label><input type="radio" name="optradio" data-id="' + m + '" class="linkType" id="linkElement' + m + '">Link</label> '+
                        '</div>'+
                      '</div>'+
                     '<div class="col-xs-4">'+
                        '<div class="radio">'+
                             '<label><input type="radio" name="optradio" data-id="' + m + '" class="dropdownType" id="dropDownElement' + m + '">DropDown</label> '+
                        '</div>'+
                      '</div>'+
                    '<div class="col-xs-3 col-xs-offset-1">'+
                      '<button type="button" class="btn btn-sm btn-danger rightNavbarChangeTypeElement" id="rightNavChangeId' + m + '">Change</button>'+
                    '</div>'+
                  
                 
                 '</div>' +
                 '</form>'+
                 '<div class="rightNavItemContent' + m + '">'+
                 '</div>'+

              '</div>';
    
  }
  $rightElementsOptionsTypeEl.html(tempHtml);

}if ( rightNavNumElements == 0 ) {
  var $navBarEl = this.innerElement.find('ul.navbar-right');
  $navBarEl.empty();
}
   
}, this));

this.modalEdit.on( "click", ".rightNavbarChangeTypeElement", $.proxy( function(e) { 


var $current = $(e.target);


var $parentRow = $current.parents('.rightNavElToAppend');


var $elementTypeEl = $parentRow.find('input[name=optradio]:checked');
var elementType = $parentRow.find('input[name=optradio]:checked').attr('class');


var indexNum = $elementTypeEl.attr('data-id');
var tempSearch = '.rightNavItemContent' + indexNum;
var $itemContainer = $parentRow.find(tempSearch);
$itemContainer.empty();

var $formToRemove = $itemContainer.siblings('.customLinkFormRemove');

$formToRemove.remove();

if ( elementType ==  'linkType') {
      
      
      

      var tempHTML = '<div class="row">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementTypeContentBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementTypeHrefBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+
                      
                      '</div>' +
                      
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                      '<div class="row text-center" style="margin-left:-15px;margin-top:10px;margin-bottom:10px;">'+
                          
                              '<button type="button" class="btn btn-sm btn-info rightNavbarItemTypeElementApply" data-id="' + indexNum + '">Apply</button>'+
                          
                      '</div>';

                      

                     

      $itemContainer.html(tempHTML);

}else if ( elementType ==  'dropdownType') {
  
  
var tempHTML = '<div class="row dropdownContainerPar">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementDropdownContentBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="elementDropdownHrefBox' + indexNum + '">'+
                        '</div>' +
                      '</div>'+
                      
                      '</div>' +
                      
                    '<form">'+
                        '<div class="row">'+
                          
                          '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="beforeText">Insert Icon before Text</label>'+
                              '</div>'+
                            '</div>'+

                            '<div class="col-xs-5">'+
                              '<div class="radio">'+
                                '<label><input type="radio" name="optradioPosition" class="afterText">Insert Icon after Text</label>'+
                              '</div>'+
                            '</div>'+

                        '</div>'+
                      '</form>'+

                      '<form>'+
                        '<div class="row">'+
                          
                          
                                  '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="normal"><span>Normal Size</span></label> '+
                                    '</div>'+
                               '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="lg"><span>33% increase</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                         ' <label><input type="radio" name="optradioSize" value="2x"><span>2x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                              '</div>'+

                              '<div class="row">'+
                                '<div class="col-xs-4">'+
                                   ' <div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="3x"><span>3x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="4x"><span>4x Size</span></label> '+
                                    '</div>'+
                                '</div>'+

                                '<div class="col-xs-4">'+
                                    '<div class="radio">'+
                                          '<label><input type="radio" name="optradioSize" value="5x"><span>5x Size</span></label> '+
                                   ' </div>'+
                                '</div>'+

                          '</div>'+

                       

                      '</form>' +

                     

                      '<div class="row" style="margin-top:15px;margin-bottom:10px;">'+
                        '<div class="col-xs-9">' +
                            '<div class="input-group">'+
                                      '<span class="input-group-btn">'+
                                          '<span class="btn btn-primary" >'+
                                             ' Number of Sub-Elements'+
                                          '</span>'+
                                      '</span>'+
                                      '<input type="text" class="form-control" id="rightNavbarElementNumSubElementsBox' + indexNum + '" >'+
                             '</div>'+
                        '</div>'+
                        '<div class="col-xs-2">' +
                            '<button type="button" class="btn btn-sm btn-info rightNavbarDropdownItemElementApply" data-id="' + indexNum + '">Apply</button>'+
                        '</div>'+
                      '</div>'+
                      '<div class="rightNavItemDropDownSubElementsContent' + indexNum + '">'+
                      '</div>';

      $itemContainer.html(tempHTML);

  

}


}, this));


this.modalEdit.on( "click", ".rightNavbarDropdownItemElementApply", $.proxy( function(e) { 
var $current = $(e.target);
var indexNumber = $current.attr('data-id');


var tempSearch = '.rightNavItemContent' + indexNumber;
var $parentRow = $current.parents(tempSearch);




var temp1 = '#elementDropdownContentBox' + indexNumber;
var elementText = $parentRow.find(temp1).val();


var temp2 = '#elementDropdownHrefBox' + indexNumber;
var elementHref = $parentRow.find(temp2).val();


var $navBarEl = this.innerElement.find('ul.navbar-right');



var insertIcon = false;
var iconSizeClass;
var addSizeClass = false;
var iconHTMLFinal;

var $insertIconEl = $parentRow.find('input[name=optradioPosition]:checked');
var insertIconElClass = $insertIconEl.attr('class');
if ( insertIconElClass != '' && insertIconElClass != ' ' && insertIconElClass != 'undefined' && insertIconElClass != null) {
   
   

   var iconSize = $parentRow.find('input[name=optradioSize]:checked').val();
   
   if ( iconSize != '' && iconSize != ' ' && iconSize != 'undefined' && iconSize != null) {
                  
                  addSizeClass = false;
                  if(iconSize== 'normal'){
                      addSizeClass = false;
                  }else if(iconSize== 'lg'){
                    iconSizeClass = 'fa-lg';
                    addSizeClass = true;
                  }else if(iconSize== '2x'){
                    iconSizeClass = 'fa-2x';
                    addSizeClass = true;
                  }else if(iconSize== '3x'){
                    iconSizeClass = 'fa-3x';
                    addSizeClass = true;
                  }else if(iconSize== '4x'){
                    iconSizeClass = 'fa-4x';
                    addSizeClass = true;
                  }else if(iconSize== '5x'){
                    iconSizeClass = 'fa-5x';
                    addSizeClass = true;
                  }

                  var iconRadioElValue = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm').val();
                  if ( iconRadioElValue != '' && iconRadioElValue != ' ' && iconRadioElValue != 'undefined' && iconRadioElValue != null) {
                      var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');

                      var $iconEl = $iconRadioEl.parent().closest('label').find('i');
                      var iconClass = $iconEl.attr('class');
                      

                       var iconHT;
                       if(!addSizeClass){
                            iconHT = iconClass;
                       }else{
                            iconHT = iconClass + ' ' + iconSizeClass;
                       }
                       
                       var iconHTML = '<i class="' + iconHT + '"></i>';

                      if(iconClass != 'undefined'){
                          
                          insertIcon = true;
                          iconHTMLFinal = iconHTML;
                          

                        }


                 }


            }


}else{
            
}



var liNumber = indexNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';

var $rightEl = $navBarEl.children(tempSearch);

if($rightEl && $rightEl != 'undefined' && $rightEl != null ){
   
   var liClass = $rightEl.attr('class');
   var tempSFirst = 'input#rightNavbarElementNumSubElementsBox' + indexNumber;
   
   var subElsNumberFirst = 0;
   if($parentRow.find(tempSFirst).val() > 0){
            subElsNumberFirst = $parentRow.find(tempSFirst).val();
   }

   
   if ( $rightEl.children('ul').length > 0 ) {
       var $aEl = $rightEl.find('a.dropdown-toggle');
       

       $aEl.text(elementText);
       $aEl.attr('href',elementHref);

       if(insertIcon){

          $aEl.find('i').remove();

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }

       }


   }else{
       var $aEl = $rightEl.find('a');
       
       $aEl.remove();

       var htmlToInsert1 = '<a class="dropdown-toggle customDropDownNav removePreviewMainLink" data-toggle="dropdown" href="'+elementHref+'" aria-expanded="true">'+elementText+'</a>';
       htmlToInsert1 += '<ul class="dropdown-menu">';
       for ( var k=0;k<subElsNumberFirst;k++ ) {
          htmlToInsert1 += '<li><a href="#" class="removePreviewDropdownLink">Page</a></li>';
       }

       htmlToInsert1 += '</ul>';

       $rightEl.html(htmlToInsert1);
       $rightEl.addClass('dropdown');

       var $aEl = $rightEl.find('a.dropdown-toggle');
       if(insertIcon){
        $aEl.find('i').remove();
        if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
      }

 }
}



var tempNext = '.rightNavItemDropDownSubElementsContent' + indexNumber;
var $rightNavItemDropDownSubElementsContent = $parentRow.find(tempNext);
$rightNavItemDropDownSubElementsContent.empty();

var tempS = 'input#rightNavbarElementNumSubElementsBox' + indexNumber;

var subElsNumber = $parentRow.find(tempS).val();


if ( subElsNumber > 0 ) { 

var tempHTML = '';
for ( var k=1; k<=subElsNumber;k++){

      tempHTML += '<div class="row">' + 
                      '<div class="col-xs-5">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Content'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="subElementDropDownTextBox' + k + '">'+
                        '</div>' +
                      '</div>'+ 
                      '<div class="col-xs-4">' +
                        '<div class="input-group">'+
                            '<span class="input-group-btn">'+
                                '<span class="btn btn-primary btn-file">'+
                                    'Href'+
                                '</span>'+
                            '</span>'+
                            '<input type="text" class="form-control" id="subElementDropDownHrefBox' + k + '">'+
                        '</div>' +
                      '</div>'+
                      '<div class="col-xs-2">' +
                          '<button type="button" class="btn btn-sm btn-info subElementDropDownApplyRight" data-parent="' + indexNumber +'" data-id="' + k + '">Apply</button>'+
                      '</div>' +
                      '</div>' ;
                      
}
$rightNavItemDropDownSubElementsContent.html(tempHTML);

}


}, this));


this.modalEdit.on( "click", ".subElementDropDownApplyRight", $.proxy( function(e) { 

var $current = $(e.target);


var indexNumber = $current.attr('data-parent');


var itemNumber = $current.attr('data-id');


var tempSearch = '.rightNavItemContent' + indexNumber;
var $parentRow = $current.parents(tempSearch);




var tempSearch2 = '#subElementDropDownTextBox' + itemNumber;
var subElementText = $parentRow.find(tempSearch2).val();

var tempSearch3 = '#subElementDropDownHrefBox' + itemNumber;
var subElementHref = $parentRow.find(tempSearch3).val();

if ( subElementText != '' && subElementText != ' ' && subElementText != 'undefined' && subElementText != null ) {
var $navBarEl = this.innerElement.find('ul.navbar-right');
var liNumber = indexNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';
var $liDropDown = $navBarEl.children(tempSearch);

var $ulDropdown = $liDropDown.children('ul.dropdown-menu');

var liNumberNext = itemNumber - 1;
var tempSearchNext = 'li:eq(' + liNumberNext + ')';
var $liDropdownCurrent = $ulDropdown.children(tempSearchNext);

var $aElDropDown = $liDropdownCurrent.find('a');
$aElDropDown.text(subElementText);
if ( subElementHref != '' && subElementHref != ' ' && subElementHref != 'undefined' && subElementHref != null ) {
       $aElDropDown.attr('href',subElementHref);
 }


}


}, this));



this.modalEdit.on( "click", ".rightNavbarItemTypeElementApply", $.proxy( function(e) { 


var $current = $(e.target);
var itemNumber = $current.attr('data-id');


var $parentRow = $current.parents('.rightNavElToAppend');
var $elementTypeEl = $parentRow.find('input[name=optradio]:checked');
var elementType = $parentRow.find('input[name=optradio]:checked').attr('class');



var temp1 = '#elementTypeContentBox' + itemNumber;
var elementText = $parentRow.find(temp1).val();


var temp2 = '#elementTypeHrefBox' + itemNumber;
var elementHref = $parentRow.find(temp2).val();



var insertIcon = false;
var iconSizeClass;
var addSizeClass = false;
var iconHTMLFinal;

var $insertIconEl = $parentRow.find('input[name=optradioPosition]:checked');
var insertIconElClass = $insertIconEl.attr('class');
if ( insertIconElClass != '' && insertIconElClass != ' ' && insertIconElClass != 'undefined' && insertIconElClass != null) {
   
   

   var iconSize = $parentRow.find('input[name=optradioSize]:checked').val();
   
   if ( iconSize != '' && iconSize != ' ' && iconSize != 'undefined' && iconSize != null) {
                  
                  addSizeClass = false;
                  if(iconSize== 'normal'){
                      addSizeClass = false;
                  }else if(iconSize== 'lg'){
                    iconSizeClass = 'fa-lg';
                    addSizeClass = true;
                  }else if(iconSize== '2x'){
                    iconSizeClass = 'fa-2x';
                    addSizeClass = true;
                  }else if(iconSize== '3x'){
                    iconSizeClass = 'fa-3x';
                    addSizeClass = true;
                  }else if(iconSize== '4x'){
                    iconSizeClass = 'fa-4x';
                    addSizeClass = true;
                  }else if(iconSize== '5x'){
                    iconSizeClass = 'fa-5x';
                    addSizeClass = true;
                  }

                  var iconRadioElValue = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm').val();
                  if ( iconRadioElValue != '' && iconRadioElValue != ' ' && iconRadioElValue != 'undefined' && iconRadioElValue != null) {
                      var $iconRadioEl = this.modalEdit.find('input[name=optradio]:checked', '.iconsContainerForm');

                      var $iconEl = $iconRadioEl.parent().closest('label').find('i');
                      var iconClass = $iconEl.attr('class');
                      

                       var iconHT;
                       if(!addSizeClass){
                            iconHT = iconClass;
                       }else{
                            iconHT = iconClass + ' ' + iconSizeClass;
                       }
                       
                       var iconHTML = '<i class="' + iconHT + '"></i>';

                      if(iconClass != 'undefined'){
                          
                          insertIcon = true;
                          iconHTMLFinal = iconHTML;
                          

                        }


                 }


            }


}else{
            
}



var $navBarEl = this.innerElement.find('ul.navbar-right');


var liNumber = itemNumber - 1;
var tempSearch = 'li:eq(' + liNumber + ')';

var $rightEl = $navBarEl.children(tempSearch);
if($rightEl && $rightEl != 'undefined' && $rightEl != null ){
   
   var liClass = $rightEl.attr('class');
   
   
    if ( elementType ==  'linkType' && $rightEl.children('ul').length > 0) {
        

        $rightEl.removeClass('dropdown');
        $rightEl.empty();

        var htmlTemp = '<a href="' + elementHref + '" class="removePreviewMainLink">' + elementText + '</a>';
        $rightEl.html(htmlTemp);

        if(insertIcon){

          var $aEl = $navBarEl.children(tempSearch).children('a');
          
          if($aEl.children('i').length > 0){
            $aEl.children('i').remove();
          }

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
       }

   }else{
       var $aEl = $rightEl.find('a');
       

       $aEl.text(elementText);
       $aEl.attr('href',elementHref);
       if(insertIcon){
          
          $aEl.find('i').remove();

          if(insertIconElClass == 'beforeText'){
                iconHTMLFinal += '&nbsp;';
                $aEl.prepend(iconHTMLFinal);
          }else{
              var html = '&nbsp;';
              $aEl.append(html);
              $aEl.append(iconHTMLFinal);
          }
        }
 }
}else{
  
}


}, this));


/*********************************** rightNavbar Edit **************************************/




}else{
    
    
    

     this.modalEdit.off( "click", ".navbarBrandChangesApplyButton");
     this.modalEdit.off( "click", "#leftNavbarChangeNumElementsInput");
     this.modalEdit.off( "click", ".leftNavbarChangeTypeElement");
     this.modalEdit.off( "click", ".leftNavbarItemTypeElementApply"); 
     this.modalEdit.off( "click", ".leftNavbarDropdownItemElementApply"); 
     this.modalEdit.off( "click", ".subElementDropDownApply");

this.modalEdit.off( "click", "#navbarLinksColorChange");
this.modalEdit.off( "click", "#navbarLinksBackgroundColorChange");
this.modalEdit.off( "click", "#navbarLinksHoverColorChange");

this.modalEdit.off( "click", "#navbarDropDownLinksColorChange");
this.modalEdit.off( "click", "#navbarDropDownLinksBackgroundColorChange");
this.modalEdit.off( "click", "#navbarDropDownLinksHoverColorChange");

this.modalEdit.off( "click", ".rightNavbarItemTypeElementApply");
this.modalEdit.off( "click", ".subElementDropDownApplyRight");
this.modalEdit.off( "click", ".rightNavbarDropdownItemElementApply");
this.modalEdit.off( "click", ".rightNavbarChangeTypeElement");
this.modalEdit.off( "click", "#rightNavbarChangeNumElementsInput");


}


}




$('#selectTotalColsInRow').on('change', function() {
  
$('.modal-mobileCols').empty();

var totalRowsMobile = $(this).val();
var html = '';

for(var i=0; i<totalRowsMobile; i++){
  var k = i + 1;
  html = '';
  html += '<div class="row">';
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + ' Size</label>';
  html += '<select class="form-control" id="modal-mobile-col' + k + '">';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Offset</label>';
  html += '<select class="form-control" id="modal-mobile-colOffset' + k + '">';
  html += '<option>0</option>';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';

  html += '</div>'; 

$('.modal-mobileCols').append(html);
}

});

$( "#tabletSmSameAsMobileCheckbox" ).on('change', function() {

if($(this).is(':checked')){

$('.modal-tabletSmCols').empty();

}else{


var totalRows = $('#selectTotalColsInRow').val();
$('.modal-tabletSmCols').empty();

var tempHTML = '<span class="resDesc"> The Layout will apply for Resolutions from 768 pixels upto 991 pixels.<br/>Total number for Columns Sizes and Columns Offsets must sum up to 12.</span><br/>';
$('.modal-tabletSmCols').append(tempHTML);

var html = '';

for(var i=0; i<totalRows; i++){
  var k = i + 1;
  html = '';
  html += '<div class="row">';
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Size</label>';
  html += '<select class="form-control" id="modal-tabletsm-col' + k + '">';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Offset</label>';
  html += '<select class="form-control" id="modal-tabletsm-colOffset' + k + '">';
  html += '<option>0</option>';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';

  html += '</div>'; 

$('.modal-tabletSmCols').append(html);

}

}
});

$( "#tabletLgSameAsMobileCheckbox" ).on('change', function() {


if($(this).is(':checked')){

$('.modal-tabletLgCols').empty();

}else{


var totalRows = $('#selectTotalColsInRow').val();

$('.modal-tabletLgCols').empty();

var tempHTML = '<span class="resDesc"> The Layout will apply for Resolutions from 992 pixels upto 1199 pixels.<br/>Total number for Columns Sizes and Columns Offsets must sum up to 12.</span><br/>';
$('.modal-tabletLgCols').append(tempHTML);

var html = '';

for(var i=0; i<totalRows; i++){
  var k = i + 1;
  html = '';
  html += '<div class="row">';
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Size</label>';
  html += '<select class="form-control" id="modal-tabletlg-col' + k + '">';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Offset</label>';
  html += '<select class="form-control" id="modal-tabletlg-colOffset' + k + '">';
  html += '<option>0</option>';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';

  html += '</div>'; 

$('.modal-tabletLgCols').append(html);
}

}

});


$( "#desktopSameAsMobileCheckbox" ).on('change', function() {


if($(this).is(':checked')){

$('.modal-desktopCols').empty();

}else{


var totalRows = $('#selectTotalColsInRow').val();

$('.modal-desktopCols').empty();
var tempHTML = '<span class="resDesc"> The Layout will apply for Resolutions above 1200 pixels.<br/>Total number for Columns Sizes and Columns Offsets must sum up to 12.</span><br/>';
$('.modal-desktopCols').append(tempHTML);

var html = '';

for(var i=0; i<totalRows; i++){
  var k = i + 1;
  html = '';
  html += '<div class="row">';
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Size</label>';
  html += '<select class="form-control" id="modal-desktop-col' + k + '">';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group col-xs-12 col-sm-6">';
  html += '<label data-type="label">Column ' + k + '  Offset</label>';
  html += '<select class="form-control" id="modal-desktop-colOffset' + k + '">';
  html += '<option>0</option>';
  html += '<option>1</option>';
  html += '<option>2</option>';
  html += '<option>3</option>';
  html += '<option>4</option>';
  html += '<option>5</option>';
  html += '<option>6</option>';
  html += '<option>7</option>';
  html += '<option>8</option>';
  html += '<option>9</option>';
  html += '<option>10</option>';
  html += '<option>11</option>';
  html += '<option>12</option>';
  html += '</select>';
  html += '</div>';

  html += '</div>'; 

$('.modal-desktopCols').append(html);
}

}

});



$('.saveCustomLayout').on('click', function() {


var $parentTableRow = $('.customLayout').parents('tr'); 

   
   

var mobileCols = $('#selectTotalColsInRow').val();

var tabletSmCols;
  if($( "#tabletSmSameAsMobileCheckbox" ).is(':checked'))
  {
    tabletSmCols = mobileCols;
  }else{
    tabletSmCols = $('#selectTabletSm').val();
  }
            
      

   var tabletLgCols; 
  if($( "#tabletLgSameAsMobileCheckbox" ).is(':checked'))
  {
    tabletLgCols = tabletSmCols;
  }else{
    tabletLgCols = $('#selectTabletLg').val();
  }
   
   

  var desktopCols;
  if($( "#desktopSameAsMobileCheckbox" ).is(':checked'))
  {
    desktopCols = tabletLgCols;
  }else{
    desktopCols = $('#selectDesktop').val();
  }
   
   


   var totalRows = $('#selectTotalColsInRow').val();

   var mobileWidths = new Array();
   var mobileOffsets = new Array();

   var tabletSmWidths = new Array();
   var tabletSmOffsets = new Array();

   var tabletLgWidths = new Array();
   var tabletLgOffsets = new Array();

   var desktopWidths = new Array();
   var desktopOffsets = new Array();

  for(var i=0; i<totalRows; i++){
    var k = i + 1 ;
    var temp1 = '#modal-mobile-col' + k;
    var temp2 = '#modal-mobile-colOffset' + k;
    mobileWidths[i] = $(temp1).val();
    mobileOffsets[i] = $(temp2).val();
   }

  if($( "#tabletSmSameAsMobileCheckbox" ).is(':checked'))
  {
    tabletSmWidths = mobileWidths;
    tabletSmOffsets = mobileOffsets;

  }else{

      
      for(var i=0; i<totalRows; i++){
          var k = i + 1 ;
          var temp1 = '#modal-tabletsm-col' + k;
          var temp2 = '#modal-tabletsm-colOffset' + k;
          tabletSmWidths[i] = $(temp1).val();
          tabletSmOffsets[i] = $(temp2).val();
      }
  }

  if($( "#tabletLgSameAsMobileCheckbox" ).is(':checked'))
  {
    tabletLgWidths = tabletSmWidths;
    tabletLgOffsets = tabletSmOffsets;

  }else{

      
      for(var i=0; i<totalRows; i++){
          var k = i + 1 ;
          var temp1 = '#modal-tabletlg-col' + k;
          var temp2 = '#modal-tabletlg-colOffset' + k;
          tabletLgWidths[i] = $(temp1).val();
          tabletLgOffsets[i] = $(temp2).val();
      }
  }

  if($( "#desktopSameAsMobileCheckbox" ).is(':checked'))
  {
    desktopWidths = tabletLgWidths;
    desktopOffsets = tabletLgOffsets;

  }else{

      
      for(var i=0; i<totalRows; i++){
          var k = i + 1 ;
          var temp1 = '#modal-desktop-col' + k;
          var temp2 = '#modal-desktop-colOffset' + k;
          desktopWidths[i] = $(temp1).val();
          desktopOffsets[i] = $(temp2).val();
      }
  }


   

   var html = '<tr><td style="padding-top:10px;"><div class="row-col-droppable ui-draggable" data-id="1">';
    
   

    html += '<span class="badge customBadge" style="background-color:rgb(109, 158, 235);">' +
                                    '<a href="#" class="ui_to_drag"> ' +
                                        '<table>' +
                                         ' <tr>' +
                                            '<td style="font-size:12px;"><i class="fa fa-th-large"></i></td>' +
                                           ' <td style="padding-left:2px;padding-top:2px;font-size:10px;">Bootstrap Row<br/><span style="font-size:10px;">Custom Columns</span></td>' +
                                          '</tr>' +
                                        '</table>' +
                                    '</a>' +
                                  '</span>';

    html += '<div class="row hiddenDiv colClass rowColBac" data-id="1">' + 
                                      '<div class="row-description">Row</div>' +
                                      '<div class="row-edit-icons">' +
                                          '<span class="row-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>' +
                                          '<span class="row-delete"><a href="#"><i class="fa fa-times" ></i></a></span>' +
                                      '</div>';
  
  
  

  var tempHtml = '';

for(var i=0; i<totalRows; i++){
  var k = i + 1;
  tempHtml = '';

  tempHtml += '<div class="col-xs-' + mobileWidths[i] + ' ' + 'col-xs-offset-' + mobileOffsets[i] +  
              ' ' + 'col-sm-' + tabletSmWidths[i] + ' ' + 'col-sm-offset-' + tabletSmOffsets[i] +
              ' ' + 'col-md-' + tabletLgWidths[i] + ' ' + 'col-md-offset-' + tabletLgOffsets[i] +
              ' ' + 'col-lg-' + desktopWidths[i] + ' ' + 'col-lg-offset-' + desktopOffsets[i];

  
  tempHtml += '">' + '<div class="colRow-description">COLUMN</div>';
  tempHtml += '<div class="colRow-edit-icons"><span class="colRow-edit"><a href="#"><i class="fa fa-pencil-square-o" ></i></a></span>' +
              '</div>' +
              '</div>';
  html += tempHtml;
}




html += '</div></div></td>' + '<td> <span class="ui_to_drag_desc">' + totalRows + ' Columns</span></td></tr>';

$parentTableRow.after(html);

$('.row-col-droppable').draggable({
  iframeFix: true,
  revert: "invalid",
  appendTo: "body",
  helper: "clone"

});

$('#customiseRowLayout').modal('hide');


});



function iconsHTMLToAppend(type, $tempEl){
  
 
var iconClassArray = [];
iconClassArray[0] = "fa-glass";
iconClassArray.push("fa-music");
iconClassArray.push("fa-search");
iconClassArray.push("fa-envelope-o");
iconClassArray.push("fa-heart");
iconClassArray.push("fa-star");
iconClassArray.push("fa-star-o");
iconClassArray.push("fa-user");
iconClassArray.push("fa-film");
iconClassArray.push("fa-th-large");
iconClassArray.push("fa-th");
iconClassArray.push("fa-th-list");
iconClassArray.push("fa-check");
iconClassArray.push("fa-times");
iconClassArray.push("fa-search-plus");
iconClassArray.push("fa-search-minus");
iconClassArray.push("fa-power-off");
iconClassArray.push("fa-signal");
iconClassArray.push("fa-cog");
iconClassArray.push("fa-trash-o");
iconClassArray.push("fa-home");
iconClassArray.push("fa-file-o");
iconClassArray.push("fa-clock-o");
iconClassArray.push("fa-road");
iconClassArray.push("fa-download");
iconClassArray.push("fa-arrow-circle-o-down");
iconClassArray.push("fa-arrow-circle-o-up");
iconClassArray.push("fa-inbox");
iconClassArray.push("fa-play-circle-o");
iconClassArray.push("fa-repeat");
iconClassArray.push("fa-refresh");
iconClassArray.push("fa-list-alt");
iconClassArray.push("fa-lock");
iconClassArray.push("fa-flag");
iconClassArray.push("fa-headphones");
iconClassArray.push("fa-volume-off");
iconClassArray.push("fa-volume-down");
iconClassArray.push("fa-volume-up");
iconClassArray.push("fa-qrcode");
iconClassArray.push("fa-barcode");
iconClassArray.push("fa-tag");
iconClassArray.push("fa-tags");
iconClassArray.push("fa-book");
iconClassArray.push("fa-bookmark");
iconClassArray.push("fa-print");
iconClassArray.push("fa-camera");
iconClassArray.push("fa-font");
iconClassArray.push("fa-bold");
iconClassArray.push("fa-italic");
iconClassArray.push("fa-text-height");
iconClassArray.push("fa-text-width");
iconClassArray.push("fa-align-left");
iconClassArray.push("fa-align-center");
iconClassArray.push("fa-align-right");
iconClassArray.push("fa-align-justify");
iconClassArray.push("fa-list");
iconClassArray.push("fa-outdent");
iconClassArray.push("fa-indent");
iconClassArray.push("fa-video-camera");
iconClassArray.push("fa-picture-o");
iconClassArray.push("fa-pencil");
iconClassArray.push("fa-map-marker");
iconClassArray.push("fa-adjust");
iconClassArray.push("fa-tint");
iconClassArray.push("fa-pencil-square-o");
iconClassArray.push("fa-share-square-o");
iconClassArray.push("fa-check-square-o");
iconClassArray.push("fa-arrows");
iconClassArray.push("fa-step-backward");
iconClassArray.push("fa-fast-backward");
iconClassArray.push("fa-backward");
iconClassArray.push("fa-play");
iconClassArray.push("fa-pause");
iconClassArray.push("fa-stop");
iconClassArray.push("fa-forward");
iconClassArray.push("fa-fast-forward");
iconClassArray.push("fa-step-forward");
iconClassArray.push("fa-eject");
iconClassArray.push("fa-chevron-left");
iconClassArray.push("fa-chevron-right");
iconClassArray.push("fa-plus-circle");
iconClassArray.push("fa-minus-circle");
iconClassArray.push("fa-times-circle");
iconClassArray.push("fa-check-circle");
iconClassArray.push("fa-question-circle");
iconClassArray.push("fa-info-circle");
iconClassArray.push("fa-crosshairs");
iconClassArray.push("fa-times-circle-o");
iconClassArray.push("fa-check-circle-o");
iconClassArray.push("fa-ban");
iconClassArray.push("fa-arrow-left");
iconClassArray.push("fa-arrow-right");
iconClassArray.push("fa-arrow-up");
iconClassArray.push("fa-arrow-down");
iconClassArray.push("fa-share");
iconClassArray.push("fa-expand");
iconClassArray.push("fa-compress");
iconClassArray.push("fa-plus");
iconClassArray.push("fa-minus");
iconClassArray.push("fa-asterisk");
iconClassArray.push("fa-exclamation-circle");
iconClassArray.push("fa-gift");
iconClassArray.push("fa-leaf");
iconClassArray.push("fa-fire");
iconClassArray.push("fa-eye");
iconClassArray.push("fa-eye-slash");
iconClassArray.push("fa-exclamation-triangle");
iconClassArray.push("fa-plane");
iconClassArray.push("fa-calendar");
iconClassArray.push("fa-random");
iconClassArray.push("fa-comment");
iconClassArray.push("fa-magnet");
iconClassArray.push("fa-chevron-up");
iconClassArray.push("fa-chevron-down");
iconClassArray.push("fa-retweet");
iconClassArray.push("fa-shopping-cart");
iconClassArray.push("fa-folder");
iconClassArray.push("fa-folder-open");
iconClassArray.push("fa-arrows-v");
iconClassArray.push("fa-arrows-h");
iconClassArray.push("fa-bar-chart");
iconClassArray.push("fa-twitter-square");
iconClassArray.push("fa-facebook-square");
iconClassArray.push("fa-camera-retro");
iconClassArray.push("fa-key");
iconClassArray.push("fa-cogs");
iconClassArray.push("fa-comments");
iconClassArray.push("fa-thumbs-o-up");
iconClassArray.push("fa-thumbs-o-down");
iconClassArray.push("fa-star-half");
iconClassArray.push("fa-heart-o");
iconClassArray.push("fa-sign-out");
iconClassArray.push("fa-linkedin-square");
iconClassArray.push("fa-thumb-tack");
iconClassArray.push("fa-external-link");
iconClassArray.push("fa-sign-in");
iconClassArray.push("fa-trophy");
iconClassArray.push("fa-github-square");
iconClassArray.push("fa-upload");
iconClassArray.push("fa-lemon-o");
iconClassArray.push("fa-phone");
iconClassArray.push("fa-square-o");
iconClassArray.push("fa-bookmark-o");
iconClassArray.push("fa-phone-square");
iconClassArray.push("fa-twitter");
iconClassArray.push("fa-facebook");
iconClassArray.push("fa-github");
iconClassArray.push("fa-unlock");
iconClassArray.push("fa-credit-card");
iconClassArray.push("fa-rss");
iconClassArray.push("fa-hdd-o");
iconClassArray.push("fa-bullhorn");
iconClassArray.push("fa-bell");
iconClassArray.push("fa-certificate");
iconClassArray.push("fa-hand-o-right");
iconClassArray.push("fa-hand-o-left");
iconClassArray.push("fa-hand-o-up");
iconClassArray.push("fa-hand-o-down");
iconClassArray.push("fa-arrow-circle-left");
iconClassArray.push("fa-arrow-circle-right");
iconClassArray.push("fa-arrow-circle-up");
iconClassArray.push("fa-arrow-circle-down");
iconClassArray.push("fa-globe");
iconClassArray.push("fa-wrench");
iconClassArray.push("fa-tasks");
iconClassArray.push("fa-filter");
iconClassArray.push("fa-briefcase");
iconClassArray.push("fa-arrows-alt");
iconClassArray.push("fa-users");
iconClassArray.push("fa-link");
iconClassArray.push("fa-cloud");
iconClassArray.push("fa-flask");
iconClassArray.push("fa-scissors");
iconClassArray.push("fa-files-o");
iconClassArray.push("fa-paperclip");
iconClassArray.push("fa-floppy-o");
iconClassArray.push("fa-square");
iconClassArray.push("fa-bars");
iconClassArray.push("fa-list-ul");
iconClassArray.push("fa-list-ol");
iconClassArray.push("fa-strikethrough");
iconClassArray.push("fa-underline");
iconClassArray.push("fa-table");
iconClassArray.push("fa-magic");
iconClassArray.push("fa-truck");
iconClassArray.push("fa-pinterest");
iconClassArray.push("fa-pinterest-square");
iconClassArray.push("fa-google-plus-square");
iconClassArray.push("fa-google-plus");
iconClassArray.push("fa-money");
iconClassArray.push("fa-caret-down");
iconClassArray.push("fa-caret-up");
iconClassArray.push("fa-caret-left");
iconClassArray.push("fa-caret-right");
iconClassArray.push("fa-columns");
iconClassArray.push("fa-sort");
iconClassArray.push("fa-sort-desc");
iconClassArray.push("fa-sort-asc");
iconClassArray.push("fa-envelope");
iconClassArray.push("fa-linkedin");
iconClassArray.push("fa-undo");
iconClassArray.push("fa-gavel");
iconClassArray.push("fa-tachometer");
iconClassArray.push("fa-comment-o");
iconClassArray.push("fa-comments-o");
iconClassArray.push("fa-bolt");
iconClassArray.push("fa-sitemap");
iconClassArray.push("fa-umbrella");
iconClassArray.push("fa-clipboard");
iconClassArray.push("fa-lightbulb-o");
iconClassArray.push("fa-exchange");
iconClassArray.push("fa-cloud-download");
iconClassArray.push("fa-cloud-upload");
iconClassArray.push("fa-user-md");
iconClassArray.push("fa-stethoscope");
iconClassArray.push("fa-suitcase");
iconClassArray.push("fa-bell-o");
iconClassArray.push("fa-coffee");
iconClassArray.push("fa-cutlery");
iconClassArray.push("fa-file-text-o");
iconClassArray.push("fa-building-o");
iconClassArray.push("fa-hospital-o");
iconClassArray.push("fa-ambulance");
iconClassArray.push("fa-medkit");
iconClassArray.push("fa-fighter-jet");
iconClassArray.push("fa-beer");
iconClassArray.push("fa-h-square");
iconClassArray.push("fa-plus-square");
iconClassArray.push("fa-angle-double-left");
iconClassArray.push("fa-angle-double-right");
iconClassArray.push("fa-angle-double-up");
iconClassArray.push("fa-angle-double-down");
iconClassArray.push("fa-angle-left");
iconClassArray.push("fa-angle-right");
iconClassArray.push("fa-angle-up");
iconClassArray.push("fa-angle-down");
iconClassArray.push("fa-desktop");
iconClassArray.push("fa-laptop");
iconClassArray.push("fa-tablet");
iconClassArray.push("fa-mobile");
iconClassArray.push("fa-circle-o");
iconClassArray.push("fa-quote-left");
iconClassArray.push("fa-quote-right");
iconClassArray.push("fa-spinner");
iconClassArray.push("fa-circle");
iconClassArray.push("fa-reply");
iconClassArray.push("fa-github-alt");
iconClassArray.push("fa-folder-o");
iconClassArray.push("fa-folder-open-o");
iconClassArray.push("fa-smile-o");
iconClassArray.push("fa-frown-o");
iconClassArray.push("fa-meh-o");
iconClassArray.push("fa-gamepad");
iconClassArray.push("fa-keyboard-o");
iconClassArray.push("fa-flag-o");
iconClassArray.push("fa-flag-checkered");
iconClassArray.push("fa-terminal");
iconClassArray.push("fa-code");
iconClassArray.push("fa-reply-all");
iconClassArray.push("fa-star-half-o");
iconClassArray.push("fa-location-arrow");
iconClassArray.push("fa-crop");
iconClassArray.push("fa-code-fork");
iconClassArray.push("fa-chain-broken");
iconClassArray.push("fa-question");
iconClassArray.push("fa-info");
iconClassArray.push("fa-exclamation");
iconClassArray.push("fa-superscript");
iconClassArray.push("fa-subscript");
iconClassArray.push("fa-eraser");
iconClassArray.push("fa-puzzle-piece");
iconClassArray.push("fa-microphone");
iconClassArray.push("fa-microphone-slash");
iconClassArray.push("fa-shield");
iconClassArray.push("fa-calendar-o");
iconClassArray.push("fa-fire-extinguisher");
iconClassArray.push("fa-rocket");
iconClassArray.push("fa-maxcdn");
iconClassArray.push("fa-chevron-circle-left");
iconClassArray.push("fa-chevron-circle-right");
iconClassArray.push("fa-chevron-circle-up");
iconClassArray.push("fa-chevron-circle-down");
iconClassArray.push("fa-html5");
iconClassArray.push("fa-css3");
iconClassArray.push("fa-anchor");
iconClassArray.push("fa-unlock-alt");
iconClassArray.push("fa-bullseye");
iconClassArray.push("fa-ellipsis-h");
iconClassArray.push("fa-ellipsis-v");
iconClassArray.push("fa-rss-square");
iconClassArray.push("fa-play-circle");
iconClassArray.push("fa-ticket");
iconClassArray.push("fa-minus-square");
iconClassArray.push("fa-minus-square-o");
iconClassArray.push("fa-level-up");
iconClassArray.push("fa-level-down");
iconClassArray.push("fa-check-square");
iconClassArray.push("fa-pencil-square");
iconClassArray.push("fa-external-link-square");
iconClassArray.push("fa-share-square");
iconClassArray.push("fa-compass");
iconClassArray.push("fa-caret-square-o-down");
iconClassArray.push("fa-caret-square-o-up");
iconClassArray.push("fa-caret-square-o-right");
iconClassArray.push("fa-eur");
iconClassArray.push("fa-gbp");
iconClassArray.push("fa-usd");
iconClassArray.push("fa-inr");
iconClassArray.push("fa-jpy");
iconClassArray.push("fa-rub");
iconClassArray.push("fa-krw");
iconClassArray.push("fa-btc");
iconClassArray.push("fa-file");
iconClassArray.push("fa-file-text");
iconClassArray.push("fa-sort-alpha-asc");
iconClassArray.push("fa-sort-alpha-desc");
iconClassArray.push("fa-sort-amount-asc");
iconClassArray.push("fa-sort-amount-desc");
iconClassArray.push("fa-sort-numeric-asc");
iconClassArray.push("fa-sort-numeric-desc");
iconClassArray.push("fa-thumbs-up");
iconClassArray.push("fa-thumbs-down");
iconClassArray.push("fa-youtube-square");
iconClassArray.push("fa-youtube");
iconClassArray.push("fa-xing");
iconClassArray.push("fa-xing-square");
iconClassArray.push("fa-youtube-play");
iconClassArray.push("fa-dropbox");
iconClassArray.push("fa-stack-overflow");
iconClassArray.push("fa-instagram");
iconClassArray.push("fa-flickr");
iconClassArray.push("fa-adn");
iconClassArray.push("fa-bitbucket");
iconClassArray.push("fa-bitbucket-square");
iconClassArray.push("fa-tumblr");
iconClassArray.push("fa-tumblr-square");
iconClassArray.push("fa-long-arrow-down");
iconClassArray.push("fa-long-arrow-up");
iconClassArray.push("fa-long-arrow-left");
iconClassArray.push("fa-long-arrow-right");
iconClassArray.push("fa-apple");
iconClassArray.push("fa-windows");
iconClassArray.push("fa-android");
iconClassArray.push("fa-linux");
iconClassArray.push("fa-dribbble");
iconClassArray.push("fa-skype");
iconClassArray.push("fa-foursquare");
iconClassArray.push("fa-trello");
iconClassArray.push("fa-female");
iconClassArray.push("fa-male");
iconClassArray.push("fa-gittip");
iconClassArray.push("fa-sun-o");
iconClassArray.push("fa-moon-o");
iconClassArray.push("fa-archive");
iconClassArray.push("fa-bug");
iconClassArray.push("fa-vk");
iconClassArray.push("fa-weibo");
iconClassArray.push("fa-renren");
iconClassArray.push("fa-pagelines");
iconClassArray.push("fa-stack-exchange");
iconClassArray.push("fa-arrow-circle-o-right");
iconClassArray.push("fa-arrow-circle-o-left");
iconClassArray.push("fa-caret-square-o-left");
iconClassArray.push("fa-dot-circle-o");
iconClassArray.push("fa-wheelchair");
iconClassArray.push("fa-vimeo-square");
iconClassArray.push("fa-try");
iconClassArray.push("fa-plus-square-o");
iconClassArray.push("fa-space-shuttle");
iconClassArray.push("fa-slack");
iconClassArray.push("fa-envelope-square");
iconClassArray.push("fa-wordpress");
iconClassArray.push("fa-openid");
iconClassArray.push("fa-university");
iconClassArray.push("fa-graduation-cap");
iconClassArray.push("fa-yahoo");
iconClassArray.push("fa-google");
iconClassArray.push("fa-reddit");
iconClassArray.push("fa-reddit-square");
iconClassArray.push("fa-stumbleupon-circle");
iconClassArray.push("fa-stumbleupon");
iconClassArray.push("fa-delicious");
iconClassArray.push("fa-digg");
iconClassArray.push("fa-pied-piper");
iconClassArray.push("fa-pied-piper-alt");
iconClassArray.push("fa-drupal");
iconClassArray.push("fa-joomla");
iconClassArray.push("fa-language");
iconClassArray.push("fa-fax");
iconClassArray.push("fa-building");
iconClassArray.push("fa-child");
iconClassArray.push("fa-paw");
iconClassArray.push("fa-spoon");
iconClassArray.push("fa-cube");
iconClassArray.push("fa-cubes");
iconClassArray.push("fa-behance");
iconClassArray.push("fa-behance-square");
iconClassArray.push("fa-steam");
iconClassArray.push("fa-steam-square");
iconClassArray.push("fa-recycle");
iconClassArray.push("fa-car");
iconClassArray.push("fa-taxi");
iconClassArray.push("fa-tree");
iconClassArray.push("fa-spotify");
iconClassArray.push("fa-deviantart");
iconClassArray.push("fa-soundcloud");
iconClassArray.push("fa-database");
iconClassArray.push("fa-file-pdf-o");
iconClassArray.push("fa-file-word-o");
iconClassArray.push("fa-file-excel-o");
iconClassArray.push("fa-file-powerpoint-o");
iconClassArray.push("fa-file-image-o");
iconClassArray.push("fa-file-archive-o");
iconClassArray.push("fa-file-audio-o");
iconClassArray.push("fa-file-video-o");
iconClassArray.push("fa-file-code-o");
iconClassArray.push("fa-vine");
iconClassArray.push("fa-codepen");
iconClassArray.push("fa-jsfiddle");
iconClassArray.push("fa-life-ring");
iconClassArray.push("fa-circle-o-notch");
iconClassArray.push("fa-rebel");
iconClassArray.push("fa-empire");
iconClassArray.push("fa-git-square");
iconClassArray.push("fa-git");
iconClassArray.push("fa-hacker-news");
iconClassArray.push("fa-tencent-weibo");
iconClassArray.push("fa-qq");
iconClassArray.push("fa-weixin");
iconClassArray.push("fa-paper-plane");
iconClassArray.push("fa-paper-plane-o");
iconClassArray.push("fa-history");
iconClassArray.push("fa-circle-thin");
iconClassArray.push("fa-header");
iconClassArray.push("fa-paragraph");
iconClassArray.push("fa-sliders");
iconClassArray.push("fa-share-alt");
iconClassArray.push("fa-share-alt-square");
iconClassArray.push("fa-bomb");
iconClassArray.push("fa-futbol-o");
iconClassArray.push("fa-tty");
iconClassArray.push("fa-binoculars");
iconClassArray.push("fa-plug");
iconClassArray.push("fa-slideshare");
iconClassArray.push("fa-twitch");
iconClassArray.push("fa-yelp");
iconClassArray.push("fa-newspaper-o");
iconClassArray.push("fa-wifi");
iconClassArray.push("fa-calculator");
iconClassArray.push("fa-paypal");
iconClassArray.push("fa-google-wallet");
iconClassArray.push("fa-cc-visa");
iconClassArray.push("fa-cc-mastercard");
iconClassArray.push("fa-cc-discover");
iconClassArray.push("fa-cc-amex");
iconClassArray.push("fa-cc-paypal");
iconClassArray.push("fa-cc-stripe");
iconClassArray.push("fa-bell-slash");
iconClassArray.push("fa-bell-slash-o");
iconClassArray.push("fa-trash");
iconClassArray.push("fa-copyright");
iconClassArray.push("fa-at");
iconClassArray.push("fa-eyedropper");
iconClassArray.push("fa-paint-brush");
iconClassArray.push("fa-birthday-cake");
iconClassArray.push("fa-area-chart");
iconClassArray.push("fa-pie-chart");
iconClassArray.push("fa-line-chart");
iconClassArray.push("fa-lastfm");
iconClassArray.push("fa-lastfm-square");
iconClassArray.push("fa-toggle-off");
iconClassArray.push("fa-toggle-on");
iconClassArray.push("fa-bicycle");
iconClassArray.push("fa-bus");
iconClassArray.push("fa-ioxhost");
iconClassArray.push("fa-angellist");
iconClassArray.push("fa-cc");
iconClassArray.push("fa-ils");
iconClassArray.push("fa-meanpath");

  
  if($tempEl.find('.optionsIconsContainer').find('input').length == 0){
     
     
     for(var k=0;k<iconClassArray.length;k++){
          tempHTML = '';
          tempHTML += '<div class="col-xs-2">'+
                                '<div class="radio">'+
                                    '<label><input type="radio" name="optradio"><i class="fa ' + iconClassArray[k] + '"></i></label>'+
                                '</div>'+
                     '</div>' ;
          $tempEl.find('.optionsIconsContainer').append(tempHTML);
     }
  }



}



$( document ).on( 'click', '#socialSEO', function () {

var $modalEdit = $('#seoEdit');

if ( !$modalEdit.hasClass('in') ){
    
    $('#seoEdit').off( "click", ".seoEditApply");

}


$modalEdit.find( $('input[type="text"]')).val('');
$modalEdit.find( $('input[type="TextBox"]')).val('');

$modalEdit.find('input[name=optradio]').removeAttr('checked');

$('#seoEdit').modal('show');

$('#seoEdit').on( "click", ".seoEditApply", function(e) { 
   

   var $seoSettingsDiv = $('#seoSettings');
   $seoSettingsDiv.attr('data-value', 'true');

   var tempHTML = '';
   var tempDivHTML = '';

   var googleAuthor = $('#seoEdit').find('.googleAuthor').val();

   if ( googleAuthor.trim() != '' && googleAuthor != 'undefined' && googleAuthor != null ) {
        tempHTML = "<link rel='author' href='" + googleAuthor + "'>";
        tempDivHTML = '<div class="googleAuthor" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var googlePublisher = $('#seoEdit').find('.googlePublisher').val();

   if ( googlePublisher.trim() != '' && googlePublisher != 'undefined' && googlePublisher != null ) {
        tempHTML = "<link rel='publisher' href='" + googlePublisher + "'>"; 
        tempDivHTML = '<div class="googlePublisher" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var schemaName = $('#seoEdit').find('.schemaName').val();

   if ( schemaName.trim() != '' && schemaName != 'undefined' && schemaName != null ) {
        tempHTML = "<meta itemprop='name' content='" + schemaName + "'>";
        tempDivHTML = '<div class="schemaName" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var schemaDescription = $('#seoEdit').find('.schemaDescription').val();

   if ( schemaDescription.trim() != '' && schemaDescription != 'undefined' && schemaDescription != null ) {
        tempHTML = "<meta itemprop='description' content='" + schemaDescription + "'>";
        tempDivHTML = '<div class="schemaDescription" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var schemaImage = $('#seoEdit').find('.schemaImage').val();

   if ( schemaImage.trim() != '' && schemaImage != 'undefined' && schemaImage != null ) {
        tempHTML = "<meta itemprop='image' content='" + schemaImage + "'>";
        tempDivHTML = '<div class="schemaImage" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterCard = $('#seoEdit').find('.twitterCard').val();

   if ( twitterCard.trim() != '' && twitterCard != 'undefined' && twitterCard != null ) {
        tempHTML = "<meta name='twitter:card' content='" + twitterCard + "'>";
        tempDivHTML = '<div class="twitterCard" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterSite = $('#seoEdit').find('.twitterSite').val();

   if ( twitterSite.trim() != '' && twitterSite != 'undefined' && twitterSite != null ) {
        tempHTML = "<meta name='twitter:site' content='" + twitterSite + "'>";
        tempDivHTML = '<div class="twitterSite" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterCreator = $('#seoEdit').find('.twitterCreator').val();

   if ( twitterCreator.trim() != '' && twitterCreator != 'undefined' && twitterCreator != null ) {
        tempHTML = "<meta name='twitter:creator' content='" + twitterCreator + "'>";
        tempDivHTML = '<div class="twitterCreator" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterTitle = $('#seoEdit').find('.twitterTitle').val();

   if ( twitterTitle.trim() != '' && twitterTitle != 'undefined' && twitterTitle != null ) {
        tempHTML = "<meta name='twitter:title' content='" + twitterTitle + "'>";
        tempDivHTML = '<div class="twitterTitle" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterDescription = $('#seoEdit').find('.twitterDescription').val();

   if ( twitterDescription.trim() != '' && twitterDescription != 'undefined' && twitterDescription != null ) {
        tempHTML = "<meta name='twitter:description' content='" + twitterDescription + "'>";
        tempDivHTML = '<div class="twitterDescription" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterImage = $('#seoEdit').find('.twitterImage').val();

   if ( twitterImage.trim() != '' && twitterImage != 'undefined' && twitterImage != null ) {
        tempHTML = "<meta name='twitter:image:src' content='" + twitterImage + "'>";
        tempDivHTML = '<div class="twitterImage" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var twitterPlayer = $('#seoEdit').find('.twitterPlayer').val();

   if ( twitterPlayer.trim() != '' && twitterPlayer != 'undefined' && twitterPlayer != null ) {
        tempHTML = "<meta name='twitter:player' content='" + twitterPlayer + "'>";
        tempDivHTML = '<div class="twitterPlayer" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbURL = $('#seoEdit').find('.fbURL').val();

   if ( fbURL.trim() != '' && fbURL != 'undefined' && fbURL != null ) {
        tempHTML = "<meta property='og:url' content='" + fbURL + "'>";
        tempDivHTML = '<div class="fbURL" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbTitle = $('#seoEdit').find('.fbTitle').val();

   if ( fbTitle.trim() != '' && fbTitle != 'undefined' && fbTitle != null ) {
        tempHTML = "<meta property='og:title' content='" + fbTitle + "'>";
        tempDivHTML = '<div class="fbTitle" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbDescription = $('#seoEdit').find('.fbDescription').val();

   if ( fbDescription.trim() != '' && fbDescription != 'undefined' && fbDescription != null ) {
        tempHTML = "<meta property='og:description' content='" + fbDescription + "'>";
        tempDivHTML = '<div class="fbDescription" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbImage = $('#seoEdit').find('.fbImage').val();

   if ( fbImage.trim() != '' && fbImage != 'undefined' && fbImage != null ) {
        tempHTML = "<meta property='og:image' content='" + fbImage + "'>";
        tempDivHTML = '<div class="fbImage" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbSiteName = $('#seoEdit').find('.fbSiteName').val();

   if ( fbSiteName.trim() != '' && fbSiteName != 'undefined' && fbSiteName != null ) {
        tempHTML = "<meta property='og:site_name' content='" + fbSiteName + "'>";
        tempDivHTML = '<div class="fbSiteName" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbAdminsID = $('#seoEdit').find('.fbAdminsID').val();

   if ( fbAdminsID.trim() != '' && fbAdminsID != 'undefined' && fbAdminsID != null ) {
        tempHTML = "<meta property='fb:admins' content='" + fbAdminsID + "'>";
        tempDivHTML = '<div class="fbAdminsID" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbAppID = $('#seoEdit').find('.fbAppID').val();

   if ( fbAppID.trim() != '' && fbAppID != 'undefined' && fbAppID != null ) {
        tempHTML = "<meta property='fb:app_id' content='" + fbAppID + "'>";
        tempDivHTML = '<div class="fbAppID" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbType = $('#seoEdit').find('.fbType').val();

   if ( fbType.trim() != '' && fbType != 'undefined' && fbType != null ) {
        tempHTML = "<meta property='og:type' content='" + fbType + "'>";
        tempDivHTML = '<div class="fbType" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbLocale = $('#seoEdit').find('.fbLocale').val();

   if ( fbLocale.trim() != '' && fbLocale != 'undefined' && fbLocale != null ) {
        tempHTML = "<meta property='og:locale' content='" + fbLocale + "'>";
        tempDivHTML = '<div class="fbLocale" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbAudio = $('#seoEdit').find('.fbAudio').val();

   if ( fbAudio.trim() != '' && fbAudio != 'undefined' && fbAudio != null ) {
        tempHTML = "<meta property='og:audio' content='" + fbAudio + "'>";
        tempDivHTML = '<div class="fbAudio" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }

   var fbVideo = $('#seoEdit').find('.fbVideo').val();

   if ( fbVideo.trim() != '' && fbVideo != 'undefined' && fbVideo != null ) {
        tempHTML = "<meta property='og:video' content='" + fbVideo + "'>";
        tempDivHTML = '<div class="fbVideo" data-value="' + tempHTML + '"></div>';
        $seoSettingsDiv.append(tempDivHTML);
   }




});

});



$( document ).on( 'click', '#bodySettingsEl', function () {

var $modalEdit = $('#bodySettingsEdit');

if ( !$modalEdit.hasClass('in') ){
    $('#bodySettingsEdit').off( "click", "#bodySettingsTextColorBtn");
    $('#bodySettingsEdit').off( "click", ".bodySettingSelectBackgroundColor");
    $('#bodySettingsEdit').off( "click", ".bodySettingsEditApply");

    
}


$modalEdit.find( $('input[type="text"]')).val('');
$modalEdit.find( $('input[type="TextBox"]')).val('');

$modalEdit.find('input[name=optradio]').removeAttr('checked');


$modalEdit.find("#bodySettingsColorPicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 10,
    preferredFormat: "rgb",
    showAlpha: true,
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {

      
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});


$('#bodySettingsEdit').modal('show');

$('#bodySettingsEdit').on( "click", "#bodySettingsTextColorBtn", function(e) { 
        

        var colorValText = $modalEdit.find("#bodySettingsColorPicker").spectrum("get");
        var tempForCSS = colorValText + '!important'
        $modalEdit.find("#bodySettingsTextColorPickerBox").css({'background-color':tempForCSS});
        $modalEdit.find("#bodySettingsTextColorPickerBox").val(colorValText);
});

$('#bodySettingsEdit').on( "click", ".bodySettingSelectBackgroundColor", function(e) { 
        

        var colorValText = $modalEdit.find("#bodySettingsColorPicker").spectrum("get");
        var tempForCSS = colorValText + '!important'
        $modalEdit.find("#bodySettingsBackgroundColorPickerBox").css({'background-color':tempForCSS});
        $modalEdit.find("#bodySettingsBackgroundColorPickerBox").val(colorValText);
});

$('#bodySettingsEdit').on( "change", "#modalImageURFile", function(e) { 
      

          var imgVal = $modalEdit.find('#modalImageURFile').val(); 
          if (imgVal != ''){

            var startA = imgVal.lastIndexOf("\\");

            var fileNameA = imgVal.substring(startA + 1);
            

            var tempA = 'images/' + fileNameA;
            
            
            var start = tempA.lastIndexOf("\\");

            var fileName = tempA.substring(start + 1);
            

            var loc = window.location;
            
            var pathName = loc.pathname;
            
            var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
            

            
            var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
            

            var windProtocol = window.location.protocol;
            var windHost = window.location.host;
            var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;
            
            
            var temp = filePath + fileName;
            

            $modalEdit.find('#bodySettingsBackgroundImageURLFileBox').val(temp);


          }

       
});


$('#bodySettingsEdit').on( "click", ".bodySettingsEditApply", function(e) { 
   
    

    if ( $('style.bodySettingsStyles').length > 0 ) {
         $('style.bodySettingsStyles').remove();
          headFrame.find('style.bodySettingsStyles').remove();

          var tempTextForStyle = '<style type="text/css" class="bodySettingsStyles">'+
                                   '.content-frame {';
          
          var bodyColor = $('#bodySettingsEdit').find('#bodySettingsTextColorPickerBox').val();
          if (bodyColor != '' && bodyColor != ' ' && bodyColor != 'undefined' && bodyColor != null ){
                  tempTextForStyle += 'color:' + bodyColor +';';
          }     

          var bodyFontSize = $('#bodySettingsEdit').find('.bodySettingsFontSize').val();
          if (bodyFontSize != '' && bodyFontSize != ' ' && bodyFontSize != 'undefined' && bodyFontSize != null ){
                  tempTextForStyle += 'font-size:' + bodyFontSize +';';
          }   

          var bodyFontStyle = $('#bodySettingsEdit').find('.bodySettingsFontStyle').val();
          if (bodyFontStyle != '' && bodyFontStyle != ' ' && bodyFontStyle != 'undefined' && bodyFontStyle != null ){
                  tempTextForStyle += 'font-style:' + bodyFontStyle +';';
          }   

          var bodyFontFamily = $('#bodySettingsEdit').find('.bodySettingsFontFamily').val();
          if (bodyFontFamily != '' && bodyFontFamily != ' ' && bodyFontFamily != 'undefined' && bodyFontFamily != null ){
                  tempTextForStyle += 'font-family:' + bodyFontFamily +';';
          }   

          var bodyFontWeight = $('#bodySettingsEdit').find('.bodySettingsFontWeight').val();
          if (bodyFontWeight != '' && bodyFontWeight != ' ' && bodyFontWeight != 'undefined' && bodyFontWeight != null ){
                  tempTextForStyle += 'font-weight:' + bodyFontWeight +';';
          }   

          var bodyLineHeight = $('#bodySettingsEdit').find('.bodySettingsLineHeight').val();
          if (bodyLineHeight != '' && bodyLineHeight != ' ' && bodyLineHeight != 'undefined' && bodyLineHeight != null ){
                  tempTextForStyle += 'line-height:' + bodyLineHeight +';';
          }   

          var bodyTextAlign = $('#bodySettingsEdit').find('.bodySettingsTextAlign').val();
          if (bodyTextAlign != '' && bodyTextAlign != ' ' && bodyTextAlign != 'undefined' && bodyTextAlign != null ){
                  tempTextForStyle += 'text-align:' + bodyTextAlign +';';
          }   

          var bodyTextDecoration = $('#bodySettingsEdit').find('.bodySettingsTextDecoration').val();
          if (bodyTextDecoration != '' && bodyTextDecoration != ' ' && bodyTextDecoration != 'undefined' && bodyTextDecoration != null ){
                  tempTextForStyle += 'text-decoration:' + bodyTextDecoration +';';
          }   

          var bodyTextTransform = $('#bodySettingsEdit').find('.bodySettingsTextTransform').val();
          if (bodyTextTransform != '' && bodyTextTransform != ' ' && bodyTextTransform != 'undefined' && bodyTextTransform != null ){
                  tempTextForStyle += 'text-transform:' + bodyTextTransform +';';
          }   

          var bodyWhiteSpace = $('#bodySettingsEdit').find('.bodySettingsWhiteSpace').val();
          if (bodyWhiteSpace != '' && bodyWhiteSpace != ' ' && bodyWhiteSpace != 'undefined' && bodyWhiteSpace != null ){
                  tempTextForStyle += 'white-space:' + bodyWhiteSpace +';';
          }   

          var bodyVerticalAlign = $('#bodySettingsEdit').find('.bodySettingsVerticalAlign').val();
          if (bodyVerticalAlign != '' && bodyVerticalAlign != ' ' && bodyVerticalAlign != 'undefined' && bodyVerticalAlign != null ){
                  tempTextForStyle += 'vertical-align:' + bodyVerticalAlign +';';
          }   




          var bodySettingBackgroundColor = $('#bodySettingsEdit').find('#bodySettingsBackgroundColorPickerBox').val();
          if (bodySettingBackgroundColor != '' && bodySettingBackgroundColor != ' ' && bodySettingBackgroundColor != 'undefined' && bodySettingBackgroundColor != null ){
                  tempTextForStyle += 'background-color:' + bodySettingBackgroundColor +';';
          }    

          var bodySettingBackgroundImage = $('#bodySettingsEdit').find('#bodySettingsBackgroundImageURLFileBox').val();
          if (bodySettingBackgroundImage != '' && bodySettingBackgroundImage != ' ' && bodySettingBackgroundImage != 'undefined' && bodySettingBackgroundImage != null ){
                  tempTextForStyle += 'background-image:url(' + bodySettingBackgroundImage +');';
          }             

          var bodySettingBackPosition = $('#bodySettingsEdit').find('.bodySettingsBackgroundPosition').val();
          if (bodySettingBackPosition != '' && bodySettingBackPosition != ' ' && bodySettingBackPosition != 'undefined' && bodySettingBackPosition != null ){
                  tempTextForStyle += 'background-position:' + bodySettingBackPosition +';';
          }   

          var bodySettingBackSize = $('#bodySettingsEdit').find('.bodySettingsBackgroundSize').val();
          if (bodySettingBackSize != '' && bodySettingBackSize != ' ' && bodySettingBackSize != 'undefined' && bodySettingBackSize != null ){
                  tempTextForStyle += 'background-size:' + bodySettingBackSize +';';
          }   

          var bodySettingBackClip = $('#bodySettingsEdit').find('.bodySettingsBackgroundClip').val();
          if (bodySettingBackClip != '' && bodySettingBackClip != ' ' && bodySettingBackClip != 'undefined' && bodySettingBackClip != null ){
                  tempTextForStyle += 'background-clip:' + bodySettingBackClip +';';
          }   

          var bodySettingBackRepeat = $('#bodySettingsEdit').find('.bodySettingsBackgroundRepeat').val();
          if (bodySettingBackRepeat != '' && bodySettingBackRepeat != ' ' && bodySettingBackRepeat != 'undefined' && bodySettingBackRepeat != null ){
                  tempTextForStyle += 'background-repeat:' + bodySettingBackRepeat +';';
          }   

          var bodySettingBackOrigin = $('#bodySettingsEdit').find('.bodySettingsBackgroundOrigin').val();
          if (bodySettingBackOrigin != '' && bodySettingBackOrigin != ' ' && bodySettingBackOrigin != 'undefined' && bodySettingBackOrigin != null ){
                  tempTextForStyle += 'background-origin:' + bodySettingBackOrigin +';';
          }        
                                             
          tempTextForStyle += '}';                        


          tempTextForStyle += '</style>'; 
          
          $(tempTextForStyle).appendTo('head');




          var tempTextForStyleFrame = '<style type="text/css" class="bodySettingsStyles">'+
                                   'body {';


          var bodyColor = $('#bodySettingsEdit').find('#bodySettingsTextColorPickerBox').val();
          if (bodyColor != '' && bodyColor != ' ' && bodyColor != 'undefined' && bodyColor != null ){
                  tempTextForStyleFrame += 'color:' + bodyColor +';';
          }     

          var bodyFontSize = $('#bodySettingsEdit').find('.bodySettingsFontSize').val();
          if (bodyFontSize != '' && bodyFontSize != ' ' && bodyFontSize != 'undefined' && bodyFontSize != null ){
                  tempTextForStyleFrame += 'font-size:' + bodyFontSize +';';
          }   

          var bodyFontStyle = $('#bodySettingsEdit').find('.bodySettingsFontStyle').val();
          if (bodyFontStyle != '' && bodyFontStyle != ' ' && bodyFontStyle != 'undefined' && bodyFontStyle != null ){
                  tempTextForStyleFrame += 'font-style:' + bodyFontStyle +';';
          }   

          var bodyFontFamily = $('#bodySettingsEdit').find('.bodySettingsFontFamily').val();
          if (bodyFontFamily != '' && bodyFontFamily != ' ' && bodyFontFamily != 'undefined' && bodyFontFamily != null ){
                  tempTextForStyleFrame += 'font-family:' + bodyFontFamily +';';
          }   

          var bodyFontWeight = $('#bodySettingsEdit').find('.bodySettingsFontWeight').val();
          if (bodyFontWeight != '' && bodyFontWeight != ' ' && bodyFontWeight != 'undefined' && bodyFontWeight != null ){
                  tempTextForStyleFrame += 'font-weight:' + bodyFontWeight +';';
          }   

          var bodyLineHeight = $('#bodySettingsEdit').find('.bodySettingsLineHeight').val();
          if (bodyLineHeight != '' && bodyLineHeight != ' ' && bodyLineHeight != 'undefined' && bodyLineHeight != null ){
                  tempTextForStyleFrame += 'line-height:' + bodyLineHeight +';';
          }   

          var bodyTextAlign = $('#bodySettingsEdit').find('.bodySettingsTextAlign').val();
          if (bodyTextAlign != '' && bodyTextAlign != ' ' && bodyTextAlign != 'undefined' && bodyTextAlign != null ){
                  tempTextForStyleFrame += 'text-align:' + bodyTextAlign +';';
          }   

          var bodyTextDecoration = $('#bodySettingsEdit').find('.bodySettingsTextDecoration').val();
          if (bodyTextDecoration != '' && bodyTextDecoration != ' ' && bodyTextDecoration != 'undefined' && bodyTextDecoration != null ){
                  tempTextForStyleFrame += 'text-decoration:' + bodyTextDecoration +';';
          }   

          var bodyTextTransform = $('#bodySettingsEdit').find('.bodySettingsTextTransform').val();
          if (bodyTextTransform != '' && bodyTextTransform != ' ' && bodyTextTransform != 'undefined' && bodyTextTransform != null ){
                  tempTextForStyleFrame += 'text-transform:' + bodyTextTransform +';';
          }   

          var bodyWhiteSpace = $('#bodySettingsEdit').find('.bodySettingsWhiteSpace').val();
          if (bodyWhiteSpace != '' && bodyWhiteSpace != ' ' && bodyWhiteSpace != 'undefined' && bodyWhiteSpace != null ){
                  tempTextForStyleFrame += 'white-space:' + bodyWhiteSpace +';';
          }   

          var bodyVerticalAlign = $('#bodySettingsEdit').find('.bodySettingsVerticalAlign').val();
          if (bodyVerticalAlign != '' && bodyVerticalAlign != ' ' && bodyVerticalAlign != 'undefined' && bodyVerticalAlign != null ){
                  tempTextForStyleFrame += 'vertical-align:' + bodyVerticalAlign +';';
          }   




          var bodySettingBackgroundColor = $('#bodySettingsEdit').find('#bodySettingsBackgroundColorPickerBox').val();
          if (bodySettingBackgroundColor != '' && bodySettingBackgroundColor != ' ' && bodySettingBackgroundColor != 'undefined' && bodySettingBackgroundColor != null ){
                  tempTextForStyleFrame += 'background-color:' + bodySettingBackgroundColor +';';
          }    

          var bodySettingBackgroundImage = $('#bodySettingsEdit').find('#bodySettingsBackgroundImageURLFileBox').val();
          if (bodySettingBackgroundImage != '' && bodySettingBackgroundImage != ' ' && bodySettingBackgroundImage != 'undefined' && bodySettingBackgroundImage != null ){
                  tempTextForStyleFrame += 'background-image:url(' + bodySettingBackgroundImage +');';
          }             

          var bodySettingBackPosition = $('#bodySettingsEdit').find('.bodySettingsBackgroundPosition').val();
          if (bodySettingBackPosition != '' && bodySettingBackPosition != ' ' && bodySettingBackPosition != 'undefined' && bodySettingBackPosition != null ){
                  tempTextForStyleFrame += 'background-position:' + bodySettingBackPosition +';';
          }   

          var bodySettingBackSize = $('#bodySettingsEdit').find('.bodySettingsBackgroundSize').val();
          if (bodySettingBackSize != '' && bodySettingBackSize != ' ' && bodySettingBackSize != 'undefined' && bodySettingBackSize != null ){
                  tempTextForStyleFrame += 'background-size:' + bodySettingBackSize +';';
          }   

          var bodySettingBackClip = $('#bodySettingsEdit').find('.bodySettingsBackgroundClip').val();
          if (bodySettingBackClip != '' && bodySettingBackClip != ' ' && bodySettingBackClip != 'undefined' && bodySettingBackClip != null ){
                  tempTextForStyleFrame += 'background-clip:' + bodySettingBackClip +';';
          }   

          var bodySettingBackRepeat = $('#bodySettingsEdit').find('.bodySettingsBackgroundRepeat').val();
          if (bodySettingBackRepeat != '' && bodySettingBackRepeat != ' ' && bodySettingBackRepeat != 'undefined' && bodySettingBackRepeat != null ){
                  tempTextForStyleFrame += 'background-repeat:' + bodySettingBackRepeat +';';
          }   

          var bodySettingBackOrigin = $('#bodySettingsEdit').find('.bodySettingsBackgroundOrigin').val();
          if (bodySettingBackOrigin != '' && bodySettingBackOrigin != ' ' && bodySettingBackOrigin != 'undefined' && bodySettingBackOrigin != null ){
                  tempTextForStyleFrame += 'background-origin:' + bodySettingBackOrigin +';';
          }                  
                                             
          tempTextForStyleFrame += '}'; 

          tempTextForStyleFrame += '</style>'; 
          $(tempTextForStyleFrame).appendTo(headFrame);

                                        
    }else{
          $('style.bodySettingsStyles').remove();
          headFrame.find('style.bodySettingsStyles').remove();

          var tempTextForStyle = '<style type="text/css" class="bodySettingsStyles">'+
                                   '.content-frame {';
          
          var bodyColor = $('#bodySettingsEdit').find('#bodySettingsTextColorPickerBox').val();
          if (bodyColor != '' && bodyColor != ' ' && bodyColor != 'undefined' && bodyColor != null ){
                  tempTextForStyle += 'color:' + bodyColor +';';
          }     

          var bodyFontSize = $('#bodySettingsEdit').find('.bodySettingsFontSize').val();
          if (bodyFontSize != '' && bodyFontSize != ' ' && bodyFontSize != 'undefined' && bodyFontSize != null ){
                  tempTextForStyle += 'font-size:' + bodyFontSize +';';
          }   

          var bodyFontStyle = $('#bodySettingsEdit').find('.bodySettingsFontStyle').val();
          if (bodyFontStyle != '' && bodyFontStyle != ' ' && bodyFontStyle != 'undefined' && bodyFontStyle != null ){
                  tempTextForStyle += 'font-style:' + bodyFontStyle +';';
          }   

          var bodyFontFamily = $('#bodySettingsEdit').find('.bodySettingsFontFamily').val();
          if (bodyFontFamily != '' && bodyFontFamily != ' ' && bodyFontFamily != 'undefined' && bodyFontFamily != null ){
                  tempTextForStyle += 'font-family:' + bodyFontFamily +';';
          }   

          var bodyFontWeight = $('#bodySettingsEdit').find('.bodySettingsFontWeight').val();
          if (bodyFontWeight != '' && bodyFontWeight != ' ' && bodyFontWeight != 'undefined' && bodyFontWeight != null ){
                  tempTextForStyle += 'font-weight:' + bodyFontWeight +';';
          }   

          var bodyLineHeight = $('#bodySettingsEdit').find('.bodySettingsLineHeight').val();
          if (bodyLineHeight != '' && bodyLineHeight != ' ' && bodyLineHeight != 'undefined' && bodyLineHeight != null ){
                  tempTextForStyle += 'line-height:' + bodyLineHeight +';';
          }   

          var bodyTextAlign = $('#bodySettingsEdit').find('.bodySettingsTextAlign').val();
          if (bodyTextAlign != '' && bodyTextAlign != ' ' && bodyTextAlign != 'undefined' && bodyTextAlign != null ){
                  tempTextForStyle += 'text-align:' + bodyTextAlign +';';
          }   

          var bodyTextDecoration = $('#bodySettingsEdit').find('.bodySettingsTextDecoration').val();
          if (bodyTextDecoration != '' && bodyTextDecoration != ' ' && bodyTextDecoration != 'undefined' && bodyTextDecoration != null ){
                  tempTextForStyle += 'text-decoration:' + bodyTextDecoration +';';
          }   

          var bodyTextTransform = $('#bodySettingsEdit').find('.bodySettingsTextTransform').val();
          if (bodyTextTransform != '' && bodyTextTransform != ' ' && bodyTextTransform != 'undefined' && bodyTextTransform != null ){
                  tempTextForStyle += 'text-transform:' + bodyTextTransform +';';
          }   

          var bodyWhiteSpace = $('#bodySettingsEdit').find('.bodySettingsWhiteSpace').val();
          if (bodyWhiteSpace != '' && bodyWhiteSpace != ' ' && bodyWhiteSpace != 'undefined' && bodyWhiteSpace != null ){
                  tempTextForStyle += 'white-space:' + bodyWhiteSpace +';';
          }   

          var bodyVerticalAlign = $('#bodySettingsEdit').find('.bodySettingsVerticalAlign').val();
          if (bodyVerticalAlign != '' && bodyVerticalAlign != ' ' && bodyVerticalAlign != 'undefined' && bodyVerticalAlign != null ){
                  tempTextForStyle += 'vertical-align:' + bodyVerticalAlign +';';
          }   




          var bodySettingBackgroundColor = $('#bodySettingsEdit').find('#bodySettingsBackgroundColorPickerBox').val();
          if (bodySettingBackgroundColor != '' && bodySettingBackgroundColor != ' ' && bodySettingBackgroundColor != 'undefined' && bodySettingBackgroundColor != null ){
                  tempTextForStyle += 'background-color:' + bodySettingBackgroundColor +';';
          }    

          var bodySettingBackgroundImage = $('#bodySettingsEdit').find('#bodySettingsBackgroundImageURLFileBox').val();
          if (bodySettingBackgroundImage != '' && bodySettingBackgroundImage != ' ' && bodySettingBackgroundImage != 'undefined' && bodySettingBackgroundImage != null ){
                  tempTextForStyle += 'background-image:url(' + bodySettingBackgroundImage +');';
          }             

          var bodySettingBackPosition = $('#bodySettingsEdit').find('.bodySettingsBackgroundPosition').val();
          if (bodySettingBackPosition != '' && bodySettingBackPosition != ' ' && bodySettingBackPosition != 'undefined' && bodySettingBackPosition != null ){
                  tempTextForStyle += 'background-position:' + bodySettingBackPosition +';';
          }   

          var bodySettingBackSize = $('#bodySettingsEdit').find('.bodySettingsBackgroundSize').val();
          if (bodySettingBackSize != '' && bodySettingBackSize != ' ' && bodySettingBackSize != 'undefined' && bodySettingBackSize != null ){
                  tempTextForStyle += 'background-size:' + bodySettingBackSize +';';
          }   

          var bodySettingBackClip = $('#bodySettingsEdit').find('.bodySettingsBackgroundClip').val();
          if (bodySettingBackClip != '' && bodySettingBackClip != ' ' && bodySettingBackClip != 'undefined' && bodySettingBackClip != null ){
                  tempTextForStyle += 'background-clip:' + bodySettingBackClip +';';
          }   

          var bodySettingBackRepeat = $('#bodySettingsEdit').find('.bodySettingsBackgroundRepeat').val();
          if (bodySettingBackRepeat != '' && bodySettingBackRepeat != ' ' && bodySettingBackRepeat != 'undefined' && bodySettingBackRepeat != null ){
                  tempTextForStyle += 'background-repeat:' + bodySettingBackRepeat +';';
          }   

          var bodySettingBackOrigin = $('#bodySettingsEdit').find('.bodySettingsBackgroundOrigin').val();
          if (bodySettingBackOrigin != '' && bodySettingBackOrigin != ' ' && bodySettingBackOrigin != 'undefined' && bodySettingBackOrigin != null ){
                  tempTextForStyle += 'background-origin:' + bodySettingBackOrigin +';';
          }        
                                             
          tempTextForStyle += '}';                        


          tempTextForStyle += '</style>'; 
          
          $(tempTextForStyle).appendTo('head');




          var tempTextForStyleFrame = '<style type="text/css" class="bodySettingsStyles">'+
                                   'body {';


          var bodyColor = $('#bodySettingsEdit').find('#bodySettingsTextColorPickerBox').val();
          if (bodyColor != '' && bodyColor != ' ' && bodyColor != 'undefined' && bodyColor != null ){
                  tempTextForStyleFrame += 'color:' + bodyColor +';';
          }     

          var bodyFontSize = $('#bodySettingsEdit').find('.bodySettingsFontSize').val();
          if (bodyFontSize != '' && bodyFontSize != ' ' && bodyFontSize != 'undefined' && bodyFontSize != null ){
                  tempTextForStyleFrame += 'font-size:' + bodyFontSize +';';
          }   

          var bodyFontStyle = $('#bodySettingsEdit').find('.bodySettingsFontStyle').val();
          if (bodyFontStyle != '' && bodyFontStyle != ' ' && bodyFontStyle != 'undefined' && bodyFontStyle != null ){
                  tempTextForStyleFrame += 'font-style:' + bodyFontStyle +';';
          }   

          var bodyFontFamily = $('#bodySettingsEdit').find('.bodySettingsFontFamily').val();
          if (bodyFontFamily != '' && bodyFontFamily != ' ' && bodyFontFamily != 'undefined' && bodyFontFamily != null ){
                  tempTextForStyleFrame += 'font-family:' + bodyFontFamily +';';
          }   

          var bodyFontWeight = $('#bodySettingsEdit').find('.bodySettingsFontWeight').val();
          if (bodyFontWeight != '' && bodyFontWeight != ' ' && bodyFontWeight != 'undefined' && bodyFontWeight != null ){
                  tempTextForStyleFrame += 'font-weight:' + bodyFontWeight +';';
          }   

          var bodyLineHeight = $('#bodySettingsEdit').find('.bodySettingsLineHeight').val();
          if (bodyLineHeight != '' && bodyLineHeight != ' ' && bodyLineHeight != 'undefined' && bodyLineHeight != null ){
                  tempTextForStyleFrame += 'line-height:' + bodyLineHeight +';';
          }   

          var bodyTextAlign = $('#bodySettingsEdit').find('.bodySettingsTextAlign').val();
          if (bodyTextAlign != '' && bodyTextAlign != ' ' && bodyTextAlign != 'undefined' && bodyTextAlign != null ){
                  tempTextForStyleFrame += 'text-align:' + bodyTextAlign +';';
          }   

          var bodyTextDecoration = $('#bodySettingsEdit').find('.bodySettingsTextDecoration').val();
          if (bodyTextDecoration != '' && bodyTextDecoration != ' ' && bodyTextDecoration != 'undefined' && bodyTextDecoration != null ){
                  tempTextForStyleFrame += 'text-decoration:' + bodyTextDecoration +';';
          }   

          var bodyTextTransform = $('#bodySettingsEdit').find('.bodySettingsTextTransform').val();
          if (bodyTextTransform != '' && bodyTextTransform != ' ' && bodyTextTransform != 'undefined' && bodyTextTransform != null ){
                  tempTextForStyleFrame += 'text-transform:' + bodyTextTransform +';';
          }   

          var bodyWhiteSpace = $('#bodySettingsEdit').find('.bodySettingsWhiteSpace').val();
          if (bodyWhiteSpace != '' && bodyWhiteSpace != ' ' && bodyWhiteSpace != 'undefined' && bodyWhiteSpace != null ){
                  tempTextForStyleFrame += 'white-space:' + bodyWhiteSpace +';';
          }   

          var bodyVerticalAlign = $('#bodySettingsEdit').find('.bodySettingsVerticalAlign').val();
          if (bodyVerticalAlign != '' && bodyVerticalAlign != ' ' && bodyVerticalAlign != 'undefined' && bodyVerticalAlign != null ){
                  tempTextForStyleFrame += 'vertical-align:' + bodyVerticalAlign +';';
          }   




          var bodySettingBackgroundColor = $('#bodySettingsEdit').find('#bodySettingsBackgroundColorPickerBox').val();
          if (bodySettingBackgroundColor != '' && bodySettingBackgroundColor != ' ' && bodySettingBackgroundColor != 'undefined' && bodySettingBackgroundColor != null ){
                  tempTextForStyleFrame += 'background-color:' + bodySettingBackgroundColor +';';
          }    

          var bodySettingBackgroundImage = $('#bodySettingsEdit').find('#bodySettingsBackgroundImageURLFileBox').val();
          if (bodySettingBackgroundImage != '' && bodySettingBackgroundImage != ' ' && bodySettingBackgroundImage != 'undefined' && bodySettingBackgroundImage != null ){
                  tempTextForStyleFrame += 'background-image:url(' + bodySettingBackgroundImage +');';
          }             

          var bodySettingBackPosition = $('#bodySettingsEdit').find('.bodySettingsBackgroundPosition').val();
          if (bodySettingBackPosition != '' && bodySettingBackPosition != ' ' && bodySettingBackPosition != 'undefined' && bodySettingBackPosition != null ){
                  tempTextForStyleFrame += 'background-position:' + bodySettingBackPosition +';';
          }   

          var bodySettingBackSize = $('#bodySettingsEdit').find('.bodySettingsBackgroundSize').val();
          if (bodySettingBackSize != '' && bodySettingBackSize != ' ' && bodySettingBackSize != 'undefined' && bodySettingBackSize != null ){
                  tempTextForStyleFrame += 'background-size:' + bodySettingBackSize +';';
          }   

          var bodySettingBackClip = $('#bodySettingsEdit').find('.bodySettingsBackgroundClip').val();
          if (bodySettingBackClip != '' && bodySettingBackClip != ' ' && bodySettingBackClip != 'undefined' && bodySettingBackClip != null ){
                  tempTextForStyleFrame += 'background-clip:' + bodySettingBackClip +';';
          }   

          var bodySettingBackRepeat = $('#bodySettingsEdit').find('.bodySettingsBackgroundRepeat').val();
          if (bodySettingBackRepeat != '' && bodySettingBackRepeat != ' ' && bodySettingBackRepeat != 'undefined' && bodySettingBackRepeat != null ){
                  tempTextForStyleFrame += 'background-repeat:' + bodySettingBackRepeat +';';
          }   

          var bodySettingBackOrigin = $('#bodySettingsEdit').find('.bodySettingsBackgroundOrigin').val();
          if (bodySettingBackOrigin != '' && bodySettingBackOrigin != ' ' && bodySettingBackOrigin != 'undefined' && bodySettingBackOrigin != null ){
                  tempTextForStyleFrame += 'background-origin:' + bodySettingBackOrigin +';';
          }                  
                                             
          tempTextForStyleFrame += '}'; 

          tempTextForStyleFrame += '</style>'; 
          $(tempTextForStyleFrame).appendTo(headFrame);

    }



});


});

/**************************************** USER DEFINED CSS *************************************************/

$( document ).on( 'click', '#userDefCss', function () {

var $modalEdit = $('#userDefCssEdit');

$('#userDefCssEdit').find('#userDefCssEditInput').val('');


if ( $('style.userDefinedStyles').length > 0 ) {
      
      var $container = $('#userDefCssEdit').find('.userDefStylesExisting');
      $container.empty();
      $('style.userDefinedStyles').each(function(){
          var content = $(this).text();
          
          var numberID = $(this).attr('data-number');
          var exhtml =  '<div class="userDefCSSExistingParent">'+
                          '<div class="form-group" style="margin-top:10px;">' +
                            '<textarea class="form-control" rows="7" class="userDefCssExisting" data-number="' + numberID + '">' + content + '</textarea>' +
                         '</div>';
              exhtml +=    '<div class="text-center"><button type="button" class="btn btn-success userDefCSSExistingChange">Change</button></div>' +
                      '</div>';

                      

          $container.append($(exhtml));
      })
}




$('#userDefCssEdit').modal('show');

if ( !$modalEdit.hasClass('in') ){
    $('#userDefCssEdit').off( "click", ".userDefCssEditApply");
    $('#userDefCssEdit').off( "click", ".userDefCSSExistingChange");
}

$('#userDefCssEdit').on( "click", ".userDefCssEditApply", function(e) { 
   
     
     var customCSS = $('#userDefCssEdit').find('#userDefCssEditInput').val();
     

     if ( customCSS != '' && customCSS != ' ' && customCSS != 'undefined' && customCSS != null ){

            var existingNumber = 0;
            if ( $('style.userDefinedStyles').length > 0 ) {
                  existingNumber = $('style.userDefinedStyles').length;
            }
            existingNumber += 1;

            var tempHTML = '<style type="text/css" class="userDefinedStyles" data-number="' + existingNumber  + '">' + customCSS;
            tempHTML +=     '</style>';

            $(tempHTML).appendTo('head');
            $(tempHTML).appendTo(headFrame);
     }



});




$('#userDefCssEdit').on( "click", ".userDefCSSExistingChange", function(e) { 

var $current = $(e.target);
var $parent = $current.parent().closest('.userDefCSSExistingParent');
var $textarea = $parent.find('textarea');

var dataNumber = $textarea.attr('data-number');


var newContent = $textarea.val();


var temp = 'style.userDefinedStyles[data-number="' + dataNumber + '"]'
var $elementHead = $('head').find(temp);
$elementHead.html(newContent);



var $elementHeadFrame = headFrame.find(temp);
$elementHeadFrame.html(newContent);


});


});

/**************************************** USER DEFINED CSS *************************************************/


/**************************************** UPLOAD FONTS *************************************************/

$( document ).on( 'click', '#uploadFontsEv', function () {

var $modalEdit = $('#uploadFontsEdit');
$('#uploadFontsEdit').find('#fontsUploadAlertsContainer').empty();

$('#uploadFontsEdit').modal('show');

var loc = window.location;

var pathName = loc.pathname;

var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);


var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort + 'uploadFonts.php';

if ( !$('#uploadFontsEdit').find("#uploadFontsContainer").hasClass('dropzone') ) {

$('#uploadFontsEdit').find("#uploadFontsContainer").addClass('dropzone');
$('#uploadFontsEdit').find("#uploadFontsContainer").css({'margin-top':'20px','margin-bottom':'25px','background-color':'rgb(129, 178, 255)','border-style':'dotted',
                                                          'height':'300px', 'overflow-x':'hidden', 'overflow-y':'auto'});

$('#uploadFontsEdit').find("#uploadFontsContainer").dropzone({
 url: filePath,
 success: function (response) {
        
        var x = JSON.parse(response.xhr.responseText);
        

        var tempStart = x.imgTargetFile.indexOf("fonts");
        var tempEnd = x.imgTargetFile.length;
        var tempContent = x.imgTargetFile.substring(tempStart, tempEnd);
        
        

        var fontFamilyName = $('#uploadFontsEdit').find("#modalFontFamilyBox").val();
        if (fontFamilyName != "" && fontFamilyName != " " && fontFamilyName != "undefined" && fontFamilyName != null){
            var tempHTML = '';
            tempHTML += "<style type='text/css' class='fontFamilyStyles'>"+
                                           "@font-face {" + 
                                                "font-family:" + fontFamilyName + ";" +
                                                "src:url(" + tempContent + ");" +
                                                "}" +
                        "</style>";
          

          $(tempHTML).appendTo('head');
          $(tempHTML).appendTo(headFrame);

          
          var informHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Font uploaded successfully.'+
                          '</div>';
          
          $('#uploadFontsEdit').find('#fontsUploadAlertsContainer').html(informHTML);

        }else{
          var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Font uploaded but font family name was not specified.'+
                          '</div>';
          
          $('#uploadFontsEdit').find('#fontsUploadAlertsContainer').html(informHTML);
        }

 },
 error: function (response) {
    var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Font upload did not complete.'+
                          '</div>';
         
    $('#uploadFontsEdit').find('#fontsUploadAlertsContainer').html(informHTML);
 }

});

}

});
/**************************************** UPLOAD FONTS *************************************************/

/**************************************** UPLOAD VIDEOS ************************************************/

$( document ).on( 'click', '#uploadVideosEv', function () {

var $modalEdit = $('#uploadVideosEdit');

$('#uploadVideosEdit').find('#videoUploadAlertsContainer').empty();

$('#uploadVideosEdit').modal('show');
var loc = window.location;

var pathName = loc.pathname;

var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);


var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort + 'uploadVideos.php';


if ( !$('#uploadVideosEdit').find("#uploadVideosContainer").hasClass('dropzone') ) {

$('#uploadVideosEdit').find("#uploadVideosContainer").addClass('dropzone');
$('#uploadVideosEdit').find("#uploadVideosContainer").css({'margin-top':'20px','margin-bottom':'25px','background-color':'rgb(129, 178, 255)','border-style':'dotted',
                                                           'height':'300px', 'overflow-x':'hidden', 'overflow-y':'auto'});

$('#uploadVideosEdit').find("#uploadVideosContainer").dropzone({
 url: filePath, 
 success: function (response) {
        
        var x = JSON.parse(response.xhr.responseText);
        

        
        var informHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Video uploaded successfully.'+
                          '</div>';
          
          $('#uploadVideosEdit').find('#videoUploadAlertsContainer').html(informHTML);

        
 },
 error: function (response) {
        var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Video upload did not complete.'+
                          '</div>';
          
          $('#uploadVideosEdit').find('#videoUploadAlertsContainer').html(informHTML);

 }


});

}


});
/**************************************** UPLOAD VIDEOS *************************************************/


/**************************************** UPLOAD IMAGES *************************************************/

$( document ).on( 'click', '#uploadImagesEv', function () {

var $modalEdit = $('#uploadImagesEdit');

$('#uploadImagesEdit').find('#imageUploadAlertsContainer').empty();

$('#uploadImagesEdit').modal('show');
var loc = window.location;

var pathName = loc.pathname;

var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);


var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort + 'uploadImages.php';

if ( !$('#uploadImagesEdit').find("#uploadImagesContainer").hasClass('dropzone') ) {

$('#uploadImagesEdit').find("#uploadImagesContainer").addClass('dropzone');
$('#uploadImagesEdit').find("#uploadImagesContainer").css({'margin-top':'20px','margin-bottom':'25px','background-color':'rgb(129, 178, 255)','border-style':'dotted',
                                                           'height':'300px', 'overflow-x':'hidden', 'overflow-y':'auto'});

$('#uploadImagesEdit').find("#uploadImagesContainer").dropzone({
 url: filePath, 
 success: function (response) {
        
        var x = JSON.parse(response.xhr.responseText);
        
        
        var informHTML = '<div class="alert alert-success">'+
                              '<strong>Success!</strong> Image uploaded successfully.'+
                          '</div>';
          
          $('#uploadImagesEdit').find('#imageUploadAlertsContainer').html(informHTML);

        
 },
 error: function (response) {
        var informHTML = '<div class="alert alert-danger">'+
                              '<strong>Error!</strong> Image upload did not complete.'+
                          '</div>';
          
          $('#uploadImagesEdit').find('#imageUploadAlertsContainer').html(informHTML);

 }


});

}


});

/**************************************** UPLOAD IMAGES *************************************************/


/**************************************** DOWNLOAD TEMPLATE *************************************************/

$( document ).on( 'click', '#downloadTemplate', function () {

var $modalEdit = $('#downloadEdit');


if ( !$modalEdit.hasClass('in') ){
    $('#downloadEdit').off( "click", ".downloadEditApply");
}


$('#downloadEdit').modal('show');


$('#downloadEdit').on( "click", ".downloadEditApply", function(e) { 
   
     var websiteTitle = $('#downloadEdit').find('#websiteTitle').val();
     var websiteAuthor = $('#downloadEdit').find('#websiteAuthor').val();
     var websiteDescription = $('#downloadEdit').find('#websiteDescription').val();
     var websiteKeywords = $('#downloadEdit').find('#websiteKeywords').val();


  downloadTemplate(websiteTitle, websiteAuthor, websiteDescription, websiteKeywords);
  


});



});



function downloadTemplate(websiteTitle, websiteAuthor, websiteDescription, websiteKeywords){



if ( $('#content-frame').find('.carousel').length > 0 ) {
      
      applyEditMode();

}

if ( $(".preview-container").children().length > 0 ) {
   
}else{
    
    $(".preview-container").append( $('#content-frame').clone() );

}



  var $borderedContainer = $(".preview-container").find('.borderedContainer');
  $borderedContainer.removeClass('borderedContainer');
  $borderedContainer.removeClass('ui-droppable');
  $borderedContainer.removeAttr("data-id");
  $borderedContainer.removeAttr("style");
  $borderedContainer.find('.container-description').remove();
  $borderedContainer.find('.container-edit-icons').remove();
  

  
   var $borderedRowDroppable = $(".preview-container").find('.borderedRowDroppable');
   $borderedRowDroppable.removeClass('borderedRowDroppable');
   $borderedRowDroppable.removeClass('ui-droppable');
   $borderedRowDroppable.removeAttr("data-id");
   $borderedRowDroppable.removeAttr("style");
   $borderedRowDroppable.find('.row-description').remove();
   $borderedRowDroppable.find('.rowsingle-description').remove();
   $borderedRowDroppable.find('.row-edit').remove();
   $borderedRowDroppable.find('.row-delete').remove();

   
   $borderedRowDroppable.find('.borderedRowColDroppable').each(function() {
    $(this).removeClass('borderedRowColDroppable');
   $(this).removeClass('ui-droppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   });

   $(".preview-container").find('.colRow-edit-icons').remove();
   $(".preview-container").find('.row-edit-icons').remove();

  

  
  var $pElement = $(".preview-container").find('.pElement').each(function() {
        $(this).removeClass('borderedParagraph');

        $(this).removeClass('headElement');
        $(this).removeClass('parElement');
        $(this).removeClass('txtElement');
   
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.Medium').removeClass('Medium');     
        $(this).find('.Medium-rich').removeClass('Medium-rich');   

    
          var $child = $(this).find('.childOfBorderedParagraph');
          if ( $child.is('p')) {
    
        $(this).find('.paragraph-description').remove();
        $(this).find('.paragraph-edit-icons').remove();

        
        
         var $pEl = $(this).find('.childOfBorderedParagraph');

        

        $pEl.find('.medium-b').removeClass('medium-b');
        $pEl.find('.medium-u').removeClass('medium-u');
        $pEl.find('.medium-i').removeClass('medium-i');
        $pEl.find('.medium-strike').removeClass('medium-strike');

        $pEl.removeAttr("contenteditable");
        $pEl.find('br').removeAttr("contenteditable");
        
        $pEl.removeAttr("style");

        $(this).replaceWith($pEl );
        
      }else if ( $(this).find('.heading-description').length > 0 ){

        $(this).find('.heading-description').remove();
        $(this).find('.heading-edit-icons').remove();

        if( $(this).find('h1').length > 0 ){
          var $hEl = $(this).find('h1');
        }else if( $(this).find('h2').length > 0 ){
          var $hEl = $(this).find('h2');
        }if( $(this).find('h3').length > 0 ){
          var $hEl = $(this).find('h3');
        }if( $(this).find('h4').length > 0 ){
          var $hEl = $(this).find('h4');
        }

        

        $hEl.find('.medium-b').removeClass('medium-b');
        $hEl.find('.medium-u').removeClass('medium-u');
        $hEl.find('.medium-i').removeClass('medium-i');
        $hEl.find('.medium-strike').removeClass('medium-strike');


        $hEl.removeAttr("contenteditable");
        $hEl.find('br').removeAttr("contenteditable");
        
        $hEl.removeAttr("style");

        $(this).replaceWith($hEl );
      }else if($(this).find('span.childOfBorderedParagraph').length > 0){
        $(this).find('.span-description').remove();
        $(this).find('.span-edit-icons').remove();

        var $spanEl = $(this).find('span.childOfBorderedParagraph');

        $spanEl.find('.medium-b').removeClass('medium-b');
        $spanEl.find('.medium-u').removeClass('medium-u');
        $spanEl.find('.medium-i').removeClass('medium-i');
        $spanEl.find('.medium-strike').removeClass('medium-strike');

        
        $spanEl.removeClass('divSpanAsBlock');
        $spanEl.removeClass('divSpanAsInline');
        $spanEl.removeAttr("contenteditable");
        $spanEl.find('br').removeAttr("contenteditable");
        
        $spanEl.removeAttr("style");

        $(this).replaceWith($spanEl );
      }


    });

  

  $(".htmlContent").remove();

  
  
   var $imgElement = $(".preview-container").find('.imgElement').each(function() {
   $(this).removeClass('borderedParagraph');

   if ( $(this).hasClass('imgResponsive') ) {
            $(this).find('img').removeClass('imgTestResponsive');
            $(this).find('img').addClass('img-responsive');
   }
   
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.img-description').remove();
   
   
   $(this).find('.img-edit-icons').remove();

   var $img = $(this).find('img');
   $(this).replaceWith($img );

   });
 

  
   var $borderedDivDroppable = $(".preview-container").find('.borderedDivDroppable');
   
   
   $borderedDivDroppable.removeClass('borderedDivDroppable');
   $borderedDivDroppable.removeClass('customDiv');
   $borderedDivDroppable.removeClass('ui-droppable');
   $borderedDivDroppable.removeAttr("data-id");
   
   $borderedDivDroppable.removeAttr("style");
   $borderedDivDroppable.removeClass('borderedDivAlertSuccess');
   $borderedDivDroppable.removeClass('borderedDivAlertInfo');
   $borderedDivDroppable.removeClass('borderedDivAlertWarning');
   $borderedDivDroppable.removeClass('borderedDivAlertDanger');

   $borderedDivDroppable.removeClass('borderedDivWell');
   $borderedDivDroppable.removeClass('borderedDivJumbotron');

   $borderedDivDroppable.find('.div-container-description').remove();
   
   
   $borderedDivDroppable.find('.div-container-edit-icons').remove();

  

  
   var $borderedTableDroppable = $(".preview-container").find('.borderedTableDroppable').each(function() {
   $(this).removeClass('customTable');
   $(this).removeClass('borderedTableDroppable');
   $(this).removeAttr("data-id");
   $(this).removeAttr("style");

   $(this).find('.table-description').remove();
   $(this).find('.table-edit-icons').remove();

   var $tableRow = $(this).find('.borderedTableRow');
   $tableRow.removeAttr('style');

   var $table = $(this).find('.tableElement');
   $table.removeClass('tableElement');
   $table.removeAttr('style');

   $(this).find('.borderedTableRow').removeClass('borderedTableRow');
   
   var $tableCell = $(this).find('.borderedTableCell');
   $tableCell.removeClass('borderedTableCell').removeClass('ui-droppable');
   $tableCell.find('.tablecell-description').remove();
   $tableCell.find('.table-cell-edit-icons').remove();
   $tableCell.removeAttr("style");

   $(this).before($table.clone());
   $(this).remove();
   $table.remove();
 });
  

   $(".preview-container").find('.borderedButton').each(function() {
       $(this).removeClass('buttonElement');
       $(this).removeClass('borderedButton');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('button').removeAttr("style"); 

       $(this).find('.button-description').remove();
       $(this).find('.button-edit-icons').remove();

       var $buttonEl = $(this).find('button');
       $(this).replaceWith($buttonEl );

  });

  $(".preview-container").find('.borderedButtonGroup').each(function() {

    if ( $(this).find('.btn-group-justified').length == 0 ){

       $(this).removeClass('buttonGroupElement');
       $(this).removeClass('borderedButtonGroup');
       $(this).removeClass('divAsInline');

       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.btn-group').removeAttr("style"); 
       $(this).find('.btn-group').removeClass("btnGroupInner"); 

       $(this).find('.buttonGroup-description').remove();
       $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

       $buttonGroupEl.removeAttr('id');

       $(this).replaceWith($buttonGroupEl );

     }else{

        $(this).removeClass('buttonGroupElement');
        $(this).removeClass('borderedButtonGroup');
        $(this).removeAttr("data-id");
        $(this).removeAttr("style");

        $(this).find('.btn-group-justified').removeClass("btnGroupInner"); 
        $(this).find('.btn-group-justified').removeAttr("style"); 

        $(this).find('.buttonGroup-description').remove();
        $(this).find('.buttonGroup-edit-icons').remove();

       var $buttonGroupEl = $(this).find('.btn-group-justified');
       var classList = $buttonGroupEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'btn-group') && (item != 'btn-group-justified') ){
                 $buttonGroupEl.removeClass(item);
          }
      });

      $buttonGroupEl.removeAttr('id');

      $(this).replaceWith($buttonGroupEl );

     }

  });

$(".preview-container").find('.borderedDropDown').each(function() {
       $(this).removeClass('dropDownElement');
       $(this).removeClass('borderedDropDown');
       $(this).removeAttr("data-id");
       $(this).removeAttr("style");

       $(this).find('.dropDown-description').remove();
       $(this).find('.dropDown-edit-icons').remove();

       $(this).find('div.dropdown').removeAttr("style"); 
       var $dropdownEl = $(this).find('div.dropdown');

       var classList = $dropdownEl.attr('class').split(/\s+/);
       $.each(classList, function(index, item) {
          if ( (item != 'dropdown') ){
                 $dropdownEl.removeClass(item);
          }
      });

       $dropdownEl.removeAttr('id');

       $(this).replaceWith($dropdownEl );

  });

$(".preview-container").find('.borderedNavbar').each(function() {
       
       $(this).find('.navbarDescription').remove();
       $(this).find('.navbarEditIcons').remove();

       $(this).find('.removePreviewDropdownLink').removeClass('removePreviewDropdownLink');
       $(this).find('.removePreviewMainLink').removeClass('removePreviewMainLink'); 
       $(this).find('.customDropDownNav').removeClass('customDropDownNav');

       $(this).find('.navbar').removeAttr("style"); 
       var $navbarEl = $(this).find('.navbar');
       if ( $(this).hasClass('navBarFixedTop') ) {
          $navbarEl.addClass('navbar-fixed-top');
       }
       $(this).replaceWith($navbarEl );

  });


var carouselsExist = 'false';
$(".preview-container").find('.borderedCarousel').each(function() {

      carouselsExist = 'true';
       
       $(this).find('.carouselDescription').remove();
       $(this).find('.carouselIcons').remove();

       $(this).find('.carouselItem').each(function() {
            $(this).removeClass('carouselItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });


       if ( $(this).find('.carouselOptions').find('.carouselShowArrows').attr('data-value') == 'false' ) {

        if ( $(this).find('.carousel-control').length > 0 ){
          $(this).find('.carousel-control').remove();
        }

       }

       if ( $(this).find('.carouselOptions').find('.carouselShowIndicators').attr('data-value') == 'false' ) {

        if ( $(this).find('ol.carousel-indicators').length > 0 ){
          $(this).find('ol.carousel-indicators').remove();
        }

       }

       
       $(this).find('.carousel').removeAttr("style"); 
       var $carouselContainerEl = $(this).find('.carousel');
       $(this).replaceWith($carouselContainerEl );

  });

$(".preview-container").find('.borderedOrderedListDroppable').each(function() {
       
       $(this).find('.orderedListDescription').remove();
       $(this).find('.orderedListEditIcons').remove();

       $(this).find('ol').find('li').each(function(){
            $(this).removeClass('orderedListItem');
            $(this).removeClass('borderedOrderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyleType = $(this).find('ol').css('list-style-type');
       $(this).find('ol').removeAttr("style"); 
       $(this).find('ol').css('list-style-type',listStyleType);

       var $olEl = $(this).find('ol');
       $(this).replaceWith($olEl );

  });

$(".preview-container").find('.borderedUnorderedListDroppable').each(function() {
       
       $(this).find('.unorderedListDescription').remove();
       $(this).find('.unorderedListEditIcons').remove();

       $(this).find('ul').find('li').each(function(){
            $(this).removeClass('unorderedListItem');
            $(this).removeClass('borderedUnorderedListItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       var listStyle = $(this).find('ul').css('list-style');
       $(this).find('ul').removeAttr("style"); 
       $(this).find('ul').css('list-style',listStyle);
       
       var $ulEl = $(this).find('ul');
       $(this).replaceWith($ulEl );

  });

$(".preview-container").find('.borderedListGroupDroppable').each(function() {
       
       $(this).find('.listGroupItemDescription').remove();
       $(this).find('.listGroupItemEditIcons').remove();

       $(this).find('.list-group').find('.list-group-item').each(function(){
            $(this).removeClass('listGroupItemInside');
            $(this).removeClass('borderedListGroupItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");
       });

       $(this).find('.list-group').removeAttr("style"); 
       var $listGroupEl = $(this).find('.list-group');
       $(this).replaceWith($listGroupEl );

  });

$(".preview-container").find('.borderedPanelDroppable').each(function() {
       
       $(this).find('.panel').find('.borderedPanelItem').each(function(){
            $(this).removeClass('insidePanel');
            $(this).removeClass('borderedPanelItem');
            $(this).removeClass('ui-droppable');
            $(this).removeAttr("style");

            if ( $(this).find('.panelHeadingDescription').length > 0) {
                $(this).find('.panelHeadingDescription').remove();
                $(this).find('.panelHeading-edit-icons').remove();
            }else if ( $(this).find('.panelContent-description').length > 0) {
                $(this).find('.panelContent-description').remove();
                $(this).find('.panelContent-edit-icons').remove();
            }else if ( $(this).find('.panelFooter-description').length > 0) {
                $(this).find('.panelFooter-description').remove();
                $(this).find('.panelFooter-edit-icons').remove();
            }

       });

       $(this).find('.panel').removeAttr("style"); 
       var $panelEl = $(this).find('.panel');
       $(this).replaceWith($panelEl );

  });

$(".preview-container").find('.borderedResponsiveEmbed').each(function() {
       
       $(this).find('.responsiveEmbedDescription').remove();
       $(this).find('.responsiveEmbedIcons').remove();

       $(this).find('.embed-responsive').removeAttr("style"); 
       var $embedResponsiveEl = $(this).find('.embed-responsive');
       $(this).replaceWith($embedResponsiveEl );

  });




$(".preview-container").find('.formGroupElement').each(function() {

       var $formGroupEl = $(this).find('.formGroupInside');
       $(this).replaceWith($formGroupEl );

});


$(".preview-container").find('.formGroupInside').each(function() {

       $(this).removeClass('formGroupInside');
       $(this).removeClass('borderedFormGroupElement');
       $(this).removeClass('ui-droppable');
       $(this).removeAttr("style"); 

       $(this).find('.borderedInput').each(function() {

            $(this).removeClass('inputElement');
            $(this).removeClass('borderedInput');
            $(this).removeAttr("data-id"); 

            if ( $(this).find('label').length > 0) {

                  var $labelEl = $(this).find('label');
                  $(this).replaceWith($labelEl );

            }

            if ( $(this).find('textarea').length > 0) {

                  var $textareaEl = $(this).find('textarea');
                  $(this).replaceWith($textareaEl );

            }

            if ( $(this).find('select').length > 0) {

                  var $selectEl = $(this).find('select');
                  $(this).replaceWith($selectEl );

            }

            if ( $(this).find('input').length > 0) {

                  var $inputEl = $(this).find('input');
                  $(this).replaceWith($inputEl );

            }



       });


});



$(".preview-container").find('.borderedVerticalInput').each(function() {
      
       $(this).find('.form-group').removeClass("element-edit"); 
       $(this).find('.form-group').removeClass("borderedFormGroupElement"); 
       $(this).find('.form-group').removeClass("ui-droppable"); 
       
       $(this).find('.form-group').removeAttr("style"); 
       var $formGroupEl = $(this).find('.form-group');
       $(this).replaceWith($formGroupEl );

  });




$(".preview-container").find('.borderedInput').each(function() {
      
       
       if ( $(this).find('label').length > 0) {
             
             $(this).find('label').removeAttr("style"); 
             var $labelEl = $(this).find('label');
             $(this).replaceWith($labelEl );
       }else if ($(this).find('textarea').length > 0) {
             
             $(this).find('textarea').removeAttr("style"); 
             var $textareaEl = $(this).find('textarea');
             $(this).replaceWith($textareaEl );

       }else if ($(this).find('select').length > 0) {
             
             $(this).find('select').removeAttr("style"); 
             var $selectEl = $(this).find('select');
             $(this).replaceWith($selectEl );

       }
       else{
       
             $(this).find('input').removeAttr("style"); 
             var $inputEl = $(this).find('input');
             $(this).replaceWith($inputEl );
       }

  });



   $(".preview-container").find('.ui-sortable').removeClass('ui-sortable');
   $(".preview-container").find('.ui-sortable-handle').removeClass('ui-sortable-handle');
   $(".preview-container").find('.hover').removeClass('hover');

   $(".preview-container").find('.narrowBorderedContainer').removeClass('narrowBorderedContainer');

   $(".preview-container").find('.rowColBac').removeClass('rowColBac');

   $(".preview-container").find('.findCustomClassName').remove();
   $(".preview-container").find('.findCustomIDName').remove();
   $(".preview-container").find('.colRow-description').remove();
  


  
  var mapID = [];
  var mapZoom = [];
  var mapLat = [];
  var mapLng = [];
  

  var mapIDTemp;
  var mapZoomTemp;
  var mapLatTemp;
  var mapLngTemp;
  
  $(".preview-container").find('.borderedGmapsElement').each(function(){
         
        
        var $optionsel = $(this).find('.gmapsAttributes');
        mapIDTemp = $optionsel.attr('data-id');
        if( mapID.length == 0 ){mapID[0] = mapIDTemp;}else{mapID.push(mapIDTemp);}

        mapZoomTemp = $optionsel.attr('data-zoom');
        if( mapZoom.length == 0 ){mapZoom[0] = mapZoomTemp;}else{mapZoom.push(mapZoomTemp);}

        mapLatTemp = $optionsel.attr('data-lat');
        if( mapLat.length == 0 ){mapLat[0] = mapLatTemp;}else{mapLat.push(mapLatTemp);}

        mapLngTemp = $optionsel.attr('data-lng');
        if( mapLng.length == 0 ){mapLng[0] = mapLngTemp;}else{mapLng.push(mapLngTemp);}

        
        
      });


var gmapsExist = "false";

$(".preview-container").find('.borderedGmapsElement').each(function() {
       $(this).find('.gmapsdescription').remove();
       $(this).find('.gmapsEditIcons').remove();

       var $gmapsElement = $(this).find('.gmapsElement');
       $gmapsElement.empty();
       $(this).replaceWith($gmapsElement );
       $(this).removeClass('borderedGmapsElementCreated');
       gmapsExist = "true";

  });



  var imagesArray = [];
  $(".preview-container").find('img').each(function(){
    var imageSource = $(this).attr('src');

var startIndex = imageSource.lastIndexOf('images');
var substring = imageSource.substring(startIndex, imageSource.length);


imageSource = substring;


if (imagesArray.indexOf(imageSource) < 0 ){

    if( imagesArray.length == 0 ){
      imagesArray[0] = imageSource;
    }else{
      imagesArray.push(imageSource);
    }

  }

  });
  

  
  var videosArray = [];
  $(".preview-container").find('video').each(function(){
    var $videoSourceEL = $(this).find('source');
    var videoSource = $videoSourceEL.attr('src');

var startIndex = videoSource.lastIndexOf('videos');
var substring = videoSource.substring(startIndex, videoSource.length);


videoSource = substring;


if (videosArray.indexOf(videoSource) < 0 ){

    if( videosArray.length == 0 ){
      videosArray[0] = videoSource;
    }else{
      videosArray.push(videoSource);
    }

  }

  });

  

  var $elToclone =  $(".preview-container").find('#content-frame').children();
   
   $(".preview-container").append($elToclone);
   $(".preview-container").find('#content-frame').remove();
   
   

   var mainHTML = $(".preview-container").html();
   
  
   
    $(".preview-container").find('.childOfBorderedParagraph').each(function(){
           
           
         $(this).removeClass('childOfBorderedParagraph');
         
    });



var styleContent = styleTag.text();



$(".download-container").html(mainHTML);
$(".download-container").find('img').each(function(){

var imageSource = $(this).attr('src');


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

var startIndex = imageSource.lastIndexOf('images');
var substring = imageSource.substring(startIndex, imageSource.length);


var projectName = $('#projectName').text();
var downloadFolder = projectName + '/';
var newSource = filePath + 'downloads/' + downloadFolder + substring;


$(this).attr('src', newSource);

});


$(".download-container").find('video').each(function(){
var $videoSourceEL = $(this).find('source');
var videoSource = $videoSourceEL.attr('src');


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

var startIndex = videoSource.lastIndexOf('videos');
var substring = videoSource.substring(startIndex, videoSource.length);


var projectName = $('#projectName').text();
var downloadFolder = projectName + '/';
var newSource = filePath + 'downloads/' + downloadFolder + substring;


$videoSourceEL.attr('src', newSource);

});




mainHTML = $(".preview-container").html();


var imgBacksList = styleContent.split('url');


for ( var k =0;k<imgBacksList.length;k++ ) {

  if ( imgBacksList[k].indexOf("http") > -1 ) {
        
        var replaceStart = imgBacksList[k].indexOf("http");
        var replaceEnd = imgBacksList[k].indexOf(");");

        var firstSub = 'url' + imgBacksList[k].substring(0, replaceStart);
        

var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


var projectName = $('#projectName').text();
projectName = projectName.trim();
var downloadFolder = projectName + '/';
downloadFolder = downloadFolder.trim();
var newSource = filePath + 'downloads/' + downloadFolder;


        var imgStart = imgBacksList[k].indexOf("images");
        var imgEnd = imgBacksList[k].indexOf(");");
        var imgContent = imgBacksList[k].substring(imgStart, imgEnd);
        

        var result = firstSub + newSource + imgContent;
        

        var remaining = imgBacksList[k].substring(replaceEnd, imgBacksList[k].length);
        

        imgBacksList[k] = result + remaining;
        

  }else{
    
  }

}


styleContent = imgBacksList.join('');


styleContent = styleContent.replace(/(\r\n|\n|\r)/gm,"");
styleContent = styleContent.trim();



var imgBacks = [];
var imgBacksExist = false;
var imgBacksList = styleContent.split('url');


for ( var k =0;k<imgBacksList.length;k++ ) {

  if ( imgBacksList[k].indexOf("http") > -1 ) {
        
        var imgStart = imgBacksList[k].indexOf("images");
        var imgEnd = imgBacksList[k].indexOf(");");
        var imgContent = imgBacksList[k].substring(imgStart, imgEnd);
        
        imgContent = imgContent.trim();
        
        imgBacksExist = true;
        if( imgBacks.length == 0 ){imgBacks[0] = imgContent;}else{imgBacks.push(imgContent);}

  }

}



var jsonImgBacksArray = JSON.stringify(imgBacks);


  
  var dropdownStylesArray = [];
  var dropdownStylesExist = false;
  if ( $('style.dropdownStyle').length > 0) {
      dropdownStylesExist = true;
      $('style.dropdownStyle').each(function(){
          var dropdownStylesHTML = $(this).html();
          if( dropdownStylesArray.length == 0 ){dropdownStylesArray[0] = dropdownStylesHTML;}else{dropdownStylesArray.push(dropdownStylesHTML);}
      });

  }
  var jsondropdownStylesArray = JSON.stringify(dropdownStylesArray);

  var navbarStyleArray = [];
  var navbarStyleExist = false;
  if ( $('style.navbarStyle').length > 0) {
      navbarStyleExist = true;
      $('style.navbarStyle').each(function(){
          var navbarStyleHTML = $(this).html();
          if( navbarStyleArray.length == 0 ){navbarStyleArray[0] = navbarStyleHTML;}else{navbarStyleArray.push(navbarStyleHTML);}
      });

  }
  var jsonNavbarStyleArray = JSON.stringify(navbarStyleArray);

  var navbarDropdownStyleArray = [];
  var navbarDropdownStyleExist = false;
  if ( $('style.navbarDropdownStyle').length > 0) {
      navbarDropdownStyleExist = true;
      $('style.navbarDropdownStyle').each(function(){
          var navbarDropdownStyleHTML = $(this).html();
          if( navbarDropdownStyleArray.length == 0 ){navbarDropdownStyleArray[0] = navbarDropdownStyleHTML;}else{navbarDropdownStyleArray.push(navbarDropdownStyleHTML);}
      });

  }
  var jsonNavbarDropdownStyleArray = JSON.stringify(navbarDropdownStyleArray);


  
  var carouselIndicatorsStyleArray = [];
  var carouselIndicatorsStyleExist = false;
  if ( $('style.carouselStyles').length > 0) {
      carouselIndicatorsStyleExist = true;
      $('style.carouselStyles').each(function(){
          var carouselIndicatorsStyleHTML = $(this).html();
          if( carouselIndicatorsStyleArray.length == 0 ){carouselIndicatorsStyleArray[0] = carouselIndicatorsStyleHTML;}else{carouselIndicatorsStyleArray.push(carouselIndicatorsStyleHTML);}
      });

  }
  var jsonCarouselIndicatorsStyleArray = JSON.stringify(carouselIndicatorsStyleArray);


  var carouselArrowsStyleArray = [];
  var carouselArrowsStyleExist = false;
  if ( $('style.carouselArrowStyles').length > 0) {
      carouselArrowsStyleExist = true;
      $('style.carouselArrowStyles').each(function(){
          var carouselArrowsStyleHTML = $(this).html();
          if( carouselArrowsStyleArray.length == 0 ){carouselArrowsStyleArray[0] = carouselArrowsStyleHTML;}else{carouselArrowsStyleArray.push(carouselArrowsStyleHTML);}
      });

  }
  var jsonCarouselArrowsStyleArray = JSON.stringify(carouselArrowsStyleArray);
  
  
  var fontFamilyStyleArray = [];
  var fontFamilyExist = false;
  if ( headFrame.find('style.fontFamilyStyles').length > 0) {
      fontFamilyExist = true;
      headFrame.find('style.fontFamilyStyles').each(function(){
          var fontFamilyStyleHTML = $(this).html();
          if( fontFamilyStyleArray.length == 0 ){fontFamilyStyleArray[0] = fontFamilyStyleHTML;}else{fontFamilyStyleArray.push(fontFamilyStyleHTML);}
      });

  }
  var jsonFontFamilyStyleArray = JSON.stringify(fontFamilyStyleArray);
  

  
  var bodyStyleArray = [];
  var bodyStyleExist = false;
  if ( headFrame.find('style.bodySettingsStyles').length > 0) {
      bodyStyleExist = true;
      headFrame.find('style.bodySettingsStyles').each(function(){
          var bodyStyleHTML = $(this).html();
          if( bodyStyleArray.length == 0 ){bodyStyleArray[0] = bodyStyleHTML;}else{bodyStyleArray.push(bodyStyleHTML);}
      });

  }
  var jsonBodyStyleArray = JSON.stringify(bodyStyleArray);
  

  
  var userCSSArray = [];
  var userCSSExist = false;
  if ( headFrame.find('style.userDefinedStyles').length > 0) {
      userCSSExist = true;
      headFrame.find('style.userDefinedStyles').each(function(){
          var userCSSHTML = $(this).html();
          
          userCSSHTML = userCSSHTML.replace(/(\r\n|\n|\r)/gm,"");
          
          if( userCSSArray.length == 0 ){userCSSArray[0] = userCSSHTML;}else{userCSSArray.push(userCSSHTML);}
      });

  }
  var jsonUserCSSArray = JSON.stringify(userCSSArray);


  var jsonImagesArray = JSON.stringify(imagesArray);
  var jsonVideosArray = JSON.stringify(videosArray);



  var jsonMapIDArray = JSON.stringify(mapID);
  var jsonMapZoomArray = JSON.stringify(mapZoom);
  var jsonMapLatArray = JSON.stringify(mapLat);
  var jsonMapLngArray = JSON.stringify(mapLng);



  
   var $seoSettingsDiv = $('#seoSettings');
   var applySEO = $seoSettingsDiv.attr('data-value');

   var googleAuthor = '';
   if ( applySEO == 'true' ) {

    googleAuthor = $seoSettingsDiv.find('.googleAuthor').attr('data-value');
    
   }

   var googlePublisher = '';
   if ( applySEO == 'true' ) {

    googlePublisher = $seoSettingsDiv.find('.googlePublisher').attr('data-value');

   }

   var schemaName = '';
   if ( applySEO == 'true' ) {

    schemaName = $seoSettingsDiv.find('.schemaName').attr('data-value');

   }

   var schemaDescription = '';
   if ( applySEO == 'true' ) {

    schemaDescription = $seoSettingsDiv.find('.schemaDescription').attr('data-value');

   }

   var schemaImage = '';
   if ( applySEO == 'true' ) {

    schemaImage = $seoSettingsDiv.find('.schemaImage').attr('data-value');

   }

   var twitterCard = '';
   if ( applySEO == 'true' ) {

    twitterCard = $seoSettingsDiv.find('.twitterCard').attr('data-value');

   }

   var twitterSite = '';
   if ( applySEO == 'true' ) {

    twitterSite = $seoSettingsDiv.find('.twitterSite').attr('data-value');

   }

   var twitterCreator = '';
   if ( applySEO == 'true' ) {

    twitterCreator = $seoSettingsDiv.find('.twitterCreator').attr('data-value');

   }

   var twitterTitle = '';
   if ( applySEO == 'true' ) {

    twitterTitle = $seoSettingsDiv.find('.twitterTitle').attr('data-value');

   }

   var twitterDescription = '';
   if ( applySEO == 'true' ) {

    twitterDescription = $seoSettingsDiv.find('.twitterDescription').attr('data-value');

   }

   var twitterImage = '';
   if ( applySEO == 'true' ) {

    twitterImage = $seoSettingsDiv.find('.twitterImage').attr('data-value');

   }

   var twitterPlayer = '';
   if ( applySEO == 'true' ) {

    twitterPlayer = $seoSettingsDiv.find('.twitterPlayer').attr('data-value');

   }


   var fbURL = '';
   if ( applySEO == 'true' ) {

    fbURL = $seoSettingsDiv.find('.fbURL').attr('data-value');

   }

   var fbTitle = '';
   if ( applySEO == 'true' ) {

    fbTitle = $seoSettingsDiv.find('.fbTitle').attr('data-value');

   }

   var fbDescription = '';
   if ( applySEO == 'true' ) {

    fbDescription = $seoSettingsDiv.find('.fbDescription').attr('data-value');

   }

   var fbImage = '';
   if ( applySEO == 'true' ) {

    fbImage = $seoSettingsDiv.find('.fbImage').attr('data-value');

   }

   var fbSiteName = '';
   if ( applySEO == 'true' ) {

    fbSiteName = $seoSettingsDiv.find('.fbSiteName').attr('data-value');

   }

   var fbAdminsID = '';
   if ( applySEO == 'true' ) {

    fbAdminsID = $seoSettingsDiv.find('.fbAdminsID').attr('data-value');

   }

   var fbAppID = '';
   if ( applySEO == 'true' ) {

    fbAppID = $seoSettingsDiv.find('.fbAppID').attr('data-value');

   }

   var fbType = '';
   if ( applySEO == 'true' ) {

    fbType = $seoSettingsDiv.find('.fbType').attr('data-value');

   }

   var fbLocale = '';
   if ( applySEO == 'true' ) {

    fbLocale = $seoSettingsDiv.find('.fbLocale').attr('data-value');

   }

   var fbAudio = '';
   if ( applySEO == 'true' ) {

    fbAudio = $seoSettingsDiv.find('.fbAudio').attr('data-value');

   }

   var fbVideo = '';
   if ( applySEO == 'true' ) {

    fbVideo = $seoSettingsDiv.find('.fbVideo').attr('data-value');

   }



  /************** GOOGLE MAPS KEY ***************/
  var apiKeyRegistered = $('#indexRegistrationValue').attr('data-id');
  var apiKey = $('#indexRegistrationValue').attr('data-value');


  /************** GOOGLE MAPS KEY ***************/

  
  var fileName = $('#projectName').find('#templateName').attr('data-value');
  var projectName = $('#projectName').text();
  //projectName = projectName.replace(/(\r\n|\n|\r)/gm,"");
  projectName = projectName.trim();


   $.ajax({
        url: 'download_template.php',
        type:"POST",
        
        data: { 'mainHTML' : mainHTML, 'styleContent' : styleContent, 'imagesArray' : jsonImagesArray, 'imgBacksExist' : imgBacksExist, 'jsonImgBacksArray' : jsonImgBacksArray,
                
                'apiKeyRegistered' : apiKeyRegistered, 'apiKey' : apiKey,
                'gmapsExist' : gmapsExist, 'folder_name' : 'test', 'jsonVideosArray' : jsonVideosArray,
                'mapIDArray' : jsonMapIDArray, 'mapZoomArray' : jsonMapZoomArray, 'mapLatArray' : jsonMapLatArray, 'mapLngArray' : jsonMapLngArray,
                'dropdownStylesExist' : dropdownStylesExist, 'jsondropdownStylesArray' : jsondropdownStylesArray,
                'navbarStyleExist' : navbarStyleExist, 'jsonNavbarStyleArray' : jsonNavbarStyleArray,
                'navbarDropdownStyleExist' : navbarDropdownStyleExist, 'jsonNavbarDropdownStyleArray' : jsonNavbarDropdownStyleArray,
                'carouselIndicatorsStyleExist' : carouselIndicatorsStyleExist, 'jsonCarouselIndicatorsStyleArray' : jsonCarouselIndicatorsStyleArray,
                'carouselArrowsStyleExist' : carouselArrowsStyleExist, 'jsonCarouselArrowsStyleArray' : jsonCarouselArrowsStyleArray,
                'carouselsExist' : carouselsExist, 
                'bodyStyleExist' : bodyStyleExist, 'jsonBodyStyleArray' : jsonBodyStyleArray,
                'userCSSExist' : userCSSExist, 'jsonUserCSSArray' : jsonUserCSSArray,
                'fontFamilyExist' : fontFamilyExist, 'jsonFontFamilyStyleArray' : jsonFontFamilyStyleArray,
                'websiteTitle' : websiteTitle, 'websiteAuthor' : websiteAuthor, 'websiteDescription' : websiteDescription, 'websiteKeywords' : websiteKeywords,
                'applySEO' : applySEO, 'googleAuthor' : googleAuthor, 'googlePublisher' : googlePublisher, 'schemaName' : schemaName, 'schemaDescription' : schemaDescription,
                'schemaImage' : schemaImage, 'twitterCard' : twitterCard, 'twitterSite' : twitterSite, 'twitterCreator' : twitterCreator, 'twitterTitle' : twitterTitle,
                'twitterDescription' : twitterDescription, 'twitterImage' : twitterImage, 'twitterPlayer' : twitterPlayer, 'fbURL' : fbURL, 'fbTitle' : fbTitle,
                'fbImage' : fbImage, 'fbSiteName' : fbSiteName, 'fbAdminsID' : fbAdminsID, 'fbAppID' : fbAppID, 'fbType' : fbType,
                'fbLocale' : fbLocale, 'fbAudio' : fbAudio, 'fbVideo' : fbVideo, 'fbDescription' : fbDescription,
                'fileName' : fileName, 'projectName' : projectName},
        success: function (data) {
            
            
            
        },
        error: function (xhr, status, error) {
            
            if (xhr.status > 0) alert('got error: ' + status); 
        },
        complete : function(response){
                    
                 
              var out = $.parseJSON(response.responseText);
              
               var output1 = out['saved'];
               var output2 = out['result'];
               
               if(output1 == "true"){

                  
                  var zipName = output2 + "/" + projectName + ".zip";
                  location.href = zipName;

                  
               }

                
                
       }

    });

 

   
}


  
/**************************************** DOWNLOAD TEMPLATE *************************************************/


/**************************************** SAVE TEMPLATE *************************************************/

$( document ).on( 'click', '#saveTemplate', function () {

$('#saveInfoModal').find('.saveInfoModalDescription').empty();
$('#saveInfoModal').find('.saveInfoModalPrompt').empty();

var pathnameTemp = window.location.href;
var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

var projectName = $('#projectName').text();
var savedURL = filePath + projectName + '.html';


var html1 = "<span style='font-size:18px;'>Project Name:</span>&nbsp;" + "<span class='blueText' style='font-size:18px;'>" + projectName + "</span>";
$('#saveInfoModal').find('.saveInfoModalDescription').append(html1);

var currentTemplateName = $('#projectName').find('#templateName').attr('data-value');
if ( currentTemplateName != 'false' ) {
      var htmlNew1 = "<span style='font-size:18px;'>Template Name </span> &nbsp;" + "<span class='blueText' style='font-size:18px;'>" + currentTemplateName + "</span><br/><br/>";
      htmlNew1 += " To save your Design as a different Template enter a name for the new Template File and click Proceed.<br/>";
      htmlNew1 += " To save your Design in the same Template file click Proceed<br/>";
      $('#saveInfoModal').find('.saveInfoModalDescription').append(htmlNew1);
}

var html2 = "<b>The current page will Reload to the saved template URL" ;
$('#saveInfoModal').find('.saveInfoModalPrompt').append(html2);

$('#saveInfoModal').modal('show');


});


$( document ).on( 'click', '.saveInfoModalProcceed', function () {

var templateName = $('#saveInfoModal').find('#templateName').val();

if ( templateName.trim() == '' || templateName == 'undefined' || templateName == null ) {

  var templateName = $('#projectName').find('#templateName').attr('data-value');

  var myVar = setInterval(function(){

  if (  !$('#saveInfoModal').data('bs.modal').isShown ) {
      
      clearInterval(myVar);
      procceed_save_template(templateName);
  }

  }, 800);

}else{

      var templateName = $('#saveInfoModal').find('#templateName').val();
      templateName = templateName.split(' ').join('_');
      templateName = templateName.trim();

      console.log('templateName=' + templateName);

      if ( templateName.indexOf('.') > 0 ){
        var startIndex = templateName.indexOf('.');
        templateName = templateName.substring(0,startIndex);
      }
      console.log('templateName=' + templateName);
      var myVarNew = setInterval(function(){

      if (  !$('#saveInfoModal').data('bs.modal').isShown ) {
          
          clearInterval(myVarNew);
          procceed_save_template(templateName);
      }

      }, 800);




}

});


function procceed_save_template(templateName){

$('#projectName').find('#templateName').attr('data-value', templateName);

applyEditMode();


  $('#modalColorPicker').find('#fullColorPicker').spectrum('destroy'); 
  $('#modalBackgroundColorPicker').find('#backgroundColorPicker').spectrum('destroy'); 
  $('#modalBorderColorPicker').find('#borderColorPicker').spectrum('destroy'); 
  $('#modalBorderTopColorPicker').find('#borderTopColorPicker').spectrum('destroy'); 
  $('#modalBorderBottomColorPicker').find('#borderBottomColorPicker').spectrum('destroy'); 
  $('#modalBorderLeftColorPicker').find('#borderLeftColorPicker').spectrum('destroy'); 
  $('#modalBorderRightColorPicker').find('#borderRightColorPicker').spectrum('destroy'); 

  $('#buttongroupEdit').find('#buttongroupColorPicker').spectrum('destroy'); 
  $('#dropdownEdit').find('#dropdownColorPicker').spectrum('destroy'); 
  $('#navbarEdit').find('#navbarColorPicker').spectrum('destroy'); 
  $('#modalCarouselEdit').find('#carouselColorPicker').spectrum('destroy'); 
  $('#bodySettingsEdit').find('#bodySettingsColorPicker').spectrum('destroy'); 



var $htmlCloned = $('html').clone();

$htmlCloned.find('.download-container').empty();

var stylesHTML = '';

if ( $htmlCloned.find('style.carouselStyles').length > 0 ) {
 
 $htmlCloned.find('.carouselStyles').each(function(){
        var contentTemp = $(this).html();
        stylesHTML += '<style type="text/css" class="carouselStyles">' + contentTemp + '</style>';
                      
  });
                        
}

if ( $htmlCloned.find('style.carouselArrowStyles').length > 0 ) {
  
  $htmlCloned.find('.carouselArrowStyles').each(function(){
    var contentTemp = $(this).html();
    stylesHTML += '<style type="text/css" class="carouselArrowStyles">' + contentTemp + '</style>';
                      
  });
                       
}

if ( $htmlCloned.find('style.fontFamilyStyles').length > 0 ) {
   
   $htmlCloned.find('.fontFamilyStyles').each(function(){
            var contentTemp = $(this).html();
            stylesHTML += '<style type="text/css" class="fontFamilyStyles">' + contentTemp + '</style>';
    });
                        
}

if ( $htmlCloned.find('style.dropdownStyle').length > 0 ) {
  
   $htmlCloned.find('.dropdownStyle').each(function(){
        var contentTemp = $(this).html();
        stylesHTML += '<style type="text/css" class="dropdownStyle">' + contentTemp + '</style>';
    });
                        
}

if ( $htmlCloned.find('style.navbarStyle').length > 0 ) {
  
  $htmlCloned.find('.navbarStyle').each(function(){
      var contentTemp = $(this).html();
      stylesHTML += '<style type="text/css" class="navbarStyle">' + contentTemp + '</style>';
  });
                       
}

if ( $htmlCloned.find('style.navbarDropdownStyle').length > 0 ) {
  
  $htmlCloned.find('.navbarDropdownStyle').each(function(){
      var contentTemp = $(this).html();
      stylesHTML += '<style type="text/css" class="navbarDropdownStyle">' + contentTemp + '</style>';
  });
                        
}

if ( $htmlCloned.find('style.userDefinedStyles').length > 0 ) {
  
  $htmlCloned.find('.userDefinedStyles').each(function(){
      var contentTemp = $(this).html();
      var dataNumber = $(this).attr("data-number");
      stylesHTML += '<style type="text/css" class="userDefinedStyles" data-number="' + dataNumber + '">' + contentTemp + '</style>';
  });
                        
 }


if ( $htmlCloned.find('style.bodySettingsStyles').length > 0 ) {
    
    $htmlCloned.find('.bodySettingsStyles').each(function(){
        var contentTemp = $(this).html();

        var startIndex = contentTemp.indexOf('{');
        var endIndex = contentTemp.indexOf('}');
        endIndex += 1;
        var changed = contentTemp.substring(startIndex,endIndex);

        stylesHTML += '<style type="text/css" class="bodySettingsStyles">.content-frame' + changed + '</style>';
                      

     });
                       
}




$htmlCloned.find('head').empty();
var headHTML = '<meta charset="utf-8">'+
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
  '<meta name="viewport" content="width=device-width, initial-scale=1">'+

  '<title>Drag and Drop Creator</title>'+

  '<link href="http://fonts.googleapis.com/css?family=Lato:100,400,700" rel="stylesheet" type="text/css">'+
  '<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet" type="text/css">'+
  
  
  '<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">'+

  '<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">'+
  '<link href="css/main.css" rel="stylesheet" type="text/css">'+
  '<link href="css/animate.css" rel="stylesheet" type="text/css">'+
  '<link href="css/slidepanel.css" rel="stylesheet" type="text/css">'+
  '<link href="css/dropzone.css" rel="stylesheet" type="text/css">';

  
  var apiKeyRegistered = $('#indexRegistrationValue').attr('data-id');
  if ( apiKeyRegistered == 'true' ) {
      var apiKey = $('#indexRegistrationValue').attr('data-value');
      headHTML += '<script src="http://maps.googleapis.com/maps/api/js?key=' + apiKey + '"></script>';
  }else{
      headHTML += '<script src="http://maps.googleapis.com/maps/api/js"></script>';
  }

headHTML += '<script src="scripts/jquery.js"></script>'+
  '<script src="scripts/jquery-ui.js"></script>'+
  '<script src="scripts/bootstrap.js"></script>'+
  '<script src="scripts/classie.js"></script>'+
  '<script src="scripts/dropzone.js"></script>'+
  '<script src="scripts/app.js"></script>'+

  '<link rel="stylesheet" type="text/css" href="css/spectrum.css">'+
  '<script type="text/javascript" src="scripts/spectrum.js"></script>'+

  
  '<script src="scripts/MediumJS/bower_components/rangy-official/rangy-core.js"></script>'+
  '<script src="scripts/MediumJS/bower_components/rangy-official/rangy-classapplier.js"></script>'+
  '<script src="scripts/MediumJS/bower_components/undo/undo.js"></script>'+
  '<script src="scripts/MediumJS/medium.js"></script>'+
  '<link rel="stylesheet" href="scripts/MediumJS/medium.css">' +

  '<script src="scripts/jqueryFileTree.js" type="text/javascript"></script>' +
  '<link href="css/jqueryFileTree.css" rel="stylesheet" type="text/css" media="screen" />';



headHTML += stylesHTML;



$htmlCloned.find('head').html(headHTML);

var htmlToSave = $htmlCloned.html();


var pathnameTemp = window.location.href;


var loc = window.location;

var pathName = loc.pathname;

var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);


var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


var projectName = $('#projectName').text();
projectName = projectName.trim();

var userid = $('#projectName').attr('data-userid');


$.ajax({
        url: 'save_template.php',
        type:"POST",
        dataType : "json",
        data: { 'mainHTML' : htmlToSave, 'projectName' : projectName, 'templateName' : templateName, 'userid' : userid },
        success: function (response) {
                   

        },
        error: function (xhr, status, error) {
            
            if (xhr.status > 0) alert('got error: ' + status + ', response'); 
        },
        complete : function(response){
                    
                 
               var out = $.parseJSON(response.responseText);
              
               var output1 = out['Saved'];
               var output2 = out['Result'];
               var output3 = out['Directory'];


               var savedURL = filePath + projectName + '-' + templateName + '.html';
               savedURL = savedURL.trim();
               
               window.location.replace(savedURL);
               
                
       }

    });



}

/**************************************** SAVE TEMPLATE *************************************************/

function performSavedTemplateDroppables(){ 


var templateWithElements = false;
$('.toolbar-top').remove();

  if ( $('#content-frame').find('.borderedGmapsElement').length > 0 ) {
        $('#content-frame').find('.borderedGmapsElement').each(function(){
          performSavedTemplateGMaps($(this));

        });
        templateWithElements = true;
  }


  if ( $('#content-frame').find('.borderedDivDroppable').length > 0 ) {
        $('#content-frame').find('.borderedDivDroppable').each(function(){
          performSavedTemplateBorderedDivDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedContainer').length > 0 ) {
        $('#content-frame').find('.borderedContainer').each(function(){
          performSavedTemplateBorderedContainerDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedRowDroppable').length > 0 ) {
        $('#content-frame').find('.borderedRowDroppable').each(function(){
          performSavedTemplateBorderedRowDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedRowColDroppable').length > 0 ) {
        $('#content-frame').find('.borderedRowColDroppable').each(function(){
          performSavedTemplateBorderedRowColDroppable($(this));

        });
        templateWithElements = true;
  }


  if ( $('#content-frame').find('.borderedTableCell').length > 0 ) {
        $('#content-frame').find('.borderedTableCell').each(function(){
          performSavedTemplateBorderedTableCellDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedFormGroup').length > 0 ) {
        $('#content-frame').find('.borderedFormGroup').each(function(){
          performSavedTemplateBorderedFormGroupDroppable($(this));

        });
        templateWithElements = true;
  }


  

  if ( $('#content-frame').find('.borderedPanelItem').length > 0 ) {
        $('#content-frame').find('.borderedPanelItem').each(function(){
          performSavedTemplateBorderedPanelItemDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedOrderedListItem').length > 0 ) {
        $('#content-frame').find('.borderedOrderedListItem').each(function(){
          performSavedTemplateBorderedOrderedListItemDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedUnorderedListItem').length > 0 ) {
        $('#content-frame').find('.borderedUnorderedListItem').each(function(){
          performSavedTemplateBorderedUnorderedListItemDroppable($(this));

        });
        templateWithElements = true;
  }

  if ( $('#content-frame').find('.borderedListGroupItem').length > 0 ) {
        $('#content-frame').find('.borderedListGroupItem').each(function(){
          performSavedTemplateBorderedListGroupItemDroppable($(this));

        });
        templateWithElements = true;
  }

  
  if ( $('#content-frame').find('.carouselItem').length > 0 ) {
        $('#content-frame').find('.carouselItem').each(function(){
          performSavedCarouselItemDroppable($(this));

        });
        templateWithElements = true;
  }




if ( $('#content-frame').find('.borderedParagraph').length > 0 ) {
    
        $('#content-frame').find('.borderedParagraph').each(function(){

          if ( $(this).find('.htmlContent').length > 0){

            

            var contentHTML = $(this).find('.htmlContent').html();

            

              $(this).find('.childOfBorderedParagraph').empty();

              $(this).find('.childOfBorderedParagraph').append(contentHTML);


              
              $(this).find('p:not([class])').remove();
              $(this).find('p').not('.childOfBorderedParagraph').remove();
              
              
             
              $(this).find('.findCustomClassName').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

              $(this).find('.findCustomIDName').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

              $(this).find('.htmlContent').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

             $(this).find('br').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });
            $(this).find('b').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

            $(this).find('u').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });
            $(this).find('i[class="medium-i"]').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

            $(this).find('strike').each(function(){

                     if ( $(this).parent().closest('.childOfBorderedParagraph').length == 0 ) {
                        $(this).remove();

                     }

             });

         var parentText = $(this).clone().children().remove().end().text();

         
          if ( parentText.trim().length > 0) {
                
                 var cache = $(this).children();
                $(this).text('').append(cache);

          }

              

          }


        });



}



}

function performSavedTemplateGMaps ($element) {

var $optionsEl = $element.find('.gmapsAttributes');
var mapID = $optionsEl.attr('data-id');
var mapZoom = $optionsEl.attr('data-zoom');
var mapLat = $optionsEl.attr('data-lat');
var mapLng = $optionsEl.attr('data-lng');

initializeGmaps($element,mapID,mapZoom,mapLat,mapLng);


}


function performSavedTemplateBorderedFormGroupDroppable ($element) {
$element.find('.form-group').droppable({
     
            greedy:true,  
            
            
            accept: function(d) { 
                if(d.hasClass("row-droppable") || d.hasClass("row-col-droppable") ){ 
                    
                    return true;
                }else {
                    
                    return false;
                }
            },           
            drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                
                
                var $clonedDivDropped = $divToClone.clone();

  
                if ( $clonedDivDropped.hasClass('row') ){

                     

                    if ( $clonedDivDropped.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDivDropped);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDivDropped);
                   }
                     
                }



              }

        });


}

function performSavedTemplateBorderedTableCellDroppable ($element) {

$element.droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("formGroupDraggable") || d.hasClass("gmapsDraggable") ||
                            d.hasClass("responsiveEmbedDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') )
                      {
                          perform_Paragraph_In_Row($(this), $clonedDiv);
                          resize();
                       }else if( $clonedDiv.hasClass('imgElement') ){
                      
                           perform_Image_In_Row($(this), $clonedDiv);
                           resize();
                      }else if ( $clonedDiv.hasClass('customDiv') ){
                            perform_Div_Droppable($(this), $clonedDiv);
                            resize();

                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              
                              var k = 1;
                              var $parent = $clonedDiv.parent();
                              $parent.siblings('.borderedTableCell').each(function() {
                                  k++;
                              });
                              
                              var $tableRow = $parent.parent().closest('.borderedTableRow');
                              var $table = $tableRow.parent().closest('.tableElement');
                              var tableWidth = $table.width();

                              $parent.width((tableWidth - 20) / k);

                              $clonedDiv.css('left', '14px');

                              
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              
                              $clonedDiv.width(width - 30);
                              $clonedDiv.css('left', '14px');

                              var $parent = $clonedDiv.parent();
                              var width = $clonedDiv.width();
                              $parent.width(width + 5);
                              
                              
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                          perform_Button_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }

                     
                     
                    }


                  }); 


}


function performSavedTemplateBorderedRowColDroppable ($element) {


    $element.droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("inputDroppable") || d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("responsiveEmbedDraggable")){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    }, 
                          
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();

                      }else if( $clonedDiv.hasClass('imgElement') ){
                        
                        perform_Image_In_Row($(this), $clonedDiv);
                        var width = $clonedDiv.width();
                        $clonedDiv.width(width + 28);
                        $clonedDiv.css('right', '14px');
                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') )
                      {
                          perform_Div_Droppable($(this), $clonedDiv);
                          $clonedDiv.css('top','25px');
                          resize();

                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              
                              $clonedDiv.height(height - 90);
                              
                              $clonedDiv.css('top', '5px');
                              
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              
                              $clonedDiv.height(height - 70);
                              
                              $clonedDiv.css('top', '5px');
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('customTable') ){
            
                          perform_Table_Droppable($(this), $clonedDiv);
                          var width = $clonedDiv.width();
                          $clonedDiv.width(width + 28);
                          $clonedDiv.css('right', '14px');
                          resize();
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                          perform_Button_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('inputElement') ){
    
                              perform_Input_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('verticalInputElement') ){
    
                              perform_VerticalInput_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
                    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customCarousel') ){
                    
                          perform_Carousel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }


                      
                    } 

                  }); 


}


function performSavedTemplateBorderedRowDroppable ($element) {

$element.droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable") ||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") ||
                            d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable") ||
                            d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("responsiveEmbedDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                      }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') ){
                          perform_Div_Droppable($(this), $clonedDiv);
                          
                          
                          
                          $clonedDiv.css('top','25px');
                          resize();
                      }else if ( $clonedDiv.hasClass('row') ){

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 30);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '12px');
                              $clonedDiv.css('top', '15px');
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '15px');
                              resize();
                          }
                     
                      }else if( $clonedDiv.hasClass('customTable') ){
            
                              perform_Table_Droppable($(this), $clonedDiv);
                              resize();
                      }else if( $clonedDiv.hasClass('buttonElement') ){
    
                              perform_Button_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                      }else if( $clonedDiv.hasClass('customPanel') ){
                    
                          perform_Panel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customListGroup') ){
                    
                          perform_ListGroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customOrderedList') ){
                    
                          perform_OrderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customUnorderedList') ){
                    
                          perform_UnorderedList_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('customCarousel') ){
                    
                          perform_Carousel_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('formGroupElement') ){
                    
                          perform_FormFroup_Droppable($(this), $clonedDiv);
                          resize();            

                      }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                    
                          perform_gmaps_Droppable($(this), $clonedDiv );
                          resize();            

                      }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                      }


                      
                    } 

                  }); 

}


function performSavedTemplateBorderedContainerDroppable ($element) {

$element.droppable({
            
            greedy:true,  
            
            
            accept: function(d) { 
                if( d.hasClass("div-draggable") || d.hasClass("row-droppable") || d.hasClass("row-col-droppable")
                 || d.hasClass("imgDraggable") || d.hasClass("pDraggable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") 
                 || d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("panelDraggable") 
                 || d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") || d.hasClass("unorderedListDraggable")
                 || d.hasClass("carouselDraggable") || d.hasClass("navbarDraggable") || d.hasClass("formGroupDraggable") 
                 || d.hasClass("gmapsDraggable") ){ 
                    
                    return true;
                }else if( d.hasClass("container-fluid-draggable") ){
                    
                    return false;
                }
            },           
            drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                
                
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                     

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customPanel') ){
    
                  perform_Panel_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customListGroup') ){
            
                  perform_ListGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customOrderedList') ){
            
                  perform_OrderedList_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customUnorderedList') ){
            
                  perform_UnorderedList_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customCarousel') ){
            
                  perform_Carousel_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('customNavbar') ){
            
                  perform_Navbar_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('formGroupElement') ){
            
                  perform_FormFroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
            
                  perform_gmaps_Droppable($(this), $clonedDiv );
                  resize();            

              }



              }

              });

}

function performSavedTemplateBorderedDivDroppable ($element) {

  $element.droppable({
                    
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if( d.hasClass("div-draggable") || d.hasClass("imgDraggable") || d.hasClass("pDraggable")||
                            d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("table-droppable") || d.hasClass("buttonDraggable") ||
                            d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") || d.hasClass("responsiveEmbedDraggable") ||
                            d.hasClass("gmapsDraggable") || d.hasClass("panelDraggable") || d.hasClass("listGroupDraggable") || d.hasClass("orderedListDraggable") ||
                            d.hasClass("unorderedListDraggable") || d.hasClass("carouselDraggable") || d.hasClass("formGroupDraggable") || d.hasClass("navbarDraggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },
                        
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      

                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('pElement') ){
                        
                        perform_Paragraph_In_Row($(this), $clonedDiv);

                        resize();

                      }else if( $clonedDiv.hasClass('imgElement') ){
                        
                        perform_Image_In_Row($(this), $clonedDiv);

                        resize();
                      }else if ( $clonedDiv.hasClass('customDiv') )
                      {
                            

                            perform_Div_Droppable($(this), $clonedDiv);

                      }else if ( $clonedDiv.hasClass('row') )
                      {

                          if ( $clonedDiv.hasClass('colClass') ){
                              
                              perform_Row_Col_Droppable($(this), $clonedDiv);
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 120);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '5px');
                              resize();
                          }else{
                      
                              perform_Row_Droppable($(this), $clonedDiv); 
                              var width = $clonedDiv.width();
                              var height = $clonedDiv.height();
                              $clonedDiv.width(width - 40);
                              $clonedDiv.height(height - 70);
                              $clonedDiv.css('left', '20px');
                              $clonedDiv.css('top', '5px');
                              resize();
                          }
                        }else if( $clonedDiv.hasClass('customTable') ){
            
                              perform_Table_Droppable($(this), $clonedDiv);
                              resize();
                        }else if( $clonedDiv.hasClass('buttonElement') ){
    
                              perform_Button_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                              perform_ButtonGroup_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                              perform_DropDown_Droppable($(this), $clonedDiv);
                              resize();            

                        }else if( $clonedDiv.hasClass('customResponsiveEmbed') ){
    
                            perform_ResponsiveEmbed_Droppable($(this), $clonedDiv);
                            resize();            
                        }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
          
                              perform_gmaps_Droppable($(this), $clonedDiv );
                              resize();            

                       }else if( $clonedDiv.hasClass('customPanel') ){
                      
                            perform_Panel_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customListGroup') ){
                      
                            perform_ListGroup_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customOrderedList') ){
                      
                            perform_OrderedList_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customUnorderedList') ){
                      
                            perform_UnorderedList_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customCarousel') ){
                      
                            perform_Carousel_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('customNavbar') ){
                      
                            perform_Navbar_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('formGroupElement') ){
                      
                            perform_FormFroup_Droppable($(this), $clonedDiv);
                            resize();            

                        }else if( $clonedDiv.hasClass('gmapsElementContainer') ){
                      
                            perform_gmaps_Droppable($(this), $clonedDiv );
                            resize();            

                        }


                      
                    } 

                  }); 
                    


}



function performSavedTemplateBorderedPanelItemDroppable($element){

$element.droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })



}


function performSavedTemplateBorderedOrderedListItemDroppable($element){

$element.droppable({
    
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })




}


function performSavedTemplateBorderedUnorderedListItemDroppable($element){
$element.droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })


}


function performSavedTemplateBorderedListGroupItemDroppable ($element){

$element.droppable({
          
          greedy:true,  
          
          accept: function(d) { 
                  if(d.hasClass("pDraggable") || d.hasClass("imgDraggable") || d.hasClass("div-draggable") ||
                     d.hasClass("row-droppable") || d.hasClass("row-col-droppable") || d.hasClass("buttonDraggable") ||
                     d.hasClass("buttonGroupDraggable") || d.hasClass("dropDownDraggable") ){ 
                    
                       return true;
                  }else if(d.hasClass("row-droppable")){
                     
                      return false;
                  }
         },            
        drop: function(e,ui){
                
                var data_id = ui.draggable.attr("data-id");
                
                var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                var $clonedDiv = $divToClone.clone();

  
                if ( $clonedDiv.hasClass('row') ){

                    if ( $clonedDiv.hasClass('colClass') ){
                          
                          perform_Row_Col_Droppable($(this), $clonedDiv);
                    }else{
                      
                     perform_Row_Droppable($(this), $clonedDiv);
                   }
                     
                }else if ( $clonedDiv.hasClass('customDiv') ){
                    
                    
                    perform_Div_Droppable($(this), $clonedDiv);

                }else if ( $clonedDiv.hasClass('pElement') ){
                        perform_Paragraph_In_Row($(this), $clonedDiv);
                        resize();
                }else if( $clonedDiv.hasClass('imgElement') ){
                        perform_Image_In_Row($(this), $clonedDiv);
                        resize();
                

               }else if( $clonedDiv.hasClass('customTable') ){
            
                  perform_Table_Droppable($(this), $clonedDiv);
                  resize();
               }else if( $clonedDiv.hasClass('buttonElement') ){
    
                  perform_Button_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('buttonGroupElement') ){
    
                  perform_ButtonGroup_Droppable($(this), $clonedDiv);
                  resize();            

              }else if( $clonedDiv.hasClass('dropDownElement') ){
    
                  perform_DropDown_Droppable($(this), $clonedDiv);
                  resize();            

              }



          }


  })




}


function performSavedCarouselItemDroppable ($element){

$element.droppable({
          
                    greedy:true,  
                    
                    
                    accept: function(d) { 
                            if(  d.hasClass("div-draggable") ){ 
                                
                                return true;
                            }else if(d.hasClass("row-droppable")){
                                
                                return false;
                            }
                    },            
                    drop: function(e,ui){
                      
                      var data_id = ui.draggable.attr("data-id");
                      var $divToClone = ui.draggable.find(".hiddenDiv[data-id='"+data_id+"']");
                      var $clonedDiv = $divToClone.clone();

                      if ( $clonedDiv.hasClass('customDiv') )
                      {
                            

                            perform_Div_Droppable($(this), $clonedDiv);

                            $clonedDiv.css({'margin-top': '40px'});

                      }


                      
                    } 

                  }); 

}


function apply_new_URL(){

$("#content-frame").find(".cssAttributes[data-value='background-image']").each(function(){

var $tempParent = $(this).parent();
var isClass = false;
var isID = false;
if ( $(this).parent().closest('.findCustomClassName').length > 0 ) {
    isClass = true;
}else if ( $(this).parent().closest('.findCustomIDName').length > 0 ) {
    isID = true;
}

var className;
var idName;
if(isClass){
 className = $(this).parent().attr('data-type');
}else if(isID){
  idName = $(this).parent().attr('data-type');
}



var $tempFirstParent = $tempParent.parent();
var $tempSecondParent = $tempFirstParent; 

var backImageValue = $(this).attr('data-id');


var startIndex = backImageValue.indexOf("(");
var endIndex = backImageValue.lastIndexOf("/images");

var tempValue = backImageValue.substring(startIndex + 1,endIndex);


var imgStartIndex = backImageValue.lastIndexOf("/");
var imgEndIndex = backImageValue.lastIndexOf(")");
var imageFile = backImageValue.substring(imgStartIndex + 1,imgEndIndex);


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;

if ( tempValue !=  filePath) {


var newValue = filePath + 'images/' + imageFile;
var tempReplacement = 'url(' + newValue + ')';
$(this).attr('data-id', tempReplacement);


if(isClass){
     var tempSearch = '.' + className;

}else if(isID){
    var tempSearch = '#' + idName;

}

var $parentElement = $(this).parent().closest(tempSearch);

var stylesList = $parentElement.attr('style').split(';');
$.each(stylesList, function(index, item) {
           
           var indexOfSep = item.indexOf(":");

           var type = item.substr(0, indexOfSep);
           var value = item.substr(indexOfSep + 1);
           value = value.trim();
           
           if (type.trim() == 'background-image') {
               
                var tempReplacement = 'url("' + newValue + '")';
                $parentElement.css('background-image', tempReplacement);
           }

});



} 


}); 



$(".globalClassList").find(".globalClass").find(".cssAttributes[data-value='background-image']").each(function(){
var backImageValue = $(this).attr('data-id');


var startIndex = backImageValue.indexOf("(");
var endIndex = backImageValue.lastIndexOf("/images");

var tempValue = backImageValue.substring(startIndex + 1,endIndex);


var imgStartIndex = backImageValue.lastIndexOf("/");
var imgEndIndex = backImageValue.lastIndexOf(")");
var imageFile = backImageValue.substring(imgStartIndex + 1,imgEndIndex);


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;



if ( tempValue !=  filePath) {


var newValue = filePath + 'images/' + imageFile;
var tempReplacement = 'url(' + newValue + ')';
$(this).attr('data-id', tempReplacement);
}

});

$(".globalIDsList").find(".globalID").find(".cssAttributes[data-value='background-image']").each(function(){
var backImageValue = $(this).attr('data-id');


var startIndex = backImageValue.indexOf("(");
var endIndex = backImageValue.lastIndexOf("/images");

var tempValue = backImageValue.substring(startIndex + 1,endIndex);



var imgStartIndex = backImageValue.lastIndexOf("/");
var imgEndIndex = backImageValue.lastIndexOf(")");
var imageFile = backImageValue.substring(imgStartIndex + 1,imgEndIndex);


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


if ( tempValue !=  filePath) {


var newValue = filePath + 'images/' + imageFile;
var tempReplacement = 'url(' + newValue + ')';
$(this).attr('data-id', tempReplacement);
}

});


$("#content-frame").find('img').each(function(){

if ( !$(this).parents(".gmapsElement").length  ) {

var backImageValue = $(this).attr('src');

var startIndex = 0; 
var endIndex = backImageValue.lastIndexOf("/images");

var tempValue = backImageValue.substring(startIndex, endIndex);


var imgStartIndex = backImageValue.lastIndexOf("/");
var imgEndIndex = backImageValue.length; 
var imageFile = backImageValue.substring(imgStartIndex + 1, imgEndIndex);


var loc = window.location;
var pathName = loc.pathname;
var pathNameSort = loc.pathname.substring(1, loc.pathname.lastIndexOf('/') + 1);

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;


var windProtocol = window.location.protocol;
var windHost = window.location.host;
var filePath = windProtocol + "//" + windHost + "/" + pathNameSort;


if ( tempValue !=  filePath) {

var newValue = filePath + 'images/' + imageFile;

$(this).attr('src', newValue);

}

}

});



} 







});