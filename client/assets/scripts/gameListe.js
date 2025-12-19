import { GameService } from "./service/game.service.js";

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#gameListe');
    const gameService = new GameService();
    const notification = document.getElementById('notification');

    const addGameModal = document.getElementById('addGameModal');
    const addGameBtn = document.getElementById('addGameBtn');
    const closeAddModal = addGameModal.querySelector('.close');
    const addGameForm = document.getElementById('addGameForm');

    const editGameModal = document.getElementById('editGameModal');
    const closeEditModal = editGameModal.querySelector('.close');
    const editGameForm = document.getElementById('editGameForm');

    const deleteGameModal = document.getElementById('deleteGameModal');
    const closeDeleteModal = deleteGameModal.querySelector('.close');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

    let currentGameId = null;

    addGameBtn.addEventListener('click', () => addGameModal.style.display = 'block');
    closeAddModal.addEventListener('click', () => addGameModal.style.display = 'none');
    closeEditModal.addEventListener('click', () => editGameModal.style.display = 'none');
    closeDeleteModal.addEventListener('click', () => deleteGameModal.style.display = 'none');
    cancelDeleteBtn.addEventListener('click', () => deleteGameModal.style.display = 'none');

    function showNotification(message, isError = false) {
        notification.textContent = message;
        notification.className = isError ? 'notification error' : 'notification success';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 3000);
    }

    function loadGames() {
        gameService.getAllGames()
            .then(games => {
                tbody.innerHTML = '';
                games.forEach(game => {
                    const tr = document.createElement('tr');

                    const imgTd = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = game.imageUrl || 'https://via.placeholder.com/50x50/1a1a2e/00d4aa?text=No+Image';
                    img.alt = game.title;
                    img.style.width = '50px';
                    img.style.height = '50px';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '4px';
                    imgTd.appendChild(img);
                    tr.appendChild(imgTd);

                    const titleTd = document.createElement('td');
                    titleTd.textContent = game.title;
                    tr.appendChild(titleTd);

                    const genreTd = document.createElement('td');
                    genreTd.textContent = game.genre;
                    tr.appendChild(genreTd);

                    const releaseDateTd = document.createElement('td');
                    releaseDateTd.textContent = new Date(game.releaseDate).toLocaleDateString();
                    tr.appendChild(releaseDateTd);

                    const developerTd = document.createElement('td');
                    developerTd.textContent = game.developer;
                    tr.appendChild(developerTd);

                    const platformTd = document.createElement('td');
                    platformTd.textContent = game.platform;
                    tr.appendChild(platformTd);

                    const actionsTd = document.createElement('td');
                    const detailsLink = document.createElement('a');
                    detailsLink.href = `/detailsGames.html?id=${game._id}`;
                    detailsLink.innerHTML = '<i class="fas fa-info-circle"></i>';

                    const editIcon = document.createElement('i');
                    editIcon.classList.add('fas', 'fa-edit', 'icon-edit');
                    editIcon.addEventListener('click', () => openEditModal(game));

                    const deleteIcon = document.createElement('i');
                    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icon-delete');
                    deleteIcon.addEventListener('click', () => openDeleteModal(game._id));

                    actionsTd.appendChild(detailsLink);
                    actionsTd.appendChild(editIcon);
                    actionsTd.appendChild(deleteIcon);
                    tr.appendChild(actionsTd);

                    tbody.appendChild(tr);
                });
            })
            .catch(error => {
                showNotification("Erreur lors du chargement des jeux", true);
                console.error(error);
            });
    }

    function openEditModal(game) {
        document.getElementById('editId').value = game._id;
        document.getElementById('editTitle').value = game.title;
        document.getElementById('editGenre').value = game.genre;
        document.getElementById('editReleaseDate').value = new Date(game.releaseDate).toISOString().split('T')[0];
        document.getElementById('editDeveloper').value = game.developer;
        document.getElementById('editPlatform').value = game.platform;
        document.getElementById('editImageUrl').value = game.imageUrl || '';
        editGameModal.style.display = 'block';
    }

    function openDeleteModal(id) {
        currentGameId = id;
        deleteGameModal.style.display = 'block';
    }

    addGameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(addGameForm);
        const game = {
            title: formData.get('title'),
            genre: formData.get('genre'),
            releaseDate: formData.get('releaseDate'),
            developer: formData.get('developer'),
            platform: formData.get('platform'),
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/300x200/1a1a2e/00d4aa?text=No+Image'
        };

        gameService.add(game)
            .then(() => {
                showNotification("Jeu ajouté avec succès");
                addGameModal.style.display = 'none';
                addGameForm.reset();
                loadGames();
            })
            .catch(error => {
                showNotification("Erreur lors de l'ajout", true);
                console.error(error);
            });
    });

    editGameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(editGameForm);
        const game = {
            _id: formData.get('id'),
            title: formData.get('title'),
            genre: formData.get('genre'),
            releaseDate: formData.get('releaseDate'),
            developer: formData.get('developer'),
            platform: formData.get('platform'),
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/300x200/1a1a2e/00d4aa?text=No+Image'
        };

        gameService.modif(game)
            .then(() => {
                showNotification("Jeu modifié avec succès");
                editGameModal.style.display = 'none';
                loadGames();
            })
            .catch(error => {
                showNotification("Erreur lors de la modification", true);
                console.error(error);
            });
    });

    confirmDeleteBtn.addEventListener('click', () => {
        gameService.remove(currentGameId)
            .then(() => {
                showNotification("Jeu supprimé avec succès");
                deleteGameModal.style.display = 'none';
                loadGames();
            })
            .catch(error => {
                showNotification("Erreur lors de la suppression", true);
                console.error(error);
            });
    });

    loadGames();
});
=======
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
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
