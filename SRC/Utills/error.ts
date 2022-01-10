export default class ErrorHandler extends Error {
    statusCode: any;
    message: any;
    constructor(statusCode: any, message: any) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
