exports.getUser = (req, res) => {
  const name = req.body.name;
  console.log(name);
  res.status(200).json({ name: name });
};
