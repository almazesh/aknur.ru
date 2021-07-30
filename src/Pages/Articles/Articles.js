import cls from './Articles.module.css'
import { Link } from 'react-router-dom'
import  One from '../../assets/Article/one.png'
import Two from '../../assets/Article/two.png'
import Three from '../../assets/Article/three.png'
import Four from '../../assets/Article/four.png'
import Five from '../../assets/Article/fiv.png'
import Six from '../../assets/Article/six.png'
import { useEffect } from 'react'

import {useSelector} from 'react-redux'
const Article = () =>{
    const {selectedLang:{Article}} = useSelector(s => s.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
    return (
        <>
            <div className={cls.article_banner}>
                <div className={cls.article_title}>
                    <h1>{Article.articleTitle}</h1>
                </div>


                <div className={cls.article_inline}>
                    <div className={cls.article_one}>
                        <div className={cls.article_card}>
                            <img alt="" src={One}/>
                            <div className={cls.card_content}>
                                <h2>{Article.rightClear}</h2>
                                <Link to='/right-clear'>
                                    {Article.more}
                                </Link>
                            </div>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Two}/>
                            <div className={cls.card_content}>
                                <h2>{Article.deepClear}</h2>
                                <Link to='/deepclear'>
                                    {Article.more}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cls.article_two}>
                        <div className={cls.article_card}>
                            <img alt="" src={Three}/>
                            <div className={cls.card_content}>
                                <h2>{Article.prostyn}</h2>
                                <Link to='/prostyn'>
                                    {Article.more}
                                </Link>
                            </div>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Four}/>
                            <div className={cls.card_content}>
                                <h2>{Article.highZamana}</h2>
                                <Link to='/high-clear'>
                                    {Article.more}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cls.article_three}>
                        <div className={cls.article_card}>
                            <img alt="" src={Five}/>
                            <div className={cls.card_content}>
                                <h2>{Article.method}</h2>
                                <Link to='/method'>
                                    {Article.more}
                                </Link>
                            </div>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Six}/>
                            <div className={cls.card_content}>
                                <h2>{Article.lifeHack}</h2>
                                <Link to='/lifehack'>
                                     {Article.more}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article