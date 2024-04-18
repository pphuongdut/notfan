var intro_video = document.getElementById('intro-video');
var main_content = document.getElementById('main-content');

// when u click on video => hide video and show main content
intro_video.addEventListener('click', function () {
    intro_video.style.display = 'none';
    main_content.style.opacity = 1;
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';
});

// reload, scroll to top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    // reset style
    intro_video.style.display = 'block';
    main_content.style.opacity = 0;
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
};
