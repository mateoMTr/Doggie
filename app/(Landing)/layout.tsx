import {Navbar} from "@/app/(Landing)/_Componentes/Navbar";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className={'h-full dark:bg-[#1F1F1F] min-w-screen'}>
            <Navbar></Navbar>
            <main className={'h-full pt-40 max-w-screen dark:bg-[#1F1F1F]'}>
                {children}
            </main>
        </div>
    );
}
