
document.getElementById('video-upload').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    if (file) {
        const videoPlayer = document.getElementById('video-player');
        videoPlayer.src = URL.createObjectURL(file);
        videoPlayer.load(); 
        videoPlayer.play(); 
    }
});


document.getElementById('paste-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('link-input').style.display = 'block';
    document.getElementById('link-input').focus();
});


document.getElementById('video-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
});
