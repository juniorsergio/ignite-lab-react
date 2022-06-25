import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

type Params = {
    slug: string
}

export function Event(){
    const { slug } = useParams<Params>()
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                { slug
                    ? <Video lessonSlug={slug} />
                    : <Video lessonSlug="abertura" />
                }
                <Sidebar />
            </main>
        </div>
    )
}