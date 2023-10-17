import type { AddressListParams, addAddressParams } from '@/types/address'
import { customRequest } from '@/utils/request'
/**
 * Sends a POST request to the '/member/address' endpoint to add a new address.
 * 新建地址信息的Api接口
 * @param {addAddressParams} data - The data containing the address information.
 * @return {Promise<{ id: string }>} A promise that resolves to an object with the ID of the added address.
 */
export const addAddressApi = (data: addAddressParams) => {
  return customRequest<{ id: string }>({
    url: '/member/address',
    method: 'POST',
    data,
  })
}
/**
 * Retrieves the list of addresses for a member.
 * -获取地址列表的Api接口
 * @return {Promise<CustomResponse<AddressListParams>>} A promise that resolves to the custom response object containing the address list.
 */
export const getAddressListApi = () => {
  return customRequest<AddressListParams[]>({
    url: '/member/address',
  })
}
/**
 * Retrieves the address detail using the specified ID.
 *-获取地址详情的Api接口，用于修改地址
 * @param {string} id - The ID of the address.
 * @return {Promise<AddressListParams>} - A promise that resolves to the address detail.
 */

export const getAddressDetailApi = (id: string) => {
  return customRequest<AddressListParams>({
    url: `/member/address/${id}`,
  })
}
/**
 * Updates the address API for a specific member.
 *更新地址详情的Api
 * @param {string} id - The ID of the member. 需要修改的地址ID
 * @param {addAddressParams} data - The address data to be updated. 更新的地址信息
 * @return {Promise<{ id: string }>} - A promise that resolves to the updated address ID.
 */
export const updateAddressApi = (id: string, data: addAddressParams) => {
  return customRequest<{ id: string }>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}
/**
 * Deletes an address from the member's address list.
 *删除选中的某条收货地址
 * @param {string} id - The ID of the address to delete.
 * @return {Promise} A promise that resolves when the address is successfully deleted.
 */
export const deleteAddressApi = (id: string) => {
  return customRequest({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
