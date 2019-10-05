module.exports = async function (req, res, proceed) {

    var auth_token = await sails.helpers.auth.headerToken();
    req.authorization_token = auth_token;

    if (auth_token === req.headers.authorization)
        return proceed();

    return res.unauthorized();
}