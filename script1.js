function myFunction(name, color, videoSrc) {
    const test = document.getElementById(name);
    const video = document.getElementById('background-video'); // Select the video element

    test.addEventListener('mouseenter', (event) => {
        // Highlight the mouseenter target
        event.target.style.filter = `drop-shadow(0px 0px 10px ${color})`;
        event.target.style.transform = 'scale(1.2)'; // Scale up on hover
        event.target.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition

        images.forEach(img => {
            if (img !== event.target) {
                img.style.opacity = '0.5';
            } else {
                img.style.opacity = '1'; // Ensure the hovered image is fully visible
            }
        });
    });

    test.addEventListener('mouseleave', (event) => {
        // Reset the filter of the mouseleave target
        event.target.style.transform = ''; // Scale up on hover
        event.target.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
        video.play(); // Ensure the video starts playing

        images.forEach(img => {
            img.style.opacity = '';
        });
    });
}

// Call the function with the ID of the element, highlight color, and new video source
myFunction('hae', 'green', 'hae.mp4');
myFunction('han', 'violet', 'hanni.mp4');
myFunction('min', 'aqua', 'video3.mp4');
myFunction('hye', 'pink', 'video4.mp4');
myFunction('dan', 'yellow', 'video5.mp4');
function myFunctions(name, color, videoSrc, bannerId) {
    const test = document.getElementById(name);
    const video = document.getElementById('background-video'); // Select the video element
    const banners = document.querySelectorAll('.banner'); // Select all banner elements

    test.addEventListener('click', (event) => {
        // Highlight the clicked image
        event.target.style.filter = `drop-shadow(0px 0px 10px ${color})`;
        event.target.style.transform = 'scale(1.2)'; // Scale up on click
        event.target.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition

        // Change the video source and play the video
        if (videoSrc) {
            video.src = videoSrc;
            video.play(); // Ensure the video starts playing
        }

        // Hide all banners
        banners.forEach(banner => banner.classList.remove('show'));

        // Show the selected banner
        const selectedBanner = document.getElementById(bannerId);
        if (selectedBanner) {
            selectedBanner.classList.add('show');
        }

        images.forEach(img => {
            if (img !== event.target) {
                img.style.opacity = '0.5'; // Dim other images
            } else {
                img.style.opacity = '1'; // Ensure the clicked image is fully visible
            }
        });
    });
}

// Call the function with the ID of the element, highlight color, new video source, and corresponding banner ID


// Call the function with the ID of the element, highlight color, and new video source
myFunctions('photo', 'none', 'idlebg.mp4','banner0');
myFunctions('hae', 'green', 'haerin.mp4','banner1');
myFunctions('han', 'violet', 'hanni.mp4','banner2');
myFunctions('min', 'aqua', 'minji.mp4','banner3');
myFunctions('hye', 'pink', 'hyein.mp4','banner4');
myFunctions('dan', 'yellow', 'dani.mp4','banner5');

