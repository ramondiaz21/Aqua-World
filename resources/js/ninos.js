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

const lugar = "Colima"; // Ajusta esto si el lugar cambia
const fechaRegistro = new Date().toLocaleDateString();

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
        var nombreCompleto;

        if (datosNino.nombrePapa && datosNino.nombreMama) {
          nombreCompleto = `${datosNino.nombrePapa}, ${datosNino.nombreMama}`;
        } else if (datosNino.nombrePapa) {
          nombreCompleto = datosNino.nombrePapa;
        } else if (datosNino.nombreMama) {
          nombreCompleto = datosNino.nombreMama;
        } else {
          nombreCompleto = "";
        }

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
                  margin: [0, 10, 10, 0], //[left, top, right, bottom]
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
              text: `Nombre del alumno: ${datosNino.nombre}`,
              margin: [0, 10],
            },
            {
              columns: [
                {
                  text: `Fecha de nacimiento: ${datosNino.fechaDeNacimiento}`,
                  width: "60%",
                },
                { text: `Edad: ${datosNino.edad}`, width: "40%" },
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
                  width: "60%",
                },
                {
                  text: `Grupo sanguíneo: ${datosNino.grupoSanguineo}`,
                  width: "40%",
                },
              ],
              margin: [0, 5],
            },
            {
              text: `¿Pose alguna enfermedad cardiológica, neurológica o de vías respiratorias? ${
                datosNino.enfermedadCardiologica === "1" ? "Si" : "No"
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
                datosNino.tratamientoMedico === "1" ? "Si" : "No"
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
                datosNino.servicioMedico === "1" ? "Si" : "No"
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
                datosNino.altaActividadDeportiva === "1" ? "Si" : "No"
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
                datosNino.autorizacionFotos === "1" ? "Si" : "No"
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
                datosNino.experienciaClasesAgua === "1" ? "Si" : "No"
              }`,
              margin: [0, 5],
              alignment: "left",
            },
            {
              text: `¿Por cuánto  tiempo?: ${datosNino.tiempoExperienciaClasesAgua}`,
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
                datosNino.temorAguaNadar === "1" ? "Si" : "No"
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
                datosNino.tiempoClasesNatacion === "1" ? "Si" : "No"
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
                datosNino.aceptaAguaCara === "1" ? "Si" : "No"
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
              text: `¿Autoriza que en un momento dado que no se encuentre presente el tutor o encargado del menor, pueda apoyar al menor de edad a cambiarlo un adulto de su mismo sexo perteneciente al club aquaworld?: ${
                datosNino.autorizacionApoyoAdulto === "1" ? "Si" : "No"
              }`,
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
            {
              text: "CARTA DE SESIÓN DE DERECHOS DE IMAGEN / ESTUDIANTE MENOR DE EDAD",
              style: "header",
              alignment: "center",
              margin: [0, 80, 0, 10],
            },
            {
              text: `Lugar y fecha: ${lugar} ${fechaRegistro}`,
              margin: [0, 10],
            },
            {
              text: [
                "El/la que suscribe ",
                {
                  text: nombreCompleto,
                  bold: false,
                },
                ", en su calidad de padre, madre o tutor/a, autoriza a ",
                { text: "AQUAWORLDCLUB", bold: true },
                " a realizar registro de imagen fotográfica y/o audiovisual del/la estudiante: ",
                { text: `${datosNino.nombre}`, bold: false },
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
              margin: [0, 10],
              alignment: "center",
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
          "<th>FECHA DE NACIMIENTO</th>" +
          "<th>DOMICILIO</th>" +
          "<th>DATOS PAPÁ</th>" +
          "<th>DATOS MAMÁ</th>" +
          "<th>CONTACTO DE EMERGENCIA</th>" +
          "<th>PERSONAS AUTORIZADAS PARA RECOGER</th>" +
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
          tbody += "<td>" + (registro[7] || "") + "</td>";
          tbody += "<td>" + (registro[8] || "") + "</td>";
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
        alert("No se encontraron registros.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", status, error);
      $("#tbody").text("Error al cargar los datos.");
    },
  });
}
