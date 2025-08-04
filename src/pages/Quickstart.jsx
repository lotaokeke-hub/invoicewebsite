import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, FileText, CheckCircle, Info } from 'lucide-react';
import './Quickstart.css';

const Quickstart = () => {
  const [activeTocItem, setActiveTocItem] = useState('step-1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.step-section');
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveTocItem(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = section.offsetTop - navbarHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="quickstart-page">
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Table of Contents */}
            <aside className="table-of-contents">
              <h3 className="toc-title">Table of Contents</h3>
              <ul className="toc-list">
                {[
                  { id: 'step-1', title: 'Step 1. Creating a Developer Account' },
                  { id: 'step-2', title: 'Step 2. Configure Your Integration' },
                  { id: 'step-3', title: 'Step 3. Create Your Account' },
                  { id: 'step-4', title: 'Step 4. Completing Your KYC' },
                  { id: 'step-infinity', title: 'Step ∞. Going Live🎉' }
                ].map(item => (
                  <li 
                    key={item.id}
                    className={`toc-item ${activeTocItem === item.id ? 'active' : ''}`}
                  >
                    <button 
                      className="toc-link"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content */}
            <article className="quickstart-content">
              {/* Header */}
              <header className="quickstart-header">
                <div className="header-illustration">
                  <div className="illustration-shape shape-1"></div>
                  <div className="illustration-shape shape-2"></div>
                  <div className="illustration-shape shape-3"></div>
                  <div className="illustration-shape shape-4"></div>
                </div>

                <h1 className="page-title">Quickstart</h1>
                <p className="page-subtitle">Understand the Integration journey before you commence.</p>
                <p className="intro-text">To integrate Naira Invoice into your application, follow this step-by-step guide.</p>
              </header>

              {/* Step 1: Creating a Developer Account */}
              <section id="step-1" className="step-section">
                <div className="step-header">
                  <div className="step-number">1</div>
                  <h2 className="step-title">Creating a Developer Account</h2>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    Sign up for a free developer <a href="#" className="highlight-link">account</a>. This gives you access to our sandbox environment, where you can test and simulate all our features.
                  </p>

                  <p className="step-description">In the sandbox (test) environment, you will be able to:</p>

                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="feature-number">1</div>
                      <div className="feature-text">Create and manage test invoices using mock data.</div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">2</div>
                      <div className="feature-text">Test payment processing and webhook notifications.</div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">3</div>
                      <div className="feature-text">Simulate invoice compliance and validation processes.</div>
                    </li>
                  </ul>

                  <p className="step-description">
                    Learn more about testing in the <a href="#" className="highlight-link">sandbox</a>.
                  </p>

                  <div className="action-links">
                    <a href="#" className="btn-primary">
                      <span>Create Developer Account</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="#" className="btn-secondary">
                      <FileText size={16} />
                      <span>View Sandbox Guide</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Step 2: Configure Your Integration */}
              <section id="step-2" className="step-section">
                <div className="step-header">
                  <div className="step-number">2</div>
                  <h2 className="step-title">Configure Your Integration</h2>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    Naira Invoice supports multiple integration options depending on your stack and needs:
                  </p>

                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="feature-number">1</div>
                      <div className="feature-text">
                        <strong>Naira Invoice Standard</strong> - Generate Naira Invoice checkout UI using the standard API.
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">2</div>
                      <div className="feature-text">
                        <strong>Libraries (SDKs) and Plugins</strong> - Use our pre-built integrations for popular frameworks.
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">3</div>
                      <div className="feature-text">
                        <strong>Direct API integrations</strong> - Process invoices from your server using Naira Invoice's endpoints.
                      </div>
                    </li>
                  </ul>

                  <div className="info-box">
                    <div className="info-header">
                      <Info className="info-icon" size={24} />
                      <h4 className="info-title">New to APIs?</h4>
                    </div>
                    <div className="info-content">
                      <a href="#" className="info-link">Read this beginner-friendly guide</a> to understand how APIs work and how to use them in your app.
                    </div>
                  </div>

                  <p className="step-description">
                    Once you've picked an integration method, test it thoroughly using sandbox credentials and mock data. We've compiled <a href="#" className="highlight-link">common errors</a> and <a href="#" className="highlight-link">best practices</a> to help you troubleshoot issues early.
                  </p>

                  <div className="action-links">
                    <a href="#" className="btn-primary">
                      <span>Choose Integration Method</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="#" className="btn-secondary">
                      <CheckCircle size={16} />
                      <span>Test Integration</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Step 3: Create Your Account */}
              <section id="step-3" className="step-section">
                <div className="step-header">
                  <div className="step-number">3</div>
                  <h2 className="step-title">Create Your Account</h2>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    After completing your integration, sign up for a production <a href="#" className="highlight-link">account</a>. This account gives you access to actual invoice processing capabilities.
                  </p>

                  <div className="action-links">
                    <a href="#" className="btn-primary">
                      <span>Create Production Account</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </section>

              {/* Step 4: Completing Your KYC */}
              <section id="step-4" className="step-section">
                <div className="step-header">
                  <div className="step-number">4</div>
                  <h2 className="step-title">Completing Your KYC</h2>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    To start processing live invoices, you will need to complete your KYC verification process, which involves submitting a copy of your business registration and <a href="#" className="highlight-link">other documents</a>.
                  </p>

                  <div className="action-links">
                    <a href="#" className="btn-primary">
                      <span>Complete KYC</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="#" className="btn-secondary">
                      <FileText size={16} />
                      <span>KYC Requirements</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Step ∞: Going Live */}
              <section id="step-infinity" className="step-section step-infinity">
                <div className="step-header">
                  <div className="step-number">∞</div>
                  <h2 className="step-title">Going Live🎉</h2>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    Once your account is verified and approved, you're ready to start processing real invoices and accepting payments from your Naira Invoice dashboard.
                  </p>

                  <p className="step-description">Before you start invoicing:</p>

                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="feature-number">1</div>
                      <div className="feature-text">
                        <strong>Explore your dashboard</strong>: It has more settings and features than the test mode. <a href="#" className="highlight-link">Watch our quick demo</a> to learn your way around.
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">2</div>
                      <div className="feature-text">
                        <strong>Review your integration</strong>: Use our <a href="#" className="highlight-link">go-live checklist</a> to double-check everything works as expected.
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-number">3</div>
                      <div className="feature-text">
                        <strong>Transfer your settings</strong>: Apply the same configurations (webhooks, redirect URLs, allowed domains, etc.) from test mode to your live account.
                      </div>
                    </li>
                  </ul>

                  <div className="action-links">
                    <a href="#" className="btn-primary">
                      <span>Go to Dashboard</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="#" className="btn-secondary">
                      <CheckCircle size={16} />
                      <span>Go-Live Checklist</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Page Navigation */}
              <nav className="page-navigation">
                <a href="/api-documentation" className="nav-btn">
                  <ArrowLeft size={16} />
                  <span>Getting Started</span>
                </a>
                <a href="#" className="nav-btn nav-btn-next">
                  <span>Support</span>
                  <ArrowRight size={16} />
                </a>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quickstart;