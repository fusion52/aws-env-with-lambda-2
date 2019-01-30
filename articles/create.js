'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
// const uuid = require('uuid');
const createArticle = require('./model').createArticle;
const DynamoDAO = require('../util/dynamo-dao.js');
const ArticleController = require('./controller.js')

module.exports.handler = (event, context, callback) => {
  const article = createArticle(event, context, callback);
  const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
  const controller = new ArticleController(dynamoDAO);
  controller.createArticle(article, callback);
}

// module.exports.handler = (event, context, callback) => {

//   const myInput = JSON.stringify({ text: 'Go Serverless v1.0! Your function executed successfully!' });

//   // console.log(event);
//   // console.log(myInput);
//   // const data = JSON.parse(myInput);
//   // const data = JSON.parse(event);
//   const data = event;
//   console.log(data.text);

//   if (data.text && typeof data.text !== 'string') {
//     console.error('Validation Failed');
//     callback(new Error('Body did not contain a text property.'))
//     return;
//   }

//   const params = {
//     TableName: 'BlogTable',
//     Item: {
//       article_id: uuid.v1(),
//       text: data.text
//     }
//   };

//   const putCallback = (error, result) => {
//     if (error) {
//       console.error(error);
//       callback(new Error('Could not save record.'));
//       return;
//     }

//     // console.log(result);
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify(result.Item),
//     };
//     callback(null, response)
//   }

//   dynamo.put(params, putCallback);


// };
