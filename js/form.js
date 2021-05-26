class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(740, 100);
        this.title.style('font-size', '40px');
        this.title.style('color', '#cf3858');
        this.input.position(780,300);
        this.input.style('width', '200px');
        this.input.style('height', '40px');
        this.input.style('background', '#4a944b');
        this.button.position(920,400);
        this.button.style('width', '70px');
        this.button.style('height', '40px');
        this.button.style('background', '#343363');
        this.reset.position(920, 450);
        this.reset.style('width', '70px');
        this.reset.style('height', '40px');
        this.reset.style('background', '#4a944b');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(780,310);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '20px');
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0);
            player.clear();
        });
       
       
       }
    }
