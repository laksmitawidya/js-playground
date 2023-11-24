import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/service">Service</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

// function CustomLink({ to, children, ...props }) {
//   return (
//     <li>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             backgroundColor: isActive ? "#555" : "inherit",
//           };
//         }}
//         className={({ isActive }) => {
//           return isActive ? "active" : "";
//         }}
//         to={to}
//         {...props}
//       >
//         {children}
//       </NavLink>
//     </li>
//   );
// }
