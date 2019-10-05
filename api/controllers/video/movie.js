module.exports = {
    friendlyName: "Create Movie",
    description: "Create Movie",
    fn: function (inputs, exits) {

        //Validate incoming request
        this.req.validate({
            name: ["string"],
            year: ["number"],
            hours: ["string"],
            minutes: ["string"],
            views: ["number"],
            movie_link: ["string"],
            thumbnail: ["string"],
            category: ["string"],
            tags: ["string"],
            gener: ["string"],
            release_date: ["string"],
            trailer_link: ["string"]
        }).then(async (params) => {
            try {
                const data = await movie.create(this.req.body)
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
                    response: data
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