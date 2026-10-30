function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We are here to help you!</p>

        <div className="contact-details">
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>support@ecommerce.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Address</h3>
              <p>Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
