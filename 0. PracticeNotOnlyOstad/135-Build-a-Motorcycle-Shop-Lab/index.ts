type Category = "Sport" | "Cruiser" | "Touring" | "Dirt" | "Adventure" | "Naked" | "Electric";

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch("https://cdn.freecodecamp.org/curriculum/labs/data/motorcycle-shop/motorcycles.json");
  const data: Motorcycle[] = await response.json();
  return data;
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
  <div class="motorcycle-card">
    <img src="${motorcycle.image_url}" alt="${motorcycle.name}" class="motorcycle-card-image" />
    <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
    <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
    <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
    <p class="motorcycle-card-category">${motorcycle.category}</p>
    <p class="motorcycle-card-description">${motorcycle.description}</p>
    <p class="motorcycle-card-price">${motorcycle.price}</p>

  </div>
  `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];
  private filterTerm: string = "";

  constructor() {
    const input = document.getElementById("name-filter-input") as HTMLInputElement | null;
    input?.addEventListener("input", () => {
      this.filterTerm = input.value;
      this.renderMotorcycles();
    });
  }

  public async loadData(): Promise<void> {
    this.allMotorcycles = await fetchMotorcycles();
  }

  public renderMotorcycles() {
    const grid = document.getElementById("motorcycle-grid");
    const countEl = document.getElementById("results-number");
    const filtered = this.allMotorcycles.filter((m) => m.name.toLowerCase().includes(this.filterTerm.toLowerCase()));
    if (grid) {
      grid.innerHTML = filtered.map(renderMotorcycleCard).join("");
    }
    if (countEl) {
      countEl.textContent = String(filtered.length);
    }
  }
}

const app = new MotorcycleGalleryApp();
app.loadData().then(() => {
  app.renderMotorcycles();
});
