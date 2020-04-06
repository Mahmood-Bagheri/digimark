interface IProductBase {
    /**
     * product image url(s)
     */
    image: string[] | string;
    /**
     * product title
     */
    title: string | React.ReactNode;
    /**
     * product price
     */
    price: number;
    /**
     * product page url
     */
    url: string;
    /**
     * product discount in percentage
     */
    discount?: number;
}

export interface IProduct
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof IProductBase>,
        IProductBase {}
