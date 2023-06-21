import React from 'react';
import './Home.module.css';

function Home() {
  return (
    <div>
      {/* Header */}
      <header id="header" className="header fixed-top">
        {/* Header code here */}
      </header>

      {/* Main Content */}
      <main>
        {/* Header */}
        <section id="hero" className="hero d-flex align-items-center">
          {/* Hero code here */}
        </section>

        {/* About Us */}
        <section id="about" className="py-5 d-flex align-items-center">
          {/* About Us code here */}
        </section>

        {/* Flow */}
        <section id="flow" className="py-5 d-flex align-items-center">
          {/* Flow code here */}
        </section>

        {/* Store Information */}
        <section id="store" className="py-5 d-flex align-items-center">
          {/* Store Information code here */}
        </section>

        {/* Contact */}
        <section id="contact" className="py-5 d-flex align-items-center">
          {/* Contact code here */}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-4 p-5 text-white">
        {/* Footer code here */}
      </footer>
    </div>
  );
}

export default Home;
