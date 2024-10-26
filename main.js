const usernames = [
    "minealldayfogold", "lewis262", "KJEXTREME", "ItzJonathanMC", "Slider_Cr7", 
    "CommanderDarkos", "SuperNova1128", "adalia2", "AtzengLionshare", "redbulljohnny", 
    "IceAspect", "JuicyPussy101", "yoler007", "Maka_X_Soul95", "Bee_Cool"
];

const eatingReplies = [
    "pizza", 
    "top ramen chicken lol", 
    "chipotle", 
    "water lmao"
];

const messages = [
    "bro", 
    "holy fk lol", 
    "NEEKS, why do energy drinks taste weird but hit different tho?", 
    "luh_neeks you're in trouble now!",
    "What's the move tonight?", 
    "I'm cracked!", 
    "Anyone down for ranked?", 
    "Why does pizza slap so hard at 2am?"
];

const MAX_MESSAGES = 10;
const $chat = $("#chat");
const $chatInput = $("#chatInput");
let canSend = true;
let previousSpeaker = null; // Track the previous speaker
let lastSpecialInteractionTime = 0; // Timestamp of the last special interaction

// Generate chat message HTML with highlight functionality
function generateMessage(username, message, userColor, isSelf = false) {
    const badge = isSelf
        ? `<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2" />`
        : '';

    const highlightedMessage = highlightName(message, "luh_neeks");

    return `
        <div class="chat-message">
            ${badge}
            <span class="message-wrapper">
                <span class="userLine" style="color: ${userColor};">${username}:</span>
                <span class="message">${highlightedMessage}</span>
            </span>
        </div>`;
}

// Highlight specified username in the message
function highlightName(message, name) {
    const regex = new RegExp(`\\b(${name})\\b`, "gi");
    return message.replace(regex, `<span class="highlight">$1</span>`);
}

// Add a message to the chat
function addMessage(username, message, isSelf = false) {
    const userColor = isSelf
        ? 'hsl(30, 100%, 70%)'
        : `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

    const newMessage = generateMessage(username, message, userColor, isSelf);
    $chat.append(newMessage);
    $chat.scrollTop($chat[0].scrollHeight);

    if ($chat.children().length > MAX_MESSAGES) {
        $chat.children().first().fadeOut(200, function () {
            $(this).remove();
        });
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

// Trigger the special eating interaction
function triggerEatingInteraction() {
    const asker = getNewSpeaker();
    addMessage(asker, "What's everyone eating?");

    // First reply after 2-3 seconds
    setTimeout(() => {
        addMessage(getNewSpeaker(), eatingReplies[0]);
    }, Math.random() * (3000 - 2000) + 2000);

    // Second reply 1-2 seconds after the first
    setTimeout(() => {
        addMessage(getNewSpeaker(), eatingReplies[1]);
    }, Math.random() * (2000 - 1000) + 1000 + 3000);

    // Third reply right after the second
    setTimeout(() => {
        addMessage(getNewSpeaker(), eatingReplies[2]);
    }, Math.random() * (500 - 300) + 300 + 5000);

    // Fourth reply with a small pause after the third
    setTimeout(() => {
        addMessage(getNewSpeaker(), eatingReplies[3]);
    }, Math.random() * (2000 - 1000) + 1000 + 5500);

    // Update the timestamp of the last special interaction
    lastSpecialInteractionTime = Date.now();
}

// Simulate chat messages
function simulateChat() {
    const randomDelay = getRandomDelay();

    setTimeout(() => {
        const currentTime = Date.now();
        const timeSinceLastSpecial = currentTime - lastSpecialInteractionTime;

        // 80% chance to trigger special interaction (change to 0.01 for 1%)
        if (Math.random() < 0.8 && timeSinceLastSpecial > 45000) {
            triggerEatingInteraction();
        } else {
            const user = getNewSpeaker();
            const msg = messages[Math.floor(Math.random() * messages.length)];
            addMessage(user, msg);
        }
        simulateChat(); // Continue the simulation
    }, randomDelay);
}

// Get randomized delay for chat messages
function getRandomDelay() {
    const delayType = Math.random();

    if (delayType < 0.3) {
        return Math.random() * (500 - 100) + 100; // 100-500ms
    } else if (delayType < 0.6) {
        return Math.random() * (8000 - 3000) + 3000; // 3-8s
    } else {
        return Math.random() * (15000 - 10000) + 10000; // 10-15s
    }
}

// Send message on button click or enter key
$("#sendButton").on('click touchstart', () => {
    if (canSend) {
        const message = $chatInput.val().trim();
        if (message) addMessage("luh_neeks", message, true);
        $chatInput.val('');
        canSend = false;
        setTimeout(() => (canSend = true), 1000);
    }
});

$chatInput.on('keypress', (e) => {
    if (e.which === 13) $("#sendButton").click();
});

// Start chat simulation on window load
$(window).on('load', () => {
    simulateChat();
});
