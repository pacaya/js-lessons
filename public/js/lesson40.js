'use strict';

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
}

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");

function showNewTodo({ id, text, isDone }) {

  const li = document.createElement("li");
  li.className = "todo-item";
  li.id = `item_${id}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isDone;

  const taskText = document.createTextNode(` ${text} `);

  const deleteButton = document.createElement("a");
  deleteButton.className = "delete";
  deleteButton.href = "#"
  deleteButton.appendChild(document.createTextNode("x"));

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteButton);

  tasks.appendChild(li);

}

function onNewTodo(event) {
  event.preventDefault();

  const text = taskInput.value;
  if (text == '') return;
  taskInput.value = '';

  post('/api/task', { text, isDone: false })
    .then(res => res.json())
    .then(todo => showNewTodo(todo));
}

function onStatusChanged(event) {
  const target = event.target;
  if (target.nodeName !== "INPUT") return;

  const checked = target.checked;
  const parent = target.parentElement;
  const [, id] = parent.id.split('_');
  post(`/api/task/${id}/update`, { isDone: checked })
    .then(res => {
      if (!res.ok) {
        target.checked = !checked;
      }
    })
    .catch(_ => {
      target.checked = !checked;
    });
}

form.addEventListener("submit", onNewTodo);
tasks.addEventListener("click", onStatusChanged);

fetch('/api/tasks')
  .then(res => res.json())
  .then(tasks => tasks.forEach(t => showNewTodo(t))); 