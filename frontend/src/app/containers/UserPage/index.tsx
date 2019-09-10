import * as React from 'react';
import axios from 'axios';
import * as style from './style.css';

export interface UserPageProps {
  match: any;
}

export interface UserPageState {
  summary: {
    avatar: {
      small: string;
    };
    steamID: string;
    url: string;
    nickname: string;
  }
}

export class UserPage extends React.Component<UserPageProps, UserPageState> {
  public state = {
    summary: undefined,
  }

  public async componentDidMount() {
    try {
      const result = await axios.get(`http://localhost:3001/user/profile/${this.props.match.params.id}`);
      this.setState({ summary: result.data });
    } catch (error) {
      throw new Error(error);
    }
  }

  public render() {
    return (
      <div className={style.container}>
        <p>Usergraph for: { this.state.summary ? this.state.summary.nickname : this.props.match.params.id }</p>
        <div className={style.graphArea}>

        </div>
      </div>
    );
  }
}