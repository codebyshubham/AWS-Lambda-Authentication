class DatabaseError extends Error {
  constructor(message, detail) {
    super(message);
    this.message = message;
    this.detail = detail || message;
    this.name = this.constructor.name;
    this.statusCode = 500;
  }
}

module.exports = DatabaseError;
