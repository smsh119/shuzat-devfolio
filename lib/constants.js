const MESSAGE_CHAR_LIMIT = 500;
const MESSAGE_MIN_CHAR_LIMIT = 50;
const NAME_CHAR_LIMIT = 30;
const EMAIL_CHAR_LIMIT = 254;
const DEBOUNCE_DELAY = 1500;

const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://suzatsmsh.cloud"
    : "http://localhost:3000";

export {
  DEBOUNCE_DELAY,
  EMAIL_CHAR_LIMIT,
  MESSAGE_CHAR_LIMIT,
  MESSAGE_MIN_CHAR_LIMIT,
  NAME_CHAR_LIMIT,
  SITE_URL,
};
