import styles from '../styles/MusicPage.module.css'
import musicImg from '../assests/croped.png'
import Navbar from './Navbar'
import mobileViewImg from '../assests/musicMobileView.png'
const Music = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                    <div className={styles.musicImgContainer}>
                        <img className={styles.imgTag} src={musicImg} alt="test" />
                    </div>
                    <div className={styles.musicImgContainer2}>
                        <img className={styles.imgTag} src={mobileViewImg} alt="test" />
                    </div>
            </div>
        </>
    );
}

export default Music;