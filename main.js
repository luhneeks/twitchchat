const $chat = $("#chat");
const $dynamicNumber = $("#dynamicNumber");
const usernames = [
    "muxybot", "nightbot", "tablorn", "revlobot", "ladylilvant", "toxicwash", 
    "fonctionpvpeh", "charice1093", "gbayforthewin", "hairyfanni", "elitemagelol"
];
let currentNumber = 341;
let previousSpeaker = null;

// Function to update the red viewer number with volatile changes
function updateRedNumber() {
    const change = Math.floor(Math.random() * 11) - 5; // Fluctuate -5 to +5
    currentNumber = Math.max(341, Math.min(577, currentNumber + change));
    $dynamicNumber.text(currentNumber);

    const interval = Math.random() * (2000 - 500) + 500; // 0.5-2s interval
    setTimeout(updateRedNumber, interval);
}

// Function to simulate chat messages
function simulateChat() {
    const randomDelay = Math.random() * (4000 - 1000) + 1000; // 1-4s

    setTimeout(() => {
        const user = getRandomUser();
        const message = getRandomMessage();
        const messageElement = addMessage(user, message);

        // 75% chance to delete message by moderator
        if (Math.random() < 0.75) {
            setTimeout(() => deleteMessage(messageElement), Math.random() * 3000 + 1000);
        }

        simulateChat(); // Continue the simulation
    }, randomDelay);
}

// Generate a unique color for each user
function generateColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
}

// Get a random user that is not the previous one
function getRandomUser() {
    let user;
    do {
        user = usernames[Math.floor(Math.random() * usernames.length)];
    } while (user === previousSpeaker);
    previousSpeaker = user;
    return user;
}

// Get a random message
function getRandomMessage() {
    const messages = ["Hello!", "Nice stream!", "LOL", "What game is this?"];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Add a message to the chat
function addMessage(username, message, isBroadcaster = false) {
    const color = isBroadcaster ? "#ff4d4d" : generateColor();
    const badge = isBroadcaster 
        ? `<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2" />` 
        : '';

    const messageElement = $(`
        <div class="chat-message">
            ${badge}
            <div class="message-wrapper">
                <span class="username" style="color: ${color};">${username}:</span>
                <span class="message">${message}</span>
            </div>
        </div>
    `);
    $chat.append(messageElement);
    $chat.scrollTop($chat[0].scrollHeight);

    return messageElement;
}

// Replace a message with a deletion notice
function deleteMessage($messageElement) {
    $messageElement.find(".message").fadeOut(500, function () {
        $(this).text("This message has been deleted by a moderator.")
               .addClass("deleted-message")
               .fadeIn(500);
    });
}

// Handle sending user messages
$("#sendButton").on("click", () => {
    const message = $("#chatInput").val().trim();
    if (message) {
        addMessage("luh_neeks", message, true);
        $("#chatInput").val('');
    }
});

$("#chatInput").on("keypress", (e) => {
    if (e.which === 13) $("#sendButton").click();
});

// Initialize chat and viewer number updates
$(window).on("load", () => {
    updateRedNumber();
    simulateChat();
});
