import React, { useState, useCallback } from "react";
import { MainLayout } from "containers/main-layout";
import { SearchCard } from "containers/search-card";
import { BlogPost } from "containers/blog-post";
import { BlogPost as BlogPostData } from "data/BlogPost";
import { Pagination } from "components/Pagination";
export function BlogPage() {
    const [filter, setFilter] = useState("");
    const [posts, setPosts] = useState(BlogPostData);

    const changeFilter = useCallback(
        (value) => {
            if (value === "") {
                setPosts(BlogPostData);
            } else {
                setFilter(value);
                setPosts(BlogPostData.filter((item) => item.title.includes(filter)));
            }
        },
        [filter]
    );

    return (
        <>
            <MainLayout>
                <div className="row ">
                    <div className="col-12 col-lg-3">
                        <SearchCard onChange={(e) => changeFilter(e.target.value)} />
                    </div>
                    <div className="col-12 col-lg-9 d-flex flex-row flex-wrap justify-content-center">
                        {posts.map((item) => (
                            <div className="col-12 col-lg-6 p-0 px-lg-2">
                                <BlogPost title={item.title} shortDesc={item.shortDesc} linkText="بیشتر بخوانید" />
                            </div>
                        ))}

                        <Pagination
                            className="mt-3"
                            count={20}
                            perPage={10}
                            getCurrent={(currentPage) => console.log(currentPage)}
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
