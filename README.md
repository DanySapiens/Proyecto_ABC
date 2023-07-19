# Proyecto_ABC

Proyecto que permite realizar el alta, cambios de datos y baja de empleados y puestos, asi como tambien permite realizar la consulta de se los mismos siempre y cuando esten activos, es decir que no hayan sido dados de baja. 
 
**Requisitos para que el proyecto funcione:
1.Tener instalado xampp
2.Tener instalado postgradeSQL
3.Buscamos la carpeta que contiene el xampp en nuestro disco C o la ruta donde lo instalamos y buscamos la carpeta (htdocs) dentro de ella descomprimimos el proyecto.
4.En la seccion de database en postgradeSQL creamos una llamada "PruebaDataBase" (en el archivo conexion.php se pueden visualizar o modificar la informacion de la database)
5.Ejecutar los scripts de las funciones y tablas que se encuentra de la carpeta DB del proyecto.

//select para dar de alta empleados con datos de prueba
select * from fnoperacionesempleados(1, 32116394, 'ROSA', 'PAYAN', 'ROCHIN', 'Mocorito', '23232', '1114360353', 'PARR990612MSLPCN06', '44467472421', 35, '')

//select para dar de alta puesto con datos de prueba
select * from fnoperacionespuestos(1, 87, 'NUEVOPUESTO', 90236398, 0);

6.Abrir la pagina desde el xampp con el localhost y la ruta de la carpeta, ejemplo:
http://localhost:81/Proyecto_ABC/PAGINA/HTML/ProyectoABC.html
