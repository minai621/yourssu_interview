/* 이 파일은 backend API를 모방한 것으로, 수정하면 안 됩니다. */
import { _do_not_use_this_data_directly as _data } from "./_data.js";
const randomDelay = () => Math.round(Math.random() * 2000);

/**
 * @typedef Person
 * @property {number} id 고유 숫자 아이디
 * @property {string} name 본명
 * @property {string} email 이메일
 * @property {string} nickname 닉네임
 */

/**
 * 모든 유어슈 회원의 리스트를 가져오는 API입니다.
 *
 * 50%의 확률로 요청이 실패합니다.
 *
 * @return {Promise<{status: 'success', data:Array<Person>>}
 * status 상태 메시지 및
 *
 * 성공 시 유어슈 회원의 리스트
 *
 * 실패 시 실패한 이유
 */
export function getAllUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 1.1) {
        // 성공
        resolve({
          status: "success",
          data: Array.from(_data),
        });
      } else {
        // 실패
        reject(
          alert('50% 확률로 유어슈 회원들을 불러오는 데 실패하였습니다. (다시 시도하십시오.)')
        );
      }
    }, randomDelay());
  });
}

/**
 * 유어슈 회원을 회원가입시킵니다.
 *
 * 50%의 확률로 요청이 실패합니다.
 *
 * @param {string} name 본명
 * @param {string} email 이메일
 * @param {string} nickname 닉네임
 *
 * @return {Promise<{status: 'success', data:number>}
 * status 상태 메시지 및
 *
 * 성공 시 성공한(회원가입된) 회원 id
 *
 * 실패 시 실패한 이유
 *
 */
export function addOneUser(name, email, nickname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 1.1) {
        // 성공

        const id = _data.length > 0 ? _data[_data.length - 1].id + 1 : 0;
        _data.push({ id, name, email, nickname });

        resolve({
          status: "success",
          data: id,
        });
      } else {
        // 실패
        reject(
          alert('50% 확률로 유어슈 회원들을 불러오는 데 실패하였습니다. (다시 시도하십시오.)')
        );
      }
    }, randomDelay());
  });
}

/**
 * 유어슈 회원을 탈퇴시킵니다.
 *
 * 50%의 확률로 요청이 실패합니다.
 *
 * @param {number} id 아이디
 *
 * @return {Promise<{status: 'success', data:number>}
 * status 상태 메시지 및
 *
 * 성공 시 성공한(탈퇴된) 회원 id
 *
 * 실패 시 실패한 이유
 *
 */
export function removeOneUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 1.1) {
        // 성공
        const idx = _data.findIndex((element) => element.id === id);
        if (idx === -1) {
          reject(alert('50% 확률로 유어슈 회원들을 불러오는 데 실패하였습니다. (다시 시도하십시오.)'));
        } else {
          _data.splice(idx, 1);
          resolve({
            status: "success",
            data: id,
          });
        }
        resolve({
          status: "success",
          data: id,
        });
      } else {
        // 실패
        reject(
          alert('50% 확률로 유어슈 회원들을 불러오는 데 실패하였습니다. (다시 시도하십시오.)')
        );
      }
    }, randomDelay());
  });
}
