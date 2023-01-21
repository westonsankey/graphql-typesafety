import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { Books } from "./Books";
import { getApolloClient } from "./lib/getApolloClient";

function App() {
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
