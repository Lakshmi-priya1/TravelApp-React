import "../assets/Contact.css";
import ContactCard from "../components/ContactCard";

function Contact() {
  return (
    <div className="contact-section py-5">
      <div className="container text-center">
        <h1 className="fw-semibold mb-4 text-white">
             Contact Us 📞
        </h1>    
        <p className="text-light mb-5">
          Have questions or need assistance? We're here to help!
          Reach out to us through any of the following channels.
        </p>
        
        <div className="row">
          <ContactCard 
            title="📍 Address" 
            value="Chennai, Tamil Nadu, India" 
          />

          <ContactCard 
            title="📧 Email" 
            value="support@travelworld.com" 
          />

          <ContactCard 
            title="📱 Phone" 
            value="+91 98765 43210" 
          />
          <ContactCard 
            title="🌐 Website" 
            value="www.travelworld.com" 
          />
            <ContactCard    
            title="⏰ Working Hours" 
            value="Mon-Fri: 9am - 6pm" 
          />
          <ContactCard 
            title="💬 Live Chat" 
            value="Available 24/7" 
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;