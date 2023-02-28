import Hero from "@/components/Sections/Hero/Hero";
import ArchiveSection from "@/components/Sections/Archive/ArchiveSection";
import BlogSection from "@/components/Sections/Blog/BlogSection";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
    return (
        <main>
            <Hero/>
            <ArchiveSection/>
            {/* @ts-ignore */}
            <BlogSection/>
            {/* TODO: Messaging section */}
            <Contacts/>
        </main>
    )
}
