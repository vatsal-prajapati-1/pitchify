import Navbar from "../../components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <main className="font-work-sans">
    <Navbar />
    {children}
  </main>
);

export default Layout;
