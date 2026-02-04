import express from 'express';

const app = express();

app.use (express.json());
let numbers = [10, 20, 30];
app.get("/numbers", (req, res) => {
    res.status(200).json({ numbers});
});

app.get("/numbers/:index", (req, res) => {
    const index = parseInt (req.params.index);
    if (isNaN(index) || index < 0 || index >= numbers.length) {
        return res.status(404).json({ error: "Indice no encontrado 404"});
    }
    res.json({ value: numbers[index] });
});

app.post("/numbers", (req, res) => {
 const { value } = req.body;
 if (typeof value !== "number") {
    return res.status(400).json({ error: "Debes enviar un numero valido"});
 }
 numbers.push(value);
 res.status(201).json({ message: "Numero agregado", numbers });
});

app.put("/numbers/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const { value } = req.body;
    if (isNaN(index) || index < 0 || index >= numbers.length) {
        return res.status(404).json({ error: "Indice no encontrado 404"});
    }
    if (typeof value !== "number") {
        return res.status(400).json({ error: "Debes enviar un numero valido"});
    }
    numbers[index] = value;
    res.json({ message: "Numero actualizado", numbers });
});

app.delete("/numbers/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= numbers.length) {
        return res.status(404).json({ error: "Indice no encontrado 404"});
    }
    numbers.splice(index, 1);
    res.json({ message: "Numero eliminado", numbers });
});

app.listen(3000, () => {
    console.log("Servidor ejecutandose en el puerto 3000");
});

