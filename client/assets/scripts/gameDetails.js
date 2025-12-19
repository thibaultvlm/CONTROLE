import { GameService } from "./service/game.service.js";
import { Game } from "./class/game.class.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const gameService = new GameService();
    const notification = document.getElementById('notification');

    const editGameModal = document.getElementById('editGameModal');
    const deleteGameModal = document.getElementById('deleteGameModal');
    const editGameBtn = document.getElementById('editGameBtn');
    const deleteGameBtn = document.getElementById('deleteGameBtn');
    const closeEditModal = editGameModal.querySelector('.close');
    const closeDeleteModal = deleteGameModal.querySelector('.close');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const editGameForm = document.getElementById('editGameForm');

    closeEditModal.addEventListener('click', () => editGameModal.style.display = 'none');
    closeDeleteModal.addEventListener('click', () => deleteGameModal.style.display = 'none');
    cancelDeleteBtn.addEventListener('click', () => deleteGameModal.style.display = 'none');

    function showNotification(message, isError = false) {
        notification.textContent = message;
        notification.className = isError ? 'notification error' : 'notification success';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 3000);
    }

    function loadGameDetails(id) {
        gameService.get(id)
            .then(gameData => {
                const imageUrl = gameData.imageUrl || 'https://via.placeholder.com/600x300/1a1a2e/00d4aa?text=No+Image';

                const game = new Game(
                    gameData._id,
                    gameData.title,
                    gameData.genre,
                    gameData.releaseDate,
                    gameData.developer,
                    gameData.platform,
                    imageUrl
                );

                document.getElementById('gameImage').src = game.imageUrl;
                document.getElementById('gameImage').alt = game.title;
                document.getElementById('gameTitle').textContent = game.title;
                document.getElementById('gameReleaseDate').textContent = new Date(game.releaseDate).toLocaleDateString();
                document.getElementById('gameDeveloper').textContent = game.developer;
                document.getElementById('gamePlatform').textContent = game.platform;
                document.getElementById('gameGenre').textContent = game.genre;
            })
            .catch(error => {
                showNotification("Erreur lors du chargement des détails", true);
                console.error(error);
            });
    }

    editGameBtn.addEventListener('click', () => {
        gameService.get(id)
            .then(gameData => {
                const imageUrl = gameData.imageUrl || 'https://via.placeholder.com/600x300/1a1a2e/00d4aa?text=No+Image';

                const game = new Game(
                    gameData._id,
                    gameData.title,
                    gameData.genre,
                    gameData.releaseDate,
                    gameData.developer,
                    gameData.platform,
                    imageUrl
                );

                document.getElementById('editId').value = game.id;
                document.getElementById('editTitle').value = game.title;
                document.getElementById('editGenre').value = game.genre;
                document.getElementById('editReleaseDate').value = new Date(game.releaseDate).toISOString().split('T')[0];
                document.getElementById('editDeveloper').value = game.developer;
                document.getElementById('editPlatform').value = game.platform;
                document.getElementById('editImageUrl').value = game.imageUrl;
                editGameModal.style.display = 'block';
            })
            .catch(error => {
                showNotification("Erreur lors de la récupération des données", true);
                console.error(error);
            });
    });

    deleteGameBtn.addEventListener('click', () => deleteGameModal.style.display = 'block');

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
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/600x300/1a1a2e/00d4aa?text=No+Image'
        };

        gameService.modif(game)
            .then(() => {
                showNotification("Jeu modifié avec succès");
                editGameModal.style.display = 'none';
                loadGameDetails(id);
            })
            .catch(error => {
                showNotification("Erreur lors de la modification", true);
                console.error(error);
            });
    });

    confirmDeleteBtn.addEventListener('click', () => {
        gameService.remove(id)
            .then(() => {
                showNotification("Jeu supprimé avec succès");
                deleteGameModal.style.display = 'none';
                setTimeout(() => window.location.href = '/listegames.html', 1000);
            })
            .catch(error => {
                showNotification("Erreur lors de la suppression", true);
                console.error(error);
            });
    });

    if (id) {
        loadGameDetails(id);
    } else {
        showNotification("ID du jeu non trouvé dans l'URL", true);
    }
});
