const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Budak ras lemah': 0,
  'Noob': 10,
  'Anak anak': 20,
  'Pelajar': 30,
  'Teacher': 40,
  'Commander': 50,
  'King': 60,
  'Master ': 80,
  'Lord': 90
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
