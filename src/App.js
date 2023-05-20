import { useDispatch, useSelector } from "react-redux";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";

function App() {
  const dispatch = useDispatch(); // to using react redux
  const user = useSelector((state) => state.user);

  return (
    <div className=" text-sm">
      {user.isLogged ? <MainPage /> : <StartPage />}
    </div>
  );
}

export default App;
