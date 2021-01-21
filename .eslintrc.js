module.exports = {
  root: true,
  env: {
    "es6": true,
    sourceType: 'module'
  },
  extends: [],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
