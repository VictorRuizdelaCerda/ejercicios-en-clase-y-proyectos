import express from 'express';
import routes from './src/routesindex.js';
import {sequelize} from './src/config/db.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api', routes);

sequelize.authenticate() 
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
