import { customRequest } from '@/utils/request'
import type { ProfileDetail } from '@/types/login'
import type { profileParams } from '@/types/profile'
/**
 * Retrieves the profile details using the API.
 *获取用户信息的Api
 * @return {Promise<ProfileDetail>} A promise that resolves to the profile details.
 */
export const getProfileApi = () => {
  return customRequest<ProfileDetail>({
    url: '/member/profile',
  })
}
/**
 * Uploads an avatar image.
 *上传图片的Api,不适合在小程序中使用
 * @param {string} data - The avatar image data.图片文件的路径
 * @return {Promise<any>} A promise that resolves to the response of the upload request.
 */
export const uploadAvatarApi = (data: string) => {
  return customRequest({
    url: '/member/profile/avatar',
    method: 'POST',
    data,
  })
}

export const putProfileApi = (data: profileParams) => {
  return customRequest<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
