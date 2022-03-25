import { useContext, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { TransactionsContext } from "../context/TransactionsContext";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import { Container } from "react-bootstrap";
import "./App.css";
import { useAuth } from "../context/AuthContext";

function App() {
  const [transactions, setTransactions] = useContext(TransactionsContext);
  const { currentUser } = useAuth();
  // console.log(currentUser.email);

  const transactionsCollectionRef = collection(
    db,
    `${currentUser === null ? null : currentUser.email}`
  );

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const data = await getDocs(transactionsCollectionRef);
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("seted transaction");
  };
  return (
    <HashRouter basename="/expense-tracker">
      <div className="App">
        <Container
          className="d-flex aligin-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Main
                    getTransactions={getTransactions}
                    transactionsCollectionRef={transactionsCollectionRef}
                  />
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/login"
                element={<Login getTransactions={getTransactions} />}
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
