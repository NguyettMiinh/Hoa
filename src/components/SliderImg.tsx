
type Items = {
    image: string;
    title: string;
}
function SliderImg({image,title}: Items) {

    return (
        <div className="text-center">
            <img
                src={image}
                alt={title}
            />
            <div className="mt-2 text-gray-800 text-sm">{title}</div>
        </div>
    );
}

export default SliderImg;