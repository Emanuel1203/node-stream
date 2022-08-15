const fetch = require("isomorphic-fetch")
const fs = require("fs");

const toSrc = fs.createWriteStream(path.join(_dirname, "./pokemon.json"));

fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
.then((res) => res.text())
.then((data) => toSrc.write(data))
.catch((err) => console.error(err));
