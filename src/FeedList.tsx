import { FlashList } from "@shopify/flash-list";
import { loremIpsum } from "lorem-ipsum";
import { View } from "react-native";
import { Button, Card, Paragraph, Text, Title } from "react-native-paper";

interface FeedItem{
  title: string,
  desc: string
}

const ITEMS: FeedItem[] = [];
for(let i = 0; i < 100; i++){
  ITEMS.push({
    title: loremIpsum({paragraphUpperBound: 7}),
    desc: loremIpsum()
  })
}

export function FeedItem({item}: {item: FeedItem}){
  return (
    <Card>
      <Card.Title title={item.title} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.desc}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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