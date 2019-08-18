const pokemons = [
    {
    "id": 1,
    "name": "bulbasaur",
    "speed": 45,
    "defense": 49,
    "attack": 49,
    "hp": 45,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
    "id": 2,
    "name": "ivysaur",
    "speed": 60,
    "defense": 63,
    "attack": 62,
    "hp": 60,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
    "id": 3,
    "name": "venusaur",
    "speed": 80,
    "defense": 83,
    "attack": 82,
    "hp": 80,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
    "id": 4,
    "name": "charmander",
    "speed": 65,
    "defense": 43,
    "attack": 52,
    "hp": 39,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
    "id": 5,
    "name": "charmeleon",
    "speed": 80,
    "defense": 58,
    "attack": 64,
    "hp": 58,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
    "id": 6,
    "name": "charizard",
    "speed": 100,
    "defense": 78,
    "attack": 84,
    "hp": 78,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
    "id": 7,
    "name": "squirtle",
    "speed": 43,
    "defense": 65,
    "attack": 48,
    "hp": 44,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
    "id": 8,
    "name": "wartortle",
    "speed": 58,
    "defense": 80,
    "attack": 63,
    "hp": 59,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
    "id": 9,
    "name": "blastoise",
    "speed": 78,
    "defense": 100,
    "attack": 83,
    "hp": 79,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
    "id": 10,
    "name": "caterpie",
    "speed": 45,
    "defense": 35,
    "attack": 30,
    "hp": 45,
    "types": [
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
    "id": 11,
    "name": "metapod",
    "speed": 30,
    "defense": 55,
    "attack": 20,
    "hp": 50,
    "types": [
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
    "id": 12,
    "name": "butterfree",
    "speed": 70,
    "defense": 50,
    "attack": 45,
    "hp": 60,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
    "id": 13,
    "name": "weedle",
    "speed": 50,
    "defense": 30,
    "attack": 35,
    "hp": 40,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
    "id": 14,
    "name": "kakuna",
    "speed": 35,
    "defense": 50,
    "attack": 25,
    "hp": 45,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
    "id": 15,
    "name": "beedrill",
    "speed": 75,
    "defense": 40,
    "attack": 90,
    "hp": 65,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
    "id": 16,
    "name": "pidgey",
    "speed": 56,
    "defense": 40,
    "attack": 45,
    "hp": 40,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
    "id": 17,
    "name": "pidgeotto",
    "speed": 71,
    "defense": 55,
    "attack": 60,
    "hp": 63,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
    "id": 18,
    "name": "pidgeot",
    "speed": 101,
    "defense": 75,
    "attack": 80,
    "hp": 83,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
    "id": 19,
    "name": "rattata",
    "speed": 72,
    "defense": 35,
    "attack": 56,
    "hp": 30,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
    "id": 20,
    "name": "raticate",
    "speed": 97,
    "defense": 60,
    "attack": 81,
    "hp": 55,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
    "id": 21,
    "name": "spearow",
    "speed": 70,
    "defense": 30,
    "attack": 60,
    "hp": 40,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
    "id": 22,
    "name": "fearow",
    "speed": 100,
    "defense": 65,
    "attack": 90,
    "hp": 65,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
    "id": 23,
    "name": "ekans",
    "speed": 55,
    "defense": 44,
    "attack": 60,
    "hp": 35,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
    "id": 24,
    "name": "arbok",
    "speed": 80,
    "defense": 69,
    "attack": 95,
    "hp": 60,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
    "id": 25,
    "name": "pikachu",
    "speed": 90,
    "defense": 40,
    "attack": 55,
    "hp": 35,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
    "id": 26,
    "name": "raichu",
    "speed": 110,
    "defense": 55,
    "attack": 90,
    "hp": 60,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
    "id": 27,
    "name": "sandshrew",
    "speed": 40,
    "defense": 85,
    "attack": 75,
    "hp": 50,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
    "id": 28,
    "name": "sandslash",
    "speed": 65,
    "defense": 110,
    "attack": 100,
    "hp": 75,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
    "id": 29,
    "name": "nidoran-f",
    "speed": 41,
    "defense": 52,
    "attack": 47,
    "hp": 55,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
    "id": 30,
    "name": "nidorina",
    "speed": 56,
    "defense": 67,
    "attack": 62,
    "hp": 70,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
    "id": 31,
    "name": "nidoqueen",
    "speed": 76,
    "defense": 87,
    "attack": 92,
    "hp": 90,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
    "id": 32,
    "name": "nidoran-m",
    "speed": 50,
    "defense": 40,
    "attack": 57,
    "hp": 46,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
    "id": 33,
    "name": "nidorino",
    "speed": 65,
    "defense": 57,
    "attack": 72,
    "hp": 61,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
    "id": 34,
    "name": "nidoking",
    "speed": 85,
    "defense": 77,
    "attack": 102,
    "hp": 81,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
    "id": 35,
    "name": "clefairy",
    "speed": 35,
    "defense": 48,
    "attack": 45,
    "hp": 70,
    "types": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/61/FairyIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
    "id": 36,
    "name": "clefable",
    "speed": 60,
    "defense": 73,
    "attack": 70,
    "hp": 95,
    "types": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/61/FairyIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
    "id": 37,
    "name": "vulpix",
    "speed": 65,
    "defense": 40,
    "attack": 41,
    "hp": 38,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
    "id": 38,
    "name": "ninetales",
    "speed": 100,
    "defense": 75,
    "attack": 76,
    "hp": 73,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
    "id": 39,
    "name": "jigglypuff",
    "speed": 20,
    "defense": 20,
    "attack": 45,
    "hp": 115,
    "types": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/61/FairyIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
    "id": 40,
    "name": "wigglytuff",
    "speed": 45,
    "defense": 45,
    "attack": 70,
    "hp": 140,
    "types": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/61/FairyIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
    "id": 41,
    "name": "zubat",
    "speed": 55,
    "defense": 35,
    "attack": 45,
    "hp": 40,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
    "id": 42,
    "name": "golbat",
    "speed": 90,
    "defense": 70,
    "attack": 80,
    "hp": 75,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
    "id": 43,
    "name": "oddish",
    "speed": 30,
    "defense": 55,
    "attack": 50,
    "hp": 45,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
    "id": 44,
    "name": "gloom",
    "speed": 40,
    "defense": 70,
    "attack": 65,
    "hp": 60,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
    "id": 45,
    "name": "vileplume",
    "speed": 50,
    "defense": 85,
    "attack": 80,
    "hp": 75,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
    "id": 46,
    "name": "paras",
    "speed": 25,
    "defense": 55,
    "attack": 70,
    "hp": 35,
    "types": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
    "id": 47,
    "name": "parasect",
    "speed": 30,
    "defense": 80,
    "attack": 95,
    "hp": 60,
    "types": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
    "id": 48,
    "name": "venonat",
    "speed": 45,
    "defense": 50,
    "attack": 55,
    "hp": 60,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
    "id": 49,
    "name": "venomoth",
    "speed": 90,
    "defense": 60,
    "attack": 65,
    "hp": 70,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
    "id": 50,
    "name": "diglett",
    "speed": 95,
    "defense": 25,
    "attack": 55,
    "hp": 10,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
    "id": 51,
    "name": "dugtrio",
    "speed": 120,
    "defense": 50,
    "attack": 100,
    "hp": 35,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
    "id": 52,
    "name": "meowth",
    "speed": 90,
    "defense": 35,
    "attack": 45,
    "hp": 40,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
    "id": 53,
    "name": "persian",
    "speed": 115,
    "defense": 60,
    "attack": 70,
    "hp": 65,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
    "id": 54,
    "name": "psyduck",
    "speed": 55,
    "defense": 48,
    "attack": 52,
    "hp": 50,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
    "id": 55,
    "name": "golduck",
    "speed": 85,
    "defense": 78,
    "attack": 82,
    "hp": 80,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
    "id": 56,
    "name": "mankey",
    "speed": 70,
    "defense": 35,
    "attack": 80,
    "hp": 40,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
    "id": 57,
    "name": "primeape",
    "speed": 95,
    "defense": 60,
    "attack": 105,
    "hp": 65,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
    "id": 58,
    "name": "growlithe",
    "speed": 60,
    "defense": 45,
    "attack": 70,
    "hp": 55,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
    "id": 59,
    "name": "arcanine",
    "speed": 95,
    "defense": 80,
    "attack": 110,
    "hp": 90,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
    "id": 60,
    "name": "poliwag",
    "speed": 90,
    "defense": 40,
    "attack": 50,
    "hp": 40,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
    "id": 61,
    "name": "poliwhirl",
    "speed": 90,
    "defense": 65,
    "attack": 65,
    "hp": 65,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
    "id": 62,
    "name": "poliwrath",
    "speed": 70,
    "defense": 95,
    "attack": 95,
    "hp": 90,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
    "id": 63,
    "name": "abra",
    "speed": 90,
    "defense": 15,
    "attack": 20,
    "hp": 25,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
    "id": 64,
    "name": "kadabra",
    "speed": 105,
    "defense": 30,
    "attack": 35,
    "hp": 40,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
    "id": 65,
    "name": "alakazam",
    "speed": 120,
    "defense": 45,
    "attack": 50,
    "hp": 55,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
    "id": 66,
    "name": "machop",
    "speed": 35,
    "defense": 50,
    "attack": 80,
    "hp": 70,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
    "id": 67,
    "name": "machoke",
    "speed": 45,
    "defense": 70,
    "attack": 100,
    "hp": 80,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
    "id": 68,
    "name": "machamp",
    "speed": 55,
    "defense": 80,
    "attack": 130,
    "hp": 90,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
    "id": 69,
    "name": "bellsprout",
    "speed": 40,
    "defense": 35,
    "attack": 75,
    "hp": 50,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
    "id": 70,
    "name": "weepinbell",
    "speed": 55,
    "defense": 50,
    "attack": 90,
    "hp": 65,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
    "id": 71,
    "name": "victreebel",
    "speed": 70,
    "defense": 65,
    "attack": 105,
    "hp": 80,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
    "id": 72,
    "name": "tentacool",
    "speed": 70,
    "defense": 35,
    "attack": 40,
    "hp": 40,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
    "id": 73,
    "name": "tentacruel",
    "speed": 100,
    "defense": 65,
    "attack": 70,
    "hp": 80,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
    "id": 74,
    "name": "geodude",
    "speed": 20,
    "defense": 100,
    "attack": 80,
    "hp": 40,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
    "id": 75,
    "name": "graveler",
    "speed": 35,
    "defense": 115,
    "attack": 95,
    "hp": 55,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
    "id": 76,
    "name": "golem",
    "speed": 45,
    "defense": 130,
    "attack": 120,
    "hp": 80,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
    "id": 77,
    "name": "ponyta",
    "speed": 90,
    "defense": 55,
    "attack": 85,
    "hp": 50,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
    "id": 78,
    "name": "rapidash",
    "speed": 105,
    "defense": 70,
    "attack": 100,
    "hp": 65,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
    "id": 79,
    "name": "slowpoke",
    "speed": 15,
    "defense": 65,
    "attack": 65,
    "hp": 90,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
    "id": 80,
    "name": "slowbro",
    "speed": 30,
    "defense": 110,
    "attack": 75,
    "hp": 95,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
    "id": 81,
    "name": "magnemite",
    "speed": 45,
    "defense": 70,
    "attack": 35,
    "hp": 25,
    "types": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/69/SteelIC.gif"
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
    "id": 82,
    "name": "magneton",
    "speed": 70,
    "defense": 95,
    "attack": 60,
    "hp": 50,
    "types": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/69/SteelIC.gif"
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
    "id": 83,
    "name": "farfetchd",
    "speed": 60,
    "defense": 55,
    "attack": 90,
    "hp": 52,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
    "id": 84,
    "name": "doduo",
    "speed": 75,
    "defense": 45,
    "attack": 85,
    "hp": 35,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
    "id": 85,
    "name": "dodrio",
    "speed": 110,
    "defense": 70,
    "attack": 110,
    "hp": 60,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
    "id": 86,
    "name": "seel",
    "speed": 45,
    "defense": 55,
    "attack": 45,
    "hp": 65,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
    "id": 87,
    "name": "dewgong",
    "speed": 70,
    "defense": 80,
    "attack": 70,
    "hp": 90,
    "types": [
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/70/IceIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
    "id": 88,
    "name": "grimer",
    "speed": 25,
    "defense": 50,
    "attack": 80,
    "hp": 80,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
    "id": 89,
    "name": "muk",
    "speed": 50,
    "defense": 75,
    "attack": 105,
    "hp": 105,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
    "id": 90,
    "name": "shellder",
    "speed": 40,
    "defense": 100,
    "attack": 65,
    "hp": 30,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
    "id": 91,
    "name": "cloyster",
    "speed": 70,
    "defense": 180,
    "attack": 95,
    "hp": 50,
    "types": [
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/70/IceIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
    "id": 92,
    "name": "gastly",
    "speed": 80,
    "defense": 30,
    "attack": 35,
    "hp": 30,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        "sprite": "https://cdn.bulbagarden.net/upload/4/48/GhostIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
    "id": 93,
    "name": "haunter",
    "speed": 95,
    "defense": 45,
    "attack": 50,
    "hp": 45,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        "sprite": "https://cdn.bulbagarden.net/upload/4/48/GhostIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
    "id": 94,
    "name": "gengar",
    "speed": 110,
    "defense": 60,
    "attack": 65,
    "hp": 60,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        },
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        "sprite": "https://cdn.bulbagarden.net/upload/4/48/GhostIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
    "id": 95,
    "name": "onix",
    "speed": 70,
    "defense": 160,
    "attack": 45,
    "hp": 35,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
    "id": 96,
    "name": "drowzee",
    "speed": 42,
    "defense": 45,
    "attack": 48,
    "hp": 60,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
    "id": 97,
    "name": "hypno",
    "speed": 67,
    "defense": 70,
    "attack": 73,
    "hp": 85,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
    "id": 98,
    "name": "krabby",
    "speed": 50,
    "defense": 90,
    "attack": 105,
    "hp": 30,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
    "id": 99,
    "name": "kingler",
    "speed": 75,
    "defense": 115,
    "attack": 130,
    "hp": 55,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
    "id": 100,
    "name": "voltorb",
    "speed": 100,
    "defense": 50,
    "attack": 30,
    "hp": 40,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
    "id": 101,
    "name": "electrode",
    "speed": 150,
    "defense": 70,
    "attack": 50,
    "hp": 60,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
    "id": 102,
    "name": "exeggcute",
    "speed": 40,
    "defense": 80,
    "attack": 40,
    "hp": 60,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
    "id": 103,
    "name": "exeggutor",
    "speed": 55,
    "defense": 85,
    "attack": 95,
    "hp": 95,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
    "id": 104,
    "name": "cubone",
    "speed": 35,
    "defense": 95,
    "attack": 50,
    "hp": 50,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
    "id": 105,
    "name": "marowak",
    "speed": 45,
    "defense": 110,
    "attack": 80,
    "hp": 60,
    "types": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
    "id": 106,
    "name": "hitmonlee",
    "speed": 87,
    "defense": 53,
    "attack": 120,
    "hp": 50,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
    "id": 107,
    "name": "hitmonchan",
    "speed": 76,
    "defense": 79,
    "attack": 105,
    "hp": 50,
    "types": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
    "id": 108,
    "name": "lickitung",
    "speed": 30,
    "defense": 75,
    "attack": 55,
    "hp": 90,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
    "id": 109,
    "name": "koffing",
    "speed": 35,
    "defense": 95,
    "attack": 65,
    "hp": 40,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
    "id": 110,
    "name": "weezing",
    "speed": 60,
    "defense": 120,
    "attack": 90,
    "hp": 65,
    "types": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/71/PoisonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
    "id": 111,
    "name": "rhyhorn",
    "speed": 25,
    "defense": 95,
    "attack": 85,
    "hp": 80,
    "types": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        },
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
    "id": 112,
    "name": "rhydon",
    "speed": 40,
    "defense": 120,
    "attack": 130,
    "hp": 105,
    "types": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        },
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d9/GroundIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
    "id": 113,
    "name": "chansey",
    "speed": 50,
    "defense": 5,
    "attack": 5,
    "hp": 250,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
    "id": 114,
    "name": "tangela",
    "speed": 60,
    "defense": 115,
    "attack": 55,
    "hp": 65,
    "types": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "sprite": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
    "id": 115,
    "name": "kangaskhan",
    "speed": 90,
    "defense": 80,
    "attack": 95,
    "hp": 105,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
    "id": 116,
    "name": "horsea",
    "speed": 60,
    "defense": 70,
    "attack": 40,
    "hp": 30,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
    "id": 117,
    "name": "seadra",
    "speed": 85,
    "defense": 95,
    "attack": 65,
    "hp": 55,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
    "id": 118,
    "name": "goldeen",
    "speed": 63,
    "defense": 60,
    "attack": 67,
    "hp": 45,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
    "id": 119,
    "name": "seaking",
    "speed": 68,
    "defense": 65,
    "attack": 92,
    "hp": 80,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
    "id": 120,
    "name": "staryu",
    "speed": 85,
    "defense": 55,
    "attack": 45,
    "hp": 30,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
    "id": 121,
    "name": "starmie",
    "speed": 115,
    "defense": 85,
    "attack": 75,
    "hp": 60,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
    "id": 122,
    "name": "mr-mime",
    "speed": 90,
    "defense": 65,
    "attack": 45,
    "hp": 40,
    "types": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        "sprite": "https://cdn.bulbagarden.net/upload/6/61/FairyIC.gif"
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
    "id": 123,
    "name": "scyther",
    "speed": 105,
    "defense": 80,
    "attack": 110,
    "hp": 70,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
    "id": 124,
    "name": "jynx",
    "speed": 95,
    "defense": 35,
    "attack": 50,
    "hp": 65,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/70/IceIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
    "id": 125,
    "name": "electabuzz",
    "speed": 105,
    "defense": 57,
    "attack": 83,
    "hp": 65,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
    "id": 126,
    "name": "magmar",
    "speed": 93,
    "defense": 57,
    "attack": 95,
    "hp": 65,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
    "id": 127,
    "name": "pinsir",
    "speed": 85,
    "defense": 100,
    "attack": 125,
    "hp": 65,
    "types": [
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/2a/BugIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
    "id": 128,
    "name": "tauros",
    "speed": 110,
    "defense": 95,
    "attack": 100,
    "hp": 75,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
    "id": 129,
    "name": "magikarp",
    "speed": 80,
    "defense": 55,
    "attack": 10,
    "hp": 20,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
    "id": 130,
    "name": "gyarados",
    "speed": 81,
    "defense": 79,
    "attack": 125,
    "hp": 95,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
    "id": 131,
    "name": "lapras",
    "speed": 60,
    "defense": 80,
    "attack": 85,
    "hp": 130,
    "types": [
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/70/IceIC.gif"
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
    "id": 132,
    "name": "ditto",
    "speed": 48,
    "defense": 48,
    "attack": 48,
    "hp": 48,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
    "id": 133,
    "name": "eevee",
    "speed": 55,
    "defense": 50,
    "attack": 55,
    "hp": 55,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
    "id": 134,
    "name": "vaporeon",
    "speed": 65,
    "defense": 60,
    "attack": 65,
    "hp": 130,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
    "id": 135,
    "name": "jolteon",
    "speed": 130,
    "defense": 60,
    "attack": 65,
    "hp": 65,
    "types": [
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
    "id": 136,
    "name": "flareon",
    "speed": 65,
    "defense": 60,
    "attack": 130,
    "hp": 65,
    "types": [
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
    "id": 137,
    "name": "porygon",
    "speed": 40,
    "defense": 70,
    "attack": 60,
    "hp": 65,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
    "id": 138,
    "name": "omanyte",
    "speed": 35,
    "defense": 100,
    "attack": 40,
    "hp": 35,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
    "id": 139,
    "name": "omastar",
    "speed": 55,
    "defense": 125,
    "attack": 60,
    "hp": 70,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
    "id": 140,
    "name": "kabuto",
    "speed": 55,
    "defense": 90,
    "attack": 80,
    "hp": 30,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
    "id": 141,
    "name": "kabutops",
    "speed": 80,
    "defense": 105,
    "attack": 115,
    "hp": 60,
    "types": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        "sprite": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
    "id": 142,
    "name": "aerodactyl",
    "speed": 130,
    "defense": 65,
    "attack": 105,
    "hp": 80,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        "sprite": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
    "id": 143,
    "name": "snorlax",
    "speed": 30,
    "defense": 65,
    "attack": 110,
    "hp": 160,
    "types": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        "sprite": "https://cdn.bulbagarden.net/upload/e/e4/NormalIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
    "id": 144,
    "name": "articuno",
    "speed": 85,
    "defense": 100,
    "attack": 85,
    "hp": 90,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/70/IceIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
    "id": 145,
    "name": "zapdos",
    "speed": 100,
    "defense": 85,
    "attack": 90,
    "hp": 90,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        "sprite": "https://cdn.bulbagarden.net/upload/f/f7/ElectricIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
    "id": 146,
    "name": "moltres",
    "speed": 90,
    "defense": 90,
    "attack": 100,
    "hp": 90,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        "sprite": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
    "id": 147,
    "name": "dratini",
    "speed": 50,
    "defense": 45,
    "attack": 64,
    "hp": 41,
    "types": [
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        "sprite": "https://cdn.bulbagarden.net/upload/5/57/DragonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
    "id": 148,
    "name": "dragonair",
    "speed": 70,
    "defense": 65,
    "attack": 84,
    "hp": 61,
    "types": [
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        "sprite": "https://cdn.bulbagarden.net/upload/5/57/DragonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
    "id": 149,
    "name": "dragonite",
    "speed": 80,
    "defense": 95,
    "attack": 134,
    "hp": 91,
    "types": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        "sprite": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif"
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        "sprite": "https://cdn.bulbagarden.net/upload/5/57/DragonIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
    "id": 150,
    "name": "mewtwo",
    "speed": 130,
    "defense": 90,
    "attack": 110,
    "hp": 106,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
    "id": 151,
    "name": "mew",
    "speed": 100,
    "defense": 100,
    "attack": 100,
    "hp": 100,
    "types": [
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        "sprite": "https://cdn.bulbagarden.net/upload/2/23/PsychicIC.gif"
        }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    }
]

const pokemonTypes = [
    {
    "name": "flying",
    "double_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        }
    ],
    "half_damage_to": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "poison",
    "double_damage_to": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ],
    "half_damage_to": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        }
    ],
    "no_damage_to": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        }
    ]
    },
    {
    "name": "fighting",
    "double_damage_to": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        },
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        }
    ],
    "half_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        },
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ],
    "no_damage_to": [
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        }
    ]
    },
    {
    "name": "ground",
    "double_damage_to": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        }
    ],
    "half_damage_to": [
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        }
    ],
    "no_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        }
    ]
    },
    {
    "name": "rock",
    "double_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        }
    ],
    "half_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "normal",
    "double_damage_to": [],
    "half_damage_to": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        }
    ],
    "no_damage_to": [
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        }
    ]
    },
    {
    "name": "bug",
    "double_damage_to": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        },
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        }
    ],
    "half_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "steel",
    "double_damage_to": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        },
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ],
    "half_damage_to": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "ghost",
    "double_damage_to": [
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        }
    ],
    "half_damage_to": [
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        }
    ],
    "no_damage_to": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/",
        }
    ]
    },
    {
    "name": "fire",
    "double_damage_to": [
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        }
    ],
    "half_damage_to": [
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "water",
    "double_damage_to": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        }
    ],
    "half_damage_to": [
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "electric",
    "double_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        }
    ],
    "half_damage_to": [
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "no_damage_to": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        }
    ]
    },
    {
    "name": "ice",
    "double_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "half_damage_to": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        },
        {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "dragon",
    "double_damage_to": [
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "half_damage_to": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        }
    ],
    "no_damage_to": [
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ]
    },
    {
    "name": "fairy",
    "double_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        },
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        }
    ],
    "half_damage_to": [
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "grass",
    "double_damage_to": [
        {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/",
        },
        {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/",
        },
        {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/",
        }
    ],
    "half_damage_to": [
        {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/",
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        },
        {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/",
        },
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/",
        },
        {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        },
        {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/",
        }
    ],
    "no_damage_to": []
    },
    {
    "name": "psychic",
    "double_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        }
    ],
    "half_damage_to": [
        {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/",
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        }
    ],
    "no_damage_to": [
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        }
    ]
    },
    {
    "name": "dark",
    "double_damage_to": [
        {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/",
        },
        {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/",
        }
    ],
    "half_damage_to": [
        {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/",
        },
        {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/",
        },
        {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/",
        }
    ],
    "no_damage_to": []
    }
]

const hidingDelay = 200
let currentStep = 0
const numberOfSteps = 4
const maxBrawlersPerTeam = 6
const selectedBrawlers1 = []
const selectedBrawlers2 = []
let redDeck = []
let greenDeck = []

function _goToNextStep() {
    _toggleVisibility(`#step${currentStep}`)
    _toggleVisibility(`#step${currentStep+1}`)
    currentStep++
}

function _toggleVisibility(selector) {
    const node = document.querySelector(selector)
    const state = node.getAttribute('state')
    const newState = state === 'hidden' ? 'shown' : 'hidden'
    node.setAttribute('state', 'hiding')
    setTimeout(function () {
        node.setAttribute('state', newState)
    }, hidingDelay)
}

function addOrRemoveToList(list, id) {
    let legalOperation = true
    const indexOf = list.indexOf(id)
    if (indexOf >= 0) {
        list.splice(indexOf, 1)
    } else {
        list.push(id)
    }
    return legalOperation
}

/* Want to add an item over the cap */
function checkIfLegalOperation(list, id) {
    const indexOf = list.indexOf(id)
    if (indexOf < 0 && list.length >= maxBrawlersPerTeam) {
        return false
    } else {
        return true
    }
}

function updateSelectedBrawlers(querySelector, list, id, stepButton, deck, deckSelector) {
    const isTheNewIdAlreadySelected = list.some(a => a === id)
    addOrRemoveToList(list, id)
    const pokemon = pokemons.find(a => a.id == id)
    /* Add to picklists */
    Array.from(document.querySelectorAll(querySelector)).forEach(function (container) {
        if (isTheNewIdAlreadySelected) {
            container.removeChild(container.querySelector(`[data-selectedbrawlerid="${id}"]`));
        } else {
            insertIdleCard(container, id, pokemon.sprite, pokemon.types[0].sprite, pokemon.types[1] && pokemon.types[1].sprite)
        }
    })
    /* Add to deck */
    addOrRemoveToList(deck, pokemon)
    Array.from(document.querySelectorAll(`#${deckSelector}`)).forEach(function (container) {
        if (isTheNewIdAlreadySelected) {
            container.removeChild(container.querySelector(`[data-selectedbrawlerid="${id}"]`));
        } else {
            insertDeckCard(container, pokemon, deck.length, deckSelector)
        }
    })
    /* Set a highlighted state for nextStep button */
    if (list.length === maxBrawlersPerTeam) {
        document.querySelector(stepButton).classList.add('reachedMaxBrawlers')
    } else {
        document.querySelector(stepButton).classList.remove('reachedMaxBrawlers')
    }
}

(function initSteps() {
    for (let step = 0; step < numberOfSteps; step++) {
        /* Visibility of each step */
        document.querySelector(`#step${step}`).setAttribute('state', step === 0 ? 'shown' : 'hidden')

        /* Button to go to next step, except for the last one and the one before the brawl*/
        if (step === 2) {
            document.querySelector(`#step${step}-button`).addEventListener('click', function () {
                shuffleBothDecks()
                _goToNextStep()
            })
        } else if (step !== 3) {
            document.querySelector(`#step${step}-button`).addEventListener('click', function () {
                _goToNextStep()
            })
        }
    }
})();

function insertCardSelectable(insertionPoint, id, sprite, type1Sprite, type2Sprite) {
    const parentNode = document.createElement("DIV")

    const childNode = document.createElement("DIV")
    childNode.setAttribute('data-id', id)
    childNode.classList.add('card-selectable')

    const img = document.createElement("img");
    img.src = sprite;
    img.classList.add('card-selectable-pokemon')
    childNode.appendChild(img)

    const type1 = document.createElement("img");
    type1.src = type1Sprite;
    type1.classList.add('type-sprite')
    childNode.appendChild(type1)

    if (type2Sprite){ 
        const type2 = document.createElement("img");
        type2.src = type2Sprite;
        type2.classList.add('type-sprite')
        childNode.appendChild(type2)
    }

    parentNode.appendChild(childNode)
    insertionPoint.appendChild(parentNode)
}

function insertIdleCard(insertionPoint, id, sprite, type1Sprite, type2Sprite) {
    const parentNode = document.createElement("DIV")
    parentNode.setAttribute('data-selectedbrawlerid', id)

    const childNode = document.createElement("DIV")
    childNode.classList.add('card-idle')

    const img = document.createElement("img");
    img.src = sprite;
    img.classList.add('card-idle-pokemon')
    childNode.appendChild(img)

    const typeContainer = document.createElement("DIV")

    const type1 = document.createElement("img");
    type1.src = type1Sprite;
    type1.classList.add('type-sprite')
    typeContainer.appendChild(type1)

    if (type2Sprite){ 
        const type2 = document.createElement("img");
        type2.src = type2Sprite;
        type2.classList.add('type-sprite')
        typeContainer.appendChild(type2)
    }

    childNode.appendChild(typeContainer)
    parentNode.appendChild(childNode)
    insertionPoint.appendChild(parentNode)
}

function insertDeckCard(container, pokemon, indexInDeck, deckSelector) {
    const parentNode = document.createElement("DIV")
    parentNode.setAttribute('data-selectedbrawlerid', pokemon.id)
    parentNode.style.top = `${indexInDeck*3}px`
    parentNode.style.left = `${indexInDeck*3}px`
    parentNode.classList.add('card-rotable')

    const cardBack = document.createElement("DIV")
    cardBack.classList.add(`card-back-${deckSelector}`)
    parentNode.appendChild(cardBack)

    const img = document.createElement("img");
    img.src = pokemon.sprite;
    img.classList.add('card-selectable-pokemon')
    parentNode.appendChild(img)

    resetPokemonStats(parentNode, pokemon)

    container.appendChild(parentNode)
}

function resetPokemonStats(parentNode, pokemon) {
    const pokemonSprite = parentNode.querySelector('img')
    pokemonSprite.src = pokemon.sprite

    const childStats =  parentNode.querySelector('.stats')
    if (childStats) {
        parentNode.removeChild(childStats)
    }

    const statsContainer = document.createElement('div')

    const stats = document.createElement("code")
    const pokemonNameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    stats.appendChild(document.createTextNode(`${pokemonNameCapitalized}`))
    stats.classList.add('stats-code')
    statsContainer.appendChild(stats)

    const breakline1 = document.createElement("br")
    const breakline2 = document.createElement("br")
    statsContainer.appendChild(breakline1)

    pokemon.types.forEach(function(type, index) {
        const stats = document.createElement("code")
        stats.appendChild(document.createTextNode(`type${index+1}: ${type.name}`))
        stats.classList.add('stats-code')
        statsContainer.appendChild(stats)
    })

    statsContainer.appendChild(breakline2)

    const statsArr = ['hp', 'attack', 'defense', 'speed']
    statsArr.forEach(function(stat) {
        const stats = document.createElement("code")
        stats.appendChild(document.createTextNode(`${stat}: ${pokemon[stat]}`))
        stats.classList.add('stats-code')
        statsContainer.appendChild(stats)
    })
    statsContainer.classList.add('stats')
    parentNode.appendChild(statsContainer)
}

function rotateFirstCard(selector) {
    document.querySelector(selector).lastElementChild.classList.add('rotate')
}

function bringCardsTogether() {
    document.querySelector('#redDeck').lastElementChild.classList.add('brawling')
    document.querySelector('#greenDeck').lastElementChild.classList.add('brawling')
}

function decideWinner() {
    const redBrawler = redDeck[redDeck.length-1]
    const greenBrawler = greenDeck[greenDeck.length-1]

    const redHP = redDeck[redDeck.length-1].hp
    const greenHP = greenDeck[greenDeck.length-1].hp
    const redDmgs = []
    const greenDmgs = []

    /* Algorithm */
    let first, second, attacker, defender
    let turnForFirst = true
    let isRedFirst = (redBrawler.speed - greenBrawler.speed) > 0 ? true : (redBrawler.speed - greenBrawler.speed) === 0 ? Math.random() >= 0.5 : false
    first = isRedFirst ? redBrawler : greenBrawler
    second = isRedFirst ? greenBrawler : redBrawler

    /* Type multiplier */
    let firstMultiplier = 1
    let secondMultiplier = 1
    const firstTypesInDepth = first.types.map(a => pokemonTypes.find(b => b.name === a.name))
    const secondTypesInDepth = second.types.map(a => pokemonTypes.find(b => b.name === a.name))
    firstTypesInDepth.forEach(function(firstType) {
        secondTypesInDepth.forEach(function(secondType) {
            if (firstType.double_damage_to.find(a => a.name === secondType.name)) {
                firstMultiplier = firstMultiplier * 2
            }
            else if (firstType.half_damage_to.find(a => a.name === secondType.name)) {
                firstMultiplier = firstMultiplier / 2
            }
            else if (firstType.no_damage_to.find(a => a.name === secondType.name)) {
                firstMultiplier = firstMultiplier * 0
            }
        })
    })
    secondTypesInDepth.forEach(function(secondType) {
        firstTypesInDepth.forEach(function(firstType) {
            if (secondType.double_damage_to.find(a => a.name === firstType.name)) {
                secondMultiplier = secondMultiplier * 2
            }
            else if (secondType.half_damage_to.find(a => a.name === firstType.name)) {
                secondMultiplier = secondMultiplier / 2
            }
            else if (secondType.no_damage_to.find(a => a.name === firstType.name)) {
                secondMultiplier = secondMultiplier * 0
            }
        })
    })

    /* Turn */
    while(first.hp >= 0 && second.hp >= 0) {
        let multiplier

        /* Who first? */
        if (turnForFirst) {
            attacker = first
            defender = second
            multiplier = firstMultiplier
        } else {
            attacker = second
            defender = first
            multiplier = secondMultiplier
        }

        let dmg = Math.round((attacker.attack - defender.defense) * multiplier)

        if (attacker.attack - defender.defense <= -40) {
            dmg = Math.round(Math.random())
        } else if (attacker.attack - defender.defense <= 0) {
            dmg = Math.round(Math.random() * multiplier) + 1
        } else if (attacker.attack - defender.defense <= 3) { // If threshold is very small, the type difference increases the dmg output
            dmg = Math.round(Math.random() * 3 * multiplier) + 1
        }
        defender.hp = Math.round((defender.hp - dmg))

        if ((isRedFirst && turnForFirst) || (!isRedFirst && !turnForFirst)) {
            redDmgs.push(dmg)
        } else {
            greenDmgs.push(dmg)
        }

        /* Swap turn */
        turnForFirst = !turnForFirst
    }
    const winsRed = (isRedFirst && first.hp >= second.hp) || (!isRedFirst && first.hp < second.hp)
    if (winsRed) {
        greenDeck.pop()
    } else {
        redDeck.pop()
    }

    resetPokemonStats(document.querySelector('#redDeck').lastElementChild, redBrawler)
    resetPokemonStats(document.querySelector('#greenDeck').lastElementChild, greenBrawler)

    showDmgBubbles(document.querySelector('#redDeck').lastElementChild, greenDmgs, isRedFirst ? secondMultiplier : firstMultiplier)
    showDmgBubbles(document.querySelector('#greenDeck').lastElementChild, redDmgs, isRedFirst ? firstMultiplier : secondMultiplier)

    let winner = winsRed ? document.querySelector('#redDeck').lastElementChild.classList.add('winner') : document.querySelector('#greenDeck').lastElementChild.classList.add('winner')
    let looser = winsRed ? document.querySelector('#greenDeck').lastElementChild.classList.add('looser') : document.querySelector('#redDeck').lastElementChild.classList.add('looser')
}

function showDmgBubbles(node, dmg, multiplier) {
    // let modifierSentence
    // if (multiplier > 2) {
    //     modifierSentence = 'Critical'
    // } else if (multiplier > 4) {
    //     modifierSentence = 'SUPER CRIT'
    // } else if (multiplier < 0.5) {
    //     modifierSentence = 'Weak'
    // } else if (multiplier < 0.025) {
    //     modifierSentence = 'Super weak'
    // } else {
    //     modifierSentence = ''
    // }

    dmg.forEach(function(dmgItem, index) {
        const bubble = document.createElement("DIV")
        bubble.classList.add('dmgBubble')
        const dmgNode = document.createElement("SPAN")
        dmgNode.classList.add('dmgText')
        dmgNode.appendChild(document.createTextNode(`-${dmgItem}`))
        bubble.appendChild(dmgNode)
        setTimeout(function () {
            bubble.style.transform = `translate(${(Math.random() -.5) * 180 }px, -${Math.random() * 100 }px) rotate(${(Math.random() - .5)*15}deg)`
            bubble.style.opacity = 1
            bubble.style.transition = `opacity 250ms ${index * 2 / dmg.length}s, transform 1s ${index * 2 / dmg.length}s ease-in-out`
        }, 0)
        node.appendChild(bubble)
    })
}

function resetBrawl() {
    resetDmgBubbles()
    const redBrawler = document.querySelector('#redDeck').lastElementChild
    const redDeck = document.querySelector('#redDeck')
    redBrawler.classList.remove('brawling')
    redBrawler.classList.remove('winner')
    redBrawler.classList.remove('rotate')
    if (redBrawler.classList.contains('looser')) {
        redDeck.removeChild(redBrawler)
    }
    const greenBrawler = document.querySelector('#greenDeck').lastElementChild
    const greenDeck = document.querySelector('#greenDeck')
    greenBrawler.classList.remove('brawling')
    greenBrawler.classList.remove('winner')
    greenBrawler.classList.remove('rotate')
    if (greenBrawler.classList.contains('looser')) {
        greenDeck.removeChild(greenBrawler)
    }
}

function resetDmgBubbles() {
    Array.from(document.querySelectorAll('.dmgBubble')).forEach(function (dmgBubble) {
        dmgBubble.parentElement.removeChild(dmgBubble);
    })
}

function checkWinners() {
    if (redDeck.length === 0) {
        resetBrawl()
        declareWinner('Green')
        return true
    } else if (greenDeck.length === 0) {
        resetBrawl()
        declareWinner('Red')
        return true
    } else {
        document.querySelector('#step3-button').setAttribute('hidden', 'true')
        document.querySelector('#step3-button-clean').removeAttribute('hidden')
        return false;
    }
}

function declareWinner(winner) {
    const textNode = document.createTextNode(winner);
    document.querySelector('#step3-winnerContainer #winnerInsertionPoint').appendChild(textNode);
    document.querySelector('#step3-winnerContainer').removeAttribute('hidden');
    launchConfetti()
    document.querySelector('#step3-button').setAttribute('hidden', 'true')
    document.querySelector('#step3-button-reset').removeAttribute('hidden')
}

// Inspired by https://codepen.io/anon/pen/JMOQzE
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        launchIndividualConfetti('step3-confetti')
        launchIndividualConfetti('step3-confettiMirror')
    }
}

function launchIndividualConfetti(container) {
    const width = Math.random() * 12;
    const height = width * 0.6;
    const opacity = Math.random() + 0.5
    const speed = Math.random() * 2
    let colour;
    switch(Math.ceil(Math.random() * 3)) {
        case 1:
        colour = "yellow";
        break;
        case 2:
        colour = "blue";
        break;
        default:
        colour = "red";
    }

    const confettiPiece = document.createElement("DIV")
    confettiPiece.classList.add('confetti')
    confettiPiece.style.width = `${width}px`
    confettiPiece.style.height = `${height}px`
    confettiPiece.style.opacity = opacity
    confettiPiece.style.transition = `transform ${speed}s ease`
    confettiPiece.style.position = 'absolute'
    confettiPiece.style.backgroundColor = colour
    setTimeout(function() {
        confettiPiece.style.transform = `translate(${Math.random() * 90 }vw, -110vh) rotate(${Math.random()*360}deg)`
    }, 0)
    document.querySelector(`#${container}`).appendChild(confettiPiece)
}

function shuffleBothDecks() {
    redDeck = knuthShuffle(redDeck)
    greenDeck = knuthShuffle(greenDeck)
    resetPokemonStats(document.querySelector('#redDeck').lastElementChild, redDeck[redDeck.length-1])
    resetPokemonStats(document.querySelector('#greenDeck').lastElementChild, greenDeck[greenDeck.length-1])

    triggerShuffleAnimationOnBothDecks()
}

// https://stackoverflow.com/a/2450976
function knuthShuffle(deck) {
    if (deck.length > 1) {
        var currentIndex = deck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }
    }

    return deck;
}

function triggerShuffleAnimationOnBothDecks() {
    setTimeout(function () {
        Array.from(document.querySelectorAll('#greenDeck *, #redDeck *')).forEach(function (card) {
            card.classList.toggle('shuffling')
            setTimeout(function() {
                card.classList.toggle('shuffling')
                document.querySelector('#step3-button').removeAttribute('disabled')
            }, 1000)
        })
    }, 500)
}

function pickRedBrawler(node) {
    if (checkIfLegalOperation(selectedBrawlers1, node.dataset.id)) {
        node.classList.toggle('selected')
        document.querySelector(`#step2 .card-selectable[data-id="${node.dataset.id}"]`).classList.toggle('locked')
        updateSelectedBrawlers('.pickingStep-left', selectedBrawlers1, node.dataset.id, '#step1-button', redDeck, 'redDeck')
    } else {
        alert("You can't pick more than 6 brawlers per team")
    }
    if (redDeck.length > 0) {
        document.querySelector('#step1-button').removeAttribute('disabled');
    } else {
        document.querySelector('#step1-button').setAttribute('disabled', true);
    }
}

function pickGreenBrawler(node) {
    if (checkIfLegalOperation(selectedBrawlers2, node.dataset.id)) {
        node.classList.toggle('selected')
        updateSelectedBrawlers('.pickingStep-right', selectedBrawlers2, node.dataset.id, '#step2-button', greenDeck, 'greenDeck')
    } else {
        alert("You can't pick more than 6 brawlers per team")
    }
    if (greenDeck.length > 0) {
        document.querySelector('#step2-button').removeAttribute('disabled');
        document.querySelector('#step2-button-AI').setAttribute('disabled', true);
        document.querySelector('#step2-button-AI2').setAttribute('disabled', true);
    } else {
        document.querySelector('#step2-button').setAttribute('disabled', true);
        document.querySelector('#step2-button-AI').removeAttribute('disabled');
        document.querySelector('#step2-button-AI2').removeAttribute('disabled');
    }
}

function RandomAIChoosesBrawlers() {
    const remainingPokemons = getLeftPokemonsForGreenPlayer()
    for (let i = 0; i < 6; i++) {
        pickGreenBrawler(document.querySelector(`#step2 .card-selectable[data-id='${Math.floor(Math.random() * remainingPokemons.length)}']`))
    }
}

function HardAIChoosesBrawlers() {
    const orderedRemainingPokemons = orderPokemonsByExpectedValue(getLeftPokemonsForGreenPlayer())
    for (let i = 0; i < 6; i++) {
        pickGreenBrawler(document.querySelector(`#step2 .card-selectable[data-id='${orderedRemainingPokemons[orderedRemainingPokemons.length - 1 - i].id}']`))
    }
}

function getLeftPokemonsForGreenPlayer() {
    return pokemons.filter(function(pokemon) {
        return !redDeck.some(a => a.id === pokemon.id)
    })
}

function orderPokemonsByExpectedValue(pokemons) {
    const idAndValue = pokemons.map((candidatePokemon) => {
        let expectedMultiplier = 1
        redDeck.forEach(function(redPokemon) {
            let candidateMultiplier = 1
            let redMultiplier = 1
            const candidateTypesInDepth = candidatePokemon.types.map(a => pokemonTypes.find(b => b.name === a.name))
            const redTypesInDepth = redPokemon.types.map(a => pokemonTypes.find(b => b.name === a.name))
            candidateTypesInDepth.forEach(function(candidateType) {
                redTypesInDepth.forEach(function(redType) {
                    if (candidateType.double_damage_to.find(a => a.name === redType.name)) {
                        candidateMultiplier = candidateMultiplier * 2
                    }
                    else if (candidateType.half_damage_to.find(a => a.name === redType.name)) {
                        candidateMultiplier = candidateMultiplier / 2
                    }
                    else if (candidateType.no_damage_to.find(a => a.name === redType.name)) {
                        candidateMultiplier = candidateMultiplier * 0
                    }
                })
            })
            redTypesInDepth.forEach(function(redType) {
                candidateTypesInDepth.forEach(function(candidateType) {
                    if (redType.double_damage_to.find(a => a.name === candidateType.name)) {
                        redMultiplier = redMultiplier * 2
                    }
                    else if (redType.half_damage_to.find(a => a.name === candidateType.name)) {
                        redMultiplier = redMultiplier / 2
                    }
                    else if (redType.no_damage_to.find(a => a.name === candidateType.name)) {
                        redMultiplier = redMultiplier * 0
                    }
                })
            })
            expectedMultiplier = expectedMultiplier + candidateMultiplier - redMultiplier
        })
        return {
            ...candidatePokemon,
            expectedMultiplier: expectedMultiplier,
            value: ((candidatePokemon.attack * 1 + candidatePokemon.defense * 1) * expectedMultiplier) + candidatePokemon.hp * 0.5 + candidatePokemon.speed * 0.2,
        }
    })
    return idAndValue.sort((a,b) => { return a.value >= b.value ? 1 : -1})
}


(function initPokemonCards() {
    Array.from(document.querySelectorAll('.picking-cardcontainer')).forEach(function (insertionPoint) {
        pokemons.forEach(function(pokemon) {
            insertCardSelectable(insertionPoint, pokemon.id, pokemon.sprite, pokemon.types[0].sprite, pokemon.types[1] && pokemon.types[1].sprite)
        })
    })
})();

(function initListeners() {
    Array.from(document.querySelectorAll('.card-rotable')).forEach(function (node) {
        node.addEventListener('click', function () {
            node.classList.toggle('rotate')
        })
    })

    Array.from(document.querySelectorAll('#step1 .card-selectable')).forEach(function (node) {
        node.addEventListener('click', function () {
            pickRedBrawler(node)
        })
    })

    Array.from(document.querySelectorAll('#step2 .card-selectable:not(.locked)')).forEach(function (node) {
        node.addEventListener('click', function () {
            pickGreenBrawler(node)
        })
    })

    document.querySelector('#how-to-play-button').addEventListener('click', function() {
        _toggleVisibility('#how-to-play-instructions')
        // document.querySelector('#how-to-play-instructions').toggleAttribute('hidden')
    })

    document.querySelector('#step3-button').addEventListener('click', function() {
        document.querySelector('#step3-button').setAttribute('disabled', true)
        rotateFirstCard('#redDeck')
        rotateFirstCard('#greenDeck')
        setTimeout(function() {
            bringCardsTogether()
            setTimeout(function() {
                decideWinner()
                setTimeout(function() {
                    !checkWinners()
                }, 3000)
            }, 2000)
        }, 250)
    })

    document.querySelector('#step3-button-reset').addEventListener('click', function() {
        location.reload();
    })
    document.querySelector('#step3-button-clean').addEventListener('click', function() {
        document.querySelector('#step3-button').removeAttribute('hidden')
        document.querySelector('#step3-button-clean').setAttribute('hidden', true)
        resetBrawl()
        setTimeout(() => {
            shuffleBothDecks()
        }, 300);
    })

    document.querySelector('#step2-button-AI').addEventListener('click', function() {
        RandomAIChoosesBrawlers()
    })
    document.querySelector('#step2-button-AI2').addEventListener('click', function() {
        HardAIChoosesBrawlers()
    })
})();