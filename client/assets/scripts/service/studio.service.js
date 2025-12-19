export class StudioService {
<<<<<<< HEAD
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
=======
    constructor() {
    }

    getAllStudios(target) {
        let studioHeaders = new Headers();
        let url = '/api/studiogames';
        let options = {
            method: 'GET',
            headers: studioHeaders
        };
        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                data.forEach(element => {
                    let studio = document.createElement('tr');
                    let studioName = document.createElement('td');
                    studioName.innerText = element.name;

                    let studioLocation = document.createElement('td');
                    studioLocation.innerText = element.location;

                    let studioFounded = document.createElement('td');
                    studioFounded.innerText = new Date(element.founded).toLocaleDateString();

                    let studioFounder = document.createElement('td');
                    studioFounder.innerText = element.founder;

                    let studioEmployees = document.createElement('td');
                    studioEmployees.innerText = element.employees;

                    let studioActions = document.createElement('td');

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

                    studioActions.appendChild(editIcon);
                    studioActions.appendChild(deleteIcon);

                    studio.appendChild(studioName);
                    studio.appendChild(studioLocation);
                    studio.appendChild(studioFounded);
                    studio.appendChild(studioFounder);
                    studio.appendChild(studioEmployees);
                    studio.appendChild(studioActions);

                    target.appendChild(studio);
                });
                return data;
            })
            .catch((error) => {
                console.error('Erreur :', error);
            });
    }

    get(id) {
        let studioHeaders = new Headers();
        let url = `/api/studiogames/${id}`;
        let options = {
            method: 'GET',
            headers: studioHeaders
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

    modif(studio) {
        let url = `/api/studiogames/${studio._id}`;
        let options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(studio)
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

    add(studio) {
        let url = `/api/studiogames/`;
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(studio)
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

    remove(id) {
        let url = `/api/studiogames/${id}`;
        let options = {
            method: 'DELETE',
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

    openEditModal(studio) {
        const editStudioModal = document.getElementById('editStudioModal');
        document.getElementById('editId').value = studio._id;
        document.getElementById('editName').value = studio.name;
        document.getElementById('editLocation').value = studio.location;
        document.getElementById('editFounded').value = new Date(studio.founded).toISOString().split('T')[0];
        document.getElementById('editFounder').value = studio.founder;
        document.getElementById('editEmployees').value = studio.employees;
        editStudioModal.style.display = 'block';
    }

    openDeleteModal(id) {
        currentStudioId = id;
        const deleteStudioModal = document.getElementById('deleteStudioModal');
        deleteStudioModal.style.display = 'block';
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
    }
}
