import * as React from "react";
import { FriendComponent } from "./friend/friend";
import { IFriend, IFriends } from "./types";

export class FriendsList extends React.Component<IFriends, IFriends> {

  constructor(props) {
    super(props);
    const friends: IFriends = { friends: [{ name: 'saurabh', id: 222}, { name: 'Michale', id: 111}]};
    this.state = friends;
  }

  render() {
    const friends = this.state.friends.map((friend: IFriend) => {
      return (
        <FriendComponent key={friend.id} id={friend.id} name={friend.name} />
      );
    });
    return (
      <div>
        <h1>List of Friends!</h1>
        {friends}
      </div>
    );
  }

  componentDidMount() {
  }
}
