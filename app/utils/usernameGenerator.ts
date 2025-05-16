import type { UsernameOptions } from "~/components/UsernameForm";

// List of adjectives for username generation
const adjectives = [
  "amazing", "brave", "clever", "daring", "eager", "fierce", "gentle", "happy",
  "intelligent", "jolly", "kind", "lively", "mighty", "nice", "powerful", "quick",
  "radiant", "smart", "talented", "unique", "vibrant", "wise", "xcellent", "young", "zealous"
];

// List of nouns for username generation
const nouns = [
  "artist", "builder", "champion", "dreamer", "explorer", "fighter", "gamer",
  "hero", "innovator", "joker", "knight", "leader", "master", "ninja", "observer",
  "pioneer", "queen", "runner", "soldier", "traveler", "unicorn", "victor", "warrior",
  "xpert", "yeti", "zealot"
];

// Generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random username based on options
function generateUsername(options: UsernameOptions): string {
  const { prefix, suffix, minLength, maxLength, includeNumbers } = options;
  
  // Get random adjective and noun
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  // Capitalize first letter of each word
  const capitalizedAdjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  const capitalizedNoun = noun.charAt(0).toUpperCase() + noun.slice(1);
  
  // Create base username
  let username = capitalizedAdjective + capitalizedNoun;
  
  // Add numbers if requested
  if (includeNumbers) {
    username += getRandomInt(1, 999);
  }
  
  // Add prefix if provided
  if (prefix && prefix.trim() !== "") {
    username = prefix.trim() + username;
  }
  
  // Add suffix if provided
  if (suffix && suffix.trim() !== "") {
    username = username + suffix.trim();
  }
  
  // Ensure username is within length constraints
  if (username.length < minLength) {
    // If too short, add random numbers
    while (username.length < minLength) {
      username += getRandomInt(0, 9);
    }
  } else if (username.length > maxLength) {
    // If too long, truncate
    username = username.substring(0, maxLength);
  }
  
  return username;
}

// Generate multiple usernames
export function generateUsernames(options: UsernameOptions): string[] {
  const usernames: string[] = [];
  const count = options.count || 5;
  
  // Generate the requested number of usernames
  for (let i = 0; i < count; i++) {
    let username = generateUsername(options);
    
    // Ensure no duplicates
    while (usernames.includes(username)) {
      username = generateUsername(options);
    }
    
    usernames.push(username);
  }
  
  return usernames;
}