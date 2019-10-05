/**
 * Video/snippet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    year: {
      type: 'number',
      required: true
    },
    hour: {
      type: 'string',
      required: true,
      isIn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    minutes: {
      type: 'string',
      required: true,
      isIn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    },
    views: {
      type: 'string',
      required: true
    },
    video_snippet: {
      type: 'string',
      unique: true,
      required: true
    },
    category: {
      type: 'string',
      required: true,
      isIn: ["animated", "comedy", "movie clips", "motivational"]
    },
    tags: {
      type: 'json',
      custom: function (value) {
        if (!value || value && !value.length) return false;

        //Items should be in string
        if (value.filter(ele => typeof ele !== 'string').length !== 0) return false;

        return true;
      },
      required: true
    },
    thumbnail: {
      type: 'string',
      required: true
    }
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

