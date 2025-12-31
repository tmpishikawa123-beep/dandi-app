
const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.251-.148-4.771-1.691-4.919-4.919-.058-1.266-.07-1.646-.07-4.85 0-3.204.013-3.583.07-4.85.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
);

const Social = () => {
  const snsLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/dandycafe0413/', label: '@damdycafe0413' },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-stone-100 text-stone-800 p-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-4">ママの独り言</h2>
        <p className="text-sm tracking-widest text-stone-500">最新情報や日々の風景をお届けします</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-4xl">
        {snsLinks.map((sns) => (
          <a
            key={sns.name}
            href={sns.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col  items-center p-8 bg-white border border-stone-200 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-12 h-12 mb-4 bg-stone-200 rounded-full flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-colors">
              <InstagramIcon />
            </div>
            <span className="font-serif text-lg mb-1">{sns.name}</span>
            <span className="text-xs text-stone-400">{sns.label}</span>
          </a>
        ))}
      </div>

      <footer className="mt-20 text-xs text-stone-400 tracking-widest">
        &copy; {new Date().getFullYear()} 暖邸 All Rights Reserved.
      </footer>
    </div>
  );
};

export default Social;