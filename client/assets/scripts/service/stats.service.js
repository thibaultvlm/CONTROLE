export class StatsService {
    constructor() {
    }

    // Récupérer les 3 derniers jeux
    getLatestGames() {
        return fetch('/api/games/latest/games')
            .then(res => {
                if(!res.ok) {
                    throw new Error(`Erreur http! statut: ${res.status}`);
                }
                return res.json();
            })
            .catch(error => {
                console.error('Erreur:', error);
                throw error;
            })
    }


    // Récupérer les stats
    getStats() {
        return fetch('/api/games/stats/all')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erreur http! statut: ${res.status}`);
                }
                return res.json();
            })
            .catch(error => {
                console.error('Erreur :', error);
                throw error;
            })
    }
}