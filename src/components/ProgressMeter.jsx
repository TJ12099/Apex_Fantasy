export default function ProgressMeter({ value, label = 'Project progress' }) {
  const amount = Math.max(0, Math.min(100, value));

  return (
    <div className="meter">
      <div className="meter-head">
        <span className="meter-label">{label}</span>
        <span className="meter-value">{amount}%</span>
      </div>
      <div
        className="meter-track"
        role="progressbar"
        aria-valuenow={amount}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <span className="meter-fill" style={{ width: `${amount}%` }} />
      </div>
      <div className="meter-scale" aria-hidden="true">
        <span>Week 1</span>
        <span>Week 10</span>
      </div>
    </div>
  );
}
