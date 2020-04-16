import React, { useState } from "react";
import { MainLayout } from "containers/main-layout";
import { SearchCard } from "containers/search-card";
import { BlogPost as BlogPostData } from "data/BlogPost";
import { Pagination } from "components/Pagination";
import BlogPostList from "containers/blog-post-list/blog-post-list";

export function BlogPage() {
    const [filter, setFilter] = useState("");

    const [posts, setPosts] = useState(BlogPostData);

    const changeFilter = (value: string) => {
        if (value === "") {
            setPosts(BlogPostData);
        } else {
            setFilter(value);
            setPosts(BlogPostData.filter((item) => item.title.includes(filter)));
        }
    };

    return (
        <div className="row">
            <div className="col-lg-3">
                <SearchCard onChange={(e) => changeFilter(e.target.value)} />
            </div>

            <div className="col-lg-9 d-flex flex-row flex-wrap justify-content-center">
                <div className="row">
                    <BlogPostList posts={posts} />
                </div>

                <div className="row">
                    <Pagination
                        className="mt-3"
                        count={20}
                        perPage={10}
                        getCurrent={(currentPage) => console.log(currentPage)}
                    />
                </div>
            </div>
        </div>
    );
}
