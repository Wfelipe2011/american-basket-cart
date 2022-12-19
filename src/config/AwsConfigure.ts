import * as AWS from "aws-sdk";

class AWSConfigure {
  private isLocal = process.env.IS_OFFLINE;
  constructor() {
    if (this.isLocal) {
        AWS.config.update({
            credentials: {
            accessKeyId: "test",
            secretAccessKey: "test",
            },
        });
    }
  }
  
  S3() {
    const s3config = {
        s3ForcePathStyle: true,
      };
    if (this.isLocal) {
        const host = "localhost";
        s3config['endpoint'] = new AWS.Endpoint(`http://${host}:4566`);
    }
    return new AWS.S3(s3config);
  }
}

export const awsConfigure = new AWSConfigure();