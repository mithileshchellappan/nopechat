import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "@aws-amplify/core";
import config from "./src/aws-exports";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";
import { getUser } from "./src/graphql/queries";
Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true
      });
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.atributes.sub })
        );
        console.log('wow',userData);
      }
    };
    fetchUser();
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
