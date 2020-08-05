import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png';
import './Menu.css';
import Button from '../components/Button';
//import ButtonLink from './Menu/components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link href="/">
            <img className="Logo" src={Logo} alt="KAFLIX LOGO"/>
            </Link>

            <Button className="ButtonLink" href="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;