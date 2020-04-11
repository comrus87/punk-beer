import React from 'react';
import Gallery from './Gallery';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from './../../redux/store';
import {BeerType} from './../../redux/types/types';
import {getBeers} from './../../redux/galleryReducer';

type MapStatePropsType = {
  beers: Array<BeerType>
}

type MapDispatchPropsType = {
  getBeers: (page: number, pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & PropsFromRedux;

class GalleryContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getBeers(1, 20);
  }

  render() {
    return <Gallery beers={this.props.beers} />

  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    beers: state.galleryPage.beers
  }
};

const mapDispatchToProps = {
  getBeers
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GalleryContainer);
