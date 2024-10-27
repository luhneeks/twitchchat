const $chat = $("#chat");
const $dynamicNumber = $("#dynamicNumber");
const usernames = [
    "muxybot", "nightbot", "tablorn", "revlobot", "ladylilvant", "toxicwash", "fonctionpvpeh", 
    "charice1093", "gbayforthewin", "hairyfanni", "elitemagelol", "kingnitka", "ednacho", 
    "splatlive", "sunrunnerny", "themziss", "sasuke_itachi67", "johnnymegaman", "zeer0w", 
    "jakkebad", "arcaddia_", "feedingkenzo", "spikers862", "charictic", "inbox1981", 
    "msyumyum", "kovuwolfe", "shadowblade6667", "lemon_ireland", "ads1582", "crazy948", 
    "oddball10182", "kurukurusmash", "tronelios", "jeast54", "onimushadow", "theforgedsoul", 
    "focus_carrys", "beyondadam", "megawolf620", "weege29", "angeljohan", "croninja21", 
    "vexiangaming", "nactavist", "robss234", "mzzterr", "kelukin", "bigmouthbass1", 
    "infernaldemise", "littlelockdown", "freaaakylikeme", "youredeadnowpaddyman", "klaxius", 
    "heimdalluz", "himotherminecraft", "levi_931", "buldr1504", "intelligentlman", 
    "zipocraft", "rmcwilliams19", "oreopizza15", "kingforaday1743", "rainbow_donut10", 
    "theheadwarmer", "master_cram", "xxx_budder_xxx", "fredbobjus1", "promatdun", 
    "b0shyl0rd", "buralee1", "zakor52", "d_a_m_l_a_n", "affylon", "bhunt92", "monsterggggu", 
    "declaringturnum", "ninjax11", "chrisspieltmc", "notkahle", "jbryant1980", "uraniksejdiu", 
    "geniusrokky", "lexleano", "igrowwearyofthisworld", "lukaswindisch", "pharaoh_pr", 
    "viperisk", "venom4789", "logicality_", "kingg_alex_", "aninjaknight", "waycooldud", 
    "godlynine", "vriska_serket_hs", "sienta2000", "todd6661", "esportsstats", 
    "atrhydralisk", "gain_velocity", "xxborroxx", "d3rk0ch", "loofapalooza", 
    "nachochicken32", "frozenkaos", "shrekhex4467", "jay_wub", "trueordie1", "happy718", 
    "chrisgcc", "dustavoid", "jacktwinkletoes", "kapuchu22", "medo24", "pakamccormick", 
    "esteban640", "woodie_flowers", "steezy_ef_baby", "manelins", "natedawg07", 
    "jokokoleharicot", "giyku", "purgatorie", "rapidz_yeti", "snowball1717", "arthritis_osu", 
    "dglsfernandes", "matt_dulittle", "fallenangelwar", "xninjauchihax", "ethorin", 
    "heavyd57lol1", "derpp21", "epicmaxammo", "zalox55", "sebbi234", "bloodydi4monds", 
    "octamouseegaming", "whitespaces", "nikorikoboss", "stykyt", "corpandrew", 
    "mystab", "thecookiemaker", "asdujygansdimasdmh", "thetripletr", "shortymino", 
    "zapdose_2442", "supercreep200", "bloodeddiamond", "bigbubbazzz", "skinheadbaby", 
    "zxzvzc", "grimtusk", "testering98", "alexxo88", "dc_mittron", "lazar_df", 
    "ivanmagicman", "summersaltz", "crazymc4ever", "tampan999", "rubenema", "aturdido011", 
    "direczyt", "thexenoproject", "attractivedogsq", "bananaface63", "blue_gaming_dk", 
    "kingsgmmbe", "xdominationhd", "jucci_", "teffieyo", "gldarkknight", "demonwareltd", 
    "endii_wallace", "ordainedskate13", "zohonde", "vazinero", "angryscallop", 
    "cmpjunior17", "oqaar", "chimu11bmg_", "ehawk_517", "juanpigamesyt", "stackhouse2006", 
    "wildlanza", "mrtiesti", "draconstar", "bakedlion", "radikarametov12", "imelchori", 
    "sasquatchreaper", "ralphwiggles", "hounddog2021", "tonybr541", "zzishadowz1", 
    "advakar69", "jayun", "mcpain117", "13xgamer7", "alex11039", "creepercraft98", 
    "vivbot", "cyn2cute", "tylstammine", "fxyeildo", "russian_buritos", 
    "cookiemonsterpvl", "dj135246", "bloodkeeper43", "cheshiar_kat", "vickygil8781", 
    "dillon4534", "pigmasterhd", "jeppe_solo", "macvcurmudgeon9", "moonkang", 
    "denchic583", "huzkycraft", "hockeyzombies999", "lindseylu116", "clumsypoptartyt", 
    "dominato2", "paze_patt", "kaylen090", "cabbage_gaming_2000", "dgguardian", 
    "bluebard700", "nedisx26", "misterigotswag", "uberez", "mondomino", 
    "theaardvark1901", "jaxhazmatgaming", "bigmouthbass12", "taelivesforever", 
    "amalgamaton", "sepiksprime755", "daveee5505", "gamerofwinterfell", 
    "horriblegameplay", "jeaton247", "mikaeljmik", "micahdaniel", "chicckken", 
    "thecoolrainbowsheep", "cgamerc", "flowim_", "justlysio", "z7sd", "dakotagoddard", 
    "rayanuk1", "aetheriusgaming", "noobw", "gamrecat", "diddybop71406", 
    "billy_barra", "misstater", "poplple", "monachi441", "freddiedubstep", 
    "nerdish_girl", "kuro_kane", "katies002", "dguinn32", "secretgarden121", 
    "sir_envyy", "michaeldabrave", "flamingeagle7", "bowdion", "flawlesslylol", 
    "geeky_midget", "friutievirus248", "rusty_buttons", "abalkin", "humbee33", 
    "griffin2153", "bleakdisposition", "williampledger1", "staua", "shirenzu", 
    "cowell3421", "sugar_tits___", "antho9079", "hmisay", "scrotum_enlargement_doc", 
    "breast_cancer_is_fun", "runnergunner659", "lesbians_half_naked", 
    "iliketo69intheshower", "team_tcc_yt", "830_to_850_is_gay", "std_for_life", 
    "itzaidanz", "0mg1tsba1ley", "f0rev", "mmaboy264", "piotoroo", "jjosyph", 
    "ironhide1991", "hobart78", "jonathan4232", "flamefurry123", "cowboys_for_life02", 
    "ryodo12", "thearowsphi", "thekillerchava", "heykaytv", "darkodesign", 
    "locuraesp", "mexicannpenguin", "moneymannyy", "astiob93", "antitinkerbell", 
    "5ftgirl", "xehdjbjhgvxk", "roxelsgaming", "pieisg00dnotnot", "arsenga", 
    "fthepolicy"
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
        "bruh I got hella hw",
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
        "how long u staying in portland?",
        "luh_neeks hit the 7/11 bro",
        "how long do u think this stream gonna last?",
        "oregon???",
        "u still in oregon??",
        "who bought the new cod lol",
        "me",
        "lowkey I did",
        "can u read my dono",
        "I donated but the tts didn't go off wtf",
        "tf lol",
        "damn @luh_neeks u go outside?",
        "he lowkey does",
        "new cod is ass don't buy it",
        "too late lol",
        "can I be a mod",
        "no me",
        "I couldn't catch u in twitchcon",
        "ohh how tf do u know them lol",
        "oh u in portland?",
        "oh u in portland?",
        "bros gon get swatted again lol",
        "oh u in portland?",
        "bros talking to homeless people now lol",
        "stranger danger!",
        "hiii stranger",
        "I thought portland was ghetto",
        "go talk to that person"
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
