Project 1 Markdown

How we Roll Dice game

User stories: As a user, I will be able to effective 'roll the dice' by clicking the assigned button so that a result will appear that let's me 'win', 'lose', or keep playing. Points are earned (or lost) with this system, and are counted in 'dollars($)'.

As a set of users (2), the dice game seven-eleven will play out so that the users will 'lose' or 'win', the user with the highest score after 7 rolls will win the game. In the case of a tie, the users will be encouraged to play again.

_______

Layout of the game will include:

- Two player buttons on each side of page
- One main div that includes set of dice images.
- Scoreboard that is connected to the set of dice images and their amounts through javascript functions.


Technologies used:
- HTML, CSS, Javascript, jQuery
- These programming languages will be used for design / layout and the functioning of the game.

Set up procedure
- Following a basic 'layering' approach to finishing the game, I will be first setting up the page using basic HTML so that the basic layout of the game (as shown in the wireframe screenshot below) will be complete.
- The functioning of the game will be set up using javascript and jQuery so that the the connection of the buttons to the dice, the randomization of the dice amounts, and the connection of those amounts to scores, losses, and points will be correct.
- I will use CSS to style the page in a way that is user-friendly and indicative of a game.

Unsolved problems:
- threshold for stopping and refreshing the game
- how much "integrity" the game will have / will all 36 dice combinations be coded into the game? If so, will this make for enough wins and losses so that the game is fun?
- how to use Math.random so that the amounts add up to the specified numbers I need concerning dice turns and amounts.

1. Basic layout of game using HTML
2. Adding player buttons that simulate 'rolling' of dice
3. Adding appropriate divs for dice container, title banner, and points/scoreboard section.
4. Adding dice images
5. Making dice images appear in randomized order
6. Making certain that some of these randomized amounts amount to wins, losses, or ties.
7. Making these amounts == to points in scoreboard (losses or gains)
8. Creation of alerts for winning and losing
9. Timing of scoreboard and alerts
10. CSS Styling
11. Refreshing after wins or losses without having the user refresh the page
