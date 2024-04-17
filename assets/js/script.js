var intro_video = document.getElementById('intro-video');
var main_content = document.getElementById('main-content');

// when u click on video => hide video and show main content
intro_video.addEventListener('click', function () {
    intro_video.style.display = 'none';
    main_content.style.display = 'block';
});
