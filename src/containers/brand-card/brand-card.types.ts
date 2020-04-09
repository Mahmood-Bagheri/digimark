interface BaseBrandCard {
    image: string;
    name: string;
}

export interface IBrandCard
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof BaseBrandCard>,
        BaseBrandCard {}
