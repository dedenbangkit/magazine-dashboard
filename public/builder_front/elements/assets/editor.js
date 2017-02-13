(function() {

  window.onload = function() {
    var FIXTURE_TOOLS, editor, req;
    ContentTools.StylePalette.add([
        new ContentTools.Style('By-line', 'article__by-line', ['p']),
        new ContentTools.Style('By-line', 'article__by-line', ['p']),
        new ContentTools.Style('By-line', 'article__by-line', ['p']),
        new ContentTools.Style('By-line', 'article__by-line', ['p']),
        new ContentTools.Style('By-line', 'article__by-line', ['p']),
        new ContentTools.Style('By-line', 'article__by-line', ['p'])
    ]);
    editor = ContentTools.EditorApp.get();
    editor.init('[data-editable], [data-fixture]', 'data-name');
    editor.addEventListener('saved', function(ev) {
      var saved;
      console.log(ev.detail().regions);
      if (Object.keys(ev.detail().regions).length === 0) {
        return;
      }
      editor.busy(true);
      saved = (function(_this) {
        return function() {
          editor.busy(false);
          return new ContentTools.FlashUI('ok');
        };
      })(this);
      return setTimeout(saved, 2000);
    });
    FIXTURE_TOOLS = [['undo', 'redo', 'remove']];
    ContentEdit.Root.get().bind('focus', function(element) {
      var tools;
      if (element.isFixed()) {
        tools = FIXTURE_TOOLS;
      } else {
        tools = ContentTools.DEFAULT_TOOLS;
      }
      if (editor.toolbox().tools() !== tools) {
        return editor.toolbox().tools(tools);
      }
    });
    req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://raw.githubusercontent.com/GetmeUK/ContentTools/master/translations/lp.json', true);
    return req.onreadystatechange = function(ev) {
      var translations;
      if (ev.target.readyState === 4) {
        translations = JSON.parse(ev.target.responseText);
        ContentEdit.addTranslations('lp', translations);
        return ContentEdit.LANGUAGE = 'lp';
      }
    };
  };

}).call(this);
