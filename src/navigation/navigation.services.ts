import {
  Route,
  StackActions,
  CommonActions,
  NavigationContainerRef,
} from "@react-navigation/native";
import { Keyboard } from "react-native";
import { RootStackParamList } from "./RootNavigation";

const RootNavigatorConfig: {
  current?: NavigationContainerRef<RootStackParamList>;
} = {
  current: undefined,
};

const setNavigatorRef = (
  navigationRef: NavigationContainerRef<RootStackParamList> | null
) => {
  if (navigationRef) {
    RootNavigatorConfig.current = navigationRef;
  }
};

export const navigateAndReplace = <RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) => {
  if (RootNavigatorConfig.current) {
    RootNavigatorConfig.current.dispatch(StackActions.replace(name, params));
  }
};

const navigate = <RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?:
    | RootStackParamList[RouteName]
    | {
        screen?: RouteName;
        params?: RootStackParamList[RouteName];
      },
  key?: string
) => {
  if (RootNavigatorConfig.current) {
    const options: any = { name };
    //
    if (params) {
      options.params = params;
    }
    if (key) {
      options.key = key;
    }
    //
    RootNavigatorConfig.current.dispatch(CommonActions.navigate(options));
  }
};

const push = <RouteName extends keyof RootStackParamList>(
  routeName: RouteName,
  params?: RootStackParamList[RouteName]
) => {
  if (RootNavigatorConfig.current) {
    RootNavigatorConfig.current.dispatch(StackActions.push(routeName, params));
  }
};

const goBack = () => {
  if (RootNavigatorConfig.current && canGoBack()) {
    Keyboard.dismiss();
    RootNavigatorConfig.current.goBack();
  }
};

const canGoBack = () => {
  return (
    !!RootNavigatorConfig.current && RootNavigatorConfig.current.canGoBack()
  );
};

const navigateAndReset = <RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) => {
  if (RootNavigatorConfig.current && name !== getCurrentRouteName()) {
    RootNavigatorConfig.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
};

const navigateAndResetRoutes = (routes: Omit<Route<string>, "key">[]) => {
  if (RootNavigatorConfig.current) {
    RootNavigatorConfig.current.dispatch(CommonActions.reset({ routes }));
  }
};

const resetToRoute = (initRoute: string, routes: Route<string>[]) => {
  if (RootNavigatorConfig.current) {
    RootNavigatorConfig.current.dispatch((state) => {
      const latestRoutes = state.routes.filter((r) => r.name === initRoute);
      //
      latestRoutes.push(...routes);
      //
      return CommonActions.reset({
        ...state,
        routes: latestRoutes,
        index: latestRoutes.length - 1,
      });
    });
  }
};

const getCurrentRouteName = () => {
  const currentRoute = RootNavigatorConfig.current?.getCurrentRoute();
  return currentRoute?.name;
};

const removeRoutesFromStack = (exceptRoutes: string[]) => {
  if (RootNavigatorConfig.current) {
    RootNavigatorConfig.current.dispatch((state) => {
      const latestRoutes = state.routes.filter(
        (route) => !exceptRoutes.includes(route.name)
      );
      return CommonActions.reset({
        ...state,
        routes: latestRoutes,
        index: latestRoutes.length - 1,
      });
    });
  }
};

export {
  push,
  goBack,
  canGoBack,
  navigate,
  resetToRoute,
  navigateAndReset,
  setNavigatorRef,
  navigateAndResetRoutes,
  RootNavigatorConfig,
  removeRoutesFromStack,
  getCurrentRouteName,
};
