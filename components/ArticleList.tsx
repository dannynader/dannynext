import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }:any) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article:any) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList