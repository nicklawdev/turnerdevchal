const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TitleSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    Awards: {
        type: Array,
    },
    Genres: {
        type: Array,
    },
    KeyGenres: {
        type: Array,
    },
    Keywords: {
        type: Array,
    },
    OtherNames: {
        type: Array,
        required: true
    },
    Participants: {
        type: Array,
    },
    ReleaseYear: {
        type: Number,
    },
    Storylines: {
        type: Array,
    },
    TitleId: {
        type: Number,
    },
    TitleName: {
        type: String,
    },
    TitleNameSortable: {
        type: String,
    },
});

module.exports = Title = mongoose.model('title', TitleSchema, 'Titles');