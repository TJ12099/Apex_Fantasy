import heroWide from '../assets/hero-wide.jpg';

export default function PageHero({ eyebrow, title, children, aside }) {
  return (
    <section className="page-hero">
      <img className="page-hero-media" src={heroWide} alt="" />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-top">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {aside}
        </div>
        <h1 className="display display-md">{title}</h1>
        {children}
      </div>
    </section>
  );
}
