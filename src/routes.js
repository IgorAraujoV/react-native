import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/main";
import Product from "./pages/product";

const Stack = createStackNavigator(
{
    Home: Main,
    Product
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fefefe',
            alignSelf: "center",
            textAlign: "center"
        }
        
    },
}
);

const AppRoute = createAppContainer(Stack);
export default AppRoute;