function PolygonJS(w, h) {
  
  //create canvas

  let e = document.createElement('canvas');
    e.width = w;
      e.height = h;
   document.body.appendChild(e);
   
  //create engine-object
  
  let engine = {};
  
    engine.device = window;
    engine.width = w;
    engine.height = h;
    engine.ctx = e.getContext('2d');
    engine.canvas = e;
    
    //work with images
    engine.imageObject = function(options) {
    
        let obj = {};
              
          obj.x = options.x;
          obj.y = options.y;
          
          obj.w = options.w || null;
          obj.h = options.h || null;
          
          obj.src = options.src;
          
          obj.visible = options.visible || true;          
            obj.opacity = options.opacity || 100;
          
          obj.angle = options.angle || 0;
          
          obj.imagePoints = [];
          
          obj.addImagePoint = function(name, x, y) {
            this.imagePoints[this.imagePoints.length] = [name, x, y];
          };
          
          obj.getImagePointX = function(name) {
            for(let i = 0; i<this.imagePoints.length; i++) {
              if(this.imagePoints[i][0] == name) {
                return this.x + this.imagePoints[i][1];
              };
            };
          };
          
          obj.getImagePointY = function(name) {
            for(let i = 0; i<this.imagePoints.length; i++) {
              if(this.imagePoints[i][0] == name) {
                return this.y + this.imagePoints[i][2];
              };
            };
          };
          
          obj.getImagePoint = function(name) { 
            for(let i = 0; i<this.imagePoints.length; i++) {
              if(this.imagePoints[i][0] == name) {
                return {
                  x: this.x + this.imagePoints[i][1],
                  y: this.y + this.imagePoints[i][2]
                };
              };
            };
          };
          
          obj.renameImagePoint = function(name, newname) {
            for(let i = 0; i<this.imagePoints.length; i++) {
              if(this.imagePoints[i][0] == name) {
                this.imagePoints[i][0] = newname;
              };
            };
          };
          
          obj.removeImagePoint = function(name) {
            for(let i = 0; i<this.imagePoints.length; i++) {
              if(this.imagePoints[i][0] == name) {
                imagePoints.splice(imagePoints.indexOf(i), 1);
              };
            };
          };
          
          obj.render = () => {
            
            let ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
            
            if(this.visible) {
            
              if(this.angle) {
                 let texture = new Image(),
                     dx = this.x + this.w/2,
                     dy = this.y + this.h/2;
                     
                  texture.src = this.file;
                  
                  ctx.save();
                    ctx.translate(dx, dy);
                      ctx.rotate(this.angle/100);
                        ctx.translate(-dx, -dy);         
                  
                  
                  if(this.width || this.height) {
                    ctx.drawImage(texture, this.x, this.y, this.w, this.h);
                  } else {
                    ctx.drawImage(texture, this.x, this.y);
                  };
                  
                  ctx.restore();
                                
              } else {
                let texture = new Image();
                  texture.src = this.file;
                  
                  if(this.width || this.height) {
                    ctx.drawImage(texture, this.x, this.y, this.w, this.h);
                  } else {
                    ctx.drawImage(texture, this.x, this.y);
                  };
                  
              };
              
            };
          };
          
          obj.rotate = () => {
            this.angle++;
              return this;
          };
          
          return obj;    
    };
  
  return engine;
};
