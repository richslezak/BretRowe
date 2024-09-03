document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.getElementById('date');
  const today = new Date();
  const formattedDate = today.getFullYear();
  dateElement.textContent = formattedDate;
});
