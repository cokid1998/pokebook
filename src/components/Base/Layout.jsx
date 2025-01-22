import Header from "@/components/Base/Header";
import Footer from "@/components/Base/Footer";

function Layout({ children }) {
  return (
    <div className="w-svw h-svh flex flex-col justify-between">
      <Header />
      <div className="px-10">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
