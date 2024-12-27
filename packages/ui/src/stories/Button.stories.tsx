import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click me",
    onClick: () => console.log("Clicked"),
  },
};
