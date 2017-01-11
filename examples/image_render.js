
let game = new PolygonJS(500, 500),
    image = new game.imageObject({
                                    x: 0, y: 0,
                                    src: 'folder/img.png',
                                    angle: 10
                                });

function Start() {

};

function Update() {
  game.clear();
  
    image.render();
      image.rotate();
};

//In my gameloop i use two functions - Start and Update
