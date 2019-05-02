module.exports = {
    "statusCodeMessage": {
        "OK": {
            "Code": 200,
            "Message": "OK"
        },
        "Created": {
            "Code": 201,
            "Message": "Created"
        },
        "Accepted": {
            "Code": 202,
            "Message": "Accepted"
        },
        "NoContent": {
            "Code": 204,
            "Message": "No Content"
        },
        "NotModified": {
            "Code": 304,
            "Message": "Not Modified"
        },
        "BadRequest": {
            "Code": 400,
            "Message": "Created"
        },
        "Unauthorized": {
            "Code": 401,
            "Message": "Unauthorized"
        },
        "Forbidden": {
            "Code": 403,
            "Message": "Forbidden"
        },
        "Not-Found": {
            "Code": 404,
            "Message": "Not Found"
        },
        "Conflict": {
            "Code": 409,
            "Message": "Conflict"
        },
        "NotAcceptable": {
            "Code": 406,
            "Message": "Not-Acceptable"
        },
    },
    "statusCode": {
        "OK": 200,
        "Created": 201,
        "Accepted": 202,
        "NoContent": 204,
        "NotModified": 304,
        "BadRequest": 400,
        "Unauthorized": 401,
        "Forbidden": 403,
        "NotFound": 404,
        "Conflict": 409,
        "NotAcceptable": 406
    },
    messages: {
        "success": "Success",
        "failed": "Failed"
    },
    validationMessages: {
        "emailAlreadyExist": "Email ID already exists, please try again with another.",
        "propertyAlreadyAssign": "Property already Assigned",
        "titleAlreadyExist": "Title already exist, try with another.",
        "usernameAlreadyExist": "Username already exist, try with another.",
        "emailRequired": "Email is required.",
        "firstnameRequired": "First name is required.",
        "passwordRequired": "Password is required.",
        "deviceTypeRequired": "Device type is required.",
        "deviceIdRequired": "Device id is required.",
        "deviceTokenRequired": "Device token is required.",
        "invalidEmail": "Invalid Email Given.",
        "invalidEmailOrPassword": "Invalid email or password.",
        "accountdeleted": "Your account has been deleted by admin.",
        "accountdeactivetd": "Your account has been deactivated by admin.",
        "internalError": "Internal error.",
        "requiredFieldsMissing": "Required fields missing.",
        "emailNotExist": "Email doesn't exist.",
        "userNotFound": "Contractor not found.",
        "incidentNotFound": "Incident not found.",
        "passwordNotMatch": "New password cannot not be the same as the old password.",
        "invalidDeviceType": "Invalid device type, It should be Android or iOS.",
        "noRecordFound": "No record found.",
        "pageNotFound": "Page not found.",
        "dataNotFound": "No record found.",
    }


}
