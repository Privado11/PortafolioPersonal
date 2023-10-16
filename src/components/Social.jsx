import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../styles/Social.css";

function Social() {
  return (
    <div className="social__content">
      <ul className="social__content-list">
        <li className="social__content-list-item social__content-list-item--linkedin">
          <a
            className="social__content-list-item-link"
            href="https://www.linkedin.com/in/walter-jimenez9522/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <BsLinkedin />
            </span>
          </a>
          <p>LinkedIn</p>
        </li>
        <li className="social__content-list-item social__content-list-item--instagram">
          <a
            className="social__content-list-item-link"
            href="https://www.instagram.com/walterjimenez2210/"
            target="_blank"
          >
            <span>
              <BsInstagram />
            </span>
          </a>
          <p>Instagram</p>
        </li>
        <li className="social__content-list-item social__content-list-item--github">
          <a
            className="social__content-list-item-link"
            href="https://github.com/Privado11"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <BsGithub />
            </span>
          </a>
          <p>GitHub</p>
        </li>
      </ul>
    </div>
  );
}

export { Social };
