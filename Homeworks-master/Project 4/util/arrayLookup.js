exports.findOneByUsername = function(username, array) {
  return array.find(user => user.username == username);
};

exports.findOneById = function(id, array) {
  return array.find(item => item.id == id);
};

exports.findOneByIdAndRemove = function(id, array) {
  const index = array.findIndex(item => item.id == id);
  // If no such item
  if (index < 0) return null;

  return array.splice(index, 1)[0];
};
