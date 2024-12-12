module.exports = {
    createErrorMessage : (error) => {
        return {
            message : error.message || error.m,
            code: error.errorCode || error.code || 500,
            success: false
        }
    },
    sendError: (res, error) => {
        console.error(error);
        res.status(error.errorCode || 503).json({ errorCode: error.errorCode, message: error.message, success: false });
    }
}