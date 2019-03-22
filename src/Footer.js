import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright text-center py-3">
        © Copyright: <Link to="https://paulbriar.com"> PaulBriar.com</Link>
      </div>
    </footer>
  );
}

export default Footer;