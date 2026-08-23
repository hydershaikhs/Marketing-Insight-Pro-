import React, { useState, useEffect } from 'react';
import { caseStudies } from '../data/caseStudies.js';
import Reveal from '../components/Reveal.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { 
  ArrowRight, 
  Sparkles, 
  Wrench, 
  Star, 
  X, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  useEffect(() => {
    document.title = "Portfolio | Marketing Insight Pro — Meta Ads & SEO Agency Pakistan";
  }, []);

  const filters = ['All', 'Meta Ads', 'SEO', 'Video Editing', 'Social Media', 'Copywriting'];

  const filteredStudies = caseStudies.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Meta Ads') return item.category === 'Meta Ads';
    if (activeFilter === 'SEO') return item.category === 'SEO';
    if (activeFilter === 'Video Editing') return item.category === 'Video Editing';
    if (activeFilter === 'Social Media') {
      return item.category === 'Social Media Post Design' || item.category === 'Social Media Managing';
    }
    if (activeFilter === 'Copywriting') return item.category === 'Content Writing';
    return false;
  });

  const brands = [
    { name: 'Aura Silk' },
    { name: 'PEPVIAL' },
    { name: 'PlanetCert' },
    { name: 'Nationwide Medical' },
    { name: 'DevForge' },
    { name: 'SaaSify' }
  ];

  const testimonials = [
    {
      name: 'Ayesha Khan',
      company: 'Aura Silk E-commerce',
      role: 'Founder',
      rating: 5,
      text: 'Their Meta Ads strategy turned our business around. We achieved a 4.8x ROAS and scaled our monthly revenue past ₨ 30 Lakhs in just 2 months!'
    },
    {
      name: 'Zain Malik',
      company: 'PEPVIAL',
      role: 'Marketing Lead',
      rating: 5,
      text: 'The SEO audit report they delivered was extremely technical and precise. We implemented their keyword strategy and saw a 150% boost in organic Google clicks.'
    },
    {
      name: 'Kamran Ahmed',
      company: 'PlanetCert',
      role: 'Creative Director',
      rating: 5,
      text: 'Their short-form video edits are incredible. Our reels average over 100K views now and conversion rates from social media have soared.'
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-header portfolio-hero">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px', color: '#FFFFFF' }}>
            <Sparkles size={14} className="gold-icon" /> Case Studies
          </div>
          <h1 className="portfolio-main-title">Real Results for <span className="gold-gradient-text">Real Businesses</span></h1>
          <p className="portfolio-hero-subtitle">
            We don't deliver reports or metrics that don't matter. We design campaigns focused strictly on sales, organic visibility, and scalable ROI.
          </p>

          {/* Stat Counters Grid */}
          <div className="portfolio-stats-row">
            <div className="p-stat-card glass-card">
              <Users size={20} className="gold-icon" />
              <div className="p-stat-val">50+</div>
              <div className="p-stat-lbl">Clients Scaled</div>
            </div>
            <div className="p-stat-card glass-card">
              <TrendingUp size={20} className="gold-icon" />
              <div className="p-stat-val">₨ 2Cr+</div>
              <div className="p-stat-lbl">Ad Spend Managed</div>
            </div>
            <div className="p-stat-card glass-card">
              <Award size={20} className="gold-icon" />
              <div className="p-stat-val">4.8★</div>
              <div className="p-stat-lbl">Client Rating</div>
            </div>
          </div>

          <button className="btn btn-gold portfolio-hero-cta" onClick={() => setCalendlyOpen(true)}>
            Book Free Strategy Call &rarr;
          </button>
        </div>
      </section>

      {/* MAIN PORTFOLIO SECTION */}
      <section className="section section-dark portfolio-main">
        <div className="container">
          
          {/* Filter Tabs */}
          <div className="filter-tabs-wrapper">
            <div className="filter-tabs-list">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-tab-btn ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <div className={`portfolio-card portfolio-card-${item.slug} glass-card`}>
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="card-result-badge">{item.resultMetric}</div>
                  </div>

                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <span className="portfolio-cat-tag">[{item.category}]</span>
                      <span className="portfolio-niche-tag">{item.niche}</span>
                    </div>

                    <h3>{item.title}</h3>
                    
                    <p className="card-result-preview-text">
                      <strong>Result:</strong> {item.result}
                    </p>

                    <button 
                      className="btn btn-gold btn-sm card-view-btn"
                      onClick={() => setSelectedStudy(item)}
                    >
                      View Case Study &rarr;
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center no-results-box">
              <p>No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* BRAND LOGO STRIP */}
      <section className="brands-strip-section">
        <div className="container">
          <h4 className="brands-strip-title">Brands We've Worked With</h4>
          <div className="brands-logo-flex">
            {brands.map((b, i) => (
              <div key={i} className="brand-logo-item">
                <Sparkles size={12} className="gold-icon" />
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section section-dark testimonials-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">Client Love</span>
            <h2>What Growth Partners <span className="gold-gradient-text">Say About Us</span></h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="testimonial-card glass-card">
                  <div className="t-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#BD892C" color="#BD892C" />
                    ))}
                  </div>
                  <p className="t-text">"{t.text}"</p>
                  <div className="t-user">
                    <div className="t-avatar-circle">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="t-name">{t.name}</h4>
                      <p className="t-comp">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* CASE STUDY DETAILS MODAL */}
      {selectedStudy && (
        <div className="case-study-modal-overlay" onClick={() => setSelectedStudy(null)}>
          <div className="case-study-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedStudy(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <span className="portfolio-cat-tag">[{selectedStudy.category}]</span>
              <h2>{selectedStudy.title} Case Study</h2>
              <div className="modal-subtitle">
                <span>Niche: <strong>{selectedStudy.niche}</strong></span>
                <span className="divider">|</span>
                <span className="gold-text">Outcome: <strong>{selectedStudy.resultMetric}</strong></span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-img-wrap">
                <img src={selectedStudy.image} alt={selectedStudy.title} />
              </div>

              <div className="modal-details-grid">
                <div className="modal-section-box">
                  <h3><Sparkles size={16} className="gold-icon" /> Campaign Goal</h3>
                  <p>{selectedStudy.goal}</p>
                </div>

                <div className="modal-section-box">
                  <h3><TrendingUp size={16} className="gold-icon" /> Our Strategy & Work Done</h3>
                  <p>{selectedStudy.solution}</p>
                </div>
              </div>

              <div className="modal-tools-section">
                <h4>Tools Applied:</h4>
                <div className="modal-tools-list">
                  {selectedStudy.tools.map((t) => (
                    <span key={t} className="tool-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-outcome-box">
                <h4>Final Measurement:</h4>
                <p className="outcome-result-text">
                  <CheckCircle2 size={16} className="gold-icon" /> {selectedStudy.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALENDLY BOOKING MODAL */}
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </>
  );
}
