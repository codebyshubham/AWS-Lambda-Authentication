const AWS = require('aws-sdk');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test') {
  dotenv.config();
}

class Connection {

  constructor() {
    AWS.config.update({ region: process.env.AWS_REGION, endpoint: process.env.AWS_ENDPOINT });
    this.db = new AWS.DynamoDB();
  }

  static create() {
    return new this();
  }

  database() {
    return this.db;
  }

  static client() {
    return new AWS.DynamoDB.DocumentClient();
  }

}

module.exports = Connection;
