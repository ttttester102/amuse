module.exports = {
    friendlyName: "Snippet List",
    description: "Get snippet list",
    fn: function (inputs, exits) {

        const req = this.req;
        const res = this.res;

        //Validate incoming request
        req.validate({
            page: ["number"],
            page_size: ["number"]
        }).then(async (params) => {
            try {
                const { page, page_size } = req.body;
                const data = await snippet.find({
                    skip: page === 1 || page === 0 ? 0 : (page - 1) * page_size,
                    limit: page_size,
                    sort: "createdAt DESC"
                })
                    .intercept((err) => {
                        switch (err.code) {
                            case 'E_INVALID_NEW_RECORD':
                                return {
                                    code: err.code,
                                    message: err.details
                                };
                            case 'E_UNIQUE':
                                return {
                                    code: err.code,
                                    message: err.message
                                }
                            default:
                                return err;
                        }
                    });

                return this.res.httpResponse({
                    status: sails.config.custom.constants.SUCCESS,
                    response: {
                        page,
                        data
                    }
                });
            } catch (err) {
                return this.res.httpResponse({
                    status: sails.config.custom.constants.ERROR,
                    response: err && err.raw ? err.raw : err
                });
            }
        }).catch(err => {
            return this.res.httpResponse({
                status: sails.config.custom.constants.VALIDATE_ERROR,
                response: err && err.raw ? err.raw : err
            });
        });
    }
}