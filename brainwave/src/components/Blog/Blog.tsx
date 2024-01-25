import './Blog.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getBlogContent } from '../../utils';

const Blog = () => {
    const { blogName } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        async function fetchData() {
            const fileName = `/posts/${blogName}.md`;
            const res = await fetch(fileName);
            const text = await res.text();

            setContent(text);
        }

        fetchData();
    }, [blogName])

    const result = getBlogContent(content);
    console.log("content", content)
    console.log("result", result)

    return (
        <article className='blog-article'>
            <h1>{result.data.name}</h1>
            <p>{result.data.publishDate}</p>
            <img src={result.data.image} alt={result.data.name} width={100} height={100} />
            <ReactMarkdown>
                {result.content}
            </ReactMarkdown>
        </article>
    )
};

export default Blog;
