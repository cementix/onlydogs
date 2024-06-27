import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

export default function Home() {
  const user = false;
  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
}
