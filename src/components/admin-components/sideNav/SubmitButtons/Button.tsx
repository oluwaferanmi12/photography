import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const AdminSubmitButton = ({
  text,
  onClick,
  loading,
}: {
  text: string;
  onClick?: () => void;
  loading?: boolean;
}) => {
  const antIcon = <LoadingOutlined style={{ color: '#fff' }} spin />;

  return (
    <button
      type="submit"
      disabled={loading}
      onClick={onClick}
      className="w-full  cursor-pointer text-white py-4 px-8 rounded-full bg-[#1B1B1B] flex gap-3 justify-center items-center"
    >
      {loading && <Spin indicator={antIcon} />}
      {text}
    </button>
  );
};
