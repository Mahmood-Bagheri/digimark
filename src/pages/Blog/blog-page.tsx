import React, { useState } from "react";
import { SearchCard } from "containers/search-card";
import { BlogPost as BlogPostData } from "data/BlogPost";
import { Pagination } from "components/Pagination";
import BlogPostList from "containers/blog-post-list/blog-post-list";

export default function BlogPage() {
    const [filter, setFilter] = useState("");

    const [posts, setPosts] = useState(BlogPostData);

    const changeFilter = (value: string) => {
        if (value === "") {
            setPosts(BlogPostData);
        } else {
            setFilter(value);
            setPosts(BlogPostData.filter(item => item.title.includes(filter)));
        }
    };

    return (
        <div className="row">
            <div className="col-lg-3">
                <SearchCard onChange={e => changeFilter(e.target.value)} />
            </div>

            <div className="col-lg-9 d-flex flex-row flex-wrap justify-content-center">
                <BlogPostList posts={posts} />

                <div className="row">
                    <Pagination
                        className="mt-3"
                        count={posts.length}
                        perPage={10}
                        getCurrent={currentPage => console.log(currentPage)}
                    />
                </div>
            </div>
        </div>
    );
}
