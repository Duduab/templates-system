import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TemplateCard from './TemplateCard';
import CategoryCarousel from './CategoryCarousel';

const HomeWrapper = styled.div`
  padding: 2rem;
`;

const TemplateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adjust the spacing between cards */
  justify-content: space-between;
`;

const Home = () => {
  const templates = useSelector(state => state.templates.templates);

  const categorizedTemplates = templates.reduce((acc, template) => {
    const category = template.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(template);
    return acc;
  }, {});

  return (
    <HomeWrapper>
      <CategoryCarousel />
      {Object.keys(categorizedTemplates).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <TemplateContainer>
            {categorizedTemplates[category].map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </TemplateContainer>
        </div>
      ))}
    </HomeWrapper>
  );
};

export default Home;
