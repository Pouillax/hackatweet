const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // cherche un utilisateur par id dans la bdd
  content: String,        //max 280 caractères
  createdAt: Date,        // date de création du tweet
  isLiked: Boolean
});


const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;
