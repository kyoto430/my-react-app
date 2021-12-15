import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'

import ChampionatIcon from '../../assets/headerIcons/championats.png'
import AcademIcon from '../../assets/headerIcons/academies.png'
import ArticleIcon from '../../assets/headerIcons/articles.png'
import ClubIcon from '../../assets/headerIcons/clubs.png'
import LeaderIcon from '../../assets/headerIcons/leaders.png'
import OrganizatorIcon from '../../assets/headerIcons/organizers.png'
import PlayerIcon from '../../assets/headerIcons/players.png'
import SponsorIcon from '../../assets/headerIcons/sponsors.png'
import StadiumIcon from '../../assets/headerIcons/stadium.png'
import StuffIcon from '../../assets/headerIcons/stuff.png'
import LogoIcon from '../../assets/headerIcons/logo.png'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LogoIcon} alt="football-logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption avatar={ArticleIcon} title="Статьи" />
        <HeaderOption avatar={ChampionatIcon} title="Чемпионаты" />
        <HeaderOption avatar={ClubIcon} title="Футбольные клубы" />
        <HeaderOption avatar={PlayerIcon} title="Футболисты" />
        <HeaderOption avatar={AcademIcon} title="Академии" />
        <HeaderOption avatar={StadiumIcon} title="Стадионы" />
        <HeaderOption avatar={LeaderIcon} title="Руководители" />
        <HeaderOption avatar={StuffIcon} title="Штабы" />
        <HeaderOption avatar={OrganizatorIcon} title="Организаторы" />
        <HeaderOption avatar={SponsorIcon} title="Спонсоры" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I4FfmHwLiuOL7Hko2AVC4YAqKnePpOtfE7LmEKG=s83-c-mo"
          title="Я"
        />
      </div>
    </div>
  )
}

export default Header
