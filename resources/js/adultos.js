$(document).ready(function () {
  mostrarAdultos();

  $("#agregarAdulto").click(function (event) {
    event.preventDefault();
    agregaAdultos();
  });

  $("input[name='enfermedadCardiologica']").change(function () {
    if ($(this).val() === "1") {
      $("#detalleEnfermedad").show();
    } else {
      $("#detalleEnfermedad").hide();
      $("#cualEnfermedad").val(""); // Clear the value if "No" is selected
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

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("firmaUsuario");
  const clearBtn = document.getElementById("clear-btn");
  const saveBtn = document.getElementById("save-btn");
  const ctx = canvas.getContext("2d");
  let drawing = false;

  // Ajustar canvas a la pantalla y establecer tamaño adecuado
  function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
  }

  // Llamar a la función para redimensionar el canvas
  resizeCanvas();

  // Funciones de dibujo
  function startDrawing(event) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }

  function draw(event) {
    if (!drawing) return;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }

  function stopDrawing() {
    drawing = false;
  }

  // Eventos del canvas
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  // Limpiar el canvas
  clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Adaptar canvas al tamaño de la pantalla
  window.addEventListener("resize", resizeCanvas);

  saveBtn.addEventListener("click", function () {
    signatureDataURL = canvas.toDataURL(); // Captura la firma
    agregaAdultos(); // Llama a agregaAdultos con la firma
  });
});
let signatureDataURL;
function agregaAdultos($info) {
  var datosAdulto = {
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
    firmaUsuario: signatureDataURL,
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
      //alert("Hubo un error al agregar el adulto. Inténtalo nuevamente.");
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
