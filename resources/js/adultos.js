$(document).ready(function () {
  mostrarAdultos();

  $("#agregarAdulto").click(function (event) {
    // Prevenir la acción predeterminada del formulario
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

function agregaAdultos() {
  var datosAdulto = {
    nombre: $("#nombre").val(),
    edad: $("#edad").val(),
    telefono: $("#telefono").val(),
    nacionalidad: $("#nacionalidad").val(),
    fechaDeNacimiento: $("#fechaNacimiento").val(),
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
    cualTratamientoMedico: $("#descripcionTratamiento").val(),
    medicoPrivadoPublico: $("input[name='medicoPrivadoPublico']:checked").val(),
    cualMedicoPrivadoPublico: $("#cualServicio").val(),
    otraActividadDeportiva: $(
      "input[name='otraActividadDeportiva']:checked"
    ).val(),
    cualOtraActividadDeportiva: $("#cualActividad").val(),
    autorizacionFotos: $("input[name='autorizacionFotos']:checked").val(),
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
    url: "resources/routes/routeAdultos.php",
    type: "POST",
    data: {
      info: datosAdulto,
      action: "agregarAdultos",
    },
    dataType: "JSON",
    beforeSend: function () {
      console.log("Enviando datos...");
    },
    error: function (error) {
      console.error("Error:", error);
      alert("Hubo un error al agregar el adulto. Inténtalo nuevamente.");
    },
    success: function (data) {
      if (data != "") {
        alert("El adulto se agregó correctamente.");
        $("#formAdulto")[0].reset(); // Resetea el formulario
      } else {
        alert("Atención: " + data.message);
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
    dataType: "JSON",
    beforeSend: function () {
      //showSpinner();
    },
    error: function (error) {
      ////console.log(error);
      //toast1("Error!", error, 8000, "error");
      //removeSpinner();
    },
    success: function (data) {
      ////console.log(data);
      //removeSpinner();

      if (data != "" && data != null) {
        var tbody = "";
        var indices = data[0].length;
        var thead =
          "<tr>" +
          "<th>NO.</th>" +
          "<th>USUARIO</th>" +
          "<th>CLAVE</th>" +
          "<th>NOMBRE</th>" +
          "<th>DOMICILIO</th>" +
          "<th>ESTADO / MUNICIPIO</th>" +
          "<th>TELÉFONO</th>" +
          "<th>ESTATUS</th>" +
          "<th>OPCIONES</th>";

        for (var i = 0; i < data.length; i++) {
          tbody +=
            '<tr data-toggle="tooltip" title="" id="row_' + data[i][0] + '">';
          for (var j = 0; j < indices; j++) {
            if (j == indices - 1) {
              if (data[i][7] == 1)
                tbody +=
                  '<td><button type="button" class="btn btn-success btn-sm">' +
                  "Activo" +
                  "</button></td>";
              else if (data[i][7] == 0)
                tbody +=
                  '<td><button type="button" class="btn btn-warning btn-sm">' +
                  "Inactivo" +
                  "</button></td>";
              else if (data[i][7] == 3)
                tbody +=
                  '<td><button type="button" class="btn btn-danger btn-sm">' +
                  "Eliminado" +
                  "</button></td>";
            } else tbody += "<td>" + data[i][j] + "</td>";
          }

          if (data[i][data[i].length - 1] == 1) {
            ////console.log(data[i][data[i].length - 1]);
            tbody +=
              "<td>" +
              '<a href="#" id="btnEdit" title="Editar" style="margin: 5px;" onclick="editClientes(' +
              data[i][0] +
              ')" style="" class="btn btn-warning ">' +
              '<i class="fas fa-edit"></i> ' +
              "</a>" +
              '<a href="#" id="btnBaja" title="Detalles"  onclick="detalles(' +
              data[i][0] +
              ')" style="" class="btn btn-primary btnSmallMargin">' +
              '<i class="fas fa-list"></i>  ' +
              "</a> " +
              '<a href="#" id="btnBaja" title="Dar de baja" onclick="darBaja(' +
              data[i][0] +
              ')" style="" class="btn btn-info btnSmallMargin">' +
              '<i class="fas fa-ban"></i> ' +
              "</a> " +
              '<a href="#" id="btnBaja" title="Eliminar"  onclick="eliminar(' +
              data[i][0] +
              ')" style="" class="btn btn-danger btnSmallMargin">' +
              '<i class="fas fa-trash"></i> ' +
              "</a>" +
              "</td>";
          } else if (data[i][data[i].length - 1] == 0) {
            tbody +=
              "<td>" +
              '<a id="btnReactivar" title="Reactivar" href="#" style="margin: 5px;" onclick="darAlta(' +
              data[i][0] +
              ')" class="btn btn-success btnReactivar">' +
              '<i class="fas fa-power-off"></i>' +
              '<a href="#" id="btnBaja" title="Eliminar" style="margin: 5px;" onclick="eliminar(' +
              data[i][0] +
              ')" style="" class="btn btn-danger ">' +
              '<i class="fas fa-trash"></i>' +
              "</a>" +
              "</td>";
          } else {
          }
        }

        $("#thead").empty();
        $("#tbody").empty();

        $("#thead").append(thead);
        $("#tbody").append(tbody);
      } else {
        $("#tbody").empty();
        //toast1("Atención!", "No hay clientes para mostrar", 8000, "error");
      }
    },
  });
}
