class TableNotFound extends Error {
  constructor(message, detail) {
    super(message);
    this.message = message || 'Table Name missing in schema';
    this.detail = detail;
    this.name = this.constructor.name;
    this.statusCode = 500;
  }
}

module.exports = TableNotFound;
