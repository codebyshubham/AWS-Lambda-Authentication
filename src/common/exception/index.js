const DatabaseError = require('common/exceptions/database.error');
const TableNotFound = require('common/exceptions/tableNotFound.error');

module.exports.DatabaseError = DatabaseError;
module.exports.TableNotFoundError = TableNotFound;
