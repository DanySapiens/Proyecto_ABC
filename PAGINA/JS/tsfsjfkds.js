
let tabla_html

    for(var i = 0; i < data.length; i++){
        tabla_html += "<tr>";
        tabla_html += "<td>" + data[i].id + "</td>";
        tabla_html += "<td>" + data[i].nombre + "</td>";
        tabla_html += "<td>" + data[i].apellido + "</td>";
        tabla_html += "</tr>";
    }

    tabla_html += "</table>";

    $("#tabla").html(tabla_html);  // Insertar la tabla en el elemento con ID "tabla"