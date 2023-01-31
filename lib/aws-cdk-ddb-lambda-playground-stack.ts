import * as cdk from 'aws-cdk-lib'
import {
  aws_dynamodb as dynamodb,
  aws_apigateway as apigw,
  aws_lambda as lambda
} from 'aws-cdk-lib'
import { Construct } from 'constructs'
// import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkDdbLambdaPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const userTableSchema: dynamodb.TableProps = {
      tableName: 'aws-cdk-lambda-playground-user-db-table',
      partitionKey: {
        name: 'email',
        type: dynamodb.AttributeType.STRING
      }
    }

    const userTable = new dynamodb.Table(
      this,
      'aws-cdk-lambda-playground-user-db-table-id',
      userTableSchema
    )

    const userLamnda = new lambda.Function(
      this,
      'aws-cdk-lambda-playground-labmda',
      {
        functionName: 'aaws-cdk-lambda-playground-user',
        code: new lambda.AssetCode('src/handler/'),
        handler: 'get-all-users.handler',
        runtime: lambda.Runtime.NODEJS_14_X,
        environment: {
          TABLE_NAME: userTable.tableName
        }
      }
    )

    userTable.grantWriteData(userLamnda)
  }
}
