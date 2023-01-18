import { AppStyled } from "./style";
import { Router } from '../../Routes/Router';
import { UserProvider } from "../../providers/UserProvider";

function App() {
  return (
    <AppStyled>
      <UserProvider>
        <Router />
      </UserProvider>
    </AppStyled>
  );
}

export default App;
