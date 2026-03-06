import Navbar from "./components/Navbar/navbar";
import "./page.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">

      
      <section className="section-home">
        <h1>
          "Every Animal Deserves A Home, Every Home Deserves A Little More Love"
        </h1>

        <div className="video-intro">
          <video
            src="/familyvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <div className="adoption">
        <h2>Ready To Meet Your New Best Friend?</h2>
        <p>Let's Get You Started</p>

        <Link href="/register">
          <button className="button-adopt-now">Adopt Now</button>
        </Link>
      </div>

            <div className="added-section">
                       <h1>More Than Adoption It’s a Lifelong Bond</h1>

        <div className="features">

          <div className="feature-card">
             <img src="/secure.jpg" alt="Secure adoption" />
          <p>Secure adoption process</p>
           </div>

          <div className="feature-card">
           <img src="/customer-picture.jpg" alt="Post adoption support" />
            <p>Post-adoption support</p>
          </div>

          <div className="feature-card">
            <img src="/healthchecked.jpg" alt="Health checked pets" />
            <p>Health Checked pets</p>
          </div>

       </div>
      </div>

<h1 className="heading-signup">Start your journey toward unconditional love </h1>
      <div className="signup-video">
        
        <video src="/signupvideopromote.mp4"
        autoPlay
            muted
            loop
            playsInline
            ></video>

      </div>

       <div className="faq-section">
       <h3>FAQ</h3>

        <h3>How long does adoption take?</h3>
        <p>
          Our adoption process typically takes a minimum of 4–5 days to complete.
          This allows us to carefully review applications, verify information,
         and ensure the best possible match between the dog and their new family
       </p>

        <h3>Is there a fee?</h3>
       <p>
          No, Adoption through our platform is completely free of charge
       </p>
        <h3>How to upload Images? </h3>
       <p>
          Open the photo page - Right-click the image - Click Open image in new tab- Copy the URL -
          Paste the image in Add Dog Image URL section
       </p>
      

        <h3>Are pets vaccinated?</h3>
        <p>
           Yes, every pet undergoes required vaccinations and a health evaluation
          prior to adoption to ensure their well-being
       </p>
      
      </div>



      <footer className="footer">
         <div className="footer-container">

          <div className="footer-brand">
             <h2>PetMe 🐶</h2>
            <p>
              Connecting loving families with dogs in need
              Every adoption changes a life
             </p>
          </div>

         <div className="footer-contact">
             <h4>Contact Us</h4>
            <p>Email: support@petme.com</p>
            <p>California, USA</p>
           </div>

        </div>

        <div className="footer-bottom">
           © 2026 PetMe. All rights reserved.
        </div>
      </footer>

    












</div>
    )}



    



 


