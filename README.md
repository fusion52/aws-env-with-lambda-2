
This project is a serverless example showing how to create articles with endpoints POST, GET, UPDATE, and DELETE.  
The service uses Amazon API Gateway, Lambda, DynamoDB, and NodeJS.

Amazon API Gateway
  /articles
    DELETE
    GET
    OPTIONS
    POST
    PUT

AWS Lambda
  aws-env-with-lambda-2-dev-createArticle
  aws-env-with-lambda-2-dev-deleteArticle
  aws-env-with-lambda-2-dev-readArticle
  aws-env-with-lambda-2-dev-updateArticle

AWS DynamoDB
  Table:  BlogTable


Service Information
service: aws-env-with-lambda-2
stage: dev
region: us-east-1
stack: aws-env-with-lambda-2-dev
api keys:
  None
endpoints:
  POST - https://abc123.execute-api.us-east-1.amazonaws.com/dev/articles
  GET - https://abc123.execute-api.us-east-1.amazonaws.com/dev/articles
  PUT - https://abc123.execute-api.us-east-1.amazonaws.com/dev/articles
  DELETE - https://abc123.execute-api.us-east-1.amazonaws.com/dev/articles
functions:
  createArticle: aws-env-with-lambda-2-dev-createArticle
  readArticle: aws-env-with-lambda-2-dev-readArticle
  updateArticle: aws-env-with-lambda-2-dev-updateArticle
  deleteArticle: aws-env-with-lambda-2-dev-deleteArticle
layers:
  None

