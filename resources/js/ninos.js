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
        var docDefinition = {
          // header: function (currentPage, pageCount) {
          //   return {
          //     columns: [
          //       { text: "", width: "*" },
          //       {
          //         width: 100,
          //         alignment: "right",
          //         margin: [0, 10, 10, 0], // [left, top, right, bottom]
          //       },
          //     ],
          //   };
          // },
          pageMargins: [40, 80, 40, 80],
          content: [
            {
              text: "Ficha de Inscripción",
              style: "header",
              alignment: "center",
            },
            {
              text: `Nombre del alumno: ${datosNino.nombre}`,
              margin: [0, 10],
            },
            {
              columns: [
                {
                  text: `Fecha de nacimiento: ${datosNino.fechaDeNacimiento}`,
                  width: "80%",
                },
                { text: `Edad: ${datosNino.edad}`, width: "20%" },
              ],
              margin: [0, 5],
            },
            {
              text: `Domicilio: ${datosNino.domicilio}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Escuela de procedencia: ${datosNino.escuelaProcedencia}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              columns: [
                { text: `Escolaridad: ${datosNino.escolaridad}`, width: "33%" },
                { text: `Grado: ${datosNino.grado}`, width: "33%" },
                {
                  text: `Tipo de sangre: ${datosNino.tipoSangre}`,
                  width: "33%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: `Alergias u otros requerimientos de salud: ${datosNino.alergiasOtrosRequerimientos}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Recomendaciones especiales para el cuidado del niño: ${datosNino.recomendacionesEspeciales}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              columns: [
                {
                  text: `Antecedentes médicos: ${datosNino.antecedentesMedicos}`,
                  width: "80%",
                },
                {
                  text: `Grupo sanguíneo: ${datosNino.grupoSanguineo}`,
                  width: "20%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: `¿Pose alguna enfermedad cardiológica, neurológica o de vías respiratorias? ${
                datosNino.enfermedadCardiologica === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Cuál? ${datosNino.cualEnfermedadCardiologica}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Está con tratamiento médico? ${
                datosNino.tratamientoMedico === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Describa en qué consiste: ${datosNino.descripcionTratamientoMedico}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Tiene algún tipo de servicio médico privado o público? ${
                datosNino.servicioMedico === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Cuál? ${datosNino.cualServicioMedico}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Está dado de alta en alguna otra actividad deportiva? ${
                datosNino.altaActividadDeportiva === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Cuál? ${datosNino.cualActividadDeportiva}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ${
                datosNino.autorizacionFotos === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Tipo de programa de inicio: ${datosNino.tipoProgramaInicio}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Había recibido clases en el agua?: ${
                datosNino.experienciaClasesAgua === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Por cuánto 
tiempo?: ${datosNino.tiempoExperienciaClasesAgua}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Tiene alguna experiencia desagradable con el agua?: ${datosNino.experienciaDesagradableAgua}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Motivo: ${datosNino.motivoExperienciaDesagradableAgua}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Tiene temor al agua o a nadar?: ${
                datosNino.temorAguaNadar === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Motivo: ${datosNino.motivoTemorAguaNadar}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Qué nivel de práctica tiene nadando?: ${datosNino.nivelPracticaNino}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Había recibido clases de natación?: ${
                datosNino.tiempoClasesNatacion === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Por cuánto tiempo?: ${datosNino.motivoclasesNatacion}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Acepta que le caiga agua en la cara?: ${
                datosNino.aceptaAguaCara === "1" ? "SI" : "NO"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              columns: [
                {
                  text: `Actitud en la playa: ${datosNino.playaActitud}`,
                  width: "33%",
                },
                {
                  text: `Actitud en el río: ${datosNino.rioActitud}`,
                  width: "33%",
                },
                {
                  text: `Actitud en la alberca: ${datosNino.albercaActitud}`,
                  width: "33%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: `TIPO DE SERVICIO ADQUIRIDO: ${datosNino.tipoServicioAdquirido}`,
              margin: [0, 25, 0, 25],
            },
            { text: "DATOS ADICIONALES:", margin: [0, 10] },
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
                      text: `Firma de autorización del cliente de datos para su uso exclusivo emergente`,
                      alignment: "center",
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
                      text: `Sello de AquaworldClub`,
                      alignment: "center",
                      margin: [0, 5],
                    },
                  ],
                  width: "50%",
                },
              ],
            },
            {
              text: "Información de papá",
              margin: [15, 20, 0, 5],
              bold: true,
              decoration: "underline",
              style: "subheader",
            },
            {
              columns: [
                {
                  text: `Nombre: ${datosNino.nombrePapa}`,
                  width: "60%",
                },
                {
                  text: `Nacionalidad: ${datosNino.nacionalidadPapa}`,
                  width: "40%",
                },
              ],
              margin: [0, 5],
            },
            {
              columns: [
                {
                  text: `Teléfono: ${datosNino.telefonoPapa}`,
                  width: "50%",
                },
                {
                  text: `Email: ${datosNino.emailPapa}`,
                  width: "50%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: "Información de mamá",
              margin: [15, 20, 0, 5],
              bold: true,
              decoration: "underline",
              style: "subheader",
            },
            {
              columns: [
                {
                  text: `Nombre: ${datosNino.nombreMama}`,
                  width: "60%",
                },
                {
                  text: `Nacionalidad: ${datosNino.nacionalidadMama}`,
                  width: "40%",
                },
              ],
              margin: [0, 5],
            },
            {
              columns: [
                {
                  text: `Teléfono: ${datosNino.telefonoMama}`,
                  width: "50%",
                },
                {
                  text: `Email: ${datosNino.emailMama}`,
                  width: "50%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: `Nombre y teléfono de emergencia: ${datosNino.nombreTelefonoEmergencia}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Personas autorizadas para recoger al niño: ${datosNino.personasAutorizadasRecoger}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Tiene hermanos?¿Cuántos?: ${datosNino.tieneHermanos}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Autoriza que en un momento dado que no se encuentre presente el tutor o encargado del menor, pueda apoyar al menor de edad a cambiarlo un adulto de su mismo sexo perteneciente al club 
aquaworld?: ${datosNino.autorizacionApoyoAdulto === "1" ? "SI" : "NO"}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: "Inscripción a mensualidad",
              margin: [15, 15, 0, 20],
              bold: true,
              decoration: "underline",
              style: "subheader",
            },
            {
              text: `(Escribir el horario en los días acordados por administración y padres)`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              table: {
                headerRows: 1,
                widths: [120, "*", "*", "*", "*", "*", "*"],
                body: [
                  [
                    "MENSUALIDADES/PAQUETES",
                    "Lunes",
                    "Martes",
                    "Miércoles",
                    "Jueves",
                    "Viernes",
                    "Sábado",
                  ],
                  [
                    "Natación niños 3 días",
                    datosNino.natacion_ninos_3dias_lunes,
                    datosNino.natacion_ninos_3dias_martes,
                    datosNino.natacion_ninos_3dias_miercoles,
                    datosNino.natacion_ninos_3dias_jueves,
                    datosNino.natacion_ninos_3dias_viernes,
                    datosNino.natacion_ninos_3dias_sabado,
                  ],
                  [
                    "Natación niños 2 días",
                    datosNino.natacion_ninos_2dias_lunes,
                    datosNino.natacion_ninos_2dias_martes,
                    datosNino.natacion_ninos_2dias_miercoles,
                    datosNino.natacion_ninos_2dias_jueves,
                    datosNino.natacion_ninos_2dias_viernes,
                    datosNino.natacion_ninos_2dias_sabado,
                  ],
                  [
                    "Natación niños 1 día",
                    datosNino.natacion_ninos_1dia_lunes,
                    datosNino.natacion_ninos_1dia_martes,
                    datosNino.natacion_ninos_1dia_miercoles,
                    datosNino.natacion_ninos_1dia_jueves,
                    datosNino.natacion_ninos_1dia_viernes,
                    datosNino.natacion_ninos_1dia_sabado,
                  ],
                  [
                    "Natación niños grupal 3 días",
                    datosNino.natacion_grupal_3dias_lunes,
                    datosNino.natacion_grupal_3dias_martes,
                    datosNino.natacion_grupal_3dias_miercoles,
                    datosNino.natacion_grupal_3dias_jueves,
                    datosNino.natacion_grupal_3dias_viernes,
                    datosNino.natacion_grupal_3dias_sabado,
                  ],
                  [
                    "Natación niños grupal 2 días",
                    datosNino.natacion_grupal_2dias_lunes,
                    datosNino.natacion_grupal_2dias_martes,
                    datosNino.natacion_grupal_2dias_miercoles,
                    datosNino.natacion_grupal_2dias_jueves,
                    datosNino.natacion_grupal_2dias_viernes,
                    datosNino.natacion_grupal_2dias_sabado,
                  ],
                  [
                    {
                      text: "Otro",
                    },
                    {
                      text: `${datosNino.otro_paquete}`,
                      colSpan: 6,
                    },
                    {},
                    {},
                    {},
                    {},
                    {}, // Empty cells for colSpan
                  ],
                ],
              },
            },
            {
              text: `Especificar paquete: ${datosNino.especificarPaquete}`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `Inicio de la primera mensualidad: ${datosNino.inicioPrimeraMensualidad}`,
              margin: [0, 5],
              alignment: "left",
            },
          ],
          styles: {
            header: {
              fontSize: 14,
              bold: true,
              margin: [0, 10],
            },
            subheader: {
              fontSize: 12,
              bold: true,
              margin: [0, 5],
            },
          },
        };

        pdfMake
          .createPdf(docDefinition)
          .download("contrato " + datosNino.nombre + ".pdf");
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
