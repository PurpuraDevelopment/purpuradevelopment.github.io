import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-[#6A0DAD] text-white text-center">
      <p className="text-lg">
        Made with <span className="text-red-500">💜</span> by{' '}
        <a
          href="https://purpuradevelopment.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline text-white"
        >
          Purpura Development
        </a>
      </p>
    </footer>
  );
};

export default Footer;
