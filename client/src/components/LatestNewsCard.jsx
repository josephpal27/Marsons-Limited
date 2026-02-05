const LatestNewsCard = ({
    image,
    title,
    description,
    reverse = false,
    layout = "vertical",
}) => {
    return (
        <div
            className="
            bg-white
            p-[1rem]
            rounded-[10px]
            shadow-[rgba(0,0,0,0.24)_0px_3px_8px]
            h-full
        ">
            <div className={`
                ${layout === "horizontal" ? "flex justify-between gap-[1rem]" : ""}
                ${reverse ? "flex-row-reverse" : ""}
            `}>
                {/* Image */}
                <div className={layout === "horizontal" ? "w-[46%]" : "w-full"}>
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full rounded-md"
                    />
                </div>

                {/* Content */}
                <div className={layout === "horizontal" ? "w-[51%]" : "mt-[1rem]"}>
                    <span className="text-[1.2rem] text-[#0a2946] block">
                        {title}
                    </span>

                    <p className="text-[0.9rem] mt-[0.5rem]">
                        {description}
                    </p>

                    <button className="
                        bg-[#e9202a]
                        text-white
                        text-[0.9rem]
                        px-[0.6rem]
                        py-[0.25rem]
                        rounded-[3px]
                        mt-[1rem]
                        hover:bg-[#d6151f]
                        transition
                    ">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCard;