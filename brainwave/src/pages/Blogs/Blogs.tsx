import './Blogs.css'
import { Link } from "react-router-dom"
import BlogCard from "../../components/BlogCard/BlogCard"

const blogDetails = [
    {
        name: "Consistency In Religious Practices",
        publishDate: "2024-01-25",
        image: "https://media.istockphoto.com/id/1373127083/vector/ramadan-kareem-month-with-glowing-lantern-on-the-background-of-the-old-city-with-mosque.jpg?s=612x612&w=0&k=20&c=sRmw8qAayuRanbSIGGi4k4H_0fKmSW41XaoKwIkzyQI="
    },
    {
        name: "Gratitude Thoughts",
        publishDate: "2024-01-25",
        image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Introduction To Dillinger",
        publishDate: "2024-01-25",
        image: "https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg"
    },
    {
        name: "Noticing The Beauty In Nature",
        publishDate: "2024-01-25",
        image: "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/1608218991352-VVQ4O65NM06XBN9F01ML/relaxing_photo_1.jpg"
    },
    {
        name: "Beauty Of The Quran",
        publishDate: "2024-01-25",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVyYW58ZW58MHx8MHx8fDA%3D"
    },

]

const Blogs = () => {

    return (
        <div className="all-blogs">
            {blogDetails.map((blog, inx) => (
                <Link key={inx} to={(blog.name).split(' ').join('-')}>
                    <BlogCard name={blog.name} image={blog.image}></BlogCard>
                </Link>))}
        </div>
    )
}

export default Blogs