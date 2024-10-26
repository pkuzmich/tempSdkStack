import * as cdk from 'aws-cdk-lib';
import type { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';

export class TempSdkStackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaNodejs.NodejsFunction(this, 'timeOfDay', {
      entry: './lambda/timeOfDay.js',
      handler: 'index',
      runtime: lambda.Runtime.NODEJS_20_X,
    });
  }
}
