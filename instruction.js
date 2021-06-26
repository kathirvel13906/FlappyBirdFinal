class Form {
    constructor() {
        this.title = createElement('h1');
        this.button = createButton('Play');
        this.greeting = createElement('h2');

        this.i1 = createElement('h3');
        this.i2 = createElement('h4');
        this.i3 = createElement('h4');
        this.i4 = createElement('h4');
        this.i5 = createElement('h4');

        this.wintitle = createElement('h1');
        this.losetitle = createElement('h1');
        this.restartW = createButton("Play Again?");
        this.restartL = createButton("Try Again");
    }

    hide() {
        this.title.hide();
        this.greeting.hide();
        this.button.hide();
        this.i1.hide();
        this.i2.hide();
        this.i3.hide();
        this.i4.hide();
        this.i5.hide();
    }

    display() {
        this.restartW.hide();
        this.restartL.hide();

        this.title.html("Flappy Bird");
        this.title.position(430, 5);

        this.greeting.html("Hello Bird!");
        this.greeting.position(455, 50);

        this.button.position(470, 440);

        this.i1.html("Press The Play Button To Start");
        this.i1.position(390,80);

        this.i2.html("Press SPACE To Make The Bird Fly Higher.");
        this.i2.position(370,260);
        this.i3.html("Avoid The Obstacles To Gain Score.");
        this.i3.position(390,290);
        this.i4.html("The Game Ends If You Hit The Bird On The Wall.");
        this.i4.position(350,320);
        this.i5.html("Don't Lose Your Hope! Try Again And Give Your Best.");
        this.i5.position(340,350);

        this.greeting.show();
        this.button.show();
        this.title.show();
        this.i1.show();
        this.i2.show();
        this.i3.show();
        this.i4.show();
        this.i5.show();

        this.button.mousePressed(()=>{
            this.greeting.hide();
            this.button.hide();
            this.title.hide();
            this.i1.hide();
            this.i2.hide();
            this.i3.hide();
            this.i4.hide();
            this.i5.hide();
            gameState = 1;
        })
    }

    winFORM() {
        this.wintitle.html("You Won Birdie! Congrats.");
        this.wintitle.position(345, 30);

        this.wintitle.show();
        this.restartW.show();

        this.restartW.position(470, 200);
        this.restartW.mousePressed(()=>{
            gameState = 0;
            Matter.Body.setPosition(bird.body, {x: 500, y: 200});
            Matter.Body.setAngle(bird.body, PI);
            Matter.Body.setStatic(bird.body, true);
            camera.position.x = bird.body.position.x;
            this.wintitle.hide();
            this.restartW.hide();
        })
    }

    loseFORM() {
        this.losetitle.html("Sorry! You Lose.");
        this.losetitle.position(370, 30);

        this.losetitle.show();
        this.restartL.show();

        this.restartL.position(470, 200);
        this.restartW.mousePressed(()=>{
            gameState = 0;
            Matter.Body.setPosition(bird.body, {x: 500, y: 200});
            Matter.Body.setAngle(bird.body, PI);
            Matter.Body.setStatic(bird.body, true);
            camera.position.x = bird.body.position.x;
            this.losetitle.hide();
            this.restartL.hide();
        })
    }
}