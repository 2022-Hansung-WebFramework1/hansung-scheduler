import './App.css';

import { NextUIProvider } from "@nextui-org/react";
import Header from "page/Section/Header";
import Nav from 'page/Section/Nav';
import Main from "page/Main";
import { RecoilRoot } from "recoil";
import Background from 'page/Section/Background';

function App() {
  return (
    <div className="App">
      <RecoilRoot>

        <NextUIProvider>
          <Background />
          <Header />
          <Nav />
          <Main />
        </NextUIProvider>

      </RecoilRoot>
    </div>
  );
}

export default App;
