import { createRoot } from "react-dom/client";
import App from "./app/ui/App.tsx";

import "@/common/styles/global.scss";
import { BrowserRouter } from "react-router";
import { store } from "./app/model/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
