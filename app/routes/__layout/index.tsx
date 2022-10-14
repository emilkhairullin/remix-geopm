import useWatch from "~/hooks/useWatch";

const IndexPage = () => {
  const { currentTime } = useWatch();

  return (
    <>
      <p>Time / Africa / Egypt / Cairo</p>
      <div className="city-header">
        <div className="city-header__left">
          <h1>Time in Cairo, Egypt now</h1>
          <div>
            <time>{currentTime}</time>
            <div>
              <h2>Monday, November 23, 2020, week 48</h2>
              <p>
                Sun: 06:27 16:56 <a href="#">More info</a>
              </p>
            </div>
          </div>
        </div>
        <div className="city-header__right">TODO: controlls</div>
      </div>
    </>
  );
};

export default IndexPage;
