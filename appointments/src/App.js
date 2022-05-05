import { AppointmentList } from "./components/AppointmentList/AppointmentsList";
import { InputFields } from "./components/InputFields/InputFields";
import { GlobalStyle } from "./globalStyles/global"

function App() {
  return (
    <div>
      <InputFields />
      <AppointmentList />
      <GlobalStyle />
    </div>
  );
}

export default App;
