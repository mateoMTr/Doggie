import Image from "next/image";

export function Logo() {
	return (
		<div className={'hidden md:flex items-center justify-center gap-x-2'}>
			<Image
				src={'/logoMorado.svg'}
				alt={'LogoFooter'}
				width={'30'}
				height={'30'}
			></Image>
			<p className={'font-semibold'}>Doggie</p>
		</div>
	)
}