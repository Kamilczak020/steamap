import { STORE_ROUTER } from 'app/constants';
import { History } from 'history';
import { RouterStore } from './routerStore';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);

  return {
    [STORE_ROUTER]: routerStore,
  };
}
