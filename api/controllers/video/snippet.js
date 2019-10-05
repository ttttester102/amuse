module.exports = {
    freindlyName: "Video Clip",
    description: "Upload video clip",
    fn: function (inputs, exits) {

        //Validate incoming request
        this.req.validate({
            name: ["string"],
            year: ["number"],
            hour: ["string"],
            minutes: ["string"],
            views: ["number"],
            video_snippet: ["string"],
            thumbnail: ["string"],
            category: { enum: ["animated", "comedy", "movie clips", "motivational"] },
            tags: ["array"]
        }).then(async (params) => {
            try {
                const data = await snippet.create(this.req.body)
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