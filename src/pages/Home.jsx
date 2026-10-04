import { Link } from 'react-router-dom';
import GlowWave from '../components/GlowWave';
import { IconArrow, IconCrew, IconOrbit, IconSatellite } from '../components/Icons';
import StatCard from '../components/StatCard';
import { TOTAL_WEEKS, activeWeek } from '../config';
import { team } from '../data/team';
import { getWeek, getWeekStatus, weeks } from '../data/weeks';
import earthRotation from '../assets/earth-rotation-loop1.mp4';
import heroWide from '../assets/hero-wide.jpg';
import touch from '../assets/touch.jpe';
import spaceship from '../assets/spaceship.jpe';

const pad = (value) => String(value).padStart(2, '0');

export default function Home() {
  const currentNumber = activeWeek();
  const current = getWeek(currentNumber);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-media">
          <video
            src={earthRotation}
            poster={heroWide}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            Live now · Week {pad(currentNumber)}
          </p>
          <h1 className="display display-xl">
            APEX
            <span>Business Solutions</span>
          </h1>
          <p className="hero-lede">
            Follow each week&apos;s presentation here on your phone. We update this page before
            each of our {TOTAL_WEEKS} presentations.
          </p>
          <div className="btn-row">
            <Link to={`/week/${currentNumber}`} className="btn btn-primary">
              Open week {pad(currentNumber)} briefing
            </Link>
            <Link to="/weeks" className="btn btn-ghost">
              All weeks
            </Link>
          </div>
        </div>
      </section>

      <section className="container stat-row" aria-label="Project at a glance">
        <StatCard
          icon={IconOrbit}
          label="Current week"
          value={`${pad(currentNumber)} / ${TOTAL_WEEKS}`}
          caption={current?.phase}
        />
        <StatCard
          icon={IconSatellite}
          label="Progress"
          value={`${current?.progress ?? 0}%`}
          caption="Project complete"
        />
        <StatCard
          icon={IconCrew}
          label="Team"
          value={pad(team.length)}
          caption="Presenters"
        />
      </section>

      {current && (
        <section className="container split" aria-labelledby="live-heading">
          <div className="split-copy">
            <p className="eyebrow">This week · {current.phase}</p>
            <h2 id="live-heading" className="display display-md">
              {current.title}
            </h2>
            <p className="body">{current.about}</p>
            <ul className="points">
              {current.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to={`/week/${current.week}`} className="btn btn-primary">
              View briefing
              <IconArrow className="btn-icon" />
            </Link>
          </div>
          <figure className="split-media">
            <img src={touch} alt="A human hand and a robotic hand touching, with a bright point of light between them" />
          </figure>
        </section>
      )}

      <GlowWave />

      <section className="container split split-reverse" aria-labelledby="journey-heading">
        <div className="split-copy">
          <p className="eyebrow">The journey</p>
          <h2 id="journey-heading" className="display display-md">
            Ten weeks
          </h2>
          <p className="body">
            Every presentation has its own briefing. Week {pad(currentNumber)} is live; the others
            stay open so you can look back or read ahead.
          </p>
          <ol className="journey">
            {weeks.map((week) => {
              const status = getWeekStatus(week.week, currentNumber);
              return (
                <li key={week.week}>
                  <Link
                    to={`/week/${week.week}`}
                    className={`journey-node is-${status}`}
                    aria-current={status === 'current' ? 'true' : undefined}
                    aria-label={`Week ${week.week}: ${week.phase}`}
                  >
                    {pad(week.week)}
                  </Link>
                </li>
              );
            })}
          </ol>
          <Link to="/weeks" className="btn btn-ghost">
            All weeks
            <IconArrow className="btn-icon" />
          </Link>
        </div>
        <figure className="split-media">
          <img src={spaceship} alt="A white futuristic spaceship with blue engine glow" />
        </figure>
      </section>
    </div>
  );
}
