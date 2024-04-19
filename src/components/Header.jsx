import { curve } from '../assets';

const Header = () => {
	return (
		<div className="container relative">
			<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
				<h1 className="h1 mb-6 inline-block relative">
					ToDo List App
					<img
						src={curve}
						className="absolute top-full left-0 w-full xl:-mt-2"
						width={624}
						height={28}
						alt="Curve"
					/>
				</h1>
			</div>
		</div>
	);
};

export default Header;
