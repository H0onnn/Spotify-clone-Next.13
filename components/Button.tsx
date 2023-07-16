import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// ButtonProps는 React의 내장 ButtonHTMLAttributes 타입을 확장, Button 컴포넌트가 HTML button element의 모든 속성을 받을 수 있도록 함
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Button 컴포넌트는 ButtonProps 타입의 props를 받아오고, forwardRef를 사용하여 ref를 받을 수 있도록 힘
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // className, children, disabled, type은 props에서 분해할당
      className,
      children,
      disabled,
      type = "button", // type의 기본값 'button'
      // 나머지 props는 ...props를 통해 받아옴
      ...props
    },
    ref
  ) => {
    return (
      <button
        // className, type, disabled, ref, 그리고 나머지 props를 button 엘리먼트에 전달
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
          className
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {/* children은 button 엘리먼트의 내부에 위치 */}
        {children}
      </button>
    );
  }
);

// displayName은 개발자 도구에서 컴포넌트의 이름을 표시하는 데 사용
// Button으로 설정하면 개발자 도구에서 이 컴포넌트가 "Button"이라는 이름으로 표시됨.
Button.displayName = "Button";

export default Button;
