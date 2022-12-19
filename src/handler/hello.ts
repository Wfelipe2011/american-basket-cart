import { awsConfigure } from "../config/AwsConfigure";

export async function hello(event: any) {
  const data = await  awsConfigure.S3().listBuckets().promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from serverless-aws-nodejs-typescript!',
        buckets: data.Buckets
      },
      null,
      2
    ),
  };
};
