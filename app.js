const SHEET_URL = "https://script.google.com/macros/s/YOUR-ID/exec"; // Replace with your URL

let tasks = [];

document.getElementById('taskForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const task = document.getElementById('task').value.trim();
  const status = document.getElementById('status').value;

  if (!name || !task) {
    alert("Please fill in all fields");
    return;
  }

  const newTask = { name, task, status };
  tasks.push(newTask);

  // Try saving to Google Sheets
  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    });
    console.log("Task saved to Google Sheets");
  } catch (err) {
    console.warn("Google Sheets save failed:", err);
  }

  updateTaskList();
  updateChart();
  document.getElementById('taskForm').reset();
});

function updateTaskList() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.name} - ${t.task} [${t.status}]`;
    list.appendChild(li);
  });
}

function updateChart() {
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const pending = tasks.filter(t => t.status === 'Pending').length;

  const ctx = document.getElementById('taskChart').getContext('2d');
  if (window.taskChart) window.taskChart.destroy();
  window.taskChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        data: [completed, pending],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });
}
``
