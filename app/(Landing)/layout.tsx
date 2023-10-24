import {Navbar} from "@/app/(Landing)/_Componentes/Navbar";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className={'h-full'}>
            <Navbar></Navbar>
            <main className={'h-full pt-40 max-w-screen'}>
                {children}
            </main>
        </div>
    );
}
