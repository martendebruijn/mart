import { Menu } from "antd";

interface Item {
  label: string;
  key: string;
}

interface Props {
  items: Item[];
}

export function NavBar({ items }: Props) {
  const handleClick = (e: { key: string }) => {
    console.log("Navigating to:", e.key);
  };

  return (
    <Menu mode="horizontal" items={items} onClick={handleClick} theme="dark" />
  );
}
