import { Link } from "react-router-dom";
import React, { useState } from 'react';
import s from './ModalMenu.module.css';
import IconMobileMenu from "../Icons/IconMobileMenu/IconMobileMenu";
import IconLogo from "../Icons/IconLogo/IconLogo";
import IconClose from "../Icons/IconClose/IconClose"

const ModalMenu = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    
    return (
        <div className={s.container}>
            {isModalOpen && (
                <div className={s.modal}>
                    <div className={s.modalButtons}>
                        <IconLogo />
                        <button autofocus onClick={closeModal} className={s.modalClose}>
                            <IconClose />
                        </button>
                    </div>
                    <div className={s.modalLinks}>
                        <Link className={s.link} to="/categories/:categoryName">Categories</Link>
                        <Link className={s.link} to="/add">Add recipes</Link>
                        <Link className={s.link} to="/my">My recipes</Link>
                        <Link className={s.link} to="/favorite">Favorites</Link>
                        <Link className={s.link} to="/shopping-list">Shopping list</Link>
                        <Link className={s.link} to="/search">Search</Link>
                    </div>
                </div>
            )}
            {isModalOpen ? undefined : (
                <button className={s.menu} onClick={openModal}>
                     <IconMobileMenu />
                </button>
            )}
        </div>
    );
};

export default ModalMenu