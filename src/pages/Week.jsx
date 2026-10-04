import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import GlowWave from '../components/GlowWave';
import { IconArrow, IconOrbit, IconSatellite, IconTarget, conceptIcons } from '../components/Icons';
import PageHero from '../components/PageHero';
import ProgressMeter from '../components/ProgressMeter';
import StatCard from '../components/StatCard';
import { PROJECT_NAME, TOTAL_WEEKS, activeWeek } from '../config';
import { getWeek, getWeekStatus } from '../data/weeks';
import spaceship from '../assets/spaceship.jpe';

const pad = (value) => String(value).padStart(2, '0');

export default function Week() {
  const { weekNumber } = useParams();
  const week = getWeek(Number(weekNumber));
  const current = activeWeek();

  useEffect(() => {
    if (!week) return;
    document.title = `${week.title} · Week ${week.week} · ${PROJECT_NAME}`;
    return () => {
      document.title = PROJECT_NAME;
    };
  }, [week]);

  if (!week) return <Navigate to="/weeks" replace />;

  const status = getWeekStatus(week.week, current);
  const previous = week.week > 1 ? week.week - 1 : null;
  const next = week.week < TOTAL_WEEKS ? week.week + 1 : null;

  return (
    <div className="inner-page">
      <PageHero
        eyebrow={`Week ${pad(week.week)} · ${week.phase}`}
        title={week.title}
        aside={
          status === 'current' ? (
            <span className="live-badge live-badge-sm">
              <span className="live-dot" aria-hidden="true" />
              Live
            </span>
          ) : null
        }
      >
        <p className="hero-lede">{week.about}</p>
      </PageHero>

      <div className="container page-body">
        <section className="stat-row stat-row-flat" aria-label="Week at a glance">
          <StatCard
            icon={IconOrbit}
            label="Week"
            value={`${pad(week.week)} / ${TOTAL_WEEKS}`}
            caption={week.phase}
          />
          <StatCard
            icon={IconSatellite}
            label="Progress"
            value={`${week.progress}%`}
            caption="Project complete"
          />
          <StatCard
            icon={IconTarget}
            label="Objectives"
            value={pad(week.objectives.length)}
            caption="This presentation"
          />
        </section>

        <div className="detail-grid">
          <section className="card" aria-labelledby="summary-heading">
            <p className="eyebrow eyebrow-sm">Overview</p>
            <h2 id="summary-heading" className="card-title">
              Summary
            </h2>
            <ul className="points">
              {week.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card" aria-labelledby="objectives-heading">
            <p className="eyebrow eyebrow-sm">Goals</p>
            <h2 id="objectives-heading" className="card-title">
              Objectives
            </h2>
            <ol className="objectives">
              {week.objectives.map((item, index) => (
                <li key={item}>
                  <span className="objective-num" aria-hidden="true">
                    {pad(index + 1)}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="card" aria-labelledby="progress-heading">
          <p className="eyebrow eyebrow-sm">
            Week {week.week} of {TOTAL_WEEKS}
          </p>
          <h2 id="progress-heading" className="card-title">
            Project progress
          </h2>
          <ProgressMeter value={week.progress} />
          <p className="body">{week.progressNote}</p>
        </section>

        <section aria-labelledby="concepts-heading" className="concepts">
          <p className="eyebrow">Covered this week</p>
          <h2 id="concepts-heading" className="display display-sm">
            Key concepts
          </h2>
          <div className="concept-grid">
            {week.concepts.map((concept, index) => {
              const Icon = conceptIcons[index % conceptIcons.length];
              return (
                <article key={concept.title} className="card concept-card">
                  <Icon className="concept-icon" />
                  <h3>{concept.title}</h3>
                  <p className="body">{concept.detail}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <GlowWave />

      <section className="container split split-reverse" aria-labelledby="next-heading">
        <div className="split-copy">
          <p className="eyebrow">Next week</p>
          <h2 id="next-heading" className="display display-sm">
            {next ? `Week ${pad(next)}` : 'Final week'}
          </h2>
          <p className="body body-bright">
            {week.nextWeek ??
              'This is the final presentation. There is no following week in the module.'}
          </p>
          {next && (
            <Link to={`/week/${next}`} className="btn btn-ghost">
              Preview week {pad(next)}
              <IconArrow className="btn-icon" />
            </Link>
          )}
        </div>
        <figure className="split-media split-media-sm">
          <img src={spaceship} alt="" />
        </figure>
      </section>

      <nav className="container week-pager" aria-label="Other weeks">
        {previous ? (
          <Link to={`/week/${previous}`} className="pager-link">
            <span className="pager-hint">Previous</span>
            <span>Week {pad(previous)}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/week/${next}`} className="pager-link pager-link-next">
            <span className="pager-hint">Next</span>
            <span>Week {pad(next)}</span>
          </Link>
        ) : (
          <Link to="/weeks" className="pager-link pager-link-next">
            <span className="pager-hint">Back to</span>
            <span>All weeks</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
