import './index.css'

const ContactUs = () => (
  <>
    <div className="container">
      <h1>Contact Us</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">
          <a href="runnerproject.ccbp.tech" target="_blank">
            Submit
          </a>
        </button>
      </form>
    </div>
  </>
)

export default ContactUs
