/* global game phaser game_state */
game_state.story = function() {};

game_state.story.prototype = {

    preload: function() {

    },
    create: function() {
        // The this.score
        this.scoreText = game.add.text(16, 16, 'This is the story about the lizard. \n He is trying to catch all the stars there are!', {
            fontSize: '32px',
            fill: '#ffffff'
        });

    
    



    },
    update: function() {

    }
}

game.state.add('story', game_state.story);
game.state.start('story');
