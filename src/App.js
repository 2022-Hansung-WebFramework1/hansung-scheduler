import { NextUIProvider } from "@nextui-org/react";
import Header from "components/Header";
import Background from "components/Background";
import Main from "pages/Main";

function App() {
    return (
        <NextUIProvider>
            <Header />
            <Main />
            <Background />
        </NextUIProvider>
    );
}

export default App;