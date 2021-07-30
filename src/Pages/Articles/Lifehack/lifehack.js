import cls from './Lifehack.module.css'
import Life from '../../../assets/Article/sixBig.png'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import smLife from '../../../assets/Article/six.png'
import { useMediaQuery } from 'react-responsive'
const Lifehack = () =>{
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    const isSmall = useMediaQuery({query:'(max-width:414px)'})

    const {selectedLang:{lifeHack , allArticle}} = useSelector(s => s.Lang)
    return (
        <>
            <div className={cls.lifehack_banner}>
                <div className={cls.lifehack_title}>
                    <h1>{lifeHack.title}</h1>
                    <img alt="" src={isSmall ? smLife : Life}/>
                </div>
                <div className={cls.lifehack_text}>
                     <h2>{lifeHack.puhov}</h2>
                     <p>
                         {lifeHack.puhovText}
                     </p>


                     <div>
                    <h2>{lifeHack.boots}</h2>
                    <p>
                        {lifeHack.bootsText}      
                    </p>
                </div>
                <div>
                    <h2>{lifeHack.thin}</h2>
                    <p>
                        {lifeHack.thinText}
                    </p>
                </div>
                <div>
                    <h2>{lifeHack.wool}</h2>
                    <p>
                        {lifeHack.woolText}
                    </p>
                </div>

                <div>
                    <h2>{lifeHack.child}</h2>
                    <p>
                        {lifeHack.childText}
                    </p>
                </div>
                </div>

                <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                        <Link to='/lifehack'>
                             <button className={cls.activeBtn}>3</button>
                        </Link>
                        <Link to="/deepclear">
                            <button className={cls.unActiveBtn}>4</button>
                        </Link>
                    </div>
                    <div className={cls.clean_allArticle }>
                        <Link to="/article">
                            <button>{allArticle.title}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lifehack