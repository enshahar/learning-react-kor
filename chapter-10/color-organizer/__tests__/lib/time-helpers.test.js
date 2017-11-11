import { ago } from '../../src/lib/time-helpers'
import { compose } from 'redux'

const certify = compose(expect, ago)

// 저자가 Date를 만들 때는 캘리포니아 시간으로 timezone을 지정한 
// 문자열을 쓰고 Date를 문자로 만들 때는 toString()을 사용해서 
// 디폴트 타임존(보통 프로그램이 실행되는 지역으로 설정됨)을 
// 사용하기 때문에 한국 등에서 테스트시 날자 문제가 생길 수 있다.
//
// 아예 timestamp에서 타임존 설정을 빼거나(모든 시간을 로컬 시간으로 포현), 
// 타임존을 특정 시간으로 고정해야 한다.
//
// time-helpers.js에서 문제가 될 수 있는 부분은 `new Date().toString()`과 
// Date객체의 getMonth, getDate, getFullYear 인데, 
// 이를 UTC를 사용하도록 하고 테스트케이스에서 날짜 관련해서 결과를 UTC 기준으로 
// 처리한다.
describe("Time Helpers", () => {

    describe("ago", () => {

        it('1분', () => {
            const now = 'Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)'
            const timestamp = 'Thu Mar 17 2016 18:42:50 GMT-0700 (PDT)'
            certify(timestamp, now).toEqual('1분 이내')
        })

        it("5분", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)'
            const timestamp = 'Thu Mar 17 2016 18:40:08 GMT-0700 (PDT)'
            certify(timestamp, now).toEqual("5분 이전")
        })

        it("2시간", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)'
            const timestamp = 'Thu Mar 17 2016 16:45:08 GMT-0700 (PDT)'
            certify(timestamp, now).toEqual("2시간 이전")
        })

        it("1일", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)'
            const timestamp = 'Wed Mar 16 2016 16:00:00 GMT-0700 (PDT)'
            certify(timestamp, now).toEqual("1일 이전")
        })

        it("5일", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)'
            const timestamp = 'Sat Mar 12 2016 16:40:08 GMT-0700 (PDT)'
            certify(timestamp, now).toEqual("5일 이전")
        })

        it("1달 이전", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)'
            const timestamp = 'Thu Feb 11 2016 15:40:08 GMT-0700 (PDT)'
            // UTC로 timestamp는  2/11/2016임
            certify(timestamp, now).toEqual("2/11/2016") 
        })

        it("1년 이전", () => {
            const timestamp = 'Thu May 17 2012 15:40:08 GMT-0700 (PDT)'
            certify(timestamp).toBeDefined()
        })

    })

})
