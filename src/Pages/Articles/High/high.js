import cls from './High.module.css'
import Four from '../../../assets/Article/fourBig.png'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import smFour from '../../../assets/Article/four.png'
const High = () =>{
    const isSmall = useMediaQuery({query:'(max-width:414px)'})
    const {selectedLang:{High , allArticle}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])

    return(
        <>
            <div className={cls.high_banner}>
                <div className={cls.high_title}>
                    <h1>{High.title}</h1>
                    <img alt="" src={isSmall ? smFour : Four}/>

                </div>
                <div className={cls.high_text}>
                    <p>
                    {High.text1}
                    <br/><br/>
                    {High.text2}
                    <br/><br/>
                    {High.text3}
                    <br/><br/>
                     {High.text4}
                    </p>
                </div>

                <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                       <Link to="/deepclear">
                        <button className={cls.activeBtn}>4</button>
                       </Link>
                        <Link to='/method'>
                            <button className={cls.unActiveBtn}>5</button>
                        </Link>
                    </div>
                    <div className={cls.clean_allArticle }>
                       <Link to='/article'>
                            <button>{allArticle.title}</button>
                       </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default High;