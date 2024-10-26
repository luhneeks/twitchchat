const $chat = $("#chat");
const $dynamicNumber = $("#dynamicNumber");
const usernames = [
    "minealldayfogold", "lewis262", "KJEXTREME", "ItzJonathanMC", "Slider_Cr7", 
    "CommanderDarkos", "SuperNova1128", "adalia2", "AtzengLionshare", "redbulljohnny", 
    "IceAspect", "JuicyPussy101", "yoler007", "Maka_X_Soul95", "Bee_Cool", 
    "PixiePink551", "thedestroyR01", "littlecrabby", "EyeZ_iLy", "Oceanview24", 
    "ZoM_MockingBird", "maxdaddy522", "AslakOL", "vegasghost", "Mackula", 
    "DJCower", "CookieJamz", "FFspiderman", "Queejon", "jacobsolomonbeck", 
    "Bendik01", "cadoyan", "hTFree", "flipmon4", "theruff", 
    "Metriod1995", "flashar", "Hajile16", "xabidemi", "Luwi20", 
    "xDarkFire89", "mikal12345678910", "sharkbark", "Bumpy24", "Iron_Justice", 
    "1011butter", "LazarusTheGreat", "Aden27", "schriss", "staples4343", 
    "RogerFoda456", "avariani", "spagetti6", "Jon45Gaming", "Kyrail", 
    "randomperson86", "kandy311", "tylerting", "thor2543", "Furis0n", 
    "pique3245", "Koyote99", "CrazyCrafterN", "zombie_stampy", "vulezvu", 
    "SparkleDJ", "broskihall", "dracula756", "2dino", "BesteKatze_543", 
    "dunkacheno", "vSTheProdigY", "pelican03", "razor521", "Htx_Edit", 
    "Pshizzle49", "BeccaBA", "ADGPanda03", "superstar947", "KoningGahoul", 
    "ArthurBRBR", "berny7701", "Dodge2003", "xToXicGalaXyPvPx", "5nagol", 
    "crazy_hamsters3", "btezell", "zerothehero8088", "steentje321", "richard10777", 
    "Lucero29", "SharpShooters123", "LiamTheJ", "SnippZZ_RangE", "Bengerd", 
    "claudiachristina", "DubKicker", "Munnzie_12", "seenawarrior", "DarthCreeper864", 
    "DazemaCat", "awealbieenander", "tjjellypod", "ianwithanE101", "FieldPath777", 
    "tybaker", "Danny24kb", "TomEvans8", "BloxzVforce1", "hugo070707", 
    "NLlopro", "Zackattack1018", "Vinne720", "Lil_Miss_Mandy", "Crztoolz", 
    "codeman524", "JMF3", "JulieW03", "Ana_Banana10", "Kroloc", 
    "DanDareDevil", "MissyMae99", "snipersnoopy88", "tanzzers", "SRKurusaki", 
    "M16FLAME", "Lukestar001", "seanyving", "frognoch", "dark_pigh", 
    "quiour", "harelm", "XKaban407", "Psyclones8", "NickJ2006", 
    "rosieroserose", "xXWendyWooPooXx", "dylanhelm77", "fdoni2002", "Jesseunicum", 
    "Sparten1115", "Joshslayer10", "cholo7215", "maxdreher101", "mstrbuilder", 
    "tlc2mlc", "CreeperJake42", "brundbo", "Skeleton_Head200", "Mr_Fanciful", 
    "bast116", "Facucapo777", "Jutterstrom", "rufflesdoslokos", "Allecool03", 
    "Gagglehaggle", "Gsal", "25weirdo25", "dashiecraft13", "cavebuilder57", 
    "iantygo222", "dyondier", "riquebranco", "AlecioBoss", "jeremydo", 
    "PVPLuuk", "_Skylios_", "thehuntsmen", "eusouboss", "xXFrancescaPvPXx", 
    "ballisticbo", "arthur148148", "Freakface109", "vegardanders", "11elle11", 
    "Shoshthegirl", "MagicSlaysYou", "nija20", "doggiedude", "Doodyfred", 
    "matthewthgreat", "LuffyDaBomb", "skyguy001rim", "Birgers", "Lucas867", 
    "Troublesome_Thu", "ZverMao", "DafnePegazo", "pokemonman2005", "Jov_", 
    "xTheMasterGamex", "BaccaAmerican", "BamDieCake", "KeksMacht", "PezChu", 
    "DanteZminecraft", "Bernat4", "sayarulez", "intelatominside", "kobeeanthony", 
    "hazelhoeve", "Raarrh", "mariusreus", "tjenka2", "asavage1612", 
    "Keedog09", "theepiccrafter42", "skythekidrsnate", "LucasLeandro_YT", 
    "primoskating", "kebiga", "jsmoove21", "daycreeper1000", "Builder897", 
    "SugarCookiMaster", "Kosta_HD", "FlyingKiyan", "AngryGrass123", 
    "MrAlvin2005"
];

let currentNumber = generateInitialNumber(); // Initialize with a random value between 341-577
let previousSpeaker = null; // Track previous speaker

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
        const msg = getRandomMessage();
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

// Generate a random message from the list
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

// Add a new message to the chat
function addMessage(username, message, isBroadcaster = false) {
    const userColor = isBroadcaster 
        ? '#ff4d4d' 
        : `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

    const newMessage = generateMessage(username, message, userColor, isBroadcaster);
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
                <span class="message">${DOMPurify.sanitize(message)}</span>
            </div>
        </div>`;
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
