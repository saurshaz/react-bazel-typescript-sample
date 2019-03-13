
import * as React from "react";


interface IFriend {
  name: string;
  id: number;
}

interface IFriends {
  friends:  IFriend[];
}


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
