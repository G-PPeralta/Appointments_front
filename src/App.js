import { GlobalStyle } from "./globalStyles/global";
import { AppointmentsPage } from '../src/pages/AppointmentsPage';

// require('dotenv').config();

function App() {
  return (
    <>
      <AppointmentsPage />
      <GlobalStyle />
    </>
  )
}

export default App;
