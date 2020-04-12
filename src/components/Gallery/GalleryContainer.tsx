import React from 'react';
import Gallery from './Gallery';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from './../../redux/store';
import {BeerType} from './../../redux/types/types';
import {getBeers, setCurrentPage} from './../../redux/galleryReducer';

type MapStatePropsType = {
  beers: Array<BeerType>,
  totalBeers: number,
  pageSize: number,
  portialSize: number,
  currentPage: number
}

type MapDispatchPropsType = {
  getBeers: (page: number, pageSize: number) => void,
  setCurrentPage: (currentPage: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & PropsFromRedux;

class GalleryContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getBeers(1, 20);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getBeers(pageNumber, this.props.pageSize);
  }

  render() {
    return <Gallery beers={this.props.beers}
                    totalBeers={this.props.totalBeers}
                    pageSize={this.props.pageSize}
                    portialSize={this.props.portialSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
     />

  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    beers: state.galleryPage.beers,
    totalBeers: state.galleryPage.totalBeers,
    pageSize: state.galleryPage.pageSize,
    portialSize: state.galleryPage.portialSize,
    currentPage: state.galleryPage.currentPage
  }
};

const mapDispatchToProps = {
  getBeers,
  setCurrentPage
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GalleryContainer);
