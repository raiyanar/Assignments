interface Card {
  name: string;
  value: string | number;
  name_short: string;
  value_int: number;
  suit: string;
  type: string;
  img: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

interface Deck {
  cards: Card[];
}

const CDN_URL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";
const defaultImg = new URL("default.svg", CDN_URL + "/");
const LOCAL_DEFAULT_IMG = defaultImg;

const getElement = <T extends HTMLElement>(selector: string): T => {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
};

const hideElements = (...elements: HTMLElement[]) => elements.forEach((el) => el.classList.add("hidden"));

const showElements = (...elements: HTMLElement[]) => elements.forEach((el) => el.classList.remove("hidden"));

const getRandomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const renderCard = (drawingType: string, isReversed: boolean, shortName: string, img: string): string => `
  <div>
    <h2>${drawingType}</h2>
    <figure class="card_container ${isReversed ? "reversed-card" : ""}" data-id="${shortName}">
      <div class="img-loader"></div>
      <img
        src="${img ? `${CDN_URL}/${img}` : LOCAL_DEFAULT_IMG}"
        class="card-img hidden"
        onload="this.classList.remove('hidden');this.previousElementSibling.style.display='none';"
        onerror="if(!dataset.failed){dataset.failed='true';src='${LOCAL_DEFAULT_IMG}';}else{this.classList.remove('hidden');this.previousElementSibling.style.display='none';}"
      />
    </figure>
  </div>
`;
