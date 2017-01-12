# PolygonJS
## About
   PolgyonJS - fast and simple library, which has been created to work with canvas. Now, PolgyonJS support work only with image objects,      but in future our library will be support rect, circle, text, simple 3D and it will be worked with image points, polygons, collision.
   
## Syntaxes
   PolygonJS support two syntaxes - default and OSX.
   
   In default syntax, to create and work with object you must create variable. Example:
> var image = new BaseObject.imageObject();
>  image.render();

   In OSX syntax you mustn't create variable to work with object and call ONE MORE function.
> new BaseObject.imageObject().render().rotate(); 

   You can use two syntax togther in one project, like this:
> var image = new BaseObject.imageObject();
>  image.render().rotate(); 
     
# Tutorials [default syntax only]

## Starter
> var game = new PolgyonJS(width, height); //you can init engine with this function, where width and height are canvas parameters; 

## Work with images 
   In PolygonJS you can create a lot of different object, and work with it.
`var game = new PolgyonJS(800, 600); //create engine`
`var player = new game.imageObject({`
`x: 0, y: 0,`
`//w: 50, h: 50, - you mustn't get image width and height in options-object, than image will be created with original size`
`src: 'imgs/img.png'`
`});`
`player.render();`
   
