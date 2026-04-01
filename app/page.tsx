import AllProyects from "@/components/Allproyects";
import AreaExpert from "@/components/AreaExpert";
import DescriptionQC from "@/components/DescriptionQC";
import SliderRegular from "@/components/Common/Slider/sliderRegular";
import OwnClients from "@/components/OwnClients";

export default function Home() {
  return (
    <div>
      <div className="home-spacer" />
      <SliderRegular
        banners={[
          {
            image: {
              web: "/assets/home-banner.jpeg",
              mobile: "/assets/home-banner.jpeg",
            },
          },
        ]}
      />
      <AreaExpert />
      <DescriptionQC />
      <AllProyects />
      <OwnClients />
    </div>
  );
}
