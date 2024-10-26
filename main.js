const usernames = [
    "minealldayfogold", "lewis262", "KJEXTREME", "ItzJonathanMC", "Slider_Cr7", 
    "CommanderDarkos", "SuperNova1128", "adalia2", "AtzengLionshare", "redbulljohnny", 
    "IceAspect", "JuicyPussy101", "yoler007", "Maka_X_Soul95", "Bee_Cool"
];

const eatingReplies = ["pizza", "top ramen chicken lol", "chipotle", "water lmao"];

const messages = [
    "bro",
    "how old are you?",
    "what's your race?",
    "you sound asian lol",
    "how old are you?",
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
    "lowkey I need to shower lol 💀",
    "yoooo what game y'all grinding lately?",
    "what car does he drive?",
    "what's that song uzi song that was playing?",
    "what's that show he was streaming earlier?",
    "bro streams at the most random times lol",
    "laggy",
    "its lagging",
    "luh_neeks wut’s ur fav fast food joint?",
    "what phone he using to streaM??",
    "yoo anyone else's sleep schedule completely destroyed?",
    "bros lowkey a hobbit",
    "anybody else skipping homework 4 this stream??",
    "we NEED a sleep stream luh_neeks fr.",
    "yo wut’s the ultimate snack combo?",
    "bet u forgot breakfast AGAIN didn’t u, luh_neeks?",
    "whos watchin on their phone right now?",
    "what’s the WEIRDEST dream u had recently?",
    "swear caffeine dont even work on me anymore smh 💀",
    "how old is bro?",
    "5 foot rizz lmao",
    "bros like 5 foot lol",
    "how tall is bro?",
    "hit the buffet there lol",
    "how long y’all accidentally scrolled TikTok today?",
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
    "luh_neeks orders takeout every day? ",
    "he wearing pjs? luh_neeks still wearing pajamas??",
    "I just woke up and started watching lol",
    "did u already eat luh_neeks ?",
    "me fs",
    "ong bro lol",
    "someone def forgot to charge their phone today 😂",
    "WHO’s the funniest person in chat rn?",
    "ongggg",
    "u still play rs?",
    "Anyone else leave streams on just for noise?",
    "luh_neeks, u still fw uzi or peep?",
    "oh shit I didn't know u played league??",
    "god had to nerf  his heightt lol",
    "u still make music bro??",
    "luh_neeks bro lol",
    "luh_neeks what shows u been watching?",
    "stream from a BEACH one day! luh_neeks",
    "y’all stuck in a YouTube rabbit hole lately?",
    "what’s the WEIRDEST snack combo u tried?",
    "bet u haven’t drank water all day 👀",
    "lol im just randonly scrolling irl",
    "bet luh_neeks STILL doesn’t know how to cook 😂",
    "who else dreaming of VACATION right now?",
    "chat how tall is bro",
    "I swear this guy viewerbots",
    "u guys ever forget wut day it is constantly?",
    "luh_neeks u gotta stream from a theme park.",
    "1wut happened with that girl u who was yellin at u?? luh_neeks luh_neeks",
    "bro you shoulda asked for her Insta smh",
    "ever thought about streaming from an aquarium?",
    "why didnt u say hi to that person looking at u?",
    "go back and ask for her snap lol",
    "that guy def knew u were streaming lol",
    "yo what did that person say to u earlier?",
    "bet that group was talkin about u 😂",
    "why didn’t u film that dog back there?",
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
    "yo did that girl smile at u or nah?",
    "u gotta try streaming from a flea market!",
    "who were u talkin to off-camera earlier?",
    "luh_neeks is that a lil peep tat?",
    "yo did someone shout at u just now?",
    "luh_neeks go get wingstop!",
    "yo how many pigeons have u counted?",
    "luh_neeks hit the 7/11 bro",
    "how long do u think this stream gonna last?",
    "oregon???",
    "u still in oregon??",
    "oh u in portland?",
    "go talk to that person"
];


const MAX_MESSAGES = 10;
const $chat = $("#chat");
const $chatInput = $("#chatInput");
let previousSpeaker = null;
let lastSpecialInteractionTime = 0;

function generateMessage(username, message, userColor, isSelf = false) {
    const badge = isSelf 
        ? `<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2" />`
        : '';

    const highlightedMessage = highlightName(message, "luh_neeks");

    return `
        <div class="chat-message">
            <span class="userLine">
                ${badge}<span class="username" style="color: ${userColor};">${username}:</span>
            </span>
            <span class="message">${highlightedMessage}</span>
        </div>`;
}

function highlightName(message, name) {
    const regex = new RegExp(`\\b(${name})\\b`, "gi");
    return message.replace(regex, `<span class="highlight">$1</span>`);
}

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

$("#sendButton").on('click touchstart', () => {
    const message = $chatInput.val().trim();
    if (message) addMessage("luh_neeks", message, true);
    $chatInput.val('');
});

$chatInput.on('keypress', (e) => {
    if (e.which === 13) $("#sendButton").click();
});

$(window).on('load', () => simulateChat());

function simulateChat() {
    setTimeout(() => {
        const user = usernames[Math.floor(Math.random() * usernames.length)];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        addMessage(user, msg);
        simulateChat();
    }, Math.random() * (3000 - 1000) + 1000);
}
