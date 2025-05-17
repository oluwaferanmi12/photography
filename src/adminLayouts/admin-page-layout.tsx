// components/layouts/AdminPageLayout.tsx

import { AdminHeader } from "@/components/admin-components/sideNav/AdminHeader";
import SearchAndFilters from "@/components/admin-components/sideNav/search-and-filter/search-and-filter";

type AdminPageLayoutProps = {
  children: React.ReactNode;
  headerProps: {
    dashTitle: string;
    dashDescription?: string;
    showDescript?: boolean;
    buttonTitle: string;
    buttonOnClick: () => void;
  };
  showFilters?: boolean;
};

export default function AdminPageLayout({
  children,
  headerProps,
  showFilters = true,
}: AdminPageLayoutProps) {
  return (
    <div>
      <div className="m-4 mb-8">
        <AdminHeader {...headerProps} />
      </div>
      <hr />
      {showFilters && (
        <div className="m-4">
          <SearchAndFilters />
        </div>
      )}

      <div>{children}</div>
    </div>
  );
}
