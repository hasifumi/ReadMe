
exports.simple = ->
  simple = 
    createSimpleWindow:(_title='empty')->
      Ti.UI.createWindow
        backgroundColor:'black'
        title:_title
    createSimpleView:()->
      Ti.UI.createView()
    createSimpleLabel:(_text='empty', _fontsize=18, _textAlign='left', _height='auto', _width='auto', _top='auto', _left='auto')->
      Ti.UI.createLabel
        text:_text
        font:
          fontSize:_fontsize
        textAlign:_textAlign
        height:_height
        width:_width
    createSimpleButton:(_title='empty', _fontsize=18, _height='auto', _width='auto', _top='auto', _left='auto')->
      Ti.UI.createButton
        title:_title
        font:
          fontSize:_fontsize
        height:_height
        width:_width
        




  simple
