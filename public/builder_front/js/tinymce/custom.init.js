tinymce.init({
  selector: '.container',
  theme: 'inlite',
  element_format : 'html',
  extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',
  plugins: 'image table link paste contextmenu textpattern autolink searchreplace textcolor colorpicker media hr',
  selection_toolbar: 'p fontsizeselect forecolor backcolor | bold italic | quicklink | bullist numlist',
  inline: true,
  force_p_newlines : false,
  width : 300,
  preview_styles: 'font-size color'
});
