const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    Reason: String,
    ReportedUser: String,
    ReportedUserID: String,
    ReportedBy: String,
    ReportedByID: String
});
module.exports = mongoose.model('Report', reportSchema, 'reports');