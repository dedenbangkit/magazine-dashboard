function checkColTot(){
  coltotal = $('.column').length;
  console.log(coltotal);
  if (coltotal == 1){
    $('.check-columns').removeClass('btn-success').addClass('btn-inverse');
    $('#one-col').removeClass('btn-inverse').addClass('btn-success');
    $('#sortableEdit').hide();
  }
  if (coltotal == 2){
    $('.check-columns').removeClass('btn-success').addClass('btn-inverse');
    $('#two-col').removeClass('btn-inverse').addClass('btn-success');
  }
  if (coltotal == 3){
    $('.check-columns').removeClass('btn-success').addClass('btn-inverse');
    $('#three-col').removeClass('btn-inverse').addClass('btn-success');
  }
  if (coltotal == 4){
    $('.check-columns').removeClass('btn-success').addClass('btn-inverse');
    $('#four-col').removeClass('btn-inverse').addClass('btn-success');
  }
}
checkColTot();

$('#one-col').click(function(){
  coltotal = $('.column').length;
  if(coltotal > 1){
    $('.column').removeClass('col-xs-6').removeClass('col-xs-4').removeClass('col-xs-3').addClass('col-xs-12');
    var combinedHTML = "";
    $(".column").each(function () {
        combinedHTML += $(this).html();
    });
    $(".column").not(':first').remove();
    $(".column").html(combinedHTML);
    $(".new-col").remove();
    checkColTot();
  };
});

$('#two-col').click(function(){
  coltotal = $('.column').length;
  if(coltotal < 2){
    $('.column').clone().appendTo('.row');
    $('.column').removeClass('col-xs-12').removeClass('col-xs-4').removeClass('col-xs-3').addClass('col-xs-6');
    $('.column').not(':first').html('<br data-mce-bogus="1">').addClass('second');
    $('#sortableEdit').show();
    checkColTot();
  }else{
    $('.column').removeClass('col-xs-12').removeClass('col-xs-4').removeClass('col-xs-3').addClass('col-xs-6');
    checkColTot();
    $('#sortableEdit').show();
  }
});

$('#two-col').click(function(){
  coltotal = $('.column').length;
  if(coltotal < 2){
    $('.column').clone().appendTo('.row');
    $('.column').removeClass('col-xs-12').removeClass('col-xs-4').removeClass('col-xs-3').addClass('col-xs-6');
    $('.column').not(':first').html('<br data-mce-bogus="1">').addClass('third');
    $('#sortableEdit').show();
    checkColTot();
  }else{
    $('.column').removeClass('col-xs-12').removeClass('col-xs-4').removeClass('col-xs-3').addClass('col-xs-6');
    checkColTot();
    $('#sortableEdit').show();
  }
});
