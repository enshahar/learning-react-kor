// 영어로 되어있는 시간 표현을 한글로 바꿈
const 초 = 1000,
    분 = 60 * 초,
    시간 = 60 * 분,
    일 = 24 * 시간,
    timeframe = {초, 분, 시간, 일},
    breakpoints = {
        초: 60,
        분: 60,
        시간: 24,
        일: 30
    }

const toDate = timeStampString => new Date(timeStampString)

const getDiff = (timestamp, now) => toDate(now) - toDate(timestamp)

const isUnderTime = (diff, timeframe, time) => diff / timeframe < time

const diffOverTimeframe = (diff, timeframe) => Math.floor(diff/timeframe)

const printResult = (result, timeframeName) =>
    `${result}${timeframeName}`  // 우리말은 `초`에 복수 필요 없음

const checkDate = (diff, timeframeName, underTime, timeframe) =>
    (isUnderTime(diff, timeframe[timeframeName], underTime)) ?
        printResult(diffOverTimeframe(diff,timeframe[timeframeName]), timeframeName) :
        null

const printFullDate = dateTime =>
    `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`

// 날짜를 UTC 기준으로 표시
const printFullUTCDate = dateTime =>
    `${dateTime.getUTCMonth() + 1}/${dateTime.getUTCDate()}/${dateTime.getUTCFullYear()}`
	
const lessThanAMinute = timeString =>
    // 단위가 초이고 60초 아래인 경우에만 1분 이내라고 표시
    timeString.match(/초/) &&  parseFloat(timeString) <= 60 ?  
        '1분 이내' :
        timeString + ' 이전'

const _checkNext = (result, callback) =>
    (result) ?
        lessThanAMinute(result) :
        callback()

const checkNext = ([tfName, ...rest], timeframe, timestamp, now) =>
    _checkNext(
        checkDate(getDiff(timestamp, now), tfName, breakpoints[tfName], timeframe),
        () => howLongAgo(rest, timeframe, timestamp, now)
    )

const howLongAgo = (remainingTimeframe, timeframe, timestamp, now) =>
    (!remainingTimeframe.length) ?
        printFullUTCDate(toDate(timestamp)) :
        checkNext(remainingTimeframe, timeframe, timestamp, now)

export const ago = (timestamp, now=new Date().toString()) =>
    howLongAgo(Object.keys(timeframe), timeframe, timestamp, now)
