"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  // 로그아웃 처리 함수
  const handleLogout = () => {};

  return (
    // 최상위 div에 Tailwind CSS 클래스를 이용한 스타일 적용
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      {/* 헤더 내용을 감싸는 div. flex를 이용해 내부 아이템 수평 정렬 */}
      <div className="w-full mb-4 flex items-center justify-between">
        {/* 데스크톱 버전에서 보여지는 이전/다음 버튼 */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            // 클릭 시 라우터의 back 메서드를 호출해 이전 페이지로 이동
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover: opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            // 클릭 시 라우터의 forward 메서드를 호출해 다음 페이지로 이동
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover: opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        {/* 모바일 버전에서 보여지는 홈/검색 버튼 */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={26} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={26} />
          </button>
        </div>
        {/* 로그인/가입 버튼 */}
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                className="bg-transparent text-neutral-300 font-medium"
                onClick={() => {}}
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2" onClick={() => {}}>
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {/* 헤더 내부에 위치한 자식 요소들 렌더링 */}
      {children}
    </div>
  );
};

export default Header;
