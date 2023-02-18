import { css } from '@emotion/react'

export const root = css`
  background: #fff;
  border-radius: 8px;
  box-shadow: #9e9e9e 0px 0px 4px;
`

export const header = css`
  background: #312e81;
  padding: 12px;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const name = css`
  color: #fefefe;
`

export const subheader = css`
  color: #e2e2e2;
`

export const avatar = css`
  position: absolute;
  right: 12px;
  top: 4px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`

export const qrcode = css`
  position: absolute;
  right: 12px;
  top: 4px;
  img {
    width: 90px;
    height: 60px;
  }
`

export const content = css`
  padding: 10px;
  position: relative;
`

export const contentList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    color: #2d2d2d;
  }
`
