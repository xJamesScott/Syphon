import axios from "axios";
import { useRouter } from 'next/router';
import cookie from "cookie";

// const router = useRouter()

const getCookieToken = (req) => req.cookies.token;

const isValidEmail = (email) => {
  return _isEmail(email) && isValidTopLevelDomain(email);
};

// password validation code from front-end 'src\utils\validators'
const SPECIAL_CHARS = /[!@#$%^&*.;]/;
const containsLowerCase = (str) => /[a-z]/.test(str);
const containsUpperCase = (str) => /[A-Z]/.test(str);
const containsNumber = (str) => /\d/.test(str);
const containsSpecialChars = (str) => SPECIAL_CHARS.test(str);

const isValidPassword = (password) => {
  const passwordChecks = [
    containsLowerCase(password),
    containsUpperCase(password),
    containsNumber(password),
    containsSpecialChars(password),
  ];

  return passwordChecks.filter((isValid) => isValid).length >= 3;
};

export const generateUUID = ({ range }) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  // eslint-disable-next-line no-plusplus
  for (let i = range; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export function parseCookies() {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

module.exports = {
  isValidEmail,
  isValidPassword,
  generateUUID
};
