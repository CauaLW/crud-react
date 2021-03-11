import './Footer.css'
import React from 'react'

const Footer = props => {
    return (
        <footer className="footer">
            <span>
                Desenvolvido por Cauã L. Werling <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cau%C3%A3-loewen-werling-a564801b7/"><i className="icon fa fa-linkedin"></i></a> <a target="_blank" rel="noreferrer" href="https://github.com/CauaLW"><i id="github-icon" className="icon fa fa-github"></i></a>
            </span>
        </footer>
    )
}

export default Footer