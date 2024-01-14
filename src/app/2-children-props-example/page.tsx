import Child from "@/component/children/Child";
import Parent from "@/component/children/Parent";
import SecondChild from "@/component/children/SecondChild";
import React from "react";

const ChildrenPropsExample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropsExample;
