document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts yet.</p>';
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

            const postAuthor = document.createElement('p');
            postAuthor.textContent = `By: ${post.username}`;

            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            postElement.appendChild(postTitle);
            postElement.appendChild(postAuthor);
            postElement.appendChild(postContent);

            postsContainer.appendChild(postElement);
        });
    }

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // No need to handle theme toggle here since it is done in logic.js
});
