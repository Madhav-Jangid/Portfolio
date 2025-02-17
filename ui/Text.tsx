export const Heading = ({ children, style }: { children: React.ReactNode, style?: string }) => {
    <p
        className={"font-markpro text-heading font-heavy " + style}
    >
        {children}
    </p>
}