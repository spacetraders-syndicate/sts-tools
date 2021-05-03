import { Configuration } from '@spacetraders-syndicate/openapi-sdk';
import { User, newUser, newUserAndConfiguration } from '../src/user';
import { sleep } from '../src/utils';

const TEST_TIMEOUT = 10000;

describe('user', () => {
    let config: Configuration;
    let user: User;

    beforeAll(async () => {
        await sleep();
    }, TEST_TIMEOUT);

    it('fetches a new user', async () => {
        const response = newUserAndConfiguration();
        config = (await response).config;
        user = (await response).user;
        expect(user.user.username.length).toBeGreaterThanOrEqual;
    });
});
