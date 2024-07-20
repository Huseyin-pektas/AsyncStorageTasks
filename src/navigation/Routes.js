import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenName from "../constants/ScreenName";
import { NavigationContainer } from "@react-navigation/native";
import { AddTaskScreen, OnboardindScreen, SplashScreen, TaskListScreen } from "../pages";
import colors from "../themes/Colors";

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        
            <Stack.Navigator
            initialRouteName="TaskList"
        screenOptions={{
            headerStyle:{
                backgroundColor:colors.background.primary
            },
            headerTintColor:colors
        }}
            >
                <Stack.Screen name={ScreenName.splash} component={SplashScreen} />
                <Stack.Screen options={{
                    headerShown:false
                }}name={ScreenName.taskList} component={TaskListScreen} />
                <Stack.Screen options={{
                    headerShown:false
                }}name={ScreenName.addTask} component={AddTaskScreen} />
                <Stack.Screen options={{
                    headerShown:false
                }}name={ScreenName.onboarding} component={OnboardindScreen} />
            </Stack.Navigator>
        
    )
}

export default Routes
