(function() {
  var Simple, lbl1, lbl2, lbl3, lbl4, simple, view1, view2, win;
  Simple = require('simple').simple;
  simple = new Simple();
  win = simple.createSimpleWindow();
  view1 = simple.createSimpleView();
  lbl1 = simple.createSimpleLabel('view1');
  lbl1.top = 100;
  lbl1.color = 'white';
  view1.add(lbl1);
  lbl2 = simple.createSimpleLabel('touch to change view2');
  lbl2.color = 'yellow';
  lbl2.addEventListener('click', function() {
    view1.hide();
    return view2.show();
  });
  view1.add(lbl2);
  view2 = simple.createSimpleView();
  lbl3 = simple.createSimpleLabel('view2');
  lbl3.top = 150;
  lbl3.color = 'blue';
  view2.add(lbl3);
  lbl4 = simple.createSimpleLabel('touch to change view1');
  lbl4.color = 'green';
  lbl4.addEventListener('click', function() {
    view2.hide();
    return view1.show();
  });
  view2.add(lbl4);
  view2.hide();
  win.add(view1);
  win.add(view2);
  return win.open({
    fullscreen: true,
    navBarHidden: true
  });
})();