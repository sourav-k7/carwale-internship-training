import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CarCard from "./components/carCard";
import { fetchCars } from "./redux/actions/car.action";

function App() {
  const dispatch = useDispatch();
  const lastElementRef = useRef();
  const carList = useSelector((state) => state.cars);
  const loading = useSelector((state) => state.loading);
  const [lastElementVisible, setLastElementVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setLastElementVisible(entry.isIntersecting);
    });
    observer.observe(lastElementRef.current);
  }, []);

  useEffect(() => {
    if (!loading && lastElementVisible) {
      dispatch(fetchCars());
    }
  }, [dispatch, lastElementVisible, loading]);
  return (
    <div>
      <h1>All Users</h1>
      <div className="card-list">
        {carList &&
          carList?.map((car, index) => {
            return (
              <CarCard
                key={car.login.uuid}
                imgUrl={car.picture.large}
                email={car.email}
                name={`${car.name.first} ${car.name.last}`}
              />
            );
          })}
      </div>
        <div ref={lastElementRef}>
          <h1>loading...</h1>
        </div>
    </div>
  );
}

export default App;
