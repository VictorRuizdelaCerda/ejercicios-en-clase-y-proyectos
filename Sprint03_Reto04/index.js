import express from 'express';
// Importamos la versión 'promise' de mysql2 para poder usar async/await
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json());

// 1. CONEXIÓN A LA BASE DE DATOS
// 🚨 ATENCIÓN: Asegúrate de poner tu contraseña real de MySQL
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Verdlc810046101$',
    database: 'biblioteca'
});

console.log("¡Conectado a la base de datos MySQL exitosamente!");

// ==========================================
// RUTA 1: AUTORES
// ==========================================

// GET: Obtener todos los autores
app.get('/api/autores', async (req, res) => {
    // Intentamos (try) ejecutar el código de la base de datos
    try {
        // Ejecutamos la consulta SQL. 
        // mysql2 devuelve un arreglo donde la posición [0] son los datos reales (rows)
        const [rows] = await db.query('SELECT * FROM autores');
        
        // Respondemos enviando esos datos al navegador o a Thunder Client
        res.status(200).json(rows);
        
    } catch (error) {
        // Si la base de datos falla (catch), atrapamos el error y respondemos con un 500
        console.log(error);
        res.status(500).json({ error: "Error de conexión al consultar los autores" });
    }
});

// ==========================================
// RUTA 2: USUARIOS
// ==========================================

// 🚨 TU TURNO: 
// Escribe el endpoint GET para '/api/usuarios'.
// ¡La lógica es exactamente la misma que la de arriba, solo cambia el nombre de la tabla en tu consulta SQL!

// app.get('/api/usuarios', async (req, res) => {
//    Escribe tu bloque try/catch aquí...
// });
// ==========================================
// RUTA 2: USUARIOS
// ==========================================

// GET: Obtener todos los usuarios
app.get('/api/usuarios', async (req, res) => {
    try {
        // Ejecutamos la consulta SQL
        const [rows] = await db.query('SELECT * FROM usuarios');
        
        // Respondemos con los datos obtenidos
        res.status(200).json(rows);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error de conexión al consultar los usuarios" });
    }
});


// Levantamos el servidor
app.listen(3000, () => {
    console.log('Servidor Express corriendo en http://localhost:3000');
});