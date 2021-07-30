import './Ainur.css'
import Bubble from '../../assets/Main/bubble.png'
import { useState } from 'react'

// CARD
// import ColorCard400g from '../../assets/'
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



import b6kg from '../../assets/Ainur product/ainurCol6.png'
import b9kg from '../../assets/Ainur product/ainurCol9.png'
import b3kg from '../../assets/Ainur product/ainurCol3.png'



// Color card
import colorCard400g from '../../assets/Ainur product/colorCard400g.png'
import ColorCard3kg from '../../assets/Ainur product/colorCard3kg.png'
import ColorCard6kg from '../../assets/Ainur product/colorCard6kg.png'
import ColorCard9kg from '../../assets/Ainur product/colorCard9kg.png'

// Ainur

import ainurCard3 from '../../assets/Ainur product/ainurCard3.png'
import ainurCard6 from '../../assets/Ainur product/ainurCard6.png'
import ainurCard9 from '../../assets/Ainur product/ainurCard9.png'



// btn Purple
import ainurCol3 from '../../assets/Ainur product/3kg.png'
import ainurCol6 from '../../assets/Ainur product/6kg.png'
import ainurCol9 from '../../assets/Ainur product/9kg.png'
import {useSelector} from 'react-redux';


const Ainur = () =>{
    const {selectedLang:{Ainur , Aknur}} = useSelector(s => s.Lang)
    const data = [
        {
            id: 1,
            original: active400g,
            mainPicture: colorCard400g,
            thumbnail: bubble400g
            
        },
        {
            id: 2,
            original: active3kg,
            mainPicture: ColorCard3kg,
            thumbnail:bubble3kg
            
        },
        {
            id: 3,
            original: active6kg,
            mainPicture:ColorCard6kg,
            thumbnail:bubble6kg
        },
        {
            id: 4,
            original: active9kg,
            mainPicture:ColorCard9kg,
            thumbnail:bubble9kg
        }
    ]
    
    const dataColor = [
        {
            id: 1,
            original: ainurCol3,
            mainPicture: ainurCard3,
            thumbnail: b3kg
        },
        {
            id: 2,
            original: ainurCol6,
            mainPicture: ainurCard6,
            thumbnail: b6kg
        },
        {
            id:3,
            original: ainurCol9,
            mainPicture: ainurCard9,
            thumbnail: b9kg
        }
    ]
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
            <div className='ainur_banner'>
                <div className='ainur_title'>
                    <h1>{Ainur.ainur}</h1>
                    <p>
                        {Ainur.ainurText}
                    </p>
                </div>

                <div className='ainur_content_inline'>
                    <div   className='ainur_left'>
                        <div className='blue_back'>
                            <div 
                                className='card'
                                style={{
                                    backgroundImage: `url(${activeImg.mainPicture})` 
                                }}
                            >
                            </div>
                        </div>
                        <div className='slide_inline'>
                            {
                                data.map(item => (
                                    <div 
                                        onClick={() => {
                                            handleChangeImage(item)
                                        }}
                                        className='block' 
                                        key={item.id}
                                        style={{
                                            backgroundImage: `url(${item.id === activeImg.id ? item.original : item.thumbnail})`,
                                        }}>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className='ainur_right'>
                        <div>
                            <h2>{Ainur.structure}</h2>
                            <p>
                                {Ainur.structureText}
                            </p>
                        </div>
                        <div>
                            <h2>{Ainur.safe}</h2>
                            <p>
                                {Ainur.safeText}
                            </p>
                        </div>
                        <div>
                            <h2>{Ainur.local}</h2>
                            <p>
                               {Ainur.localText}
                            </p>
                        </div>
                    </div>  
                </div>
                <div className='ainur_inline_bubble'>
                    <div className='ainur_bubble_left'>
                        <img alt="" src={Bubble} className='bubble_ones'/>
                        <img alt="" src={Bubble} className='bubble_twos'/>
                        <img alt="" src={Bubble} className='bubble_threes'/>
                        <img alt="" src={Bubble} className='bubble_fours'/>
                    </div>
                    <div className='ainur_bubble_right'>
                        <div>
                            <h1>{Ainur.ainurAuto}</h1>
                            <p>
                                {Ainur.ainurAutoText}
                            </p>
                        </div>
                    </div>
                </div>
                 <div className='ainur_content_inline2'>
                    <div className='ainur_right'>
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
                    <div   className='ainur_left'>
                        <div className='blue_back'>
                            <div 
                                className='card'
                                style={{
                                    backgroundImage: `url(${activeColor.mainPicture})` 
                                }}
                            >
                            </div>
                        </div>
                        <div className='slide_inline'>
                            {
                                dataColor.map(item => (
                                    <div 
                                        onClick={() => {
                                            handleChangeColor(item)
                                        }}
                                        className='block' 
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

export default Ainur    