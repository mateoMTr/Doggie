import {Logo} from "@/app/(Landing)/_Componentes/Logo";
import {Button} from "@/components/ui/button";

export function Footer() {
	return (
		<div className={'flex items-center justify-around w-full bg-background z-50 p-6'}>
			<div className={'md:ml-auto w-full justify-around flex items-center gap-x-2 text-muted-foreground'}>
				<Button variant={'ghost'} size={'sm'}>Terminos y Condiciones</Button>
				<Button variant={'ghost'} size={'sm'}>Politicas</Button>
			</div>
		</div>
	)
}