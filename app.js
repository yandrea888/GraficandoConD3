const dataInput = document.getElementById('dataInput');
const errorMessage = document.getElementById('errorMessage');
const updateButton = document.getElementById('updateButton');

// Función para validar la entrada
function validateInput() {
    const inputValue = dataInput.value.trim();
    const data = parseInputData(inputValue);
    
    if (inputValue === '') {
        errorMessage.textContent = '';
        errorMessage.style.color = 'red';
        updateButton.disabled = true;
    } else if (data.length === 0) {
        errorMessage.textContent = 'Por favor ingrese números enteros válidos separados por coma.';
        errorMessage.style.color = 'red';
        updateButton.disabled = true;
    } else {
        errorMessage.textContent = '';
        updateButton.disabled = false;
    }
}

// Función para convertir y filtrar los datos de entrada
function parseInputData(inputValue) {
    return inputValue.split(',')
        .map(d => parseInt(d.trim()))
        .filter(d => !isNaN(d));
}

// Función para crear las barras del gráfico
function createBars(data, xScale, yScale, colors, svg, height) {
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', d => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d))
        .attr('fill', (d, i) => colors[i % colors.length])
        .attr('class', 'bar');
}

// Función para crear las etiquetas del gráfico
function createLabels(data, xScale, yScale, svg) {
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d, i) => xScale(i) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d) - 5)
        .attr('text-anchor', 'middle')
        .text(d => d);
}

// Función para renderizar el gráfico
function renderChart(data) {
    const width = 500;   // Definir el ancho del gráfico
    const height = 300;  // Definir la altura del gráfico
    const barPadding = 5;
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F3FF33'];

    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const xScale = d3.scaleBand()
        .domain(data.map((d, i) => i))
        .range([0, width])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height, 0]);

    createBars(data, xScale, yScale, colors, svg, height);  // Pasamos height aquí
    createLabels(data, xScale, yScale, svg);
}

// Función para actualizar el gráfico
function updateChart() {
    const inputValue = dataInput.value.trim();
    const data = parseInputData(inputValue);

    if (data.length === 0) {
        showError('Por favor ingrese una lista válida de números enteros separados por coma.');
        return;
    }

    // Eliminar cualquier gráfico previo
    d3.select('#chart').selectAll('*').remove();

    // Renderizar el gráfico con los nuevos datos
    renderChart(data);
}

// Función para mostrar el mensaje de error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
}

// Evento de actualización de datos
updateButton.addEventListener('click', updateChart);

// Evento de validación en tiempo real
dataInput.addEventListener('input', validateInput);

