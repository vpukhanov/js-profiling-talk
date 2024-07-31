const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    addTodo(input.value.trim());
    input.value = "";
  }
});

function addTodo(text) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-gray-100 p-2 rounded";
  li.innerHTML = `
          <span>${text}</span>
          <button class="text-red-500 hover:text-red-700">Delete</button>
      `;
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });
  list.appendChild(li);
}
