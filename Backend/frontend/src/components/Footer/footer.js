import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='ftr'>
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
{/* <div class="container my-5"> */}

  {/* <!-- Footer --> */}
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "black"}}
          >
    {/* <!-- Section: Social media --> */}
    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "#50e645"}}
             >
      {/* <!-- Left --> */}
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* <!-- Left --> */}

      {/* <!-- Right --> */}
      <div>
        <a href="https://www.facebook.com/profile.php?id=100085522517564" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        {/* <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a> */}
        <a href="mailto:Dhoomdhamaka0@gmail.com" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/dhoomdhamaka" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        
      </div>
      {/* <!-- Right --> */}
    </section>
   <div className='row justify-content-center'>
     <div className='col-md-12 text-center'>
     <section class="my-5">
     
     <a
       class="btn text-white btn-floating m-1"
       style={{backgroundColor:" #3b5998"}}
       href="https://www.facebook.com/profile.php?id=100085522517564"
       role="button"
       ><i class="fab fa-facebook-f"></i
     ></a>

    
     {/* <a
       class="btn text-white btn-floating m-1"
       style={{backgroundColor:" #55acee"}}
       href="#!"
       role="button"
       ><i class="fab fa-twitter"></i
     ></a> */}

  
     <a
       class="btn text-white btn-floating m-1"
       style={{backgroundColor:" #dd4b39"}}
       href="mailto:Dhoomdhamaka0@gmail.com"
       role="button"
       ><i class="fab fa-google"></i
     ></a>

   
     <a
       class="btn text-white btn-floating m-1"
       style={{backgroundColor:" #ac2bac"}}
       href="https://www.instagram.com/dhoomdhamaka"
       role="button"
       ><i class="fab fa-instagram"></i
     ></a>

     <a
       class="btn text-white btn-floating m-1"
       style={{backgroundColor:" #0082ca"}}
       href="#!"
       role="button"
       ><i class="fab fa-linkedin-in"></i
     ></a>
    
   </section>
     </div>
   </div>
    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >dhoomdhamaka.com</a
        >
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}

{/* </div> */}
{/* <!-- End of .container --> */}
    </div>
  )
}

export default Footer