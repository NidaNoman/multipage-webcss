export default function Contact() {
    return (
      <div className="min-h-screen">
        <main className="main">
          <div className="contact-form-container">
            <h2 className="contact-title">Get in Touch</h2>
            <form>
              {/* Full Name Input */}
              <div className="form-group">
                <label htmlFor="name" className="label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  required
                />
              </div>
  
              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email" className="label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  required
                />
              </div>
  
              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message" className="label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
  