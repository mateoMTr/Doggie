'use client'
import {useScroll} from "@/hooks/scroll";
import {cn} from "@/lib/utils";
import {Logo} from "@/app/(Landing)/_Componentes/Logo";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/mode-toggle";
import {useConvexAuth} from "convex/react";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import {Spinner} from "@/components/spinner";
import Link from "next/link";

export function Navbar() {
	const {isAuthenticated, isLoading }= useConvexAuth()
	const scrolled = useScroll()

	return (
		<div className={'FixScroll'}>

		<div className={cn("z-50 bg-background w-screen FixScroll dark:bg-[#1F1F1F] fixed top-0 flex items-center p-6", scrolled && "border-b shadow-sm")}>
			<Logo></Logo>
			<div className={'md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 pl-5'}>
				{
					isLoading && (
						<Spinner/>
					)
				}
				{
					!isAuthenticated && !isLoading && (
						<>
							<SignInButton mode={"modal"}>
								<Button variant={'ghost'} size={'sm'} className={''}>Iniciar Sesión</Button>
							</SignInButton>
							<SignInButton mode={"modal"}>
								<Button variant={'ghost'} size={'sm'} className={''}>Probar</Button>
							</SignInButton>
						</>
					)
				}
				{
					isAuthenticated && !isLoading && (
						<>
							<Button variant={"ghost"} size={'sm'}>
								<Link href={' /algo'}>
									Entrar
								</Link>
							</Button>
							<UserButton
								afterSignOutUrl={'/'}
							>

							</UserButton>

						</>
					)
				}

				<ModeToggle></ModeToggle>
			</div>
		</div>
		</div>
	)
}