import Link from "next/link";
import {IconType} from "react-icons";
import React from "react";

interface SocialIconProps {
    url: string;
    icon: IconType;
    size: number;
    className?: string;
}
const SocialIcon: React.FC<SocialIconProps> = ({ url, icon: Icon, size,  className }) => {
    return (
        <Link href={url}>
            <Icon className={className} size={size}/>
        </Link>
    );
};
export default SocialIcon;