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
          content: [
            { text: "Ficha de Inscripción", style: "header" },
            {
              text: `Nombre del alumno: ${datosAdulto.nombre}`,
              margin: [0, 10],
            },
            {
              text: `Edad: ${datosAdulto.edad}   Teléfono: ${datosAdulto.telefono}   Nacionalidad: ${datosAdulto.nacionalidad}`,
              margin: [0, 5],
            },
            {
              text: `Fecha de nacimiento: ${datosAdulto.fechaDeNacimiento}`,
              margin: [0, 5],
            },
            { text: `Domicilio: ${datosAdulto.domicilio}`, margin: [0, 5] },
            {
              text: `Alergia u otros requerimientos de salud: ${datosAdulto.alergiaOtrosRequerimientos}`,
              margin: [0, 10],
            },
            {
              text: `Nombre y teléfono de emergencia: ${datosAdulto.nombreTelefonoEmergencia}`,
              margin: [0, 10],
            },
            {
              text: `Antecedentes médicos: ${datosAdulto.antecedentesMedicos}  Grupo sanguíneo: ${datosAdulto.grupoSanguineo}`,
              margin: [0, 10],
            },
            {
              text: `¿Posee alguna enfermedad cardiológica, neurológica o de vías respiratorias? ${
                datosAdulto.enfermedadCardiologica === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `¿Cuál? ${datosAdulto.cualEnfermedadCardiologica}`,
              margin: [0, 5],
            },
            {
              text: `¿Está con tratamiento médico? ${
                datosAdulto.tratamientoMedico === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `Describa en qué consiste: ${datosAdulto.cualtratamientoMedico}`,
              margin: [0, 5],
            },
            {
              text: `¿Tiene algún tipo de servicio médico privado o público? ${
                datosAdulto.medicoPrivadoPublico === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `¿Cuál? ${datosAdulto.cualMedicoPrivadoPublico}`,
              margin: [0, 5],
            },
            {
              text: `¿Está dado de alta en alguna otra actividad deportiva? ${
                datosAdulto.otraActividadDeportiva === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `¿Cuál? ${datosAdulto.cualOtraActividadDeportiva}`,
              margin: [0, 5],
            },
            {
              text: `¿Autoriza que sus fotos aparezcan en nuestras publicaciones? ${
                datosAdulto.autorizacionFotos === "1" ? "Sí" : "No"
              }`,
              margin: [0, 10],
            },
            {
              text: "¡Escriba el horario y días acordados por administración en el servicio de su interés!",
              style: "subheader",
            },
            {
              table: {
                headerRows: 1,
                widths: [150, "*", "*", "*", "*", "*", "*"],
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
                    "Aquaerobic",
                    datosAdulto.servicio_aquaerobic_lunes,
                    datosAdulto.servicio_aquaerobic_martes,
                    datosAdulto.servicio_aquaerobic_miercoles,
                    datosAdulto.servicio_aquaerobic_jueves,
                    datosAdulto.servicio_aquaerobic_viernes,
                    datosAdulto.servicio_aquaerobic_sabado,
                  ],
                  [
                    "Nado libre",
                    datosAdulto.servicio_nado_libre_lunes,
                    datosAdulto.servicio_nado_libre_martes,
                    datosAdulto.servicio_nado_libre_miercoles,
                    datosAdulto.servicio_nado_libre_jueves,
                    datosAdulto.servicio_nado_libre_viernes,
                    datosAdulto.servicio_nado_libre_sabado,
                  ],
                  [
                    "Aquafitness",
                    datosAdulto.servicio_aquafitness_lunes,
                    datosAdulto.servicio_aquafitness_martes,
                    datosAdulto.servicio_aquafitness_miercoles,
                    datosAdulto.servicio_aquafitness_jueves,
                    datosAdulto.servicio_aquafitness_viernes,
                    datosAdulto.servicio_aquafitness_sabado,
                  ],
                  [
                    "Water Spinning",
                    datosAdulto.servicio_water_spinning_lunes,
                    datosAdulto.servicio_water_spinning_martes,
                    datosAdulto.servicio_water_spinning_miercoles,
                    datosAdulto.servicio_water_spinning_jueves,
                    datosAdulto.servicio_water_spinning_viernes,
                    datosAdulto.servicio_water_spinning_sabado,
                  ],
                  [
                    "Aquatic Pole",
                    datosAdulto.servicio_aquatic_pole_lunes,
                    datosAdulto.servicio_aquatic_pole_martes,
                    datosAdulto.servicio_aquatic_pole_miercoles,
                    datosAdulto.servicio_aquatic_pole_jueves,
                    datosAdulto.servicio_aquatic_pole_viernes,
                    datosAdulto.servicio_aquatic_pole_sabado,
                  ],
                  [
                    "Rehabilitación",
                    datosAdulto.servicio_rehabilitacion_lunes,
                    datosAdulto.servicio_rehabilitacion_martes,
                    datosAdulto.servicio_rehabilitacion_miercoles,
                    datosAdulto.servicio_rehabilitacion_jueves,
                    datosAdulto.servicio_rehabilitacion_viernes,
                    datosAdulto.servicio_rehabilitacion_sabado,
                  ],
                  [
                    "Aqua Yoga",
                    datosAdulto.servicio_aqua_yoga_lunes,
                    datosAdulto.servicio_aqua_yoga_martes,
                    datosAdulto.servicio_aqua_yoga_miercoles,
                    datosAdulto.servicio_aqua_yoga_jueves,
                    datosAdulto.servicio_aqua_yoga_viernes,
                    datosAdulto.servicio_aqua_yoga_sabado,
                  ],
                  ["Otro", datosAdulto.servicio_otro, "", "", "", "", ""],
                ],
              },
            },
            {
              text: `Especificar paquete: ${datosAdulto.especificarPaquete}`,
              margin: [0, 10],
            },
            { text: "ENCUESTA PARA VALORACIÓN DEL ADULTO", style: "subheader" },
            {
              text: `¿Había recibido clases en el agua? ${
                datosAdulto.recibirClasesEnAgua === "1" ? "Sí" : "No"
              } ${datosAdulto.cualrecibirClasesEnAgua}`,
              margin: [0, 5],
            },
            {
              text: `¿Tiene alguna experiencia desagradable con el agua? ${
                datosAdulto.experienciaDesagradableConAgua === "1" ? "Sí" : "No"
              } MOTIVO: ${datosAdulto.cualexperienciaDesagradableConAgua}`,
              margin: [0, 5],
            },
            {
              text: `¿Tiene temor al agua o a nadar? ${
                datosAdulto.temorAguaNadar === "1" ? "Sí" : "No"
              } MOTIVO: ${datosAdulto.cualtemorAguaNadar}`,
              margin: [0, 5],
            },
            {
              text: "SELECCIONE LA RESPUESTA DE SU AGRADO",
              style: "subheader",
            },
            {
              text: `Experiencia acuática: ${datosAdulto.experienciaAcuatica}`,
              margin: [0, 5],
            },
            {
              text: `¿Acepta que le caiga agua en la cara? ${
                datosAdulto.aceptaAguaCara === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `¿Temor al agua? ${
                datosAdulto.temorAgua === "1" ? "Sí" : "No"
              }`,
              margin: [0, 5],
            },
            {
              text: `¿Qué nivel de práctica tiene nadando? ${datosAdulto.practicaNadando}`,
              margin: [0, 5],
            },
            {
              text: `TIPO DE SERVICIO ADQUIRIDO: ${datosAdulto.tipoServicioAdquirido}`,
              margin: [0, 10],
            },
            { text: "DATOS ADICIONALES:", margin: [0, 10] },
            {
              text: `Firma de autorización del cliente_______________________________ Sello de AquaworldClub`,
              margin: [0, 10],
            },
            {
              text: "CARTA DE SESIÓN DE DERECHOS DE IMAGEN / ESTUDIANTE MENOR DE EDAD",
              style: "header",
            },
            {
              text: `Lugar y fecha: ${lugar} ${fechaRegistro}`,
              margin: [0, 10],
            },
            {
              text: `El/la que suscribe ${datosAdulto.nombre}, en su calidad de padre, madre o tutor/a, autoriza a AQUAWORLDCLUB a realizar registro de imagen fotográfica y/o audiovisual del/la estudiante: ${datosAdulto.nombre} con el fin de promover y difundir la 
cultura en los medios físicos y electrónicos que las referidas instancias consideren 
necesarias, en donde pueda comunicar públicamente y distribuir las imágenes para los 
fines que lo requieran bajo las siguientes:`,
              margin: [0, 10],
            },
            { text: "CONSIDERACIONES:", margin: [0, 10] },
            {
              text: "1. Que es una autorización para la grabación y reproducción en los medios físicos y electrónicos, páginas o sitios de internet de la escuela y del club deportivo AQUAWORLD, además de los que éstos consideren.",
              margin: [0, 5],
            },
            {
              text: "2. La edición y reproducción de la imagen tendrá como fin principal la difusión de la cultura y generar un acervo de las actividades académicas y artísticas. La edición y reproducción de la imagen no tendrá fines de lucro.",
              margin: [0, 5],
            },
            {
              text: "3. La escuela y la administración se hacen responsables de la difusión del material fotográfico y/o audiovisual en tanto tenga el control desde sus páginas de Internet y medios físicos y/o electrónicos. Cualquier uso indebido que se hiciera de dicho material será exclusivamente responsabilidad de quien las obre, contraviniendo los intereses de los mencionados.",
              margin: [0, 5],
            },
            {
              text: "4. La escuela será propietaria de los derechos del material fotográfico y/o audiovisual producido para hacer uso de ellos exclusivamente para los fines de interés general e institucional que le es propio.",
              margin: [0, 5],
            },
            {
              text: "5. La autorización no fija ningún límite de tiempo para su concesión ni para el uso del material fotográfico y/o audiovisual, o parte de este, en los que aparece el/la estudiante, por lo que la presente autorización se considera concedida por un plazo de tiempo ilimitado.",
              margin: [0, 5],
            },
            {
              text: "Se autoriza el levantamiento y utilización de la imagen en los siguientes términos:",
              margin: [0, 10],
            },
            {
              text: "Levantamiento de material fotográfico y/o audiovisual",
              margin: [0, 5],
            },
            { text: "Autorización", margin: [0, 10] },
            { text: "Grabación total", margin: [0, 5] },
            { text: "Para difusión y promoción", margin: [0, 5] },
            { text: "Para página web y redes sociales", margin: [0, 5] },
            { text: "Para material para archivo", margin: [0, 5] },
            { text: "Para transmisión en TV parcial o total", margin: [0, 5] },
            { text: "Para transmisión por internet en vivo", margin: [0, 10] },
            {
              text: "___________________________________________________________",
              margin: [0, 50, 0, 0],
            },
            {
              text: "Nombre y firma del padre, madre o tutor",
              margin: [0, 10],
            },
            {
              text: "*Nuestra práctica de privacidad es coherente con la Ley Federal de Protección de Datos Personales en Posesión de Particulares.",
              margin: [0, 10],
            },
            { text: "REGLAMENTO DE CLASES DE NATACIÓN", style: "header" },
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
            { text: "a. Vómito $300.", margin: [0, 5] },
            {
              text: "b. Defecación $1,500 (podría evitarlo colocándolo con pañal de agua) ya que se hace un choque clorhídrico para la limpieza profunda de la alberca y se suspenderían las clases restantes.",
              margin: [0, 5],
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
              margin: [0, 5],
            },
            {
              text: "b. No se le permite ingresar a la alberca a la mascota (de hacerlo, se cobrará multa de $300 pesos).",
              margin: [0, 5],
            },
            {
              text: "c. En caso de morder o lastimar a alguno de nuestros socios, se hará responsable de los gastos médicos de la persona lesionada y de alguna indemnización que pida el socio activo. Aquaworld se deslinda de la responsabilidad.",
              margin: [0, 5],
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
              margin: [0, 5],
            },
            {
              text: "b. Sus clases de reposición se mandarán a agenda de reposiciones, la cual será adicional a sus días asegurados de su semana (no se alarga su mensualidad). Deberá consultar disponibilidad de agenda para su clase de repuesto; esta no se asegura con su mismo maestro ni con su mismo horario ya que es a disposición (lea el inciso a).",
              margin: [0, 5],
            },
            {
              text: "Este reglamento es para su seguridad, higiene y salud, así como para el mantenimiento adecuado del área. Solicitamos su apoyo cumpliendo cada uno de los puntos.",
              margin: [0, 5],
            },
            {
              text: "___________________________________________________________",
              margin: [0, 50, 0, 0],
            },
            { text: "Nombre y firma de conformidad", margin: [0, 10] },
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
