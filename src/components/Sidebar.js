import React from 'react';
import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

import { MdDashboardCustomize, MdCreateNewFolder } from 'react-icons/md';

import useAuthContext from "../hooks/useAuthContext";

const Sidebar = () => {

    const { user } = useAuthContext();

    return (
        <>
            <div className={styles["sidebar"]}>
                <div className={styles["username"]}>
                    Hello {user?.name}
                </div>

                <div className={styles["sidebar-links"]}>
                    <NavLink to="/" className={styles["sidebar-link"]}>
                        <span><MdDashboardCustomize /></span>
                        <p>Dashboard</p>
                    </NavLink>
                    
                    <NavLink to="/create-new-proejct" className={styles["sidebar-link"]}>
                        <span><MdCreateNewFolder /></span>
                        <p>New Project</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Sidebar;