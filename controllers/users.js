const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User
    .find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

module.exports.getUser = (req, res) => {
  User
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    })
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400);
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400);
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400);
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};
