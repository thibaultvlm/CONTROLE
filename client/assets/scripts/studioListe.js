<<<<<<< HEAD
import { StudioService } from "./service/studio.service.js";

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#studioListe');
    const studioService = new StudioService();
    const notification = document.getElementById('notification');

    const addStudioModal = document.getElementById('addStudioModal');
    const addStudioBtn = document.getElementById('addStudioBtn');
    const closeAddModal = addStudioModal.querySelector('.close');
    const addStudioForm = document.getElementById('addStudioForm');

    const editStudioModal = document.getElementById('editStudioModal');
    const closeEditModal = editStudioModal.querySelector('.close');
    const editStudioForm = document.getElementById('editStudioForm');

    const deleteStudioModal = document.getElementById('deleteStudioModal');
    const closeDeleteModal = deleteStudioModal.querySelector('.close');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

    let currentStudioId = null;

    addStudioBtn.addEventListener('click', () => addStudioModal.style.display = 'block');
    closeAddModal.addEventListener('click', () => addStudioModal.style.display = 'none');
    closeEditModal.addEventListener('click', () => editStudioModal.style.display = 'none');
    closeDeleteModal.addEventListener('click', () => deleteStudioModal.style.display = 'none');
    cancelDeleteBtn.addEventListener('click', () => deleteStudioModal.style.display = 'none');

    function showNotification(message, isError = false) {
        notification.textContent = message;
        notification.className = isError ? 'notification error' : 'notification success';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 3000);
    }

    function loadStudios() {
        studioService.getAllStudios()
            .then(studios => {
                tbody.innerHTML = '';
                studios.forEach(studio => {
                    const tr = document.createElement('tr');

                    const imgTd = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = studio.imageUrl || 'https://via.placeholder.com/50x50/1a1a2e/9b59b6?text=No+Image';
                    img.alt = studio.name;
                    img.style.width = '50px';
                    img.style.height = '50px';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '4px';
                    imgTd.appendChild(img);
                    tr.appendChild(imgTd);

                    const nameTd = document.createElement('td');
                    nameTd.textContent = studio.name;
                    tr.appendChild(nameTd);

                    const locationTd = document.createElement('td');
                    locationTd.textContent = studio.location;
                    tr.appendChild(locationTd);

                    const foundedTd = document.createElement('td');
                    foundedTd.textContent = new Date(studio.founded).toLocaleDateString();
                    tr.appendChild(foundedTd);

                    const founderTd = document.createElement('td');
                    founderTd.textContent = studio.founder;
                    tr.appendChild(founderTd);

                    const employeesTd = document.createElement('td');
                    employeesTd.textContent = studio.employees;
                    tr.appendChild(employeesTd);

                    const actionsTd = document.createElement('td');
                    const detailsLink = document.createElement('a');
                    detailsLink.href = `/detailsStudio.html?id=${studio._id}`;
                    detailsLink.innerHTML = '<i class="fas fa-info-circle"></i>';

                    const editIcon = document.createElement('i');
                    editIcon.classList.add('fas', 'fa-edit', 'icon-edit');
                    editIcon.addEventListener('click', () => openEditModal(studio));

                    const deleteIcon = document.createElement('i');
                    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icon-delete');
                    deleteIcon.addEventListener('click', () => openDeleteModal(studio._id));

                    actionsTd.appendChild(detailsLink);
                    actionsTd.appendChild(editIcon);
                    actionsTd.appendChild(deleteIcon);
                    tr.appendChild(actionsTd);

                    tbody.appendChild(tr);
                });
            })
            .catch(error => {
                showNotification("Erreur lors du chargement des studios", true);
                console.error(error);
            });
    }

    function openEditModal(studio) {
        document.getElementById('editId').value = studio._id;
        document.getElementById('editName').value = studio.name;
        document.getElementById('editLocation').value = studio.location;
        document.getElementById('editFounded').value = new Date(studio.founded).toISOString().split('T')[0];
        document.getElementById('editFounder').value = studio.founder;
        document.getElementById('editEmployees').value = studio.employees;
        document.getElementById('editImageUrl').value = studio.imageUrl || '';
        editStudioModal.style.display = 'block';
    }

    function openDeleteModal(id) {
        currentStudioId = id;
        deleteStudioModal.style.display = 'block';
    }

    addStudioForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(addStudioForm);
        const studio = {
            name: formData.get('name'),
            location: formData.get('location'),
            founded: formData.get('founded'),
            founder: formData.get('founder'),
            employees: formData.get('employees'),
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/300x200/1a1a2e/9b59b6?text=No+Image'
        };

        studioService.add(studio)
            .then(() => {
                showNotification("Studio ajouté avec succès");
                addStudioModal.style.display = 'none';
                addStudioForm.reset();
                loadStudios();
            })
            .catch(error => {
                showNotification("Erreur lors de l'ajout", true);
                console.error(error);
            });
    });

    editStudioForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(editStudioForm);
        const studio = {
            _id: formData.get('id'),
            name: formData.get('name'),
            location: formData.get('location'),
            founded: formData.get('founded'),
            founder: formData.get('founder'),
            employees: formData.get('employees'),
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/300x200/1a1a2e/9b59b6?text=No+Image'
        };

        studioService.modif(studio)
            .then(() => {
                showNotification("Studio modifié avec succès");
                editStudioModal.style.display = 'none';
                loadStudios();
            })
            .catch(error => {
                showNotification("Erreur lors de la modification", true);
                console.error(error);
            });
    });

    confirmDeleteBtn.addEventListener('click', () => {
        studioService.remove(currentStudioId)
            .then(() => {
                showNotification("Studio supprimé avec succès");
                deleteStudioModal.style.display = 'none';
                loadStudios();
            })
            .catch(error => {
                showNotification("Erreur lors de la suppression", true);
                console.error(error);
            });
    });

    loadStudios();
});
=======
import { StudioService  } from "./service/studio.service.js";

let tbody = document.querySelector('#studioListe');
const Studio = new StudioService();
Studio.getAllStudios(tbody);

// Modal pour ajouter un studio
const addStudioModal = document.getElementById('addStudioModal');
const addStudioBtn = document.getElementById('addStudioBtn');
const closeAddModal = addStudioModal.querySelector('.close');
const addStudioForm = document.getElementById('addStudioForm');

// Modal pour modifier un studio
const editStudioModal = document.getElementById('editStudioModal');
const closeEditModal = editStudioModal.querySelector('.close');
const editStudioForm = document.getElementById('editStudioForm');

// Modal pour supprimer un studio
const deleteStudioModal = document.getElementById('deleteStudioModal');
const closeDeleteModal = deleteStudioModal.querySelector('.close');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

// Notification
const notification = document.getElementById('notification');

let currentStudioId = null;

// Ouvrir le modal pour ajouter un studio
addStudioBtn.addEventListener('click', () => {
    addStudioModal.style.display = 'block';
});

// Fermer le modal pour ajouter un studio
closeAddModal.addEventListener('click', () => {
    addStudioModal.style.display = 'none';
});

// Fermer le modal pour modifier un studio
closeEditModal.addEventListener('click', () => {
    editStudioModal.style.display = 'none';
});

// Fermer le modal pour supprimer un studio
closeDeleteModal.addEventListener('click', () => {
    deleteStudioModal.style.display = 'none';
});

// Annuler la suppression
cancelDeleteBtn.addEventListener('click', () => {
    deleteStudioModal.style.display = 'none';
});

// Soumettre le formulaire pour ajouter un studio
addStudioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(addStudioForm);
    let studio = {
        name: formData.get('name'),
        location: formData.get('location'),
        founded: formData.get('founded'),
        founder: formData.get('founder'),
        employees: formData.get('employees')
    };
    Studio.add(studio)
        .then(() => {
            addStudioModal.style.display = 'none';
            addStudioForm.reset();
            showNotification('Studio ajouté avec succès');
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
});

// Soumettre le formulaire pour modifier un studio
editStudioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(editStudioForm);
    let studio = {
        _id: formData.get('id'),
        name: formData.get('name'),
        location: formData.get('location'),
        founded: formData.get('founded'),
        founder: formData.get('founder'),
        employees: formData.get('employees')
    };
    Studio.modif(studio)
        .then(() => {
            editStudioModal.style.display = 'none';
            showNotification('Studio modifié avec succès');
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
    Studio.remove(currentStudioId)
        .then(() => {
            deleteStudioModal.style.display = 'none';
            showNotification('Studio supprimé avec succès');
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
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
