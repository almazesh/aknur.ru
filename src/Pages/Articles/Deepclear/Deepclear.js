import cls from './Deepclear.module.css'
import Two from '../../../assets/Article/twoBig.png'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
const Deepclear = () =>{
    const {selectedLang:{deepClear , allArticle}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])

    return (
        <>
            <div className={cls.deepclear_banner}>
                <div className={cls.deepclear_title}>
                    <h1>{deepClear.title}</h1>
                </div>
                <div className={cls.deepclear_img}>
                    <img alt="" src={Two}/>
                </div>

                <div className={cls.deepclear_text}>
                    <p>
                    {deepClear.text1}
                     <br /> <br/>
                    {deepClear.text2}
                    </p>

                    <div>
                        <h2>{deepClear.step1}</h2>
                        <p>
                            {deepClear.step1Text}
                        </p>
                    </div>
                    <div>
                        <h2>{deepClear.step2}</h2>
                        <p>
                            {deepClear.step2Text}
                        </p>
                    </div>
                    <div>
                        <h2>{deepClear.step3}</h2>
                        <p>
                            {deepClear.step3Text}
                        </p>
                    </div>
                </div>

                <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                        <Link to='/prostyn'>
                            <button className={cls.activeBtn}>3</button>
                        </Link>
                        <Link to='/high-clear'>
                            <button className={cls.unActiveBtn}>4</button>
                        </Link>
                    </div>
                    <div className={cls.clean_allArticle }>
                        <Link to="/article ">
                            <button>{allArticle.title}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deepclear;