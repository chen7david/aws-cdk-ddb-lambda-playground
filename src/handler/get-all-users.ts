import * as AWS from 'aws-sdk'
import { DynamoDB, Lambda, AWSError } from 'aws-sdk'
const ddb = new DynamoDB.DocumentClient()

export const handler = async () => {
  const tableName: string = process.env.TABLE_NAME || ''

  const putQuery = {
    TableName: tableName,
    Item: {
      email: 'chen7david',
      friends: [1, 2, 3, 4]
    }
  }

  const getQuery = {
    TableName: tableName,
    Key: {
      PartitionKey: 'chen7david'
    }
  }

  try {
    await ddb.put(putQuery).promise()
    const data = await ddb.get(getQuery)
    return { statusCode: 200, body: JSON.stringify(data) }
  } catch (error) {
    return { statusCode: 500, body: error }
  }
}
