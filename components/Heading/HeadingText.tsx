import React from "react";
import classNames from "classnames";

interface HeadingTextProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    styleVariant?: "headingPrimary" | "headingSecondary" | "headingPrimary__description";
    className?: string;
    children?: any;
}

const HeadingText: React.FC<HeadingTextProps> = ({variant, styleVariant, className, children, ...rest}) => {
    const Tag = variant ?? "h1";
    return (
        <Tag className={classNames([
            styleVariant,
            className
        ])} {...rest}>
            {children}
        </Tag>
    );
}

export default HeadingText;