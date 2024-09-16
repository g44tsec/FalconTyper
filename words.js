const words = [
    "apple", "banana", "carrot", "dog", "elephant", "fish", "grape", "hat", "ice", "juice", "kangaroo", "lemon",
    "mouse", "night", "orange", "pen", "queen", "rabbit", "sun", "table", "umbrella", "vase", "wolf", "xylophone",
    "yarn", "zebra", "airplane", "book", "cloud", "door", "egg", "frog", "gate", "house", "insect", "jacket",
    "key", "lamp", "mountain", "net", "octopus", "pizza", "quilt", "rose", "shoe", "train", "violin", "whale",
    "yacht", "zoo", "jump", "run", "climb", "swim", "fly", "dance", "read", "write", "build", "paint", "cook",
    "play", "sing", "drive", "explore", "hike", "study", "travel", "rest", "watch", "throw", "catch", "draw",
    "kick", "shake", "lift", "drop", "walk", "code", "design", "laugh", "cry", "whisper", "shout", "organize",
    "plan", "fix", "create", "repair", "swing", "roll", "sculpt", "blend", "mix", "trek", "sprint", "meditate",
    "sketch", "juggle", "stitch", "frame", "sew", "fold", "arrange", "ambidextrous", "blossom", "catastrophic",
    "delightful", "enthusiastic", "fascinating", "gregarious", "haphazard", "incredible", "joyous", "knowledgeable",
    "luminous", "meticulous", "nostalgic", "overwhelming", "peculiar", "quaint", "radiant", "sophisticated", "thriving",
    "unique", "vivid", "whimsical", "xenophobic", "yearning", "zealous"
];

function getRandomSentence(wordCount) {
    const shuffledWords = [...words].sort(() => 0.5 - Math.random());
    const sentence = shuffledWords.slice(0, wordCount).join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

function getRandomParagraph(sentenceCount, wordsPerSentence) {
    return Array.from({ length: sentenceCount }, () => getRandomSentence(wordsPerSentence)).join(' ');
}

// Example usage:
const fillerParagraph = getRandomParagraph(5, 15); // Generates a paragraph with 5 sentences of 15 words each
console.log(fillerParagraph);
