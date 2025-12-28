const Hero = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-serif tracking-widest">暖邸</h1>
        <p className="mt-4 text-lg md:text-xl tracking-expand">益子の片隅の、山懐にひっそりと佇む、欧風家庭料理のレストラン&カフェ</p>
      </div>
    </div>
  );
};
export default Hero;