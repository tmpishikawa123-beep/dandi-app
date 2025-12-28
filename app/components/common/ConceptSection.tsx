/* eslint-disable @next/next/no-img-element */

interface ConceptSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ConceptSection = ({ title, description, imageUrl, reverse = false }: ConceptSectionProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-full w-full`}>
      <div className="flex-1 h-1/2 md:h-full relative bg-gray-200">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 h-1/2 md:h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-white">
      <h2 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 px-4 text-center text-gray-500">{title}</h2>
      <p className="max-w-md text-sm sm:text-base text-gray-700 text-left whitespace-pre-wrap px-4">{description}</p>
      </div>
    </div>
  );
};
export default ConceptSection;