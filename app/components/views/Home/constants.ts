import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import SpeedIcon from '@material-ui/icons/Speed';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import FlipIcon from '@material-ui/icons/Flip';
import TwitterIcon from '@material-ui/icons/Twitter';

export type LoadWeb3Modal = () => Promise<void>;

interface Link {
  to: string;
  show: boolean;
  text: string;
  dataActive: boolean;
}

export interface NavProps {
  links: Link[];
  chainId: number | undefined;
}

export interface WalletProps {
  address?: string;
  isMobile?: boolean;
  isConnected: boolean;
  loadWeb3Modal: LoadWeb3Modal;
  disconnect: () => Promise<void>;
}

export interface MobileMenuProps {
  links: Link[];
  isConnected: boolean;
  loadWeb3Modal: LoadWeb3Modal;
  disconnect: () => Promise<void>;
}

// export interface SideBarMenuProps {
  
// };

export const generateLinks = ({
  path,
  showPklimaButton,
  showRedeemButton,
}: {
  path: string;
  showPklimaButton: boolean;
  showRedeemButton: boolean;
}) => [
  {
    to: "/redeem",
    show: true,
    text: "REDEEM",
    dataActive: path === "/redeem",
  },
  {
    to: "/stake",
    show: true,
    text: "STAKE",
    dataActive: path === "/stake",
  },
  {
    to: "/wrap",
    show: true,
    text: "WRAP",
    dataActive: path === "/wrap",
  },
  {
    to: "/bonds",
    show: true,
    text: "BOND",
    dataActive: path.includes("/bonds"),
  },
  {
    to: "/info",
    show: true,
    text: "INFO",
    dataActive: path === "/info",
  },
  {
    to: "/pklima",
    show: true,
    text: "pKLIMA",
    dataActive: path === "/pklima",
  },
];

export const getPrimaryLinks = ({
  path
}: {
  path: string;
}) => [
  {
    icon: CreditCardIcon,
    to: "/",
    text: "Buy Klima",
    dataActive: path === "/",
  },
  {
    icon: AddToPhotosOutlinedIcon,
    to: "/stake",
    text: "Stake Klima",
    dataActive: path === "/stake",
  },
  {
    icon: EcoOutlinedIcon,
    to: "/bonds",
    text: "Bond Carbon",
    dataActive: path.includes("/bonds"),
  },
  {
    icon: FlipIcon,
    to: "/wrap",
    text: "Wrap",
    dataActive: path === "/wrap",
  },
  {
    icon: SpeedIcon,
    to: "/",
    text: "Carbon Offset",
    dataActive: path === "/",
  }
];

export const getSecondaryLinks = () => [
    {
      icon: TwitterIcon,
      text: "Circles",
      link: "www.google.com",
    },
    {
      icon: TwitterIcon,
      text: "Discord",
      link: "www.discord.com",
    },
    {
      icon: TwitterIcon,
      text: "Twitter",
      link: "www.twitter.com",
    },
    {
      icon: TwitterIcon,
      text: "Lifesaver",
      link: "www.google.com",
    },
] 
