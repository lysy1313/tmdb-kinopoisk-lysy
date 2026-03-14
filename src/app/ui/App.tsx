import { Routing } from "@/common/routing/Routing";
import { Header } from "@/common/components/Header/Header";
import "@/common/styles/global.scss";
import { Footer } from "@/common/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
