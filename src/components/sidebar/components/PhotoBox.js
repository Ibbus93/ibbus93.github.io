import React from "react"
import PropTypes from 'prop-types';

import styled from "styled-components"

import Image from "./ProfileImage"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoBox = ({
  name,
  role,
  place
}) => (
  <Container>
    <Image />
    <h2>
      <span>{name}</span><br />
      {role} based in {place}
    </h2>
  </Container>
);

PhotoBox.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  place: PropTypes.string,
}

PhotoBox.defaultProps = {
  name: '',
  role: '',
  place: '',
}

export default PhotoBox
