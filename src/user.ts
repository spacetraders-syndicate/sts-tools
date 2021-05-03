import { UsersApi, CreateUserTokenResponse, Configuration } from '@spacetraders-syndicate/openapi-sdk';
import faker from 'faker';

export type User = CreateUserTokenResponse;

const basePath = process.env.PROD ? 'https://api.spacetraders.io' : 'https://staging.api.spacetraders.io';

export async function newUser(username?: string): Promise<User> {
    const configuration = new Configuration({
        basePath,
    });

    const usersClient = new UsersApi(configuration);
    const user = await usersClient.createUserToken({
        username: username ? username : faker.datatype.uuid(),
    });
    return user.data;
}

export async function newUserAndConfiguration(user?: User): Promise<{ user: User; config: Configuration }> {
    if (!user) user = await newUser();

    const config = new Configuration({
        accessToken: user.token,
        basePath,
    });

    return {
        user,
        config,
    };
}
