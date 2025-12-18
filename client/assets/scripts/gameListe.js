import { GameService } from "./service/game.service.js";

let tbody = document.querySelector('#gameListe');
const Game = new GameService();
Game.getAllGames(tbody);

// Modal pour ajouter un jeu
const addGameModal = document.getElementById('addGameModal');
const addGameBtn = document.getElementById('addGameBtn');
const closeAddModal = addGameModal.querySelector('.close');
const addGameForm = document.getElementById('addGameForm');

// Modal pour modifier un jeu
const editGameModal = document.getElementById('editGameModal');
const closeEditModal = editGameModal.querySelector('.close');
const editGameForm = document.getElementById('editGameForm');

// Modal pour supprimer un jeu
const deleteGameModal = document.getElementById('deleteGameModal');
const closeDeleteModal = deleteGameModal.querySelector('.close');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

// Notification
const notification = document.getElementById('notification');

let currentGameId = null;

// Ouvrir le modal 
addGameBtn.addEventListener('click', () => {
    addGameModal.style.display = 'block';
});

// Fermer le modal 
closeAddModal.addEventListener('click', () => {
    addGameModal.style.display = 'none';
});

// Fermer le modal 
closeEditModal.addEventListener('click', () => {
    editGameModal.style.display = 'none';
});

// Fermer le modal
closeDeleteModal.addEventListener('click', () => {
    deleteGameModal.style.display = 'none';
});

// Annule la suppression
cancelDeleteBtn.addEventListener('click', () => {
    deleteGameModal.style.display = 'none';
});

// Soumettre le formulaire 
addGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(addGameForm);
    let game = {
        title: formData.get('title'),
        genre: formData.get('genre'),
        releaseDate: formData.get('releaseDate'),
        developer: formData.get('developer'),
        platform: formData.get('platform')
    };
    Game.add(game)
        .then(() => {
            addGameModal.style.display = 'none';
            addGameForm.reset();
            showNotification('Jeu ajouté avec succès');
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
});

// Soumettre le formulaire 
editGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(editGameForm);
    let game = {
        _id: formData.get('id'),
        title: formData.get('title'),
        genre: formData.get('genre'),
        releaseDate: formData.get('releaseDate'),
        developer: formData.get('developer'),
        platform: formData.get('platform')
    };
    Game.modif(game)
        .then(() => {
            editGameModal.style.display = 'none';
            showNotification('Jeu modifié avec succès');
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
});

// Confirmer la suppression
confirmDeleteBtn.addEventListener('click', () => {
    Game.remove(currentGameId)
        .then(() => {
            deleteGameModal.style.display = 'none';
            showNotification('Jeu supprimé avec succès');
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
});

// Fonction pour afficher une notification
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Modifcation & Suppression icons
GameService.prototype.getAllGames = function(target) {
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
        });
};

// Ouverture de la modal
GameService.prototype.openEditModal = function(game) {
    const editGameModal = document.getElementById('editGameModal');
    document.getElementById('editId').value = game._id;
    document.getElementById('editTitle').value = game.title;
    document.getElementById('editGenre').value = game.genre;
    document.getElementById('editReleaseDate').value = new Date(game.releaseDate).toISOString().split('T')[0];
    document.getElementById('editDeveloper').value = game.developer;
    document.getElementById('editPlatform').value = game.platform;
    editGameModal.style.display = 'block';
};

GameService.prototype.openDeleteModal = function(id) {
    currentGameId = id;
    const deleteGameModal = document.getElementById('deleteGameModal');
    deleteGameModal.style.display = 'block';
};
