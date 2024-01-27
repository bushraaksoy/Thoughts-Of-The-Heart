import './BlogCard.css'
import { shorten } from '../../utils'

const BlogCard = (props) => {
    const defaultText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?"
    return (
        // <div className='blog-card'>{props.name}</div>
        <div className="card">
            <div className="card-header">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="card-body">
                <span className="tag tag-sage">Religion</span>
                <h5>{shorten(props.name, 25)}</h5>
                <p>
                    {shorten(defaultText, 60)}
                </p>
            </div>
        </div>

    )
}

export default BlogCard