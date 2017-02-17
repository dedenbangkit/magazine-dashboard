tinymce.init({
  selector: 'div',
  theme: 'inlite',
  font_formats: 'Lato=Lato;Helvetica=Helvetica;Arial=Arial',
  plugins: 'image table link paste contextmenu textpattern autolink searchreplace textcolor colorpicker media hr',
  insert_toolbar: 'quickimage media hr undo redo',
  selection_toolbar: 'fontsizeselect fontselect forecolor backcolor | bold italic | quicklink | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
  inline: true,
  paste_data_images: true,
  preview_styles: 'font-size color',
  setup: function() {
            $(document).keypress(function(e) {
                if(e.which == 13) {
                    alert('You pressed enter!');
                }
            });
         }
});
