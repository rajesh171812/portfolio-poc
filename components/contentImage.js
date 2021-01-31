import RegularParagraph from "./regularParagraph";
export default function ContentImage(props) {
  return (
    <div className="grid grid-cols-8 gap-5">
      <div className="col-span-3">
        <RegularParagraph
          content="With a single tap, the user will be able to
                  access the summary view of the
                  required information. On further clicking,
                  the user will be taken to the detailed
                  information. "
        />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-4">
        <img
          src="http://unsplash.it/400/450"
          className="slide-in transform transition-all translate-x-10"
        />
        <div
          onClick={slideFromLeft}
          className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black cursor-pointer"
        >
          &#x276E;
        </div>
        <div
          onClick={slideFromRight}
          className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black cursor-pointer"
        >
          &#x276F;
        </div>
      </div>
    </div>
  );
}
