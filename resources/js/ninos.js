$(document).ready(function () {
  mostrarNinos();

  $("#agregarNino").click(function (event) {
    event.preventDefault();
    agregaNinos();
  });

  $("#printButton").on("click", function () {
    var printContents = document.getElementById("modalBody").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
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

  $("input[name='clasesAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleClasesAguaTiempo").show();
    } else {
      $("#detalleClasesAguaTiempo").hide();
      $("#clasesAguaTiempo").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='experienciaAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleMotivoExperienciaAgua").show();
    } else {
      $("#detalleMotivoExperienciaAgua").hide();
      $("#motivoExperienciaAgua").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='temorAgua']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleMotivoTemorAgua").show();
    } else {
      $("#detalleMotivoTemorAgua").hide();
      $("#motivoTemorAgua").val(""); // Clear the value if "No" is selected
    }
  });

  $("input[name='clasesNatacion']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleMotivoclasesNatacion").show();
    } else {
      $("#detalleMotivoclasesNatacion").hide();
      $("#motivoclasesNatacion").val(""); // Clear the value if "No" is selected
    }
  });
});

function agregaNinos($info) {
  var datosNino = {
    nombre: $("#nombreAlumno").val() || "",
    fechaDeNacimiento: $("#fechaNacimiento").val() || "",
    edad: $("#edad").val() || "",
    domicilio: $("#domicilio").val() || "",
    escuelaProcedencia: $("#escuelaProcedencia").val() || "",
    escolaridad: $("#escolaridad").val() || "",
    grado: $("#grado").val() || "",
    tipoSangre: $("#tipoSangre").val() || "",
    alergiasOtrosRequerimientos: $("#alergiasRequerimientos").val() || "",
    recomendacionesEspeciales: $("#recomendacionesEspeciales").val() || "",
    antecedentesMedicos: $("#antecedentesMedicos").val() || "",
    grupoSanguineo: $("#grupoSanguineo").val() || "",
    enfermedadCardiologica: $("input[name='enfermedad']:checked").val() || "0",
    cualEnfermedadCardiologica: $("#enfermedadCual").val() || "",
    tratamientoMedico: $("input[name='tratamiento']:checked").val() || "0",
    descripcionTratamientoMedico: $("#tratamientoConsiste").val() || "",
    servicioMedico: $("input[name='servicioMedico']:checked").val() || "0",
    cualServicioMedico: $("#servicioMedicoCual").val() || "",
    altaActividadDeportiva:
      $("input[name='actividadDeportiva']:checked").val() || "0",
    cualActividadDeportiva: $("#actividadDeportivaCual").val() || "",
    autorizacionFotos: $("input[name='autorizaFotos']:checked").val() || "0",
    tipoProgramaInicio: $("#programaInicio").val() || "",
    experienciaClasesAgua: $("input[name='clasesAgua']:checked").val() || "0",
    tiempoExperienciaClasesAgua: $("#clasesAguaTiempo").val() || "",
    experienciaDesagradableAgua:
      $("input[name='experienciaAgua']:checked").val() || "",
    motivoExperienciaDesagradableAgua: $("#motivoExperienciaAgua").val() || "",
    temorAguaNadar: $("input[name='temorAgua']:checked").val() || "0",
    motivoTemorAguaNadar: $("#motivoTemorAgua").val() || "",
    nivelPracticaNino: $("#nivelPracticaNino").val() || "",
    tiempoClasesNatacion:
      $("input[name='clasesNatacion']:checked").val() || "0",
    motivoclasesNatacion: $("#motivoclasesNatacion").val() || "",
    aceptaAguaCara: $("input[name='aguaEnLaCara']:checked").val() || "0",
    playaActitud: $("#playaActitud").val() || "",
    rioActitud: $("#playaActitud").val() || "",
    albercaActitud: $("#playaActitud").val() || "",
    tipoServicioAdquirido: $("#tipoServicio").val() || "",

    nombrePapa: $("#nombrePapa").val() || "",
    nacionalidadPapa: $("#nacionalidadPapa").val() || "",
    telefonoPapa: $("#telefonoPapa").val() || "",
    emailPapa: $("#emailPapa").val() || "",
    nombreMama: $("#nombreMama").val() || "",
    nacionalidadMama: $("#nacionalidadMama").val() || "",
    telefonoMama: $("#telefonoMama").val() || "",
    emailMama: $("#emailMama").val() || "",
    nombreTelefonoEmergencia: $("#nombreEmergencia").val() || "",
    personasAutorizadasRecoger: $("#personaAutorizada1").val() || "",
    tieneHermanos: $("#cantidadHermanos").val() || "",
    autorizacionApoyoAdulto:
      $("input[name='autorizaCambio']:checked").val() || "0",

    natacion_ninos_3dias_lunes: $("#natacion_ninos_3dias_lunes").val() || "",
    natacion_ninos_3dias_martes: $("#natacion_ninos_3dias_martes").val() || "",
    natacion_ninos_3dias_miercoles:
      $("#natacion_ninos_3dias_miercoles").val() || "",
    natacion_ninos_3dias_jueves: $("#natacion_ninos_3dias_jueves").val() || "",
    natacion_ninos_3dias_viernes:
      $("#natacion_ninos_3dias_viernes").val() || "",
    natacion_ninos_3dias_sabado: $("#natacion_ninos_3dias_sabado").val() || "",

    natacion_ninos_2dias_lunes: $("#natacion_ninos_2dias_lunes").val() || "",
    natacion_ninos_2dias_martes: $("#natacion_ninos_2dias_martes").val() || "",
    natacion_ninos_2dias_miercoles:
      $("#natacion_ninos_2dias_miercoles").val() || "",
    natacion_ninos_2dias_jueves: $("#natacion_ninos_2dias_jueves").val() || "",
    natacion_ninos_2dias_viernes:
      $("#natacion_ninos_2dias_viernes").val() || "",
    natacion_ninos_2dias_sabado: $("#natacion_ninos_2dias_sabado").val() || "",

    natacion_ninos_1dia_lunes: $("#natacion_ninos_1dia_lunes").val() || "",
    natacion_ninos_1dia_martes: $("#natacion_ninos_1dia_martes").val() || "",
    natacion_ninos_1dia_miercoles:
      $("#natacion_ninos_1dia_miercoles").val() || "",
    natacion_ninos_1dia_jueves: $("#natacion_ninos_1dia_jueves").val() || "",
    natacion_ninos_1dia_viernes: $("#natacion_ninos_1dia_viernes").val() || "",
    natacion_ninos_1dia_sabado: $("#natacion_ninos_1dia_sabado").val() || "",

    natacion_grupal_3dias_lunes: $("#natacion_grupal_3dias_lunes").val() || "",
    natacion_grupal_3dias_martes:
      $("#natacion_grupal_3dias_martes").val() || "",
    natacion_grupal_3dias_miercoles:
      $("#natacion_grupal_3dias_miercoles").val() || "",
    natacion_grupal_3dias_jueves:
      $("#natacion_grupal_3dias_jueves").val() || "",
    natacion_grupal_3dias_viernes:
      $("#natacion_grupal_3dias_viernes").val() || "",
    natacion_grupal_3dias_sabado:
      $("#natacion_grupal_3dias_sabado").val() || "",

    natacion_grupal_2dias_lunes: $("#natacion_grupal_2dias_lunes").val() || "",
    natacion_grupal_2dias_martes:
      $("#natacion_grupal_2dias_martes").val() || "",
    natacion_grupal_2dias_miercoles:
      $("#natacion_grupal_2dias_miercoles").val() || "",
    natacion_grupal_2dias_jueves:
      $("#natacion_grupal_2dias_jueves").val() || "",
    natacion_grupal_2dias_viernes:
      $("#natacion_grupal_2dias_viernes").val() || "",
    natacion_grupal_2dias_sabado:
      $("#natacion_grupal_2dias_sabado").val() || "",

    otro_paquete: $("#otro_paquete").val() || "",
    especificarPaquete: $("#especificarPaquete").val() || "",
    inicioPrimeraMensualidad: $("#fechaInicio").val() || "",
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
      alert("Hubo un error al agregar el Nino. Inténtalo nuevamente.");
    },
    success: function (data) {
      if (data != "") {
        var contrato = `
          <p>Nombre del alumno: ${datosNino.nombre}</p>
          <p>Edad: ${datosNino.edad}</p>
          <p>Telefono: ${datosNino.telefono}</p>
          <p>Nacionalidad: ${datosNino.nacionalidad}</p>
          <p>Fecha de nacimiento: ${datosNino.fechaDeNacimiento}</p>
          <p>Domicilio: ${datosNino.domicilio}</p>
          <p>Alergia u otros requerimiento de salud: ${
            datosNino.alergiaOtrosRequerimientos
          }</p>
          <p>Nombre y telefono de emergencia: ${
            datosNino.nombreTelefonoEmergencia
          }</p>
          <p>Antecedentes medicos: ${datosNino.antecedentesMedicos}</p>
          <p>Grupo sanguineo: ${datosNino.grupoSanguineo}</p>
          <p>¿Pose alguna enfermedad cardiologica, neurologica o de vias respiratorias? ${
            datosNino.enfermedadCardiologica === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosNino.cualEnfermedadCardiologica}</p>
          <p>¿Està con tratamiento medico? ${
            datosNino.tratamientoMedico === "1" ? "SI" : "NO"
          }</p>
          <p>Describa en que consiste: ${datosNino.cualtratamientoMedico}</p>
          <p>¿Tiene algun tipo de servicio medico privado o publico? ${
            datosNino.medicoPrivadoPublico === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosNino.cualMedicoPrivadoPublico}</p>
          <p>¿Esta dado de alta en alguna otra actividad deportiva? ${
            datosNino.otraActividadDeportiva === "1" ? "SI" : "NO"
          }</p>
          <p>¿Cuál? ${datosNino.cualOtraActividadDeportiva}</p>
          <p>¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ${
            datosNino.autorizacionFotos === "1" ? "SI" : "NO"
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
