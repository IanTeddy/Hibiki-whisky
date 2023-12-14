//toggle three images of blenders
function showImage(imageId) {
    
    document.querySelectorAll('.image').forEach(function (img) { 
        img.classList.add('hidden');    //hide all images
    });
    document.getElementById(imageId).classList.remove('hidden');
}

// list of images
const imageIds = ['image1', 'image2', 'image3'];

let currentIndex = 0;
function cycleImages() {
    showImage(imageIds[currentIndex]);

    // the index for the next image
    currentIndex = (currentIndex + 1) % imageIds.length;
}


showImage(imageIds[currentIndex]);
setInterval(cycleImages, 2000); // 2.0s
