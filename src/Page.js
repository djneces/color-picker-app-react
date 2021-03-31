import React from 'react';
import './styles/Page.css';
//alternative to props and props.children, we extract children
function Page({ children }) {
  return <section className='page'>{children}</section>;
}

export default Page;
