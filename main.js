// Currently, there is no custom JavaScript for this page.
// Add interactive features here if needed in the future.
document.addEventListener('DOMContentLoaded', function() {
                    const locationCard = document.getElementById('location-card');
                    const mapContainer = document.getElementById('map-container');
                    locationCard.addEventListener('click', function() {
                        mapContainer.classList.toggle('hidden');
                    });
                });