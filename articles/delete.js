'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const deleteArticle = require('./model').deleteArticle;
const DynamoDAO = require('../util/dynamo-dao.js');
const ArticleController = require('./controller.js')

module.exports.handler = (event, context, callback) => {
  const article = deleteArticle(event, callback);
  const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
  const controller = new ArticleController(dynamoDAO);
  controller.deleteArticle(article, callback);
}

// 'use strict';

// module.exports.handler = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Delete article.',
//     }), 
//   };
//   callback(null, response)
// };
