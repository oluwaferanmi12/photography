
import Image from "next/image";
import searchIcon from "@/assets/svgs/Admin_svgs/searchIcon.svg";
import badgeIcon from "@/assets/svgs/Admin_svgs/help-badge.svg";
import { DropdownFilter } from "@/components/admin-components/sideNav/dropdown-filter/dropdown-filter";

export default function SearchAndFilters() {
  const categoryData = ["All", "Wedding", "Makeup", "Lifestyle"];
  const statusData = ["All", "Pending", "Active", "Successful"];
  const groupByData = ["Categories", "Status", "Date Created"];

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 border items-center p-2 rounded-xl w-1/3">
        <Image src={searchIcon} alt="search" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search"
          className="border-0 text-sm text-admin-black-150 w-full placeholder:text-admin-black-150 focus:outline-none"
        />
        <Image src={badgeIcon} alt="help" className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <DropdownFilter dropdownList={categoryData} dropdownName="Category" />
        <DropdownFilter dropdownList={statusData} dropdownName="Status" />
        <DropdownFilter dropdownList={groupByData} dropdownName="Group by" />
      </div>
    </div>
  );
}
