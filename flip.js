/*document.getElementById('myButton').onclick = function() {
      alert('Button clicked!')
    }; */
function myButton() {
    alert('Item Added To Cart!!!')
}

let images = document.querySelectorAll('.my-image');

images.forEach(function(img) {
    img.addEventListener('click', function() {
        // remove highlight from all images first
        images.forEach(i => i.classList.remove('highlighted'));

        // add highlight to the clicked image
        this.classList.add('highlighted');
    });
});