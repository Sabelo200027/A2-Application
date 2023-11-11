import './App.css';
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser,} from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { StudentList, StudentShow, StudentCreate } from './student';
//import { RoomList } from './rooms';

const pbProvider = PocketBaseProvider('https://symmetrical-space-pancake-69g4g55g7qp7347xj-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} >
      <Resource name="Student" list={StudentList} show={StudentShow} create={StudentCreate} edit={EditGuesser} />
    </Admin>
  )
}

export default App

