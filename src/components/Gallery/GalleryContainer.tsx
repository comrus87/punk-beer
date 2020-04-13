import React from 'react';
import Gallery from './Gallery';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from './../../redux/store';
import {BeerType} from './../../redux/types/types';
import {getBeers, setCurrentPage, getBeersSearch} from './../../redux/galleryReducer';

type MapStatePropsType = {
  beers: Array<BeerType>,
  totalBeers: number,
  pageSize: number,
  portialSize: number,
  currentPage: number,
  isSearchMode: boolean
}

type MapDispatchPropsType = {
  getBeers: (page: number, pageSize: number) => void,
  setCurrentPage: (currentPage: number) => void,
  getBeersSearch: (value: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & PropsFromRedux;

class GalleryContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getBeers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getBeers(pageNumber, this.props.pageSize);
  }

  onPageSearch = (value: string) => {
    this.props.getBeersSearch(value);
  }

  render() {
    return <Gallery beers={this.props.beers}
                    totalBeers={this.props.totalBeers}
                    pageSize={this.props.pageSize}
                    portialSize={this.props.portialSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onPageSearch={this.onPageSearch}
                    isSearchMode={this.props.isSearchMode}
     />

  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    beers: state.galleryPage.beers,
    totalBeers: state.galleryPage.totalBeers,
    pageSize: state.galleryPage.pageSize,
    portialSize: state.galleryPage.portialSize,
    currentPage: state.galleryPage.currentPage,
    isSearchMode: state.galleryPage.isSearchMode
  }
};

const mapDispatchToProps = {
  getBeers,
  setCurrentPage,
  getBeersSearch
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GalleryContainer);
