const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, division, district, upazila, phone } = req.body;
  console.log(req.body);
//   const user = User.create({
//     name,
//     division,
//     district,
//     upazila,
//     phone,
//   });

//   if (user) {
//     res.status(201).json({
//       success: true,
//       user,
//     });
//   } else {
//     res.status(400);
//     throw new Error("user data not save");
//   }
};
