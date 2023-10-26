"use client"
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useConvexAuth} from "convex/react";
import Link from "next/link";
import {Spinner} from "@/components/spinner";
import {SignInButton} from "@clerk/clerk-react";


export function Titulo() {
	const {isAuthenticated, isLoading} = useConvexAuth()


	return (
		<div className={'max-w-3xl space-y-4 dark:bg-[#1F1F1F]'}>
			<h1 className={'text-1xl sm:text-3xl md:text-3xl font-light'}>
				Amor. Pasion. Diversion. Entretenimiento. Alegria
			</h1>
			<h3 className={'relative text-3xl sm:text-4xl md:text-4xl font-light '}>
				Eso ellos significan para <p className={'relative font-black bg-purple-900 inline-block text-transparent bg-clip-text p-0.5'}>Doggie.
				<span
				className="absolute w-full h-1 -bottom-2 left-0 bg-purple-900">

				</span>
			</p>
			</h3>
			{
				isLoading && (
					<div className={'FlexCentrado'}>
						<Spinner size={'lg'} color={'morado'}></Spinner>
					</div>
				)
			}
			{
				isAuthenticated && !isLoading &&(
					<Button className={'bg-purple-900 hover:text-purple-900 dark:text-white hover:dark:bg-[#1F1F1F] hover:bg-white hover:border-purple-900 hover:border-solid hover:border-2'} asChild>
						<Link href={'/algo'}>
							Vamos
							<ArrowRight className={'h-4 w-4 ml-2'}></ArrowRight>
						</Link>

					</Button>
				)
			}
			{
				!isAuthenticated && !isLoading &&(
					<SignInButton mode={'modal'}>
						<Button className={'bg-purple-900 hover:text-purple-900 dark:text-white hover:dark:bg-[#1F1F1F] hover:bg-white hover:border-purple-900 hover:border-solid hover:border-2'}   >
							Empezar
							<ArrowRight className={'h-4 w-4 ml-2'}></ArrowRight>
						</Button>
					</SignInButton>

				)
			}

		</div>
	)
}