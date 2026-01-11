
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Access = () => {
  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 bg-stone-50">
      <h2 className="text-sm sm:text-2xl font-serif text-center mb-2 text-gray-500">アクセス & イベント情報</h2>
      <div className="flex flex-col md:flex-row gap-2 h-full overflow-hidden">
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
            src="https://calendar.google.com/calendar/embed?src=8130aad60c835c7476f382b04da4a60213483433df75d93413a3c2a7643e4c29%40group.calendar.google.com&ctz=Asia%2FTokyo" 
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Access;