let queryCount = 0;

function postQuestion() {
    const questionInput = document.getElementById('question-input');
    const imageUpload = document.getElementById('image-upload');
    const queriesList = document.getElementById('queries-list');

    const questionText = questionInput.value.trim();
    if (!questionText) {
        alert('Please enter a question.');
        return;
    }

    queryCount++;
    const queryElement = document.createElement('div');
    queryElement.className = 'query';
    queryElement.innerHTML = `
        <p>Query ${queryCount}: ${questionText}</p>
        <div class="image-section"></div>
        <button onclick="showCommentInput(this)">Comment</button>
        <div class="comment-section"></div>
    `;

    if (imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            queryElement.querySelector('.image-section').appendChild(imgElement);
        };
        reader.readAsDataURL(imageUpload.files[0]);
    }

    queriesList.appendChild(queryElement);

    questionInput.value = '';
    imageUpload.value = '';
}

function showCommentInput(button) {
    const commentSection = button.nextElementSibling;
    const commentInput = document.createElement('div');
    commentInput.innerHTML = `
        <input type="text" placeholder="Write a comment..." class="comment-input">
        <input type="file" class="comment-image-upload" accept="image/*">
        <button onclick="postComment(this)">Post Comment</button>
    `;
    commentSection.appendChild(commentInput);
    button.onclick = null; // Disable adding more inputs
}

function postComment(button) {
    const commentInput = button.previousElementSibling.previousElementSibling;
    const commentImageUpload = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    const commentSection = button.parentElement.parentElement;

    if (!commentText && (!commentImageUpload.files || !commentImageUpload.files[0])) {
        alert('Please enter a comment or upload an image.');
        return;
    }

    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <p>${commentText}</p>
        <div class="image-section"></div>
        <button onclick="showReplyInput(this)">Reply</button>
        <div class="reply-section"></div>
    `;

    if (commentImageUpload.files && commentImageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            commentElement.querySelector('.image-section').appendChild(imgElement);
        };
        reader.readAsDataURL(commentImageUpload.files[0]);
    }

    commentSection.appendChild(commentElement);

    // Clear comment input fields
    commentInput.value = '';
    commentImageUpload.value = '';
}

function showReplyInput(button) {
    const replySection = button.nextElementSibling;
    const replyInput = document.createElement('div');
    replyInput.innerHTML = `
        <input type="text" placeholder="Write a reply..." class="reply-input">
        <input type="file" class="reply-image-upload" accept="image/*">
        <button onclick="postReply(this)">Post Reply</button>
    `;
    replySection.appendChild(replyInput);
    button.onclick = null; // Disable adding more inputs
}

function postReply(button) {
    const replyInput = button.previousElementSibling.previousElementSibling;
    const replyImageUpload = button.previousElementSibling;
    const replyText = replyInput.value.trim();
    const replySection = button.parentElement.parentElement;

    if (!replyText && (!replyImageUpload.files || !replyImageUpload.files[0])) {
        alert('Please enter a reply or upload an image.');
        return;
    }

    const replyElement = document.createElement('div');
    replyElement.className = 'reply';
    replyElement.innerHTML = `
        <p>${replyText}</p>
        <div class="image-section"></div>
        <button onclick="showReplyInput(this)">Reply</button>
        <div class="reply-section"></div>
    `;

    if (replyImageUpload.files && replyImageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            replyElement.querySelector('.image-section').appendChild(imgElement);
        };
        reader.readAsDataURL(replyImageUpload.files[0]);
    }

    replySection.appendChild(replyElement);

    // Clear reply input fields
    replyInput.value = '';
    replyImageUpload.value = '';
}


