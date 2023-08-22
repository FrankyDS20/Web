import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import LogoCloud from "components/home/LogoCloud"
import UseCases from "components/home/UseCases"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(

    <Layout>
        <Navbar/>
        <div className="pt-28">
         <Header/>
         <Features/>
         <UseCases/>
         <Incentives/>
         <CTA/>
        <LogoCloud/>
        {/* <BlogList/> */}
        </div>
        
        <Footer/>
    </Layout>
    )
}
export default Home