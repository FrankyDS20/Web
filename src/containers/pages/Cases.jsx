import CaseCard from "components/cases/CaseCard"
import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Cases(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(

    <Layout>
        <Navbar/>
        <div className="pt-28">
        <Header/>
        {/* <CaseCard/> */}
        <CasesList/>
        
        </div>
        
        <Footer/>
    </Layout>
    )
}
export default Cases