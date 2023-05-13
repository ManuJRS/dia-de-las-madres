function redirigir() {
  // Obtener los valores de los nombres desde los input
  const nombre1 = document.getElementById('nombre1').value;
  const nombre2 = document.getElementById('nombre2').value;

  // Codificar los nombres para incluirlos en la URL
  const encodedNombre1 = encodeURIComponent(nombre1);
  const encodedNombre2 = encodeURIComponent(nombre2);

  // Obtener el valor seleccionado del select
  const valorSelect = document.getElementById("select-clase").value;

  // Construir la URL para redirigir a la página de felicitaciones
  const url = `felicidades.html?nombre1=${encodedNombre1}&nombre2=${encodedNombre2}&clase=${valorSelect}`;

  // Redirigir a la página deseada con los valores seleccionados en la URL
  window.location.href = url;
}

  