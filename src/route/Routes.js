import { createStackNavigator } from "react-navigation";
import Home from '../Screen/Home';
import Detail from '../Screen/Detail'
const Routes = createStackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  },
});
export default Routes;