import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectImg = ({ filename, alt }) => (
  <Image src={filename} alt={alt} layout="responsive" width={1366} />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
