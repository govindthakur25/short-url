const sessionIdToUserMap = new Map();

function setUser(id, user) {
  sessionIdToUserMap(id, user);
}

function getUser(id) {
  return sessionIdToUserMap(id);
}

export { setUser, getUser };
