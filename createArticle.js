const log = require('./log').log;
let articles = require('./articles.json');

module.exports.createArticle = function createArticle(req, res, payload, cb) {
	log('/api/articles/create', payload);
    payload.id = Date.now();
    articles.push(payload);
    cb(null, payload, 'application/json');
}