import ReactImageMagnify from "react-image-magnify";
import image from "../../assets/product1.jpeg";
const MyReactImageMagnify = props => {
  return (
    <div className="">
      <ReactImageMagnify
        {...props}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            // isFluidWidth: true,
            width: 300,
            height: 380,
            src: image,
            sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
          },
          largeImage: {
            src: image,
            width: 600,
            height: 580,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  );
};

export default MyReactImageMagnify;
