import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Appbar, BottomNavigation } from 'react-native-paper';
import FeedList from "./FeedList";

const MusicRoute = () => (
  <FeedList />
);

const AlbumsRoute = () => <Text>Albums 4</Text>;

const RecentsRoute = () => (
  <View>
    <Text>Recents</Text>
    <FastImage 
      style={{
        width: 200,
        height: 200
      }}
      source={{uri: 'https://picsum.photos/700'}}
    />
  </View>
);

const NotificationsRoute = () => <Text>Notifications</Text>;

export default function Main(){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  )
}