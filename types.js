export const RootStackParamList = {
    Root: undefined,
    NotFound: undefined,
    Contacts: undefined,
    ChatRoom: undefined
  };

  export const BottomTabParamList = {
    Likes: undefined,
    Chats: undefined,
    Profile: undefined,
    Search: undefined
  };

  export const TabOneParamList = {
    TabOneScreen: undefined
  };

  export const TabTwoParamList = {
    TabTwoScreen: undefined
  };

  export const User = {
    id: String,
    name: String,
    imageUri: String,
    status: String
  };

  export const Message = {
    id: String,
    content: String,
    createdAt: String,
    user: User
  };

  export const ChatRoom = {
    id: String,
    users: [User],
    lastMessage: Message
  };
