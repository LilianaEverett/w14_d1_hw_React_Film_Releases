    import React, {Component} from 'react';
    import MoreReleases from '../components/MoreReleases';
    import ReleasesList from '../components/ReleasesList';
    import '../App.css';

    class FilmReleases extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: [{
                        id: 1,
                        name: "Western Stars",
                        url: "https://www.imdb.com/title/tt10687158/?ref_=rlm"
                    },
                    {
                        id: 2,
                        name: "Doctor Sleep",
                        url: "https://www.imdb.com/title/tt5606664/?ref_=rlm"
                    },
                    {
                        id: 3,
                        name: "Sorry We Missed You",
                        url: "https://www.imdb.com/title/tt8359816/?ref_=rlm"
                    },
                    {
                        id: 4,
                        name: "After The Wedding",
                        url: "https://www.imdb.com/title/tt7985692/?ref_=rlm"
                    },
                    {
                        id: 5,
                        name: "Brittany Runs a Marathon",
                        url: "https://www.imdb.com/title/tt7671064/?ref_=rlm"
                    }
                ]
            }
        }

        render() {
            return (
                <div className="container"> 
                    <div className="film-releases">
                        <h1>Upcoming Film Releases for UK</h1>
                        <ReleasesList films = {this.state.data} ></ReleasesList> 
                    </div>
                    <div className="more-releases">
                        <MoreReleases />
                    </div>
                </div>
            )
        }

    }

    export default FilmReleases;