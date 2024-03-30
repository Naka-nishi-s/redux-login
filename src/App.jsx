import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout } from "./redux/loginSlice";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginState.isLogin);

  return (
    <>
      <div>
        <div>
          <h3>ログイン状況:{isLogin ? "ログイン中" : "ログアウト中"}</h3>
          <button onClick={() => dispatch(login())}>ログイン</button>
          <button onClick={() => dispatch(logout())}>ログアウト</button>
        </div>
      </div>
    </>
  );
}

export default App;
