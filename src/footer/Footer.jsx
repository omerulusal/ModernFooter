import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-light pt-md-2">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-6 text-center">
                            <img src="/public/logo.jpg" className='img-fluid w-25 rounded-circle mr-md-4 ' alt="logo" />
                            <span>WIFI+</span>
                            <p className='text-left'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Veritatis, distinctio ratione natus
                                ipsum perspiciatis laboriosam odit voluptates cupiditate dolore, error iusto soluta! Quasi
                                tempora reprehenderit, doloribus soluta possimus iusto magni!
                            </p>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="col-md-4">
                                <h4 className=' mb-md-3 text-center'>Pages</h4>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link  link-light d-flex">Home</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">About</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Event</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Contact</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Login</a></li>
                            </div>
                            <div className="col-md-4">
                                <h4 className=' mb-md-3 text-center'>Referance Pages</h4>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Style Guide</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Instruction</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Licensing</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Changelog</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Style Guide</a></li>
                            </div>
                            <div className="col-md-4">
                                <h4 className=' mb-md-3 text-center'>Pages</h4>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Home</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">About</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Event</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Contact</a></li>
                                <li className="list d-flex align-items-center justify-content-center"><a href="#" className="nav-link link-light d-flex">Login</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="row m-auto">
                        <hr className="text-light" />
                        <div className="col-md-6">
                            <p className="text-center">
                                &copy; 2023 OM3R All Right Reserved
                            </p>
                        </div>
                        <div className="col-md-6">
                            <ul className="social d-flex justify-content-center align-content-lg-center col-4 m-auto mb-md-2">
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaFacebook className='social-links' size={32} />
                                </a></li>
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaTwitter className='social-links' size={32} />
                                </a></li>
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaInstagram className='social-links' size={32} />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer