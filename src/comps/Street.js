import styles from '../styles/StreetPage.module.css'
import StreetDeskImg from '../assests/streetDesktopView.png'
import Navbar from './Navbar'
import StreetMobileViewImg from '../assests/streetMobileView.png'
import { useState } from 'react'
const Street = () => {

    const [reedomCode, setReedomCode] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            const res = await fetch('http://localhost:8000/validatecoupon', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({reedomCoupon: reedomCode})
            })

            const data = res.json()
        } catch (error) {
            console.log(error)
        }
        
    }

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

                    <form onSubmit={e => {handleSubmit(e)}} className={styles.form}>
                        <input value={reedomCode} className={styles.reedomField} onChange={(e)=> setReedomCode(e.target.value)} type="text" />
                        <button className={styles.btn}>VERIFY</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Street;