import { createRoot } from "react-dom/client";
import App from "./App";
import Layout from "./layout";
import { HashRouter, Routes, Route } from "react-router-dom";
import Name from "./names";
import Detail from"./Detail";
import Addlaptop from "./Addlaptop";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path="/name" element={<Name />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
          <Route path="/addlaptop" element={<Addlaptop />}></Route>
          <Route path="/addlaptop/:id" element={<Addlaptop />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </>  
);