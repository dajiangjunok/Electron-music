import React, { memo, useCallback, useEffect, useState } from 'react';
import { Input, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { changeSearchSongsAction } from '../search/store/actioncreators';
import { formatMinuteSecond } from '../../utils/format-utils'
import { changeSongDetailAction } from '../player/store/actionCreators';

import { SearchWrapper, SearchHeader, SearchContent } from './style';
import YJSearchBar from './c-cpn/tabble-bar';

export default memo(function YJSearch (props) {
  const { Search } = Input;
  // state props
  const search = props.location.state && props.location.state.search;
  const [searchInput, setsearchInput] = useState('');
  const [offset, setoffset] = useState(1);
  const [limit] = useState(10);
  const [data, setdata] = useState([]);
  const [totals, settotals] = useState(0);

  const play = (index) => {
    const current = searchInfo.songs[index];
    dispatch(changeSongDetailAction(current.id))
  }
  const columns = [
    {
      title: 'MusicName',
      dataIndex: 'MusicName',
      key: 'MusicName',
      render: (text, all, index) => {
        return (
          <div className="music-name">
            <i className="iconfont icon-bofang" onClick={e => play(index)}></i>
            <span>{text}</span>
          </div>
        )
      },
      width: 100
    },
    {
      title: 'Lrc',
      dataIndex: 'Lrc',
      key: 'Lrc',
      width: 150
    },
    {
      title: 'AlName',
      dataIndex: 'AlName',
      key: 'AlName',
      width: 100
    },
    {
      title: 'Duration',
      key: 'Duration',
      dataIndex: 'Duration',
      width: 50
    }
  ];


  // redux hooks
  const dispatch = useDispatch()
  const { searchInfo } = useSelector(state => ({
    searchInfo: state.search.searchInfo
  }))

  // other handle
  const onSearch = useCallback(() => {
    dispatch(changeSearchSongsAction(searchInput, limit, offset))
  }, [dispatch, searchInput, limit, offset])

  const onChange = useCallback((e) => {
    setsearchInput(e.currentTarget.value)
  }, [setsearchInput])

  useEffect(() => {
    setsearchInput(search);
  }, [search])

  useEffect(() => {
    const searchInfoCopy = searchInfo.songs && [...searchInfo.songs]
    const data = []
    searchInfoCopy && searchInfoCopy.forEach((item, index) => {
      const info = {
        key: index,
        MusicName: item.name,
        Lrc: item.artists[0].name,
        AlName: item.album.name,
        Duration: formatMinuteSecond(item.duration)
      }
      data.push(info)
    })
    setdata(data)
    settotals(searchInfo.songCount)
  }, [searchInfo])


  // 其他操作
  const changePage = (current) => {
    dispatch(changeSearchSongsAction(searchInput, limit, current))
    setoffset(current)
  }

  return (
    <SearchWrapper className="wrap-v2">
      <SearchHeader>
        <Search className="search-input" onSearch={onSearch} onChange={e => onChange(e)} value={searchInput} />
      </SearchHeader>
      <span>共找到 <i style={{ color: "red" }}>{(searchInfo && searchInfo.songCount) ? searchInfo.songCount : 0}</i> 首单曲</span>
      <SearchContent>
        <YJSearchBar />
        <Table showHeader={false} columns={columns} dataSource={data} pagination={{
          showSizeChanger: false,
          showQuickJumper: false,
          showTotal: () => `共${totals}条`,
          pageSize: limit,
          current: offset,
          total: totals,
          // onShowSizeChange: (current, pageSize) => changePageSize(pageSize, current),
          onChange: (current) => changePage(current),
        }} />
      </SearchContent>
    </SearchWrapper>
  )
})
