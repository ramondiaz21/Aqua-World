

<h1 class="text-center">Ficha de Inscripción - Adulto</h1>
<form id="formAdulto">
  <input type="hidden" name="rol_id" value="3">
  <!-- Datos Personales -->
  <h2 class="mt-4">Datos Personales</h2>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre del alumno</label>
    <input type="text" class="form-control" id="nombre" name="nombre">
  </div>
  <div class="row">
    <div class="mb-3 col-md-4">
      <label for="edad" class="form-label">Edad</label>
      <input type="number" class="form-control" id="edad" name="edad">
    </div>
    <div class="mb-3 col-md-4">
      <label for="telefono" class="form-label">Teléfono</label>
      <input type="tel" class="form-control" id="telefono" name="telefono">
    </div>
    <div class="mb-3 col-md-4">
      <label for="nacionalidad" class="form-label">Nacionalidad</label>
      <input type="text" class="form-control" id="nacionalidad" name="nacionalidad">
    </div>
    <div class="mb-3 col-md-6">
      <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
      <input type="date" class="form-control" id="fechaDeNacimiento" name="fechaDeNacimiento">
    </div>
    <div class="mb-3 col-md-6">
      <label for="domicilio" class="form-label">Domicilio</label>
      <input type="text" class="form-control" id="domicilio" name="domicilio">
    </div>
  </div>
  <div class="mb-3">
    <label for="alergias" class="form-label">Alergia u otros requerimientos de salud</label>
    <textarea class="form-control" id="alergias" name="alergiaOtrosRequerimientos" rows="3"></textarea>
  </div>
  <div class="mb-3">
    <label for="emergencia" class="form-label">Nombre y teléfono de emergencia</label>
    <input type="text" class="form-control" id="emergencia" name="nombreTelefonoEmergencia">
  </div>
  <div class="mb-3">
    <label for="antecedentes" class="form-label">Antecedentes médicos</label>
    <textarea class="form-control" id="antecedentes" name="antecedentesMedicos" rows="3"></textarea>
  </div>
  <div class="row">
    <div class="mb-3 col-md-6">
      <label for="grupoSanguineo" class="form-label">Grupo sanguíneo</label>
      <input type="text" class="form-control" id="grupoSanguineo" name="grupoSanguineo">
    </div>
  </div>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap ">
      <label class="form-label">¿Posee alguna enfermedad cardiológica, neurológica o de vías respiratorias?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="enfermedadSi" name="enfermedadCardiologica" value="1">
        <label class="form-check-label" for="enfermedadSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="enfermedadNo" name="enfermedadCardiologica" value="0">
        <label class="form-check-label" for="enfermedadNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleEnfermedad">
      <label for="cualEnfermedad" class="form-label">¿Cuál?</label>
      <input type="text" class="form-control" id="cualEnfermedad" name="cualEnfermedadCardiologica">
    </div>
  </div>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap ">
      <label class="form-label">¿Está con tratamiento médico?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="tratamientoSi" name="tratamientoMedico" value="1">
        <label class="form-check-label" for="tratamientoSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="tratamientoNo" name="tratamientoMedico" value="0">
        <label class="form-check-label" for="tratamientoNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleTratamiento">
      <label for="descripcionTratamiento" class="form-label">Describa en qué consiste</label>
      <textarea class="form-control" id="descripcionTratamiento" name="cualMedicoPrivadoPublico" rows="2"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap ">
      <label class="form-label">¿Tiene algún tipo de servicio médico privado o público?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="servicioMedicoSi" name="medicoPrivadoPublico" value="1">
        <label class="form-check-label" for="servicioMedicoSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="servicioMedicoNo" name="medicoPrivadoPublico" value="0">
        <label class="form-check-label" for="servicioMedicoNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detallePrivado">
      <label for="cualServicio" class="form-label">¿Cuál?</label>
      <input type="text" class="form-control" id="cualServicio" name="cualMedicoPrivadoPublico">
    </div>
  </div>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap ">
      <label class="form-label">¿Está dado de alta en alguna otra actividad deportiva?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="actividadSi" name="otraActividadDeportiva" value="1">
        <label class="form-check-label" for="actividadSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="actividadNo" name="otraActividadDeportiva" value="0">
        <label class="form-check-label" for="actividadNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleActividadDeportiva">
      <label for="cualActividad" class="form-label">¿Cuál?</label>
      <input type="text" class="form-control" id="cualActividad" name="cualOtraActividadDeportiva">
    </div>
  </div>
  <div class="mb-3 d-flex column-gap">
    <label class="form-label">¿Autoriza que sus fotos aparezcan en nuestras publicaciones?</label>
    <div class="form-check ">
      <input class="form-check-input" type="radio" id="fotosSi" name="autorizacionFotos" value="1">
      <label class="form-check-label" for="fotosSi">Sí</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="fotosNo" name="autorizacionFotos" value="0">
      <label class="form-check-label" for="fotosNo">No</label>
    </div>
  </div>
  <h2 class="mt-5">Mensualidades/Paquetes</h2>
  <div class="mb-3">
    <label for="horario" class="form-label">Escriba el horario y días acordados por administración en el servicio
      de
      su
      interés</label>
  </div>
  <div class="table-responsive mb-3">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Servicio</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
        </tr>
      </thead>
      <tbody id="tablaServicios">
        <tr>
          <td>Aquaerobic</td>
          <td><input type="text" id="servicio_aquaerobic_lunes" name="servicio_aquaerobic_lunes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aquaerobic_martes" name="servicio_aquaerobic_martes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aquaerobic_miercoles" name="servicio_aquaerobic_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquaerobic_jueves" name="servicio_aquaerobic_jueves" class="form-control">
          </td>
          <td><input type="text" id="servicio_aquaerobic_viernes" name="servicio_aquaerobic_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquaerobic_sabado" name="servicio_aquaerobic_sabado" class="form-control">
          </td>
        </tr>
        <tr>
          <td>Nado libre</td>
          <td><input type="text" id="servicio_nado_libre_lunes" name="servicio_nado_libre_lunes" class="form-control">
          </td>
          <td><input type="text" id="servicio_nado_libre_martes" name="servicio_nado_libre_martes" class="form-control">
          </td>
          <td><input type="text" id="servicio_nado_libre_miercoles" name="servicio_nado_libre_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_nado_libre_jueves" name="servicio_nado_libre_jueves" class="form-control">
          </td>
          <td><input type="text" id="servicio_nado_libre_viernes" name="servicio_nado_libre_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_nado_libre_sabado" name="servicio_nado_libre_sabado" class="form-control">
          </td>
        </tr>
        <tr>
          <td>Aquafitness</td>
          <td><input type="text" id="servicio_aquafitness_lunes" name="servicio_aquafitness_lunes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aquafitness_martes" name="servicio_aquafitness_martes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquafitness_miercoles" name="servicio_aquafitness_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquafitness_jueves" name="servicio_aquafitness_jueves"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquafitness_viernes" name="servicio_aquafitness_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquafitness_sabado" name="servicio_aquafitness_sabado"
              class="form-control"></td>
        </tr>
        <tr>
          <td>Water Spinning</td>
          <td><input type="text" id="servicio_water_spinning_lunes" name="servicio_water_spinning_lunes"
              class="form-control"></td>
          <td><input type="text" id="servicio_water_spinning_martes" name="servicio_water_spinning_martes"
              class="form-control"></td>
          <td><input type="text" id="servicio_water_spinning_miercoles" name="servicio_water_spinning_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_water_spinning_jueves" name="servicio_water_spinning_jueves"
              class="form-control"></td>
          <td><input type="text" id="servicio_water_spinning_viernes" name="servicio_water_spinning_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_water_spinning_sabado" name="servicio_water_spinning_sabado"
              class="form-control"></td>
        </tr>
        <tr>
          <td>Aquatic Pole</td>
          <td><input type="text" id="servicio_aquatic_pole_lunes" name="servicio_aquatic_pole_lunes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquatic_pole_martes" name="servicio_aquatic_pole_martes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquatic_pole_miercoles" name="servicio_aquatic_pole_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquatic_pole_jueves" name="servicio_aquatic_pole_jueves"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquatic_pole_viernes" name="servicio_aquatic_pole_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_aquatic_pole_sabado" name="servicio_aquatic_pole_sabado"
              class="form-control"></td>
        </tr>
        <tr>
          <td>Rehabilitación</td>
          <td><input type="text" id="servicio_rehabilitacion_lunes" name="servicio_rehabilitacion_lunes"
              class="form-control"></td>
          <td><input type="text" id="servicio_rehabilitacion_martes" name="servicio_rehabilitacion_martes"
              class="form-control"></td>
          <td><input type="text" id="servicio_rehabilitacion_miercoles" name="servicio_rehabilitacion_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_rehabilitacion_jueves" name="servicio_rehabilitacion_jueves"
              class="form-control"></td>
          <td><input type="text" id="servicio_rehabilitacion_viernes" name="servicio_rehabilitacion_viernes"
              class="form-control"></td>
          <td><input type="text" id="servicio_rehabilitacion_sabado" name="servicio_rehabilitacion_sabado"
              class="form-control"></td>
        </tr>
        <tr>
          <td>Aqua Yoga</td>
          <td><input type="text" id="servicio_aqua_yoga_lunes" name="servicio_aqua_yoga_lunes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aqua_yoga_martes" name="servicio_aqua_yoga_martes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aqua_yoga_miercoles" name="servicio_aqua_yoga_miercoles"
              class="form-control"></td>
          <td><input type="text" id="servicio_aqua_yoga_jueves" name="servicio_aqua_yoga_jueves" class="form-control">
          </td>
          <td><input type="text" id="servicio_aqua_yoga_viernes" name="servicio_aqua_yoga_viernes" class="form-control">
          </td>
          <td><input type="text" id="servicio_aqua_yoga_sabado" name="servicio_aqua_yoga_sabado" class="form-control">
          </td>
        </tr>
        <tr>
          <td>Otro</td>
          <td colspan="6"><input type="text" id="servicio_otro" name="servicio_otro" class="form-control"
              placeholder="Especificar otro servicio y horarios"></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mb-3">
    <label for="especificarPaquete" class="form-label">Especificar paquete</label>
    <textarea class="form-control" id="especificarPaquete" name="especificarPaquete" rows="2"></textarea>
  </div>
  <h2 class="mt-5">Encuesta para valoración del adulto</h2>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label class="form-label">¿Había recibido clases en el agua?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="clasesAguaSi" name="clasesAgua" value="1">
        <label class="form-check-label" for="clasesAguaSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="clasesAguaNo" name="clasesAgua" value="0">
        <label class="form-check-label" for="clasesAguaNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleClasesAgua">
      <label for="tiempoClasesAgua" class="form-label">¿Por cuánto tiempo?</label>
      <input type="text" class="form-control" id="tiempoClasesAgua" name="tiempoClasesAgua">
    </div>
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label class="form-label">¿Tiene alguna experiencia desagradable con el agua?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="experienciaAguaSi" name="experienciaAgua" value="1">
        <label class="form-check-label" for="experienciaAguaSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="experienciaAguaNo" name="experienciaAgua" value="0">
        <label class="form-check-label" for="experienciaAguaNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleExperienciaDesagradable">
      <label for="motivoExperiencia" class="form-label">Motivo</label>
      <textarea class="form-control" id="motivoExperiencia" name="motivoExperienciaAgua" rows="2"></textarea>
    </div>
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label class="form-label">¿Tiene temor al agua o a nadar?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="temorAguaSi" name="temorAgua" value="1">
        <label class="form-check-label" for="temorAguaSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="temorAguaNo" name="temorAgua" value="0">
        <label class="form-check-label" for="temorAguaNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6" id="detalleTemorAgua">
      <label for="motivoTemorAgua" class="form-label">Motivo</label>
      <textarea class="form-control" id="motivoTemorAgua" name="motivoTemorAgua" rows="2"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="mb-3 col-md-4">
      <label for="experienciaAcuatica" class="form-label">Experiencia acuática</label>
      <select class="form-select" id="experienciaAcuatica" name="experienciaAcuatica">
        <option value="">Seleccione una opción</option>
        <option value="Ninguna">Ninguna</option>
        <option value="Ocasional">Ocasional</option>
        <option value="Frecuente">Frecuente</option>
      </select>
    </div>

    <div class="mb-3 col-md-4 d-flex column-gap">
      <label class="form-label">¿Acepta que le caiga agua en la cara?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="aguaCaraSi" name="aguaCara" value="1">
        <label class="form-check-label" for="aguaCaraSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="aguaCaraNo" name="aguaCara" value="0">
        <label class="form-check-label" for="aguaCaraNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-4 d-flex column-gap">
      <label class="form-label">¿Temor al agua?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="temorAguaGeneralSi" name="temorAguaGeneral" value="1">
        <label class="form-check-label" for="temorAguaGeneralSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="temorAguaGeneralNo" name="temorAguaGeneral" value="0">
        <label class="form-check-label" for="temorAguaGeneralNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6">
      <label for="nivelPractica" class="form-label">¿Qué nivel de práctica tiene nadando?</label>
      <select class="form-select" id="nivelPractica" name="nivelPractica">
        <option value="">Seleccione una opción</option>
        <option value="Ninguna">Ninguna</option>
        <option value="Inicial">Inicial</option>
        <option value="Media">Media</option>
        <option value="Técnica">Técnica</option>
      </select>
    </div>
    <div class="mb-3 col-md-6">
      <label for="tipoServicio" class="form-label">Tipo de servicio adquirido</label>
      <textarea class="form-control" id="tipoServicio" name="tipoServicio" rows="2"></textarea>
    </div>
  </div>
  <!-- <h5>DATOS ADICIONALES</h5>
  <div class="signature-pad" id="signature-pad">
    <input type="hidden" id="firmaUsuarioInput" name="firmaUsuarioInput">
    <canvas id="firmaUsuario"></canvas>
  </div> -->
  <!-- <button id="clear-btn" type="button" class="btn btn-secondary">Limpiar</button> -->
  <div class="text-center mt-4">
    <button type="button" class="btn btn-success" id="agregarAdulto">Enviar Ficha de Inscripción</button>
  </div>

</form>

</div>

<!-- Modal -->
<div class="modal fade" id="contratoModal" tabindex="-1" role="dialog" aria-labelledby="contratoModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="contratoModalLabel">Ficha de Inscripción</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modalBody">
        <!-- Aquí se llenará el contrato con los datos del formulario -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="printButton">Imprimir</button>
      </div>
    </div>
  </div>
</div>