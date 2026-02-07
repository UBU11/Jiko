import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen({ route }) {
  const navigation = useNavigation();


  React.useEffect(() => {
    if (route.params?.post) {

      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create post
      </Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ route }) {
  const navigation = useNavigation();
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {

          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
      </Button>
    </>
  );
}


const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerStyle: {backgroundColor: '#A5C89E'}

    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
