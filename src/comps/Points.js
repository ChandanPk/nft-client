import Navbar from './Navbar'
import styles from '../styles/Points.module.css'
import { useEffect, useState, useContext } from 'react'
// import { useCookies } from 'react-cookie'
// import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contextApi/AuthContext'

const Points = () => {


    // const [hide, setHide] = useState(true)

    const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const [cookies, setCookies] = useCookies();

    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)
    // const navigate = useNavigate()

    // const checkUser = async() => {
    //     try {
    //         const res = await fetch('http://localhost:8000/checkuser', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({token: cookies.jwt})
    //         })
    //         const data = await res.json()
    //         if(data.status === "bad auth"){
    //             console.log("bad auth user")
    //             alert("Dekho pehle login kaaro")
    //             setOpen(true)
    //             setLogin(true)
    //             console.log(open, login)
    //             navigate('/test', { replace: true})
    //         } else if(data.status === "good auth"){
    //             console.log("Sab badiya")
    //             setHide(false)
    //         }
    //     } catch (error) {
    //         console.log("error: ", error)
    //     }
    // }

    // useEffect(() => {
    //     checkUser()
    // }, [])

    return (
        <>
        
            <Navbar />
            {/* { !hide && */}
            <div className={styles.container}>
                <h1 className={styles.topHeader}>TOP 10</h1>
                <p className={styles.scoreHolderText}>SCORE HOLDERS</p>

                <div className={styles.scoreHolders}>

                    {players.map(player => {
                        return <div key={player} className={styles.player}>
                            <div className={styles.names}>
                                <p className={styles.index}>1</p>
                                <p className={styles.name}>George W. Bush</p>
                            </div>
                            <div className={styles.point}>POINTS</div>
                        </div>
                    })}
                </div>

                <div className={styles.container2}>
                    <h2 className={styles.heading2}>
                        The treasure map can only be won ny earning SHA POINTS
                    </h2>
                    <h2 className={styles.subHeading}>Ways to get sha points</h2>
                    <li className={styles.listItem}>The members who purchases the NFT will get 10k Sha points.</li>
                    <li className={styles.listItem}>when someone buys merch they even get points addon.</li>
                    <li className={styles.listItem}>whenever you talk or do promo about Sha tokens on your social networks,
                        submit that link here and you'll get great number of sha points.</li>
                    <p className={styles.note}>
                        It can be any platform ( youtube, twitter, instagram, reels, memes, twitch, discord )
                        Example ( make a youtube video explaining sha tokens or part of it )
                    </p>
                </div>
                <div className={styles.formContainer}>
                    <p className={styles.note2}>( points will be assigned as per the quality of the content, duration and insights. )</p>
                    <input className={styles.urlField} type="text" placeholder='Submit your links here' />
                    <button className={styles.btn}>SUBMIT</button>
                </div>
            </div>
            {/* } */}
        </>
    );
}

export default Points;

