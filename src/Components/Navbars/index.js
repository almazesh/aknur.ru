import './navbar.css'
import { Link  } from "react-router-dom";
import Logo from '../../assets/Logo/logo.png'
import Bars from '../../assets/Logo/bars.png'
import { useEffect, useState } from 'react';
import {Lang} from './sideData'
import { useDispatch, useSelector } from 'react-redux';
import { enLangAction, ruLangAction, tmLangAction } from '../../Redux/LangRedux/actions';
import Env from '../../assets/Logo/env.png'
import Maps from '../../assets/Logo/map.png'
const Nav = () =>{
    const [burger , setBurger] = useState(false);
    const showMenu = () => setBurger(prev => !prev);
    const dispatch = useDispatch();
    const { selectedLang: { navbar ,footer}} = useSelector(s => s.Lang);
    const selectedLocalLang = localStorage.getItem('aknurLang');
    useEffect(() => {
        const selectedLang = localStorage.getItem('aknurLang');
        if(selectedLang === 'RU'){
            dispatch(ruLangAction());
        }else if(selectedLang === 'EN'){
            dispatch(enLangAction());
        }else{
            dispatch(tmLangAction());
        }
    }, [dispatch])

    const handleChangeLangText = lang => {
        if(lang === 'RU'){
            dispatch(ruLangAction());
            localStorage.setItem('aknurLang', 'RU')
        }else if(lang === 'EN'){
            dispatch(enLangAction());
            localStorage.setItem('aknurLang', 'EN')
        }else{
            dispatch(tmLangAction())
            localStorage.setItem('aknurLang', 'TM')
        }
    }

    const handleChangeLang = e => {
        const val = e.target.value;
        if(val === 'RU'){
            dispatch(ruLangAction());
            localStorage.setItem('aknurLang', 'RU')
        }else if(val === 'EN'){
            dispatch(enLangAction());
            localStorage.setItem('aknurLang', 'EN')
        }else{
            dispatch(tmLangAction())
            localStorage.setItem('aknurLang', 'TM')
        }
    }
    const [multiProduct , setMultiProduct] = useState(false)
    const [contact , setContact] = useState(false)
    const showMulti = () =>{
        setMultiProduct(prev => !prev)
        setBurger(prev => !prev)
    }
    const showContact = () =>{
        setContact(prev => !prev)
        setBurger(prev => !prev)

    }
    return (
        <>  
            <div className={burger ? 'sidebar_banner active' : 'sidebar_banner'}>
                <div className='sidebar_close'>
                    <span onClick={showMenu}>&times;</span>
                </div>
                <div className={'sidebar_content'}>
                    <ul>
                        <li>
                            <Link to='' onClick={showMulti}>
                                {navbar.products}  
                            </Link>
                            <i className='fas fa-chevron-right' onClick={showMulti}></i>
                        </li>
                        <li>
                            <Link onClick={() => setBurger(false)} to='/about'>
                                {navbar.about}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setBurger(false)} to='/article'>
                                {navbar.article}
                            </Link>
                        </li>
                        <li>
                            <Link to='' onClick={showContact}>
                                {navbar.contact}
                            </Link>
                            <i className='fas fa-chevron-right' onClick={showContact}></i>
                        </li>
                    </ul>
                    <ul className='sidebar_lang'>
                        {
                            Lang.map((item , index) =>{
                                return (
                                    <li onClick={() => {
                                        handleChangeLangText(item.title)
                                        setBurger(false)
                                    }} key={index}>
                                        {
                                            item.title
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>




            {/* Multi Product */}
            
            <div className={multiProduct ? 'multi_banner activeMulti' : 'multi_banner'}>
                 <div className='multi_item'>
                        <i className='fas fa-chevron-left' onClick={showMulti}></i>
                        <span onClick={showMulti} >&times;</span>
                 </div>
                 <div className='multi_content'>
                      <ul>
                          <li>
                              <Link onClick={() => {
                                  setBurger(false)
                                  setMultiProduct(false)
                              }} to='/aknur-product'>
                                    {navbar.productsEl.aknur}
                              </Link>
                          </li>
                          <li>
                              <Link onClick={() => {
                                  setBurger(false)
                                  setMultiProduct(false)
                              }} to='/ainur-product'>
                                    {navbar.productsEl.ainur}
                              </Link>
                          </li>
                          <li>
                              <Link onClick={() => {
                                  setBurger(false)
                                  setMultiProduct(false)
                              }} to='/soap-product'>
                                    {navbar.productsEl.soap}
                              </Link>
                          </li>
                          <li>
                              <Link onClick={() => {
                                  setBurger(false)
                                  setMultiProduct(false)
                              }} to='/cleaner'>
                                   {navbar.productsEl.otbel}
                              </Link>
                          </li>
                      </ul>
                 </div>
            </div>

           


            {/* SIDE contact */}
            
            <div className={contact ? 'contact_banner activeContact' : 'contact_banner'}>
                 <div className='contact_item'>
                        <i className='fas fa-chevron-left' onClick={showContact}></i>
                        <span onClick={showContact} >&times;</span>
                 </div>
                 <div className='contact_content'>
                      <ul>
                          <li>
                              <Link onClick={() => {
                                  setBurger(false)
                                  setContact(false)
                              }} to='/contact'>
                                    {navbar.become}
                              </Link>
                          </li>
                      </ul>
                     

                 </div>
                 <div className='sidebar_addres'>
                    <ul className='address'>
                        <li>
                            <i className='fa fa-phone'></i>
                            <div>
                                <p> +99312 576239</p>
                                <p>+99312 576240</p>
                            </div>
                        </li>
                        <li>
                            <img alt="" src={Env}/>
                            <div>
                                <p>
                                    info@bagtlyzamana.com
                                </p>
                            </div>
                        </li>
                        <li>
                            <img alt="" src={Maps}/>
                            <div>
                                <p>
                                    {footer.address}
                                    {footer.address2}
                                </p>
                            </div>
                        </li>
                    </ul>
                 </div>
        </div>

        {/* NAVBAR */}

            


            


            <div className='absolute_nav'>
                <div className='nav_banner'>
                    <div className='nav_inline'>
                        <ul className='nav_left'>
                            <li className='productHover'>
                                <Link className='product_link'>
                                    {navbar.products}
                                </Link>
                                <div className='menu'>
                                    <div>
                                        <Link to='/aknur-product'>{navbar.productsEl.aknur}</Link>
                                        <Link to='/ainur-product'>{navbar.productsEl.ainur}</Link>
                                        <Link to='/soap-product'>{navbar.productsEl.soap}</Link>
                                        <Link to='/cleaner'>{navbar.productsEl.otbel}</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to='/about'>
                                    {navbar.about}
                                </Link>
                            </li>
                        </ul>
                        <ul className='nav_logo'>
                            <li>
                                <Link to=''>
                                    <img alt="" src={Logo}/>
                                </Link>
                            </li>
                        </ul>
                        <ul className='nav_right'>
                            <li>
                                <Link to='/article'>
                                    {navbar.article}
                                </Link>
                            </li>
                            <li className='contact_hover'>
                                <Link  className='contact_link'>
                                    {navbar.contact}
                                </Link>
                                <div className='contact_menu'>
                                    <div>
                                        <Link to='/contact'>{navbar.become}</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <select defaultValue={selectedLocalLang} onChange={handleChangeLang}>
                                    <option value='RU'>RU</option>
                                    <option value='EN'>EN</option>
                                    <option value='TM'>TM</option>
                                </select>
                            </li>
                        </ul>
                        <ul className='toggle'>
                            <li>
                                <img alt="" src={Bars} onClick={showMenu}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav