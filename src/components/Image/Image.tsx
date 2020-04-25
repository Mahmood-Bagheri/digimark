import React from "react";
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props extends LazyLoadImageProps {}

export const Image = (props: Props) => {
    return <LazyLoadImage {...props} />;
};
