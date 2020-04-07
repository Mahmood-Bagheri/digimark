interface ICardBase {
    title: string | React.ReactNode;
    link: string | React.ReactNode;
}

declare interface ICard
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof ICardBase>,
        ICardBase {}
