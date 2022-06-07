import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "2a299ae116a31d9eb61426ed44f10c3d";
  const [city, setCity] = useState("");
  const [search , setSearch] = useState("İzmir");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          //api key yazarken iki tane { } kullanma...
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&lang=tr&units=metric`
        );
        setCity(response.data);
      } catch (error) {
        console.log("The error is : " + error.response);
      }
    }
    getApi();
  }, [search]);
  return (
    <div className="App">
  <input type="text" onChange={(e) => setSearch(e.target.value)}   placeholder="Hava Durumunu Öğrenmek İstediğiniz Şehir Adını Yazınız." className="px-3 py-3 m-4 placeholder-slate-600 text-slate-600 relative   bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
  <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
    <i className="fa fa-cloud" aria-hidden="true"></i>
  </span>
  <div>
  {city && <City city={city}/>}
  <div className="text-center">
    <p className="text-base p-4 uppercase">Yeni Bir Güne Mutlu Uyanın :-)</p>
  </div>
  </div>
     </div>
     
  );
}

export default App;
