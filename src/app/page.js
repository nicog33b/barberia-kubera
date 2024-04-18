import BarbersGrid from "./components/Home/barbersGrid";
import PriceBoard from "./components/Home/priceBoard";


export default function Home() {
  return (
    <div>
    <div>
    <h1 className="text-center text-2xl text-white font-serif roboto my-5">Conoce nuestros barberos:</h1>
    <BarbersGrid />
  </div>
<PriceBoard></PriceBoard>
  </div>
  );
}
