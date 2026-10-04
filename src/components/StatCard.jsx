export default function StatCard({ icon: Icon, label, value, caption }) {
  return (
    <article className="stat-card">
      <Icon className="stat-icon" />
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-caption">{caption}</p>
    </article>
  );
}
