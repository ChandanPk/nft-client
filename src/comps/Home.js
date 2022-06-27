// import { Container } from "@mui/material";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className={styles.topContainer}>
                <div className={styles.headingMain}>
                </div>
                <div className={styles.videoContainer}>
                    Img/Video
                </div>
                <div className={styles.introContainer}>
                    <h1 className={styles.introHeading}>
                        Welcome to sha tokens
                    </h1>
                    <div className={styles.flex1}>
                        <ul className={styles.listItems}>
                            <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum voluptatem dicta voluptatum veniam vitae nam dolorem, inventore ad repellendus!</li>
                            <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum voluptatem dicta voluptatum veniam vitae nam dolorem, inventore ad repellendus!</li>
                            <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum voluptatem dicta voluptatum veniam vitae nam dolorem, inventore ad repellendus!</li>
                            <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum voluptatem dicta voluptatum veniam vitae nam dolorem, inventore ad repellendus!</li>
                            <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum voluptatem dicta voluptatum veniam vitae nam dolorem, inventore ad repellendus!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.hr}></div>
            <div className={styles.container2}>
                <h1 className={styles.introHeading2}>ROADMAP ACTIVATIONS</h1>
                <div className={styles.roadmapIntro}>
                    <p className={styles.roadmapDesc}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className={styles.roadmapDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates eius consequatur ratione quo autem.</p>
                    <p className={styles.roadmapDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae!</p>
                </div>
                <div className={styles.checkpoints}>
                    <div className={styles.data}>
                        <p className={styles.percentageKey}>10%</p>
                        <p className={styles.valuePair}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.percentageKey}>30%</p>
                        <p className={styles.valuePair}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.percentageKey}>60% </p>
                        <p className={styles.valuePair}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.percentageKey}>80%</p>
                        <p className={styles.valuePair}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, culpa.</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.percentageKey}>100%</p>
                        <p className={styles.valuePairLast}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero!</p>
                    </div>
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.container2}>
                <h1 className={styles.introHeading2}>The Treasure Map</h1>
                <div className={styles.flex2}>
                    <div className={styles.mapContent}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. explicabo, atque perspiciatis ipsam nam sunt possimus adipisci quasi ea sint at illum rerum quam delectus reiciendis esse, enim a minima natus ducimus consequatur! Illum totam laboriosam ratione quod blanditiis consequuntur sapiente modi cum distinctio, veritatis voluptas labore eaque excepturi earum incidunt deserunt dolorem molestias alias facilis dolorum assumenda ullam! Incidunt, quod dolor voluptatibus deleniti, reprehenderit excepturi possimus doloribus corrupti nulla at mollitia.
                    </div>
                    <div className={styles.img3}>IMG</div>
                </div>
            </div>

        </>
    );
}

export default Home;