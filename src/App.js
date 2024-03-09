import "./App.css";
import CarouselCard from "./components/cards/CarouselCard";
import GalleryCard from "./components/cards/GalleryCard";
import ImageCarousel from "./components/image-galleries/ImageCarousel";

const data = {
  communities: [
    {
      imageURL: require("./assets/community-images/arabian-ranches.jpg"),
      textContent:
        "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      imageName: "Arabian Ranches",
    },
    {
      imageURL: require("./assets/community-images/arabian-ranches-ii.jpg"),
      textContent:
        "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      imageName: "Arabian Ranches II",
    },
    {
      imageURL: require("./assets/community-images/downtown-dubai.jpg"),
      textContent:
        "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
      imageName: "Downtown Dubai",
    },
    {
      imageURL: require("./assets/community-images/dubai-hills-estate.jpg"),
      textContent:
        "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
      imageName: "Dubai Hills Estate",
    },
    {
      imageURL: require("./assets/community-images/dubai-marina.png"),
      textContent:
        "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
      imageName: "Dubai Marina",
    },
    {
      imageURL: require("./assets/community-images/emirates-living.jpg"),
      textContent:
        "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
      imageName: "Emirates Living",
    },
  ],
  ourServices: [
    {
      title: "Dubau Hills Estate",
      image: require("./assets/community-images/dubai-hills-estate.jpg"),
    },
    {
      title: "Dubai Marina",
      image: require("./assets/community-images/dubai-marina.png"),
    },
    {
      title: "Emirates Living",
      image: require("./assets/community-images/emirates-living.jpg"),
    },
    {
      title: "Arabian Ranches",
      image: require("./assets/community-images/arabian-ranches.jpg"),
    },
    {
      title: "Arabian Ranches II",
      image: require("./assets/community-images/arabian-ranches-ii.jpg"),
    },
    {
      title: "Downtown Dubai",
      image: require("./assets/community-images/downtown-dubai.jpg"),
    },
  ],
};

function App() {
  return (
    <div className="App">
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ margin: "15px" }}>
            {/* First Section */}
            <div className="px-1 mb-40">
              <div className="mb-10 md:mb-14">
                <h3 className="font-semibold text-[28px] text-[#887C68] uppercase">
                  Communities we manage
                </h3>
              </div>
              <div className="grid grid-flow-row lg:grid-cols-3 gap-[60px]">
                {data.communities.map((data) => (
                  <GalleryCard
                    textContent={data.textContent}
                    imageName={data.imageName}
                    imageURL={data.imageURL}
                  />
                ))}
              </div>
            </div>
            {/* Second Section */}
            <div className="px-1">
              <div className="mb-10 md:mb-14">
                <h3 className="font-semibold text-[28px] text-[#887C68] uppercase">
                  Our services
                </h3>
              </div>
              <div className="grid grid-flow-row grid-cols-1 flex-nowrap mx-10">
                <ImageCarousel carouselData={data.ourServices} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
