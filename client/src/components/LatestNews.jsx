import blog1 from "/images/blog-cards/1.avif";
import LatestNewsCard from "./LatestNewsCard";

let latestNewsData = [
    {
        id: 1,
        image: blog1,
        title: "T 1",
        desc: "D 1",
    },
    {
        id: 2,
        image: blog1,
        title: "T 2",
        desc: "D 2",
    },
    {
        id: 3,
        image: blog1,
        title: "T 3",
        desc: "D 3",
    },
    {
        id: 4,
        image: blog1,
        title: "T 4",
        desc: "D 4",
    },
]

const LatestNews = () => {
    const desc =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus est maiores, consequatur nostrum sint magnam unde blanditiis quos iusto.";

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
                        image={blog1}
                        title="Lorem ipsum dolor."
                        description={desc}
                    />
                </div>

                {/* Center */}
                <div className="w-[49%] flex flex-col gap-[1.3rem]">
                    <LatestNewsCard
                        image={blog1}
                        title="Lorem ipsum dolor."
                        description={desc}
                        layout="horizontal"
                    />

                    <LatestNewsCard
                        image={blog1}
                        title="Lorem ipsum dolor."
                        description={desc}
                        layout="horizontal"
                        reverse
                    />
                </div>

                {/* Right */}
                <div className="w-[24%]">
                    <LatestNewsCard
                        image={blog1}
                        title="Lorem ipsum dolor."
                        description={desc}
                    />
                </div>

            </div>
        </div>
    );
};

export default LatestNews;