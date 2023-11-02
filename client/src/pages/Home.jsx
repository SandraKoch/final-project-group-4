import { WelcomePage } from "../components/WelcomePage";
import { useAuth } from "../hooks/useAuth";
import Main from "./Main/Main";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return <main>{isLoggedIn ? <Main /> : <WelcomePage />}</main>;
};

export default Home;
