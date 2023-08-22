import ContactForm from "components/contact/ContactForm"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Blog(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(

    <Layout>
        <Navbar/>       
        <ContactForm/> 
        <Footer/>
    </Layout>
    )
}
export default Blog