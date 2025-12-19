import { StatsService } from "./service/stats.service.js";

document.addEventListener('DOMContentLoaded', () => {
    const statsService = new StatsService();

    // Récupérer et afficher les statistiques
    statsService.getStats()
        .then(stats => {
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
            container.innerHTML = '';

            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'card';
                gameCard.innerHTML = `
                    <img src="${game.imageUrl || 'https://via.placeholder.com/300x200/1a1a2e/00d4aa?text=' + encodeURIComponent(game.title)}"
                         class="game-cover" alt="${game.title}">
                    <h4 style="margin: 10px 0 5px;">${game.title}</h4>
                    <div style="display: flex; gap: 5px; margin-bottom: 10px;">
                        <span class="badge">${game.genre}</span>
                        <span class="badge badge-purple">${game.developer}</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--secondary-text);">
                        ${new Date(game.releaseDate).getFullYear()} - ${game.platform}
                    </p>
                `;
                container.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des derniers jeux:', error);
        });
});
