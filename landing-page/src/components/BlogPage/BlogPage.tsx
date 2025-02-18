import { ImageCard } from "../ImageCard/ImageCard";
import "./BlogPage.scss";

export const BlogPage = () => {
    return (
        <div className="blog__page__container">
       
            <h2 className="blog-title">Latest Articles</h2>
            <ImageCard />
        
        </div>
    )
}