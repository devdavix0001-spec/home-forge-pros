import { Link, useRouterState } from "@tanstack/react-router";

type Tab = {
  to: string;
  label: string;
  icon: (active: boolean) => JSX.Element;
};

function iconProps(active: boolean) {
  return {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: active ? 2.4 : 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

const tabs: Tab[] = [
  {
    to: "/admin",
    label: "Overview",
    icon: (active) => (
      <svg {...iconProps(active)}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9h14v-9" />
      </svg>
    ),
  },

  {
    to: "/admin/gallery",
    label: "Gallery",
    icon: (active) => (
      <svg {...iconProps(active)}>
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
        />
        <circle
          cx="8.5"
          cy="9.5"
          r="1.5"
        />
        <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.1 0L4 19" />
      </svg>
    ),
  },

  {
    to: "/admin/services",
    label: "Services",
    icon: (active) => (
      <svg {...iconProps(active)}>
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
        />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

export function AdminBottomNav() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <nav
      className="admin-bottom-nav"
      aria-label="Admin sections"
    >
      {tabs.map((tab) => {
        const active =
          tab.to === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(tab.to);

        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={
              active
                ? "admin-bottom-tab is-active"
                : "admin-bottom-tab"
            }
            aria-current={active ? "page" : undefined}
          >
            {tab.icon(active)}

            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
