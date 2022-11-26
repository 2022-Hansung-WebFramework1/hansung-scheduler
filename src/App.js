import { NextUIProvider } from "@nextui-org/react";
import Main from "pages/Main";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <NextUIProvider>
                <Main />
            </NextUIProvider>
        </RecoilRoot>
    );
}

export default App;