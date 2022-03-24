import { useContext, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { TransactionsContext } from "../context/TransactionsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useContext(TransactionsContext);

  const transactionsCollectionRef = collection(db, "transactions");

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const data = await getDocs(transactionsCollectionRef);
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <div className="App">
      <Container
        className="d-flex aligin-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      getTransactions={getTransactions}
                      transactionsCollectionRef={transactionsCollectionRef}
                    />
                  }
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      </Container>
    </div>
  );
}

export default App;
