document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let imageInput = document.getElementById('imageInput');
    let captionInput = document.getElementById('captionInput');

    if (imageInput.files.length === 0) {
        alert('Please select an image file.');
        return;
    }

    if (captionInput.value.trim() === '') {
        alert('Please enter a caption.');
        return;
    }

    let formData = new FormData();
    formData.append('image', imageInput.files[0]);
    formData.append('caption', captionInput.value.trim());

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Image uploaded successfully.');
            document.getElementById('imageForm').reset();
        } else {
            alert('Failed to upload image. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to upload image. Please try again.');
    });
});
