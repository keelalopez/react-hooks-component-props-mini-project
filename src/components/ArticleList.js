import Article from "./ArticleList";

// defaulting posts to be an empty array, if it didnt load fast enough 
const ArticleList = (props) => {
    // console.log(props)

    const articleArray = props.map((article) => {
        return <Article article={article} />
    });

    return (
        <main>{articleArray}</main>
    );
};



export default ArticleList;