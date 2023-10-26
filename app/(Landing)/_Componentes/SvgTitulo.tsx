import Image from "next/image";


export const SvgTitulo = () => {
	return (
		<div className={'FlexCentrado m-6 min-w-full'}>
			<div className={'flex items-center '}>
				<div className={'relative w-96 h-96'}>
					<Image src={'/undraw_friends_r511.svg'}
						   alt={'Imagen'}
						   fill
						   className={'object-contain lg:w-full h-full'}

					></Image>
				</div>

			</div>

		</div>

	)
}