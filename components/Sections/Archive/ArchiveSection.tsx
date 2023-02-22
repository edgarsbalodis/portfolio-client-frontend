import styles from './archiveSection.module.css';
import '../../../app/globals.css'
import Archive from "@/components/Archive/Archive";
import React from "react";
import classNames from "classnames";

// TODO: create this as a component
// interface HeadingTextProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
//     variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//     // styleVariant?: "headingPrimary" | "headingSecondary";
//     className?: string;
//     children?: any;
// }
//
// const HeadingText: React.FC<HeadingTextProps> = ({variant, className, children, ...rest}) => {
//     const Tag = variant ?? "h1";
//     return (
//         <Tag className={classNames([
//             "headingPrimary",
//             className
//         ])} {...rest}>
//             {children}
//         </Tag>
//     )
// }

export default function ArchiveSection() {
    return (
        <section className={styles.archiveSection}>
            {/*<HeadingText*/}
            {/*    variant={"h1"}*/}
            {/*    className={styles.archiveText}*/}
            {/*>*/}
            {/*    See the<br/>archives*/}
            {/*</HeadingText>*/}
            <h1 className={`${styles.archiveText} headingPrimary`}>See the<br/>archives</h1>
            <Archive/>
        </section>
    );
}