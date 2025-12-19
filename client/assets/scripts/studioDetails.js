import { StudioService } from "./service/studio.service.js";
import { Studio } from "./class/studio.class.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const studioService = new StudioService();
    const notification = document.getElementById('notification');

    const editStudioModal = document.getElementById('editStudioModal');
    const deleteStudioModal = document.getElementById('deleteStudioModal');
    const editStudioBtn = document.getElementById('editStudioBtn');
    const deleteStudioBtn = document.getElementById('deleteStudioBtn');
    const closeEditModal = editStudioModal.querySelector('.close');
    const closeDeleteModal = deleteStudioModal.querySelector('.close');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const editStudioForm = document.getElementById('editStudioForm');

    closeEditModal.addEventListener('click', () => editStudioModal.style.display = 'none');
    closeDeleteModal.addEventListener('click', () => deleteStudioModal.style.display = 'none');
    cancelDeleteBtn.addEventListener('click', () => deleteStudioModal.style.display = 'none');

    function showNotification(message, isError = false) {
        notification.textContent = message;
        notification.className = isError ? 'notification error' : 'notification success';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 3000);
    }

    function loadStudioDetails(id) {
        studioService.get(id)
            .then(studioData => {
                const imageUrl = studioData.imageUrl || 'https://via.placeholder.com/300x300/1a1a2e/9b59b6?text=No+Image';

                const studio = new Studio(
                    studioData._id,
                    studioData.name,
                    studioData.location,
                    studioData.founded,
                    studioData.founder,
                    studioData.employees,
                    imageUrl
                );

                document.getElementById('studioImage').src = studio.imageUrl;
                document.getElementById('studioImage').alt = studio.name;
                document.getElementById('studioName').textContent = studio.name;
                document.getElementById('studioFounded').textContent = new Date(studio.founded).toLocaleDateString();
                document.getElementById('studioFounder').textContent = studio.founder;
                document.getElementById('studioEmployees').textContent = studio.employees;
                document.getElementById('studioLocationBadge').textContent = studio.location;
            })
            .catch(error => {
                showNotification("Erreur lors du chargement des détails", true);
                console.error(error);
            });
    }

    editStudioBtn.addEventListener('click', () => {
        studioService.get(id)
            .then(studioData => {
                const imageUrl = studioData.imageUrl || 'https://via.placeholder.com/300x300/1a1a2e/9b59b6?text=No+Image';

                const studio = new Studio(
                    studioData._id,
                    studioData.name,
                    studioData.location,
                    studioData.founded,
                    studioData.founder,
                    studioData.employees,
                    imageUrl
                );

                document.getElementById('editId').value = studio.id;
                document.getElementById('editName').value = studio.name;
                document.getElementById('editLocation').value = studio.location;
                document.getElementById('editFounded').value = new Date(studio.founded).toISOString().split('T')[0];
                document.getElementById('editFounder').value = studio.founder;
                document.getElementById('editEmployees').value = studio.employees;
                document.getElementById('editImageUrl').value = studio.imageUrl;
                editStudioModal.style.display = 'block';
            })
            .catch(error => {
                showNotification("Erreur lors de la récupération des données", true);
                console.error(error);
            });
    });

    deleteStudioBtn.addEventListener('click', () => deleteStudioModal.style.display = 'block');

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
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/300x300/1a1a2e/9b59b6?text=No+Image'
        };

        studioService.modif(studio)
            .then(() => {
                showNotification("Studio modifié avec succès");
                editStudioModal.style.display = 'none';
                loadStudioDetails(id);
            })
            .catch(error => {
                showNotification("Erreur lors de la modification", true);
                console.error(error);
            });
    });

    confirmDeleteBtn.addEventListener('click', () => {
        studioService.remove(id)
            .then(() => {
                showNotification("Studio supprimé avec succès");
                deleteStudioModal.style.display = 'none';
                setTimeout(() => window.location.href = '/listestudio.html', 1000);
            })
            .catch(error => {
                showNotification("Erreur lors de la suppression", true);
                console.error(error);
            });
    });

    if (id) {
        loadStudioDetails(id);
    } else {
        showNotification("ID du studio non trouvé dans l'URL", true);
    }
});
