module.exports = {
    friendlyName: "Snippet List",
    description: "Get snippet list",
    fn: function (inputs, exits) {

        const req = this.req;
        const res = this.res;

        //Validate incoming request
        req.validate({
            category: ["string"],
            page: ["number"],
            page_size: ["number"]
        }).then(async (params) => {
            try {
                const { name, category, page, page_size } = req.body;
                var db = sails.getDatastore().manager;
                db.collection(snippet.tableName).aggregate([
                    {
                        $match: {
                            $expr: {
                                $and: name ? [
                                    { $ne: [{ $indexOfCP: ["$video_snippet", name] }, -1] },
                                    { $ne: [{ $indexOfCP: ["$category", category] }, -1] }
                                ] : [
                                        { $ne: [{ $indexOfCP: ["$category", category] }, -1] }
                                    ]
                            }
                        }
                    },
                    { $skip: page === 1 || page === 0 ? 0 : (page - 1) * page_size },
                    { $limit: page_size }
                ]).toArray((err, data) => {
                    if (err) this.res.httpResponse({
                        status: sails.config.custom.constants.ERROR,
                        response: err && err.raw ? err.raw : err
                    });
                    else this.res.httpResponse({
                        status: sails.config.custom.constants.SUCCESS,
                        response: {
                            page,
                            data
                        }
                    });
                })
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