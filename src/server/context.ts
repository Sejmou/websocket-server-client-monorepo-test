import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/adapters/node-http';
import { IncomingMessage } from 'http';
import ws from 'ws';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (
  opts:
    | trpcNext.CreateNextContextOptions
    | NodeHTTPCreateContextFnOptions<IncomingMessage, ws>,
) => {
  // TODO: do something meaningful here
  // logic for fetching user session was here before
  // for now I don't need anything like that
  return {
    user: {
      name: createRandomUserName(),
    },
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

function createRandomUserName() {
  return 'User +' + Math.random().toString(36).substring(7);
}
