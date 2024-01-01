import Image from "next/image";
function Hero() {
    return (
        <section className="hero-container font-permanent-marker px-11 py-5 bg-7bb3e8 text-white relative">
            <div className="hero-content flex">
                <div className="hero-child-content-1 px-4 py-4 flex justify-center text-center ml-32">
                    <h1 className="text-9xl">Homes</h1>
                </div>
                <div className="hero-child-content-2 flex items-center px-5 py-7">
                    <Image
                        src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                        className="rounded-full w-16 h-16 mr-4 border-2 border-white"
                        style={{ zIndex: 3 }}
                        alt=".."
                    />
                    <Image
                        src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                        className="rounded-full w-16 h-16 mr-4 border-2 border-white"
                        style={{ zIndex: 2, marginLeft: '-25px' }}
                        alt=".."
                    />
                    <Image
                        src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                        className="rounded-full w-16 h-16 border-2 border-white"
                        style={{ zIndex: 1, marginLeft: '-25px' }}
                        alt=".."
                    />
                    <p className="px-2 text-lg w-60">Find a lender who can offer competitive mortgage.</p>
                </div>
            </div>
            <div className="hero-content flex">
                <div className="hero-child-content-1 -mt-14 flex justify-center text-center ml-32">
                    <p className="text-9xl">That Match.</p>
                </div>
            </div>
            <div className="hero-content-2 flex">
                <div className="hero-child-content-2 px-32">
                    <Image alt=".." src="/sparkle.png" />
                    <p className="text-base w-28">Discover a place you'll love to live.</p>
                    <p className="bg-black rounded-full w-52 px-2 py-2 mt-10">All Catalog -------&gt;</p>
                </div>
                <div className="hero-child-content-2 absolute mt-10 -bottom-0 right-0">
                    <Image
                        src="/house.png"
                        className="w-full h-full"
                        alt="House"
                    />
                    <div className="img-content text-black bg-white bg-opacity-80 p-4 rounded-3xl absolute flex flex-col opacity-100 z-10 justify-between text-center w-42 h-42 bottom-5 left-20">
                        <div>
                            <h2 className="text-sm">Ville Parle</h2>
                            <p className="text-xs">Santa Cruz, Mumbai, India</p>
                        </div>
                        <p className="bg-black text-white rounded-full px-2 py-1 mt-2 text-xs">Learn More-----&gt;</p>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default Hero;
