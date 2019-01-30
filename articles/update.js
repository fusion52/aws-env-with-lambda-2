'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const updateArticle = require('./model').updateArticle;
const DynamoDAO = require('../util/dynamo-dao.js');
const ArticleController = require('./controller.js')

module.exports.handler = (event, context, callback) => {
  const article = updateArticle(event, context, callback);
  const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
  const controller = new ArticleController(dynamoDAO);
  controller.updateArticle(article, callback);
}


// 'use strict';

// module.exports.handler = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Update article.',
//     }), 
//   };
//   callback(null, response)
// };
