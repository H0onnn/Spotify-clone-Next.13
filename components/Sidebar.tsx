"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode; // Sidebar 컴포넌트의 자식 컴포넌트들 타입 선언
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  // 현재 경로 가져옴
  const pathname = usePathname();

  // routes를 메모이제이션하여 성능 개선
  const routes = useMemo(
    () => [
      // 홈 경로 정보
      {
        icon: HiHome, // 아이콘
        label: "Home", // 라벨
        active: pathname !== "/search", // 활성화 여부
        href: "/", // 경로
      },
      // 검색 경로 정보
      {
        icon: BiSearch, // 아이콘
        label: "Search", // 라벨
        active: pathname === "/search", // 활성화 여부
        href: "/search", // 경로
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div
        className="
          hidden
          md:flex
          flex-col
          gap-y-2
        bg-black
          h-full
          w-[300px]
          p-2"
      >
        <Box>
          <div
            className="
              flex
              flex-col
              gap-y-4
              px-5
              py-4
              "
          >
            {routes.map((item) => (
              // 각 경로에 대한 사이드바 아이템을 렌더링합니다.
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
