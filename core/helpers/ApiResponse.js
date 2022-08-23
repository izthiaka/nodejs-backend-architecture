class ApiResponse{

    constructor(statusCode, success, message, data){

    }

    Send(res){
        res.status(statusCode).json({
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            data: this.data
        })
    }


}

export class BadRequest extends ApiResponse {
    constructor(error_message){
        super(ResponseStatus.BAD_REQUEST, false, error_message, null)
    }
}


export class SuccessRequest extends ApiResponse {
    constructor(error_message){
        super(ResponseStatus.SUCCESS, true, error_message, null)
    }
}


export class SuccessRequestResult extends ApiResponse {
    constructor(success_message){
        super(ResponseStatus.SUCCESS, true, success_message, data)
    }
}
