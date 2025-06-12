import express from 'express';

const app = express();

app.get('/message', (request, response) => {
  response.send('Hello, world!')
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
