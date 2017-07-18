//do we need to upload an image?
if( $('a#img_Link').css('display') == 'block' && $('input#imageFileField').val() != '' ) {
  var form = $('form#imageUploadForm');
  var formdata = false;
  if (window.FormData){
    formdata = new FormData(form[0]);
  }
        $(el).attr('src', "/builder_front/images/loading.gif").css("width", "100%");
  var formAction = form.attr('action');
  $.ajax({
    url : formAction,
    data : formdata ? formdata : form.serialize(),
    cache : false,
    contentType : false,
    processData : false,
    dataType: "json",
    type : 'POST',
  }).done(function(response){
    if( response.code == 1 ) {//success
      $('input#imageURL').val( response.response );
      if( $(el).prop('tagName') == 'IMG' ){
      $(el).attr('src', response.response);
      }
      else if( $(el).hasClass('column') ){
      $(el).css('background-image', 'url('+ response.response +')');
      }
      //reset the file upload
      $('.imageFileTab').find('a.fileinput-exists').click();
      /* SANDBOX */
      sandboxID = hasSandbox( $(el) )
      if( sandboxID ) {
        if( $(el).prop('tagName') == 'IMG' ){
        elementID = $(el).attr('id');
        $('#'+sandboxID).contents().find('#'+elementID).attr('src', response.response);
        }
        else if( $(el).hasClass('column')){
        elementID = $(el).attr('id');
        $('#'+sandboxID).contents().find('#'+elementID).css('background-image', 'url('+ response.response +')');
        }
      }
      /* END SANDBOX */
    } else if( response.code == 0 ) {//error
      alert('Something went wrong: '+response.response)
    }
  })
} else if( $('a#img_Link').css('display') == 'block' ) {
  //no image to upload, just a SRC change
  if( $('input#imageURL').val() != '' && $('input#imageURL').val() != $(el).attr('src') ) {
    $(el).attr('src', $('input#imageURL').val());
    /* SANDBOX */
    sandboxID = hasSandbox( $(el) )
    if( sandboxID ) {
      elementID = $(el).attr('id');
      $('#'+sandboxID).contents().find('#'+elementID).attr('src', $('input#imageURL').val());
    }
  } else if( $('input#imageURL').val() != '' && $('input#imageURL').val() != $(el).css('background-image') ) {
    $(el).css('background-image', 'url('+ $('input#imageURL').val() +')');
    /* SANDBOX */
    sandboxID = hasSandbox( $(el) )
    if( sandboxID ) {
      elementID = $(el).attr('id');
      $('#'+sandboxID).contents().find('#'+elementID).css('background-image', 'url('+ $('input#imageURL').val() +')');
    }
  }
}
