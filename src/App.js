import './App.css';
import { AuthPage } from "./Components";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
    return (
        <Provider store={store}>
        <AuthPage />
        </Provider>
    );
}

export default App;
