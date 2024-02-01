import './Blog.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import readingDuration from 'reading-duration'
import matter from 'gray-matter';

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

    const result = matter(content);
    console.log("result", result)
    const readingTime = readingDuration(content, { emoji: 'clock' })

    return (
        <article className='blog-article'>
            <div className='blog-heading'>
                <h1 className='blog-title'>{result.data.name}</h1>
                <div className='blog-date-time'>
                    <span >🗓 {result.data.publishDate}</span>
                    <span >{readingTime}</span>
                </div>
            </div>

            <ReactMarkdown className='blog-content'>
                {result.content}
            </ReactMarkdown>
        </article>

    )
};

export default Blog;
