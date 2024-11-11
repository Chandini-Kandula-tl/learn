import { Popconfirm, PopconfirmProps } from "antd";
import React from "react";

export interface PopConfirmComponentProps
  extends Omit<PopconfirmProps, "title"> {
  type: "minimum" | "maximum" | "update";
}

const PopConfirmComponent: React.FC<PopConfirmComponentProps> = ({
  type,
  children,
  ...props
}) => {
  let title = "update";
  let description =
    "Updating system size will change the phase!! Are you sure?";
  if (type == "minimum") {
    title = "Minimum system requirement";
    description =
      "Entered system size is too low. Do you want to replace it with the minimum available size?";
  } else if (type === "maximum") {
    title = "Maximum system requirement";
    description =
      "Entered system size is too high. Do you want to replace it with the maximum available size?";
  } else {
    title = "Update system requirement";
    description = "Updating system size will change the phase!! Are you sure?";
  }
  return (
    <Popconfirm
      title={title}
      description={description}
      okText="Yes"
      cancelText="No"
      {...props}
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirmComponent;
