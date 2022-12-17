let openbtn = document.getElementById("open-btn");
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openbtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});

openbtn.addEventListener('click', )
