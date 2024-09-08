// src/TourList.js
import Tour from "./components/Tour";
import { tour } from "./toursData";

const TourList = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tour.map((item) => {
          return <Tour key={item.id} tour={item} />;
        })}
      </div>
    </section>
  );
};

export default TourList;
