import Hero from "@/components/Sections/Hero/Hero";
import ArchiveSection from "@/components/Sections/Archive/ArchiveSection";
import BlogSection from "@/components/Sections/Blog/BlogSection";

export default function Home() {
    return (
        <main>
            <Hero/>
            <ArchiveSection/>
            <BlogSection/>
            {/* TODO: Messaging section */}
        </main>
    )
}
