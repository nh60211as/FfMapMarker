import {
  LocationProvider,
  Router,
  Route,
} from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import { Header } from "./components/Header.js";
import "./index.css";
import { ROUTE_PREFIX } from "./Config.js";
import { render } from "preact";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path={`/${ROUTE_PREFIX}`} component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);
