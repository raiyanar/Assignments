// ============================================
// PART 1: The "Bug Blueprint" (Abstract Class)
// ============================================
// Think of this like a template for making bugs.
// "abstract" means you can't make a plain Bug directly —
// you MUST make a specific bug like Bee or Spider.
abstract class Bug<T> {
  // This will hold the bug's emoji (like "🐝" or "🕷️")
  // The "!" means "I promise to set this later before using it"
  emoji!: T;

  // This will hold the HTML paragraph element where we show the emoji
  emojiElement!: HTMLParagraphElement;

  // The "constructor" runs when we create a new bug.
  // It receives the HTML element and saves it for later.
  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement;
  }

  // "abstract render()" means: "Every bug MUST have its own render() method."
  // We don't write the code here — each bug (Bee, Spider) writes its own.
  abstract render(): void;
}

// ============================================
// PART 2: The Bee Bug
// ============================================
// "extends Bug<string>" means: Bee is a type of Bug that uses text (string) for its emoji.
class Bee extends Bug<string> {
  // Bee's constructor: receives the HTML element, passes it to parent Bug,
  // then sets its own emoji to "🐝"
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement); // Call parent Bug's constructor
    this.emoji = "🐝"; // Set Bee's emoji
  }

  // Bee's version of render(): puts the bee emoji into the HTML element
  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

// ============================================
// PART 3: The Spider Bug
// ============================================
// Same idea as Bee, but with a spider emoji "🕷️"
class Spider extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🕷️";
  }

  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

// ============================================
// PART 4: Helper Function - "Is this a dropdown?"
// ============================================
// Checks if something is an HTML <select> dropdown element.
// Used later to make sure we're dealing with a dropdown.
function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}

// ============================================
// PART 5: Find the HTML Elements & Create Bugs
// ============================================
// Find the paragraph element where we'll show the bug emoji (id="bug-emoji")
const bugEmojiElement = document.querySelector<HTMLParagraphElement>("#bug-emoji")!;

// Create a "menu" (object) that maps names to actual bug objects.
// Both bugs share the SAME paragraph element — they take turns showing.
const bugMap: Record<string, Bug<string>> = {
  bee: new Bee(bugEmojiElement),
  spider: new Spider(bugEmojiElement),
};

// ============================================
// PART 6: Listen for Dropdown Changes
// ============================================
// Find the dropdown (id="species") where user picks "bee" or "spider"
const selectElement = document.querySelector<HTMLSelectElement>("#species")!;

// When user changes the dropdown selection, run this code:
selectElement.addEventListener("change", (e) => {
  // Make sure the thing that triggered the event is actually a dropdown
  if (isSelect(e.target)) {
    // Get the selected value ("bee" or "spider"), find that bug, and tell it to render!
    bugMap[e.target.value].render();
  }
});
