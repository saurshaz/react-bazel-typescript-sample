
import * as React from "react";
import { IFriend, IFriends } from "../types";

export class FriendComponent extends React.Component<IFriend, IFriend> {
  render() {
    return (
      <div>
      	<p> Hello </p>
        {this.props.id} {this.props.name}
      </div>
    );
  }
}
