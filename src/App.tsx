import "./App.css";
import PageRoutes from "./pageRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BillingContextProvider from "context/billingContext";

function App() {
  return (
    <div>
      <BillingContextProvider>
        <PageRoutes />
        <ToastContainer />
      </BillingContextProvider>
    </div>
  );
}

export default App;
