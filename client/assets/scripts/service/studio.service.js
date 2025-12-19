export class StudioService {
    constructor() {}

    // Récupérer tous les studios
    getAllStudios() {
        return fetch('/api/studiogames')
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

    // Récupérer un studio par ID
    get(id) {
        return fetch(`/api/studiogames/${id}`)
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

    // Ajouter un nouveau studio
    add(studio) {
        return fetch('/api/studiogames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studio),
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

    // Mettre à jour un studio
    modif(studio) {
        return fetch(`/api/studiogames/${studio._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studio),
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

    // Supprimer un studio
    remove(id) {
        return fetch(`/api/studiogames/${id}`, {
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
