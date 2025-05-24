
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen mellow-brown text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
