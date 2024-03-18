import newsletterImg from "../assets/newsletterImg.png";
import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.newsletterContainer} container `}>
        <div className={`${styles.content}`}>
          <h2>Join Our Newsletter To Get Our Latest Offers</h2>
          <form>
            <input type="email" placeholder="your email address" />
            <button type="submit" className="button">
              Subscribe
            </button>
          </form>
        </div>
        <div className={`${styles.img}`}>
          <img src={newsletterImg} alt="newsletterImg" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
