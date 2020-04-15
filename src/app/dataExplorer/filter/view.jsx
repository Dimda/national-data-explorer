import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

/**
 * チェックボックスの一覧。
 * @param {object} フィルターで表示したいアイテムのデータ。nameとselectedというフィールド
 * が必須。nameはチェックオックス名、selectedは選択状況。
 * @param {() => object} クリックにより発動されるファンクション
 */
export const Filter = ({ items, onChange }) => (
  <FormGroup row>
    {
      Object.entries(items).map(
        ([id, { selected, name }]) => (
          <FormControlLabel
            key={'filter-' + id}
            control={
              <Checkbox
                checked={selected}
                onChange={onChange}
                name={id}
                color='primary'
              />
            }
            label={name}
          />
        )
      )
    }
  </FormGroup>
)
