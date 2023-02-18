import "@fontsource/plus-jakarta-sans";
// import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Categories from './components/Categories';
import Support from './components/Financialsupport';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Landingpage />
      <Categories />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
