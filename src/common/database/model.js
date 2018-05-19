const connection = require('common/database/connection');
const _ = require('lodash');
const Promise = require('bluebird');
const uuid = require('uuid/v4');
const { DatabaseError, TableNotFoundError } = require('common/exceptions');

class Model {

  constructor() {
    this.db = connection.create().database();
    this.client = connection.client();
  }

  createTable(input, callback) {
    this.db.createTable(input, (/* error */) => {
      // if (error) throw new DatabaseError(error.message);
      this.waitFor(input, callback);
    });
  }

  waitFor(input, callback) {
    this.db.waitFor('tableExists', { TableName: input.TableName }, (data) => {
      // if (error) throw new DatabaseError(error.message);
      callback(data);
    });
  }

  store(input) {
    return new Promise((resolve, reject) => {
      const record = _.cloneDeep(input);
      record.Item.id = uuid();
      record.Item.createdAt = new Date().toISOString();
      record.Item.updatedAt = new Date().toISOString();
      record.TableName = this.getTable();
      this.client.put(record, (error) => {
        if (error) reject(new DatabaseError(error.message));
        resolve(record.Item);
      });
    });
  }

  getTable() {
    if (!this.table) TableNotFoundError();
    return this.table;
  }
}

module.exports = Model;
