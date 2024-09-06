export function Home() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
    <p>Hello sweet home</p>
    `;
  return container;
}
