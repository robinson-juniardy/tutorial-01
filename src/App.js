// import logo from './logo.svg';
import "./App.css";
import UserProvider from "./context/UserContext";
import MainRoutes from "./routing/MainRoutes";

function App() {
  return (
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  );
}

export default App;
