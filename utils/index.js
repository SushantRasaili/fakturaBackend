export class ErrorResponse extends Error {
  statusCode;
  messages;
  constructor(messages, statusCode) {
    super();
    this.messages = messages;
    this.statusCode = statusCode;
  }
}
