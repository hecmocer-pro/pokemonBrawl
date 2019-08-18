# Pokémon Brawl
The pokémon are meeting tonight to find out the best brawler composition.

Help them by choosing two teams of 6 pokémon and find out who is the last one standing!

# How to play
- Pick a team of 6 pokémon
- Pick another team of 6 pokémon or let the AI decide
- Watch them fight and see who is the last pokémon standing

# Why did you do this?
I was just wandering the internet coding community and I found motivation in [July's Codepen challenge](https://codepen.io/challenges/2019/july/3).

Down at the bottom where resources are recommended, they mentioned [PokéAPI](https://pokeapi.co/)

So after brainstorming for a week I started coding some kind of little card videogame using this API and just plain vanilla HTML, CSS and Javascript.

After three weeks and moving out in between, I released the first version of the videogame on July 18th 2019.

It featured:
- How to play instructions
- Two team player selection
- Random AI and _pretty_ smart AI
- Shuffling decks
- Turning cards
- Combat animations
- Winner SVG and 🎉 animation

# Ash
So if you come here wondering how Ash thinks before picking the right pokémons to beat you, here is what is happening on his mind.

He asigns a value to each remaining pokémon considering its stats, that is Attack, Defense, HP, Speed and types. Then he orders all the pokémons based on that value, and picks the strongest 6.

In order to crush you, he focuses on finding the pokémons with the right types. He calculates the _average_ type multiplier of every pokémon left against the pokémons on your team. This average is added to the previous calculation.

That is why if you have a FIRE type team, Ash is smart enough to pick mainly water pokémons.

# Brawling algorithm
First the speed is considered to find the pokémon that will deal dmg first.

The a multiplier is calculated based on the attacker and defender types.

Finally, it is basically just 

```Javascript
defender.hp = defender.hp - ((attacker.attack - defender.defense) * multiplier)
```

But when both pokémons are tied, they are given a high chance to at least deal a little damage and finish their opponent

```Javascript 
if (attacker.attack - defender.defense <= -40) {
    // [0,1]
    dmg = Math.round(Math.random())
} else if (attacker.attack - defender.defense <= 0) {
    // [1,multiplier]
    dmg = Math.round(Math.random() * multiplier) + 1
} else if (attacker.attack - defender.defense <= 3) {
    // [1,multiplier * 3]
    dmg = Math.round(Math.random() * 3 * multiplier) + 1
} else {
    // basic case
    dmg = Math.round((attacker.attack - defender.defense) * multiplier)
}
defender.hp = Math.round((defender.hp - dmg))
```

# Techy stuff
- Website made just of HTML, JS and CSS
- Favicon generated thanks to [https://realfavicongenerator.net/]
- Pokémon landing image in base64
- PokeApi data downloaded, formatted and pasted right away in JS
- Pokémon sprites and type images are downloaded in runtime
- Custom SVG made in Sketch for the winner animation
- Just using 3 external resources: PokéApi, GoogleFonts and GoogleAnalytics

In case you want to simulate a brawl, just paste this on the DevTools

```Javascript
(function simulate() {
    document.querySelector('#step0-button').click();
    document.querySelector('#step1 [data-id="1"]').click();
    document.querySelector('#step1 [data-id="2"]').click();
    document.querySelector('#step1 [data-id="3"]').click();
    document.querySelector('#step1 [data-id="4"]').click();
    document.querySelector('#step1 [data-id="5"]').click();
    document.querySelector('#step1 [data-id="6"]').click();
    document.querySelector('#step1-button').click();
    document.querySelector('#step2 [data-id="7"]').click();
    document.querySelector('#step2 [data-id="8"]').click();
    document.querySelector('#step2 [data-id="9"]').click();
    document.querySelector('#step2 [data-id="10"]').click();
    document.querySelector('#step2 [data-id="11"]').click();
    document.querySelector('#step2 [data-id="12"]').click();
    document.querySelector('#step2-button').click();
})();
```

In case you want to get the pokémons ordered by its _Ash value_, just call this function with any array of pokémons. For instance

```Javascript
orderPokemonsByExpectedValue(pokemons)
```