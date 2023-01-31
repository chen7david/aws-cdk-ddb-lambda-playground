import * as AWS from 'aws-sdk'
import { DynamoDB, Lambda, AWSError } from 'aws-sdk'
const ddb = new DynamoDB.DocumentClient()

export const handler = async () => {
  const tableName: string = process.env.TABLE_NAME || ''

  const params = {
    TableName: tableName,
    Item: {
      email: 'chen7david',
      friends: [1,2,3,4]
    }
  }

  try {
    await ddb.put(params).promise()
    return { statusCode: 200, body: 'Item added successfully' }
  } catch (error) {
    return { statusCode: 500, body: error }
  }
}
