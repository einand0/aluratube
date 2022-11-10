import config from '../config.json'
import React from 'react';
import styled from 'styled-components'
import Menu from '../src/components/Menu/Menu'
import { CSSReset } from '../src/components/CSSReset'
import { StyledTimeline } from '../src/components/Timeline'
import { FavoritesContainer } from '../src/components/Favorites'
import { useState } from 'react'

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = useState("");


    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favorites favoritesList={config.favorites} />
            </div>
        </>
    )
}

export default HomePage


const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .header-banner{
        height: 230px;
        background-image: url(${config.bg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`

function Header() {
    return (
        <StyledHeader>
            <div className="header-banner" />

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>



            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...propriedades }) {

    // console.log(propriedades.playlists);

    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>

                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(propriedades) {

    const favoritesList = Object.keys(propriedades.favoritesList)

    return (
        <FavoritesContainer>
            {favoritesList.map((favoritesItem) => {
                const chanels = propriedades.favoritesList[favoritesItem];
                return (
                    <section key={favoritesItem}>
                        <h2>Aluratubes Favoritos</h2>
                        <div>
                            {chanels.map((chanel) => {
                                return (
                                    <a key={chanel.url} href={chanel.url}>
                                        <img src={chanel.avatar} />
                                        <span>
                                            {chanel.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </FavoritesContainer>
    )
}