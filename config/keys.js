// module.exports = {
//   mongoURI: "mongodb://kamaria:kamaria1@ds237955.mlab.com:37955/devconnector",
//   secretOrKey: "secret"
// };
if (process.env.NODE.ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
