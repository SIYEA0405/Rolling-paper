const UserModel = require("./../models/model");
// create and save new user 유저들의 post 생성 후 저장
exports.create = async (req, res) => {
  const modelName = req.params.id;
  if (!req.body) {
    res
      .status(400)
      .json({ message: err.message || "Connect can not be empty" });
    return;
  }
  // 새로운 유저 data 생성하기
  const user = await new UserModel(modelName)({
    userName: req.body.userName,
    comment: req.body.comment,
    //password: req.body.password,
  });

  // 새로운 유저가 만든 멘트를 id에 맞는 DB에 저장
  user
    .save()
    .then(() => {
      //json 으로 필요한 데이터만 가공
      return res.status(200).json({
        data: req.body,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          "Some error occurrend while creating a create operation",
      });
      return;
    });
};

// modelName인 req.baseUrl값으로 db에서 dbName을 찾아서 해당 데이터베이스 안의 모든 필드를 가지고온다.
exports.find = async (req, res) => {
  const modelName = req.params.id;
  await UserModel(modelName)
    .find({})
    .then((data) => {
      //newData 는 유저들의 이름을 가려서 가공 후 프론트로 보내주는 가공된 데이터
       let newData = data.map(e => {
        return {
          userName: `${e.userName[0]}**`,
        comment: e.comment}
      })
      res.json(newData);
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          message:
            err.message || "Error occurrend while retriving data information",
        });
      return;
    });
};

// Update new idetified user by user id
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res
//       .status(400)
//       .send({ message: "Data to update can not be empty" });
//   }
//   const modelName = req.params.id;
//   UserSchema(modelName).findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot Update user with ${id}. Maybe user not found`,
//         });
//       } else {
//         res.send(data);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error Update user information" });
//     });
// };

// // delete a user with specified user id in the request
// exports.delete = (req, res) => {
//   const modelName = req.params.id;
//   UserSchema(modelName).findByIdAndDelete(id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot Delete user with ${id}. Maybe user not found`,
//         });
//       } else {
//         res.send({ message: "User was deleted successfully!" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error Delete user information" });
//     });
// };
