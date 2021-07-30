import './Aknur.css'
import Bubble from '../../assets/Main/bubble.png'
import { useState , useEffect} from 'react'

// CARD
import AknurCard400 from '../../assets/Aknur product/AknurCard400.png'
import AknurCard6 from '../../assets/Aknur product/AknurCard6.png'
import AknurCard9 from '../../assets/Aknur product/AknurCard9.png'
import AknurCard3 from '../../assets/Aknur product/AknurCard3.png'



// BTN Active
import active400g from '../../assets/Aknur product/active400g.png'
import active3kg from '../../assets/Aknur product/active3kg.png'
import active6kg from '../../assets/Aknur product/active6kg.png'
import active9kg from '../../assets/Aknur product/active9kg.png'


// Btn Bubble

import bubble400g from '../../assets/Aknur product/bubble400g.png'
import bubble3kg from '../../assets/Aknur product/bubble3kg.png'
import bubble6kg from '../../assets/Aknur product/bubble6kg.png'
import bubble9kg from '../../assets/Aknur product/bubble9kg.png'




// Color card

import ColorCard3kg from '../../assets/Aknur product/colorCard3.png'
import ColorCard6kg from '../../assets/Aknur product/colorCard6.png'
import ColorCard9kg from '../../assets/Aknur product/colorCard9.png'
import {useSelector} from 'react-redux'


const Aknur = () =>{
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    const data = [
        {
            id: 1,
            original: active400g,
            mainPicture: AknurCard400,
            thumbnail: bubble400g
            
        },
        {
            id: 2,
            original: active3kg,
            mainPicture: AknurCard3,
            thumbnail:bubble3kg
            
        },
        {
            id: 3,
            original: active6kg,
            mainPicture:AknurCard6,
            thumbnail:bubble6kg
        },
        {
            id: 4,
            original: active9kg,
            mainPicture:AknurCard9,
            thumbnail:bubble9kg
        }
    ]
    
    const dataColor = [
        {
            id: 1,
            original: active3kg,
            mainPicture: ColorCard3kg,
            thumbnail: bubble3kg
        },
        {
            id: 2,
            original: active6kg,
            mainPicture: ColorCard6kg,
            thumbnail: bubble6kg
        },
        {
            id:3,
            original: active9kg,
            mainPicture: ColorCard9kg,
            thumbnail: bubble9kg
        }
    ]
    const {selectedLang:{Aknur}} = useSelector(r => r.Lang)
    const [activeImg, setActiveImg] = useState(data[1])
    const [activeColor , setActiveColor] = useState(dataColor[0])
    const handleChangeImage = item => {
        setActiveImg(item)
    }
    const handleChangeColor = item =>{
        setActiveColor(item)
    }
    return (
        <>
            <div className='aknur_banner'>
                <div className='aknur_title'>
                    <h1>{Aknur.aknurTitle}</h1>
                    <p>
                        {Aknur.aknurText}
                    </p>
                </div>

                <div className='aknur_content_inline'>
                    <div   className='aknur_left'>
                        <div 
                            className='cards cardNur'
                            style={{
                                backgroundImage: `url(${activeImg.mainPicture})` 
                            }}
                        >
                        </div>
                        <div className='slide_inlines'>
                            {
                                data.map(item => (
                                    <div 
                                        onClick={() => {
                                            handleChangeImage(item)
                                        }}
                                        className='first' 
                                        key={item.id}
                                        style={{
                                            backgroundImage: `url(${item.id === activeImg.id ? item.original : item.thumbnail})`,
                                        }}>
                                    </div>
                                ))
                            }
                           
                        </div>
                    </div>
                    <div className='aknur_right'>
                        <div>
                            <h2>{Aknur.structure}</h2>
                            <p>
                                {Aknur.structureText}
                            </p>
                        </div>
                        <div>
                            <h2>{Aknur.safe}</h2>
                            <p>
                                {Aknur.safeText}
                            </p>
                        </div>
                        <div>
                            <h2>{Aknur.local}</h2>
                            <p>
                               {Aknur.localText}
                            </p>
                        </div>
                    </div>  
                </div>
                <div className='aknur_inline_bubble'>
                    <div className='aknur_bubble_left'>
                        <img alt="" src={Bubble} className='bubble_ones'/>
                        <img alt="" src={Bubble} className='bubble_twos'/>
                        <img alt="" src={Bubble} className='bubble_threes'/>
                        <img alt="" src={Bubble} className='bubble_fours'/>
                    </div>
                    <div className='aknur_bubble_right'>
                        <div>
                            <h1>{Aknur.color}</h1>
                            <p>
                                {Aknur.colorText}
                            </p>
                        </div>
                    </div>
                </div>
                 <div className='aknur_content_inline2'>
                    <div className='aknur_right'>
                        <div>
                            <h2>{Aknur.structure}</h2>
                            <p>
                                {Aknur.structureText}
                            </p>
                        </div>
                        <div>
                            <h2>{Aknur.safe}</h2>
                            <p>
                                {Aknur.safeText}
                            </p>
                        </div>
                        <div>
                            <h2>{Aknur.local}</h2>
                            <p>
                               {Aknur.localText}
                            </p>
                        </div>
                    </div>  
                    <div   className='aknur_left'>
                        <div 
                            className='cards'
                            style={{
                                backgroundImage: `url(${activeColor.mainPicture})` 
                            }}
                        >
                        </div>
                        <div className='slide_inlines'>
                            {
                                dataColor.map(item => (
                                    <div 
                                        onClick={() => {
                                            handleChangeColor(item)
                                        }}
                                        className='first' 
                                        key={item.id}
                                        style={{
                                            backgroundImage: `url(${item.id === activeColor.id ? item.original : item.thumbnail})`,
                                        }}>
                                    </div>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aknur