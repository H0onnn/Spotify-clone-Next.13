import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType; // 아이콘
  label: string; // 레이블 (표시될 텍스트)
  active: boolean; // 활성화 여부 (현재 선택된 아이템인지 표시)
  href: string; // 링크
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex
    flex-row
    h-auto
    items-center
    w-full
    gap-x-4
    text-md
    font-medium
    cursor-pointer
    hover:text-white
    transition
    text-neutral-400
    py-1`,
        active && "text-white" // 활성화 상태에 따라 text-white 클래스 추가
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
