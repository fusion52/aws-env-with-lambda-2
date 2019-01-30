'use strict';

module.exports = class DynanoDAO {
  constructor(docClient, table) {
    this.dynamo = docClient;
    this.table = table;
  }

  create(model, callback) {
    const params = {
      TableName: this.table,
      Item: model
    };
    // console.log('params: ', params);
    this.dynamo.put(params, (error, result) => {
      if (error) {
        // console.error(error);
        callback(new Error('Could not save item.'));
        return;
      }

      const response = {
        statusCode: 200,
        body: result.Item
      };
      callback(null, response);
    });
  }

  read(model, callback) {
    const params = {
      TableName: this.table,
      Key: {
        article_id: model.article_id
      }
    };
    // console.log('params is : ', params);
    this.dynamo.get(params, (error, result) => {
      if (error) {
        // console.error(error);
        callback(new Error('Could not get item.'));
        return;
      }

      const response = {
        statusCode: 200,
        body: result.Item
      };

      callback(null, response);
    });
  }

  update(model, callback) {
    const params = {
      TableName: this.table,
      Key: {
        article_id: model.article_id
      },
      UpdateExpression: 'set #name = :value',
      ExpressionAttributeNames: {
        '#name': 'text'
      },
      ExpressionAttributeValues: {
        ':value': model.text
      }
    };
    // console.log('params is : ', params);
    this.dynamo.update(params, (error, result) => {
      if (error) {
        // console.error(error);
        callback(new Error('Could not update item.'));
        return;
      }

      const response = {
        statusCode: 200,
        body: result.Item
      };

      callback(null, response);
    });
  }

  delete(model, callback) {
    const params = {
      TableName: this.table,
      Key: {
        article_id: model.article_id
      }
    };
    console.log('params: ', params)
    this.dynamo.delete(params, (error, result) => {
      if (error) {
        // console.error(error);
        callback(new Error('Could not delete item.'));
        return;
      }

      const response = {
        statusCode: 200,
        body: result.Item
      };

      callback(null, response);
    });
  }

}