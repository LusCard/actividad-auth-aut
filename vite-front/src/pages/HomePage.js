export function Home() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
  <div class="container mx-auto">
  <!-- Desarrollo Web -->
  <div class="flex flex-col md:flex-row items-center bg-gray-100 py-8">
    <div class="md:w-1/2">
      <img src="img/home-desarrollo-web.webp" class="w-full h-auto" alt="Desarrollo Web">
    </div>
    <div class="md:w-1/2 text-center md:text-left px-4">
      <h2 class="text-2xl font-bold mb-4">Desarrollo Web</h2>
      <p class="text-gray-700">En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.</p>
    </div>
  </div>

  <hr class="my-8">

  <!-- Desarrollo de Aplicaciones Móviles -->
  <div class="flex flex-col md:flex-row-reverse items-center py-8">
    <div class="md:w-1/2">
      <img src="img/home-desarrollo-movil.jpg" class="w-full h-auto" alt="Desarrollo de Aplicaciones Móviles">
    </div>
    <div class="md:w-1/2 text-center md:text-left px-4">
      <h2 class="text-2xl font-bold mb-4">Desarrollo de Aplicaciones Móviles</h2>
      <p class="text-gray-700">Diseñamos y desarrollamos aplicaciones móviles innovadoras y personalizadas para Android e iOS, garantizando una experiencia de usuario óptima y una alta performance en cada dispositivo.</p>
    </div>
  </div>

  <hr class="my-8">

  <!-- Seguridad de Software -->
  <div class="flex flex-col md:flex-row items-center bg-gray-100 py-8">
    <div class="md:w-1/2">
      <img src="img/home-seguridad-software.webp" class="w-full h-auto" alt="Seguridad de Software">
    </div>
    <div class="md:w-1/2 text-center md:text-left px-4">
      <h2 class="text-2xl font-bold mb-4">Seguridad de Software</h2>
      <p class="text-gray-700">En LockDev, nos preocupamos por la seguridad de tus aplicaciones. Ofrecemos auditorías de seguridad y soluciones robustas para proteger tus sistemas de posibles amenazas y vulnerabilidades.</p>
    </div>
  </div>
</div>

    `;
  return container;
}
