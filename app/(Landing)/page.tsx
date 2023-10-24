import {Titulo} from "@/app/(Landing)/_Componentes/Titulo";
import {SvgTitulo} from "@/app/(Landing)/_Componentes/SvgTitulo";
import {Footer} from "@/app/(Landing)/_Componentes/Footer";

export default function LandingPage () {
    return (
            <div className={'min-h-full flex flex-col'}>
                <div className={'flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 py-10'}>
                    <Titulo></Titulo>
                    <SvgTitulo></SvgTitulo>

                </div>
                <Footer></Footer>
            </div>
    );
};
