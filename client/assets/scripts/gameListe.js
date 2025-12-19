import { GameService } from "./service/game.service.js";

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
