document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    // Handle star rating selection
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected'); // Clear previous selections
            });
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('selected'); // Mark selected stars
            }
        });
    });

    // Handle form submission
    document.getElementById('submitButton').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        // Check if all fields are filled
        if (name && review && selectedRating > 0) {
            document.getElementById('reviewForm').classList.add('hidden'); // Hide the form
            document.getElementById('thankYouMessage').classList.remove('hidden'); // Show thank you message
        } else {
            alert('Please fill in all fields and select a rating.'); // Alert user if fields are empty
        }
    });

    // Handle "Go Back" button to reset the form
    document.getElementById('backButton').addEventListener('click', function() {
        document.getElementById('thankYouMessage').classList.add('hidden'); // Hide thank you message
        document.getElementById('reviewForm').classList.remove('hidden'); // Show the form again

        // Reset form fields and selected rating
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
        stars.forEach(s => s.classList.remove('selected'));
        selectedRating = 0;
    });
});
