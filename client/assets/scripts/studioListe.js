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
