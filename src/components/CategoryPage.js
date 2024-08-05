// src/components/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TemplateCard from './TemplateCard';

const CategoryWrapper = styled.div`
  padding: 2rem;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem; /* Adjust the gap between cards as needed */
`;

const CategoryPage = () => {
  const { category } = useParams();
  const templates = useSelector(state => state.templates.templates);
  const filteredTemplates = templates.filter(template => template.category.toLowerCase() === category.toLowerCase());

  return (
    <CategoryWrapper>
      <h2>{category} Templates</h2>
      <TemplateGrid>
        {filteredTemplates.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </TemplateGrid>
    </CategoryWrapper>
  );
};

export default CategoryPage;
