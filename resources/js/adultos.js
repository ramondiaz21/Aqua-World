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

const lugar = "Colima"; // Ajusta esto si el lugar cambia
const fechaRegistro = new Date().toLocaleDateString();

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
        var docDefinition = {
          header: function (currentPage, pageCount) {
            return {
              columns: [
                { text: "", width: "*" },
                {
                  image:
                    "data:image/jpeg;base64,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", // Reemplaza con tu imagen en base64 o URL
                  width: 100,
                  alignment: "right",
                  margin: [0, 10, 10, 0], // [left, top, right, bottom]
                },
              ],
            };
          },
          pageMargins: [40, 80, 40, 80],
          content: [
            {
              text: "Ficha de Inscripción",
              style: "header",
              alignment: "center",
            },
            {
              text: [
                { text: "Nombre del alumno: ", bold: true, fontSize: 13 },
                { text: `${datosAdulto.nombre}`, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              columns: [
                {
                  text: [
                    { text: "Edad: ", bold: true, fontSize: 13 },
                    { text: `${datosAdulto.edad}`, fontSize: 11 },
                  ],
                  width: "33%",
                },
                {
                  text: [
                    { text: "Teléfono: ", bold: true, fontSize: 13 },
                    { text: `${datosAdulto.telefono}`, fontSize: 11 },
                  ],
                  width: "33%",
                },
                {
                  text: [
                    { text: "Nacionalidad: ", bold: true, fontSize: 13 },
                    { text: datosAdulto.nacionalidad, fontSize: 11 },
                  ],
                  width: "33%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Fecha de nacimiento: ", bold: true, fontSize: 13 },
                { text: datosAdulto.fechaDeNacimiento, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Domicilio: ", bold: true, fontSize: 13 },
                { text: datosAdulto.domicilio, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "Alergia u otros requerimientos de salud: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: datosAdulto.alergiaOtrosRequerimientos, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              text: [
                {
                  text: "Nombre y teléfono de emergencia: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: datosAdulto.nombreTelefonoEmergencia, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              columns: [
                {
                  text: [
                    {
                      text: "Antecedentes médicos: ",
                      bold: true,
                      fontSize: 13,
                    },
                    { text: datosAdulto.antecedentesMedicos, fontSize: 11 },
                  ],
                  width: "50%",
                },
                {
                  text: [
                    { text: "Grupo sanguíneo: ", bold: true, fontSize: 13 },
                    { text: datosAdulto.grupoSanguineo, fontSize: 11 },
                  ],
                  width: "50%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Posee alguna enfermedad cardiológica, neurológica o de vías respiratorias? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text:
                    datosAdulto.enfermedadCardiologica === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: datosAdulto.cualEnfermedadCardiologica, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Está con tratamiento médico? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.tratamientoMedico === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "Describa en qué consiste: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: datosAdulto.cualtratamientoMedico, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene algún tipo de servicio médico privado o público? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.medicoPrivadoPublico === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: datosAdulto.cualMedicoPrivadoPublico, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Está dado de alta en alguna otra actividad deportiva? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text:
                    datosAdulto.otraActividadDeportiva === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: datosAdulto.cualOtraActividadDeportiva, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.autorizacionFotos === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 10],
            },
            {
              text: "¡Escriba el horario y días acordados por administración en el servicio de su interés!",
              style: "subheader",
            },
            {
              table: {
                headerRows: 1,
                widths: [120, "*", "*", "*", "*", "*", "*"],
                body: [
                  [
                    {
                      text: "MENSUALIDADES/PAQUETES",
                      bold: true,
                      fontSize: 13,
                    },
                    { text: "Lunes", bold: true, fontSize: 13 },
                    { text: "Martes", bold: true, fontSize: 13 },
                    { text: "Miércoles", bold: true, fontSize: 13 },
                    { text: "Jueves", bold: true, fontSize: 13 },
                    { text: "Viernes", bold: true, fontSize: 13 },
                    { text: "Sábado", bold: true, fontSize: 13 },
                  ],
                  [
                    { text: "Aquaerobic", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_aquaerobic_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquaerobic_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquaerobic_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquaerobic_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquaerobic_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquaerobic_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Nado libre", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_nado_libre_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_nado_libre_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_nado_libre_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_nado_libre_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_nado_libre_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_nado_libre_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Aquafitness", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_aquafitness_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquafitness_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquafitness_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquafitness_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquafitness_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquafitness_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Water Spinning", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_water_spinning_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_water_spinning_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_water_spinning_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_water_spinning_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_water_spinning_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_water_spinning_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Aquatic Pole", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_aquatic_pole_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquatic_pole_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquatic_pole_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquatic_pole_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquatic_pole_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aquatic_pole_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Rehabilitación", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_rehabilitacion_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_rehabilitacion_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_rehabilitacion_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_rehabilitacion_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_rehabilitacion_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_rehabilitacion_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Aqua Yoga", bold: true, fontSize: 13 },
                    {
                      text: datosAdulto.servicio_aqua_yoga_lunes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aqua_yoga_martes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aqua_yoga_miercoles,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aqua_yoga_jueves,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aqua_yoga_viernes,
                      fontSize: 11,
                    },
                    {
                      text: datosAdulto.servicio_aqua_yoga_sabado,
                      fontSize: 11,
                    },
                  ],
                  [
                    { text: "Otro", bold: true, fontSize: 13 },
                    {
                      text: `${datosAdulto.servicio_otro}`,
                      fontSize: 11,
                      colSpan: 6,
                    },
                    {},
                    {},
                    {},
                    {},
                    {}, // Celdas vacías para completar el colSpan
                  ],
                ],
              },
            },
            {
              text: "(Su actividad esta sujeta a algun cambio o modificacion al presentarse un inconveniente con el maestro asignado en su momento, no entran reposiciones o alargamientos de mensualidad por inasistencia voluntaria o cuestiones de clima)",
              margin: [0, 10],
            },
            {
              text: [
                { text: "Especificar paquete: ", bold: true, fontSize: 13 },
                { text: datosAdulto.especificarPaquete, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            { text: "ENCUESTA PARA VALORACIÓN DEL ADULTO", style: "subheader" },
            {
              text: [
                {
                  text: "¿Había recibido clases en el agua? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.recibirClasesEnAgua === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
                { text: " ¿Por cuánto tiempo? ", bold: true, fontSize: 13 },
                { text: datosAdulto.cualrecibirClasesEnAgua, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene alguna experiencia desagradable con el agua? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text:
                    datosAdulto.experienciaDesagradableConAgua === "1"
                      ? "Sí"
                      : "No",
                  fontSize: 11,
                },
                { text: " MOTIVO: ", bold: true, fontSize: 13 },
                {
                  text: datosAdulto.cualexperienciaDesagradableConAgua,
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene temor al agua o a nadar? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.temorAguaNadar === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
                { text: " MOTIVO: ", bold: true, fontSize: 13 },
                { text: datosAdulto.cualtemorAguaNadar, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Experiencia acuática: ", bold: true, fontSize: 13 },
                { text: datosAdulto.experienciaAcuatica, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Acepta que le caiga agua en la cara? ",
                  bold: true,
                  fontSize: 13,
                },
                {
                  text: datosAdulto.aceptaAguaCara === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Temor al agua? ", bold: true, fontSize: 13 },
                {
                  text: datosAdulto.temorAgua === "1" ? "Sí" : "No",
                  fontSize: 11,
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Qué nivel de práctica tiene nadando? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: datosAdulto.practicaNadando, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "TIPO DE SERVICIO ADQUIRIDO: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: datosAdulto.tipoServicioAdquirido, fontSize: 11 },
              ],
              margin: [0, 25, 0, 25],
            },
            { text: "DATOS ADICIONALES:", margin: [0, 10],bold:true },
            {
              columns: [
                {
                  stack: [
                    {
                      text: "________________________________",
                      margin: [0, 80, 0, 0],
                      alignment: "center",
                    },
                    {
                      text: "Firma de autorización del cliente de datos para su uso exclusivo emergente",
                      alignment: "center",
                      margin: [0, 5],
                      bold: true,
                      fontSize: 13,
                    },
                  ],
                  width: "50%",
                },
                {
                  stack: [
                    {
                      text: "________________________________",
                      margin: [0, 80, 0, 0],
                      alignment: "center",
                    },
                    {
                      text: "Sello de AquaworldClub",
                      alignment: "center",
                      margin: [0, 5],
                      bold: true,
                      fontSize: 13,
                    },
                  ],
                  width: "50%",
                },
              ],
            },
            {
              text: "CARTA DE SESIÓN DE DERECHOS DE IMAGEN / ESTUDIANTE MENOR DE EDAD",
              style: "header",
              alignment: "center",
              margin: [0, 80, 0, 10],
            },
            {
              text: [
                { text: "Lugar y fecha: ", bold: true, fontSize: 13 },
                { text: `${lugar} ${fechaRegistro}`, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              text: [
                "El/la que suscribe ",
                { text: `${datosAdulto.nombre}`, bold: false },
                ", en su calidad de padre, madre o tutor/a, autoriza a ",
                { text: "AQUAWORLDCLUB", bold: true, fontSize: 13 },
                " a realizar registro de imagen fotográfica y/o audiovisual del/la estudiante: ",
                { text: `${datosAdulto.nombre}`, bold: false },
                " con el fin de promover y difundir la cultura en los medios físicos y electrónicos que las referidas instancias consideren necesarias, en donde pueda comunicar públicamente y distribuir las imágenes para los fines que lo requieran bajo las siguientes:",
              ],
              margin: [0, 10],
            },
            {
              text: "CONSIDERACIONES",
              margin: [0, 10],
              alignment: "center",
              bold: true,
            },
            {
              text: "1. Que es una autorización para la grabación y reproducción en los medios físicos y electrónicos, páginas o sitios de internet de la escuela y del club deportivo AQUAWORLD, además de los que éstos consideren.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "2. La edición y reproducción de la imagen tendrá como fin principal la difusión de la cultura y generar un acervo de las actividades académicas y artísticas. La edición y reproducción de la imagen no tendrá fines de lucro.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "3. La escuela y la administración se hacen responsables de la difusión del material fotográfico y/o audiovisual en tanto tenga el control desde sus páginas de Internet y medios físicos y/o electrónicos. Cualquier uso indebido que se hiciera de dicho material será exclusivamente responsabilidad de quien las obre, contraviniendo los intereses de los mencionados.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "4. La escuela será propietaria de los derechos del material fotográfico y/o audiovisual producido para hacer uso de ellos exclusivamente para los fines de interés general e institucional que le es propio.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "5. La autorización no fija ningún límite de tiempo para su concesión ni para el uso del material fotográfico y/o audiovisual, o parte de este, en los que aparece el/la estudiante, por lo que la presente autorización se considera concedida por un plazo de tiempo ilimitado.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "Se autoriza el levantamiento y utilización de la imagen en los siguientes términos:",
              margin: [10, 0],
            },
            {
              text: "Levantamiento de material fotográfico y/o audiovisual",
              margin: [0, 5],
              bold: true,
            },
            { text: "Autorización", margin: [0, 0] },
            { text: "Grabación total", margin: [0, 0] },
            { text: "Para difusión y promoción", margin: [0, 0] },
            { text: "Para página web y redes sociales", margin: [0, 0] },
            { text: "Para material para archivo", margin: [0, 0] },
            { text: "Para transmisión en TV parcial o total", margin: [0, 0] },
            { text: "Para transmisión por internet en vivo", margin: [0, 0] },
            {
              text: "___________________________________________________________",
              margin: [0, 80, 0, 0],
              alignment: "center",
            },
            {
              text: "Nombre y firma del padre, madre o tutor",
              margin: [0, 0],
              bold: true,
              alignment: "center",
            },
            {
              text: "*Nuestra práctica de privacidad es coherente con la Ley Federal de Protección de Datos Personales en Posesión de Particulares.",
              margin: [0, 10],
              italics: true,
              bold: true,
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "REGLAMENTO DE CLASES DE NATACIÓN",
              style: "header",
              alignment: "center",
            },
            {
              text: "1. Presentarse a su clase con traje de baño, gorro, goggles y sandalias (no se permite ningún tipo de short o ropa interior).",
              margin: [0, 5],
            },
            {
              text: "2. Una vez iniciada la clase se dará 15 minutos de tolerancia, después de este tiempo no se permite la entrada.",
              margin: [0, 5],
            },
            {
              text: "3. Enjuagarse perfectamente antes de entrar a la alberca.",
              margin: [0, 5],
            },
            {
              text: "4. Solo se podrá hacer uso de la alberca cuando estén presentes los maestros, el alumnado debe respetar las indicaciones en todo momento.",
              margin: [0, 5],
            },
            {
              text: "5. No se permite el uso de bloqueadores, bronceadores o aceites.",
              margin: [0, 5],
            },
            {
              text: "6. Prohibido correr, decir palabras altisonantes o faltar al respeto, no escupir, ni sonarse en la alberca o en el área.",
              margin: [0, 5],
            },
            {
              text: "7. El acceso es exclusivamente para los alumnos, no se permite la entrada a personas ajenas a la clase. Podrán ingresar los padres de familia (que permanecerán en la parte alta de área de la espera).",
              margin: [0, 5],
            },
            {
              text: "8. Por seguridad de los alumnos no se permite tomar fotografía o videos durante la clase (solo a su hijo o hija).",
              margin: [0, 5],
            },
            {
              text: "9. No se permiten alimentos y bebidas a excepción de agua natural o hidratación deportiva dentro de la alberca.",
              margin: [0, 5],
            },
            {
              text: "10. Los cambios de horario o clase se hacen bajo solicitud previa (3 horas antes de la clase.) con administración.",
              margin: [0, 5],
            },
            {
              text: "11. En caso de tormenta eléctrica o de condiciones climáticas desfavorables se suspenderá la clase de dicho horario sin posibilidad de reponer. (excepto clases re-agendadas con anticipación de dos horas).",
              margin: [0, 5],
            },
            {
              text: "12. Respetar el lugar para personas con discapacidad que se encuentra en el exterior de las instalaciones de la alberca.",
              margin: [0, 5],
            },
            {
              text: "13. No obstruir salidas, entradas, escaleras y rampa de acceso de las instalaciones.",
              margin: [0, 5],
            },
            {
              text: "14. Está prohibido cambiar a los niños o adultos al aire libre (sala de espera, ludoteca, cafetería, laterales de alberca o entrada principal) por respeto a todos nuestros usuarios.",
              margin: [0, 5],
            },
            {
              text: "15. No mover la silla de su lugar (sala de espera).",
              margin: [0, 5],
            },
            {
              text: "16. Mantenerse en la sala de espera, hasta que la clase de su hijo(a) termine.",
              margin: [0, 5],
            },
            { text: "17. Llegar 5 minutos antes de la clase.", margin: [0, 5] },
            {
              text: "18. Aquaworld no es responsable por objetos olvidados.",
              margin: [0, 5],
            },
            {
              text: "19. Solo se dará una clase de tolerancia para realizar el pago de la nueva mensualidad, de lo contrario se dará de baja al alumno en automático.",
              margin: [0, 5],
            },
            {
              text: "20. Se aplicará una multa por los siguientes percances en la alberca:",
              margin: [0, 5],
            },
            { text: "a. Vómito $300.", margin: [30, 5, 0, 0] },
            {
              text: "b. Defecación $1,500 (podría evitarlo colocándolo con pañal de agua) ya que se hace un choque clorhídrico para la limpieza profunda de la alberca y se suspenderían las clases restantes.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "Si presenta síntomas de diarrea o vómito, preferible no acudir a clases.",
              margin: [0, 5],
            },
            {
              text: "21. En caso de bebés, portar pañal de agua para la alberca.",
              margin: [0, 5],
            },
            {
              text: "22. En caso de retirarse, deberá llegar 5 minutos antes para cambiar a sus pequeños.",
              margin: [0, 5],
            },
            {
              text: "23. Toda persona que no tiene maestro personalizado o grupal e ingresa a la alberca, es responsabilidad del adulto mayor. La administración no se hace responsable de accidentes o lesiones.",
              margin: [0, 5],
            },
            {
              text: "24. Aquaworld es una empresa pet friendly, por lo cual se permiten mascotas amigables bajo los siguientes lineamientos:",
              margin: [0, 5],
            },
            {
              text: "a. Traer su bolsita para el excremento, su papel o toalla para el pipí.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "b. No se le permite ingresar a la alberca a la mascota (de hacerlo, se cobrará multa de $300 pesos).",
              margin: [30, 5, 0, 0],
            },
            {
              text: "c. En caso de morder o lastimar a alguno de nuestros socios, se hará responsable de los gastos médicos de la persona lesionada y de alguna indemnización que pida el socio activo. Aquaworld se deslinda de la responsabilidad.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "25. Está prohibido correr o aventarse clavados sin autorización de un docente.",
              margin: [0, 5],
            },
            {
              text: "26. Una vez adquirido cualquier servicio no hay reembolsos de ningún tipo.",
              margin: [0, 5],
            },
            {
              text: "27. Los adultos deberán presentar comprobante médico para el ingreso a la alberca.",
              margin: [0, 5],
            },
            {
              text: "28. El servicio “clase personalizada” (no aplica en grupal) tiene los siguientes beneficios:",
              margin: [0, 5],
            },
            {
              text: "a. Derecho a faltar 3 veces por mensualidad sin un justificante médico; con justificante médico tiene derecho a faltar las veces que lo indique el médico pero deberá mandar la receta médica para justificar todas las faltas. De no mandarla, solo se justificarán 3 faltas de las cuales tiene derecho.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "b. Sus clases de reposición se mandarán a agenda de reposiciones, la cual será adicional a sus días asegurados de su semana (no se alarga su mensualidad). Deberá consultar disponibilidad de agenda para su clase de repuesto; esta no se asegura con su mismo maestro ni con su mismo horario ya que es a disposición (lea el inciso a).",
              margin: [30, 5, 0, 0],
            },
            {
              text: "Este reglamento es para su seguridad, higiene y salud, así como para el mantenimiento adecuado del área. Solicitamos su apoyo cumpliendo cada uno de los puntos.",
              margin: [20, 5, 0, 0],
              bold: true,
              italics: true,
            },
            {
              text: "___________________________________________________________",
              margin: [0, 80, 0, 0],
              alignment: "center",
            },
            {
              text: "Nombre y firma de conformidad",
              bold: true,
              margin: [0, 10],
              alignment: "center",
            },
          ],
          styles: {
            defaultText: {
              fontSize: 13,
            },
            header: {
              fontSize: 25,
              bold: true,
              margin: [0, 10],
            },
            subheader: {
              fontSize: 14,
              bold: true,
              margin: [0, 5],
            },
          },
        };

        applyFontSizeToTextElements(docDefinition.content, 13);
        pdfMake
          .createPdf(docDefinition)
          .download("contrato " + datosAdulto.nombre + ".pdf");

        // $("#modalBody").html(contrato);
        // $("#contratoModal").modal("show");
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

function applyFontSizeToTextElements(content, defaultFontSize) {
  if (Array.isArray(content)) {
    content.forEach((item) =>
      applyFontSizeToTextElements(item, defaultFontSize)
    );
  } else if (typeof content === "object") {
    if (content.text) {
      // Aplicar el tamaño de fuente si el elemento tiene 'text' y no tiene un tamaño de fuente definido
      if (Array.isArray(content.text)) {
        content.text.forEach((textItem) => {
          if (typeof textItem === "object" && textItem.text) {
            if (!textItem.fontSize) {
              // Solo aplicar si no tiene tamaño de fuente definido
              textItem.fontSize = defaultFontSize;
            }
          }
        });
      } else {
        if (!content.fontSize) {
          // Solo aplicar si no tiene tamaño de fuente definido
          content.fontSize = defaultFontSize;
        }
      }
    }
    // Recorrer propiedades anidadas que puedan contener más contenido
    Object.keys(content).forEach((key) => {
      if (typeof content[key] === "object") {
        applyFontSizeToTextElements(content[key], defaultFontSize);
      }
    });
  }
}

function mostrarAdultos() {
  $.ajax({
    url: "resources/routes/routeAdultos.php",
    type: "POST",
    data: { action: "mostrarTabla" },
    dataType: "json",
    success: function (data) {
      console.log(data); // Verificar la estructura de los datos

      if (Array.isArray(data) && data.length > 0) {
        var tbody = "";
        var thead =
          "<tr>" +
          "<th>NOMBRE</th>" +
          "<th>EDAD</th>" +
          "<th>TELEFONO</th>" +
          "<th>FECHA DE NACIMIENTO</th>" +
          "<th>DOMICILIO</th>" +
          "<th>CONTACTO DE EMERGENCIA</th>" +
          "<th>OPCIONES</th></tr>";

        data.forEach(function (registro, i) {
          tbody +=
            '<tr data-toggle="tooltip" title="" id="row_' + registro[0] + '">';
          tbody += "<td>" + (registro[1] || "") + "</td>";
          tbody += "<td>" + (registro[2] || "") + "</td>";
          tbody += "<td>" + (registro[3] || "") + "</td>";
          tbody += "<td>" + (registro[4] || "") + "</td>";
          tbody += "<td>" + (registro[5] || "") + "</td>";
          tbody += "<td>" + (registro[6] || "") + "</td>";
          tbody +=
            "<td>" +
            '<button type="button" class="btn btn-primary btn-sm" onclick="generarPDF(' +
            i +
            ')">' +
            "Generar PDF" +
            "</button>" +
            "</td>";
          tbody += "</tr>";
        });

        $("#thead").empty().append(thead);
        $("#tbody").empty().append(tbody);
      } else {
        $("#tbody").empty();
        //alert("No se encontraron registros.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", status, error);
      $("#tbody").text("Error al cargar los datos.");
    },
  });
}

function generarPDF(index) {
  $.ajax({
    url: "resources/routes/routeAdultos.php",
    type: "POST",
    data: { action: "mostrarAdultos" },
    dataType: "json",
    success: function (data) {
      if (Array.isArray(data) && data.length > 0) {
        var registro = data[index];
        console.log(registro); // Verificar la estructura del registro

        var docDefinition = {
          header: function (currentPage, pageCount) {
            return {
              columns: [
                { text: "", width: "*" },
                {
                  image:
                    "data:image/jpeg;base64,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", // Reemplaza con tu imagen en base64 o URL
                  width: 100,
                  alignment: "right",
                  margin: [0, 10, 10, 0], // [left, top, right, bottom]
                },
              ],
            };
          },
          pageMargins: [40, 80, 40, 80],
          content: [
            {
              text: "Ficha de Inscripción",
              style: "header",
              alignment: "center",
            },
            {
              text: [
                { text: "Nombre del alumno: ", bold: true, fontSize: 13 }, // Texto con tamaño 13px y negrita
                { text: `${registro[1]}`, fontSize: 11 }, // Variable con tamaño 11px
              ],
              margin: [0, 10], // Margen superior e inferior
            },
            {
              columns: [
                {
                  text: [
                    { text: "Edad: ", bold: true, fontSize: 13 },
                    { text: `${registro[2]}`, fontSize: 11 },
                  ],
                  width: "33%",
                },
                {
                  text: [
                    { text: "Teléfono: ", bold: true, fontSize: 13 },
                    { text: `${registro[3]}`, fontSize: 11 },
                  ],
                  width: "33%",
                },
                {
                  text: [
                    { text: "Nacionalidad: ", bold: true, fontSize: 13 },
                    { text: `${registro[4]}`, fontSize: 11 },
                  ],
                  width: "33%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Fecha de nacimiento: ", bold: true, fontSize: 13 },
                { text: `${registro[5]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Domicilio: ", bold: true, fontSize: 13 },
                { text: `${registro[6]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "Alergia u otros requerimientos de salud: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[7]}`, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              text: [
                {
                  text: "Nombre y teléfono de emergencia: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[8]}`, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              columns: [
                {
                  text: [
                    {
                      text: "Antecedentes médicos: ",
                      bold: true,
                      fontSize: 13,
                    },
                    { text: `${registro[9]}`, fontSize: 11 },
                  ],
                  width: "50%",
                },
                {
                  text: [
                    { text: "Grupo sanguíneo: ", bold: true, fontSize: 13 },
                    { text: `${registro[10]}`, fontSize: 11 },
                  ],
                  width: "50%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Posee alguna enfermedad cardiológica, neurológica o de vías respiratorias? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[11] === "1" ? "Sí" : "No"}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: `${registro[12]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Está con tratamiento médico? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[13] === "1" ? "Sí" : "No"}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "Describa en qué consiste: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[14]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene algún tipo de servicio médico privado o público? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[15] === "1" ? "Sí" : "No"}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: `${registro[16]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Está dado de alta en alguna otra actividad deportiva? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[17] === "1" ? "Sí" : "No"}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Cuál? ", bold: true, fontSize: 13 },
                { text: `${registro[18]}`, fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: `${registro[19] === "1" ? "Sí" : "No"}`, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              text: "¡Escriba el horario y días acordados por administración en el servicio de su interés!",
              style: "subheader",
            },
            {
              table: {
                headerRows: 1,
                widths: [120, "*", "*", "*", "*", "*", "*"],
                body: [
                  [
                    { text: "MENSUALIDADES/PAQUETES", bold: true, fontSize: 13 },
                    { text: "Lunes", bold: true, fontSize: 13 },
                    { text: "Martes", bold: true, fontSize: 13 },
                    { text: "Miércoles", bold: true, fontSize: 13 },
                    { text: "Jueves", bold: true, fontSize: 13 },
                    { text: "Viernes", bold: true, fontSize: 13 },
                    { text: "Sábado", bold: true, fontSize: 13 }
                  ],
                  [
                    { text: "Aquaerobic", fontSize: 11 },
                    { text: registro[20], fontSize: 11 },
                    { text: registro[21], fontSize: 11 },
                    { text: registro[22], fontSize: 11 },
                    { text: registro[23], fontSize: 11 },
                    { text: registro[24], fontSize: 11 },
                    { text: registro[25], fontSize: 11 }
                  ],
                  [
                    { text: "Nado libre", fontSize: 11 },
                    { text: registro[26], fontSize: 11 },
                    { text: registro[27], fontSize: 11 },
                    { text: registro[28], fontSize: 11 },
                    { text: registro[29], fontSize: 11 },
                    { text: registro[30], fontSize: 11 },
                    { text: registro[31], fontSize: 11 }
                  ],
                  [
                    { text: "Aquafitness", fontSize: 11 },
                    { text: registro[32], fontSize: 11 },
                    { text: registro[33], fontSize: 11 },
                    { text: registro[34], fontSize: 11 },
                    { text: registro[35], fontSize: 11 },
                    { text: registro[36], fontSize: 11 },
                    { text: registro[37], fontSize: 11 }
                  ],
                  [
                    { text: "Water Spinning", fontSize: 11 },
                    { text: registro[38], fontSize: 11 },
                    { text: registro[39], fontSize: 11 },
                    { text: registro[40], fontSize: 11 },
                    { text: registro[41], fontSize: 11 },
                    { text: registro[42], fontSize: 11 },
                    { text: registro[43], fontSize: 11 }
                  ],
                  [
                    { text: "Aquatic Pole", fontSize: 11 },
                    { text: registro[44], fontSize: 11 },
                    { text: registro[45], fontSize: 11 },
                    { text: registro[46], fontSize: 11 },
                    { text: registro[47], fontSize: 11 },
                    { text: registro[48], fontSize: 11 },
                    { text: registro[49], fontSize: 11 }
                  ],
                  [
                    { text: "Rehabilitación", fontSize: 11 },
                    { text: registro[50], fontSize: 11 },
                    { text: registro[51], fontSize: 11 },
                    { text: registro[52], fontSize: 11 },
                    { text: registro[53], fontSize: 11 },
                    { text: registro[54], fontSize: 11 },
                    { text: registro[55], fontSize: 11 }
                  ],
                  [
                    { text: "Aqua Yoga", fontSize: 11 },
                    { text: registro[56], fontSize: 11 },
                    { text: registro[57], fontSize: 11 },
                    { text: registro[58], fontSize: 11 },
                    { text: registro[59], fontSize: 11 },
                    { text: registro[60], fontSize: 11 },
                    { text: registro[61], fontSize: 11 }
                  ],
                  [
                    { text: "Otro", fontSize: 13 },
                    { text: registro[62], fontSize: 11, colSpan: 6 },
                    {}, {}, {}, {}, {}, // Celdas vacías para completar el colSpan
                  ],
                ]
              }
            }
            ,
            {
              text: "(Su actividad esta sujeta a algun cambio o modificacion al presentarse un inconveniente con el maestro asignado en su momento, no entran reposiciones o alargamientos de mensualidad por inasistencia voluntaria o cuestiones de clima)",
              margin: [0, 10],
            },
            {
              text: [
                { text: "Especificar paquete: ", bold: true, fontSize: 13 },
                { text: registro[63], fontSize: 11 },
              ],
              margin: [0, 10],
            },
            { text: "ENCUESTA PARA VALORACIÓN DEL ADULTO", style: "subheader" },
            {
              text: [
                {
                  text: "¿Había recibido clases en el agua? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[64] === "1" ? "Sí" : "No", fontSize: 11 },
                { text: " ¿Por cuánto tiempo? ", bold: true, fontSize: 13 },
                { text: registro[65], fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene alguna experiencia desagradable con el agua? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[66] === "1" ? "Sí" : "No", fontSize: 11 },
                { text: " MOTIVO: ", bold: true, fontSize: 13 },
                { text: registro[67], fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Tiene temor al agua o a nadar? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[68] === "1" ? "Sí" : "No", fontSize: 11 },
                { text: " MOTIVO: ", bold: true, fontSize: 13 },
                { text: registro[69], fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "Experiencia acuática: ", bold: true, fontSize: 13 },
                { text: registro[70], fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Acepta que le caiga agua en la cara? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[71] === "1" ? "Sí" : "No", fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                { text: "¿Temor al agua? ", bold: true, fontSize: 13 },
                { text: registro[72] === "1" ? "Sí" : "No", fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "¿Qué nivel de práctica tiene nadando? ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[73], fontSize: 11 },
              ],
              margin: [0, 5],
            },
            {
              text: [
                {
                  text: "TIPO DE SERVICIO ADQUIRIDO: ",
                  bold: true,
                  fontSize: 13,
                },
                { text: registro[74], fontSize: 11 },
              ],
              margin: [0, 25, 0, 25],
            },
            { text: "DATOS ADICIONALES:", margin: [0, 10],bold:true },
            {
              columns: [
                {
                  stack: [
                    {
                      text: "________________________________",
                      margin: [0, 80, 0, 0],
                      alignment: "center",
                    },
                    {
                      text: "Firma de autorización del cliente de datos para su uso exclusivo emergente",
                      alignment: "center",
                      bold: true,
                      margin: [0, 5],
                    },
                  ],
                  width: "50%",
                },
                {
                  stack: [
                    {
                      text: "________________________________",
                      margin: [0, 80, 0, 0],
                      alignment: "center",
                    },
                    {
                      text: "Sello de AquaworldClub",
                      alignment: "center",
                      bold: true,
                      margin: [0, 5],
                    },
                  ],
                  width: "50%",
                },
              ],
            },
            {
              text: "CARTA DE SESIÓN DE DERECHOS DE IMAGEN / ESTUDIANTE MENOR DE EDAD",
              style: "header",
              alignment: "center",
              margin: [0, 80, 0, 10],
            },
            {
              text: [
                { text: "Lugar y fecha: ", bold: true, fontSize: 13 },
                { text: lugar, fontSize: 11 },
                { text: " ", fontSize: 11 }, // Espacio entre la variable y la siguiente
                { text: fechaRegistro, fontSize: 11 },
              ],
              margin: [0, 10],
            },
            {
              text: [
                { text: "El/la que suscribe ", fontSize: 13 },
                { text: registro[1], fontSize: 11, bold: false },
                {
                  text: ", en su calidad de padre, madre o tutor/a, autoriza a ",
                  fontSize: 13,
                },
                { text: "AQUAWORLDCLUB", fontSize: 13, bold: true },
                {
                  text: " a realizar registro de imagen fotográfica y/o audiovisual del/la estudiante: ",
                  fontSize: 13,
                },
                { text: registro[1], fontSize: 11, bold: false },
                {
                  text: " con el fin de promover y difundir la cultura en los medios físicos y electrónicos que las referidas instancias consideren necesarias, en donde pueda aparecer de forma individual, en grupo o en situaciones recreativas y pedagógicas, autorizando así mismo a reproducir y difundir el material.",
                  fontSize: 13,
                },
              ],
              margin: [0, 10],
            },
            {
              text: "CONSIDERACIONES",
              margin: [0, 10],
              alignment: "center",
              bold: true,
            },
            {
              text: "1. Que es una autorización para la grabación y reproducción en los medios físicos y electrónicos, páginas o sitios de internet de la escuela y del club deportivo AQUAWORLD, además de los que éstos consideren.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "2. La edición y reproducción de la imagen tendrá como fin principal la difusión de la cultura y generar un acervo de las actividades académicas y artísticas. La edición y reproducción de la imagen no tendrá fines de lucro.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "3. La escuela y la administración se hacen responsables de la difusión del material fotográfico y/o audiovisual en tanto tenga el control desde sus páginas de Internet y medios físicos y/o electrónicos. Cualquier uso indebido que se hiciera de dicho material será exclusivamente responsabilidad de quien las obre, contraviniendo los intereses de los mencionados.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "4. La escuela será propietaria de los derechos del material fotográfico y/o audiovisual producido para hacer uso de ellos exclusivamente para los fines de interés general e institucional que le es propio.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "5. La autorización no fija ningún límite de tiempo para su concesión ni para el uso del material fotográfico y/o audiovisual, o parte de este, en los que aparece el/la estudiante, por lo que la presente autorización se considera concedida por un plazo de tiempo ilimitado.",
              margin: [20, 0, 5, 0],
            },
            {
              text: "Se autoriza el levantamiento y utilización de la imagen en los siguientes términos:",
              margin: [10, 0],
            },
            {
              text: "Levantamiento de material fotográfico y/o audiovisual",
              margin: [0, 5],
              bold: true,
            },
            { text: "Autorización", margin: [0, 0] },
            { text: "Grabación total", margin: [0, 0] },
            { text: "Para difusión y promoción", margin: [0, 0] },
            { text: "Para página web y redes sociales", margin: [0, 0] },
            { text: "Para material para archivo", margin: [0, 0] },
            { text: "Para transmisión en TV parcial o total", margin: [0, 0] },
            { text: "Para transmisión por internet en vivo", margin: [0, 0] },
            {
              text: "___________________________________________________________",
              margin: [0, 80, 0, 0],
              alignment: "center",
            },
            {
              text: "Nombre y firma del padre, madre o tutor",
              bold: true,
              margin: [0, 0],
              alignment: "center",
            },
            {
              text: "*Nuestra práctica de privacidad es coherente con la Ley Federal de Protección de Datos Personales en Posesión de Particulares.",
              margin: [0, 10],
              italics: true,
              bold: true,
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "REGLAMENTO DE CLASES DE NATACIÓN",
              style: "header",
              alignment: "center",
            },
            {
              text: "1. Presentarse a su clase con traje de baño, gorro, goggles y sandalias (no se permite ningún tipo de short o ropa interior).",
              margin: [0, 5],
            },
            {
              text: "2. Una vez iniciada la clase se dará 15 minutos de tolerancia, después de este tiempo no se permite la entrada.",
              margin: [0, 5],
            },
            {
              text: "3. Enjuagarse perfectamente antes de entrar a la alberca.",
              margin: [0, 5],
            },
            {
              text: "4. Solo se podrá hacer uso de la alberca cuando estén presentes los maestros, el alumnado debe respetar las indicaciones en todo momento.",
              margin: [0, 5],
            },
            {
              text: "5. No se permite el uso de bloqueadores, bronceadores o aceites.",
              margin: [0, 5],
            },
            {
              text: "6. Prohibido correr, decir palabras altisonantes o faltar al respeto, no escupir, ni sonarse en la alberca o en el área.",
              margin: [0, 5],
            },
            {
              text: "7. El acceso es exclusivamente para los alumnos, no se permite la entrada a personas ajenas a la clase. Podrán ingresar los padres de familia (que permanecerán en la parte alta de área de la espera).",
              margin: [0, 5],
            },
            {
              text: "8. Por seguridad de los alumnos no se permite tomar fotografía o videos durante la clase (solo a su hijo o hija).",
              margin: [0, 5],
            },
            {
              text: "9. No se permiten alimentos y bebidas a excepción de agua natural o hidratación deportiva dentro de la alberca.",
              margin: [0, 5],
            },
            {
              text: "10. Los cambios de horario o clase se hacen bajo solicitud previa (3 horas antes de la clase.) con administración.",
              margin: [0, 5],
            },
            {
              text: "11. En caso de tormenta eléctrica o de condiciones climáticas desfavorables se suspenderá la clase de dicho horario sin posibilidad de reponer. (excepto clases re-agendadas con anticipación de dos horas).",
              margin: [0, 5],
            },
            {
              text: "12. Respetar el lugar para personas con discapacidad que se encuentra en el exterior de las instalaciones de la alberca.",
              margin: [0, 5],
            },
            {
              text: "13. No obstruir salidas, entradas, escaleras y rampa de acceso de las instalaciones.",
              margin: [0, 5],
            },
            {
              text: "14. Está prohibido cambiar a los niños o adultos al aire libre (sala de espera, ludoteca, cafetería, laterales de alberca o entrada principal) por respeto a todos nuestros usuarios.",
              margin: [0, 5],
            },
            {
              text: "15. No mover la silla de su lugar (sala de espera).",
              margin: [0, 5],
            },
            {
              text: "16. Mantenerse en la sala de espera, hasta que la clase de su hijo(a) termine.",
              margin: [0, 5],
            },
            { text: "17. Llegar 5 minutos antes de la clase.", margin: [0, 5] },
            {
              text: "18. Aquaworld no es responsable por objetos olvidados.",
              margin: [0, 5],
            },
            {
              text: "19. Solo se dará una clase de tolerancia para realizar el pago de la nueva mensualidad, de lo contrario se dará de baja al alumno en automático.",
              margin: [0, 5],
            },
            {
              text: "20. Se aplicará una multa por los siguientes percances en la alberca:",
              margin: [0, 5],
            },
            { text: "a. Vómito $300.", margin: [30, 5, 0, 0] },
            {
              text: "b. Defecación $1,500 (podría evitarlo colocándolo con pañal de agua) ya que se hace un choque clorhídrico para la limpieza profunda de la alberca y se suspenderían las clases restantes.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "Si presenta síntomas de diarrea o vómito, preferible no acudir a clases.",
              margin: [0, 5],
            },
            {
              text: "21. En caso de bebés, portar pañal de agua para la alberca.",
              margin: [0, 5],
            },
            {
              text: "22. En caso de retirarse, deberá llegar 5 minutos antes para cambiar a sus pequeños.",
              margin: [0, 5],
            },
            {
              text: "23. Toda persona que no tiene maestro personalizado o grupal e ingresa a la alberca, es responsabilidad del adulto mayor. La administración no se hace responsable de accidentes o lesiones.",
              margin: [0, 5],
            },
            {
              text: "24. Aquaworld es una empresa pet friendly, por lo cual se permiten mascotas amigables bajo los siguientes lineamientos:",
              margin: [0, 5],
            },
            {
              text: "a. Traer su bolsita para el excremento, su papel o toalla para el pipí.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "b. No se le permite ingresar a la alberca a la mascota (de hacerlo, se cobrará multa de $300 pesos).",
              margin: [30, 5, 0, 0],
            },
            {
              text: "c. En caso de morder o lastimar a alguno de nuestros socios, se hará responsable de los gastos médicos de la persona lesionada y de alguna indemnización que pida el socio activo. Aquaworld se deslinda de la responsabilidad.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "25. Está prohibido correr o aventarse clavados sin autorización de un docente.",
              margin: [0, 5],
            },
            {
              text: "26. Una vez adquirido cualquier servicio no hay reembolsos de ningún tipo.",
              margin: [0, 5],
            },
            {
              text: "27. Los adultos deberán presentar comprobante médico para el ingreso a la alberca.",
              margin: [0, 5],
            },
            {
              text: "28. El servicio “clase personalizada” (no aplica en grupal) tiene los siguientes beneficios:",
              margin: [0, 5],
            },
            {
              text: "a. Derecho a faltar 3 veces por mensualidad sin un justificante médico; con justificante médico tiene derecho a faltar las veces que lo indique el médico pero deberá mandar la receta médica para justificar todas las faltas. De no mandarla, solo se justificarán 3 faltas de las cuales tiene derecho.",
              margin: [30, 5, 0, 0],
            },
            {
              text: "b. Sus clases de reposición se mandarán a agenda de reposiciones, la cual será adicional a sus días asegurados de su semana (no se alarga su mensualidad). Deberá consultar disponibilidad de agenda para su clase de repuesto; esta no se asegura con su mismo maestro ni con su mismo horario ya que es a disposición (lea el inciso a).",
              margin: [30, 5, 0, 0],
            },
            {
              text: "Este reglamento es para su seguridad, higiene y salud, así como para el mantenimiento adecuado del área. Solicitamos su apoyo cumpliendo cada uno de los puntos.",
              margin: [20, 5, 0, 0],
              bold: true,
              italics: true,
            },
            {
              text: "___________________________________________________________",
              margin: [0, 80, 0, 0],
              alignment: "center",
            },
            {
              text: "Nombre y firma de conformidad",
              bold: true,
              margin: [0, 10],
              alignment: "center",
            },
          ],
          styles: {
            defaultText: {
              fontSize: 13,
            },
            header: {
              fontSize: 25,
              bold: true,
              margin: [0, 10],
            },
            subheader: {
              fontSize: 14,
              bold: true,
              margin: [0, 5],
            },
          },
        };

        applyFontSizeToTextElements(docDefinition.content, 13);

        pdfMake
          .createPdf(docDefinition)
          .download("contrato " + registro[1] + ".pdf");
      } else {
        console.error("No se encontraron registros.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", status, error);
    },
  });
}
