import cls from './Prostyn.module.css'
import Prost from '../../../assets/Article/Prostyn/prostyn.png';
import smProst from '../../../assets/Article/three.png'
import {Link} from  'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
const Prostyn = () =>{
    const isSmall = useMediaQuery({query:'(max-width:414px)'})
    const {selectedLang:{Prostyns , allArticle}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    return (
        <>      
            <div className={cls.prostyn_banner}>
                 <div className={cls.prostyn_title}>
                      <h1>{Prostyns.title}</h1>
                 </div>
                 <div className={cls.prostyn_img}>
                     <img alt="" src={isSmall ? smProst : Prost}/>
                 </div>
                 <div className={cls.prostyn_text}>
                     <p className={cls.pad_text}>
                       {Prostyns.text}
                     </p>
                     <div>
                         <h2>{Prostyns.etiket}</h2>
                         <p>
                            {Prostyns.etiketText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.wash}</h2>
                         <p>
                            {Prostyns.washText}
                         </p>
                     </div>
                     <div>
                         <h2>
                            {Prostyns.repeat}
                         </h2>
                         <p>
                            {Prostyns.repeatText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.sort} </h2>
                         <p>
                            {Prostyns.sortText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.sushka}</h2>
                         <p>
                            {Prostyns.sushkaText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.glaja}</h2>
                         <p>
                            {Prostyns.glajaText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.storage}</h2>
                         <p>
                            {Prostyns.storageText}
                         </p>
                     </div>
                     <div>
                         <h2>{Prostyns.definit}</h2>
                         <p>
                            {Prostyns.definitText}
                         </p>
                     </div>
                 </div>
                 <div className={cls.clean_buttons}>
                    <div className={cls.clean_twoButtons}>
                        <Link to='/prostyn'>
                            <button className={cls.activeBtn}>2</button>
                        </Link>
                        <Link to='/lifehack'>
                            <button className={cls.unActiveBtn}>3</button>
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

export default Prostyn;