const $chat = $("#chat");
const $dynamicNumber = $("#dynamicNumber");
const usernames = [
    "muxybot", "nightbot", "tablorn", "revlobot", "ladylilvant", "toxicwash", "fonctionpvpeh", 

];

let currentNumber = generateInitialNumber(); // Initialize with a random value between 341-577
let previousSpeaker = null; // Track previous speaker
const messageHistory = []; // Track last few messages to avoid repetition
const MAX_HISTORY = 5; // Max number of recent messages to track

// Generate the initial random number within the range 341-577
function generateInitialNumber() {
    return Math.floor(Math.random() * (577 - 341 + 1)) + 341;
}

// Update the red number with small, smooth fluctuations
function updateRedNumber() {
    const change = Math.floor(Math.random() * 3) - 1; // Fluctuates between -1, 0, or +1
    currentNumber = Math.max(341, Math.min(577, currentNumber + change)); // Ensure it's in range

    $dynamicNumber.text(currentNumber);

    // Randomize the update interval for natural variation
    const updateInterval = Math.random() < 0.2 
        ? Math.random() * (15000 - 10000) + 10000  // Occasionally wait longer (10-15s)
        : Math.random() * (2000 - 500) + 500; // Regular update (0.5-2s)

    setTimeout(updateRedNumber, updateInterval); // Schedule the next update
}

// Simulate chat messages with random delays
function simulateChat() {
    const randomDelay = getRandomDelay();

    setTimeout(() => {
        const user = getNewSpeaker();
        const msg = getUniqueMessage();
        addMessage(user, msg);
        simulateChat(); // Continue the simulation
    }, randomDelay);
}

// Get a random delay for chat messages
function getRandomDelay() {
    const delayType = Math.random();

    if (delayType < 0.3) {
        return Math.random() * (500 - 100) + 100; // 100-500ms
    } else if (delayType < 0.6) {
        return Math.random() * (3000 - 1000) + 1000; // 1-3s
    } else {
        return Math.random() * (7000 - 3000) + 3000; // 3-7s
    }
}

// Ensure the next speaker is not the same as the previous one
function getNewSpeaker() {
    let newSpeaker;
    do {
        newSpeaker = usernames[Math.floor(Math.random() * usernames.length)];
    } while (newSpeaker === previousSpeaker);
    previousSpeaker = newSpeaker;
    return newSpeaker;
}

// Get a unique message that hasn't been recently used
function getUniqueMessage() {
    const messages = [
        "bro",
        
    ];
    let msg;
    do {
        msg = messages[Math.floor(Math.random() * messages.length)];
    } while (messageHistory.includes(msg)); // Ensure it's not recently used

    // Add the new message to the history and maintain max history length
    messageHistory.push(msg);
    if (messageHistory.length > MAX_HISTORY) {
        messageHistory.shift(); // Remove the oldest message from the history
    }

    return msg;
}

// Add a new message to the chat
function addMessage(username, message, isBroadcaster = false) {
    const userColor = isBroadcaster 
        ? '#ff4d4d' 
        : `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

    const highlightedMessage = highlightName(message, "luh_neeks");

    const newMessage = generateMessage(username, highlightedMessage, userColor, isBroadcaster);
    $chat.append(newMessage);
    $chat.scrollTop($chat[0].scrollHeight);

    if ($chat.children().length > 10) {
        $chat.children().first().fadeOut(200, function () {
            $(this).remove();
        });
    }
}

// Generate chat message HTML with the proper layout
function generateMessage(username, message, userColor, isBroadcaster) {
    const badge = isBroadcaster 
        ? `<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2" />` 
        : '';

    return `
        <div class="chat-message">
            ${badge}
            <div class="message-wrapper">
                <span class="username" style="color: ${userColor};">${username}:</span>
                <span class="message">${message}</span>
            </div>
        </div>`;
}

// Highlight the specified username in the message
function highlightName(message, name) {
    const regex = new RegExp(`\\b(${name})\\b`, "gi");
    return message.replace(regex, `<span class="highlight">$1</span>`);
}

// Handle sending user messages from input
$("#sendButton").on('click touchstart', () => {
    const message = $("#chatInput").val().trim();
    if (message) {
        addMessage("luh_neeks", message, true);
        $("#chatInput").val('');
    }
});

$("#chatInput").on('keypress', (e) => {
    if (e.which === 13) $("#sendButton").click();
});

// Start everything on window load
$(window).on('load', () => {
    updateRedNumber();
    simulateChat();
});
