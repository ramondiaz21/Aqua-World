$(document).ready(function () {
  mostrarAdultos();

  $("#agregarAdulto").on("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón submit
    agregaAdultos();
  });

  $("#printButton").on("click", function () {
    var printContents = document.getElementById("modalBody").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  });

  $("input[name='enfermedadCardiologica']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleEnfermedad").show();
    } else {
      $("#detalleEnfermedad").hide();
      $("#enfermedadCual").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='tratamientoMedico']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleTratamiento").show();
    } else {
      $("#detalleTratamiento").hide();
      $("#descripcionTratamiento").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='medicoPrivadoPublico']").change(function () {
    if ($(this).val() === "1") {
      $("#detallePrivado").show();
    } else {
      $("#detallePrivado").hide();
      $("#cualServicio").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='otraActividadDeportiva']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleActividadDeportiva").show();
    } else {
      $("#detalleActividadDeportiva").hide();
      $("#cualActividad").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='clasesAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleClasesAgua").show();
    } else {
      $("#detalleClasesAgua").hide();
      $("#tiempoClasesAgua").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='experienciaAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleExperienciaDesagradable").show();
    } else {
      $("#detalleExperienciaDesagradable").hide();
      $("#motivoExperiencia").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='temorAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleTemorAgua").show();
    } else {
      $("#detalleTemorAgua").hide();
      $("#motivoTemorAgua").val(""); // Clear the value if "No" is selected
    }
  });
});

function agregaAdultos() {
  var datosAdulto = {
    nombre: $("#nombre").val() || "",
    edad: $("#edad").val() || "",
    telefono: $("#telefono").val() || "",
    nacionalidad: $("#nacionalidad").val() || "",
    fechaDeNacimiento: $("#fechaDeNacimiento").val() || "",
    domicilio: $("#domicilio").val() || "",
    alergiaOtrosRequerimientos: $("#alergias").val() || "",
    nombreTelefonoEmergencia: $("#emergencia").val() || "",
    antecedentesMedicos: $("#antecedentes").val() || "",
    grupoSanguineo: $("#grupoSanguineo").val() || "",
    enfermedadCardiologica:
      $("input[name='enfermedadCardiologica']:checked").val() || "0",
    cualEnfermedadCardiologica: $("#cualEnfermedad").val() || "",
    tratamientoMedico:
      $("input[name='tratamientoMedico']:checked").val() || "0",
    cualtratamientoMedico: $("#descripcionTratamiento").val() || "",
    medicoPrivadoPublico:
      $("input[name='medicoPrivadoPublico']:checked").val() || "0",
    cualMedicoPrivadoPublico: $("#cualServicio").val() || "",
    otraActividadDeportiva:
      $("input[name='otraActividadDeportiva']:checked").val() || "0",
    cualOtraActividadDeportiva: $("#cualActividad").val() || "",
    autorizacionFotos:
      $("input[name='autorizacionFotos']:checked").val() || "0",

    servicio_aquaerobic_lunes: $("#servicio_aquaerobic_lunes").val() || "",
    servicio_aquaerobic_martes: $("#servicio_aquaerobic_martes").val() || "",
    servicio_aquaerobic_miercoles:
      $("#servicio_aquaerobic_miercoles").val() || "",
    servicio_aquaerobic_jueves: $("#servicio_aquaerobic_jueves").val() || "",
    servicio_aquaerobic_viernes: $("#servicio_aquaerobic_viernes").val() || "",
    servicio_aquaerobic_sabado: $("#servicio_aquaerobic_sabado").val() || "",

    servicio_nado_libre_lunes: $("#servicio_nado_libre_lunes").val() || "",
    servicio_nado_libre_martes: $("#servicio_nado_libre_martes").val() || "",
    servicio_nado_libre_miercoles:
      $("#servicio_nado_libre_miercoles").val() || "",
    servicio_nado_libre_jueves: $("#servicio_nado_libre_jueves").val() || "",
    servicio_nado_libre_viernes: $("#servicio_nado_libre_viernes").val() || "",
    servicio_nado_libre_sabado: $("#servicio_nado_libre_sabado").val() || "",

    servicio_aquafitness_lunes: $("#servicio_aquafitness_lunes").val() || "",
    servicio_aquafitness_martes: $("#servicio_aquafitness_martes").val() || "",
    servicio_aquafitness_miercoles:
      $("#servicio_aquafitness_miercoles").val() || "",
    servicio_aquafitness_jueves: $("#servicio_aquafitness_jueves").val() || "",
    servicio_aquafitness_viernes:
      $("#servicio_aquafitness_viernes").val() || "",
    servicio_aquafitness_sabado: $("#servicio_aquafitness_sabado").val() || "",

    servicio_water_spinning_lunes:
      $("#servicio_water_spinning_lunes").val() || "",
    servicio_water_spinning_martes:
      $("#servicio_water_spinning_martes").val() || "",
    servicio_water_spinning_miercoles:
      $("#servicio_water_spinning_miercoles").val() || "",
    servicio_water_spinning_jueves:
      $("#servicio_water_spinning_jueves").val() || "",
    servicio_water_spinning_viernes:
      $("#servicio_water_spinning_viernes").val() || "",
    servicio_water_spinning_sabado:
      $("#servicio_water_spinning_sabado").val() || "",

    servicio_aquatic_pole_lunes: $("#servicio_aquatic_pole_lunes").val() || "",
    servicio_aquatic_pole_martes:
      $("#servicio_aquatic_pole_martes").val() || "",
    servicio_aquatic_pole_miercoles:
      $("#servicio_aquatic_pole_miercoles").val() || "",
    servicio_aquatic_pole_jueves:
      $("#servicio_aquatic_pole_jueves").val() || "",
    servicio_aquatic_pole_viernes:
      $("#servicio_aquatic_pole_viernes").val() || "",
    servicio_aquatic_pole_sabado:
      $("#servicio_aquatic_pole_sabado").val() || "",

    servicio_rehabilitacion_lunes:
      $("#servicio_rehabilitacion_lunes").val() || "",
    servicio_rehabilitacion_martes:
      $("#servicio_rehabilitacion_martes").val() || "",
    servicio_rehabilitacion_miercoles:
      $("#servicio_rehabilitacion_miercoles").val() || "",
    servicio_rehabilitacion_jueves:
      $("#servicio_rehabilitacion_jueves").val() || "",
    servicio_rehabilitacion_viernes:
      $("#servicio_rehabilitacion_viernes").val() || "",
    servicio_rehabilitacion_sabado:
      $("#servicio_rehabilitacion_sabado").val() || "",

    servicio_aqua_yoga_lunes: $("#servicio_aqua_yoga_lunes").val() || "",
    servicio_aqua_yoga_martes: $("#servicio_aqua_yoga_martes").val() || "",
    servicio_aqua_yoga_miercoles:
      $("#servicio_aqua_yoga_miercoles").val() || "",
    servicio_aqua_yoga_jueves: $("#servicio_aqua_yoga_jueves").val() || "",
    servicio_aqua_yoga_viernes: $("#servicio_aqua_yoga_viernes").val() || "",
    servicio_aqua_yoga_sabado: $("#servicio_aqua_yoga_sabado").val() || "",
    servicio_otro: $("#servicio_otro").val() || "",
    especificarPaquete: $("#especificarPaquete").val() || "",

    recibirClasesEnAgua: $("input[name='clasesAgua']:checked").val() || "0",
    cualrecibirClasesEnAgua: $("#tiempoClasesAgua").val() || "",
    experienciaDesagradableConAgua:
      $("input[name='experienciaAgua']:checked").val() || "0",
    cualexperienciaDesagradableConAgua: $("#motivoExperiencia").val() || "",
    temorAguaNadar: $("input[name='temorAgua']:checked").val() || "0",
    cualtemorAguaNadar: $("#motivoTemorAgua").val() || "",
    experienciaAcuatica: $("#experienciaAcuatica").val() || "",
    aceptaAguaCara: $("input[name='aguaCara']:checked").val() || "0",
    temorAgua: $("input[name='temorAguaGeneral']:checked").val() || "0",
    practicaNadando: $("#nivelPractica").val() || "",
    tipoServicioAdquirido: $("#tipoServicio").val() || "",
  };

  $.ajax({
    url: "resources/routes/routeAdultos.php",
    type: "POST",
    data: {
      info: datosAdulto,
      action: "agregarAdultos",
    },
    dataType: "JSON",
    beforeSend: function () {
      console.log("Enviando datos...", datosAdulto);
    },
    error: function (error) {
      console.error("Error:", error);
      alert("Hubo un error al agregar el adulto. Inténtalo nuevamente.");
    },
    success: function (data) {
      if (data != "") {
        var contrato = `
          <p>Nombre del alumno: ${datosAdulto.nombre}</p>
          <p>Edad: ${datosAdulto.edad}</p>
          <p>Telefono: ${datosAdulto.telefono}</p>
          <p>Nacionalidad: ${datosAdulto.nacionalidad}</p>
          <p>Fecha de nacimiento: ${datosAdulto.fechaDeNacimiento}</p>
          <p>Domicilio: ${datosAdulto.domicilio}</p>
          <p>Alergia u otros requerimiento de salud: ${
            datosAdulto.alergiaOtrosRequerimientos
          }</p>
          <p>Nombre y telefono de emergencia: ${
            datosAdulto.nombreTelefonoEmergencia
          }</p>
          <p>Antecedentes medicos: ${datosAdulto.antecedentesMedicos}</p>
          <p>Grupo sanguineo: ${datosAdulto.grupoSanguineo}</p>
          <p>¿Pose alguna enfermedad cardiologica, neurologica o de vias respiratorias? ${
            datosAdulto.enfermedadCardiologica === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosAdulto.cualEnfermedadCardiologica}</p>
          <p>¿Està con tratamiento medico? ${
            datosAdulto.tratamientoMedico === "1" ? "SI" : "NO"
          }</p>
          <p>Describa en que consiste: ${datosAdulto.cualtratamientoMedico}</p>
          <p>¿Tiene algun tipo de servicio medico privado o publico? ${
            datosAdulto.medicoPrivadoPublico === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosAdulto.cualMedicoPrivadoPublico}</p>
          <p>¿Esta dado de alta en alguna otra actividad deportiva? ${
            datosAdulto.otraActividadDeportiva === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosAdulto.cualOtraActividadDeportiva}</p>
          <p>¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ${
            datosAdulto.autorizacionFotos === "1" ? "SI" : "NO"
          }</p>
          <!-- Agrega los demás datos del contrato -->
        `;

        $("#modalBody").html(contrato);
        $("#contratoModal").modal("show");
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

function mostrarAdultos() {
  $.ajax({
    url: "resources/routes/routeAdultos.php",
    type: "POST",
    data: {
      action: "mostrarAdultos",
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

        data.forEach(function (adulto, i) {
          tbody +=
            '<tr data-toggle="tooltip" title="" id="row_' + adulto[0] + '">';
          tbody += "<td>" + (i + 1) + "</td>";

          // Recorre todos los elementos del array 'adulto' y los agrega a las celdas
          for (var j = 1; j < adulto.length; j++) {
            tbody += "<td>" + adulto[j] + "</td>";
          }

          // tbody +=
          //   "<td>" +
          //   '<a href="#" class="btn btn-warning" onclick="editClientes(' +
          //   adulto[0] +
          //   ')"><i class="fas fa-edit"></i></a>' +
          //   '<a href="#" class="btn btn-primary" onclick="detalles(' +
          //   adulto[0] +
          //   ')"><i class="fas fa-list"></i></a>' +
          //   '<a href="#" class="btn btn-info" onclick="darBaja(' +
          //   adulto[0] +
          //   ')"><i class="fas fa-ban"></i></a>' +
          //   '<a href="#" class="btn btn-danger" onclick="eliminar(' +
          //   adulto[0] +
          //   ')"><i class="fas fa-trash"></i></a>' +
          //   "</td>";
          tbody += "</tr>";
        });

        $("#thead").empty().append(thead);
        $("#tbody").empty().append(tbody);
      } else {
        $("#tbody").empty().text("No se encontraron adultos.");
      }
    },
  });
}
