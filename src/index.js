import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import ThemeList from "./native/theme.list";
import createStore from './store';
import Expo from "expo";

const store=createStore();

class App extends React.Component {

    render() {
        return <ReduxProvider store={store}>
            <ThemeList />
        </ReduxProvider>
    }
}

export default Expo.registerRootComponent(App);