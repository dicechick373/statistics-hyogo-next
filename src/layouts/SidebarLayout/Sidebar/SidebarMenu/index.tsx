import { useContext } from 'react';
import { useRouter } from 'next/router';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FactoryIcon from '@mui/icons-material/Factory';
import StoreIcon from '@mui/icons-material/Store';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PublicIcon from '@mui/icons-material/Public';


const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
    'transform',
    'opacity'
  ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Dashboards
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/landweather" passHref>
                  <Button
                    className={
                      currentRoute === '/landweather' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WbSunnyIcon />}
                  >
                    国土・気象
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/population" passHref>
                  <Button
                    className={
                      currentRoute === '/population' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<GroupIcon />}
                  >
                    人口・世帯
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/laborwage" passHref>
                  <Button
                    className={
                      currentRoute === '/laborwage' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<PaymentsIcon />}
                  >
                    労働・賃金
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/agriculture" passHref>
                  <Button
                    className={
                      currentRoute === '/agriculture' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<AgricultureIcon />}
                  >
                    農林水産業
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/miningindustry" passHref>
                  <Button
                    className={
                      currentRoute === '/miningindustry' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<FactoryIcon />}
                  >
                    鉱工業
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/miningindustry" passHref>
                  <Button
                    className={
                      currentRoute === '/miningindustry' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<StoreIcon />}
                  >
                    商業・サービス業
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/economy" passHref>
                  <Button
                    className={
                      currentRoute === '/economy' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LocationCityIcon />}
                  >
                    企業・家計・経済
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/construction" passHref>
                  <Button
                    className={
                      currentRoute === '/construction' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<HomeWorkIcon />}
                  >
                    住宅・土地・建設
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/energy" passHref>
                  <Button
                    className={
                      currentRoute === '/energy' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LocalDrinkIcon />}
                  >
                    エネルギー・水
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/tourism" passHref>
                  <Button
                    className={
                      currentRoute === '/tourism' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LocalShippingIcon />}
                  >
                    運輸・観光
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/educationsports" passHref>
                  <Button
                    className={
                      currentRoute === '/educationsports' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<SchoolIcon />}
                  >
                    教育・文化・スポーツ
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/administrativefinancial" passHref>
                  <Button
                    className={
                      currentRoute === '/administrativefinancial' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<MonetizationOnIcon />}
                  >
                    行財政
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/safetyenvironment" passHref>
                  <Button
                    className={
                      currentRoute === '/safetyenvironment' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<VpnLockIcon />}
                  >
                    司法・安全・環境
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/socialsecurity" passHref>
                  <Button
                    className={
                      currentRoute === '/socialsecurity' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LocalHospitalIcon />}
                  >
                    医療・社会保障・衛生
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/international" passHref>
                  <Button
                    className={
                      currentRoute === '/international' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<PublicIcon />}
                  >
                    国際
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
