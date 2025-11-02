function firstWord(s) {
  const words = s.trim().split(/\s+/);
  return words[0] || ""; 
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
