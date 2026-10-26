import Link from "next/link";
import type { ReactNode } from "react";

type Underline = "inline" | "hidden" | "white" | "footer";

interface UnderlineLinkProps {
  href: string;
  children: ReactNode;
  underline: Underline;
  className?: string;
  ariaCurrent?: boolean;
}

const ulClass: Record<Underline, string> = {
  inline: "a365-ul",
  hidden: "a365-ul a365-ul-hidden",
  white: "a365-ul a365-ul-white",
  footer: "a365-ul a365-ul-footer",
};

/** Source `.link-block` + `.link-underline` pair. */
export function UnderlineLink({ href, children, underline, className, ariaCurrent }: UnderlineLinkProps) {
  const cls = ["a365-link", underline === "inline" ? "a365-link-inline" : "", className].filter(Boolean).join(" ");
  const inner = (
    <>
      {children}
      <span className={ulClass[underline]} />
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} aria-current={ariaCurrent ? "page" : undefined}>
        {inner}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  );
}
