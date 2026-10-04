import { useLayoutEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Mark from './Mark';
import BottomNav from './BottomNav';
import { PROJECT_NAME, TOTAL_WEEKS, activeWeek } from '../config';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/weeks', label: 'Weeks', end: false },
  { to: '/team', label: 'Team', end: false },
];

export default function Layout({ children }) {
  const week = activeWeek();
  const weekLabel = String(week).padStart(2, '0');
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="topbar">
        <div className="container topbar-inner">
          <Mark />
          <nav className="top-nav" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `top-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link to={`/week/${week}`} className="live-chip">
            <span className="live-dot" aria-hidden="true" />
            Week {weekLabel}
          </Link>
        </div>
      </header>

      <main id="content" className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Mark />
          <p>Weekly presentation companion · Week {weekLabel} of {TOTAL_WEEKS}</p>
          <p className="footer-fine">© 2026 {PROJECT_NAME}</p>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
