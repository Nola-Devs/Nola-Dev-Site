import City from "./components/city";
//import the data from api
import getData from "../api/calendar";
import styles from './page.module.css';

export default async function Home() {
  //call getData from the api to fetch
  const data = await getData();
  return (
    <div className={styles.content}>
      <City/>
      <div className={styles.text}>
        <p>> Welcome to Nola Devs, a software developers group in New Orleans! 
          We are a  community of passionate developers dedicated to collaboration, 
          learning, and growth. Join us to connect with like-minded professionals, 
          expand your skills, and make a lasting impact in the world of software 
          development. We meet in person every Tuesday at <a href="https://goo.gl/maps/HCke6uF15yJrBMvU9">The Rusty Nail</a>
          <a className={styles.blinking}> _</a>
        </p>
      </div>
    </div>
  );
}
