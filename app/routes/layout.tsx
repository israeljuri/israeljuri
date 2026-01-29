import { Outlet } from 'react-router';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

export default function Layout() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
}
