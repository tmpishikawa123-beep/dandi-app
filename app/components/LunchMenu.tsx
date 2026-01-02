"use client"; // クライアントコンポーネントとして定義

import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface Item {
  name: string;
  price?: string;
  detail: string;
  imageUrl: string;
}

const LunchMenu = ({ title }: { title: string }) => {
  // モーダル表示用の状態管理
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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
    { name: "紅茶(ｱｲｽ&ﾎｯﾄ)", detail: "", imageUrl: "/drink2.png" },
    { name: "ジンジャエール", detail: "", imageUrl: "/drink3.jpg" },
    { name: "コーラ", detail: "", imageUrl: "/drink4.png" },
    { name: "自家製ドリンク", detail: "", imageUrl: "/drink5.jpg" },
  ];

  return (
    <div className="w-full mx-auto min-h-[100dvh] flex flex-col justify-center px-4 py-2 font-sans text-gray-800 bg-white">
      
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-center mb-6 tracking-widest text-gray-500">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {foodItems.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedItem(item)} 
            >
              <div className="relative h-15 sm:h-24 w-full bg-gray-50">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-[8px] sm:text-xs truncate text-gray-800">{item.name}</h3>
                  <span className="text-gray-600 text-[6px] sm:text-[11px] font-serif">{item.price}</span>
                </div>
                <p className="text-[8px] sm:text-[13px] text-gray-400 leading-tight line-clamp-1">{item.detail}</p>
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
            <div 
              key={i} 
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => setSelectedItem(item)} // ドリンクも拡大可能に
            >
              <div className="relative h-12 w-12 sm:h-14 overflow-hidden rounded-full mb-2 border border-gray-100 shadow-sm transition group-hover:scale-105">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-700 leading-tight h-6 flex items-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- モーダル部分 --- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedItem(null)} // 背景クリックで閉じる
        >
          <div className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
            {/* 閉じるボタン */}
            <button 
              className="absolute top-3 right-3 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            
            <img src={selectedItem.imageUrl} alt={selectedItem.name} className="w-full h-64 sm:h-80 object-cover" />
            
            <div className="p-6">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-xl font-bold text-gray-800">{selectedItem.name}</h3>
                <span className="text-lg text-gray-600 font-serif">{selectedItem.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{selectedItem.detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LunchMenu;