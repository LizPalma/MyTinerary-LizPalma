import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const routes = [
    { to: "/", text: "Home" },
    { to: "/callaction", text: "Cities" },
];

export default function Header() {
    let [isOpen, setisOpen] = useState(false);

    return (
        <nav className="shadow-md w-full bg-blue-500 text-white p-4 top-0 left-0 opacity-70">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
                <ul className={`md:flex pl-9 md:pl-0 gap-4 ${isOpen ? "block" : "hidden"} md:block`}>
                    {routes.map((r, index) => (
                        <li key={index}>
                            <NavLink to={r.to} className={({ isActive }) => isActive ? "text-yellow-500 font-base hover:bg-white rounded-md p-1" : ""}>
                                {r.text}
                            </NavLink>
                        </li>
                    ))}
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                    </svg>
                </ul>
                <div onClick={() => setisOpen(!isOpen)} className="cursor-pointer absolute md:hidden right-8 top-6">
                    {isOpen ? (
                        <svg id="close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    ) : (
                        <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
}
