export class SystemResponse {
    /**
     * This is what we will call on the route handler.
     * We also make sure to catch any uncaught errors in the
     * implementation.
     */
    async execute(req, res) {
        try {
            await this.executeImpl(req, res);
        }
        catch (err) {
            console.log(`[SystemResponse]: Uncaught controller error`);
            console.log(err);
            this.fail(res, 'An unexpected error occurred');
        }
    }

    static jsonResponse(res, code, success, message) {
        return res.status(code).json({ 
            statusCode : code,
            success : success,
            message : message
        });
    }

    // Request processed successfully.
    ok(res, dto) {
        if (!!dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    }

    // Request successfully processed and document created.
    created(res, code, message, data) {
        // return res.sendStatus(201);
        return res.status(code).json({ 
            statusCode : code,
            success : true,
            message : message,
            data : data,
        });
    }

    // The query syntax is incorrect.
    clientError(res, message) {
        return SystemResponse.jsonResponse(res, 400, false, message ? message : 'Bad Request');
    }

    // Authentication is required to access the resource.
    unauthorized(res, message) {
        return SystemResponse.jsonResponse(res, 401, false, message ? message : 'Unauthorized');
    }

    // Payment required to access the resource.
    paymentRequired(res, message) {
        return SystemResponse.jsonResponse(res, 402, false, message ? message : 'Payment required');
    }

    // The server understands the request, but refuses to execute it.
    forbidden(res, message) {
        return SystemResponse.jsonResponse(res, 403, false, message ? message : 'Forbidden');
    }

    // Resource not found.
    notFound(res, message) {
        return SystemResponse.jsonResponse(res, 404, false, message ? message : 'Not found');
    }

    // The request cannot be processed due to a conflict with the current state of the server.
    conflict(res, message) {
        return SystemResponse.jsonResponse(res, 409, false, message ? message : 'Conflict');
    }

    // Many request do it by user.
    tooMany(res, message) {
        return SystemResponse.jsonResponse(res, 429, false, message ? message : 'Too many requests');
    }

    // Error Server.
    fail(res, error) {
        console.log(error);
        return SystemResponse.jsonResponse(
            res, 500,
            false,
            error.toString()
            )
        // return res.status(500).json({
        //     message: error.toString()
        // });
    }
}