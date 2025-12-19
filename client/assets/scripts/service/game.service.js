export class GameService {
    constructor() {}

    // Récupérer tous les jeux
    getAllGames() {
        return fetch('/api/games')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP! statut: ${res.status}`);
                }
                return res.json();
            })
<<<<<<< HEAD
            .catch(error => {
                console.error('Erreur:', error);
                throw error;
=======
            .then((data) => {
                data.forEach(element => {
                    let game = document.createElement('tr');
                    let gameTitle = document.createElement('td');
                    gameTitle.innerText = element.title;

                    let gameGenre = document.createElement('td');
                    gameGenre.innerText = element.genre;

                    let gameReleaseDate = document.createElement('td');
                    gameReleaseDate.innerText = new Date(element.releaseDate).toLocaleDateString();

                    let gameDeveloper = document.createElement('td');
                    gameDeveloper.innerText = element.developer;

                    let gamePlatform = document.createElement('td');
                    gamePlatform.innerText = element.platform;

                    let gameActions = document.createElement('td');

                    let editIcon = document.createElement('i');
                    editIcon.classList.add('fas', 'fa-edit', 'icon-edit');
                    editIcon.addEventListener('click', () => {
                        this.openEditModal(element);
                    });

                    let deleteIcon = document.createElement('i');
                    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icon-delete');
                    deleteIcon.addEventListener('click', () => {
                        this.openDeleteModal(element._id);
                    });

                    gameActions.appendChild(editIcon);
                    gameActions.appendChild(deleteIcon);

                    game.appendChild(gameTitle);
                    game.appendChild(gameGenre);
                    game.appendChild(gameReleaseDate);
                    game.appendChild(gameDeveloper);
                    game.appendChild(gamePlatform);
                    game.appendChild(gameActions);

                    target.appendChild(game);
                });
                return data;
            })
            .catch((error) => {
                console.error('Erreur :', error);
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
            });
    }

    // Récupérer un jeu par ID
    get(id) {
        return fetch(`/api/games/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP! statut: ${res.status}`);
                }
                return res.json();
            })
            .catch(error => {
                console.error('Erreur:', error);
                throw error;
            });
    }

    // Ajouter un nouveau jeu
    add(game) {
        return fetch('/api/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        })
<<<<<<< HEAD
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur HTTP! statut: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error('Erreur:', error);
            throw error;
=======
        .catch((error) => {
            console.error('Erreur :', error);
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
        });
    }

    // Mettre à jour un jeu
    modif(game) {
<<<<<<< HEAD
        return fetch(`/api/games/${game._id}`, {
=======
        let url = `/api/games/${game._id}`;
        let options = {
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
<<<<<<< HEAD
            body: JSON.stringify(game),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur HTTP! statut: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error('Erreur:', error);
            throw error;
        });
=======
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(game)
        };

        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .catch((error) => {
                console.error('Erreur :', error);
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
                    return res.json();
                }
            })
            .catch((error) => {
                console.error('Erreur :', error);
            });
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
    }

    // Supprimer un jeu
    remove(id) {
        return fetch(`/api/games/${id}`, {
            method: 'DELETE',
<<<<<<< HEAD
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur HTTP! statut: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error('Erreur:', error);
            throw error;
        });
    }
=======
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
                    return res.json();
                }
            })
            .catch((error) => {
                console.error('Erreur :', error);
            });
    }

    openEditModal(game) {
        const editGameModal = document.getElementById('editGameModal');
        document.getElementById('editId').value = game._id;
        document.getElementById('editTitle').value = game.title;
        document.getElementById('editGenre').value = game.genre;
        document.getElementById('editReleaseDate').value = new Date(game.releaseDate).toISOString().split('T')[0];
        document.getElementById('editDeveloper').value = game.developer;
        document.getElementById('editPlatform').value = game.platform;
        editGameModal.style.display = 'block';
    }

    openDeleteModal(id) {
        currentGameId = id;
        const deleteGameModal = document.getElementById('deleteGameModal');
        deleteGameModal.style.display = 'block';
    }
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
}
