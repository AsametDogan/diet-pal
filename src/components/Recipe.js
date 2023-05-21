import React, { useState } from "react";
import { Dialog, Input } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Chart } from "react-google-charts";

import Typography from "@material-tailwind/react";
import { IconLoupe } from "../media";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Recipe = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1((cur) => !cur);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2((cur) => !cur);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3((cur) => !cur);
  const options = {
    title: "Besin Değeri",
  };
  const karniyarikData = [
    ["Besinler", "Yüzde"],
    ["Karbonhidrat", 27],
    ["Yağ", 35],
    ["Protein", 38],
  ];
  const pilavData = [
    ["Besinler", "Yüzde"],
    ["Karbonhidrat", 85],
    ["Yağ", 7],
    ["Protein", 8],
  ];
  const mantiData = [
    ["Besinler", "Yüzde"],
    ["Karbonhidrat", 80],
    ["Yağ", 11],
    ["Protein", 9],
  ];
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-200 h-full">
      <div className="w-72 flex justify-between items-center bg-white rounded-lg">
        <input
          className=" outline-none px-2 py-1.5 rounded-lg"
          placeholder="Yemek tarifi bul"
        />
        <button className="hover:bg-blue-gray-100 p-1 rounded-full transition-all ">
          <img className="h-6 w-6" src={IconLoupe} />
        </button>
      </div>
      <Carousel className="rounded-xl h-full">
        <div className="items-center justify-center flex flex-col">
          <img
            src="https://img.cdn.haber365.com.tr/uploads/images/news/1200x628-karniyarik-nasil-yapilir-hangi-ayarda-piser-kac-kalori-yanina-en-iyi-ne-gider-patlican-ile-kiymanin-lezzetli-bulusmasi-firinda-karniyarik-tarifi-870-ogimage.jpg"
            alt="Karnıyarık"
            className="object-cover w-56 h-56 rounded-lg shadow-lg font-semibold "
          />
          <label className="mt-4 font-semibold">Karnıyarık </label>
          <div className=" w-full md:w-3/5 lg:w-1/4 flex flex-col items-center justify-center">
            <Chart
              chartType="PieChart"
              data={karniyarikData}
              options={options}
              width={"100%"}
              height={"200px"}
            />
            <button
              onClick={handleOpen1}
              className="px-2 py-1 bg-teal-300 rounded-lg  text-white"
            >
              {" "}
              Tarifi gör{" "}
            </button>
            <Dialog
              size="xl"
              open={open1}
              handler={handleOpen1}
              className="bg-transparent shadow-none"
            >
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-[50%] max-h-[%50]">
                <div className="overflow-y-scroll scrollbar-hide h-1/5 ">
                  <label className="font-semibold">Karnıyarık</label>
                  <p className="text-justify">
                    - Patlıcanların saplarını kesip patlıcanları yatay şekilde
                    ikiye kesin
                    <br />- Patlıcanların kesik taraflarını fırça yardımıyla
                    zeytinyağ ile yağlayıp yağlı kağıt serilmiş fırın tepsisine
                    dizin
                    <br />- 200 derecede ızgara ayarında ısıtılmış fırına verip
                    üzerleri kızarana kadar pişirin
                    <br />- Fırını alt üst ayarda 190 dereceye getirip 15-20 dk.
                    daha pişirin
                    <br />- Patlıcanlar pişerken geniş bir tavada 4-5 yemek
                    kaşığı zeytinyağı kızdırın
                    <br />- Yemeklik doğradığınız soğanı ve biberi ekleyip
                    yumuşayana kadar kavurun, Kıymayı ekleyip rengi dönene kadar
                    kavurun, Salça, toz biber, karabiber, tuz ve kimyonu ekleyip
                    karıştırın
                    <br />- Küp küp doğradığınız domatesi ekleyip suyunu çekene
                    kadar pişirin
                    <br />- Kızarmış patlıcanları derin bir fırın kabına alın,
                    Bir çatal yardımıyla içlerini ezin, Kıymalı harcı
                    patlıcanlara paylaştırın
                    <br />- Üzerlerine ikişer parça domates ve birer dilim biber
                    koyun, Kıymalı harcı hazırladığınız tavaya sos malzemelerini
                    alın ve karıştırın, Sosu fırın kabına dökün
                    <br />- Tepsiyi 190 derecede önceden ısıtılmış fırına verip
                    üzerindeki domates ve biberler kızarmaya başlayana kadar
                    pişirin.
                  </p>
                </div>
              </div>
            </Dialog>
          </div>
          {}
        </div>
        <div className="items-center justify-center flex flex-col">
          <img
            src="https://im.haberturk.com/2019/10/16/ver1571221752/2531465_810x458.jpg"
            alt="Pirinç pilavı"
            className="w-56 h-56 object-cover rounded-lg shadow-lg font-semibold"
          />
          <label className="mt-4 font-semibold">Pirinç pilavı </label>
          <div className=" w-full md:w-3/5 lg:w-1/4 flex flex-col items-center justify-center">
            <Chart
              chartType="PieChart"
              data={pilavData}
              options={options}
              width={"100%"}
              height={"200px"}
            />
            <button
              onClick={handleOpen2}
              className="px-2 py-1 bg-teal-300 rounded-lg  text-white"
            >
              {" "}
              Tarifi gör{" "}
            </button>
            <Dialog
              size="xl"
              open={open2}
              handler={handleOpen2}
              className="bg-transparent shadow-none"
            >
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-[50%] max-h-[%50]">
                <div className="overflow-y-scroll scrollbar-hide h-1/5 ">
                  <label className="font-semibold">Pirinç Pilavı</label>
                  <p className="text-justify">
                    - Pirinci bol su ile yıkayın. Uygun bir kaba alarak üzerini
                    geçecek kadar ılık su ekleyin. Birazda tuz ilave edip
                    karıştırın ve 15-20 dakika bekletin.
                    <br />- Daha sonra yıkayarak suyunu süzün. Nişastası gidene
                    kadar yıkıyoruz. Çıkan suyun berrak olması gerekiyor.
                    <br />- Tencerede tereyağını eritip suyu süzülmüş pirinci
                    ekleyin ve 4-5 dakika kadar kavurun. Pirinçlerin yeteri
                    kadar kavrulduğunu pirinler tane tane dökülmeye başladığında
                    anlayabilirsiniz.
                    <br />- Pirinçler kavrulduktan sonra sıcak su veya sıcak et
                    suyunu ekleyelim. İsterseniz yarım tavuk suyu yarım sıcak su
                    kullanabilirsiniz.
                    <br />- Tavuk suyunuz yağlı ise bu şekilde su ile
                    karıştırmanızı tavsiye ederim ancak yağlı değilse tamamı
                    tavuk suyu ile çok daha lezzetli olacaktır. Son olarak tuzu
                    ekleyin.
                    <br />- Pilavımızı kapağı kapalı bir şekilde önce yüksek
                    ateşte pişmeye bırakalım. Üzeri göz göz olduğunda yani
                    üzerindeki suyu çekip pilavın üzerinde nokta nokta delikler
                    oluştuğunda kısık ateşe alalım.
                    <br />- Pirinçler yumuşayıp suyu tamamen çekene kadar
                    pişirelim. Pişen pilavımızı ocaktan aldıktan sonra üzerine
                    havlu peçete sererek kapağını tekrar kapatalım.
                    <br />- Pilavı 10-15 dk. dinlendirelim. Daha sonra tahta
                    kaşık ile karıştırarak servis yapabilirsiniz.
                  </p>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="items-center justify-center flex flex-col">
          <img
            src="https://cdn.ye-mek.net/App_UI/Img/out/650/2022/07/hazir-manti-resimli-yemek-tarifi(15).jpg"
            alt="Mantı"
            className="w-56 h-56 object-cover rounded-lg shadow-lg font-semibold"
          />
          <label className="mt-4 font-semibold">Mantı </label>
          <div className=" w-full md:w-3/5 lg:w-1/4 flex flex-col items-center justify-center">
            <Chart
              chartType="PieChart"
              data={mantiData}
              options={options}
              width={"100%"}
              height={"200px"}
            />
            <button
              onClick={handleOpen3}
              className="px-2 py-1 bg-teal-300 rounded-lg  text-white"
            >
              {" "}
              Tarifi gör{" "}
            </button>
            <Dialog
              size="xl"
              open={open3}
              handler={handleOpen3}
              className="bg-transparent shadow-none"
            >
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-[50%] max-h-[%50]">
                <div className="overflow-y-scroll scrollbar-hide h-1/5 ">
                  <label className="font-semibold">Mantı</label>
                  <p className="text-justify">
                    - Derince bir karıştırma kabına 3,5 su bardağı un , 1 çay
                    kaşığı tuz ekleyelim. Karıştırarak unun ortasına bir çukur
                    açalım.
                    <br />- Ortasına 1 adet yumurtayı ekleyelim ve karıştırmaya
                    devam edelim. Karıştırırken 1 su bardağı ılık suyu yavaş
                    yavaş ekleyelim. Hamurun ne çok sert ne de yumuşak olacak
                    bir kıvama gelene kadar yoğuralım.
                    <br />- Hazır olan hamurun üzerini streç film ile kapatalım
                    ve dinlendirelim. Hamur dinlenirken uygun bir karıştırma
                    kabına 250 gram az yağlı kıyma ekleyelim.
                    <br /> Ardından 1 adet orta boy soğan, yarım çay kaşığı
                    karabiber, 1 çay kaşığı tuz, yarım çay kaşığı pul biber
                    ekleyelim ve güzelce karıştıralım. Un serptiğimiz tezgaha
                    hamuru alalım, yoğurarak hamuru toparlayalım.
                    <br />- Hamuru 3 eşit parçaya ayıralım. Ayırdığımız
                    hamurları bezeler haline getirelim. Un serptiğimiz tezgahta
                    hazırladığımız bezeleri teker teker yufkadan kalın olacak
                    şekilde oklava ile açalım.
                    <br />- Açtığımız hamuru bir bıçak ile küçük kareler halinde
                    keselim. Kesiğimiz karelerin ortasına hazırladığımız kıyma
                    karışımında ufak parçalar halinde koyalım.
                    <br />- Hamurun 4 köşesini ortada birleştirerek mantı
                    şeklini verelim. Altını unladığımız bir tepsiye şekil
                    verdiğimiz mantıları toplayalım ve tepsiyi dondurucuya
                    alarak donduralım.
                    <br />- Son olarak hazırladığımız mantıları dondurucuya atıp
                    istediğimiz zaman pişirebiliriz.
                  </p>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Recipe;
