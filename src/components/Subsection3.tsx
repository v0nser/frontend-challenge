import Image from "next/image";
function Subsection3() {
    return (
        <>
            <section className="p-8 font-permanent-marker">
                <div className="subsection2  flex p-5 rounded-2xl bg-black">
                    <div className="subsec2-child p-5 text-5xl text-white">
                        <h2>Newly Listed Homes <span className="text-slate-600">In Newton</span></h2>
                        <p className="text-base mt-5">Take a deep dive and browse homes for sale,  original neighbourhood photos, resident reviews and local insights to find what is right for you.</p>
                        <ul className="text-sm flex flex-col">
                            <li className="bg-slate-600 flex-row p-3 mt-5 rounded-full flex items-center justify-between">Agent Listing
                                <p>(2.981)</p>
                            </li>
                            <li className="bg-slate-600 flex-row p-3 mt-5 rounded-full flex items-center justify-between">
                                Others
                                <p>(678)</p>
                            </li>
                            <li className="bg-slate-600 flex-row p-3 mt-5 rounded-full flex items-center justify-between">
                                Home Loan
                                <p>(Under $100.000)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="subsec2-child p-5 relative">
                        <Image
                            src="https://images.pexels.com/photos/5847577/pexels-photo-5847577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="rounded-3xl"
                            alt=".."
                        />
                        <div className="img-content text-black bg-white bg-opacity-80 p-4 rounded-3xl absolute flex flex-col justify-between text-center w-40 h-42 bottom-0 right-0">
                            <div>
                                <h2 className="text-sm">Newton Resident</h2>
                                <p className="text-xs">Newton MA Real Estates for sale.</p>
                            </div>
                            <p className="bg-black text-white rounded-full px-2 py-1 mt-2 text-xs">Learn More---&gt;</p>
                        </div>
                    </div>
                </div>
                <div className="nums flex p-8 text-3xl mt-8">
                    <hr className="bg-slate-600" />
                    <div className="nums-row flex space-x-20 text-center mx-auto">
                        <div className="nums-col">
                            <h2> Home For Rent:</h2>
                            <p className="text-blue-600">1567</p>
                        </div>
                        <div className="nums-col">
                            <h2>State:</h2>
                            <p className="text-blue-600">79 <span className="text-slate-600">+</span></p>
                        </div>
                        <div className="nums-col">
                            <h2>Homes to buy:</h2>
                            <p className="text-blue-600"> 1091</p>
                        </div>
                        <div className="nums-col">
                            <h2>Agents</h2>
                            <p className="text-blue-600">216 <span className="text-slate-600">+</span></p>
                        </div>
                        <hr className="bg-slate-600" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Subsection3;
