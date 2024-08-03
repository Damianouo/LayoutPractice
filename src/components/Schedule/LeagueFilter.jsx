import { useContext } from "react";
import { SidebarCtx } from "../../contexts/SidebarCtx";
import { motion, AnimatePresence } from "framer-motion";
import { leagueData } from "../../utils/league";

const LeagueFilter = () => {
  const { sidebarShow, setSidebarShow } = useContext(SidebarCtx);
  return (
    <div className="relative font-semibold uppercase text-slate-500">
      {/*hidden sidebar */}
      <div className="block lg:hidden">
        <button
          className="w-full border border-gray-700 bg-gray-950 p-6 text-left uppercase transition-colors hover:bg-gray-900"
          onClick={() => setSidebarShow((prev) => !prev)}
        >
          Filter
        </button>
        <AnimatePresence>
          {sidebarShow && (
            <div className="absolute right-0 top-full h-[calc(100vh-154px)] w-full overflow-hidden">
              <motion.div
                className="absolute right-0 top-0 z-10 h-full w-full bg-zinc-950/50"
                key={`${sidebarShow}matchBackdrop`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarShow(false)}
              />
              <motion.aside
                key={`${sidebarShow}matchAside`}
                initial={{ opacity: 0, right: -100 }}
                animate={{ opacity: 1, right: 0 }}
                exit={{ opacity: 0, right: -100 }}
                className="absolute right-0 top-0 z-50 h-full w-screen border-l border-gray-700 bg-zinc-900 sm:w-[300px]"
              >
                <LeagueLists />
              </motion.aside>
            </div>
          )}
        </AnimatePresence>
      </div>
      {/* left sidebar */}
      <aside className="hidden h-full border-r border-gray-700 bg-gray-950 lg:block">
        <p className="border-b-2 border-gray-700 p-6">filter</p>
        <LeagueLists />
      </aside>
    </div>
  );
};

export default LeagueFilter;

const LeagueLists = () => {
  return (
    <ul>
      {leagueData.map((league) => (
        <li
          className="border-b border-gray-700 px-8 py-6 transition-colors hover:bg-zinc-800"
          key={league.title}
        >
          <p className="text-white">{league.title}</p>
          <p>{league.region} </p>
        </li>
      ))}
    </ul>
  );
};
