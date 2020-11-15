import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList173603Navigator from '../features/NotificationList173603/navigator';
import Settings173602Navigator from '../features/Settings173602/navigator';
import Settings173594Navigator from '../features/Settings173594/navigator';
import UserProfile173592Navigator from '../features/UserProfile173592/navigator';
import UserProfile173468Navigator from '../features/UserProfile173468/navigator';
import Tutorial173467Navigator from '../features/Tutorial173467/navigator';
import NotificationList173439Navigator from '../features/NotificationList173439/navigator';
import Settings173438Navigator from '../features/Settings173438/navigator';
import Settings173430Navigator from '../features/Settings173430/navigator';
import UserProfile173428Navigator from '../features/UserProfile173428/navigator';
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
NotificationList173603: { screen: NotificationList173603Navigator },
Settings173602: { screen: Settings173602Navigator },
Settings173594: { screen: Settings173594Navigator },
UserProfile173592: { screen: UserProfile173592Navigator },
UserProfile173468: { screen: UserProfile173468Navigator },
Tutorial173467: { screen: Tutorial173467Navigator },
NotificationList173439: { screen: NotificationList173439Navigator },
Settings173438: { screen: Settings173438Navigator },
Settings173430: { screen: Settings173430Navigator },
UserProfile173428: { screen: UserProfile173428Navigator },
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
