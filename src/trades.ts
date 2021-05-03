import { GameApi } from '@spacetraders-syndicate/openapi-sdk';
import { sleep } from './utils';

const TEST_TIMEOUT = 10000;

export async function status() {
    await sleep();
}

// const gameapi = new GameApi();

// export async function run() {
//   const { data: { status: mememe } } = await gameapi.getGameStatus()
//   try {
//     const response = await gameapi.getGameStatus()
//     response.data.status
//     const me = response.data?.status
//     console.log(mememe)
//   }
//   catch (e) {
//     console.log(e, "shit broke son")
//   }
// }

// run()
