import Home from "./component/home";
import Hero from "./component/hero";
import Brands from "./component/brand";
import NewArrivals from "./component/newArrivals";
import TopSelling from "./component/topSelling";
import DressStyle from "./component/DressStyle";
import DressStyleCard from "./component/DressStyleCard";

export default function Land() {
  return (
   <div>
  <Home />
<Hero />
<Brands />
<NewArrivals />
<TopSelling />
<DressStyle />
<DressStyleCard title={""} url={""} />
   </div>
  );
}
