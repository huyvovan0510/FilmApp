import React from "react";
import { RootNavigation } from "./src/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;
