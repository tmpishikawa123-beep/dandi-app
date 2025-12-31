
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Access = () => {
  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 bg-stone-50">
      <h2 className="text-2xl font-serif text-center mb-6 text-gray-500">アクセス & イベント情報</h2>
      <div className="flex flex-col md:flex-row gap-6 h-full overflow-hidden">
        {/* Google Map 埋め込み */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNg1iLrbT18y77zks5qRrOKrDtBXPQMH4&q=place_id:ChIJ__Q4Eg77IWARlk3pt7Swtho&zoom=16" 
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* Google Calendar 埋め込み */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=97793972239981982ec858fcbdfb3319799560c1d99f5d1783cea7e159e5baee%40group.calendar.google.com&ctz=Asia%2FTokyo" 
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Access;