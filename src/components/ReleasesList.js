import React, {Component} from 'react';
import ReleasesListItem from './ReleasesListItem';

class ReleasesList extends Component {

    render() {
        const films = this.props.films.map(film => {
            return (
            <ReleasesListItem key={film.id} name={film.name} url={film.url}></ReleasesListItem>
            )
        })
        return(
            <div>
            {films}
            </div>
        )

    }

}

export default ReleasesList;