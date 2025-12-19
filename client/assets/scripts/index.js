import { StatsService } from "./service/stats.service.js";

document.addEventListener('DOMContentLoaded', () => {
    const statsService = new StatsService();

    // Récupérer et afficher les statistiques
    statsService.getStats()
        .then(stats => {
            // Mise à jour des badges et stats
            document.getElementById('totalGamesBadge').textContent = `${stats.gameCount} jeux`;
            document.getElementById('totalStudiosBadge').textContent = `${stats.studioCount} studios`;
            document.getElementById('totalGenresBadge').textContent = `${stats.genreCount} genres`;

            document.getElementById('statsGameCount').textContent = stats.gameCount;
            document.getElementById('statsStudioCount').textContent = stats.studioCount;
            document.getElementById('statsGenreCount').textContent = stats.genreCount;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des statistiques:', error);
        });

    // Récupérer et afficher les derniers jeux ajoutés
    statsService.getLatestGames()
        .then(games => {
            const container = document.getElementById('latestGamesContainer');
            container.innerHTML = ''; // Nettoyer le conteneur

            // Limiter à 3 jeux maximum
            games.slice(0, 3).forEach(game => {
                // Créer la carte de jeu
                const gameCard = document.createElement('div');
                gameCard.className = 'card';

                // Formater la date de sortie
                const releaseYear = game.releaseDate ?
                    new Date(game.releaseDate).getFullYear() :
                    'Inconnu';

                // URL de l'image avec fallback personnalisé
                const imageUrl = game.imageUrl ||
                    `https://via.placeholder.com/300x200/1a1a2e/00d4aa?text=${encodeURIComponent(game.title)}`;

                // Contenu HTML de la carte
                gameCard.innerHTML = `
                    <div class="image-container">
                        <img src="${imageUrl}"
                             class="game-cover"
                             alt="${game.title}"
                             onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/00d4aa?text=No+Image'">
                    </div>
                    <h4>${game.title}</h4>
                    <div class="badge-container" style="display: flex; gap: 5px; justify-content: center; margin-bottom: 10px;">
                        <span class="badge">${game.genre || 'Inconnu'}</span>
                        <span class="badge badge-purple">${game.developer || 'Inconnu'}</span>
                    </div>
                    <p class="game-info" style="font-size: 0.9rem; color: var(--secondary-text); margin-top: auto;">
                        ${releaseYear} - ${game.platform || 'Inconnu'}
                    </p>
                `;

                container.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des derniers jeux:', error);
            // Afficher un message d'erreur si nécessaire
            const container = document.getElementById('latestGamesContainer');
            container.innerHTML = `
                <div style="text-align: center; grid-column: 1 / -1; color: var(--text-color);">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                    Impossible de charger les derniers jeux.
                </div>
            `;
        });
});
