import checkedIcon from "@/assets/svgs/checked-icon.svg";
import checkUnfilld from "@/assets/svgs/check-unfilled.svg";
import timerPause from "@/assets/svgs/timer-pause.svg";
import timerStart from "@/assets/svgs/timer-start.svg";
import cancelIcon from "@/assets/svgs/cancel-x-icon.svg";
import roundedAdd from "@/assets/svgs/rounded-add-icon.svg";
import { Col, Row } from "antd";
import Image from "next/image";
import { Scheduletype, UpdateType } from "@/app/(admin)/calendar/page";

export const TimeSchedule = ({
  handleAddNextObject,
  index,
  schedule,
  objectLength,
  handleUpdate,
  handleRemove,
}: {
  handleAddNextObject: (val: number) => void;
  index: number;
  schedule: Scheduletype;
  objectLength: number;
  handleUpdate: (
    val: number,
    type: UpdateType,
    value: number | boolean
  ) => void;
  handleRemove: (val: number) => void;
}) => {
  return (
    <>
      <Row className="mb-3" align={"middle"} justify={"center"}>
        <Col xs={20}>
          <div className="flex items-center justify-between">
            <span>
              <Image
                className="cursor-pointer"
                onClick={() => {
                  handleUpdate(index, "checked", !schedule.included);
                }}
                src={schedule.included ? checkedIcon : checkUnfilld}
                alt=""
              />
            </span>
            <p className="text-[#344054] text-sm font-grotesk-semi-bold">
              {schedule.day}
            </p>
            <div className="relative">
              <span className="absolute right-2 top-3">
                <Image src={timerStart} alt="" />
              </span>
              <input
                onChange={(e) => {
                  handleUpdate(index, "start", +e.target.value);
                }}
                placeholder="From"
                className="border text-sm font-grotesk-semi-bold p-2 w-[100px] border-[#D0D5DD] rounded-lg"
              />
            </div>
            <div className="relative">
              <span className="absolute right-2 top-3">
                <Image src={timerPause} alt="" />
              </span>
              <input
                onChange={(e) => {
                  handleUpdate(index, "end", +e.target.value);
                }}
                placeholder="To"
                className="border text-sm font-grotesk-semi-bold p-2 w-[100px] border-[#D0D5DD] rounded-lg"
              />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="flex items-center justify-center gap-2 ">
            {objectLength === index + 1 && !!index && (
              <Image
                onClick={() => handleRemove(index)}
                className="w-[20px] cursor-pointer h-[20px]"
                src={cancelIcon}
                alt=""
              />
            )}

            {objectLength === index + 1 && (
              <Image
                onClick={() => {
                  handleAddNextObject(index);
                }}
                className="w-[20px] cursor-pointer h-[20px]"
                src={roundedAdd}
                alt=""
              />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
