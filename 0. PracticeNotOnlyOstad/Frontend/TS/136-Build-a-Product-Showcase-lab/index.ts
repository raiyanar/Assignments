interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  constructor(public items: T[]) {}

  getAll(): T[] {
    return this.items;
  }

  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}

const renderProduct = (param: Product): string => {
  let info = "";
  if (param.type === "book") {
    info = `Book: ${param.title} by ${param.author}`;
  } else if (param.type === "electronics") {
    info = `Electronics: ${param.item} - ${param.model}`;
    if (param.warranty !== undefined) {
      info += ` - Warranty: ${param.warranty} year(s)`;
    }
  } else if (param.type === "clothing") {
    info = `Clothing: ${param.item} by ${param.brand}`;
    if (param.size !== undefined) {
      info += ` - Size ${param.size}`;
    }
  } else {
    throw new Error(`Unknown product type: ${JSON.stringify(param)}`);
  }

  return `<div class="item" id="${param.id}"><div class="price">${param.price}</div><div class="info">${info}</div></div>`;
};

const products = new Collection<Product>([
  { type: "book", id: "1", price: 15, title: "Clean Code", author: "Robert C. Martin" },
  { type: "electronics", id: "2", price: 299, item: "Headphones", model: "WH-1000", warranty: 2 },
  { type: "clothing", id: "3", price: 45, item: "T-Shirt", brand: "Nike", size: "M" },
]);

function showProducts(filter?: "book" | "electronics" | "clothing") {
  const output = document.getElementById("output");
  if (!output) return;
  const list = filter ? products.filter((p) => p.type === filter) : products.getAll();
  output.innerHTML = list.map(renderProduct).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts();

  document.getElementById("all")?.addEventListener("click", () => showProducts());

  document.getElementById("book")?.addEventListener("click", () => showProducts("book"));

  document.getElementById("electronics")?.addEventListener("click", () => showProducts("electronics"));

  document.getElementById("clothing")?.addEventListener("click", () => showProducts("clothing"));
});
