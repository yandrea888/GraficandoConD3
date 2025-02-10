# GraficandoConD3
Prueba para Codifico - Graficando con D3

Graficando con D3
Este proyecto es una aplicación web simple que utiliza D3.js para generar gráficos de barras interactivos en base a datos numéricos ingresados por el usuario.

Descripción
La aplicación permite al usuario ingresar una lista de números separados por comas. 
Los números se procesan para validar que sean valores enteros, y luego se representan en un gráfico de barras dinámico, donde cada barra corresponde a uno de los valores ingresados.

Si la entrada no es válida, el sistema muestra un mensaje de error.

Tecnologías utilizadas:
HTML5 para la estructura de la aplicación.
CSS para el estilo y diseño del proyecto.
JavaScript (ES6+) para la lógica de validación y generación del gráfico.
D3.js para crear y renderizar el gráfico de barras.
Visual Studio Code como entorno de desarrollo.

Estructura del proyecto

Graficando-con-D3/
index.html       # Página principal de la aplicación
app.js           # Código JavaScript con la lógica del gráfico y validación
README.md        # Documento de explicación del proyecto

Funcionamiento del proyecto:
1. Entrada de datos
El usuario debe ingresar números separados por coma en el campo de texto (ejemplo: 10, 20, 30, 40).

Validación:
Si el campo está vacío o contiene datos no válidos, aparece un mensaje de error.
Si los datos son correctos, se habilita el botón Update Data.

2. Creación del gráfico
Cuando el usuario hace clic en Update Data, el gráfico se actualiza para mostrar los datos ingresados.
Cada barra tiene un color diferente para mejorar la visualización, y las etiquetas de cada barra muestran el valor correspondiente.

3. Manejo de etiquetas
Si el valor de una barra es pequeño y la etiqueta no cabe sobre ella, la etiqueta se muestra debajo de la barra para evitar que se salga del área del gráfico.


Muchas gracias

Yuly Andrea Morales