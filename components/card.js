export default function Card(props) {
    return (
        <div className="min-h-full p-4 shadow-lg">
            <img
                className="rounded my-0 mx-auto"
                src={props.img}
                alt={props.imgAlt}
            />
            <div className="mt-2">
                <div>
                    <div className="text-2xl text-gray-200 text-center text-bold font-sans">
                        {props.eyebrow}
                    </div>
                    <div className="text-center font-serif">{props.title}</div>
                </div>
            </div>
        </div>
    );
}
