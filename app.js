const express = require('express');

const mongoose = require('mongoose'); // импорт монгус

const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

// midlleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.user = {
    _id: '5f3438b5d5530c436c72c5a7',
  };

  next();
});

app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users'));

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден!' });
});

app.listen(PORT, () => {
// eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
