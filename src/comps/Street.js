import styles from '../styles/StreetPage.module.css'
import StreetDeskImg from '../assests/streetDesktopView.png'
import Navbar from './Navbar'
import StreetMobileViewImg from '../assests/streetMobileView.png'
const Music = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.musicImgContainer}>
                        <img className={styles.imgTag} src={StreetDeskImg} alt="test" />
                    </div>
                    <div className={styles.musicImgContainer2}>
                        <img className={styles.imgTag} src={StreetMobileViewImg} alt="test" />
                    </div>

                    <h2 className={styles.formHeader}>ENTER THE CODE HERE TO CLAIM YOUR NFT</h2>

                    <div className={styles.form}>
                        <input className={styles.reedomField} type="text" />
                        <button className={styles.btn}>VERIFY</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Music;