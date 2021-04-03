import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  StyleSheet, Text
} from 'react-native';
import _ from 'lodash';

const HeaderTitle = ({txt}: {txt: string}) => {
  return <Text style={{color: 'white'}}>{txt}</Text>;
};

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer
      theme={{...DefaultTheme, dark: false}}
      >
      <Stack.Navigator
        screenOptions={() => ({...TransitionPresets.SlideFromRightIOS})}>
        <Stack.Screen
          key={1}
          name={'SearchScreen'}
          component={require('../views/Search').default}
          options={{
            headerShown: true,
            headerTitle: () => <HeaderTitle txt={'Serasi Autoraya'} />,
            headerStyle: styles.headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'gray',
    height: 40
  },
});
