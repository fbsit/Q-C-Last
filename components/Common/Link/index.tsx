import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import { memo } from "react";

type LinkElementProps = {
  children: ReactNode;
  href: string | { pathname: string };
  className?: string;
};

const LinkElement = ({ children, href, className }: LinkElementProps) => {
  return (
    <Link href={href} className={clsx("", className)}>
      {children}
    </Link>
  );
};

export default memo(LinkElement);
