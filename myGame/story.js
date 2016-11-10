/* global game phaser game_state */
game_state.story = function() {};

game_state.story.prototype = {

    preload: function() {

    },
    create: function() {
        // The this.score
        this.scoreText = game.add.text(16, 16, 'This is the story about the lizard. \n He is trying to catch all the stars there are! \n To play this game hit the up arrow key.', {
            fontSize: '32px',
            fill: '#ffffff'
        });
this.cursors = game.input.keyboard.createCursorKeys();
    
    



    },
    update: function() {
if (this.cursors.up.isDown) {
    game.state.start('main');
}
    }
}

game.state.add('story', game_state.story);
game.state.start('story');
setTimeout(function() {}, 10);
game.state.function