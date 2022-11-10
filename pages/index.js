import config from '../config.json'
import styled from 'styled-components'
import Menu from '../src/components/Menu'
import { CSSReset } from '../src/components/CSSReset'
import { StyledTimeline } from '../src/components/Timeline'
import { FavoritesContainer } from '../src/components/Favorites'

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
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
        height: 40vh;
        background-image: url("https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
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

function Timeline(propriedades) {

    // console.log(propriedades.playlists);

    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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
                    <section>
                        <h2>Aluratubes Favoritos</h2>
                        <div>
                            {chanels.map((chanel) => {
                                return (
                                    <a href={chanel.url}>
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