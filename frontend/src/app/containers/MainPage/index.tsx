import axios from 'axios';
import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { STORE_ROUTER } from 'app/constants';
import { RouterStore } from 'app/stores';

export interface MainPageState {
  steamID: string;
}

@inject(STORE_ROUTER)
@observer
export class MainPage extends React.Component<{}, MainPageState> {
  private async submitSearch(steamID: string) {
    const routerStore = this.props[STORE_ROUTER] as RouterStore;

    try {
      const result = await axios.get(`http://localhost:3001/user/find/${steamID}`);
      routerStore.push(`/user/${result.data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  public render() {
    return (
      <div className={style.container}>
        <p>Steam User Traverser</p>
        <div className={style.search}>
          <input type="text" placeholder="Input user SteamID or unique ID"
            onChange={(e) => this.setState({ steamID: e.target.value })}
            onKeyDown={(e) => e.keyCode === 13 ? this.submitSearch(this.state.steamID) : null}
          />
          <button onClick={() => this.submitSearch(this.state.steamID)}>🔍</button>
        </div>
      </div>
    );
  }
}