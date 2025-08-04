import { IconButton, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface DetailsButtonProps {
  onClick?: () => void;
  position?: "absolute" | "relative";
  top?: number | string;
  right?: number | string;
  zIndex?: number;
  loading?: boolean;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: theme.palette.common.white,
  zIndex: 3,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
}));

const DetailsButton: React.FC<DetailsButtonProps> = ({
  onClick,
  position = "absolute",
  top,
  right,
  zIndex = 3,
  loading = false,
}) => {
  if (loading) {
    return (
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{
          position,
          top: top || "8px",
          right: right || "8px",
          zIndex,
        }}
      />
    );
  }

  return (
    <StyledIconButton
      onClick={onClick}
      aria-label="view details"
      sx={{
        position,
        top,
        right,
        zIndex,
      }}
    >
      <OpenInNewIcon fontSize="small" />
    </StyledIconButton>
  );
};

export default DetailsButton;
