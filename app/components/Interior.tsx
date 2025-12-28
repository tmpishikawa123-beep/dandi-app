import ConceptSection from '@/app/components/common/ConceptSection'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Interior = ({ title, description, imageUrl, reverse = false }: any) => {
  return <ConceptSection title={title} description={description} imageUrl={imageUrl} reverse={reverse}></ConceptSection>
};

export default Interior;