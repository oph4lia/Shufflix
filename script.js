/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
    // Ensure username starts with '@'
    if (!username.startsWith('@')) {
        username = '@' + username;
    }
    // Format the comment string
    const commentString = `${username}: ${comment}`;
    // Add to start or end of comments array
    if (addToStart) {
        comments.unshift(commentString);
    } else {
        comments.push(commentString);
    }
    // Re-render the comments list (provided.js likely provides this)
    if (typeof renderComments === 'function') {
        renderComments();
    }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(winnerComment) {
    // Return an HTML string for the winner message
    return `<span class="winner">🎉 Winner: ${winnerComment} 🎉</span>`;
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
    if (comments.length === 0) return;
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * comments.length);
    const winnerComment = comments[randomIndex];
    // Create the winner message
    const message = showWinnerMessage(winnerComment);
    // Display the winner message in the UI
    const winnerDisplay = document.getElementById('winner-display');
    if (winnerDisplay) {
        winnerDisplay.innerHTML = message;
    }
    // Highlight the winner in the list
    highlightWinner(randomIndex);
    // Show a random emoji
    showRandomEmoji();
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
    // Pick a random emoji from the emojis array
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    // Display the emoji in the #winner-emoji element
    const emojiDisplay = document.getElementById('winner-emoji');
    if (emojiDisplay) {
        emojiDisplay.textContent = emoji;
    }
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
    comments.reverse();
    if (typeof renderComments === 'function') {
        renderComments();
    }
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
    if (index >= 0 && index < comments.length) {
        comments.splice(index, 1);
        if (typeof renderComments === 'function') {
            renderComments();
        }
    }
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {
    // Filter out comments that are only emojis (no letters or numbers)
    return comments.filter(comment => {
        // Remove username part
        const parts = comment.split(':');
        if (parts.length < 2) return false;
        const text = parts.slice(1).join(':').trim();
        // Check if text contains any letter or number
        return /[\w\d]/.test(text);
    });
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {
    // If searchUsers is true, filter by username
    if (searchUsers) {
        return comments.filter(comment => {
            const username = comment.split(':')[0];
            return username.toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        // Otherwise, filter by comment text
        return comments.filter(comment => {
            const text = comment.split(':').slice(1).join(':');
            return text.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

// Highlights the winning comment in the list with an animation
function highlightWinner(index) {
    const listGroup = document.querySelector('.list-group');
    if (!listGroup) return;
    const items = listGroup.querySelectorAll('.list-group-item');
    if (index < 0 || index >= items.length) return;
    const winnerItem = items[index];
    winnerItem.classList.add('highlight-winner');
    setTimeout(() => {
        winnerItem.classList.remove('highlight-winner');
    }, 1000); // Animation duration in ms
}
