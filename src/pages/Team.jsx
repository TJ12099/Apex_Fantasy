import { useEffect, useState } from 'react';
import GlowWave from '../components/GlowWave';
import { PROJECT_NAME } from '../config';
import { team } from '../data/team';

export default function Team() {
  const [selectedId, setSelectedId] = useState(team[2].id);
  const selected = team.find((member) => member.id === selectedId) ?? team[0];
  const selectedIndex = team.findIndex((member) => member.id === selected.id);

  useEffect(() => {
    document.title = `Team · ${PROJECT_NAME}`;
    return () => {
      document.title = PROJECT_NAME;
    };
  }, []);

  useEffect(() => {
    const list = document.querySelector('.roster');
    const card = document.getElementById(`crew-${selected.id}`);
    if (!list || !card) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const left = card.offsetLeft - (list.clientWidth - card.clientWidth) / 2;
    list.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
  }, [selected.id]);

  function showDescription() {
    document.getElementById('character-select')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showNext() {
    const next = team[(selectedIndex + 1) % team.length];
    setSelectedId(next.id);
  }

  return (
    <div className="cast">
      <section className="cast-hero">
        <p className="eyebrow">Now live</p>
        <h1 className="display cast-title">
          Meet the
          <span> crew</span>
        </h1>
        <p className="hero-lede cast-lede">
          Five people presenting {PROJECT_NAME} each week. Choose a portrait to see who speaks, who
          designs, and who keeps the record.
        </p>
        <div className="btn-row cast-actions">
          <button type="button" className="btn btn-primary cast-btn" onClick={showDescription}>
            Description
          </button>
          <button type="button" className="btn btn-ghost cast-btn" onClick={showNext}>
            Next for detail
          </button>
        </div>
      </section>

      <GlowWave />

      <section
        className="cast-roster"
        aria-labelledby="roster-heading"
        style={{ '--portrait': `url("${selected.image}")` }}
      >
        <h2 id="roster-heading" className="display display-sm">
          Character to play
        </h2>
        <ul className="roster">
          {team.map((member) => {
            const active = member.id === selected.id;
            return (
              <li id={`crew-${member.id}`} key={member.id}>
                <button
                  type="button"
                  className={`roster-card${active ? ' is-selected' : ''}`}
                  aria-pressed={active}
                  onClick={() => setSelectedId(member.id)}
                >
                  <img src={member.image} alt="" />
                  <span className="roster-name">{member.name}</span>
                  {active && <span className="roster-role">{member.roles[0]}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <GlowWave />

      <section className="dossier" id="character-select" aria-labelledby="select-heading">
        <div className="dossier-copy">
          <h2 id="select-heading" className="display display-md">
            Character
            <span> select</span>
          </h2>
          <p>{selected.summary}</p>
          <ul className="dossier-roles">
            {selected.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        <figure className="dossier-figure">
          <img src={selected.image} alt={`Avatar of ${selected.name}`} />
          <figcaption>— {selected.name}</figcaption>
        </figure>

        <ul className="callouts">
          {selected.traits.map((trait) => (
            <li key={trait.label}>
              <span className="callout-rule" aria-hidden="true" />
              <strong>{trait.label}</strong>
              <span>{trait.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
