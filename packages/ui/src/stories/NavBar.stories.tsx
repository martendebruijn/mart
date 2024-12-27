import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "../components";

const meta: Meta<typeof NavBar> = {
  title: "Elements/NavBar",
  component: NavBar,
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { label: "Home", key: "label" },
      { label: "About", key: "about" },
      { label: "Contact", key: "contact" },
    ],
  },
};
