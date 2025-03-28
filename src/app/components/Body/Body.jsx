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
    </div>
  );
};
export default body;
