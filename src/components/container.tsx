import type { ComponentPropsWithoutRef } from "react";

/** Page-width wrapper: 16px gutter on phones, wider on larger screens. */
export function Container({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}
