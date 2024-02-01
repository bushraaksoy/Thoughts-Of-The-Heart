import Slider from '../../components/Slider/Slider'
import './Home.css'

const quotes = ["‘And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein’",
    "‘And when My servants ask you, [O Muhammad], concerning Me – indeed I am near’",
    "“My mercy encompasses all things”",
    "“So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief”"]


const Home = () => {
    return (
        <>
            {/* <Slider slides={quotes} /> */}
            <div className='intro'>Hello <br /> I'm Meryem</div>
        </>

    )
}

export default Home