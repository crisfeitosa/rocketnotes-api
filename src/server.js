import express from 'express';

const app = express();

app.get('/message/:id/:user', (request, response) => {
  const { id, user } = request.params;

  response.send(`
    Mensagem ID: ${id}.
    Nome do usuário: ${user}.  
  `)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
