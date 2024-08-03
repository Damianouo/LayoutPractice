import SidebarCtxProvider from "../contexts/SidebarCtx";
import LeagueFilter from "../components/Schedule/LeagueFilter";
import Matches from "../components/Schedule/Matches";

const Schedule = () => {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] lg:grid-cols-[300px,1fr] lg:grid-rows-1">
      <SidebarCtxProvider>
        <LeagueFilter />
      </SidebarCtxProvider>
      <Matches />
    </div>
  );
};

export default Schedule;
