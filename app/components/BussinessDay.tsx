/* eslint-disable @next/next/no-img-element */

interface BussinessDayProps {
  title: string;
  imageUrl: string;
  reverse?: boolean;
}

const BussinessDay = ({ title, imageUrl, reverse = false }: BussinessDayProps) => {
  // カレンダーの日付（例）
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-full w-full`}>
      {/* 左側：画像セクション */}
      <div className="flex-1 h-1/2 md:h-full relative bg-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* 右側：コンテンツセクション */}
      <div className="flex-1 h-1/2 md:h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 px-4 text-center text-gray-500">{title}</h2>
        
        {/* カレンダー本体 */}
        <div className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
            {days.map((day) => (
              <div key={day} className="py-2 text-center text-xs font-bold text-gray-500 uppercase">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 min-h-[120px] sm:min-h-[150px]">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`flex items-center justify-center border-r border-b border-gray-100 p-1 sm:p-2 last:border-r-0 ${
                  i === 0 ? 'bg-red-50/30' : i === 6 ? 'bg-blue-50/30' : ''
                }`}
              >
                <span className={`text-sm font-medium ${i === 2 ? 'text-gray-400' : 'text-gray-700'}`}>
                  {i !== 2 ? "〇" : "×"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 営業時間セクション */}
        <div className="mt-6 text-center">
          <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Business Hours</p>
          <p className="text-lg sm:text-xl font-serif text-gray-800">11:00 — 16:00</p>
        </div>

        {/* 予約セクション：ここから追加 */}
        <div className="mt-8 pt-6 border-t border-gray-100 w-full max-w-md text-center">
          <h3 className="text-sm font-bold text-gray-500 mb-3 tracking-widest">ご予約について</h3>
          <p className="text-xs sm:text-sm text-gray-700 mb-4 leading-relaxed px-2">
            様々なシーンのお手伝いが出来ます、ご相談くださいませ！
          </p>
          
          <div className="space-y-1 mb-6">
            <p className="text-sm sm:text-base font-serif text-gray-800">Tel: 00-0000-0000</p>
            <p className="text-xs sm:text-sm text-gray-600">Email: info@example.com</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] text-gray-400">※無断キャンセルはご遠慮ください</p>
            <p className="text-[10px] text-gray-400">※貸切の場合は、前払いをお願いしています</p>
          </div>
        </div>
        {/* ここまで */}
        
      </div>
    </div>
  );
};

export default BussinessDay;