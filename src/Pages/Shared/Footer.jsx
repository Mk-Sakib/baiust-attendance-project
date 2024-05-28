import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <h6 className="footer-title">Departments</h6> 
    <a className="link link-hover">Department of CSE</a>
    <a className="link link-hover">Department of EEE</a>
    <a className="link link-hover">Department of ICT</a>
    <a className="link link-hover">Department of Business Administration</a>
    <a className="link link-hover">Department of English</a>
    <a className="link link-hover">Department of Law</a>
    <a className="link link-hover">Department of ICT</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Useful Links</h6> 
    <a className="link link-hover">Certificate Verification</a>
    <a className="link link-hover">Academic Calendar</a>
    <a className="link link-hover">notice</a>
    <a className="link link-hover">clubs</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>     
        </div>
    );
};

export default Footer;