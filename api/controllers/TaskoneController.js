/**
 * TaskoneController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'Task One',
    description: 'Common tasks',
    fn: async function (req, res) {
        res.json({
            message: "Ping api working fine."
        });
    }
};

