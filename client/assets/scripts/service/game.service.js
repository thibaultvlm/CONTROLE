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
            .catch(error => {
                console.error('Erreur:', error);
                throw error;
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

    // Mettre à jour un jeu
    modif(game) {
        return fetch(`/api/games/${game._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
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
    }

    // Supprimer un jeu
    remove(id) {
        return fetch(`/api/games/${id}`, {
            method: 'DELETE',
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
}
