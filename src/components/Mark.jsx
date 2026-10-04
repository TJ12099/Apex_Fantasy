import { Link } from 'react-router-dom';
import logo from '../assets/apex-logo.png';

export default function Mark() {
  return (
    <Link to="/" className="mark" aria-label="APEX Business Solutions home">
      <img className="mark-sigil" src={logo} alt="" />
      <span className="mark-word">APEX</span>
    </Link>
  );
}
