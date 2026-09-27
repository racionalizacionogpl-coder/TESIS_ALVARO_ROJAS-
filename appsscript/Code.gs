/**
 * Servidor de la página "Plan de Gestión del Proyecto" (Teoría de Colas — OGPL UNMSM).
 * Sirve Index.html y guarda/lee el estado (todo el contenido editable) como un
 * archivo JSON en Google Drive, para que la edición quede disponible para
 * cualquiera que abra la URL de la Web App, sin depender de ningún visor externo.
 */

var STATE_FILE_NAME = "ogpl_plan_gestion_estado.json";

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Teoría de Colas OGPL")
    .addMetaTag("viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
}

/** Devuelve el id del archivo de estado en Drive, o null si aún no existe. */
function getStateFileId_(createIfMissing) {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty("STATE_FILE_ID");
  if (id) {
    try {
      DriveApp.getFileById(id); // lanza error si ya no existe/fue borrado
      return id;
    } catch (err) {
      id = null;
    }
  }
  if (!createIfMissing) return null;
  var file = DriveApp.createFile(STATE_FILE_NAME, "", MimeType.PLAIN_TEXT);
  props.setProperty("STATE_FILE_ID", file.getId());
  return file.getId();
}

/**
 * Llamada desde el cliente (google.script.run.getState()).
 * Devuelve el JSON guardado como texto, o null si todavía no se ha guardado nada
 * (en ese caso el cliente se queda con su contenido por defecto).
 */
function getState() {
  var id = getStateFileId_(false);
  if (!id) return null;
  var content = DriveApp.getFileById(id).getBlob().getDataAsString("UTF-8");
  return content && content.length ? content : null;
}

/**
 * Llamada desde el cliente (google.script.run.saveState(json)).
 * Sobrescribe el archivo de estado en Drive con el JSON recibido.
 */
function saveState(jsonString) {
  JSON.parse(jsonString); // valida el JSON antes de guardar; si falla, dispara withFailureHandler en el cliente
  var id = getStateFileId_(true);
  DriveApp.getFileById(id).setContent(jsonString);
  return { ok: true, savedAt: new Date().toISOString() };
}
