export default class ErrorResponse extends Error {
  statusCode;
  messages;
  constructor(messages, statusCode) {
    super(Array.isArray(messages) ? messages.join(", ") : messages);

    this.messages = messages;
    this.statusCode = statusCode;
  }
}
