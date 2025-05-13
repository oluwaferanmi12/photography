import { Col, Row } from "antd";
import Image from "next/image";
import addLine from "@/assets/svgs/add_line.svg";
import searchIcon from "@/assets/svgs/Admin_svgs/searchIcon.svg";
import badgeIcon from "@/assets/svgs/Admin_svgs/help-badge.svg";
import notificationIcon from "@/assets/svgs/notification.svg";
import { Nav } from "@/components/admin-components/sideNav/nav";
import { DropdownFilter } from "@/components/admin-components/sideNav/dropdown-filter/dropdown-filter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categoryData = ["All", "Wedding", "Makeup", "Lifestyle"];
  const statusData = ["All", "Pending", "Active", "Successful"];
  const groupByData = ["Categories", "statusData", "Date Created"];
  return (
    <div className="bg-white h-screen min-h-screen">
      <Row className="h-full">
        <Col
          xs={4}
          className="bg-[#F6F4F0] border border-[#EFEEEE] h-full min-h-full"
        >
          <Nav />
        </Col>
        <Col xs={20}>
          <div className="p-4">
            <AdminHeader />
          </div>
          <hr />
          <div className="flex justify-between items-center p-4">
            <div className="flex gap-2 border items-center p-2 rounded-xl ">
              <span>
                <Image
                  src={searchIcon}
                  alt="search"
                  className="cursor-pointer w-6 h-6"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="border-0 text-sm text-admin-black-150 w-full placeholder:text-admin-black-150 focus:border-0 focus:outline-none"
              />
              <span>
                <Image
                  src={badgeIcon}
                  alt="search"
                  className="cursor-pointer"
                />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DropdownFilter
                dropdownList={categoryData}
                dropdownName="Category"
              />
              <DropdownFilter
                dropdownList={statusData}
                dropdownName="Status"
              />
              <DropdownFilter
                dropdownList={groupByData}
                dropdownName="Group by"
              />
            </div>
          </div>
          <div className="">{children}</div>
        </Col>
      </Row>
    </div>
  );
}

const AdminHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <p className="text-[#101010] text-2xl font-mono-medium">
            My Bookings
          </p>
          <p className="text-[#615F5F] font-mono-regular w-1/2 mt-1 ">
            Supercharge your workflow and handle repetitive tasks the apps you
            use every day.
          </p>
        </div>
        <div className="flex gap-6 items-stretch ">
          <span className="p-4 border cursor-pointer rounded-lg border-[#EFEEEE] flex justify-center items-center">
            <Image src={notificationIcon} alt="notification" />
          </span>
          <button className="flex items-center gap-2 bg-[#101010] py-3 px-4 rounded-lg">
            <Image src={addLine} alt="" />
            <p className="text-sm font-mono-regular">Create a booking link</p>
          </button>
        </div>
      </div>
    </>
  );
};
