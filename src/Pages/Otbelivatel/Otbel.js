import cls from './Otbel.module.css'
import Clean from '../../assets/About/clean.png'
import Bubble from '../../assets/Main/bubble.png'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'

const Otbel = () =>{
    const {selectedLang:{Otbel}} = useSelector(s => s.Lang)
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
                    <h1>{Otbel.otbelTitle}</h1>
                    <p>
                       {Otbel.otbelText}
                    </p>
                </div>
                <div className={cls.clean_inline}>
                    <div className={cls.clean_left}>
                        <div className={cls.clean_card}>
                           <img alt="" src={Clean}/> 
                        </div>
                    </div>
                    <div className={cls.clean_right}>
                        <div>
                            <h2>{Otbel.structure}</h2>
                            <p>
                                {Otbel.structureText}
                            </p>
                        </div>
                        <div>
                            <h2>{Otbel.safe}</h2>
                            <p>
                               {Otbel.safeText}
                            </p>
                        </div>
                        <div>
                            <h2>{Otbel.local}</h2>
                            <p>
                                {Otbel.localText}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cls.clean_bubble}>
                    <img alt="" src={Bubble} className={cls.clean_b_one}/>
                    <img alt="" src={Bubble} className={cls.clean_b_two}/>
                    <img alt="" src={Bubble} className={cls.clean_b_three}/>
                    <img alt="" src={Bubble} className={cls.clean_b_four}/>
                </div>
            </div>
        </>
    )
}

export default Otbel