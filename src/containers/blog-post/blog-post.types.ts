interface IBlogPostBase {
    /**
     * image url(s) of blog post
     */
    imageUrl: string[] | string;

    /**
     * title of blog post
     */
    title: string | React.ReactNode;

    /**
     * short description of blog post
     */
    shortDesc: string;

    /**
     * complete body of blog post
     */
    body: string;

    /**
     * post release data
     */
    date: Date;

    /**
     * blog post page  url
     */
    url: string;

    /**
     * message shown bottom of the card as read more
     */
    linkText: string;
}

declare interface IBlogPost
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof IBlogPostBase>,
        IBlogPostBase {}
