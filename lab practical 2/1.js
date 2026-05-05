
const likeButton = document.createElement('button');
likeButton.textContent = 'Like';
likeButton.id = 'like-btn';


likeButton.addEventListener('click', function() {
    alert('You liked this!');
});

document.body.appendChild(likeButton);  