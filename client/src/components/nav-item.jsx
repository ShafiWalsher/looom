
const NAV_ICON_INACTIVE = "text-gray-400 group-hover:text-black";
const NAV_ICON_ACTIVE = "fill-black text-gray-800 group-hover:text-black";

export default function NavItem({ Icon, active, size = 22 }) {
  return (

    <Icon
      size={size}
      className={` ${active ? NAV_ICON_ACTIVE : NAV_ICON_INACTIVE
        }`}
    />
  );
}
