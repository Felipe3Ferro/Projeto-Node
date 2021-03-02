import express from 'express';

const app = express();

app.get('/', (request, respose) => {
  return respose.json({message: 'Hello World'});
});

app.listen(3333, () => {
  console.log('🚀 Server Started on port 3333"')
});