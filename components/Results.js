import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

const Results = ({results} ) => {
    return (
        <FlipMove className="px-5 mx-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))
            }           
        </FlipMove>
    )
}

export default Results
