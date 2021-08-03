import cls from './footer.module.css'
import Frame from '../../assets/Footer/Frame.png'
import Instagram from '../../assets/Footer/Vector.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Footer = () =>{
    const [email , setEmail] = useState('')
    const {selectedLang:{footer}} = useSelector(s => s.Lang)
    const submitEmail = e =>{
        e.preventDefault();
        if(email !== ''){
            fetch('http://530753-cq66777.tmweb.ru:8080/api/mailing',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    email:email
                })
            }).then(res =>{
                if(Math.floor(res.status / 100) === 2){
                    alert('Рассылка успешно отправлена!')
                }else if(res.status === 409){
                    alert('Такой e-mail адрес уже добавлен в рассылку!')
                }
            })
        }else{
            alert('Заполните поле!')
        }
    }
    
    return (
        <>
            <footer>
                <div className={cls.footer_banner}>
                    <div className={cls.footer_logo}>
                        <Link to='/'>
                            <img alt="" src={Frame} />
                        </Link>
                    </div>
                    <div className={cls.footer_inline}>
                        <div className={cls.footer_left}>
                            <div>
                                <form className={cls.footer_form} onSubmit={submitEmail}>
                                    <div>
                                        <input type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)}/>
                                        <label> {footer.underInput}</label>
                                        <button className="fas fa-chevron-right" type="submit"></button>
                                    </div>
                                </form>
                            </div>

                            {/* WE are in society */}

                            <div className={cls.footer_social}>
                                <h1>{footer.social}</h1>
                                <a href='https://www.instagram.com/bagtlyzamana/'>
                                    <img alt="" src={Instagram}/>
                                </a>
                            </div>

                            {/* Footer addres */}

                            <div className={cls.footer_addres}>
                                <p>
                                    {footer.address}
                                </p>
                                <p>{footer.address2}</p>
                                <h1>
                                    {footer.copyright}
                                </h1>
                            </div>
                        </div>
                        <div className={cls.footer_right}>
                            <ul>
                               <><h3 >{footer.productTitle}</h3> </>
                               <li>
                                   <Link to='/aknur-product'>
                                        {footer.Aknur}
                                   </Link>
                               </li>
                               <li>
                                   <Link to='/ainur-product'>
                                        {footer.Ainur}
                                   </Link>
                               </li>
                               <li>
                                   <Link to='/soap-product'>
                                        {footer.Toilet}
                                   </Link>
                               </li>
                               <li>
                                   <Link to='/cleaner'>
                                        {footer.Oxygen}
                                   </Link>
                               </li>
                               <Link to='/about'><h3 className={cls.footer_step}>{footer.about}</h3></Link>
                            </ul>


                            <ul className={cls.unact} >
                               <><h3>{footer.contacts}</h3> </>
                               <li>
                                   <Link to='/contact'>
                                       {footer.becomeDeal}
                                   </Link>
                               </li>
                               <li>
                                   <>
                                        +99312 576239
                                   </>
                               </li>
                               <li>
                                   <>
                                        +99312 576240
                                   </>
                               </li>
                               <li>
                                   <>
                                        info@bagtlyzamana.com
                                   </>
                               </li>
                               <Link ><h3 className={cls.footer_step}>{footer.articles}</h3></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;