#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TempSdkStackStack } from '../lib/temp_sdk_stack-stack';

const app = new cdk.App();
new TempSdkStackStack(app, 'TempSdkStackStack', {});