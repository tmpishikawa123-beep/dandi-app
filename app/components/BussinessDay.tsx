/* eslint-disable @next/next/no-img-element */

interface BussinessDayProps {
  title: string;
  imageUrl: string;
  reverse?: boolean;
}

const BussinessDay = ({ title, imageUrl, reverse = false }: BussinessDayProps) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-screen w-full bg-white overflow-hidden`}>
      
      <div className="w-full h-[30vh] md:h-full md:flex-1 relative bg-gray-200">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-full h-[70vh] md:h-full md:flex-1 flex flex-col justify-start md:justify-center items-center p-4 sm:p-6 md:p-10 bg-white overflow-y-auto">
        
        <h2 className="text-lg sm:text-2xl font-serif mb-3 md:mb-6 text-center text-gray-600 tracking-wide">
          {title}
        </h2>
        
        <div className="w-full max-w-sm border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-7 bg-gray-50/50 border-b border-gray-100">
            {days.map((day) => (
              <div key={day} className="py-1.5 md:py-2.5 text-center text-[12px] sm:text-[16px] font-bold text-gray-400 uppercase tracking-tighter">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`flex items-center justify-center border-r border-b border-gray-50 py-2 md:p-2 last:border-r-0 ${
                  i === 0 ? 'bg-red-50/20' : i === 6 ? 'bg-blue-50/20' : ''
                }`}
              >
                <span className={`text-[14px] font-bold font-medium ${i === 2 ? 'text-gray-300' : 'text-gray-600'}`}>
                  {i !== 2 ? "○" : "×"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-center  text-justify">
          <p className="text-[14px] md:text-[15px] text-gray-400 tracking-[0.2em] uppercase">営業時間</p>
          <p className="text-[16px] md:text-[20px] font-serif text-gray-800 tracking-widest">ランチ 11:00 — 14:30</p>
          <p className="text-[16px] md:text-[20px] font-serif text-gray-800 tracking-widest">カフェ 14:00 — 16:00(土、日、祝のみ)</p>
          <p className="text-[14px] md:text-[16px] font-serif text-gray-400 tracking-widest">ラストオーダー 15:30</p>
        </div>

        <div className="mt-4 pt-4 md:mt-8 md:pt-8 border-t border-gray-100 w-full max-w-sm text-center ">
          <p className="text-[12px] sm:text-sm text-gray-600 mb-4 leading-relaxed">
            様々なシーンのお手伝いが出来ます。<br className="hidden sm:block" />
            お気軽にご相談ください。
          </p>
          
          <div className="space-y-1 md:space-y-2 mb-4 md:mb-8">
            <p className="text-[12px] sm:text-sm text-gray-500">栃木県芳賀郡益子町上大羽393</p>
            <a href="tel:0285-70-6124" className="block text-[11px] font-serif text-gray-800 hover:opacity-70 transition-opacity">
              Tel: 0285-70-6124
            </a>
            <p className="text-[12px] text-gray-500">Email: dandi@gmail.com</p>
          </div>

          <div className="space-y-0.5 opacity-60">
            <p className="text-[9px] text-gray-400">※無断キャンセルはご遠慮ください</p>
            <p className="text-[9px] text-gray-400">※貸切の場合は、前払いをお願いしています</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BussinessDay;