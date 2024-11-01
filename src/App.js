import "./App.css";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Page from "./pages/page.tsx";

function App() {
  return (
    <div className="App">
      <Header />

      <Page></Page>
       <Footer />
  
    </div>
  );
}

export default App;
