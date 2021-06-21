import axios from "axios";
import { useRouter } from 'next/router';

const _isEmail = require("validator/lib/isEmail");
const router = useRouter()

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

module.exports = {
  isValidEmail,
  isValidPassword,
};
