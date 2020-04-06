interface ITestimonialsBase {
    /**
     * author of comment
     */
    user: string;
    /**
     * user comment about products
     */
    comment: string;
    /**
     * user avatar url
     */
    avatar: string;
}

export interface ITestimonials
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof ITestimonialsBase>,
        ITestimonialsBase {}
