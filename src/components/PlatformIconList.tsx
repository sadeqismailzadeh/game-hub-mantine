import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Group } from "@mantine/core";


interface Props {
  platform: string; 
}

const iconMap: { [key: string]: IconType } = {
  "PC (Windows)": FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  // nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  "Web Browser": BsGlobe,
};

const PlatformIconList = ({ platform }: Props) => {
  const IconComponent = iconMap[platform];

  if (!IconComponent) {
    return null;
  }

  return (
    <>
      <Group c="gray.6">
         <IconComponent />
      </Group>
    </>
  );
};

export default PlatformIconList;
