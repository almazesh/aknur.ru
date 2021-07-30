import cls from './rightClear.module.css'
import One from '../../../assets/Article/oneBig.png'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import smOne from '../../../assets/Article/one.png'
const RightClear = () =>{
    const isSmall = useMediaQuery({query:'(max-width:414px)'})
    const {selectedLang:{rightClear , allArticle}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    return (
        <>
            <div className={cls.clean_banner}>
                <div className={cls.clean_title}>
                    <h1>{rightClear.title}</h1>
                </div>
                <div className={cls.clean_img}>
                    <img alt="" src={isSmall ? smOne : One}/>
                </div>

                <div className={cls.clean_text}>
                    <p>
                        {rightClear.text}
                    </p>

                    <div>
                        <h2>{rightClear.sortColor}</h2>
                        <p>
                           {rightClear.sortColorText}
                        </p>
                    </div>
                    <div>
                        <h2>{rightClear.sortStructure}</h2>
                        <p>{rightClear.sortStructureText}</p>
                    </div>
                    <div>
                        <h2>{rightClear.sortMad}</h2>
                        <p>{rightClear.sortMadText}</p>
                    </div>
                    <div>
                        <h2>{rightClear.choose}</h2>
                        <p>
                           {rightClear.chooseText}
                        </p>
                    </div>

                    <div>
                        <h3 className={cls.rejim}>
                            {rightClear.mode}
                        </h3>
                        <p>
                           {rightClear.modeText}
                        </p>

                        <h2>
                            {rightClear.temp}
                        </h2>

                        <p>
                            {rightClear.tempText}   
                        </p>
                    </div>
                    <div>
                        <h3 className={cls.nature}>{rightClear.nature}</h3>
                        <p>
                           {rightClear.natureText}
                        </p>
                    </div>
                    <div>
                        <h3 className={cls.sushka}>{rightClear.sushka}</h3>
                        <p>{rightClear.sushkaText}</p>
                    </div>
                    <div>
                        <h3 className={cls.glajka}>{rightClear.glaja}</h3>
                        <p>{rightClear.glajaText}</p>
                    </div>
                    <div>
                        <h3 className={cls.chemic}>{rightClear.chemic}</h3>
                        <p>{rightClear.chemicText}</p>
                    </div>
                    <div>
                        <h3 className={cls.notClean}>{rightClear.dontWash}</h3>
                        <p>{rightClear.dontWashText}</p>
                    </div>
                </div>
                
                <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                        <Link to='/right-clear'>
                            <button className={cls.activeBtn}>1</button>    
                        </Link>
                        <Link to='/prostyn'>
                            <button className={cls.unActiveBtn}>2</button>
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

export default RightClear