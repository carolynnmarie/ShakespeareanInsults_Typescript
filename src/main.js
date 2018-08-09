"use strict";
var ShakespeareanInsults = /** @class */ (function () {
    function ShakespeareanInsults() {
        this.partOne = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered",
            "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy",
            "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering",
            "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "rutting", "saucy",
            "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy,",
            "yeasty"];
        this.partTwo = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained",
            "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted",
            "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born",
            "full-gorged", "guts-griping", "half-faced", "hasty-whitted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding",
            "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked",
            "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied",
            "tardy-gaited", "tickle-brained", "toad-spotted", "urchin-snouted", "weather-bitten"];
        this.partThree = ["apple-john", "baggage", "barnacle", "blatter", "boar-pig", "bugbear", "bum-bailey",
            "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench",
            "flit-gill", "foot-licker", "fustilarian", "giglet", "gudgon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger",
            "joitheaded", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news",
            "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal",
            "whey-face", "wagtail"];
        this.classic = ["A most notable coward, an infinite and endless liar, an hourly promise breaker, " +
                "the owner of no one good quality.", "you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!",
            "you three-inch fool!", "you froward and unable worms", "O gull, o dolt, as ignorant as dirt", "Clod of wayward marl",
            "beatle-headed, flap-earred knave", "the soul of this man is in his clothes", "quintessence of dust", "canker-blossom",
            "poisonous, bunch-backed toad", "a fusty nut with no kernel", "false of heart, light of ear, bloody of hand",
            "anointed sovereign of sighs and groans", "foot-licker", "lump of foul deformity", "Veriest varlet that ever chewed with a tooth",
            "I do desire that we should be better strangers", "Thou art a boil, a plague sore", "bolting-hutch of beastliness",
            "not so much brain as earwax", "long-tongued babbling gossip", "You rampalliaran!  You fustilarian!", "light of brain",
            "mountain of mad flesh", "More of your conversation would infect my brain.", "The rankest compound of villainous smell that ever offended nostril",
            "There’s no more faith in thee than in a stewed prune.", "swollen parcel of dropsies",
            "trunk of humours, that bolting-hutch of beastliness, that swollen parcel of dropsies, that huge bombard of sack, " +
                "that stuffed cloak-bag of guts, that roasted Manningtree ox with pudding in his belly, that reverend vice, that grey " +
                "Iniquity, that father ruffian, that vanity in years",
            "Like the toad; ugly and venomous", "Thou hast no more brain than I have in mine elbows", "Thou subtle, perjur’d, false, disloyal man!",
            "Thou leathern-jerkin, crystal-button, knot-pated, agatering, puke-stocking, caddis-garter, smooth-tongue, Spanish pouch!",
            "You starvelling, you eel-skin, you dried neat’s-tongue, you bull’s-pizzle, you stock-fish–O for breath to utter what is like " +
                "thee!-you tailor’s-yard, you sheath, you bow-case, you vile standing tuck!"];
    }
    ShakespeareanInsults.prototype.createRandomInsult = function () {
        var one = Math.round(Math.random() * (this.partOne.length - 1));
        var two = Math.round(Math.random() * (this.partTwo.length - 1));
        var three = Math.round(Math.random() * (this.partThree.length - 1));
        return "Thou " + this.partOne[one] + " " + this.partTwo[two] + " " + this.partThree[three];
    };
    ShakespeareanInsults.prototype.getClassicInsult = function () {
        var random = Math.round(Math.random() * (this.classic.length - 1));
        return this.classic[random];
    };
    return ShakespeareanInsults;
}());
var insults = new ShakespeareanInsults();
console.log("Randomly created Shakespearean insult: " + insults.createRandomInsult());
console.log("Classic Shakespearean insult: " + insults.getClassicInsult());
