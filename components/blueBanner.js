export default function BlueBanner(props) {
    return (
        <div className="my-6 p-8 col-auto bg-blue-500 text-center font-sans">
            <div className="text-7xl text-white">{props.title}</div>
            <div className="text-xl text-white">{props.subtitle}</div>
        </div>
    );
}
