import React from 'react';
import Header from '../Header/Header';
import RadditUI from '../RadditUI/RadditUI';
import { Grid } from './style';
import { ObterPosts } from '../../service/ObterPosts';

const Layout: React.FC = () => {
  const obterPosts = new ObterPosts();
  return <Grid>
      <Header/>
      <RadditUI _ObterPosts={obterPosts}/>
  </Grid>;
}

export default Layout;