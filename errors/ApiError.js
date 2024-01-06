class BaseError extends Error {
  constructor(name, description, statusCode, statusMessage) {
    super(description);
    
    this.name = name;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    Error.captureStackTrace(this, this.constructor));
  }
}
