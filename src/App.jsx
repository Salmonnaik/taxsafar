import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

// Service Pages
import FileITR from './pages/FileITR';
import GSTRegistration from './pages/GSTRegistration';
import GSTFiling from './pages/GSTFiling';
import CompanyRegistration from './pages/CompanyRegistration';
import LLPRegistration from './pages/LLPRegistration';
import TDSFiling from './pages/TDSFiling';
import TaxAdvisory from './pages/TaxAdvisory';
import NoticeSupport from './pages/NoticeSupport';

// Company Pages
import OurCAs from './pages/OurCAs';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
import PartnerWithUs from './pages/PartnerWithUs';

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import Security from './pages/Security';
import CookiePolicy from './pages/CookiePolicy';

// Support Pages
import HelpCenter from './pages/HelpCenter';
import WhatsAppChat from './pages/WhatsAppChat';
import ClientPortal from './pages/ClientPortal';
import TrackStatus from './pages/TrackStatus';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Router>
          <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Service Pages */}
          <Route path="/file-itr" element={<FileITR />} />
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/gst-filing" element={<GSTFiling />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/llp-registration" element={<LLPRegistration />} />
          <Route path="/tds-filing" element={<TDSFiling />} />
          <Route path="/tax-advisory" element={<TaxAdvisory />} />
          <Route path="/notice-support" element={<NoticeSupport />} />

          {/* Company Pages */}
          <Route path="/our-cas" element={<OurCAs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Support Pages */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/whatsapp-chat" element={<WhatsAppChat />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/track-status" element={<TrackStatus />} />
        </Routes>
        </Router>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
