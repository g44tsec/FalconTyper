const nouns = [
    "dog", "cat", "house", "car", "tree", "book", "bird", "computer", "phone", "shoe", "train", "apple", "banana",
    "ball", "hat", "bed", "bicycle", "boat", "chair", "cow", "cup", "door", "duck", "flower", "game", "lamp",
    "pencil", "plane", "star", "table", "truck", "window", "toy", "fish", "cookie", "shirt", "horse", "key", 
    "kite", "leaf", "milk", "moon", "rain", "sandwich", "school", "shirt", "sock", "sun", "towel", "water",
    "garden", "pillow", "blanket", "camera", "watch", "bike", "ocean", "cloud", "river", "forest", "bench",
    "street", "city", "park", "bridge", "glove", "bag", "wallet", "clock", "mirror", "bottle", "shelf", "piano",
    "violin", "guitar", "bus", "rocket", "fence", "path", "stadium", "basket", "candle", "notebook", "eraser",
    "calculator", "shark", "whale", "penguin", "rabbit", "balloon", "skateboard", "bat", "shovel", "helmet", "subway", 
    "grass", "cloud", "mountain", "valley", "desert", "sand"
];

const verbs = [
    "run", "jump", "play", "sing", "dance", "cook", "read", "write", "drive", "fly", "walk", "swim", "build",
    "eat", "drink", "sleep", "talk", "listen", "watch", "paint", "draw", "climb", "catch", "throw", "kick",
    "laugh", "cry", "shout", "whisper", "fix", "clean", "open", "close", "help", "buy", "sell", "teach", "learn",
    "search", "find", "break", "hug", "lift", "drop", "push", "pull", "carry", "fold", "mix", "bake", "ride",
    "jog", "skip", "slide", "yell", "float", "twist", "turn", "spin", "mend", "hop", "sketch", "juggle", "chop",
    "whirl", "knit", "bend", "shine", "measure", "swing", "shiver", "nibble", "brush", "explore", "pile", "clap",
    "stir", "polish", "plant", "dig", "invent", "push", "fold", "record", "dive", "skip", "surf", "skip", "bounce", 
    "kick", "toss", "decorate", "gather", "frame", "hang", "shape", "slide"
];

const adjectives = [
    "happy", "sad", "fast", "slow", "funny", "quiet", "loud", "bright", "dark", "warm", "cold", "big", "small",
    "tall", "short", "kind", "mean", "soft", "hard", "young", "old", "new", "clean", "dirty", "strong", "weak",
    "brave", "calm", "excited", "tired", "fresh", "friendly", "shiny", "dull", "heavy", "light", "hungry", "thirsty",
    "angry", "busy", "silly", "smart", "quick", "lazy", "proud", "gentle", "rich", "poor", "noisy", "beautiful", 
    "ugly", "graceful", "clumsy", "cheerful", "mysterious", "curious", "wild", "polite", "rude", "adorable", "brilliant",
    "fearless", "fierce", "glamorous", "grumpy", "jolly", "lazy", "mighty", "odd", "perfect", "risky", "sleepy", "tidy", 
    "victorious", "zesty", "weird", "playful", "sincere", "thoughtful", "eager", "cheerful", "zany", "melodic", "peaceful",
    "bold", "breezy", "glowing", "serious", "melancholy", "adventurous", "creative", "generous", "enthusiastic"
];

// Function to shuffle an array to ensure randomness without repetition
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to construct a proper sentence without repeating words
function getRandomSentence(availableNouns, availableVerbs, availableAdjectives) {
    const noun = availableNouns.pop();  // Get and remove a random noun
    const verb = availableVerbs.pop();  // Get and remove a random verb
    const adjective1 = availableAdjectives.pop();  // Get and remove the first adjective
    const adjective2 = availableAdjectives.pop();  // Get and remove the second adjective

    // Constructing a sentence (e.g., "The happy dog runs with the small ball.")
    return `The ${adjective1} ${noun} ${verb}s the ${adjective2} ${availableNouns.pop()}.`;
}

// Function to generate a paragraph with a given number of sentences, ensuring no repetition
function getRandomParagraph(sentenceCount) {
    // Shuffle arrays to ensure randomness
    const shuffledNouns = shuffleArray([...nouns]);
    const shuffledVerbs = shuffleArray([...verbs]);
    const shuffledAdjectives = shuffleArray([...adjectives]);

    // Ensure there are enough unique words for the number of sentences
    const minWords = sentenceCount * 2; // 2 adjectives per sentence
    if (shuffledNouns.length < sentenceCount || shuffledVerbs.length < sentenceCount || shuffledAdjectives.length < minWords) {
        throw new Error("Not enough words to generate unique sentences.");
    }

    // Generate sentences without repeating words
    return Array.from({ length: sentenceCount }, () => getRandomSentence(shuffledNouns, shuffledVerbs, shuffledAdjectives)).join(' ');
}

// Example usage:
const fillerParagraph = getRandomParagraph(5); // Generates a paragraph with 5 proper, non-repeating sentences
console.log(fillerParagraph);
