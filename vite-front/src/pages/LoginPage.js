export function Login() {
  const container = document.createElement("div");

  container.classList.add("container");
  container.innerHTML = `       
      <div class="flex justify-center mt-10">
          <div class="w-full max-w-md">
              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <h3 class="text-center text-xl font-bold mb-4">Inicio de Sesión</h3>
                  <form id="login-form">
                      <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                              Usuario
                          </label>
                          <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Usuario" required>
                      </div>
                      <div class="mb-6">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                              Contraseña
                          </label>
                          <input type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Contraseña" required>
                      </div>
                      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ingresar</button>
                  </form>
                  <p id="message" class="text-red-500 text-center mt-4"></p>
              </div>
          </div>
      </div>`;
  return container;
}
