import { Games } from '../class/game.class.js';

export class GameService {
    constructor() {
    }

    getAllGames(target) {
        let gameHeaders = new Headers();
        let url = '/api/games';
        let options = {
            method: 'GET',
            headers: gameHeaders
        };
        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((data)=> {
                data.forEach(element => {
                    let game = document.createElement('tr');
                    let gameTitle = document.createElement('td');
                    gameTitle.innerText = element.title;

                    let gameModif = document.createElement('td');
                    let icone = document.createElement('i');
                    icone.classList.add('fas', 'fa-edit', 'icon-modif');

                    let gameDetails = document.createElement('a');
                    gameDetails.href = `/public/details.html#${element._id}`;
                    gameDetails.appendChild(icone);
                    gameModif.appendChild(gameDetails);

                    let gameDelete = document.createElement('td');
                    let btnDelete = document.createElement('button');
                    let iconDelete = document.createElement('i');
                    iconDelete.classList.add('fas', 'fa-trash-alt', 'icon-delete');
                    btnDelete.classList.add('btn-delete');
                    gameDelete.appendChild(btnDelete);
                    btnDelete.appendChild(iconDelete);
                    btnDelete.addEventListener('click', () => {
                        this.remove(element._id);
                    });
                    target.appendChild(game);
                    game.appendChild(gameTitle);
                    game.appendChild(gameModif);
                    game.appendChild(gameDelete);
                });         
                return data;
            })
            .catch((error) => {
                console.error('[⚠️] Erreur :', error);
            });
    }

    get(id) {
        let gameHeaders = new Headers();
        let url = `/api/games/${id}`;
        let options = {
            method: 'GET',
            headers: gameHeaders
        };
        return fetch(url, options)
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
        })
        .catch((error) => {
            console.error('[⚠️] Erreur :', error);
        });
    }

    modif(game) {
        console.log(game);
        let url = `/api/games/${game._id}`;
        let options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(game)
        };

        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    console.log('[✅] Jeu modifié')
                }
            })
            .catch((error) => {
                console.error('[⚠️] Erreur :', error);
            });
    }
    add(game) {
        let url = `/api/games/`;
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(game)
        };

        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    console.log('[✅] Jeu ajouté')
                }
            })
            .catch((error) => {
                console.error('[⚠️] Erreur :', error);
            });
    }

    remove(id) {
        let url = `/api/games/${id}`;
        let options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
        };
        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    console.log('[✅] Jeu supprimé')
                }
            })
            .catch((error) => {
                console.error('[⚠️] Erreur :', error);
            });
    }
}