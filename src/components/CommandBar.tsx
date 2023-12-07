import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import React, { HTMLAttributes } from "react";

interface CommandBarProps extends HTMLAttributes<HTMLElement> {
  actions: Action[];
}

const CommandBar: React.FC<CommandBarProps> = ({ actions, children }) => {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-black/50 backdrop-blur-sm">
          <KBarAnimator className="bg-white rounded-xl shadow-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
            <KBarSearch className="w-full outline-none px-6 py-4 text-black" />
            <SearchResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

const SearchResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          // Section header
          <div className="text-sm uppercase px-4 pt-3 pb-1 text-neutral-500 font-bold">
            {item}
          </div>
        ) : (
          // Single action
          <div
            className={`text-black flex px-4 py-3 ${
              active ? "bg-[#eeeeee]" : "bg-transparent"
            }`}
          >
            {item.name}
          </div>
        )
      }
    />
  );
};

export default CommandBar;
