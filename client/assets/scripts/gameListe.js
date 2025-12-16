import { GameService } from "./service/game.service.js";

let tbody = document.querySelector('#gameListe');
const Game = new GameService();
Game.getAllGames(tbody);