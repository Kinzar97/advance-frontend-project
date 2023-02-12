import { useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev=>!prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{collapsed ? "Show" : "Hide"}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* lang switcher here */}
      </div>
    </div>
  );
};
