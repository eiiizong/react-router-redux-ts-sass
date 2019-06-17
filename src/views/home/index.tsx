import React from 'react';

import Hello from '../../components/hello';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      home
      <Hello></Hello>
    </div>
  );
}

export default Home;
