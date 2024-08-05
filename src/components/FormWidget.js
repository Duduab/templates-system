import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  height: 200px;
  width: 350px;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 10px 20px #dbdbdb;
  font-family: sans-serif;
`;

const Palette = styled.div`
  display: flex;
  height: 86%;
  width: 100%;
`;

const Color = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  transition: flex 0.1s linear;
  background: ${props => props.color};

  &:hover {
    flex: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:hover span {
    opacity: 1;
  }
`;

const ColorSpan = styled.span`
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 1em;
  overflow: hidden;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const FormWidget = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...inputs, image });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Palette>
          <Color color="#264653"><ColorSpan>264653</ColorSpan></Color>
          <Color color="#2a9d8f"><ColorSpan>2A9D8F</ColorSpan></Color>
          <Color color="#e9c46a"><ColorSpan>E9C46A</ColorSpan></Color>
          <Color color="#f4a261"><ColorSpan>F4A261</ColorSpan></Color>
          <Color color="#e76f51"><ColorSpan>E76F51</ColorSpan></Color>
        </Palette>
      </Container>
      <div>
        <label>
          Field 1:
          <input type="text" name="field1" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Field 2:
          <input type="text" name="field2" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
      </div>
      {image && (
        <ImagePreview>
          <img src={image} alt="Uploaded preview" />
        </ImagePreview>
      )}
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default FormWidget;
