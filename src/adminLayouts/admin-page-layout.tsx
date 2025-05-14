// components/layouts/AdminPageLayout.tsx

import { AdminHeader } from "@/components/admin-components/sideNav/AdminHeader";
import SearchAndFilters from "@/components/admin-components/sideNav/search-and-filter/search-and-filter";

type AdminPageLayoutProps = {
  children: React.ReactNode;
  headerProps: {
    dashTitle: string;
    dashDescription: string;
    buttonTitle: string;
    buttonOnClick: () => void
  };
};

export default function AdminPageLayout({ children, headerProps }: AdminPageLayoutProps) {
  return (
    <div>
      <div className="m-4 mb-8">
        <AdminHeader {...headerProps} />
      </div>
      <hr />
      <div className="m-4">
        <SearchAndFilters />
      </div>
      <div>{children}</div>
    </div>
  );
}
