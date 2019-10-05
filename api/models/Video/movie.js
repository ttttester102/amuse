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
        hours: {
            type: 'string',
            required: true,
            isIn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        minutes: {
            type: 'string',
            required: true,
            isIn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
        },
        movie_link: {
            type: 'string',
            unique: true,
            required: true
        },
        category: {
            type: 'string',
            required: true,
            isIn: ["bollywood", "pollywood", "tollywood", "animated"]
        },
        tags: {
            type: 'ref',
            custom: function(value){
                if(!value || value && !value.length) return false;
                
                //Items should be in string
                if(value.filter(ele => typeof ele !== 'string').length === 0) return false;
                
                return true;
            },
            required: true
        },
        thumbnail: {
            type: 'string',
            required: true
        },
        gener: {
            type: 'string',
            required: true,
            isIn: ["Action",  "Adventure", "Comedy", "Crime", "Drama", "Fantasy", "Historical", "Horror", "Magical realism", "Mystery", "Paranoid fiction", "Philosophical", "Political", "Romance", "Saga", "Satire", "Science fiction", "Social", "Speculative",  "Thriller", "Urban", "Western", "Animation"]
        },
        release_date: {
            type: 'string',
            required: true
        },
        trailer_link: {
            type: 'string',
            required: true
        }
    }
}