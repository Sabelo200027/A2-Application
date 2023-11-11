
import './App.css';
import { Admin, Resource } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { TodoCreate, TodoEdit, TodoList, TodoShow } from "./todos";

const pbProvider = PocketBaseProvider('https://symmetrical-space-pancake-69g4g55g7qp7347xj-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} authProvider={pbProvider.authProvider}>
      <Resource name=""  recordRepresentation="" />
    </Admin>
  )
}

export default App

