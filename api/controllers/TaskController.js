/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'Task',
    description: 'Common tasks',
    fn: async function (req, res) {
        this.res.json({
            message: "Ping api working fine."
        });
    }
};

