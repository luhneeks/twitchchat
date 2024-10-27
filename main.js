const $chat = $("#chat");
const $dynamicNumber = $("#dynamicNumber");
const usernames = [
    "muxybot", "nightbot", "tablorn", "revlobot", "ladylilvant", 
    "toxicwash", "fonctionpvpeh", "charice1093", "gbayforthewin", 
    "hairyfanni", "elitemagelol"
];
let currentNumber = 341;
let previousSpeaker = null;

// Update the red viewer number with fluctuating changes
function updateRedNumber() {
    const change = Math.floor(Math.random() * 11) - 5; // Fluctuate between -5 to +5
    currentNumber = Math.max(341, Math.min(577, currentNumber + change));
    $dynamicNumber.text(currentNumber);

    const interval = Math.random() * (2000 - 500) + 500; // 0.5-2s interval
    setTimeout(updateRedNumber, interval);
}

// Simulate chat messages
function simulateChat() {
    const randomDelay = Math.random() * (4000 - 1000) + 1000; // 1-4s delay

    setTimeout(() => {
        const user = getRandomUser();
        const message = getRandomMessage();
        const messageElement = addMessage(user, message);

        // 75% chance to delete message by moderator
        if (Math.random() < 0.75) {
            setTimeout(() => deleteMessage(messageElement), Math.random() * 3000 + 1000);
        }

        simulateChat(); // Continue simulation
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
    const messages = [
        "bro",
        "bro? @nickthekicker",
        "BRO LOL",
        "you dumb? I was talking to the mod @lillilil1il",
        "lowkey laggy",
        "how old are you?",
        "what's your race?",
        "you sound asian lol",
        "how old are you? bro luh_neeks",
        "holy fk lol",
        "LOL",
        "sheeesh",
        "outfit check",
        "can u play that new uzi song?",
        "anyone listen to the new uzi leak?",
        "who fw new jeans??",
        "wheres he at rn?",
        "bros always in pajamas lol",
        "I swear he's like 5 2",
        "what happened to that korean girl?",
        "u still dating that korean girl",
        "did u quit league?",
        "I tried ur ramen recipe it was fire",
        "bruh I swear the weather is rigged, it was sunny 5 mins ago.",
        "luh_neeks ur mic too loud",
        "Y'all hungry right now or is it just me??",
        "hey from PH",
        "bro never coooks",
        "luh_neeks??? do they know your streaming lol",
        "luh_neeks do u ever cook? lool",
        "boring ass stream",
        "why y'all watch this guy lmao",
        "ur so lucky",
        "wheres coco?",
        "yo whos stayin up late rn lol",
        "luh_neeks you in pajamas rn or nah?",
        "outfit check",
        "u a lil goblin luh_neeks",
        "fit check",
        "fit check luh_neeks",
        "lowkey I need to shower lol 💀",
        "yoooo what game y'all grinding lately?",
        "what car does he drive?",
        "what's that song uzi song that was playing?",
        "what's that show he was streaming earlier?",
        "bro streams at the most random times lol",
        "laggy",
        "its lagging",
        "nope we fake lol",
        "what phone he using to streaM??",
        "yoo anyone else's sleep schedule completely destroyed?",
        "bros lowkey a hobbit",
        "anybody else skipping homework 4 this stream??",
        "we NEED a sleep stream luh_neeks fr.",
        "about to go eat sushi cya",
        "pay for my college bro Kappa luh_neeks?",
        "brb gotta charge my phone lol",
        "its hella laggy bro @luh_neeks",
        "swear caffeine dont even work on me anymore smh 💀",
        "how old is bro?",
        "5 foot rizz lmao",
        "bros like 5 foot lol",
        "how tall is bro?",
        "yup we real lmao",
        "hiiiiiiiii",
        "wydm bro u crazy?? @reclutched",
        "luh_neeks how tall r u??",
        "luh_neeks u gon lose all ur money tonight?",
        "you’d def lose a fight to that guy lol",
        "where is bro at??",
        "luh_neeks don't forget to turn off ur stream at the end",
        "yoooo, what’s ur all-time favorite video game?",
        "u gotta stream urself cooking next time.",
        "Y’all ever just stay in bed the whole day? lowkey just wasted a whole ass day lmao",
        "what's ur ETA what's ur ETA?",
        "luh_neeks ask for their insta bruh",
        "bros got an anime tat lol",
        "I've never seen this guy cook ever lol",
        "bro never cooks at home lol",
        "orders takeout every day? @reclutched ",
        "he wearing pjs? luh_neeks still wearing pajamas??",
        "I just woke up and started watching lol",
        "did u already eat luh_neeks ?",
        "I do fs",
        "ong bro lol",
        "someone def forgot to charge their phone today 😂",
        "ongggg",
        "FR lmfao",
        "u still play rs?",
        "Anyone else leave streams on just for noise?",
        "luh_neeks, u still fw uzi or peep?",
        "oh shit I didn't know u played league??",
        "god had to nerf  his heightt lol",
        "LMFAOOO",
        "u still make music bro??",
        "o shit I gtg each dinner",
        "luh_neeks bro lol",
        "luh_neeks what shows u been watching?",
        "BEACH stream one day!????? luh_neeks",
        "bruh u high? lmao",
        "he's hella faded rn lol",
        "bet u haven’t drank water all day 👀",
        "lol im just randonly scrolling irl",
        "bet luh_neeks STILL doesn’t know how to cook 😂",
        "hahahaga",
        "chat how tall is bro",
        "I swear this guy viewerbots",
        "u guys ever forget wut day it is constantly?",
        "luh_neeks u gotta stream from a theme park.",
        "1wut happened with that girl u who was yellin at u?? luh_neeks luh_neeks",
        "bro you shoulda asked for her Insta smh",
        "ever thought about streaming from an aquarium?",
        "why didnt u say hi to that baddie looking at u?",
        "go back and ask for her snap lol",
        "that guy def knew u were streaming lol",
        "she was bad lmao",
        "bet that group was talkin about u 😂",
        "ong gang",
        "what city is this again? portland?",
        "u should stream from a zoo fr",
        "that person def recognized u just now",
        "luh_neeks, ask someone what year it is lmao",
        "u thought about streaming at the zoo? ? ?  luh_neeks",
        "yo what was that person eating? looked 🔥",
        "luh_neeks u dropped something LOOK BEHIND U",
        "bro did u drop sumthing earlier?",
        "u ever stream from a beach before?",
        "what was that loud asf noise",
        "luh_neeks u gon get swatted?",
        "wait, do u skate neeks?",
        "who were u talkin to off-camera earlier?",
        "luh_neeks is that a lil peep tat?",
        "ask for their snap?",
        "luh_neeks u never had wingstop?!",
        "yo how many pigeons have u counted?",
        "luh_neeks hit the 7/11 bro",
        "how long do u think this stream gonna last?",
        "oregon???",
        "u still in oregon??",
        "oh u in portland?",
        "go talk to that person"
    ];
    
    
    return messages[Math.floor(Math.random() * messages.length)];
}

// Add a message to the chat, highlighting 'luh_neeks' in red if present
function addMessage(username, message, isBroadcaster = false) {
    console.log(`Adding message from ${username}: ${message}`); // Debugging log

    const color = isBroadcaster ? "#ff4d4d" : generateColor();
    const badge = isBroadcaster 
        ? `<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2" />` 
        : '';

    // Highlight "luh_neeks" in red if present
    const highlightedMessage = message.replace(
        /luh_neeks/gi,
        '<span style="color: red; font-weight: bold;">luh_neeks</span>'
    );

    const messageElement = $(`
        <div class="chat-message">
            ${badge}
            <div class="message-wrapper">
                <span class="username" style="color: ${color};">${username}:</span>
                <span class="message">${highlightedMessage}</span>
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
    console.log("Send button clicked"); // Debugging log

    const message = $("#chatInput").val().trim();
    if (message) {
        addMessage("luh_neeks", message, true);
        $("#chatInput").val('');
    }
});

$("#chatInput").on("keypress", (e) => {
    if (e.which === 13) {
        console.log("Enter key pressed"); // Debugging log
        $("#sendButton").click();
    }
});

// Initialize chat and viewer number updates
$(window).on("load", () => {
    updateRedNumber();
    simulateChat();
});
