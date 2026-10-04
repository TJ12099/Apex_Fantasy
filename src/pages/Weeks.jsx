import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { TOTAL_WEEKS, activeWeek } from '../config';
import { getWeekStatus, weeks } from '../data/weeks';

const pad = (value) => String(value).padStart(2, '0');
const STATUS_LABEL = { current: 'Live', complete: 'Done', upcoming: 'Soon' };

export default function Weeks() {
  const current = activeWeek();

  useEffect(() => {
    const node = document.getElementById(`week-${current}`);
    if (!node) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    node.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  }, [current]);

  return (
    <div className="inner-page">
      <PageHero eyebrow={`${TOTAL_WEEKS} presentations`} title="All weeks">
        <p className="hero-lede">
          Week {pad(current)} is the live presentation. Earlier and later weeks stay here so you
          can look back or read ahead.
        </p>
      </PageHero>

      <div className="container page-body">
        <ol className="week-list">
          {weeks.map((week) => {
            const status = getWeekStatus(week.week, current);
            return (
              <li key={week.week} id={`week-${week.week}`}>
                <Link
                  to={`/week/${week.week}`}
                  className={`week-card is-${status}`}
                  aria-current={status === 'current' ? 'true' : undefined}
                >
                  <span className="week-num" aria-hidden="true">
                    {pad(week.week)}
                  </span>
                  <span className="week-copy">
                    <span className="eyebrow eyebrow-sm">{week.phase}</span>
                    <span className="week-title">{week.title}</span>
                    <span className="week-bar" aria-hidden="true">
                      <span style={{ width: `${week.progress}%` }} />
                    </span>
                    <span className="week-meta">{week.progress}% project progress</span>
                  </span>
                  <span className={`status status-${status}`}>
                    {status === 'current' && <span className="live-dot" aria-hidden="true" />}
                    {STATUS_LABEL[status]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
