exports.simple = function() {
  var simple;
  simple = {
    createSimpleWindow: function(_title) {
      if (_title == null) {
        _title = 'empty';
      }
      return Ti.UI.createWindow({
        backgroundColor: 'black',
        title: _title
      });
    },
    createSimpleView: function() {
      return Ti.UI.createView();
    },
    createSimpleLabel: function(_text, _fontsize, _textAlign, _height, _width, _top, _left) {
      if (_text == null) {
        _text = 'empty';
      }
      if (_fontsize == null) {
        _fontsize = 18;
      }
      if (_textAlign == null) {
        _textAlign = 'left';
      }
      if (_height == null) {
        _height = 'auto';
      }
      if (_width == null) {
        _width = 'auto';
      }
      if (_top == null) {
        _top = 'auto';
      }
      if (_left == null) {
        _left = 'auto';
      }
      return Ti.UI.createLabel({
        text: _text,
        font: {
          fontSize: _fontsize
        },
        textAlign: _textAlign,
        height: _height,
        width: _width
      });
    },
    createSimpleButton: function(_title, _fontsize, _height, _width, _top, _left) {
      if (_title == null) {
        _title = 'empty';
      }
      if (_fontsize == null) {
        _fontsize = 18;
      }
      if (_height == null) {
        _height = 'auto';
      }
      if (_width == null) {
        _width = 'auto';
      }
      if (_top == null) {
        _top = 'auto';
      }
      if (_left == null) {
        _left = 'auto';
      }
      return Ti.UI.createButton({
        title: _title,
        font: {
          fontSize: _fontsize
        },
        height: _height,
        width: _width
      });
    }
  };
  return simple;
};