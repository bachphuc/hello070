import { FlashList } from "@shopify/flash-list";
import { loremIpsum } from "lorem-ipsum";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { Button, Card, Paragraph, Text, Title } from "react-native-paper";

interface FeedItem{
  title: string,
  desc: string
  cover: string,
  image: string,
}

const ITEMS: FeedItem[] = [];
for(let i = 0; i < 100; i++){
  ITEMS.push({
    title: loremIpsum({paragraphUpperBound: 7}),
    desc: loremIpsum(),
    cover: `https://picsum.photos/700?t=cover_${i + 1}_${Date.now()}`,
    image: `https://picsum.photos/700?t=img_${i + 1}_${Date.now()}`
  })
}

export function FeedItem({item}: {item: FeedItem}){
  return (
    <Card>
      <Card.Title title={item.title} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.desc}</Paragraph>
        <FastImage
          source={{uri: item.image}}
          style={{
            width: '100%',
            aspectRatio: 16/9
          }}
         />
      </Card.Content>
      <Card.Cover source={{ uri: item.cover }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
}

export default function FeedList(){

  const renderItem = ({item}: {item: FeedItem}) => {
    return (
      <FeedItem
        item={item}
      />
    )
  }

  return (
    <FlashList
      renderItem={renderItem}
      data={ITEMS}
      estimatedItemSize={200}
     />
  )
}