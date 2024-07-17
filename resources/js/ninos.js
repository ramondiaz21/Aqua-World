$(document).ready(function () {
  mostrarNinos();

  $("#agregarNino").click(function (event) {
    event.preventDefault();
    agregaNinos();
  });

  $("input[name='enfermedad']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleEnfermedadNino").show();
    } else {
      $("#detalleEnfermedadNino").hide();
      $("#enfermedadCual").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='tratamiento']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleTratamientoConsiste").show();
    } else {
      $("#detalleTratamientoConsiste").hide();
      $("#tratamientoConsiste").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='servicioMedico']").change(function () {
    if ($(this).val() === "1") {
      $("#detallePrivadoNino").show();
    } else {
      $("#detallePrivadoNino").hide();
      $("#servicioMedicoCual").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='actividadDeportiva']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleActividadDeportivaNino").show();
    } else {
      $("#detalleActividadDeportivaNino").hide();
      $("#actividadDeportivaCual").val(""); // Clear the value if "No" is selected
    }
  });
});

function agregaNinos($info) {
  var datosNino = {
    nombre: $("#nombre").val(),
    edad: $("#edad").val(),
    telefono: $("#telefono").val(),
    nacionalidad: $("#nacionalidad").val(),
    fechaDeNacimiento: $("#fechaDeNacimiento").val(),
    domicilio: $("#domicilio").val(),
    alergiaOtrosRequerimientos: $("#alergias").val(),
    nombreTelefonoEmergencia: $("#emergencia").val(),
    antecedentesMedicos: $("#antecedentes").val(),
    grupoSanguineo: $("#grupoSanguineo").val(),
    enfermedadCardiologica: $(
      "input[name='enfermedadCardiologica']:checked"
    ).val(),
    cualEnfermedadCardiologica: $("#cualEnfermedad").val(),
    tratamientoMedico: $("input[name='tratamientoMedico']:checked").val(),
    cualtratamientoMedico: $("#descripcionTratamiento").val(),
    medicoPrivadoPublico: $("input[name='medicoPrivadoPublico']:checked").val(),
    cualMedicoPrivadoPublico: $("#cualMedicoPrivadoPublico").val(),
    otraActividadDeportiva: $(
      "input[name='otraActividadDeportiva']:checked"
    ).val(),
    cualOtraActividadDeportiva: $("#cualActividad").val(),
    autorizacionFotos: $("input[name='otraActividadDeportiva']:checked").val(),

    servicio_aquaerobic_lunes: $("#servicio_aquaerobic_lunes").val(),
    servicio_aquaerobic_martes: $("#servicio_aquaerobic_martes").val(),
    servicio_aquaerobic_miercoles: $("#servicio_aquaerobic_miercoles").val(),
    servicio_aquaerobic_jueves: $("#servicio_aquaerobic_jueves").val(),
    servicio_aquaerobic_viernes: $("#servicio_aquaerobic_viernes").val(),
    servicio_aquaerobic_sabado: $("#servicio_aquaerobic_sabado").val(),

    servicio_nado_libre_lunes: $("#servicio_nado_libre_lunes").val(),
    servicio_nado_libre_martes: $("#servicio_nado_libre_martes").val(),
    servicio_nado_libre_miercoles: $("#servicio_nado_libre_miercoles").val(),
    servicio_nado_libre_jueves: $("#servicio_nado_libre_jueves").val(),
    servicio_nado_libre_viernes: $("#servicio_nado_libre_viernes").val(),
    servicio_nado_libre_sabado: $("#servicio_nado_libre_sabado").val(),

    servicio_aquafitness_lunes: $("#servicio_aquafitness_lunes").val(),
    servicio_aquafitness_martes: $("#servicio_aquafitness_martes").val(),
    servicio_aquafitness_miercoles: $("#servicio_aquafitness_miercoles").val(),
    servicio_aquafitness_jueves: $("#servicio_aquafitness_jueves").val(),
    servicio_aquafitness_viernes: $("#servicio_aquafitness_viernes").val(),
    servicio_aquafitness_sabado: $("#servicio_aquafitness_sabado").val(),

    servicio_water_spinning_lunes: $("#servicio_water_spinning_lunes").val(),
    servicio_water_spinning_martes: $("#servicio_water_spinning_martes").val(),
    servicio_water_spinning_miercoles: $(
      "#servicio_water_spinning_miercoles"
    ).val(),
    servicio_water_spinning_jueves: $("#servicio_water_spinning_jueves").val(),
    servicio_water_spinning_viernes: $(
      "#servicio_water_spinning_viernes"
    ).val(),
    servicio_water_spinning_sabado: $("#servicio_water_spinning_sabado").val(),

    servicio_aquatic_pole_lunes: $("#servicio_aquatic_pole_lunes").val(),
    servicio_aquatic_pole_martes: $("#servicio_aquatic_pole_martes").val(),
    servicio_aquatic_pole_miercoles: $(
      "#servicio_aquatic_pole_miercoles"
    ).val(),
    servicio_aquatic_pole_jueves: $("#servicio_aquatic_pole_jueves").val(),
    servicio_aquatic_pole_viernes: $("#servicio_aquatic_pole_viernes").val(),
    servicio_aquatic_pole_sabado: $("#servicio_aquatic_pole_sabado").val(),

    servicio_rehabilitacion_lunes: $("#servicio_rehabilitacion_lunes").val(),
    servicio_rehabilitacion_martes: $("#servicio_rehabilitacion_martes").val(),
    servicio_rehabilitacion_miercoles: $(
      "#servicio_rehabilitacion_miercoles"
    ).val(),
    servicio_rehabilitacion_jueves: $("#servicio_rehabilitacion_jueves").val(),
    servicio_rehabilitacion_viernes: $(
      "#servicio_rehabilitacion_viernes"
    ).val(),
    servicio_rehabilitacion_sabado: $("#servicio_rehabilitacion_sabado").val(),

    servicio_aqua_yoga_lunes: $("#servicio_aqua_yoga_lunes").val(),
    servicio_aqua_yoga_martes: $("#servicio_aqua_yoga_martes").val(),
    servicio_aqua_yoga_miercoles: $("#servicio_aqua_yoga_miercoles").val(),
    servicio_aqua_yoga_jueves: $("#servicio_aqua_yoga_jueves").val(),
    servicio_aqua_yoga_viernes: $("#servicio_aqua_yoga_viernes").val(),
    servicio_aqua_yoga_sabado: $("#servicio_aqua_yoga_sabado").val(),
    servicio_otro: $("#servicio_otro").val(),
    especificarPaquete: $("#especificarPaquete").val(),

    recibirClasesEnAgua: $("input[name='clasesAgua']:checked").val(),
    cualrecibirClasesEnAgua: $("#tiempoClasesAgua").val(),
    experienciaDesagradableConAgua: $(
      "input[name='experienciaAgua']:checked"
    ).val(),
    cualexperienciaDesagradableConAgua: $("#motivoExperiencia").val(),
    temorAguaNadar: $("input[name='temorAgua']:checked").val(),
    cualtemorAguaNadar: $("#motivoTemorAgua").val(),
    experienciaAcuatica: $("#experienciaAcuatica").val(),
    aceptaAguaCara: $("input[name='aguaCara']:checked").val(),
    temorAgua: $("input[name='temorAguaGeneral']:checked").val(),
    practicaNadando: $("#nivelPractica").val(),
    tipoServicioAdquirido: $("#tipoServicio").val(),
  };

  $.ajax({
    url: "resources/routes/routeNinos.php",
    type: "POST",
    data: {
      info: datosNino,
      action: "agregarNinos",
    },
    dataType: "JSON",
    beforeSend: function () {
      console.log("Enviando datos...", datosNino);
    },
    error: function (error) {
      console.error("Error:", error);
      //alert("Hubo un error al agregar el Nino. Inténtalo nuevamente.");
    },
    success: function (data) {
      if (data != "") {
        loadData();
        alert("Éxito", "Se agregó correctamente", 8000, "success");
      } else {
        //$('tbody').empty();
        alert(
          "Atención!",
          "Ya existe un cliente con esa información, favor de escribir uno diferente",
          8000,
          "error"
        );
      }
    },
  });
}

function mostrarNinos() {
  $.ajax({
    url: "resources/routes/routeNinos.php",
    type: "POST",
    data: {
      action: "mostrarNinos",
    },
    dataType: "json",
    beforeSend: function () {
      // Opcional: Muestra un spinner de carga
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", status, error);
      $("#tbody").text("Error al cargar los datos.");
    },
    success: function (data) {
      if (Array.isArray(data) && data.length > 0) {
        var tbody = "";
        // var thead =
        //   "<tr>" +
        //   "<th>NO.</th>" +
        //   "<th>USUARIO</th>" +
        //   "<th>CLAVE</th>" +
        //   "<th>NOMBRE</th>" +
        //   "<th>DOMICILIO</th>" +
        //   "<th>ESTADO / MUNICIPIO</th>" +
        //   "<th>TELÉFONO</th>" +
        //   "<th>ESTATUS</th>" +
        //   "<th>OPCIONES</th>" +
        //   "</tr>";

        data.forEach(function (Nino, i) {
          tbody +=
            '<tr data-toggle="tooltip" title="" id="row_' + Nino[0] + '">';
          tbody += "<td>" + (i + 1) + "</td>";

          // Recorre todos los elementos del array 'Nino' y los agrega a las celdas
          for (var j = 1; j < Nino.length; j++) {
            tbody += "<td>" + Nino[j] + "</td>";
          }

          // tbody +=
          //   "<td>" +
          //   '<a href="#" class="btn btn-warning" onclick="editClientes(' +
          //   Nino[0] +
          //   ')"><i class="fas fa-edit"></i></a>' +
          //   '<a href="#" class="btn btn-primary" onclick="detalles(' +
          //   Nino[0] +
          //   ')"><i class="fas fa-list"></i></a>' +
          //   '<a href="#" class="btn btn-info" onclick="darBaja(' +
          //   Nino[0] +
          //   ')"><i class="fas fa-ban"></i></a>' +
          //   '<a href="#" class="btn btn-danger" onclick="eliminar(' +
          //   Nino[0] +
          //   ')"><i class="fas fa-trash"></i></a>' +
          //   "</td>";
          tbody += "</tr>";
        });

        $("#thead").empty().append(thead);
        $("#tbody").empty().append(tbody);
      } else {
        $("#tbody").empty().text("No se encontraron Ninos.");
      }
    },
  });
}