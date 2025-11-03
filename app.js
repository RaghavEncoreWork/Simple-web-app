document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const task = document.getElementById('task').value;
  const status = document.getElementById('status').value;

  // Placeholder: Send data to Google Sheets API
  console.log(`Name: ${name}, Task: ${task}, Status: ${status}`);

  // Update chart (dummy data for now)
  updateChart();
});

function updateChart() {
  const ctx = document.getElementById('taskChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        data: [5, 10], // Replace with dynamic data
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });
}
