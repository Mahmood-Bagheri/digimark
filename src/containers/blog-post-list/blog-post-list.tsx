import React from "react";
import { BlogPost } from "containers/blog-post";
import { Link } from "react-router-dom";
interface Props {
    posts: IBlogPostBase[];
}

const BlogPostList = (props: Props): JSX.Element => {
    return (
        <>
            {props.posts.map((item) => {
                return (
                    <Link to={`/blog/${item.id}`} key={item.id}>
                        <div className="col-12 col-lg-6 p-0 px-lg-2">
                            <BlogPost {...item} />
                        </div>
                    </Link>
                );
            })}
        </>
    );
};

export default BlogPostList;
