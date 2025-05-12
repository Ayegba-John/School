import styels from "./Body.module.css";

const body = () => {
  return (
    <div className={styels.main}>
      <div className={styels.wrap}>
        <h2>Some of the companies we have worked with</h2>
      </div>
      <div className={styels.group_pic}>
        <img className={styels.group} src="group.png" alt="group icon" />
      </div>
      <div>Discover our Master’s degrees</div>
      <div>
        <div className={styels.discover}>
          <div>
            <p>
              Fully online program with access to our in-person hackerspaces
            </p>
          </div>
          <div>
            <ul>
              90 ECTS credits Self paced online learning with live instructor
              sessions 15 Months 6 hours of course per week
            </ul>
          </div>
        </div>
        <div>
          <p>Master’s Degree (MSc) in Software Engineering in 15 months</p>
        </div>
      </div>
    </div>
  );
};
export default body;
