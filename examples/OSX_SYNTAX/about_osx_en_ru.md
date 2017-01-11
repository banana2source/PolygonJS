    
    
    OSX_SYNTAX - it's a simpler PolygonJS' "dialect";
    
    In this dialect you mustn't give image/rect/text or another object name and use it functions, like this.
    
      new BaseObject.imageObject().render().rotate().addImagePoint();
    
    In default syntax you must.
      
      let img = new BaseObject.imageObject(); //BaseObject = new PolygonJS();
        img.render();
        
     You can use two syntaxes in one project.
      
      new BaseObject.imageObject().render().rotate().addImagePoint();
          
      let img = new BaseObject.imageObject(); //BaseObject = new PolygonJS();
          img.render();
      
        
        
       OSX_SYNTAX - более простая версия диалекта движка.
       
       Используя данный диалект необязательно для каждого изображения/текста/прямоугольника создавать объект. Пример:
       
        new BaseObject.imageObject().render().rotate().addImagePoint();
        
       Используя обычную версию объявление переменной обязательно 
       
         let img = new BaseObject.imageObject(); //BaseObject = new PolygonJS();
           img.render();
           
        Вы можете использовать сразу два вида синтакса в одном проекте.
        
          new BaseObject.imageObject().render().rotate().addImagePoint();
          
          let img = new BaseObject.imageObject(); //BaseObject = new PolygonJS();
              img.render();
