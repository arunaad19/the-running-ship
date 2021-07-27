var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3d8ba872-1ef2-462a-af80-6c3cd0a4bdba","cdfc0435-7644-49b7-b6d2-ff121a9c26eb","7db3800f-e145-4102-85e4-2d403db651ba","bf0d86f3-0f0e-4d48-b448-459ed05e123f"],"propsByKey":{"3d8ba872-1ef2-462a-af80-6c3cd0a4bdba":{"name":"playerShip3_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/cSIQtZxA43H7vLeuhJy4LW8GfdEydXWs/category_vehicles/playerShip3_red.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"cSIQtZxA43H7vLeuhJy4LW8GfdEydXWs","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cSIQtZxA43H7vLeuhJy4LW8GfdEydXWs/category_vehicles/playerShip3_red.png"},"cdfc0435-7644-49b7-b6d2-ff121a9c26eb":{"name":"gameplay_greendiamond2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"7db3800f-e145-4102-85e4-2d403db651ba":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Ppd_GpTjsluokOGpTmguy5mkaPdHyfD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7db3800f-e145-4102-85e4-2d403db651ba.png"},"bf0d86f3-0f0e-4d48-b448-459ed05e123f":{"name":"alienPink_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wiR206q33qswiDOY6nDcx6jIbKVO2.e3/category_fantasy/alienPink.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"wiR206q33qswiDOY6nDcx6jIbKVO2.e3","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wiR206q33qswiDOY6nDcx6jIbKVO2.e3/category_fantasy/alienPink.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var BG = createSprite(200, 200);
BG.setAnimation("space_1");
var rocket = createSprite(202, 357);
rocket.setAnimation("playerShip3_red_1");
var shot = createSprite(500, 200);
shot.setAnimation("gameplay_greendiamond2_1");
shot.scale = 0.05;
var enemy = createSprite(242, 83);
enemy.setAnimation("alienPink_1");


function draw() {
  drawSprites();
  
  if (keyDown("left")) {
    rocket.x = rocket.x -5;
  }
  if (keyDown("right")) {
    rocket.x = rocket.x +5;
  }
  if (keyDown("space")) {
    shot.x = rocket.x;
    shot.y = rocket.y -40;
    shot.velocityY = -8;
  }
  if (shot.isTouching(enemy)) {
    enemy.x = randomNumber(1, 350);
    playSound("assets/category_hits/vibrant_crate_break_1.mp3");
    
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
