
"use client";

const navStyle = {
  width: '100%',
  padding: '1.2rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(15,32,39,0.95)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  borderBottom: '1px solid #22334a',
};
const navLogo = {
  fontWeight: 900,
  fontSize: '1.5rem',
  letterSpacing: '-1px',
  color: '#00c6ff',
  textShadow: '0 2px 8px #0072ff33',
  textDecoration: 'none',
};
const navLinks = {
  display: 'flex',
  gap: '2rem',
};
const navLink = {
  color: '#d1eaff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.05rem',
  transition: 'color 0.2s',
};

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)', minHeight: '100vh', color: '#fff' }}>
      {/* Navbar */}
      <nav style={navStyle as React.CSSProperties}>
        <a href="#" style={navLogo}>FetchTalent</a>
        <div style={navLinks}>
          <a href="#features" style={navLink}>Features</a>
          <a href="#testimonials" style={navLink}>Testimonials</a>
          <a href="#contact" style={navLink}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 1rem 3rem 1rem',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          marginBottom: '1rem',
          letterSpacing: '-1px',
        }}>
          Unlock Top Talent with AI-Powered Recruiting
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: 600,
          margin: '0 auto 2.5rem auto',
          color: '#d1eaff',
        }}>
          Discover, engage, and hire the best candidates faster. FetchTalent leverages advanced AI to streamline your hiring process and connect you with exceptional talent.
        </p>
        <a
          href="#contact"
          style={{
            background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
            color: '#fff',
            padding: '0.9rem 2.2rem',
            borderRadius: '2rem',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(0,114,255,0.15)',
            transition: 'background 0.2s',
            marginBottom: '2rem',
            display: 'inline-block',
          }}
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '3rem 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.5rem',
      }}>
        <div style={{ background: '#1a2a3a', borderRadius: 16, padding: '2rem', boxShadow: '0 2px 12px #0002' }}>
          <h3 style={{ color: '#00c6ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>AI Candidate Matching</h3>
          <p style={{ color: '#d1eaff' }}>Instantly match your job openings with the best-fit candidates using advanced AI algorithms.</p>
        </div>
        <div style={{ background: '#1a2a3a', borderRadius: 16, padding: '2rem', boxShadow: '0 2px 12px #0002' }}>
          <h3 style={{ color: '#00c6ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Automated Outreach</h3>
          <p style={{ color: '#d1eaff' }}>Engage candidates automatically with personalized messages and scheduling.</p>
        </div>
        <div style={{ background: '#1a2a3a', borderRadius: 16, padding: '2rem', boxShadow: '0 2px 12px #0002' }}>
          <h3 style={{ color: '#00c6ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Collaborative Hiring</h3>
          <p style={{ color: '#d1eaff' }}>Work with your team in real-time, share notes, and make faster decisions together.</p>
        </div>
        <div style={{ background: '#1a2a3a', borderRadius: 16, padding: '2rem', boxShadow: '0 2px 12px #0002' }}>
          <h3 style={{ color: '#00c6ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Analytics Dashboard</h3>
          <p style={{ color: '#d1eaff' }}>Track your hiring pipeline, candidate engagement, and key metrics in one place.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'rgba(15,32,39,0.7)',
        padding: '3rem 1rem',
        margin: '0',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#00c6ff', fontWeight: 800, fontSize: '2rem', marginBottom: '2.5rem' }}>What Our Clients Say</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          <div style={{ background: '#22334a', borderRadius: 16, padding: '1.5rem', maxWidth: 340, color: '#d1eaff', boxShadow: '0 2px 8px #0002' }}>
            <p>“FetchTalent helped us cut our hiring time in half. The AI matching is spot on!”</p>
            <div style={{ marginTop: 12, fontWeight: 700 }}>— Sarah L., Tech Recruiter</div>
          </div>
          <div style={{ background: '#22334a', borderRadius: 16, padding: '1.5rem', maxWidth: 340, color: '#d1eaff', boxShadow: '0 2px 8px #0002' }}>
            <p>“The automated outreach saved us hours every week. Highly recommend!”</p>
            <div style={{ marginTop: 12, fontWeight: 700 }}>— Mike D., HR Manager</div>
          </div>
          <div style={{ background: '#22334a', borderRadius: 16, padding: '1.5rem', maxWidth: 340, color: '#d1eaff', boxShadow: '0 2px 8px #0002' }}>
            <p>“Our team collaboration improved dramatically. The dashboard is super helpful.”</p>
            <div style={{ marginTop: 12, fontWeight: 700 }}>— Priya S., Talent Lead</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '3rem 1rem 2rem 1rem',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#00c6ff', fontWeight: 800, fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Us</h2>
        <p style={{ color: '#d1eaff', marginBottom: '1.5rem' }}>Ready to transform your hiring? Reach out and our team will get back to you soon.</p>
        <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.7rem 1rem', borderRadius: 8, border: 'none', width: '100%', maxWidth: 350, fontSize: '1rem' }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.7rem 1rem', borderRadius: 8, border: 'none', width: '100%', maxWidth: 350, fontSize: '1rem' }} />
          <textarea placeholder="How can we help you?" required style={{ padding: '0.7rem 1rem', borderRadius: 8, border: 'none', width: '100%', maxWidth: 350, fontSize: '1rem', minHeight: 80 }} />
          <button type="submit" style={{ background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)', color: '#fff', padding: '0.8rem 2rem', borderRadius: '2rem', fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer', marginTop: 8 }}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        color: '#b0c4d4',
        padding: '2rem 1rem 1rem 1rem',
        fontSize: '0.95rem',
        marginTop: '2rem',
        borderTop: '1px solid #22334a',
        background: 'rgba(15,32,39,0.95)',
      }}>
        © {new Date().getFullYear()} FetchTalent. All rights reserved.
      </footer>
    </div>
  );
}
