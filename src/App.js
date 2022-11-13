import {NextUIProvider} from "@nextui-org/react";
import Header from "components/Header";
import Background from "components/Background";
import Main from "pages/Main";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Background />
        </>
    );
}

export default App;