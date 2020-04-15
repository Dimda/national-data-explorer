const apiUrl = 'https://opendata.resas-portal.go.jp/'

/**
 * 地域経済分析システムAPIのラッパー
 * @param {string} path 具体的なAPIエンドポイント(GETリクエストを含む)
 * @return APIからのリスポンスのプロミス
 * @throws {Error}
 */
const fetchNationalStatistics = async path => {
  const fullUrl = apiUrl + path
  const response = await window.fetch(
    fullUrl,
    {
      headers: {
        'X-API-KEY': 'INSERT_API_KEY_HERE'
      }
    }
  )

  if (response.status !== 200) {
    throw new Error(`${fullUrl} から${response.status}のリスポンスが返されました。`)
  }

  const json = await response.json()
  if (!json.result) {
    throw new Error(`${fullUrl} からのリスポンスのbodyの形式が間違っています。`)
  }

  return json.result
}

/**
 * 都道府県名を地域経済分析システムAPIから取得する用のラッパー
 * @return 都道府県名と都道府県番号を含むプロミス
 * @throws {Error}
 */
const fetchPrefectureNames = () =>
  fetchNationalStatistics('api/v1/prefectures/')

export default {
  fetchPrefectureNames
}
