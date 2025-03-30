import Avatar from "@mui/material/Avatar";
import imgProfiler from "./profile.png";
import { useDevice } from "@/components/useDevice";

const AvatarImage = () => {
  const { isMobile } = useDevice();

  return (
    <Avatar
      alt="Imagem Perfil"
      src={imgProfiler.src}
      sx={{
        width: isMobile ? 32 : 48,
        height: isMobile ? 32 : 48,
      }}
    />
  );
};

export default AvatarImage;
