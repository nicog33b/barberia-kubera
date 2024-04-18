//components
import Footer from "./components/UI/footer";
import Hero from "./components/UI/hero";
import Navbar from "./components/UI/navbar";


//css
import "./globals.css";


export const metadata = {
  title: "Barberia",
  description: "Barberia urbana, reserva tu hora",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Barbería Urbana</title>
        <meta name="description" content="Disfruta de la mejor experiencia de corte urbano en Montevideo. Reserva en línea ahora." />
      </head>
      <body className="bg-black">
        <Navbar />
        <Hero />

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}