import latestNewsData from "../data/LatestNewsData";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {

    return (
        <div className="
            py-[3.5rem] 
            px-[7%]
            flex
            flex-col
            justify-center
            h-full
        ">
            <h5 className="
                text-[3.2rem] 
                font-[600]
            ">
                LATEST <span className="text-[#e9202a]">BLOGS</span> & <span className="text-[#e9202a]">ARTICLES</span>
            </h5>

            {/* Cards Row */}
            <div className="
                mt-[3rem] 
                flex 
                justify-between
                flex-wrap
            ">

                {/* Left */}
                <div className="w-[24%]">
                    <LatestNewsCard
                        image={latestNewsData[0].image}
                        title={latestNewsData[0].title}
                        description={latestNewsData[0].desc}
                    />
                </div>

                {/* Center */}
                <div className="w-[49%] flex flex-col gap-[1.3rem]">
                    <LatestNewsCard
                        image={latestNewsData[1].image}
                        title={latestNewsData[1].title}
                        description={latestNewsData[1].desc}
                        layout="horizontal"
                    />

                    <LatestNewsCard
                        image={latestNewsData[2].image}
                        title={latestNewsData[2].title}
                        description={latestNewsData[2].desc}
                        layout="horizontal"
                        reverse
                    />
                </div>

                {/* Right */}
                <div className="w-[24%]">
                    <LatestNewsCard
                        image={latestNewsData[3].image}
                        title={latestNewsData[3].title}
                        description={latestNewsData[3].desc}
                    />
                </div>

            </div>
        </div>
    );
};

export default LatestNews;