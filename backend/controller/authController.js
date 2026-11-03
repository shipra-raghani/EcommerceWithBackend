export default async function getMe(req, res) {
  try {
    res
      .status(200)
      .json({ message: "User Logged in", success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}
