import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </>
    );
}
 
export default MainLayout;