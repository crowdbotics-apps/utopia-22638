import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile173396Navigator from '../features/UserProfile173396/navigator';
import Tutorial173395Navigator from '../features/Tutorial173395/navigator';
import NotificationList173367Navigator from '../features/NotificationList173367/navigator';
import Settings173366Navigator from '../features/Settings173366/navigator';
import Settings173358Navigator from '../features/Settings173358/navigator';
import UserProfile173356Navigator from '../features/UserProfile173356/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile173396: { screen: UserProfile173396Navigator },
Tutorial173395: { screen: Tutorial173395Navigator },
NotificationList173367: { screen: NotificationList173367Navigator },
Settings173366: { screen: Settings173366Navigator },
Settings173358: { screen: Settings173358Navigator },
UserProfile173356: { screen: UserProfile173356Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
