#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { AwsCdkDdbLambdaPlaygroundStack } from '../lib/aws-cdk-ddb-lambda-playground-stack'

const app = new cdk.App()
new AwsCdkDdbLambdaPlaygroundStack(app, 'AwsCdkDdbLambdaPlaygroundStack', {
  stackName: 'aws-cdk-ddb-lambda-playground-stack',
  env: { region: 'ca-central-1' }
})
