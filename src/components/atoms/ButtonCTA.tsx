import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps & { children: string };

export const ButtonCTA = ({ children, ...props }: Props) => {
  return (
    <Button variant="outlined" sx={{ width: "60%", height: 60 }} {...props}>
      {children}
    </Button>
  );
};
