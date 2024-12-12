const container = document.querySelector('#wrapper')

new gridjs.Grid({
  columns: ['Nombre', 'Email', 'Número de teléfono'],
  data: [
  ['Carlos', 'carlos@example.com', '(51) 01 555 1234'],
  ['María', 'maria@example.com', '(54) 11 678 9101'],
  ['José', 'jose@example.com', '(57) 1 345 6789'],
  ['Ana', 'ana@example.com', '(58) 2 234 5678'],
  ['Luis', 'luis@example.com', '(52) 55 789 0123'],
  ['Carmen', 'carmen@example.com', '(56) 2 890 1234'],
  ['Jorge', 'jorge@example.com', '(53) 7 456 7890'],
  ['Elena', 'elena@example.com', '(51) 1 234 5678'],
  ['Miguel', 'miguel@example.com', '(54) 11 345 6789'],
  ['Lucía', 'lucia@example.com', '(57) 1 678 9101']
  ],
  sort: true,
  search: true,
  pagination: {
  enabled: true,
  limit:3 // Número de filas por página
  },
  }).render(document.getElementById("wrapper"));

  const btnAlert = document.getElementById('btn-alert');
  btnAlert.addEventListener('click', function () {
  Swal.fire({
  title: '¡Éxito!',
  text: 'Esta es una alerta de éxito.',
  icon: 'success',
  confirmButtonText: 'Aceptar'
  });
  });
 
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
 
  