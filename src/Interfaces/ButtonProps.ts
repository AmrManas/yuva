import { MouseEventHandler } from "react";

export interface ButtonProps {
    title:string;
    className?: string;
    type: string;
    danger?: boolean;
    block?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    shape?:string;
    href?: string;
  }
  