import cls from './Method.module.css'
import Meth from '../../../assets/Article/fiveBig.png'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import smMeth from '../../../assets/Article/fiv.png'
import { useMediaQuery } from 'react-responsive'
const Method = () =>{
    const isSmall = useMediaQuery({query:'(max-width:414px)'})
    const {selectedLang:{Method , allArticle}} = useSelector(s => s.Lang)

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])

    return(
        <>
            <div className={cls.method_banner}>
                <div className={cls.method_title}>
                    <h1>{Method.title}</h1>
                    <img alt="" src={isSmall ? smMeth : Meth}/>
                </div>

                <div className={cls.method_text}>
                    <div>
                        <h2>{Method.choose}</h2>
                        <p>
                            {Method.chooseText}
                        </p>
                    </div>
                    <div>
                        <h2>{Method.method}</h2>
                        <h2>{Method.locate}</h2>
                        <p>
                            {Method.methodText1}
                        <br/><br/>
                          {Method.methodText2}
                        <br/><br/>
                            {Method.methodText3}
                        </p>
                    </div>
                    <div>
                        <h2>{Method.form}</h2>
                        <h2>{Method.poroshok}</h2>
                        <p>
                            {Method.formText}
                        </p>
                    </div>
                    <div>
                        <h2>{Method.gel}</h2>
                        <p>{Method.gelText}</p>
                    </div>

                    <div>
                        <h2>{Method.capsule}</h2>
                        <p>
                            {Method.capsuleText1}
                        </p>
                        <p>
                            {Method.capsuleText2}
                        </p>
                    </div>
                    <div>
                        <h2>{Method.otbel   }</h2>
                        <p>{Method.otbleText}</p>
                    </div>

                    <div>
                            <h2>{Method.condic}</h2>
                            <p>
                                {Method.condicText}
                            </p>
                    </div>
                </div>


                <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                        <Link to='/high-clear'>
                            <button className={cls.activeBtn}>5</button>
                        </Link>
                        <Link t='/method'>
                        <button className={cls.unActiveBtn}>6</button>
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

export default Method