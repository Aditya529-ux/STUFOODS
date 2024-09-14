function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessageToChat('user-message', userInput);
    document.getElementById('user-input').value = '';

    // Simple bot response logic
    const botResponse = getBotResponse(userInput);
    addMessageToChat('bot-message', botResponse);
}

function addMessageToChat(className, message) {
    const chatContent = document.getElementById('chat-content');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Basic response logic
    input = input.toLowerCase();
    if (input.includes('hello')) {
        return 'Hello! How can I help you?';
    } else if (input.includes('how are you')) {
        return 'I am just a bot, but I am functioning as expected!';
    } else {
        return 'I am not sure how to respond to that.';
    }
}
