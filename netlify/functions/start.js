const serverless = require("serverless-http");
const { app } = require("./dist/angular-firebase-todo/server/main");

exports.handler = serverless(app());
