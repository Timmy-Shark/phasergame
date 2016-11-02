/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}


game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {

        game.load.image('sky', 'assets/');
        game.load.image('ground', 'assets/');
        game.load.image('star', 'assets/');
        game.load.spritesheet('dude', 'assests/dude.png', 32, 48);

    },


    create: function() {
        game.add.sprite(0,0, 'star');
        // A simple background for our game 
        game.add.sprite(0,0, 'sky')
        // The platforms group contains the ground and the two ledges we can jump on 
        this.platforms = game.add.group();
        // We will enable physics to any object that is created in this group 
        this.platforms.enableBody = true;
        // Here we create the ground.
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');
        // Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2 ,2);
        // This stops it from falling away when you jump on it
        ground.body.immovable = true;
        
        
        var ledge = this.platforms.create(X-POSITION, Y-POSITION, 'ground');
        ledge.body.immovable = true;
        
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        this.player = game.add.sprite(32, game.world.height - 150, 'dude');
        game.physics.arcade.enable(this.player);
        
        
          this.player.body.bounce.y = BOUNCE-Value;
          this.player.body.gravity.y = GRAVITY-Value;
          this.player.body.collideWorldBounds = true;
          
        
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        
        game.physics.arcade.collide(this.player, this.platforms);
        
        this.cursors = game.input.keyboard.createCursorKeys();
        
        this.player.body.velocity.x = 0;
        if (this.cursors.left.is.DOWN) 
        this.player.body.velocity.x = -150
        
        this.player.animations.play('left');
        
        
        (this.cursors.right.isDOWN)  
        this.player.body.velocity.x = 150;
        
        this.player.animations.play('right');
        
        this.player.animations.stop();
        
        this.player.frame = 4;
        
        (this.cursors.up.isDown && this.player.body.touching.down)
        this.player.body.velocity.y = -350;
        
        this.stars = game.add.group();
        
        this.stars.enableBody = true;
        
        // Here we'll create 12 of them evenly spaced apart
        for (var i = 0; i < 12; i++) {
            // Create a star inside of the 'this.stars' group
            var star = this.stars.create(i * 70, 0, 'star');
            
            // Let gravity do it's thing
        }
        