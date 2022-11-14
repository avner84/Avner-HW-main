import { Route, Routes } from "react-router";
import AboutInfo from "./components/AboutInfo";
import AboutUs from "./components/AboutUs";
import ApiContextProvider from "./components/Context";
import Header from "./components/Header";
import Main from "./components/Main";
import Recommend from "./components/Recommend";
import UserInfo from "./components/UserInfo";
import UserPosts from "./components/Posts/UserPosts";
import UserTodos from "./components/Todos/UserTodos";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";


function App() {
   return (
      <>
         <Header />
         <Main>
            <ApiContextProvider>
               <Routes>
                  <Route path="/" element={<Home />}>
                     <Route path="about-us" element={<AboutUs />} />
                     <Route path="Recommend" element={<Recommend />} />
                  </Route>
                  <Route path="/about" element={<About />}>
                     <Route path="info" element={<AboutInfo />} />
                  </Route>
                  <Route path="/users/*" element={<Users />} />
                  <Route path="/users/:id" element={<User />} />
                  <Route path="/users/:id/info" element={<UserInfo />} />
                  <Route path="/users/:id/todos" element={<UserTodos />} />
                  <Route path="/users/:id/posts" element={<UserPosts />} />
                  <Route path="*" element={<NoPage />} />
               </Routes>
            </ApiContextProvider>
         </Main>
      </>
   );
}

export default App;
