function activetiny(){
tinymce.init({
  selector: '.container',
  theme: 'inlite',
  element_format : 'html',
  extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',
  plugins: 'image table link paste contextmenu textpattern autolink searchreplace textcolor colorpicker media hr',
  selection_toolbar: 'fontsizeselect forecolor backcolor | bold italic | quicklink | bullist numlist',
  contextmenu: 'undo redo | link image',
  inline: true,
  force_p_newlines : false,
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

activetiny();
