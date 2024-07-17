<div id="tableContainer" class="table-responsive">
  <table class="table table-sm table-bordered" id="dataTable" width="100%" cellspacing="0">
    <thead id="thead">
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>
</div>

<h1 class="text-center mb-4">Ficha de Inscripción - Niño</h1>
<form id="formNino">
  <!-- Datos Personales -->
  <h2 class="mt-4">Datos Personales</h2>
  <div class="mb-3">
    <label for="nombreAlumno" class="form-label">Nombre del alumno</label>
    <input type="text" class="form-control" id="nombreAlumno" name="nombreAlumno">
  </div>
  <div class="row">
    <div class="mb-3 col-md-6">
      <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
      <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento">
    </div>
    <div class="mb-3 col-md-6">
      <label for="edad" class="form-label">Edad</label>
      <input type="number" class="form-control" id="edad" name="edad" min="1">
    </div>
  </div>

  <div class="mb-3">
    <label for="domicilio" class="form-label">Domicilio</label>
    <textarea class="form-control" id="domicilio" name="domicilio" rows="2"></textarea>
  </div>
  <div class="row">
    <div class="mb-3 col-md-3">
      <label for="escuelaProcedencia" class="form-label">Escuela de procedencia</label>
      <input type="text" class="form-control" id="escuelaProcedencia" name="escuelaProcedencia">
    </div>
    <div class="mb-3 col-md-3">
      <label for="escolaridad" class="form-label">Escolaridad</label>
      <input type="text" class="form-control" id="escolaridad" name="escolaridad">
    </div>
    <div class="mb-3 col-md-3">
      <label for="grado" class="form-label">Grado</label>
      <input type="text" class="form-control" id="grado" name="grado">
    </div>
    <div class="mb-3 col-md-3">
      <label for="tipoSangre" class="form-label">Tipo de sangre</label>
      <input type="text" class="form-control" id="tipoSangre" name="tipoSangre">
    </div>
  </div>

  <!-- Datos de Salud -->
  <h2 class="mt-4">Datos de Salud</h2>
  <div class="mb-3">
    <label for="alergiasRequerimientos" class="form-label">Alergias u otros requerimientos de salud</label>
    <textarea class="form-control" id="alergiasRequerimientos" name="alergiasRequerimientos" rows="2"></textarea>
  </div>
  <div class="mb-3">
    <label for="recomendacionesEspeciales" class="form-label">Recomendaciones especiales para el cuidado del
      niño</label>
    <textarea class="form-control" id="recomendacionesEspeciales" name="recomendacionesEspeciales" rows="2"></textarea>
  </div>
  <div class="mb-3">
    <label for="antecedentesMedicos" class="form-label">Antecedentes médicos</label>
    <textarea class="form-control" id="antecedentesMedicos" name="antecedentesMedicos" rows="2"></textarea>
  </div>
  <div class="mb-3">
    <label for="grupoSanguineo" class="form-label">Grupo sanguíneo</label>
    <input type="text" class="form-control" id="grupoSanguineo" name="grupoSanguineo">
  </div>
  <div class="row">
    <div class="mb-3 d-flex column-gap col-md-6">
      <label class="form-label">¿Pose alguna enfermedad cardiológica, neurológica o de vías respiratorias?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="enfermedadSi" name="enfermedad" value="1">
        <label class="form-check-label" for="enfermedadSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="enfermedadNo" name="enfermedad" value="0">
        <label class="form-check-label" for="enfermedadNo">No</label>
      </div>
    </div>
    <div class="mb-3 column-gap col-md-6" id="detalleEnfermedadNino">
      <label for="enfermedadCual" class="form-label">¿Cuál?</label>
      <textarea class="form-control" id="enfermedadCual" name="enfermedadCual" rows="2"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="mb-3 d-flex column-gap col-md-6">
      <label class="form-label">¿Está con tratamiento médico?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="tratamientoSi" name="tratamiento" value="1">
        <label class="form-check-label" for="tratamientoSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="tratamientoNo" name="tratamiento" value="0">
        <label class="form-check-label" for="tratamientoNo">No</label>
      </div>
    </div>
    <div class="mb-3 column-gap col-md-6" id="detalleTratamientoConsiste">
      <label for="tratamientoConsiste" class="form-label">Describa en qué consiste</label>
      <textarea class="form-control" id="tratamientoConsiste" name="tratamientoConsiste" rows="2"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="mb-3 d-flex column-gap col-md-6">
      <label class="form-label">¿Tiene algún tipo de servicio médico privado o público?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="servicioMedicoSi" name="servicioMedico" value="1">
        <label class="form-check-label" for="servicioMedicoSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="servicioMedicoNo" name="servicioMedico" value="0">
        <label class="form-check-label" for="servicioMedicoNo">No</label>
      </div>
    </div>
    <div class="mb-3 column-gap col-md-6" id="detallePrivadoNino">
      <label for="servicioMedicoCual" class="form-label">¿Cuál?</label>
      <textarea class="form-control" id="servicioMedicoCual" name="servicioMedicoCual" rows="2"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="mb-3 d-flex column-gap col-md-6">
      <label class="form-label">¿Está dado de alta en alguna otra actividad deportiva?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="actividadDeportivaSi" name="actividadDeportiva" value="1">
        <label class="form-check-label" for="actividadDeportivaSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="actividadDeportivaNo" name="actividadDeportiva" value="0">
        <label class="form-check-label" for="actividadDeportivaNo">No</label>
      </div>
    </div>
    <div class="mb-3 column-gap col-md-6" id="detalleActividadDeportivaNino">
      <label for="actividadDeportivaCual" class="form-label">¿Cuál?</label>
      <textarea class="form-control" id="actividadDeportivaCual" name="actividadDeportivaCual" rows="2"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="mb-3 d-flex column-gap col-md-6">
      <label class="form-label">¿Autoriza que sus fotos aparezcan en nuestras publicaciones?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="autorizaFotosSi" name="autorizaFotos" value="1">
        <label class="form-check-label" for="autorizaFotosSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="autorizaFotosNo" name="autorizaFotos" value="0">
        <label class="form-check-label" for="autorizaFotosNo">No</label>
      </div>
    </div>
  </div>

  <!-- Datos de Valoración -->
  <h2 class="mt-4">Datos de Valoración para el Inicio del Programa del Alumno</h2>

  <div class="mb-3">
    <label for="programaInicio" class="form-label">Tipo de programa de inicio</label>
    <textarea class="form-control" id="programaInicio" name="programaInicio" rows="2"></textarea>
  </div>
  <h3>Encuesta para Valoración de mi Hijo en Experiencia Acuática</h3>
  <h5>(SELECCIONE LA RESPUESTA DE SU AGRADO)</h5>
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
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label for="clasesAguaTiempo" class="form-label">¿Por cuánto tiempo?</label>
      <input type="text" class="form-control" id="clasesAguaTiempo" name="clasesAguaTiempo">
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
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label for="motivoExperienciaAgua" class="form-label">Motivo</label>
      <textarea class="form-control" id="motivoExperienciaAgua" name="motivoExperienciaAgua" rows="2"></textarea>
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
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label for="motivoTemorAgua" class="form-label">Motivo</label>
      <textarea class="form-control" id="motivoTemorAgua" name="motivoTemorAgua" rows="3"></textarea>
    </div>
    <div class="mb-3 col-md-6">
      <label for="nivelPracticaNino" class="form-label">¿Qué nivel de práctica tiene nadando?</label>
      <select class="form-select" id="nivelPracticaNino" name="nivelPracticaNino">
        <option value="">Seleccione una opción</option>
        <option value="1">Ninguna</option>
        <option value="2">Inicial</option>
        <option value="3">Media</option>
        <option value="4">Técnica</option>
      </select>
    </div>

  </div>
  <div class="row">
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label class="form-label">¿Había recibido clases de natación?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="clasesNatacionSi" name="clasesNatacion" value="1">
        <label class="form-check-label" for="clasesNatacionSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="clasesNatacionNo" name="clasesNatacion" value="0">
        <label class="form-check-label" for="clasesNatacionNo">No</label>
      </div>
    </div>
    <div class="mb-3 col-md-6 d-flex column-gap">
      <label for="motivoclasesNatacion" class="form-label">¿Por cuánto tiempo?</label>
      <textarea class="form-control" id="motivoclasesNatacion" name="motivoclasesNatacion" rows="3"></textarea>
    </div>

    <div class="mb-3 col-md-6 d-flex column-gap">
      <label class="form-label">¿Acepta que le caiga agua en la cara?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="aguaEnLaCaraSi" name="aguaEnLaCara" value="1">
        <label class="form-check-label" for="aguaEnLaCaraSi">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="aguaEnLaCaraNo" name="aguaEnLaCara" value="0">
        <label class="form-check-label" for="aguaEnLaCaraNo">No</label>
      </div>
    </div>

  </div>

  <div class="row">
    <div class="col-md-12">
      <label for="nivelPracticaNino" class="form-label">¿Actitud cuando está en? (Escriba el numero en cada opción)
        1.-
        Llora 2.- Asustado 3.- Entra con apoyo 4.- Normal
      </label>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Playa</label>
          <input type="text" id="playaActitud" class="form-control">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Rio</label>
          <input type="text" id="rioActitud" class="form-control">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Alberca</label>
          <input type="text" id="albercaActitud" class="form-control">
        </div>
      </div>
    </div>
    <div class="mb-3 col-md-12">

    </div>
    <div class="mb-3 col-md-6">
      <label for="tipoServicio" class="form-label">Tipo de servicio adquirido</label>
      <textarea class="form-control" id="tipoServicio" name="tipoServicio" rows="2"></textarea>
    </div>
  </div>
  <!-- Información de los Padres -->

  <h2 class="mt-4">Información de los Padres</h2>
  <div class="row">
    <div class="mb-3 col-md-6">
      <label for="nombrePapa" class="form-label">Nombre del papá</label>
      <input type="text" class="form-control" id="nombrePapa" name="nombrePapa">
    </div>
    <div class="mb-3 col-md-6">
      <label for="nacionalidadPapa" class="form-label">Nacionalidad</label>
      <input type="text" class="form-control" id="nacionalidadPapa" name="nacionalidadPapa">
    </div>
    <div class="mb-3 col-md-6">
      <label for="telefonoPapa" class="form-label">Teléfono</label>
      <input type="text" class="form-control" id="telefonoPapa" name="telefonoPapa">
    </div>
    <div class="mb-3 col-md-6">
      <label for="emailPapa" class="form-label">E-mail</label>
      <input type="email" class="form-control" id="emailPapa" name="emailPapa">
    </div>
    <div class="mb-3 col-md-6">
      <label for="nombreMama" class="form-label">Nombre de la mamá</label>
      <input type="text" class="form-control" id="nombreMama" name="nombreMama">
    </div>
    <div class="mb-3 col-md-6">
      <label for="nacionalidadMama" class="form-label">Nacionalidad</label>
      <input type="text" class="form-control" id="nacionalidadMama" name="nacionalidadMama">
    </div>
    <div class="mb-3 col-md-6">
      <label for="telefonoMama" class="form-label">Teléfono</label>
      <input type="text" class="form-control" id="telefonoMama" name="telefonoMama">
    </div>
    <div class="mb-3 col-md-6">
      <label for="emailMama" class="form-label">E-mail</label>
      <input type="email" class="form-control" id="emailMama" name="emailMama">
    </div>
  </div>
  <div class="mb-3">
    <label for="nombreEmergencia" class="form-label">Nombre y teléfono de emergencia</label>
    <input type="text" class="form-control" id="nombreEmergencia" name="nombreEmergencia">
  </div>
  <div class="mb-3">
    <label for="personasAutorizadas" class="form-label">Personas autorizadas para recoger a su hijo y
      parentesco</label>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control mb-2" id="personaAutorizada1" name="personaAutorizada1">
      </div>
      <div class="col">
        <input type="text" class="form-control mb-2" id="personaAutorizada2" name="personaAutorizada2">
      </div>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">¿Tiene hermanos? ¿Cuántos?</label>
    <input type="number" class="form-control" id="cantidadHermanos" name="cantidadHermanos" min="0">
  </div>
  <div class="mb-3">
    <label class="form-label">¿Autoriza que en un momento dado, si no se encuentra presente el tutor o encargado
      del
      menor, pueda apoyar al menor de edad a cambiarlo un adulto de su mismo sexo perteneciente al club
      Aquaworld?</label>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="autorizaCambioSi" name="autorizaCambio" value="1">
      <label class="form-check-label" for="autorizaCambioSi">Sí</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="autorizaCambioNo" name="autorizaCambio" value="0">
      <label class="form-check-label" for="autorizaCambioNo">No</label>
    </div>
  </div>
  <!-- Inscripción a Mensualidad -->
  <h2 class="mt-4">Inscripción a Mensualidad</h2>
  <div class="mb-3">
    <label for="horarios" class="form-label">Escriba el horario en los días acordados por administración y
      padres</label>
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
        <tbody>
          <tr>
            <td>Natación niños 3 días</td>
            <td><input type="text" name="natacion_ninos_3dias_lunes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_3dias_martes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_3dias_miercoles" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_3dias_jueves" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_3dias_viernes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_3dias_sabado" class="form-control"></td>
          </tr>
          <tr>
            <td>Natación niños 2 días</td>
            <td><input type="text" name="natacion_ninos_2dias_lunes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_2dias_martes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_2dias_miercoles" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_2dias_jueves" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_2dias_viernes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_2dias_sabado" class="form-control"></td>
          </tr>
          <tr>
            <td>Natación niños 1 día</td>
            <td><input type="text" name="natacion_ninos_1dia_lunes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_1dia_martes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_1dia_miercoles" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_1dia_jueves" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_1dia_viernes" class="form-control"></td>
            <td><input type="text" name="natacion_ninos_1dia_sabado" class="form-control"></td>
          </tr>
          <tr>
            <td>Natación grupal 3 días</td>
            <td><input type="text" name="natacion_grupal_3dias_lunes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_3dias_martes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_3dias_miercoles" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_3dias_jueves" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_3dias_viernes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_3dias_sabado" class="form-control"></td>
          </tr>
          <tr>
            <td>Natación grupal 2 días</td>
            <td><input type="text" name="natacion_grupal_2dias_lunes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_2dias_martes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_2dias_miercoles" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_2dias_jueves" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_2dias_viernes" class="form-control"></td>
            <td><input type="text" name="natacion_grupal_2dias_sabado" class="form-control"></td>
          </tr>
          <tr>
            <td>OTRO</td>
            <td colspan="6"><input type="text" name="otro_paquete" class="form-control"
                placeholder="Especificar otro servicio y horarios"></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  <div class="mb-3">
    <label for="paquetee" class="form-label">Especificar paquete</label>
    <textarea class="form-control" id="especificarPaquete" name="especificarPaquete" rows="2"></textarea>
  </div>
  <div class="mb-3">
    <label for="fechaInicio" class="form-label">Fecha de inicio de 1ra mensualidad</label>
    <input type="date" class="form-control" id="fechaInicio" name="fechaInicio">
  </div>
  <!-- Datos de Envío -->
  <input type="hidden" name="rol" value="nino">
  <div class="text-center mt-4">
    <button type="button" class="btn btn-primary">Enviar Ficha de Inscripción</button>
  </div>
</form>