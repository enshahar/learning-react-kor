import TimeAgo from '../../../src/components/ui/TimeAgo'

const { shallow } = Enzyme

jest.mock('../../../src/lib/time-helpers', () => ({
    ago() {
        return '1분 이내'
    }
}))

describe("<TimeAgo /> UI Component", () => {

    let wrapper,
        time

    beforeAll(() => {
        time = new Date().toString()
        wrapper = shallow(<TimeAgo timestamp={time}/>)
    })

    it("renders a div.time-ago element", () =>
        expect(wrapper.find("div.time-ago").length).toEqual(1))

    it("writes the results of ago", () =>
        expect(wrapper.text()).toEqual("1분 이내"))

})
