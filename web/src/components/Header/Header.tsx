import React from 'react';
import escritaReactjs from '../../assets/REACTJS.svg';
 import { Container } from './styles';

const Header: React.FC = () => {
  return <Container><img src={escritaReactjs} alt="imagem escrito REACTJS"/></Container>;
}

export default Header;