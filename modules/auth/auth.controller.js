const authService = require("./auth.services");

const login = asyncHandler(async (req, res) => {
  console.log("Login user");

  const { body } = req;

  const { user, accessToken } = await authService.login(body);

  return res.status(200).json({
    success: true,
    data: {
      user,
      accessToken,
    },
  });
});

module.exports = { login };
