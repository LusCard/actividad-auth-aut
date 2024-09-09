export function Home() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
    <p>This is a landing page</p>
    `;
  return container;
}
