function convertMarkdown() {
  let markdown = document.getElementById("markdown-input").value;

  markdown = markdown.replace(/^\s*###\s+(.*)$/gm, `<h3>$1</h3>`);
  markdown = markdown.replace(/^\s*##\s+(.*)$/gm, `<h2>$1</h2>`);
  markdown = markdown.replace(/^\s*#\s+(.*)$/gm, `<h1>$1</h1>`);
  markdown = markdown.replace(/__(.*?)__/g, `<strong>$1</strong>`);
  markdown = markdown.replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`);
  markdown = markdown.replace(/_(.*?)_/g, `<em>$1</em>`);
  markdown = markdown.replace(/\*(.*?)\*/g, `<em>$1</em>`);
  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]*)\)/g,
    `<img alt="$1" src="$2">`,
  );
  markdown = markdown.replace(
    /\[([^\]]*)\]\(([^)]*)\)/g,
    `<a href="$2">$1</a>`,
  );
  markdown = markdown.replace(
    /^\s*>\s+(.*?)$/gm,
    `<blockquote>$1</blockquote>`,
  );

  markdown = markdown.replace(/\n/g, "");

  return markdown;
}

document
  .getElementById("markdown-input")
  .addEventListener("input", function () {
    let html = convertMarkdown();

    document.getElementById("html-output").textContent = html;
    document.getElementById("preview").innerHTML = html;
  });
