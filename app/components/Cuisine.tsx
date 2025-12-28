import ConceptSection from '@/app/components/common/ConceptSection'

const Cuisine = ({ title, description, imageUrl, reverse = false }: any) => {
  return <ConceptSection title={title} description={description} imageUrl={imageUrl} reverse={reverse}></ConceptSection>
};

export default Cuisine;