import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/services.js';
import { serviceImages } from '../data/serviceImages.js';
import heroDashboard from '../assets/hero-dashboard.webp';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import FaqItem from '../components/FaqItem.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { 
  TrendingUp, 
  Target, 
  Award, 
  Zap, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  Users,
  Clock,
  Check,
  MessageCircle,
  Briefcase,
  Layers,
  ArrowUpRight,
  ShieldCheck as ShieldIcon
} from 'lucide-react';
import './Home.css';

const stats = [
  { value: 50, suffix: '+', label: 'Campaigns Structured' },
  { value: 100, suffix: '%', label: 'Account Ownership & Transparency' },
  { value: 24, suffix: 'h', label: 'Response Time SLA' },
  { value: 4, suffix: '.9/5', label: 'Client Feedback Rating' },
];

const trustHighlights = [
  { name: 'Aura Silk E-Commerce', proof: '₨ 30L+ Revenue Scaled' },
  { name: 'PEPVIAL Global', proof: '+150% Organic Growth' },
  { name: 'PlanetCert Brand', proof: '240K+ Viral Video Views' },
  { name: 'Nationwide Medical', proof: '4.8x Meta Ads ROAS' },
  { name: 'DevForge Tech', proof: '100% Account Transparency' },
  { name: 'SaaSify Platforms', proof: 'High-Converting Copy' },
  { name: 'Verified Meta Partner Strategy', proof: 'Sales-Focused Funnels' },
  { name: 'Direct WhatsApp Support', proof: '< 24h Response SLA' }
];

const pillars = [
  {
    icon: ShieldCheck,
    title: '100% Account Transparency',
    desc: 'You retain full administrative ownership of your Meta Ad accounts, pixels, and data. Zero gatekeeping.'
  },
  {
    icon: Target,
    title: 'Revenue & Sales First',
    desc: 'Every campaign and asset is engineered strictly for customer acquisition, ROAS, and bottom-line profit.'
  },
  {
    icon: Zap,
    title: 'Senior Growth Engineers',
    desc: 'Your campaigns are managed directly by experienced specialists with proven track records scaling brands.'
  },
  {
    icon: Clock,
    title: 'Rapid 24-Hour SLA',
    desc: 'Fast communication, direct WhatsApp access, and weekly performance reviews to keep you ahead of competitors.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & Funnel Discovery',
    text: 'We analyze your ad account, audience behavior, competitor creatives, and brand presence to expose hidden growth bottlenecks.',
    icon: Target
  },
  {
    step: '02',
    title: 'High-Converting Creative & Strategy',
    text: 'We construct a bulletproof growth blueprint with custom ad creatives, authentic UGC videos, and engaging social assets.',
    icon: TrendingUp
  },
  {
    step: '03',
    title: 'Agile Execution & Scaling',
    text: 'High-converting Meta Ads, viral video edits, and branded social posts go live — managed by senior growth engineers.',
    icon: Zap
  },
  {
    step: '04',
    title: 'ROI Optimization & Analysis',
    text: 'We continuously test ad variations, analyze real-time ROAS metrics, and scale winning campaigns to accelerate revenue.',
    icon: Award
  },
];

const faqs = [
  {
    q: 'What does your Meta Ads service include?',
    a: 'We handle the complete Meta Ads lifecycle: custom funnel strategy, campaign setup on Meta Ads Manager, high-converting ad creative design, authentic UGC (User-Generated Content) ads, and continuous daily metric analysis to maximize your ROAS.',
  },
  {
    q: 'What video editing services do you offer?',
    a: 'We edit high-retention short-form and long-form videos for YouTube, Instagram Reels, TikTok, and Facebook. Our edits feature dynamic subtitles, sound design, visual hooks, seamless flow, and modern AI video generation.',
  },
  {
    q: 'What does your Social Media Management service cover?',
    a: 'We take complete ownership of your social channels: custom branded post and carousel design, short-form reels planning, direct-response copywriting and captions, consistent scheduling, and in-depth growth analytics.',
  },
  {
    q: 'How do you structure campaigns to maximize ROAS?',
    a: 'We combine rigorous audience testing, conversion-focused ad creatives, authentic UGC hooks, and daily data analytics within Meta Ads Manager to rapidly identify winners and scale profitably.',
  },
  {
    q: 'How fast do we get started?',
    a: 'Once we finalize our strategy session, onboarding begins within 24 hours. Your campaign architecture, creative designs, and content calendars are deployed without unnecessary delays.',
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled
        });
      }
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow-bg"></div>
        <div className="container hero-inner">
          <div className="hero-grid">
            <Reveal direction="left" className="hero-copy">
              <div className="hero-badge">
                <Sparkles size={14} className="gold-icon pulse-icon" /> HS Creatives • Create • Connect • Convert
              </div>

              <h1 className="hero-title">
                Scale Your Revenue With <span className="gold-gradient-text animated-gradient">Precision Meta Ads</span> & Creative Performance
              </h1>

              <p className="hero-sub">
                From high-converting Meta Ads & UGC setups to viral short-form video editing, AI video generation, and full-suite social media management — engineered by HS Creatives to help brands Create, Connect, and Convert.
              </p>

              <div className="hero-actions">
                <button className="btn btn-gold btn-glow shimmer-btn" onClick={() => setModalOpen(true)}>
                  <Calendar size={18} /> Book Strategy Session <ArrowRight size={18} className="cta-arrow" />
                </button>
                <a 
                  href="https://wa.me/923266739989" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline-gold hover-glow"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              <div className="hero-trust-pills">
                <span className="trust-pill"><Check size={14} className="gold-icon" /> 100% Data-Driven</span>
                <span className="trust-pill"><Check size={14} className="gold-icon" /> Full Account Transparency</span>
                <span className="trust-pill"><Check size={14} className="gold-icon" /> Rapid 24h SLA</span>
              </div>
            </Reveal>

            <Reveal direction="right" className="hero-visual-wrap">
              <div className="hero-mockup glass-card interactive-mockup">
                {/* Floating Badges */}
                <div className="floating-badge badge-roas floating-anim-1">
                  <TrendingUp size={16} className="gold-icon" />
                  <div>
                    <strong>Sales Focus</strong>
                    <span>High ROAS Setup</span>
                  </div>
                </div>

                <div className="floating-badge badge-reach floating-anim-2">
                  <Users size={16} className="gold-icon" />
                  <div>
                    <strong>50+ Brands</strong>
                    <span>Scaled Nationally</span>
                  </div>
                </div>

                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span /><span /><span />
                  </div>
                  <span className="mockup-title">Live Analytics Dashboard</span>
                </div>
                <div className="hero-video-wrap">
                  <video
                    ref={videoRef}
                    src="/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="hero-dashboard-video"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* STATS BAR WITH CONTINUOUS RUNNING LASER ANIMATION */}
          <div className="hero-stats-wrap glass-card interactive-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat-card">
                <strong className="stat-number">
                  <CountUp value={s.value} suffix={s.suffix} />
                </strong>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
            {/* Running Laser Line Animation */}
            <div className="stats-running-laser-line"></div>
          </div>

          {/* HIGH-TRUST CLIENT ACHIEVEMENTS TICKER STRIP WITH SEAMLESS INFINITE MARQUEE (RIGHT TO LEFT) */}
          <div className="hero-brands-ticker">
            <span className="brands-ticker-label">VALIDATED RESULTS & TRUST:</span>
            <div className="brands-marquee-wrapper">
              <div className="brands-marquee-track">
                {[...trustHighlights, ...trustHighlights, ...trustHighlights, ...trustHighlights].map((item, i) => (
                  <div key={i} className="trust-ticker-pill">
                    <Sparkles size={13} className="gold-icon" />
                    <strong className="ticker-brand-name">{item.name}</strong>
                    <span className="ticker-metric-badge">{item.proof}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / AGENCY PILLARS */}
      <section className="section section-dark agency-pillars-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Why Brands Choose Us
            </span>
            <h2>Built For <span className="gold-gradient-text animated-gradient">High-Growth Scalability</span></h2>
            <p>We eliminate guesswork with transparent processes, senior-level campaign engineering, and a focus on bottom-line profit.</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="pillar-card glass-card pc-hover-lift">
                    <div className="pillar-icon-box">
                      <PillarIcon size={24} className="gold-icon" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section-surface services-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Core Capabilities
            </span>
            <h2>Specialized Services Designed For <span className="gold-gradient-text animated-gradient">Aggressive Scale</span></h2>
            <p>Three core growth disciplines executed by senior specialists committed to maximum ROI.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = Icons[s.icon];
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <div className={`glass-card service-card service-card-${s.slug} pc-hover-lift`}>
                    <div className="service-card-top-bar">
                      <span className="service-number">0{i + 1}</span>
                      <div className="service-target-badge">{s.targetRoi}</div>
                    </div>
                    <div className="service-card-art">
                      <img src={serviceImages[s.slug]} alt={s.title} loading="lazy" />
                      <span className="service-card-art-overlay" />
                    </div>
                    <div className="service-icon-wrap">
                      {Icon && <Icon size={22} className="gold-icon" />}
                    </div>
                    <h3>{s.title}</h3>
                    <p className="service-card-desc">{s.short}</p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="service-card-deliverables">
                      {s.deliverables.slice(0, 3).map((d, dIdx) => (
                        <div key={dIdx} className="service-deliverable-item">
                          <CheckCircle2 size={13} className="gold-icon flex-shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/services" className="service-link">
                      Explore Capabilities <ArrowRight size={14} className="link-arrow" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="services-preview-cta">
            <Link to="/services" className="btn btn-outline-gold hover-glow">
              View Complete Service Catalog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROCESS */}
      <section className="section section-dark process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              The Growth Blueprint
            </span>
            <h2>Our 4-Step <span className="gold-gradient-text animated-gradient">Scalability Framework</span></h2>
            <p>A proven, systematic methodology that consistently transforms ad spend into profitable enterprise growth.</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((p, i) => {
              const StepIcon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 90}>
                  <div className="process-card glass-card pc-hover-lift">
                    <div className="process-top">
                      <span className="process-number">{p.step}</span>
                      <div className="process-icon">
                        <StepIcon size={22} className="gold-icon" />
                      </div>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="section section-dark testimonials-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Validated Success
            </span>
            <h2>Client Case Studies & <span className="gold-gradient-text animated-gradient">Testimonials</span></h2>
            <p>Discover how we help brands break growth plateaus and achieve market leadership.</p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section section-surface faq-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Got Questions?
            </span>
            <h2>Frequently Asked <span className="gold-gradient-text animated-gradient">Questions</span></h2>
            <p>Everything you need to know about working with HS Creatives.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
