# Menu Horizontal v0.1

Implementa sencillamente un menu horizontal gracias a jQuery y CSS.

## Modo de uso

### HTML

	<ul class="menu-horizontal">
		<li>
			<a href="#">Categoria 1</a>
			<ul>
				<li><a href="#">Producto 1</a></li>
				<li><a href="#">Producto 1</a></li>
				<li><a href="#">Producto 1</a></li>
				<li><a href="#">Producto 1</a></li>
				<li><a href="#">Producto 1</a></li>
			</ul>
		</li>
	</ul>
### Head

	<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="jquery.menuhor-v0.1.js"></script>
	<link rel="stylesheet" type="text/css" href="jquery.menuhor-v0.1.css" />
### Inicializacion
	$(function(){
		$('.menu-horizontal').menuHorizontal();
	});
## Personalizacion
Se adjunta un archivo _.less_ para perzonalizar facilmente el menu

	@firstLevelBG: #A9D06A; /* Color para el fondo de los enlaces del primer nivel */
	@firstLevelFG: #000; /* Color para los enlaces del primer nivel */
	@firstLevelBorder: #CDE99F; /* Color para el borde de los enlaces del primer nivel */
	@firstLevelBGHover: #EED06A; /* Color para el fondo para el evento hover del primer nivel */

	@subLevelBG: #A9D06A; /* Color para el fondo de los enlaces del sub nivel */
	@subLevelFG: #000; /* Color para los enlaces del sub nivel */
	@subLevelBorder: #CDE99F; /* Color para el borde de los enlaces del sub nivel */
	@subLevelBGHover: #EED06A; /* Color para el fondo para el evento hover del sub nivel */

## Desarrollador

[JesusGoku](http://twitter.com/jesusgoku)