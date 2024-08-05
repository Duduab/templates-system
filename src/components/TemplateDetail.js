import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveUserInputs } from '../slices/templateSlice';
import FormWidget from './FormWidget';

const TemplateDetail = () => {
  const { id } = useParams();
  const template = useSelector(state =>
    state.templates.templates.find(t => t.id === id)
  );
  const dispatch = useDispatch();

  const handleFormSubmit = (inputs) => {
    dispatch(saveUserInputs(inputs));
  };

  return (
    <div>
      <h2>{template.name}</h2>
      <FormWidget onSubmit={handleFormSubmit} />
    </div>
  );
};

export default TemplateDetail;
