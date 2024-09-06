export function Header() {
  const header = document.createElement("header");

  header.classList.add("container");
  header.innerHTML = `
  <nav class="bg-gray-100 mb-3 p-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo o marca -->
      <a href="" class="flex items-center">
        <img src="./src/img/img.jpg" alt="" class="w-12 h-12 rounded-full">
      </a>
      <button class="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
        <!-- Icono de toggle para dispositivos móviles -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
  
      <!-- Enlaces de navegación alineados a la izquierda -->
      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="navbarNav">
        <ul class="lg:flex space-x-6">
          <li><a href="/" class="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="blog.html" class="text-gray-700 hover:text-gray-900">Blog</a></li>
          <li><a href="about.html" class="text-gray-700 hover:text-gray-900">About</a></li>
        </ul>
      </div>
  
      <!-- Nombre de usuario y botón de logout alineados a la derecha -->
      <div class="hidden lg:flex lg:items-center">
        <ul class="flex space-x-4">
          <li><a id="user-name" href="#" class="text-gray-700 hover:text-gray-900">NotLogged</a></li>
          <li><a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</a></li>
          <li><a id="logout" href="#" class="text-red-500 hover:text-red-700">Salir</a></li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  return header;
}
