import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// classic regular
import { faBowlFood as faBowlFoodRegular, faForkKnife as faForkKnifeRegular, faUtensils as faUtensilsRegular, faGrid2 as faGrid2Regular, faHeart as faHeartRegular, faUser, faChevronUp } from "@awesome.me/kit-963e7eb95c/icons/classic/regular";

// duotone solid
import { faBowlFood as faBowlFoodSolid, faForkKnife as faForkKnifeSolid, faUtensils as faUtensilsSolid, faGrid2 as faGrid2Solid, faHeart as faHeartSolid } from "@awesome.me/kit-963e7eb95c/icons/classic/solid";

// Menu items.
const items = [
  {
    title: "Discover",
    url: "#",
    icon: faBowlFoodRegular,
    hoverIcon: faBowlFoodSolid,
  },
  {
    title: "Dined",
    url: "#",
    icon: faForkKnifeRegular,
    hoverIcon: faForkKnifeSolid,
  },
  {
    title: "Want To Dine",
    url: "#",
    icon: faUtensilsRegular,
    hoverIcon: faUtensilsSolid,
  },
  {
    title: "Lists",
    url: "#",
    icon: faGrid2Regular,
    hoverIcon: faGrid2Solid,
  },
  {
    title: "Favorites",
    url: "#",
    icon: faHeartRegular,
    hoverIcon: faHeartSolid,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Restaurant Tracker</SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="group/item">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className="relative w-5 h-5 ">
                        {/* default icon */}
                        <FontAwesomeIcon icon={item.icon} className="absolute inset-0 text-lg transition-opacity duration-150 opacity-100 group-hover/item:opacity-0" />
                        {/* hover icon */}
                        <FontAwesomeIcon icon={item.hoverIcon} className="absolute inset-0 text-lg transition-opacity duration-150 opacity-0 group-hover/item:opacity-100" />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <FontAwesomeIcon icon={faUser} /> Username
                  <FontAwesomeIcon icon={faChevronUp} className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
