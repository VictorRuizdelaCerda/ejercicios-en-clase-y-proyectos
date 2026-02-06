import http from "http";

const server = http.createServer((req, res) => {
    // 1. CONFIGURA EL ENCABEZADO (writeHead) PARA DEVOLVER TEXTO PLANO (Código 200) Acá una ayuda
    res.writeHead(200, { "Content-Type": "text/plain" });
    
    // 2. CREA UNA ESTRUCTURA IF/ELSE PARA EVALUAR req.method
   
    // SI el método es igual a "GET":
        // Responde (res.end) con el mensaje: "Obteniendo lista de tareas..."
    if (req.method === "GET") {
        res.end("Obteniendo lista de tareas...");
    } 
    // SI EL NO, SI (else if) el método es igual a "POST":
        // Responde con: "Creando una nueva tarea..."
    else if (req.method === "POST") {
        res.end("Creando una nueva tarea...");
    } 
    // SI EL NO, SI el método es igual a "PUT":
        // Responde con: "Actualizando una tarea existente..."  // 
    else if (req.method === "PUT") {
        res.end("Actualizando una tarea existente...");
    } 
    // SI EL NO, SI el método es igual a "DELETE":
        // Responde con: "Tarea eliminada correctamente."
     else if (req.method === "DELETE") {
        res.end("Tarea eliminada correctamente.");
    } 

    // SI NO (else) se cumple ninguno de los anteriores:
        // Responde con: "Método no soportado"
    else {
        res.end("Método no soportado");
    }


});

// 3. PON EL SERVIDOR A ESCUCHAR EN EL PUERTO 3000 Y MUESTRA UN MENSAJE EN CONSOLA
server.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});