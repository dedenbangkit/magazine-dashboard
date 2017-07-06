function activetiny(){
tinymce.init({
  force_p_newlines : false,
  force_br_newlines : true,
  convert_newlines_to_brs : false,
  remove_linebreaks : true,
  selector: '.article',
  menubar:false,
  element_format : 'html',
  toolbar: 'styleselect fontsizeselect textcolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
  extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width=100%|height=auto|align|onmouseover|onmouseout|name]',
  plugins: 'image imagetools table link paste contextmenu textpattern autolink lists charmap searchreplace textcolor colorpicker media hr imagetools',
  selection_toolbar: 'fontsizeselect forecolor backcolor | bold italic | quicklink | bullist numlist',
  contextmenu: 'undo redo copy paste',
  inline: true,
  width : 300,
  preview_styles: 'font-size color',
  setup: function (selection_toolbar) {
    selection_toolbar.addButton('mybutton', {
      text: 'My button',
      icon: false,
      onclick: function () {
        selection_toolbar.insertContent('&nbsp;<b>It\'s my button!</b>&nbsp;');
      }
    });
  }
});
};

setTimeout(function(){ activetiny(); }, 2000);
