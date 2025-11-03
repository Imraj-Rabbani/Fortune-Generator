const box  = document.getElementById("fortuneBox");
const text = document.getElementById("fortuneText");
const buttons = document.querySelectorAll("[data-btn]");

const fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "Small steps every day lead to big results.",
  "Patience is a superpower.",
  "Clarity comes after action.",
  "Your future self is watching. Keep going.",
  "The journey of a thousand miles begins with a single step.",
  "Don't wait for opportunity. Create it.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "You don't have to be great to start, but you have to start to be great.",
  "What you allow is what will continue.",
  "Growth and comfort do not coexist.",
];


const FONT_COLORS   = ["#7a271a","#7c2d12","#991b1b","#9f1239","#0f172a","#1f2937"];
const BG_COLORS     = ["#fde68a","#fef3c7","#ffedd5","#e0f2fe","#bfdbfe","#eef2ff","#f1f5f9"];
const BORDER_COLORS = ["#166534","#15803d","#4d7c0f","#1d4ed8","#2563eb","#a78bfa","#b45309"];
const SIZES   = ["1.25rem","1.3125rem","1.375rem"]; 
const FAMILIES = [
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
  "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
  "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
];

// Simple random helpers
function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
function getRandomDifferent(arr, current) {
  if (arr.length < 2){
    return arr[0];
  } 
  let next = current;
  while (next === current) {
    next = getRandomItem(arr);
  }
  return next;
}
text.textContent = getRandomItem(fortunes);

// Tracking current styles to avoid picking the same value twice in a row
let current = {
  fontColor: window.getComputedStyle(text).color,
  bgColor:   window.getComputedStyle(box).backgroundColor,
  border:    window.getComputedStyle(box).borderColor,
  size:      window.getComputedStyle(text).fontSize,
  family:    window.getComputedStyle(text).fontFamily,
};

// Apply all changes at once (random, button-agnostic)
function restyle() {
  const newFontColor = getRandomDifferent(FONT_COLORS, current.fontColor);
  const newBg        = getRandomDifferent(BG_COLORS, current.bgColor);
  const newBorder    = getRandomDifferent(BORDER_COLORS, current.border);
  const newSize      = getRandomDifferent(SIZES, current.size);
  const newFamily    = getRandomDifferent(FAMILIES, current.family);


  text.style.color = newFontColor;
  box.style.backgroundColor = newBg;
  box.style.borderColor = newBorder;
  text.style.fontSize = newSize;
  text.style.fontFamily = newFamily;


  current = { fontColor: newFontColor, bgColor: newBg, border: newBorder, size: newSize, family: newFamily };
}

// Any button click triggers a full random restyle (even same button repeatedly)
buttons.forEach(btn => btn.addEventListener("click", restyle));
