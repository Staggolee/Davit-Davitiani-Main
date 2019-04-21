const crypto = require("crypto");

// Secret word for encrypting user passwords
const SECRET = "ecommerce";

const encrypt = data => {
  const trimmedData = data.trim();
  const hash = crypto
    .createHmac("sha256", SECRET)
    .update(trimmedData)
    .digest("hex");
  return hash;
};

const passwordsMatch = (rawPassword, encryptedPassword) => {
  const trimmedPassword = rawPassword.trim();
  return encrypt(trimmedPassword) === encryptedPassword;
};

module.exports = {
  encrypt,
  passwordsMatch,
};
