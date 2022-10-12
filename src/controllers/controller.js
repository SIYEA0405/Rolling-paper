const UserModel = require("./../models/model");

// create and save new user 유저들 리뷰저장
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Connect can not be empty" });
    return;
  }
  //new user 새로운 유저data 생성하기
  console.log(req.body);
  let modelName = req.params.id;
  const user = await new UserModel(modelName)({
    userName: req.body.userName,
    comment: req.body.comment,
    password: req.body.password,
  });

  //new user save 위의 새유저 data 저장하기
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurrend while creating a create operation",
      });
    });
};

// retrieve and return all users / retrieve and return single user
exports.find = async (req, res) => {
  //reqPath를 가지고 database name 찾기 ) db[reqPath]
  console.log(req);
  console.log(res);
  UserModel.find({
    name: {
      $exists: true,
    },
  })
    .then((menu) => {
      console.log(menu);
      res.send(menu);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occurrend while retriving menu information",
      });
    });
};

// Update new idetified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  UserSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  UserSchema.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete user with ${id}. Maybe user not found`,
        });
      } else {
        res.send({ message: "User was deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Delete user information" });
    });
};