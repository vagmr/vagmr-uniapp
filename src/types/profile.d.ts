import type { ProfileDetail } from './login.d.ts'

export type profileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}

//返回参数类型
export type ResultType = {
  id: string | null
  avatar: string | null
  nickname: string | null
  account: string | null
  gender: '男' | '女' | '未知' | null
  birthday: string | null
  fullLocation: string | null
  profession: string | null
}
