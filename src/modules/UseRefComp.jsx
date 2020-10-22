import React, {
    useRef,
    useEffect,
  } from "react";
  import Child from './ChildForwardComp'
  
  const RefDemo = () => {
    const domRef = useRef(1);
    const childRef = useRef(null);
    useEffect(() => {
      console.log("ref:deom-init", domRef, domRef.current);
      console.log("ref:child-init", childRef, childRef.current);
    });
    const showChild = () => {
      console.log("ref:child", childRef, childRef.current);
      childRef.current.say();
    };
    return (
      <div style={{ margin: "100px", border: "2px dashed", padding: "20px" }}>
        <h2>这是外层组件</h2>
        <div
          onClick={() => {
            console.log("ref:deom", domRef, domRef.current);
            domRef.current.focus();
            domRef.current.value = 'hh';
          }}
        >
         <label>这是一个dom节点</label><input ref={domRef} />
        </div>
        <br />
        <p onClick={showChild} style={{ marginTop: "20px" }}>
          这是子组件
        </p>
        <div style={{ border: "1px solid", padding: "10px" }}>
          <Child ref={childRef} />
        </div>
      </div>
    );
  };
  export default RefDemo;
  