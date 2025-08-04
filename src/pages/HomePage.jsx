import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span>Naira Invoice API</span>
            </div>
            <h1 className="hero-title">Seamless Invoice Processing</h1>
            <p className="hero-description">
              Integrate powerful invoicing capabilities into your application with our comprehensive API.
              Create, manage, and process invoices with ease using our developer-friendly platform.
            </p>
            <div className="hero-actions">
              <a href="/api-documentation" className="btn-primary">
                <span>Get Started</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/quickstart" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
                <span>View Docs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          margin-top: 4rem;
        }

        .hero {
          padding: 8rem 0 4rem;
          position: relative;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .hero-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(53, 109, 0, 0.1) 0%, rgba(53, 109, 0, 0.05) 100%);
          animation: float-hero 20s ease-in-out infinite;
        }

        .hero-shape-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -150px;
          animation-delay: 0s;
        }

        .hero-shape-2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          left: -100px;
          animation-delay: -7s;
        }

        @keyframes float-hero {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(53, 109, 0, 0.1);
          color: rgba(53, 109, 0, 1);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(53, 109, 0, 0.2);
          box-shadow: 0 4px 12px rgba(53, 109, 0, 0.1);
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #111827 0%, #374151 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 639px) {
          .hero {
            padding: 6rem 0 3rem;
            min-height: 70vh;
          }

          .hero-title {
            font-size: 2rem;
            line-height: 1.1;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .hero-badge {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          .hero-actions {
            flex-direction: column;
          }
        }

        @media (min-width: 768px) {
          .hero {
            padding: 10rem 0 6rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero {
            padding: 12rem 0 8rem;
          }

          .hero-title {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;