export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Skin Bliss Company. All rights reserved.</p>
          <ul>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  