import React from 'react'
import Layout from '../component/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../Images/Banner.jpg'
import '../styles/Homestyle.css'
import Aim from '../component/Aim'

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
            <div className='headerContainer'>
                <h1>OPslavvy Solutions</h1>
                <p>
                dynamic and forward-thinking Ecommerce Specialists <br/>
                that specializes in providing end-to-end solutions <br/>for Ecommerce sellers.</p>
                <Link to="/Contact">
                    <button>
                        Click to Contact
                    </button>
                </Link>
               
            </div>
        </div>
        <Aim/>
    </Layout>
  )
}

export default Home