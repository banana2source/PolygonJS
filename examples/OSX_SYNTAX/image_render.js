
var game = new PolygonJS(800, 600);

new game.imageObject({ 
  x: 0, y: 0,
  src: 'folder/img.png'
}).render().rotate;


//we can rotate and render together and we can do it with 
//each another function, addImagePoint, renameImagePoint, etc.


//you can also do something this :D
new PolygonJS(800, 600).imageObject({
  x: 0, y: 0,
  w: 60, h: 40,
  src: 'folder/img.png'
}).rotate().render(); 
