function activetiny(){
tinymce.init({
  force_br_newlines : true,
  force_p_newlines : false,
  forced_root_block : '',
  selector: '.article',
  menubar:false,
  element_format : 'html',
  toolbar: 'editor styleselect fontsizeselect forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link',
  extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width=100%|height=auto|align|onmouseover|onmouseout|name]',
  plugins: 'image imagetools table link paste contextmenu textpattern autolink lists charmap searchreplace textcolor colorpicker media hr imagetools',
  selection_toolbar: 'fontsizeselect forecolor backcolor | bold italic | quicklink | bullist numlist',
  contextmenu: 'undo redo copy paste',
  inline: true,
  width : 300,
  preview_styles: 'font-size color',
  setup: function (editor) {
    editor.addButton('editor', {
      text: false,
      icon: 'mce-ico mce-i-image',
      onclick: function () {
        editor.insertContent("<img width='100%' class='img img-responsive' src='http:/\//publixx-statics.s3.amazonaws.com/images-lib/picture1.jpg'></img>");
      }
    });
  }
});
};

setTimeout(function(){ activetiny(); }, 2000);
