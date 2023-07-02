import City from "./components/city";
import styles from './page.module.css';

export default async function Home() {
  //call getData from the api to fetch
  return (
    <div className={styles.content}>
      <City/>
      <div className={styles.text}>
        <p>> Welcome to Nola Devs, a software developers group in New Orleans! 
          We are a  community of passionate developers dedicated to collaboration, 
          learning, and growth. Join us to connect with like-minded professionals, 
          expand your skills, and make a lasting impact in the world of software 
          development<a className={styles.blinking}>_</a>
        </p>
      </div>
    </div>
  );
}
