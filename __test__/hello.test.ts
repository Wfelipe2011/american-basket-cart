import { hello } from '../src/handler/hello';

describe('hello', () => {
    test('Deve invocar hello', async () => {
        const result = await hello(null);
        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual(JSON.stringify({ message:"Hello from serverless-aws-nodejs-typescript!" }, null, 2));
    });
    }
);