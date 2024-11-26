import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2a4d69' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>
          Explore. Stay. Adventure.
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', color: '#2a4d69' }}>Who We Are</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          At <strong>Wilderness Escape Co.</strong>, we specialize in delivering 
          unforgettable safari experiences, cozy apartment stays, and thrilling 
          hiking sessions. Based in the heart of the wild, our mission is to connect 
          you with nature, culture, and the best of outdoor adventures. Whether you 
          are seeking a serene staycation or a heart-pounding trek through rugged 
          terrains, we've got you covered.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', color: '#2a4d69' }}>Our Services</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Safari Adventures:</strong> Experience the beauty of wildlife 
            with our expertly guided safari tours. Capture breathtaking moments 
            and connect with nature like never before.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Apartment Rentals:</strong> Stay in comfort and style with our 
            range of furnished apartments. Perfect for adventurers and families 
            alike, our accommodations are designed for relaxation after an 
            exhilarating day.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Hiking Sessions:</strong> Discover hidden trails and enjoy 
            guided hiking tours that cater to all levels, from beginners to 
            seasoned adventurers.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', color: '#2a4d69' }}>Our Promise</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          We believe in providing personalized, safe, and enriching experiences. 
          Our team of passionate experts works tirelessly to ensure every aspect of 
          your journey is seamless and memorable. From breathtaking landscapes to 
          cozy accommodations, we are here to make your dream adventure a reality.
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '50px' }}>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          <strong>Contact Us:</strong> info@wildernessescape.com | +123 456 7890
        </p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          © 2024 Wilderness Escape Co. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;

