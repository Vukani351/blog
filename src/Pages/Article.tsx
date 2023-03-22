import React from 'react'
import MainComp from '../components/MainComp';
import { useParams } from 'react-router-dom';

interface Props {
    articleId: number;
}

function Article({ articleId }: Props) {
    
//   let { articleId } = useParams();
  console.log(articleId);
    return (
        <MainComp />
    )
}

export default Article;
