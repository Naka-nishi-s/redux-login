import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/loginSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginState.value);

  return (
    <div>
      <h3>ログイン状況:{isLogin}</h3>
      <button onClick={() => dispatch(login())}>ログイン</button>
      <button onClick={() => dispatch(logout())}>ログアウト</button>
    </div>
  );
};
