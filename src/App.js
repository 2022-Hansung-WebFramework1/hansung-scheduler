import './App.css';

import { NextUIProvider } from "@nextui-org/react";
import Header from "component/MainPage/Header";
import Background from "component/MainPage/Background";
import Main from "page/Main";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <NextUIProvider>
          <Header />

          <Main />

          <Background />
        </NextUIProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
