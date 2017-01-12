# PolygonJS
## About
   PolgyonJS - fast and simple library, which has been created to work with canvas. Now, PolgyonJS support work only with image objects,      but in future our library will be support rect, circle, text, simple 3D and it will be work with image points, polygons, collision.
   
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
     
# Tutorials

## Starter
> var game = new PolgyonJS(width, height); //you can init engine with this function, where width and height are canvas parameters; 

## Work with images 
   In PolygonJS you can create a lot of different object, and work with it. 
