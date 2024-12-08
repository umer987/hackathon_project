import React from 'react'
import { Upperheader } from './component/header'
import Hero from './component/hero'
import Divs from './divs'
import Footer from './component/footer'
import Features from './features'
import Ceramics from './component/ceramics'
import Joinclub from './joinclub'
import Seclast from './seclast'
const home = () => {
  return (
    <div>

     <Upperheader />
     <Hero/>
     <Features/>
     <Divs/>
     <Ceramics/>
     <Joinclub/>
     <Seclast/>
     <Footer/>
   
    </div>
  )
}

export default home