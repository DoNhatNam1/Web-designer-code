import React, {useEffect} from 'react'
import './formpage.css'
import { PackagesContext } from '../../context/PackagesContext'
import { useNavigate } from 'react-router-dom'
import backendUrl from '../../apis/backend-url'
import { Link } from 'react-router-dom'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
const FormPage = () => {

useEffect(() =>{
  Aos.init({
    duration: 2000
  })
}, [])

//   const [tenKhach, setTenKhach] = useState("")
// const [dienThoai, setdienthoai] = useState()
// const { addPackages } = useContext(PackagesContext);
// let navigate = useNavigate();
// const createPost = async () => {
//   // e.preventDefault();
//   try {
//     const response = await backendUrl.post("/", {
//       tenkhach,
//       diachi,
//       dienthoai,
//     });
//     console.log(response.data.data);
//     addPackages(response.data.data.packages);
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(() => {
//   if(!packages) {
//     navigate("/")
//   }
// }, [])

  return (
    <>
    <Navbar />
    <section className='createPostPage'>
      <div className='cpContainer'>
        <h1 data-aos="fade-up" className='sec-title-form'> PLEASE ENTER YOUR INFORMATION</h1>
        <div className='inputGp flex'>
          <div className="input-item">
            <h2 data-aos="fade-up" className='third-title-form'><span>Personal Information</span></h2>
        <input data-aos="fade-left" placeholder='Name...'/>
          <input data-aos="fade-left" placeholder='Phone Number...'/>
          <input data-aos="fade-left" placeholder='Address...'/>
        <textarea data-aos="fade-left" className='form-note' placeholder='Note...'/>
        
        </div> 

        <div className="input-item">
        <div className="line-break">
        </div>
        </div>

        <div className="input-item">
          <h2 data-aos="fade-up" className='third-title-form'><span>Personal Information</span></h2>
        <input data-aos="fade-left" placeholder='Name...'/>
          <input data-aos="fade-left" placeholder='Phone Number...'/>
          <input data-aos="fade-left" placeholder='Address...'/>
        <textarea data-aos="fade-left" className='form-note' placeholder='Note...'/>
        
          </div>  
            
        </div>

        <div className="btn-submit flex">
        <button data-aos="fade-right" type='submit' className='btn'>BOOK</button>
        <Link to='..' relative='path'>
          <button data-aos="fade-right" className='btn'>Cancel</button>
          </Link>
        </div>

      </div>
    </section>
    <Footer />
    </>
  )
}

export default FormPage