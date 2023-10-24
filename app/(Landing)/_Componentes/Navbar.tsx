'use client'
import {useScroll} from "@/hooks/scroll";
import {cn} from "@/lib/utils";
import {Logo} from "@/app/(Landing)/_Componentes/Logo";
import {Button} from "@/components/ui/button";

export function Navbar() {
	const scrolled = useScroll()

	return (
		<div className={cn("z-50 bg-background w-full fixed top-0 flex items-center p-6", scrolled && "border-b shadow-sm")}>
			<Logo></Logo>
			<div className={'md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'}>
				<Button variant={'ghost'} size={'default'} className={''}>Iniciar Sesión</Button>
			</div>

		</div>
	)
}