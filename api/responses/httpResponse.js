/**
 * httpResponse.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.httpResponse();
 *     // -or-
 *     return res.httpResponse(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'httpResponse'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function httpResponse({ status, response }) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  switch (status) {
    case 'success':
      res.status(200)
        .json({
          status: 200,
          code: 1,
          data: response,
          message: "Success",
          emptyKeys: null,
          error: false
        })
      break;
    case 'err':
      res.status(501)
        .json({
          status: 501,
          code: 1,
          data: response,
          message: "Error",
          emptyKeys: null,
          error: true
        })
      break;
    case 'notValid':
      res.status(401)
        .json({
          code: 1,
          status: 401,
          data: response,
          message: "NotValid",
          emptyKeys: null,
          error: true
        })
      break;
    case 'notChanged':
      res.status(404)
        .json({
          code: 1,
          status: 404,
          data: response,
          message: "NotValid",
          emptyKeys: null,
          error: true
        })
      break;
    case 'present':
      res.status(409)
        .json({
          code: 1,
          status: 409,
          data: response,
          message: "Present",
          emptyKeys: null,
          error: true
        })
      break;
    case 'noValue':
      res.status(404)
        .json({
          code: 1,
          status: 404,
          data: response,
          message: "NoValue",
          emptyKeys: null,
          error: true
        })
      break;
    case 'notAuthorized':
      res.status(401)
        .json({
          code: 1,
          status: 401,
          data: response,
          message: "Not Authorized",
          emptyKeys: null,
          error: true
        })
      break;
    case 'badRequest':
      res.status(400)
        .json({
          code: 1,
          status: 400,
          data: response,
          message: "Bad REQUEST",
          emptyKeys: null,
          error: true
        })
      break;
    case "validationErr":
      res.status(422)
        .json({
          code: 1,
          status: 422,
          data: [],
          message: "ValidationError",
          emptyKeys: response,
          error: true
        })
      break;
    case "verificationErr":
      res.status(304)
        .json({
          code: 1,
          status: 304,
          data: [],
          message: "VarificationError",
          emptyKeys: response,
          error: true
        })
      break;
    case "emailPresent":
      res.status(409)
        .json({
          code: 1,
          status: 409,
          data: response,
          message: "EmailPresent",
          emptyKeys: [],
          error: true
        })
      break;
    case "forbidden":
      res.status(409)
        .json({
          code: 1,
          status: 409,
          data: response,
          message: "FORBIDDEN",
          emptyKeys: [],
          error: true
        })
      break;
    case "logedIn":
      res.status(200)
        .json({
          code: 1,
          status: 200,
          data: response,
          message: "LogedIn",
          emptyKeys: [],
          error: false
        })
      break;
    case "logedOut":
      res.status(200)
        .json({
          code: 1,
          status: 200,
          data: response,
          message: "LogedOut",
          emptyKeys: [],
          error: false
        })
      break;
    default:
      res.status(500)
        .json({
          code: 1,
          status: 500,
          data: response,
          message: "InternalServerError",
          emptyKeys: null,
          error: true
        })
  }
};
