import cls from './Main.module.css'
import Aknur from '../../../assets/Main/aknur.png'
import Ainur from '../../../assets/Main/ainur.png'
import Bubble from '../../../assets/Main/bubble.png'
import Frame from '../../../assets/Main/frame.png'
import Instagram from '../../../assets/Main/blueInstagram.png'
import Vector from '../../../assets/Main/Vector.png'
import Formula from '../Formula/Formula'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
const Main = () =>{
    const {selectedLang:{Mains}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    return (
        <>
            <div className={cls.main_banner}>
                <div className={cls.main_content}>
     
                    <div className={cls.main_inline}>
                        <div className={cls.main_left}>
                            <h1>{Mains.mainLeft}</h1>
                        </div>
                        <div className={cls.main_center}>
                            <div className={cls.main_center_relative}>
                                <img alt="" src={Bubble} className={cls.bubble_first}/>
                                <img alt="" src={Bubble} className={cls.bubble_second}/>
                                <img alt="" src={Bubble} className={cls.bubble_third}/>
                                <img alt="" src={Bubble} className={cls.bubble_fourth}/>
                                <div>
                                    <img alt="" src={Aknur}/>
                                    <img alt="" src={Ainur}/>
                                </div>
                                <img alt="" src={Bubble} className={cls.bubble_five}/>
                                <img alt="" src={Bubble} className={cls.bubble_six}/>
                                <img alt="" src={Bubble} className={cls.bubble_seven}/>
                                <img alt="" src={Bubble} className={cls.bubble_eight}/>
                                <img alt="" src ={Frame} className={cls.main_frame}/>
                                <img alt="" src={Instagram} className={cls.main_instagram}/>
                                <img alt="" src={Vector} className={cls.main_wave}/>
                                
                            </div>
                        </div>
                        <div className={cls.main_right}>
                            <h1>{Mains.mainRight}</h1>
                        </div>
                    </div>
                </div>
            </div>


            <Formula />
        </>
    )
}

export default Main