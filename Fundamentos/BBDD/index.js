const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conectar al servidor de MongoDB
    await client.connect();
    console.log('Conectado a la base de datos');

    const db = client.db('datos');
    const collection = db.collection('usuarios');

    // Realizar una consulta para obtener todos los usuarios
    const usuarios = await collection.find({}).toArray();
    console.log('Usuarios encontrados:', usuarios);
    
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    // Cerrar la conexión después de la consulta
    await client.close();
  }
}

main().catch(console.error);
