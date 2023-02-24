import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <h2>Lorem ipsum, Lorem ipsum. Lorem ipsum, Lorem ipsum. Lorem ipsum</h2>

        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
      <Outlet />
    </div>
  );
}
