/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons
} from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  ColorSchemeName,
  View,
  Image,
  TouchableOpacityBase,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          elevation: 0
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: { fontWeight: "bold" }
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "NopeApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
                marginRight: 10
              }}
            >
              <Octicons
                name="search"
                size={22}
                color={Colors.light.background}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={Colors.light.background}
              />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route, navigation }) => ({
          title: route.params.user.name,
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                  justifyContent: "space-around",
                  
                }}
              >
                <MaterialIcons name="arrow-back" size={25} color="white" />
                <Image
                  style={{
                    width: 37,
                    height: 37,
                    marginLeft: 3,
                    marginRight: 10,
                    borderRadius: 20
                  }}
                  source={{ uri: route.params.user.imageUri }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View>
              
            </View>
          )
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
