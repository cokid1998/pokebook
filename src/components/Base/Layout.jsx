import Header from "@/components/Base/Header";
import Footer from "@/components/Base/Footer";

function Layout({ children }) {
  return (
    <div className="w-svw h-svh flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
