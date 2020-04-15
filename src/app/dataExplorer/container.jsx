import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchPrefectureNames,
  togglePrefecture
} from 'store/prefectureData/actions'
import { Filter } from './filter/view'

/**
 * 都道府県のデータを調べる為のコンポーネント。
 * @param {object} props
 * @param {object} props.prefectures 都道府県に関するデータ
 * @param {boolean} props.prefectureNamesLoading 都道府県名のロード状態
 * @param {string} props.prefectureNameError 都道府県名取得に発生したエラーメッセージ
 * @param {() => object} props.fetchPrefectureNames 都道府県名取得を開始するアクショ
 * ンクリエーター
 * @param {(event: object) => object} props.togglePrefecture 都道府県を選択する用の
 * アクションクリエーター
 */
const DataExplorerContainer = ({
  prefectures,
  prefectureNamesLoading,
  prefectureNameError,
  fetchPrefectureNames,
  togglePrefecture
}) => {
  useEffect(() => {
    fetchPrefectureNames()
  }, [fetchPrefectureNames])

  if (prefectureNameError) return <div>{prefectureNameError}</div>
  if (prefectureNamesLoading) return <div>ロード中</div>

  return (
    <div>
      <Filter items={prefectures} onChange={togglePrefecture} />
    </div>
  )
}

const mapStateToProps = ({ prefectureData }) => prefectureData
const mapDispatchToProps = { fetchPrefectureNames, togglePrefecture }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataExplorerContainer)
