
import AccountToggle from "@/components/Sidebar/AccountToggle";
import Search from "@/components/Sidebar/Search";
import { MenuSelect } from "@/components/Sidebar/MenuSelect";
import SignoutButton from "@/components/Sidebar/SignoutButton";

const Sidebar = async () => {
    
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* Main Content Sidebar*/}
        <AccountToggle />
        <Search />
        <MenuSelect />
        <SignoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
