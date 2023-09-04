import { BlogPost } from "../components/BlogPost"
import { Fade } from "react-awesome-reveal";

export const Blog = () => {
    return(
        <main>
            <Fade>
                <BlogPost/>
            </Fade>
            <Fade>
                <BlogPost/>
            </Fade>
            
        </main>
        
    )
}