import Header from "./Layout/Header/Header";
import { Route, Routes } from "react-router";
import CounterPage from "./pages/CounterPage/CounterPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Main from "./Layout/Main/Main";
import UserPage from "./pages/UserPage/UserPage";

function App() {
   return (
      <>
         <Header />
         <Main>
            <Routes>
               <Route path="/" element={<CounterPage />} />
               <Route path="/users" element={<UsersPage />} />
               <Route path="/user" element={<UserPage />} />
            </Routes>
         </Main>
      </>
   );
}


export default App;