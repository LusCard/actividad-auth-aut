export function Register() {
  const container = document.createElement("div");

  container.classList.add("container");
  container.innerHTML = `
    <div class="flex justify-center mt-10">
      <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 class="text-center text-2xl font-semibold mb-6">Registro</h3>
          <form id="register-form">
            <!-- Username Field -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Usuario
              </label>
              <input type="text" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre de usuario" required>
            </div>
            
            <!-- Password Field -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Contraseña
              </label>
              <input type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contraseña" required>
            </div>

            <!-- Confirm Password Field -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                Confirmar Contraseña
              </label>
              <input type="password" id="confirm-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirmar contraseña" required>
            </div>

            <!-- Submit Button -->
            <div class="flex items-center justify-between">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Registrar
              </button>
            </div>

            <!-- Error Message -->
            <p id="message" class="text-red-500 text-xs italic mt-4"></p>
          </form>
        </div>
      </div>
    </div>
  `;

  return container;
}
