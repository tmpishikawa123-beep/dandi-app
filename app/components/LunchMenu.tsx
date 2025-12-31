/* eslint-disable @next/next/no-img-element */

interface Item {
  name: string;
  price?: string;
  detail: string;
  imageUrl: string;
}

const LunchMenu = ({ title }: { title: string }) => {
  const foodItems: Item[] = [
    { name: "ダンディーランチ", price: "¥2,900(¥3,190)", detail: "おもてなしにも記念日にもピッタリ", imageUrl: "/LunchMenu1.jpg" },
    { name: "花ランチ", price: "¥2,700(¥2,970)", detail: "不動の人気メニューです！", imageUrl: "/LunchMenu2.jpg" },
    { name: "ポークジンジャーランチ", price: "¥2,300(¥2,530)", detail: "病みつきになるメニューです！", imageUrl: "/LunchMenu3.jpg" },
    { name: "和風ハンバーグランチ", price: "¥2,350(¥2,585)", detail: "山盛りの大根は、鬼おろししてます！", imageUrl: "/LunchMenu4.jpg" },
    { name: "ローストチキンランチ", price: "¥2,400(¥2,640)", detail: "", imageUrl: "/LunchMenu5.jpg" },
    { name: "ポークステーキランチ", price: "¥2,300(¥2,530)", detail: "", imageUrl: "/LunchMenu6.jpg" },
  ];

  const drinkItems: Item[] = [
    { name: "自家焙煎コーヒー(ｱｲｽ&ﾎｯﾄ)", detail: "", imageUrl: "/drink1.jpg" },
    { name: "紅茶(ｱｲｽ&ﾎｯﾄ)", detail: "", imageUrl: "/drink2.jpg" },
    { name: "ジンジャエール", detail: "", imageUrl: "/drink3.jpg" },
    { name: "オレンジジュース", detail: "", imageUrl: "/drink4.jpg" },
    { name: "自家製ドリンク", detail: "", imageUrl: "/drink5.jpg" },
  ];

  return (
    <div className="w-full mx-auto h-screen flex flex-col justify-center px-4 py-2 font-sans text-gray-800 bg-white overflow-hidden">
      
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-center mb-6 tracking-widest text-gray-500">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {foodItems.map((item, i) => (
            <div key={i} className="flex flex-col bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                <div className="relative h-20 sm:h-24 w-full bg-gray-50">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-[11px] sm:text-xs truncate text-gray-800">{item.name}</h3>
                  <span className="text-gray-600 text-[10px] sm:text-[11px] font-serif">{item.price}</span>
                </div>
                <p className="text-[10px] text-gray-400 leading-tight line-clamp-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 pt-6">
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-xs sm:text-sm font-serif tracking-widest text-gray-500 uppercase">たっぷりのランチドリンク</h2>
          <p className="text-[10px] sm:text-xs font-medium text-gray-600">
             <span className="text-red-600 font-bold ml-1">¥330〜¥440にて、別途注文</span>
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {drinkItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative h-12 w-12 sm:h-14 sm:h-14 overflow-hidden rounded-full mb-2 border border-gray-100 shadow-sm">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-700 leading-tight h-6 flex items-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LunchMenu;