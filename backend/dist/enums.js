export var httpStatusCode;
(function (httpStatusCode) {
    httpStatusCode[httpStatusCode["Ok200"] = 200] = "Ok200";
    httpStatusCode[httpStatusCode["Created201"] = 201] = "Created201";
    httpStatusCode[httpStatusCode["NoContent204"] = 204] = "NoContent204";
    httpStatusCode[httpStatusCode["BadRequest400"] = 400] = "BadRequest400";
    httpStatusCode[httpStatusCode["Unauthorizated401"] = 401] = "Unauthorizated401";
    httpStatusCode[httpStatusCode["NotFound404"] = 404] = "NotFound404";
})(httpStatusCode || (httpStatusCode = {}));
export var role;
(function (role) {
    role["admin"] = "ADMIN";
    role["user"] = "USER";
})(role || (role = {}));
export var gender;
(function (gender) {
    gender["man"] = "man";
    gender["woman"] = "woman";
})(gender || (gender = {}));
//# sourceMappingURL=enums.js.map