********************************************
** Challenge Desarrollador NCR - SSFW     **
** Gonzalez Lucas - Documentación Técnica **
********************************************

El siguiente código es una solución para el desafío de consulta de saldo de cuentas bancarias. Permite filtrar y mostrar las cuentas que cumplen ciertos criterios y muestra información detallada de cada cuenta seleccionada.

Requisitos
**********
Navegador web compatible con HTML, CSS y JavaScript.

Instrucciones de instalación
****************************
Clona o descarga este repositorio en tu computadora.

Tecnologías utilizadas
***********************
HTML5: Se utiliza para estructurar el contenido de la página web.
CSS3: Se utiliza para aplicar estilos a los elementos de la página.
JavaScript: Se utiliza para interactuar con la API y manipular la información obtenida.

Funcionamiento
***************
El archivo index.html define la estructura básica de la página web. Contiene un encabezado (header), un contenido principal (main) y un pie de página (footer). El contenido principal tiene un contenedor (section) con un identificador cuentas donde se mostrarán las cuentas filtradas.
En el archivo index.js, se define una constante url que contiene la URL de la API utilizada para obtener la información de las cuentas bancarias.
Se utiliza la función fetch para realizar una solicitud GET a la API. Una vez obtenida la respuesta, se convierte a formato JSON utilizando el método response.json().
Luego, se filtran las cuentas obtenidas en base a ciertos criterios. Solo se seleccionan aquellas cuentas que tienen la moneda en "u$s" o "$" y el tipo de letras es "CC" o "CA".
El contenedor divCuentas se obtiene del documento HTML utilizando querySelector. Se establecen variables para el control de paginación.
La función mostrarCuentas(page) se encarga de mostrar las cuentas filtradas en la página. Se calcula el rango de cuentas a mostrar en función de la página actual y la cantidad de cuentas por página.
Se generan botones dinámicamente para navegar entre las opciones de cuentas. Si hay opciones anteriores, se muestra un botón "Opciones Anteriores" que al hacer clic disminuye el número de página actual. Si hay más opciones disponibles, se muestra un botón "Mas Opciones" que al hacer clic aumenta el número de página actual.
Por cada cuenta visible, se crea un botón con la información de la cuenta. Al hacer clic en el botón de una cuenta, se muestra la información detallada de esa cuenta.
Por último, se añade un event listener al botón "Salir" en el pie de página. Al hacer clic en el botón, se reinicia la visualización de las cuentas.

Estructura del proyecto
***********************
El proyecto se compone de los siguientes archivos:
index.html: Contiene la estructura HTML de la interfaz web.
asset/css/style.css: Archivo CSS que define los estilos visuales de la aplicación.
asset/js/index.js: Archivo JavaScript que maneja la lógica de consulta de cuentas y la visualización de los detalles de la cuenta.

Conclusiones
************
El código proporcionado permite consultar y mostrar las cuentas bancarias que cumplen ciertos criterios de filtrado. La paginación implementada proporciona una forma sencilla de navegar por las opciones disponibles. El código está estructurado de manera clara y utiliza buenas prácticas de programación.

Contacto
********
Si tienes alguna pregunta o comentario sobre este proyecto, puedes contactarme a mi correo electronico gonzalez.lucas.91@gmail.com

