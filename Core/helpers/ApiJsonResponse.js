export class ApiJsonResponse{
    messageByDefaultSuccessFalse(message, statusCode = 404, error = null){
        return {
            statusCode: statusCode,
            success: false,
            message: message
        }
    }

    messageByDefaultSuccessTrue(message, statusCode = 200){
        return {
            statusCode: statusCode,
            success: true,
            message: message
        }
    }

    messageByDefaultSuccessTrueAndWithData(message, data, statusCode = 200){
        return {
            statusCode: statusCode,
            success: true,
            message: message,
            data: data
        }
    }


}

