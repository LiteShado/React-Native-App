import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
// import { View } from '../components/Themed';
import ChatListItem from '../../components/Chat/ChatListItem';
// import {
//   API,
//   graphqlOperation,
//   Auth,
// } from 'aws-amplify';

// import chatRooms from '../data/ChatRooms';
// import NewMessageButton from "../components/NewMessageButton";
import {useEffect, useState} from "react";
import { render } from 'react-dom';

// import { getUser } from './queries';

// export default function ChatsScreen() {
// should I export as function?


export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
        console.log(userData.data.getUser.chatRoomUser.items);

      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return(
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}
