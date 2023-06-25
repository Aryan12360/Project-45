var ball, ballImg, sceneImg, brick1, bricks, brick1Img, paddle;
var score = 0;
var edges, tap;

var PLAY = 1;
var END = 2;
var gameState = PLAY;

var brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12;
var gameOver, reset;
var gameOverImg, resetImg;

function preload() {
  sceneImg = loadImage("assets/scene.png");
  ballImg = loadImage("assets/ball.png");
  brick1Img = loadImage("assets/brick1.png");
  tap = loadSound("assets/tap.wav");
  gameOverImg = loadImage("assets/gameOver.png");
  resetImg = loadImage("assets/reset.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites();
  bricks = new Group();

  paddle = createSprite(width / 2, height - 50, 250, 10);
  paddle.shapeColor = "blue";

  ball = createSprite(width / 2, height / 2, 20, 20);
  ball.addImage(ballImg);
  ball.scale = 0.15;
  ball.setVelocity(5, 7);
  ball.setCollider("circle", 0, 0, 180);

  brick1 = createSprite(width / 2 - 400, height / 2 - 400, 20, 20);
  brick1.addImage(brick1Img);
  brick1.scale = 0.3;
  bricks.add(brick1);

  brick2 = createSprite(width / 2 - 250, height / 2 - 400, 20, 20);
  brick2.addImage(brick1Img);
  brick2.scale = 0.3;
  bricks.add(brick2);

  brick3 = createSprite(width / 2 - 100, height / 2 - 400, 20, 20);
  brick3.addImage(brick1Img);
  brick3.scale = 0.3;
  bricks.add(brick3);

  brick4 = createSprite(width / 2 + 50, height / 2 - 400, 20, 20);
  brick4.addImage(brick1Img);
  brick4.scale = 0.3;
  bricks.add(brick4);

  brick5 = createSprite(width / 2 + 200, height / 2 - 400, 20, 20);
  brick5.addImage(brick1Img);
  brick5.scale = 0.3;
  bricks.add(brick5);

  brick6 = createSprite(width / 2 + 350, height / 2 - 400, 20, 20);
  brick6.addImage(brick1Img);
  brick6.scale = 0.3;
  bricks.add(brick6);


  brick7 = createSprite(width / 2 - 400, height / 2 - 270, 20, 20);
  brick7.addImage(brick1Img);
  brick7.scale = 0.3;
  bricks.add(brick7);

  brick8 = createSprite(width / 2 - 250, height / 2 - 270, 20, 20);
  brick8.addImage(brick1Img);
  brick8.scale = 0.3;
  bricks.add(brick8);

  brick9 = createSprite(width / 2 - 100, height / 2 - 270, 20, 20);
  brick9.addImage(brick1Img);
  brick9.scale = 0.3;
  bricks.add(brick9);

  brick10 = createSprite(width / 2 + 50, height / 2 - 270, 20, 20);
  brick10.addImage(brick1Img);
  brick10.scale = 0.3;
  bricks.add(brick10);

  brick11 = createSprite(width / 2 + 200, height / 2 - 270, 20, 20);
  brick11.addImage(brick1Img);
  brick11.scale = 0.3;
  bricks.add(brick11);

  brick12 = createSprite(width / 2 + 350, height / 2 - 270, 20, 20);
  brick12.addImage(brick1Img);
  brick12.scale = 0.3;
  bricks.add(brick12);

  gameOver = createSprite(width / 2, height / 2 - 100, 20, 20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  reset = createSprite(width / 2, height / 2 + 70, 20, 20);
  reset.addImage(resetImg);
  reset.visible = false;
}

function draw() {
  background(sceneImg);


  if (gameState === PLAY) {
    paddle.x = World.mouseX;

    if (paddle.x < 120) {
      paddle.x = 120;
    }

    if (paddle.x > 1796) {
      paddle.x = 1796;
    }

    if (ball.isTouching(brick1)) {
      brick1.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick2)) {
      brick2.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick3)) {
      brick3.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick4)) {
      brick4.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick5)) {
      brick5.destroy();
      tap.play();
      score += 10
    }
    if (ball.isTouching(brick6)) {
      brick6.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick7)) {
      brick7.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick8)) {
      brick8.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick9)) {
      brick9.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick10)) {
      brick10.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick11)) {
      brick11.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }
    if (ball.isTouching(brick12)) {
      brick12.destroy();
      tap.play();
      score += 10
      ball.velocityX += 1;
    }

    if(ball.y > 930){
      gameState = END;
    }

    ball.bounceOff(paddle);
    ball.bounceOff(edges);
  }

  if(gameState == END){
    ball.velocityX = 0;
    reset.visible = true;
    gameOver.visible = true;

    if(mousePressedOver(reset)){
      window.location.reload();
    }
  }

  textSize(40);
  fill("lime");
  text("Score: " + score, 40, 50);
  drawSprites();
}