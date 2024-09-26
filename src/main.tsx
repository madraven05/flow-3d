import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ViewProvider } from "./components/context/view-context.tsx";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ViewProvider>
          <App />
        </ViewProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
